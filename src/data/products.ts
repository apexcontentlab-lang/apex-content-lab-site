import { siteConfig } from '../config/site';

export interface ProductFeature {
  title: string;
  description?: string;
}

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

  isPopular?: boolean;
  isFlagship?: boolean;

  accentColor: {
    bg: string;
    text: string;
    border: string;
  };

  features: string[];
  gumroadUrl: string;
  deliverables: string[];
  targetAudience: string;

  /**
   * Real Gumroad product ID.
   * Leave empty until we identify the actual Gumroad IDs.
   */
  gumroadProductId?: string;

  /**
   * Optional product cover/thumbnail image.
   * This can come from Gumroad or a local asset later.
   */
  coverImage?: string;
}

export const productsData: DigitalProduct[] = [
  {
    id: 'attention-to-leads-blueprint',
    slug: 'attention-to-leads-blueprint',
    title: 'Attention-to-Leads Master Blueprint',
    badge: 'Flagship Guide',
    tagline:
      'The complete step-by-step master framework for converting online attention into qualified email subscribers.',
    description:
      'An actionable digital blueprint detailing the exact visual architecture, content workflows, and email funnels needed to transform short-form video attention into owned audience members.',
    price: {
      display: 'Free / $0',
      amount: 0,
      currency: 'USD',
      isFree: true,
    },
    isPopular: true,
    isFlagship: true,
    accentColor: {
      bg: 'bg-blue-50',
      text: 'text-[var(--color-apex-blue,#2563EB)]',
      border: 'border-blue-200',
    },
    features: [
      '7-Stage Growth Architecture Diagram & Overview',
      'Audience Psychology & Research Canvas',
      'Short-Form Video Repurposing Workflow',
      'MailerLite Setup & Integration Guide',
      'Lead Capture Landing Page Wireframe',
    ],
    deliverables: [
      'High-Resolution PDF Master Blueprint (24 Pages)',
      'Interactive Notion Implementation Hub',
      '3 Video Walkthroughs by Ebua Hastings Etta',
      'MailerLite Integration Checklist',
    ],
    gumroadUrl: siteConfig.integrations.gumroad.storeUrl,
    targetAudience:
      'Coaches, consultants, creators, and agency owners looking to systematize subscriber acquisition.',
  },

  {
    id: 'lead-magnet-launchpad-kit',
    slug: 'lead-magnet-launchpad-kit',
    title: 'Lead Magnet Launchpad Kit',
    badge: 'Implementation Kit',
    tagline:
      'Plug-and-play templates and copywriting frameworks to build a high-converting lead magnet in 48 hours.',
    description:
      'Stop guessing what your audience wants. This kit provides pre-structured templates, headline generators, and landing page copy frameworks engineered for rapid opt-in conversion.',
    price: {
      display: '$27',
      amount: 27,
      currency: 'USD',
    },
    isPopular: false,
    accentColor: {
      bg: 'bg-cyan-50',
      text: 'text-[var(--color-growth-cyan,#0891B2)]',
      border: 'border-cyan-200',
    },
    features: [
      '5 High-Converting Lead Magnet Formats (PDF, Checklist, Swipe File, Video, Template)',
      'Landing Page Copywriting Canvas & Wireframes',
      '50+ Opt-In Form Headline Generators',
      'Lead Magnet Validation & Audit Checklist',
    ],
    deliverables: [
      'Canva & Google Docs Lead Magnet Design Templates',
      'Fill-in-the-Blank Landing Page Copy Script',
      'Opt-in Rate Optimization Checklist',
    ],
    gumroadUrl: siteConfig.integrations.gumroad.storeUrl,
    targetAudience:
      'Solopreneurs and small business owners needing an immediate, irresistible lead magnet asset.',
  },

  {
    id: 'welcome-email-sequence-kit',
    slug: 'welcome-email-sequence-kit',
    title: 'Welcome Email Sequence Kit',
    badge: 'Email Funnel',
    tagline:
      'Tested 5-part automated email welcome sequence templates designed to build immediate brand authority.',
    description:
      'First impressions set the tone for client lifetime value. These pre-written, plug-and-play email templates deliver lead magnets, set expectations, and introduce core offers seamlessly.',
    price: {
      display: '$37',
      amount: 37,
      currency: 'USD',
    },
    isPopular: false,
    accentColor: {
      bg: 'bg-amber-50',
      text: 'text-[var(--color-strategic-orange,#D97706)]',
      border: 'border-amber-200',
    },
    features: [
      '5 Pre-Written Email Templates (Delivery, Story, Authority, Value, Pitch)',
      'Subject Line Vault (50+ Proven High-Open Titles)',
      'Storytelling & Positioning Framework',
      'Contextual Call-to-Action Insertion Strategy',
    ],
    deliverables: [
      'Editable Email Copy Master Document',
      'MailerLite Automation Setup Instructions',
      'Open & Click-Through Optimization Guide',
    ],
    gumroadUrl: siteConfig.integrations.gumroad.storeUrl,
    targetAudience:
      'Businesses with an existing lead magnet that struggle to turn new subscribers into buyers.',
  },

  {
    id: 'growth-engine-architecture-pack',
    slug: 'growth-engine-architecture-pack',
    title: 'Growth Engine Architecture Bundle',
    badge: 'Systems Bundle',
    tagline:
      'The complete operating bundle combining all Apex Content Lab blueprints, templates, and CRM diagrams.',
    description:
      'Get every digital asset, template kit, email sequence, and system flowchart produced by Apex Content Lab in a single complete growth architecture package.',
    price: {
      display: '$67',
      amount: 67,
      currency: 'USD',
    },
    isPopular: false,
    accentColor: {
      bg: 'bg-emerald-50',
      text: 'text-[var(--color-growth-green,#059669)]',
      border: 'border-emerald-200',
    },
    features: [
      'All 3 Individual Product Kits Included (Blueprint, Launchpad Kit, Welcome Sequence)',
      'Complete Marketing Automation Flowcharts & Diagrams',
      'Subscriber Retention & Weekly Newsletter Framework',
      'Lifetime Updates & Future Blueprint Additions',
    ],
    deliverables: [
      'Complete Master Digital Product Collection',
      'All Templates, Notion Workspaces & Video Guides',
      'Priority Access to Future Resource Additions',
    ],
    gumroadUrl: siteConfig.integrations.gumroad.storeUrl,
    targetAudience:
      'Founders and growth specialists wanting the complete DIY toolkit for building scalable systems.',
  },
];
