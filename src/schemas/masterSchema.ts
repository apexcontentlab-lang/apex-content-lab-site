import { siteConfig } from '../config/site';

/**
 * WebSite & SearchAction Schema
 */
export const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteConfig.url}/#website`,
  "url": siteConfig.url,
  "name": siteConfig.name,
  "description": siteConfig.description,
  "publisher": {
    "@id": `${siteConfig.url}/#organization`
  },
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": `${siteConfig.url}/resources?q={search_term_string}`
    },
    "query-input": "required name=search_term_string"
  }
};

/**
 * Master Graph Schema (Organization + Founder Person)
 */
export const masterGraphSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      "name": siteConfig.name,
      "legalName": siteConfig.legalName,
      "url": siteConfig.url,
      "logo": {
        "@type": "ImageObject",
        "url": `${siteConfig.url}/logos/logo-primary.svg`,
        "caption": siteConfig.name
      },
      "image": siteConfig.ogImage,
      "description": siteConfig.description,
      "foundingDate": "2026",
      "founder": {
        "@type": "Person",
        "@id": `${siteConfig.url}/#founder`
      },
      "sameAs": [
        siteConfig.socialLinks.linkedin,
        siteConfig.socialLinks.facebook,
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.threads,
        siteConfig.socialLinks.tiktok,
        siteConfig.socialLinks.pinterest,
        siteConfig.socialLinks.youtube
      ],
      "contactPoint": [
        {
          "@type": "ContactPoint",
          "email": siteConfig.contact.primaryEmail,
          "telephone": siteConfig.contact.phone.display,
          "contactType": "customer service",
          "availableLanguage": "English"
        }
      ]
    },
    {
      "@type": "Person",
      "@id": `${siteConfig.url}/#founder`,
      "name": siteConfig.founder.name,
      "jobTitle": siteConfig.founder.title,
      "worksFor": {
        "@id": `${siteConfig.url}/#organization`
      },
      "description": "Growth Systems Strategist, Email Marketing Specialist, Marketing Automation Consultant, and Founder of Apex Content Lab.",
      "email": siteConfig.contact.founderEmail,
      "sameAs": [
        siteConfig.founder.linkedin,
        siteConfig.socialLinks.instagram,
        siteConfig.socialLinks.facebook
      ]
    }
  ]
};

/**
 * FAQ Schema Generator
 */
export function generateFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

/**
 * Breadcrumb Schema Generator
 */
export function generateBreadcrumbSchema(items: { name: string; item: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.name,
      "item": `${siteConfig.url}${crumb.item}`
    }))
  };
      }
