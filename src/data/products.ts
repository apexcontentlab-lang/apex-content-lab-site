export type ProductCategory =
  | 'Lead Magnet'
  | 'Welcome Email System'
  | 'Practical Resource Kit';

export interface DigitalProduct {
  id: string;
  slug: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;

  price: {
    display: string;
    amount: number;
    currency: string;
    isFree?: boolean;
  };

  category: ProductCategory;
  isBundle?: boolean;
  bundleValue?: string;
  savings?: string;
  bundleCta?: string;

  isPopular?: boolean;
  isFlagship?: boolean;

  accentColor: {
    bg: string;
    text: string;
    border: string;
  };

  features: string[];
  deliverables: string[];
  targetAudience: string;

  deliveryType: 'mailerlite' | 'gumroad';

  mailerliteUrl?: string;
  gumroadUrl?: string;
  gumroadProductId?: string;

  coverImage?: string;
}

const gumroad = (slug: string) =>
  `https://apexlab1.gumroad.com/l/${slug}`;

const welcomeAccent = {
  bg: 'bg-blue-50',
  text: 'text-[var(--color-apex-blue,#2563EB)]',
  border: 'border-blue-200',
};

const resourceAccent = {
  bg: 'bg-cyan-50',
  text: 'text-[var(--color-growth-cyan,#0891B2)]',
  border: 'border-cyan-200',
};

