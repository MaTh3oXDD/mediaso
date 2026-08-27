<#
.SYNOPSIS
    Wdrozenie mediaso na VPS z PowerShell.

.DESCRIPTION
    Buduje aplikacje lokalnie, pakuje docs/ do archiwum, wysyla je przez scp
    i rozpakowuje na serwerze jako nowe wydanie. Symlink "current" przestawia
    sie dopiero na koncu, wiec strona nigdy nie stoi w polowie skopiowanych
    plikow. Ostatnie 5 wydan zostaje na wypadek cofniecia.

    Uzywa tar, scp i ssh - wszystkie sa wbudowane w Windows 10+.

.EXAMPLE
    .\deploy\deploy.ps1

.EXAMPLE
    .\deploy\deploy.ps1 -DeployHost 1.2.3.4 -DeployUser ubuntu
#>

[CmdletBinding()]
param(
    [string]$DeployHost = '54.38.204.179',
    [string]$DeployUser = 'ubuntu',
    [int]$DeployPort = 22,
    [string]$DeployPath = '/var/www/mediaso',
    [int]$KeepReleases = 5
)

$ErrorActionPreference = 'Stop'

# Natywne narzedzia (npm, tar, ssh) pisza na stderr takze ostrzezenia. W PS 5.1
# taki zapis staje sie bledem krytycznym przy ErrorActionPreference='Stop',
# wiec przy ich wywolaniach schodzimy na 'Continue' i patrzymy na kod wyjscia.
function Invoke-Native {
    param(
        [Parameter(Mandatory)][scriptblock]$Command,
        [Parameter(Mandatory)][string]$Stage
    )

    $previous = $ErrorActionPreference
    $ErrorActionPreference = 'Continue'
    try {
        & $Command
    }
    finally {
        $ErrorActionPreference = $previous
    }

    if ($LASTEXITCODE -ne 0) {
        throw "$Stage nie powiodlo sie (kod $LASTEXITCODE)."
    }
}

$repoRoot = Split-Path -Parent $PSScriptRoot
$buildDir = Join-Path $repoRoot 'docs'
$release = Get-Date -Format 'yyyyMMddHHmmss'
$target = "$DeployPath/releases/$release"
$remoteTar = "/tmp/mediaso-$release.tar.gz"
$localTar = Join-Path $env:TEMP "mediaso-$release.tar.gz"

Set-Location $repoRoot

Write-Host '==> Build' -ForegroundColor Cyan
Invoke-Native -Stage 'Build' -Command { npm run build }

if (-not (Test-Path (Join-Path $buildDir 'index.html'))) {
    throw "Brak $buildDir\index.html - build nie wyprodukowal strony."
}
if (-not (Test-Path (Join-Path $buildDir 'api\contact.php'))) {
    throw "Brak $buildDir\api\contact.php - sprawdz public\api\."
}

Write-Host "==> Pakowanie do $localTar" -ForegroundColor Cyan
# Archiwum przez plik tymczasowy: potok PowerShella 5.1 psuje dane binarne.
Invoke-Native -Stage 'Pakowanie tarem' -Command { tar -czf $localTar -C $buildDir . }

try {
    Write-Host "==> Wysylka na $DeployUser@$DeployHost" -ForegroundColor Cyan
    Invoke-Native -Stage 'Wysylka scp' -Command {
        scp -P $DeployPort $localTar "$DeployUser@${DeployHost}:$remoteTar"
    }

    # Atomiczne przelaczenie: ln -n nie wchodzi do istniejacego symlinka.
    $keep = $KeepReleases + 1
    $remoteCmd = @"
set -e
mkdir -p '$target'
tar -xzf '$remoteTar' -C '$target'
rm -f '$remoteTar'
ln -sfn '$target' '$DeployPath/current'
cd '$DeployPath/releases'
ls -1dt */ 2>/dev/null | tail -n +$keep | xargs -r rm -rf
echo "Wdrozone: $target"
"@

    # Here-string PS ma konce linii CRLF. Bash dostalby kazda komende z
    # doklejonym znakiem CR (set -e + CR = invalid option), wiec na LF.
    $remoteCmd = $remoteCmd -replace "`r`n", "`n"

    Write-Host "==> Wydanie $release" -ForegroundColor Cyan
    Invoke-Native -Stage 'Rozpakowanie na serwerze' -Command {
        ssh -p $DeployPort "$DeployUser@$DeployHost" $remoteCmd
    }
}
finally {
    if (Test-Path $localTar) {
        Remove-Item $localTar -Force
    }
}

Write-Host "==> Gotowe: https://$DeployHost/" -ForegroundColor Green
