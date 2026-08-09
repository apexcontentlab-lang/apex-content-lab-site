import { siteConfig } from '../config/site';

export interface ServiceDeliverable {
  title: string;
  description: string;
}

export interface ServiceOffer {
  id: string;
  badge: string;
  title: string;
  slug: string;
  purpose: string;
  summary: string;
  isFlagship?: boolean;
  accentColor: {
    bg: string;
    text: string;
    border: string;
  };
  deliverables: ServiceDeliverable[];
  keyFeatures: string[];
  cta: {
    text: string;
    href: string;
  };
}

export const servicesData: ServiceOffer[] = [
  {
    id: "lead-magnet-launchpad",
    slug: "lead-magnet-launchpad",
    badge: "Entry Offer",
    title: "Lead Magnet Launchpad",
    purpose: "Turn attention into active, owned email subscribers.",
    summary: "A focused implementation designed to solve subscriber acquisition friction. We research your ideal customer psychology, build a high-converting lead magnet, design landing pages, and connect automated welcome emails.",
    accentColor: {
      bg: "bg-blue-50",
      text: "text-[var(--color-apex-blue,#2563EB)]",
      border: "border-blue-200"
    },
    deliverables: [
      {
        title: "Audience Research & Psychology",
        description: "Deep research into client pain points to engineer an irresistible lead magnet resource."
      },
      {
        title: "Lead Magnet Strategy & Structure",
        description: "Designing the blueprint, checklist, or guide for maximum perceived value and immediate consumption."
      },
      {
        title: "High-Converting Landing Page",
        description: "Distraction-free, mobile-optimized landing page focused purely on opt-in conversions."
      },
      {
        title: "MailerLite Email Capture",
        description: "Seamless form integration and technical setup to route subscribers reliably into your list."
      },
      {
        title: "5-Stage Welcome Sequence",
        description: "Pre-written, automated onboarding sequence to build authority and deliver immediate value."
      }
    ],
    keyFeatures: [
      "Audience Research & Customer Psychology",
      "Lead Magnet Strategy & Structure",
      "High-Converting Landing Page Design",
      "MailerLite Email Capture Integration",
      "5-Stage Automated Welcome Sequence"
    ],
    cta: {
      text: "Launch Lead Magnet",
      href: siteConfig.routes.bookCall
    }
  },
  {
    id: "lead-nurture-system",
    slug: "lead-nurture-system",
    badge: "Retention Offer",
    title: "Lead Nurture & Growth System",
    purpose: "Turn email subscribers into repeat clients and buyers.",
    summary: "Engineered to eliminate list coldness. We establish structured weekly newsletter frameworks, behavioral segmentation, and automated lead nurture sequences that build deep trust on autopilot.",
    accentColor: {
      bg: "bg-cyan-50",
      text: "text-[var(--color-growth-cyan,#0891B2)]",
      border: "border-cyan-200"
    },
    deliverables: [
      {
        title: "Strategic Newsletter Architecture",
        description: "Recurring content pillars and templates designed for consistency and high engagement."
      },
      {
        title: "Automated Nurture Workflows",
        description: "Behavior-triggered automated sequences that send relevant follow-ups based on link clicks."
      },
      {
        title: "Subscriber Segmentation Engine",
        description: "Organizing your list by interest, engagement level, and buyer readiness."
      },
      {
        title: "Broadcast & Campaign Framework",
        description: "Turnkey promotional email structures for product launches and promotional pushes."
      },
      {
        title: "Customer Journey Mapping",
        description: "Visualizing touchpoints from prospect opt-in to long-term client retention."
      }
    ],
    keyFeatures: [
      "Strategic Newsletter Framework",
      "Automated Nurture Workflows",
      "Broadcast & Campaign Strategy",
      "Subscriber Segmentation Engine",
      "Customer Journey Mapping"
    ],
    cta: {
      text: "Build Nurture System",
      href: siteConfig.routes.bookCall
    }
  },
  {
    id: "attention-to-leads-system",
    slug: "attention-to-leads-system",
    badge: "Flagship Offer",
    isFlagship: true,
    title: "Attention-to-Leads Growth System",
    purpose: "Build a complete, end-to-end lead generation engine.",
    summary: "Our flagship marketing infrastructure implementation. We connect organic short-form video distribution directly to dedicated lead capture engines, MailerLite automation, CRM workflows, and sales pipelines.",
    accentColor: {
      bg: "bg-amber-50",
      text: "text-[var(--color-strategic-orange,#D97706)]",
      border: "border-amber-200"
    },
    deliverables: [
      {
        title: "Omnichannel Content Strategy",
        description: "Systematic topic engineering and short-form video workflows across Reels, TikTok, and Shorts."
      },
      {
        title: "End-to-End Email Automation",
        description: "Complete email funnel architecture including welcome, nurture, pitch, and re-engagement flows."
      },
      {
        title: "CRM & Workflow Integration",
        description: "Connecting lead capture seamlessly with sales pipelines, WhatsApp, or scheduling tools."
      },
      {
        title: "Custom Lead Capture Architecture",
        description: "Bespoke landing page systems built for high conversion and minimal load times."
      },
      {
        title: "Growth Analytics & Tracking",
        description: "Custom dashboards to monitor subscriber acquisition costs, opt-in rates, and conversions."
      },
      {
        title: "Continuous System Iteration",
        description: "Data-backed optimization to eliminate conversion bottlenecks across the funnel."
      }
    ],
    keyFeatures: [
      "Omnichannel Content Strategy",
      "End-to-End Email Marketing Automation",
      "Full CRM & Workflow Integration",
      "Custom Lead Capture & Magnet Architecture",
      "Growth Analytics & Conversion Tracking",
      "System Optimization & Iteration"
    ],
    cta: {
      text: "Build Complete Engine",
      href: siteConfig.routes.bookCall
    }
  },
  {
    id: "content-visibility-system",
    slug: "content-visibility-system",
    badge: "Visibility Offer",
    title: "Content & Visibility Growth System",
    purpose: "Expand market reach through structured short-form content.",
    summary: "Engineered to scale reach without burnout. We establish structured production workflows, repurposing frameworks, and short-form video distribution systems tailored for multi-platform dominance.",
    accentColor: {
      bg: "bg-emerald-50",
      text: "text-[var(--color-growth-green,#059669)]",
      border: "border-emerald-200"
    },
    deliverables: [
      {
        title: "Short-Form Video Content Strategy",
        description: "Structuring high-intent video scripts and concepts that solve buyer problems."
      },
      {
        title: "Platform Repurposing Workflows",
        description: "Turn key long-form assets or single short videos into content across multiple channels."
      },
      {
        title: "Multi-Channel Distribution",
        description: "Systematized posting schedules for Instagram Reels, TikTok, YouTube Shorts, and Facebook Reels."
      },
      {
        title: "Audience Engagement Architecture",
        description: "Workflows to route social media engagement off social platforms into owned email channels."
      }
    ],
    keyFeatures: [
      "Short-Form Video Content Strategy",
      "Instagram Reels & TikTok Workflows",
      "YouTube Shorts & Facebook Reels Distribution",
      "Content Repurposing Infrastructure",
      "Audience Engagement Architecture"
    ],
    cta: {
      text: "Scale Visibility",
      href: siteConfig.routes.bookCall
    }
  }
];

export const processSteps = [
  {
    number: "01",
    title: "Audit & Architecture",
    description: "We analyze your audience, offers, and existing touchpoints to design a custom Growth System blueprint tailored to your business goals."
  },
  {
    number: "02",
    title: "Infrastructure Build",
    description: "We engineer your lead magnets, landing pages, MailerLite automations, CRM workflows, and email sequences."
  },
  {
    number: "03",
    title: "System Integration",
    description: "We connect your content distribution channels to your new lead capture engine, ensuring seamless data flow."
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description: "We deploy the growth system, monitor initial metrics, and optimize conversions for continuous hands-free lead generation."
  }
];
