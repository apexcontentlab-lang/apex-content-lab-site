import { siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  description?: string;
  isExternal?: boolean;
  highlight?: boolean;
}

export interface NavSection {
  title: string;
  items: NavItem[];
}

export const headerNavigation: NavItem[] = [
  {
    label: "Services",
    href: siteConfig.routes.services,
    description: "Modular growth systems designed around your business goals."
  },
  {
    label: "Framework",
    href: siteConfig.routes.framework,
    description: "The 7-stage closed-loop marketing engine."
  },
  {
    label: "Products",
    href: siteConfig.routes.products,
    description: "Actionable digital blueprints and email kits on Gumroad."
  },
  {
    label: "Resources",
    href: siteConfig.routes.resources,
    description: "Free guides, email swipe files, and system flowcharts."
  },
  {
    label: "About",
    href: siteConfig.routes.about,
    description: "Our company story, founder profile, and core philosophy."
  },
  {
    label: "Contact",
    href: siteConfig.routes.contact,
    description: "Direct business email channels and fast-track WhatsApp."
  }
];

export const footerNavigation: {
  solutions: NavSection;
  company: NavSection;
  resources: NavSection;
  legal: NavSection;
} = {
  solutions: {
    title: "Growth Solutions",
    items: [
      {
        label: "Lead Magnet Launchpad",
        href: `${siteConfig.routes.services}#lead-magnet-launchpad`
      },
      {
        label: "Lead Nurture System",
        href: `${siteConfig.routes.services}#lead-nurture-system`
      },
      {
        label: "Attention-to-Leads Engine",
        href: `${siteConfig.routes.services}#attention-to-leads-system`
      },
      {
        label: "Content & Visibility System",
        href: `${siteConfig.routes.services}#content-visibility-system`
      }
    ]
  },
  company: {
    title: "Company",
    items: [
      {
        label: "About Apex Content Lab",
        href: siteConfig.routes.about
      },
      {
        label: "Founder Profile",
        href: `${siteConfig.routes.about}#founder`
      },
      {
        label: "The Apex Framework",
        href: siteConfig.routes.framework
      },
      {
        label: "Contact & Support",
        href: siteConfig.routes.contact
      },
      {
        label: "Book a Strategy Call",
        href: siteConfig.routes.bookCall,
        highlight: true
      }
    ]
  },
  resources: {
    title: "Resources & Products",
    items: [
      {
        label: "Free Growth Blueprint",
        href: siteConfig.integrations.mailerlite.formPreviewUrl,
        isExternal: true
      },
      {
        label: "Resource Library",
        href: siteConfig.routes.resources
      },
      {
        label: "Gumroad Product Store",
        href: siteConfig.routes.products
      },
      {
        label: "Welcome Email Swipe File",
        href: `${siteConfig.routes.products}#welcome-email-sequence-kit`
      }
    ]
  },
  legal: {
    title: "Legal & Governance",
    items: [
      {
        label: "Privacy Policy",
        href: "/privacy"
      },
      {
        label: "Terms of Service",
        href: "/terms"
      },
      {
        label: "Cookie Policy",
        href: "/cookies"
      }
    ]
  }
};

export const primaryActionCTA: NavItem = {
  label: "Book a Strategy Call",
  href: siteConfig.routes.bookCall,
  highlight: true
};

export const secondaryActionCTA: NavItem = {
  label: "Download Free Blueprint",
  href: siteConfig.integrations.mailerlite.formPreviewUrl,
  isExternal: true
};
        