export const productsData: DigitalProduct[] = [
  // =========================================================
  // 01 — LEAD MAGNET BLUEPRINT KIT
  // =========================================================

  {
    id: 'lead-magnet-blueprint',
    slug: 'lead-magnet-blueprint',
    title: 'Lead Magnet Blueprint Kit',
    badge: 'Premium Blueprint',
    tagline:
      'Build a Lead Magnet That Attracts Qualified Leads & Grows Your Email List.',
    description:
      'A complete step-by-step workbook that walks you through planning, designing, launching, and optimizing a professional lead magnet—from your first idea to a fully functioning lead generation system.',
    price: {
      display: '$35',
      amount: 35,
      currency: 'USD',
    },
    category: 'Lead Magnet',
    isPopular: true,
    isFlagship: false,
    accentColor: resourceAccent,
    features: [
      'Foundations and lead magnet fundamentals',
      'Lead magnet types and customer pain-point worksheets',
      'Lead magnet decision matrix and irresistible offer formula',
      'Headline formulas, examples, exercises, and 20 headline examples',
      'Lead magnet page planning, content planning, and first-draft guidance',
      'Professional design principles, fonts, brand colors, and layout checklist',
      'Landing page flow, headline, benefits, CTA, and planning worksheet',
      '5-email welcome sequence, planner, cheat sheet, launch, measurement, and optimization',
    ],
    deliverables: [
      'Lead Magnet Blueprint Kit workbook',
      'Lead magnet planning worksheets and decision matrix',
      'Headline, landing-page, and welcome-sequence frameworks',
      'Launch, measurement, review, and optimization checklists',
    ],
    targetAudience:
      'Businesses, coaches, consultants, creators, service providers, and teams that want to build a professional lead magnet and connect it to email lead generation.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('ifevv'),
    coverImage: '/image/we/products/playbook-cover.png',
  },

  // =========================================================
  // WELCOME EMAIL SYSTEM — 7 STANDALONES + BUNDLE
  // =========================================================

  {
    id: '10-welcome-email-templates',
    slug: '10-welcome-email-templates',
    title: '10 Welcome Email Templates',
    badge: 'Welcome Email System',
    tagline:
      '10 ready-to-customize emails for building a stronger subscriber welcome journey.',
    description:
      'The 10 Welcome Email Templates give you a practical sequence for communicating with new subscribers without starting every email from a blank page. The templates cover the key stages of a subscriber’s first interactions with your brand.',
    price: {
      display: '$25',
      amount: 25,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    accentColor: welcomeAccent,
    features: [
      '10 Welcome Email Templates',
      'Subject line examples',
      'Hook structures',
      'CTA Bank',
      'Email customization worksheet',
      'Email planning guidance',
      'Practical examples',
      'Final email QA checklist',
    ],
    deliverables: [
      '10 Welcome Email Templates',
      'Subject line examples',
      'Hook and CTA resources',
      'Email customization and QA guidance',
    ],
    targetAudience:
      'Coaches, consultants, agencies, service businesses, NGOs, creators, course creators, personal brands, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('10-welcome-email-templetes'),
    coverImage: '/image/we/products/10-welcome-email-templetes.png',
  },

  {
    id: 'welcome-email-writing-kit',
    slug: 'welcome-email-writing-kit',
    title: 'Welcome Email Writing Kit',
    badge: 'Welcome Email System',
    tagline:
      'Welcome Email Templates to Start Your Subscriber Journey.',
    description:
      'A practical writing kit with templates, subject lines, preheaders, frameworks, examples, CTA formulas, storytelling structure, editing guidance, and an email flow/workflow to move from a blank page to a finished welcome email.',
    price: {
      display: '$22',
      amount: 22,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    accentColor: welcomeAccent,
    features: [
      'Welcome Email writing templates',
      'Subject lines and preheader examples',
      'Welcome Email frameworks',
      'Opening, main message, value, transition, CTA, and closing structure',
      'Practical examples',
      'CTA library, worksheet, and formulas',
      'Storytelling structure',
      'Email editing checklist and writing workflow',
    ],
    deliverables: [
      'Welcome Email Writing Kit',
      'Writing frameworks and examples',
      'CTA library and formulas',
      'Editing checklist and workflow',
    ],
    targetAudience:
      'Businesses and marketers that need practical structure and guidance for writing welcome emails.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-email-writing-kit'),
    coverImage: '/image/we/products/welcome-email-writing-kit.png',
  },

  {
    id: 'welcome-sequence-implementation',
    slug: 'welcome-sequence-implementation',
    title: 'Welcome Sequence Implementation',
    badge: 'Welcome Email System',
    tagline:
      'Build Your 11-Stage Welcome Email Sequence.',
    description:
      'Learn how to turn individual welcome emails into a structured 11-stage welcome sequence using practical frameworks, examples, CTAs, and implementation steps.',
    price: {
      display: '$15',
      amount: 15,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    accentColor: welcomeAccent,
    features: [
      '11-stage welcome sequence structure',
      'Email flow and sequence logic',
      'Practical examples',
      'CTA examples',
      'Implementation framework',
      'Step-by-step sequence setup guidance',
      'Implementation guide and worksheet',
      'Launch checklist',
    ],
    deliverables: [
      '11-Stage Welcome Sequence Framework',
      'Sequence Structure',
      'Implementation Guide and Worksheet',
      'Launch Checklist',
    ],
    targetAudience:
      'Businesses building or improving subscriber onboarding after a subscriber joins their email list.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-sequence-implementation'),
    coverImage: '/image/we/products/welcome-sequence-implementation.png',
  },

  {
    id: 'welcome-email-automation-implementation',
    slug: 'welcome-email-automation-implementation',
    title: 'Welcome Email Automation & Implementation',
    badge: 'Welcome Email System',
    tagline:
      'Set up an automated welcome email system from trigger to delivery, diagnosis, and optimization.',
    description:
      'Set up an automated welcome email system using practical frameworks, examples, CTAs, and step-by-step implementation guidance, including triggers, timing, actions, testing, diagnosis, review, and system management.',
    price: {
      display: '$22',
      amount: 22,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    accentColor: welcomeAccent,
    features: [
      'Welcome automation structure',
      'Trigger and workflow framework',
      'Complete 10-email map',
      'Rules and mapping worksheet',
      'Automation audit and implementation action plan',
      'Workflow structure and testing process',
      'Reading signals and diagnosis',
      'Optimization loop, system review, optimization plan, and system management',
    ],
    deliverables: [
      'Welcome Automation & Implementation framework',
      'Complete 10-email map',
      'Mapping worksheet and automation audit',
      'Implementation action plan and testing process',
    ],
    targetAudience:
      'Businesses and marketers setting up or improving an automated welcome email journey inside an email marketing platform.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-email-automation-implementation'),
    coverImage:
      '/image/we/products/welcome-email-automation-implementation.png',
  },

  {
    id: 'segmentation-personalization',
    slug: 'segmentation-personalization',
    title: 'Segmentation & Personalization',
    badge: 'Welcome Email System',
    tagline:
      'Organize & Personalize Your Email Audience.',
    description:
      'Learn how to organize subscribers into relevant groups and personalize email communication using practical frameworks, examples, audience grouping guidance, and implementation steps.',
    price: {
      display: '$16',
      amount: 16,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    accentColor: welcomeAccent,
    features: [
      'Segmentation and personalization framework',
      'Audience grouping guidance',
      'Subscriber source mapping',
      'Interest and behavior segmentation',
      'Engagement-based segmentation',
      'Customer status segmentation',
      'Personalization opportunities',
      'Implementation guidance',
    ],
    deliverables: [
      'Segmentation & Personalization framework',
      'Audience grouping guidance',
      'Segmentation worksheet',
      'Implementation guidance',
    ],
    targetAudience:
      'Businesses and marketers that want to make email communication more relevant through practical audience segmentation and personalization.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('segmentation-personalization'),
    coverImage: '/image/we/products/segmentation-personalization.png',
  },

  {
    id: 'welcome-email-system-bundle',
    slug: 'welcome-email-system-bundle',
    title: 'Welcome Email System Bundle',
    badge: 'Complete Bundle',
    tagline:
      'Build Your Complete Welcome Email System.',
    description:
      'Get the complete Welcome Email System collection with templates, writing frameworks, sequence implementation, automation, segmentation, and personalization resources in one bundle.',
    price: {
      display: '$110',
      amount: 110,
      currency: 'USD',
    },
    category: 'Welcome Email System',
    isBundle: true,
    bundleValue: '$129',
    savings: '$19',
    bundleCta: 'Get the Complete Welcome Email System',
    isPopular: true,
    isFlagship: true,
    accentColor: welcomeAccent,
    features: [
  '10 Welcome Email Templates — $25',
  'Welcome Email Writing Kit — $22',
  'Welcome Sequence Implementation — $15',
  'Welcome Email Automation & Implementation — $22',
  'Segmentation & Personalization — $16',
  'Welcome Email Conversion Element — $13',
  'Welcome Email Testing & Optimization — $16',
  'Plan → Write → Sequence → Automate → Segment → Convert → Test → Optimize',
],
    
    deliverables: [
  'Complete Welcome Email System — 7 standalone resources',
],
    targetAudience:
      'Businesses, marketers, coaches, consultants, agencies, creators, NGOs, and small teams that want a complete welcome email system.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-email-system'),
    coverImage: '/image/we/products/welcome-email-system.png',
  },

  // =========================================================
  // PRACTICAL RESOURCE KIT
  // =========================================================

  {
    id: 'welcome-email-template-writing-worksheet',
    slug: 'welcome-email-template-writing-worksheet',
    title: 'Welcome Email Template & Writing Worksheet',
    badge: 'Practical Resource',
    tagline:
      'Plan and write a stronger welcome email without starting from a blank page.',
    description:
      'A practical worksheet for planning your welcome email from audience and objective through subject line, opening, value, transition, CTA, and final review.',
    price: {
      display: '$10',
      amount: 10,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Welcome Email planning framework',
      'Audience and objective prompts',
      'Subject line and preheader planning',
      'Opening and hook structure',
      'Main message and value planning',
      'Transition and CTA planning',
      'Closing structure',
      'Final review checklist',
    ],
    deliverables: [
      'Welcome Email Template & Writing Worksheet',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-email-template-writing-worksheet'),
    coverImage:
      '/image/we/products/welcome-email-template-writing-worksheet.png',
  },

  {
    id: 'subject-line-swipe-file',
    slug: 'subject-line-swipe-file',
    title: 'Subject Line Swipe File',
    badge: 'Practical Resource',
    tagline:
      'Build stronger subject lines with practical formulas and examples.',
    description:
      'A practical swipe file for generating and reviewing welcome email subject lines using proven structural patterns, examples, and planning prompts.',
    price: {
      display: '$7',
      amount: 7,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Subject line framework',
      'Subject line formulas',
      'Practical examples',
      'Curiosity-based structures',
      'Benefit-focused structures',
      'Clarity and relevance checks',
      'Subject line planning prompts',
      'Final subject line review',
    ],
    deliverables: [
      'Subject Line Swipe File',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('subject-lind-wipe-File'),
    coverImage: '/image/we/products/subject-line-wipe-file.png',
  },

  {
    id: 'welcome-email-hooks-cta-bank',
    slug: 'welcome-email-hooks-cta-bank',
    title: 'Welcome Email Hooks & CTA Bank',
    badge: 'Practical Resource',
    tagline:
      'Open stronger and guide subscribers toward the next action.',
    description:
      'A practical resource for creating stronger welcome email openings and calls to action using hook structures, CTA formulas, examples, and implementation prompts.',
    price: {
      display: '$15',
      amount: 15,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Welcome Email hook framework',
      'Hook examples',
      'Opening structures',
      'CTA framework',
      'CTA examples',
      'Action-oriented CTA formulas',
      'Hook → value → CTA structure',
      'CTA review checklist',
    ],
    deliverables: [
      'Welcome Email Hooks & CTA Bank',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-email-hooks-cta-bank'),
    coverImage: '/image/we/products/welcome-email-hooks-cta-bank.png',
  },

  {
    id: 'benefit-offer-transition-kit',
    slug: 'benefit-offer-transition-kit',
    title: 'Benefit & Offer Transition Kit',
    badge: 'Practical Resource',
    tagline:
      'Move from Providing Value to Presenting an Offer Without Making Your Welcome Emails Feel Abrupt.',
    description:
      'Learn how to move from providing value to presenting an offer naturally using benefit-focused messaging, transition frameworks, examples, practical prompts, and CTA guidance.',
    price: {
      display: '$7',
      amount: 7,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Benefit-focused messaging framework',
      'Benefit examples',
      'Offer-transition frameworks',
      'Transition examples',
      'Practical prompts',
      'Guidance for connecting value to an offer',
      'Benefit → offer → CTA structure',
      'Transition review for clarity and relevance',
    ],
    deliverables: [
      'Benefit & Offer Transition Kit',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('benefit-offer-transition-kit'),
    coverImage: '/image/we/products/benefit-offer-transition-kit.png',
  },

  {
    id: 'welcome-email-system-automation-mapping-sheet',
    slug: 'welcome-email-system-automation-mapping-sheet',
    title: 'Welcome Email System Automation Mapping Sheet',
    badge: 'Practical Resource',
    tagline:
      'Map Your Welcome Email Automation from Trigger to Delivery, Follow-Up, Conditions, and Subscriber Actions.',
    description:
      'Plan your welcome email automation clearly before setting it up. This mapping sheet helps you organize triggers, email steps, delays, subscriber actions, conditions, tags, segments, entry points, exit points, and sequence flow.',
    price: {
      display: '$11',
      amount: 11,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Welcome automation mapping framework',
      'Trigger planning',
      'Email sequence mapping',
      'Trigger/delay builder',
      'Subscriber action mapping',
      'Condition and branching mapping',
      'Behavior, tag, and segment maps',
      'Automation build checklist and entry/exit planning',
    ],
    deliverables: [
      'Welcome Email System Automation Mapping Sheet',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad(
      'welcome-email-system-automation-mapping-sheet'
    ),
    coverImage:
      '/image/we/products/welcome-email-system-automation-mapping-sheet.png',
  },

  {
    id: 'segmentation-worksheet',
    slug: 'segmentation-worksheet',
    title: 'Segmentation Worksheet',
    badge: 'Practical Resource',
    tagline:
      'Organize Subscribers into Useful Groups and Segments for More Relevant Email Communication.',
    description:
      'Plan a practical subscriber segmentation structure for your email marketing. Identify subscriber groups, sources, interests, behaviors, engagement, customer status, and relevant messages or offers.',
    price: {
      display: '$7',
      amount: 7,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Subscriber segmentation framework',
      'Audience segment map',
      'Subscriber source mapping',
      'Segment types and worksheets',
      'Engagement tracking prompts',
      'Customer status and behavior branching',
      'Segment → message → offer mapping',
      'Story length and quality check',
    ],
    deliverables: [
      'Segmentation Worksheet',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('segmentation-worksheet'),
    coverImage: '/image/we/products/segmentation-worksheet.png',
  },

  {
    id: 'email-editing-quality-checklists',
    slug: 'email-editing-quality-checklists',
    title: 'Email Editing & Quality Checklists',
    badge: 'Practical Resource',
    tagline:
      'Review Your Welcome Emails for Clarity, Structure, Accuracy, Links, CTAs, and Overall Quality Before Sending.',
    description:
      'A practical quality-control resource for reviewing your welcome emails before they reach subscribers. Use the checklists to catch common issues and make sure each email is clear, relevant, accurate, and ready to send.',
    price: {
      display: '$7',
      amount: 7,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Email editing checklist',
      'The editing mindset',
      'Email structure and clarity checks',
      'The “So What” editing and cutting fluff',
      'Story and benefit checks',
      'Tone and humanity check',
      'Subject/email, mobile, visual, link, and CTA checks',
      'Email scorecard and final pre-send review',
    ],
    deliverables: [
      'Email Editing & Quality Checklists',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('email-editing-quality-checklist'),
    coverImage:
      '/image/we/products/email-editing-quality-checklist.png',
  },

  {
    id: 'welcome-sequence-launch-checklist',
    slug: 'welcome-sequence-launch-checklist',
    title: 'Welcome Sequence Launch Checklist',
    badge: 'Practical Resource',
    tagline:
      'Verify Your Welcome Sequence, Automation, Links, CTAs, and Subscriber Experience Before Launch.',
    description:
      'A practical pre-launch checklist for reviewing the emails, automation, subscriber flow, links, CTAs, conditions, personalization, mobile presentation, testing, and final setup before activation.',
    price: {
      display: '$6',
      amount: 6,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'Launch foundation',
      'Email and subject/review-text checks',
      'Trigger and timing checks',
      'CTA and link checks',
      'Automation condition and personalization checks',
      'Mobile and visual checks',
      'Test subscriber and customer journey check',
      'Launch readiness scorecard, final checklist, and notes',
    ],
    deliverables: [
      'Welcome Sequence Launch Checklist',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad('welcome-sequence-launch-checklist'),
    coverImage:
      '/image/we/products/welcome-sequence-launch-checklist.png',
  },

  {
    id: 'welcome-email-system-master-worksheet',
    slug: 'welcome-email-system-master-worksheet',
    title: 'Welcome Email System Master Worksheet',
    badge: 'Practical Resource',
    tagline:
      'Plan Your Complete Welcome Email System in One Master Worksheet.',
    description:
      'A single planning worksheet for bringing the key parts of your welcome email system together, from audience and sequence structure to messaging, CTAs, automation, segmentation, testing, quality control, and launch.',
    price: {
      display: '$10',
      amount: 10,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    accentColor: resourceAccent,
    features: [
      'System foundation',
      '10-email master map',
      'Email-by-email blueprint',
      'Value/benefit and story/proof maps',
      'Offer/CTA map',
      'Automation and segmentation/behavior maps',
      'System flow and final quality control',
      'Complete system snapshot, implementation plan, and final review',
    ],
    deliverables: [
      'Welcome Email System Master Worksheet',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, and small businesses.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad(
      'welcome-email-system-master-worksheet'
    ),
    coverImage:
      '/image/we/products/welcome-email-system-master-worksheet.png',
  },

  {
    id: 'welcome-email-practical-resource-kit',
    slug: 'welcome-email-practical-resource-kit',
    title: 'Welcome Email Practical Resource Kit',
    badge: 'Complete Bundle',
    tagline:
      'Get the Practical Worksheets, Swipe Files, Templates, Checklists, and Planning Tools for Your Welcome Email System.',
    description:
      'The complete Practical Resource Kit combines the nine paid standalone resources and includes the 10-Email Planning Sheet as a free resource inside the bundle.',
    price: {
      display: '$65',
      amount: 65,
      currency: 'USD',
    },
    category: 'Practical Resource Kit',
    isBundle: true,
    bundleValue: '$80',
    savings: '$15',
    bundleCta: 'Get the Complete Practical Resource Kit',
    isPopular: true,
    isFlagship: false,
    accentColor: resourceAccent,
    features: [
      'Welcome Email Template & Writing Worksheet — $10',
      'Subject Line Swipe File — $7',
      'Welcome Email Hooks & CTA Bank — $15',
      'Benefit & Offer Transition Kit — $7',
      'Automation Mapping Sheet — $11',
      'Segmentation Worksheet — $7',
      'Email Editing & Quality Checklists — $7',
      'Welcome Sequence Launch Checklist — $6',
      'Welcome Email System Master Worksheet — $10',
      'FREE: 10-Email Planning Sheet included inside the bundle',
    ],
    deliverables: [
      'Nine paid Practical Resource Kit products',
      'Free 10-Email Planning Sheet included with the bundle',
    ],
    targetAudience:
      'Coaches, consultants, agencies, creators, NGOs, small businesses, and marketers who want the practical welcome-email planning and execution resources together.',
    deliveryType: 'gumroad',
    gumroadUrl: gumroad(
      'welcome-email-practical-resource-kit'
    ),
    coverImage:
      '/image/we/products/welcome-email-practical-resource-kit.png',
  },
];

export default productsData;
