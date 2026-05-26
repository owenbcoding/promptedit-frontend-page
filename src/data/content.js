export const site = {
    name: 'PromptEdit',
    tagline: 'The affordable AI marketplace for video creators',
    primaryCta: {
      label: 'Get Started',
      href: '#pricing', // or real signup URL
    },
    secondaryCta: {
      label: 'See what\'s included',
      href: '#tools',
    },
  }
  
  export const nav = {
    links: [
      { label: 'Tools', href: '#tools' },
      { label: 'Pricing', href: '#pricing' },
      { label: 'Library', href: '#library' },
      { label: 'FAQ', href: '#faq' },
    ],
  }
  
  export const hero = {
    eyebrow: 'AI marketplace for creators',
    headline: 'All your AI tools. One place. No subscriptions.',
    subheadline:
      'Access image, video, audio, and editing AI in a single interface. Pay only for what you use with credits — like buying gas, not leasing a car.',
    stats: [
      { value: '100k+', label: 'Editing templates' },
      { value: 'No sub', label: 'Required to start' },
      { value: 'Pay-go', label: 'Credits only' },
    ],
  }
  
  export const intro = {
    id: 'intro',
    title: 'Stop juggling subscriptions',
    paragraphs: [
      'Most AI tools want a monthly bill before you even know if they fit your workflow.',
      'PromptEdit is a grocery store for AI: one login, one interface, and credits you spend only when you generate.',
    ],
    benefits: [
      'Try tools without signing up for five different sites',
      'Use Veo, Kling, Nano Banana, ElevenLabs, and more from one dashboard',
      'Add more credits anytime — no long-term contract',
    ],
  }
  
  export const trust = {
    id: 'trust',
    title: 'Built for creators who ship fast',
    stats: [
      { value: '100,000+', label: 'Templates & packs' },
      { value: '60,000+', label: 'Sound effects' },
      { value: '4,000+', label: 'LUT color presets' },
      { value: 'Unlimited', label: 'Downloads with subscription' },
    ],
    testimonials: [
      {
        quote:
          'My daughter and I got more editing work done in 3 hours than we normally do in 3 days!',
        name: 'Hilda Schlueter',
        role: 'Online Course Creator',
      },
      {
        quote:
          "My videos wouldn't look HALF as good without the template library.",
        name: 'Matt Lilley',
        role: 'Content Creator',
      },
      {
        quote:
          "I don't need any other digital asset subscriptions.",
        name: 'Brady Hales',
        role: 'Content Creator',
      },
    ],
  }
  
  export const toolCategories = {
    id: 'tools',
    sectionTitle: 'Everything you need to create with AI',
    sectionSubtitle: 'Pick a category — same credits work across the whole site.',
    categories: [
      {
        id: 'image',
        icon: '🖼', // replace with SVG later
        title: 'AI Image Tools',
        subtitle: 'What you can create',
        useCases: [
          { title: 'AI Clones', description: 'Consistent character visuals' },
          { title: 'Social posts', description: 'Scroll-stopping graphics' },
          { title: 'Thumbnails', description: 'YouTube-ready covers' },
          { title: 'Ads & design', description: 'Campaign-ready assets' },
        ],
        featuredModels: ['Nano Banana', 'Ideogram', 'Grok'], // optional
      },
      {
        id: 'video',
        icon: '🎬',
        title: 'AI Video Tools',
        subtitle: 'What you can create',
        useCases: [
          { title: 'Clone videos', description: 'Talking-head & avatar content' },
          { title: 'Reels & TikToks', description: 'Short-form at speed' },
          { title: 'Cinematic shots', description: 'Film-style generations' },
          { title: 'Video ads', description: 'Promo-ready clips' },
        ],
        featuredModels: ['Veo', 'Kling', 'Seedance', 'HeyGen'],
      },
      {
        id: 'audio',
        icon: '🔊',
        title: 'AI Audio Tools',
        subtitle: 'What you can create',
        useCases: [
          { title: 'Voiceovers', description: 'Natural narration' },
          { title: 'Voice clones', description: 'Your voice, scaled' },
          { title: 'Sound effects', description: 'Custom SFX on demand' },
          { title: 'Music', description: 'Royalty-free tracks' },
        ],
        featuredModels: ['ElevenLabs', 'Suno'],
      },
      {
        id: 'plugins',
        icon: '🧩',
        title: 'AI Editing Plugins',
        subtitle: 'Inside your editor — no browser tab',
        useCases: [
          {
            title: 'Generate in Premiere, DaVinci, Final Cut…',
            description:
              'Plugins open inside your editing software. Generate assets and drop them straight onto your timeline.',
          },
        ],
        layout: 'wide', // hint for component: single feature card, not grid
      },
    ],
  }
  
  export const pricing = {
    id: 'pricing',
    title: 'Start creating today',
    subtitle: 'No subscription required to try tools. Pick the offer that fits you.',
    plans: [
      {
        id: 'student',
        badge: 'Student offer',
        name: 'Credit starter pack',
        price: '$98',
        priceDetail: 'one-time',
        creditValue: '$110 in AI credits',
        savings: 'Save 10%',
        features: [
          'Use credits on any AI tool',
          'No subscription required',
          'Perfect for testing workflows',
        ],
        cta: { label: 'Claim student offer', href: '[EDIT signup URL]' },
        highlighted: false,
      },
      {
        id: 'monthly',
        badge: 'Best value',
        name: 'Creator subscription',
        price: '$39',
        priceDetail: '/month · cancel anytime',
        creditValue: '$49 in credits every month',
        savings: '10% off extra credits + bonuses',
        features: [
          'Unlimited template library access',
          'Faster generation speeds',
          'Run multiple generations at once',
          'Lifetime 20% boost on monthly credits',
        ],
        cta: { label: 'Start monthly plan', href: '[EDIT signup URL]' },
        highlighted: true,
      },
    ],
    guarantee:
      '30-day money-back guarantee on unused credits. Cancel anytime.',
  }
  
  export const libraryPreview = {
    id: 'library',
    title: 'Content Creator Templates Library',
    subtitle:
      'Included with a monthly subscription — 100,000+ assets that save hours on every edit.',
    // Pick 2–3 tabs max (reference has 5+; you trim the fat)
    tabs: [
      {
        id: 'luts',
        label: 'LUTs',
        count: '4,000+',
        headline: 'Cinematic color in seconds',
        body: 'Drag-and-drop look-up tables that work in any editor. Professional color without months of grading practice.',
        previewLabels: ['Film look', 'Warm tone', 'Teal & orange'], // placeholder thumbs
      },
      {
        id: 'sfx',
        label: 'Sound FX',
        count: '60,000+',
        headline: 'Hear the difference sound makes',
        body: 'Organized categories and search. Drag, drop, done — works in every major NLE.',
        previewLabels: ['Whoosh', 'Impact', 'Ambient'],
      },
      {
        id: 'text',
        label: 'Text animations',
        count: '3,000+',
        headline: 'Scroll-stopping titles',
        body: 'Pick a layout, type your message, customize. Pro motion graphics without a motion designer.',
        previewLabels: ['Lower third', 'Kinetic type', 'Social caption'],
      },
    ],
  }
  
  export const audience = {
    id: 'for-you',
    title: 'PromptEdit is for you if…',
    items: [
      'You want every major AI tool in one place with a simple interface',
      'You\'re learning to edit but still want a pro look fast',
      'You\'re tired of buying $130 packs when you only need one asset',
      'You want unlimited downloads and commercial use cleared in one fee',
    ],
  }
  
  export const faq = {
    id: 'faq',
    title: 'Common questions',
    items: [
      {
        question: 'What is PromptEdit?',
        answer:
          'A marketplace where you access AI image, video, audio, and editing tools with credits instead of stacking subscriptions.',
      },
      {
        question: 'Is there a quality difference vs. using each tool directly?',
        answer:
          'No — you\'re accessing the same models on a pay-per-use basis.',
      },
      {
        question: 'Can I use creations commercially?',
        answer:
          'Yes. Active membership clears downloads and generations for commercial projects.',
      },
      {
        question: 'What is the Templates Library?',
        answer:
          '100,000+ royalty-free LUTs, SFX, text animations, overlays, and backgrounds. Unlimited downloads with subscription.',
      },
      {
        question: 'Can I cancel anytime?',
        answer:
          'Yes. Cancel through the site or email support. 30-day refund on unused credits.',
      },
    ],
  }
  
  export const finalCta = {
    title: 'Ready to create without another subscription?',
    subtitle: 'Join thousands of creators using PromptEdit as their AI hub.',
    cta: site.primaryCta,
  }
  
  export const footer = {
    copyright: '© 2025 PromptEdit',
    links: [
      { label: 'Terms', href: '[EDIT]' },
      { label: 'Privacy', href: '[EDIT]' },
    ],
  }