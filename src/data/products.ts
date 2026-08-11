import { siteConfig } from '../config/site';

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
  deliverables: string[];
  targetAudience: string;

  deliveryType: 'mailerlite' | 'gumroad';

  mailerliteUrl?: string;
  gumroadUrl?: string;
  gumroadProductId?: string;

  coverImage?: string;
}

export const productsData: DigitalProduct[] = [
  {
    id: 'attention-to-leads-blueprint',
    slug: 'attention-to-leads-blueprint',
    title: 'Attention-to-Leads Master Blueprint',
    badge: 'Free Blueprint',
    tagline:
      'The step-by-step framework for turning online attention into qualified email subscribers.',
    description:
      'A practical blueprint showing how to connect short-form content, lead capture, email marketing, and customer journeys into one growth system.',

    price: {
      display: 'Free',
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
      '7-Stage Growth Architecture',
      'Audience Psychology & Research Framework',
      'Short-Form Content-to-Email Workflow',
      'MailerLite Setup & Integration Guide',
      'Lead Capture Landing Page Framework',
    ],

    deliverables: [
      'Attention-to-Leads Master Blueprint',
      'Implementation Framework',
      'MailerLite Integration Checklist',
    ],

    targetAudience:
      'Coaches, consultants, creators, startups, and businesses that want to turn attention into an owned audience.',

    deliveryType: 'mailerlite',

    mailerliteUrl: siteConfig.integrations.mailerlite.formPreviewUrl,

    coverImage: '/image/we/resources/blueprint-preview.png',
  },

  {
    id: 'lead-magnet-blueprint',
    slug: 'lead-magnet-blueprint',
    title: 'Lead Magnet Blueprint',
    badge: 'Premium Blueprint',
    tagline:
      'Build a lead magnet that attracts the right people and turns attention into qualified subscribers.',
    description:
      'A practical blueprint for planning, creating, positioning, and promoting a lead magnet that fits into a working email marketing system.',

    price: {
      display: '$27',
      amount: 27,
      currency: 'USD',
    },

    isPopular: false,
    isFlagship: false,

    accentColor: {
      bg: 'bg-cyan-50',
      text: 'text-[var(--color-growth-cyan,#0891B2)]',
      border: 'border-cyan-200',
    },

    features: [
      'Lead Magnet Planning Framework',
      'High-Converting Lead Magnet Formats',
      'Landing Page Copy Framework',
      'Opt-In Messaging & Positioning',
      'Lead Magnet Validation Checklist',
    ],

    deliverables: [
      'Lead Magnet Blueprint',
      'Landing Page Copy Framework',
      'Lead Magnet Validation Checklist',
    ],

    targetAudience:
      'Business owners, consultants, creators, and service providers who want a practical system for building a lead-generating asset.',

    deliveryType: 'gumroad',

    gumroadUrl: 'https://apexlab1.gumroad.com/l/ifevv',

    coverImage: '/image/we/products/playbook-cover.png',
  },
];

export default productsData;
