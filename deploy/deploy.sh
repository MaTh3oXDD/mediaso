#!/usr/bin/env bash
#
# Wdrozenie mediaso na VPS.
#
#   ./deploy/deploy.sh
#
# Buduje aplikacje lokalnie, pakuje docs/ do archiwum i rozpakowuje je na
# serwerze jako nowe wydanie. Symlink "current" przestawia sie dopiero na
# koncu, wiec strona nigdy nie stoi w polowie skopiowanych plikow.
#
# Uzywa ssh i tar - rsync nie jest potrzebny (Git Bash na Windows go nie ma).
#
# Konfiguracja przez zmienne srodowiskowe, np.:
#   DEPLOY_HOST=1.2.3.4 DEPLOY_USER=deploy ./deploy/deploy.sh

set -euo pipefail

DEPLOY_HOST="${DEPLOY_HOST:-54.38.204.179}"
DEPLOY_USER="${DEPLOY_USER:-ubuntu}"
DEPLOY_PORT="${DEPLOY_PORT:-22}"
DEPLOY_PATH="${DEPLOY_PATH:-/var/www/mediaso}"
KEEP_RELEASES="${KEEP_RELEASES:-5}"

# Git Bash inaczej zamieni sciezki uniksowe w argumentach na windowsowe.
export MSYS_NO_PATHCONV=1
export MSYS2_ARG_CONV_EXCL='*'

REPO_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
BUILD_DIR="$REPO_ROOT/docs"
RELEASE="$(date +%Y%m%d%H%M%S)"

cd "$REPO_ROOT"

echo "==> Build"
npm run build

if [ ! -f "$BUILD_DIR/index.html" ]; then
  echo "Brak $BUILD_DIR/index.html - build nie wyprodukowal strony." >&2
  exit 1
fi

if [ ! -f "$BUILD_DIR/api/contact.php" ]; then
  echo "Brak $BUILD_DIR/api/contact.php - sprawdz public/api/." >&2
  exit 1
fi

echo "==> Wydanie $RELEASE -> $DEPLOY_USER@$DEPLOY_HOST:$DEPLOY_PATH"

TARGET="$DEPLOY_PATH/releases/$RELEASE"

# Polecenie idzie argumentem, nie heredokiem - stdin ssh zajmuje strumien tara.
# Atomiczne przelaczenie: ln -n nie wchodzi do istniejacego symlinka.
# Zostawiamy kilka poprzednich wydan na wypadek cofniecia.
REMOTE_CMD="set -e
mkdir -p '$TARGET'
tar -xzf - -C '$TARGET'
ln -sfn '$TARGET' '$DEPLOY_PATH/current'
cd '$DEPLOY_PATH/releases'
ls -1dt */ 2>/dev/null | tail -n +$((KEEP_RELEASES + 1)) | xargs -r rm -rf
echo \"Wdrozone: $TARGET\""

# Archiwum leci strumieniem przez ssh; nic nie zostaje na dysku lokalnie.
tar -czf - -C "$BUILD_DIR" . \
  | ssh -p "$DEPLOY_PORT" "$DEPLOY_USER@$DEPLOY_HOST" "$REMOTE_CMD"

echo "==> Gotowe: https://$DEPLOY_HOST/"
