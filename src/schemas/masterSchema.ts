import { siteConfig } from '../config/site';

const siteUrl = siteConfig.url;

export const entityIds = {
  organization: `${siteUrl}/#organization`,
  founder: `${siteUrl}/#founder`,
  website: `${siteUrl}/#website`,
  logo: `${siteUrl}/#logo`,

  services: {
    leadMagnetLaunchpad:
      `${siteUrl}/#service-lead-magnet-launchpad`,

    leadNurtureGrowthSystem:
      `${siteUrl}/#service-lead-nurture-growth-system`,

    attentionToLeadsGrowthSystem:
      `${siteUrl}/#service-attention-to-leads-growth-system`,

    contentVisibilityGrowthSystem:
      `${siteUrl}/#service-content-visibility-growth-system`,
  },
} as const;

/**
 * Canonical Apex Content Lab organization entity.
 *
 * This is the primary organization identity used throughout
 * the site's structured-data graph.
 */
export const organizationEntity = {
  '@type': 'Organization',
  '@id': entityIds.organization,

  name: siteConfig.name,

  legalName: siteConfig.legalName,

  url: siteUrl,

  description: siteConfig.description,

  logo: {
    '@type': 'ImageObject',
    '@id': entityIds.logo,
    url: `${siteUrl}${siteConfig.seo.logo}`,
    contentUrl: `${siteUrl}${siteConfig.seo.logo}`,
    caption: siteConfig.name,
  },

  image: `${siteUrl}${siteConfig.seo.ogImage}`,

  foundingDate: '2026',

  founder: {
    '@id': entityIds.founder,
  },

  sameAs: [
    siteConfig.socialLinks.linkedin,
    siteConfig.socialLinks.facebook,
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.threads,
    siteConfig.socialLinks.tiktok,
    siteConfig.socialLinks.pinterest,
    siteConfig.socialLinks.youtube,
  ].filter(Boolean),

  contactPoint: {
    '@type': 'ContactPoint',
    '@id': `${siteUrl}/#contact-point`,

    contactType: 'customer service',

    email: siteConfig.contact.primaryEmail,

    telephone: siteConfig.contact.phone.display,

    availableLanguage: ['English'],
  },

  address: {
    '@type': 'PostalAddress',

    addressLocality:
      siteConfig.contact.address.city,

    addressRegion:
      siteConfig.contact.address.region,

    addressCountry:
      siteConfig.contact.address.country,
  },

  areaServed: siteConfig.geo.targetMarkets.map((market) => ({
    '@type': 'Place',
    name: market,
  })),

  knowsAbout: [
    'Growth systems',
    'Marketing infrastructure',
    'Content strategy',
    'Short-form content',
    'Lead generation',
    'Lead magnet systems',
    'Email marketing',
    'Email automation',
    'Marketing automation',
    'CRM customer journeys',
    'Customer journey architecture',
    'Conversion systems',
  ],
};

/**
 * Canonical founder entity.
 */
export const founderEntity = {
  '@type': 'Person',
  '@id': entityIds.founder,

  name: siteConfig.founder.name,

  jobTitle: siteConfig.founder.title,

  description: siteConfig.founder.bio,

  email: siteConfig.founder.email,

  url: `${siteUrl}${siteConfig.routes.about}#founder`,

  sameAs: [
    siteConfig.founder.linkedin,
    siteConfig.socialLinks.instagram,
    siteConfig.socialLinks.facebook,
  ].filter(Boolean),

  worksFor: {
    '@id': entityIds.organization,
  },

  founder: {
    '@id': entityIds.organization,
  },

  knowsAbout: siteConfig.founder.roles,
};

/**
 * Canonical website entity.
 */
export const websiteEntity = {
  '@type': 'WebSite',
  '@id': entityIds.website,

  name: siteConfig.name,

  url: siteUrl,

  description: siteConfig.seo.defaultDescription,

  publisher: {
    '@id': entityIds.organization,
  },

  inLanguage: 'en',

  potentialAction: {
    '@type': 'SearchAction',

    target: {
      '@type': 'EntryPoint',

      urlTemplate:
        `${siteUrl}/resources?q={search_term_string}`,
    },

    'query-input':
      'required name=search_term_string',
  },
};

