export const en = {
  nav: {
    home: 'Home',
    services: 'Services',
    about: 'About',
    portfolio: 'Portfolio',
    contact: 'Contact',
  },
  home: {
    hero: {
      title: 'Your clinic deserves more',
      subtitle: 'We build websites and manage social media for medical practices. Help your clinic attract new patients.',
      cta1: 'Our services',
      cta2: 'Get in touch',
    },
    why: {
      title: 'Why mediaso?',
      items: [
        { icon: '🏥', title: 'Healthcare Specialists', desc: 'We know the medical industry and understand what patients look for online.' },
        { icon: '📊', title: 'All-in-One Approach', desc: 'Website + social media = a consistent, professional image for your practice.' },
        { icon: '📈', title: 'Measurable Results', desc: 'We report results. You always know what your money is doing.' },
      ],
    },
    servicesPreview: {
      title: 'Our Services',
      web: {
        title: 'Websites',
        desc: 'Modern, fast websites for medical practices. Responsive, SEO-friendly, with a content management system.',
        link: 'Learn more',
      },
      social: {
        title: 'Social Media',
        desc: "We manage and rebuild your practice's profiles on Facebook, Instagram, and Google.",
        link: 'Learn more',
      },
    },
    stats: {
      clients: { value: '40+', label: 'Clients' },
      projects: { value: '80+', label: 'Projects' },
      years: { value: '5+', label: 'Years of experience' },
    },
    cta: {
      title: 'Ready for a change?',
      subtitle: 'Schedule a free consultation and find out how we can help your practice.',
      button: "Let's work together",
    },
  },
  services: {
    hero: {
      title: 'Our Services',
      subtitle: 'Complete digital solutions for medical practices',
    },
    web: {
      title: 'Websites',
      subtitle: "A professional website is your clinic's calling card on the internet.",
      features: [
        'Custom graphic design',
        'Responsive on every device',
        'SEO optimization',
        'Content management system (CMS)',
        'Fast loading times',
        'Google Maps and calendar integration',
        'SSL certificate',
        'Technical support and updates',
      ],
    },
    social: {
      title: 'Social Media',
      subtitle: 'Build a social media presence and attract new patients.',
      features: [
        'Current profile audit',
        'Content strategy development',
        'Content and graphic creation',
        'Facebook and Instagram management',
        'Google My Business management',
        'Monthly reporting',
        'Comment and message handling',
        'Meta Ads campaigns',
      ],
    },
    process: {
      title: 'How we work',
      steps: [
        { num: '01', title: 'Analysis', desc: 'We learn about your practice, your competition, and your target audience.' },
        { num: '02', title: 'Strategy', desc: 'We develop a plan tailored to your goals.' },
        { num: '03', title: 'Execution', desc: 'We implement agreed solutions on time and on budget.' },
        { num: '04', title: 'Optimization', desc: 'We monitor results and continuously improve performance.' },
      ],
    },
    pricing: {
      title: 'Pricing',
      note: '* Prices exclude VAT. Every project is quoted individually — contact us.',
      plans: [
        {
          name: 'Website',
          price: 'from €800',
          period: 'one-time',
          desc: 'A professional website for your medical practice.',
          features: ['Custom graphic design', 'Responsive on every device', 'Basic SEO', 'CMS panel', 'SSL certificate'],
        },
        {
          name: 'Social — Start',
          price: '€500',
          period: 'per month',
          desc: 'Consistent social media presence for your practice.',
          features: ['4 posts per week', 'Facebook + Instagram', 'Monthly reporting', 'Comment handling'],
        },
        {
          name: 'Social — Scale',
          price: '€1 000',
          period: 'per month',
          desc: 'Full management with ad campaigns and a dedicated account manager.',
          features: ['8 posts per week', 'Facebook + Instagram + Google', 'Meta Ads campaigns', 'Dedicated account manager'],
        },
      ],
    },
    cta: { title: "Let's start together", button: 'Get in touch' },
  },
  about: {
    hero: {
      title: 'About Us',
      subtitle: 'We know the medical industry inside out',
    },
    mission: {
      title: 'Our Mission',
      text: "mediaso is a digital agency built for medical practices. We know that doctors and clinic managers have more important things to worry about than marketing. That's why we take it on — comprehensively, reliably, and with measurable results.",
    },
    values: {
      title: 'Our Values',
      items: [
        { icon: '🎯', title: 'Specialization', desc: "We focus exclusively on the medical industry. That's our advantage." },
        { icon: '🤝', title: 'Partnership', desc: 'We treat clients as partners, not invoice numbers.' },
        { icon: '📋', title: 'Reliability', desc: 'We meet deadlines and keep our promises. Always.' },
        { icon: '📈', title: 'Results', desc: "Results matter, not the aesthetics of reports." },
      ],
    },
    team: {
      title: 'Our Team',
      members: [
        { name: 'Anna Kowalska', role: 'CEO & Web Strategist' },
        { name: 'Piotr Nowak', role: 'Social Media Manager' },
        { name: 'Marta Wiśniewska', role: 'Graphic Designer' },
        { name: 'Tomasz Zając', role: 'SEO Specialist' },
      ],
    },
  },
  portfolio: {
    hero: {
      title: 'Portfolio',
      subtitle: 'Our work in the medical industry',
    },
    filters: { all: 'All', web: 'Websites', social: 'Social Media' },
    projects: [
      { title: 'Przychodnia Zdrowie Wrocław', tags: ['web', 'social'] as ('web'|'social')[], result: '+180% organic traffic', desc: 'New website + social media management for 12 months.' },
      { title: 'Centrum Medyczne Vita Kraków', tags: ['web'] as ('web'|'social')[], result: '+220% conversions', desc: 'Website with online booking system and CMS.' },
      { title: 'Gabinet Stomatologiczny SmileUp', tags: ['social'] as ('web'|'social')[], result: '+350% reach', desc: 'Profile rebuild and Meta ad campaigns.' },
      { title: 'Poradnia Kardiologiczna Gdańsk', tags: ['web', 'social'] as ('web'|'social')[], result: '2x more patients', desc: 'Complete digital presence from scratch.' },
      { title: 'Klinika Ortopedyczna Warszawa', tags: ['web'] as ('web'|'social')[], result: 'Top 3 on Google', desc: 'Website optimized for local search terms.' },
      { title: 'Centrum Rehabilitacji Łódź', tags: ['social'] as ('web'|'social')[], result: '+500 followers/month', desc: 'Content strategy and Instagram management.' },
    ],
  },
  contact: {
    hero: {
      title: 'Contact',
      subtitle: "Let's talk about your practice",
    },
    form: {
      name: 'Full name',
      email: 'Email address',
      company: 'Practice / company name',
      message: 'Message',
      send: 'Send message',
      success: "Message sent! We'll get back to you within 24 hours.",
    },
    info: {
      title: 'Contact details',
      email: 'kontakt@mediaso.pl',
      phone: '+48 500 000 000',
      location: 'Poland — we work remotely across the country',
    },
  },
  footer: {
    tagline: 'Digital marketing for medical practices.',
    nav: { title: 'Navigation' },
    services: { title: 'Services', web: 'Websites', social: 'Social Media' },
    copyright: '© 2026 mediaso. All rights reserved.',
  },
} as const;
