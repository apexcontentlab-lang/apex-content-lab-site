import { siteConfig } from '../config/site';
import { servicesData } from '../data/services';

const siteUrl = siteConfig.url;

export const entityIds = {
  organization: `${siteUrl}/#organization`,
  founder: `${siteUrl}/#founder`,
  website: `${siteUrl}/#website`,
  logo: `${siteUrl}/#logo`,
  services: Object.fromEntries(
    servicesData.map((service) => [service.id, `${siteUrl}/#service-${service.id}`])
  ) as Record<string, string>,
} as const;

export const organizationEntity = {
  '@type': 'Organization',
  '@id': entityIds.organization,
  name: siteConfig.name,
  legalName: siteConfig.legalName,
  url: siteUrl,
  description: siteConfig.description,
  logo: { '@type': 'ImageObject', '@id': entityIds.logo, url: `${siteUrl}${siteConfig.seo.logo}`, contentUrl: `${siteUrl}${siteConfig.seo.logo}`, caption: siteConfig.name },
  image: `${siteUrl}${siteConfig.seo.ogImage}`,
  foundingDate: '2026',
  founder: { '@id': entityIds.founder },
  sameAs: Object.values(siteConfig.socialLinks).filter(Boolean),
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
    addressLocality: siteConfig.contact.address.city,
    addressRegion: siteConfig.contact.address.region,
    addressCountry: siteConfig.contact.address.country,
  },
  areaServed: siteConfig.geo.targetMarkets.map((market) => ({ '@type': 'Place', name: market })),
  knowsAbout: [
    'Growth systems', 'Customer acquisition', 'Lead generation', 'Lead capture', 'Lead nurture',
    'Content acquisition', 'Customer journey architecture', 'Marketing automation', 'CRM workflows',
    'Conversion systems', 'Analytics and optimization', 'Search engine optimization',
    'Generative AI search visibility', 'Answer-oriented content',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Apex Content Lab Growth Systems',
    itemListElement: servicesData.map((service) => ({ '@type': 'Offer', itemOffered: { '@id': entityIds.services[service.id] } })),
  },
};

export const founderEntity = {
  '@type': 'Person',
  '@id': entityIds.founder,
  name: siteConfig.founder.name,
  jobTitle: siteConfig.founder.title,
  description: siteConfig.founder.bio,
  email: siteConfig.founder.email,
  url: `${siteUrl}${siteConfig.routes.about}#founder`,
  sameAs: [siteConfig.founder.linkedin, siteConfig.socialLinks.linkedin].filter(Boolean),
  worksFor: { '@id': entityIds.organization },
  knowsAbout: siteConfig.founder.roles,
};

export const websiteEntity = {
  '@type': 'WebSite',
  '@id': entityIds.website,
  name: siteConfig.name,
  url: siteUrl,
  description: siteConfig.seo.defaultDescription,
  publisher: { '@id': entityIds.organization },
  inLanguage: 'en',
};

export const serviceEntities = servicesData.map((service) => ({
  '@type': 'Service',
  '@id': entityIds.services[service.id],
  name: service.title,
  url: `${siteUrl}/services/${service.slug}`,
  serviceType: service.title,
  description: service.summary,
  provider: { '@id': entityIds.organization },
  areaServed: siteConfig.geo.targetMarkets.map((market) => ({ '@type': 'Place', name: market })),
  audience: { '@type': 'Audience', audienceType: 'Businesses seeking structured customer acquisition and growth systems' },
  category: service.growthStage,
}));

export const masterGraphSchema = {
  '@context': 'https://schema.org',
  '@graph': [organizationEntity, founderEntity, websiteEntity, ...serviceEntities],
};

export const webSiteSchema = websiteEntity;

export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question', name: faq.question,
      acceptedAnswer: { '@type': 'Answer', text: faq.answer },
    })),
  };
}

export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem', position: index + 1, name: crumb.name,
      item: `${siteUrl}${crumb.item}`,
    })),
  };
  }