/**
 * Canonical service entities.
 *
 * These IDs allow service pages and the organization entity
 * to refer to the same services instead of repeatedly
 * creating anonymous Service entities.
 */
export const serviceEntities = [
  {
    '@type': 'Service',
    '@id': entityIds.services.leadMagnetLaunchpad,

    name: 'Lead Magnet Launchpad',

    url:
      `${siteUrl}/services/lead-magnet-launchpad`,

    serviceType: 'Lead Generation Service',

    description:
      'A professional lead-generation service that helps businesses research audience pain points, create high-value lead magnets, build opt-in pages, connect email capture, and establish automated follow-up.',

    provider: {
      '@id': entityIds.organization,
    },

    areaServed: siteConfig.geo.targetMarkets.map((market) => ({
      '@type': 'Place',
      name: market,
    })),

    category: [
      'Lead generation',
      'Lead magnet strategy',
      'Email capture',
      'Marketing automation',
    ],
  },

  {
    '@type': 'Service',
    '@id': entityIds.services.leadNurtureGrowthSystem,

    name: 'Lead Nurture & Growth System',

    url:
      `${siteUrl}/services`,

    serviceType: 'Email Marketing and Lead Nurture Service',

    description:
      'A structured email marketing and nurture system that uses newsletters, segmentation, automated workflows, and customer journey design to help businesses develop relationships with subscribers and prospects.',

    provider: {
      '@id': entityIds.organization,
    },

    areaServed: siteConfig.geo.targetMarkets.map((market) => ({
      '@type': 'Place',
      name: market,
    })),

    category: [
      'Email marketing',
      'Lead nurturing',
      'Email automation',
      'Customer journeys',
    ],
  },

  {
    '@type': 'Service',
    '@id':
      entityIds.services.attentionToLeadsGrowthSystem,

    name: 'Attention-to-Leads Growth System',

    url:
      `${siteUrl}/services`,

    serviceType: 'Growth Systems Service',

    description:
      'A complete marketing infrastructure system connecting content strategy, lead capture, email automation, CRM workflows, customer journeys, analytics, and conversion pathways.',

    provider: {
      '@id': entityIds.organization,
    },

    areaServed: siteConfig.geo.targetMarkets.map((market) => ({
      '@type': 'Place',
      name: market,
    })),

    category: [
      'Growth systems',
      'Marketing infrastructure',
      'Lead generation',
      'Email automation',
      'CRM workflows',
      'Conversion systems',
    ],
  },

  {
    '@type': 'Service',
    '@id':
      entityIds.services.contentVisibilityGrowthSystem,

    name: 'Content & Visibility Growth System',

    url:
      `${siteUrl}/services`,

    serviceType: 'Content Strategy Service',

    description:
      'A structured content and visibility system designed around short-form content strategy, distribution workflows, repurposing, audience engagement, and consistent attention generation.',

    provider: {
      '@id': entityIds.organization,
    },

    areaServed: siteConfig.geo.targetMarkets.map((market) => ({
      '@type': 'Place',
      name: market,
    })),

    category: [
      'Content strategy',
      'Short-form content',
      'Content distribution',
      'Content repurposing',
    ],
  },
];

/**
 * Complete canonical entity graph.
 *
 * This is the main source of truth for the organization's
 * identity and its core service relationships.
 */
export const masterGraphSchema = {
  '@context': 'https://schema.org',

  '@graph': [
    organizationEntity,
    founderEntity,
    websiteEntity,
    ...serviceEntities,
  ],
};

/**
 * Backward-compatible WebSite export.
 *
 * Kept so existing imports can continue working if another
 * file begins using this helper later.
 */
export const webSiteSchema = websiteEntity;

/**
 * FAQ Schema Generator
 */
export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    '@context': 'https://schema.org',

    '@type': 'FAQPage',

    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',

      name: faq.question,

      acceptedAnswer: {
        '@type': 'Answer',

        text: faq.answer,
      },
    })),
  };
}

/**
 * Breadcrumb Schema Generator
 */
export function generateBreadcrumbSchema(
  items: { name: string; item: string }[]
) {
  return {
    '@context': 'https://schema.org',

    '@type': 'BreadcrumbList',

    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',

      position: index + 1,

      name: crumb.name,

      item: `${siteUrl}${crumb.item}`,
    })),
  };
}
