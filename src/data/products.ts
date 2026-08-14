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

    gumroadUrl:
      'https://apexlab1.gumroad.com/l/ifevv',

    coverImage:
      '/image/we/products/playbook-cover.png',
  },
];

export default productsData;
