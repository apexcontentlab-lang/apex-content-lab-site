import { siteConfig } from '../config/site';

export interface ResourceItem {
  id: string;
  title: string;
  category: "Blueprints" | "Templates" | "Guides" | "Frameworks";
  readTime: string;
  format: string;
  description: string;
  downloadUrl: string;
  badgeColor: {
    bg: string;
    text: string;
    border: string;
  };
  isFeatured?: boolean;
}

export const resourcesData: ResourceItem[] = [
  {
    id: "attention-to-leads-blueprint",
    title: "Attention-to-Leads Master Blueprint",
    category: "Blueprints",
    readTime: "12 min read",
    format: "PDF Guide",
    description: "The complete visual framework for turning short-form social attention into owned email subscribers and automated client acquisition.",
    downloadUrl: siteConfig.integrations.mailerlite.formPreviewUrl,
    badgeColor: {
      bg: "bg-blue-50",
      text: "text-[var(--color-apex-blue,#2563EB)]",
      border: "border-blue-200"
    },
    isFeatured: true
  },
  {
    id: "welcome-sequence-swipe-file",
    title: "5-Stage Welcome Sequence Swipe File",
    category: "Templates",
    readTime: "8 min read",
    format: "Email Swipe File",
    description: "Pre-formatted email templates designed to establish immediate brand authority, deliver lead magnets, and contextualize your primary offer.",
    downloadUrl: siteConfig.integrations.mailerlite.formPreviewUrl,
    badgeColor: {
      bg: "bg-amber-50",
      text: "text-[var(--color-strategic-orange,#D97706)]",
      border: "border-amber-200"
    },
    isFeatured: false
  },
  {
    id: "lead-magnet-validation-checklist",
    title: "Lead Magnet Validation Checklist",
    category: "Guides",
    readTime: "5 min read",
    format: "Interactive Checklist",
    description: "A 10-point checklist to audit your lead magnet concept before building landing pages or writing email copy.",
    downloadUrl: siteConfig.integrations.mailerlite.formPreviewUrl,
    badgeColor: {
      bg: "bg-cyan-50",
      text: "text-[var(--color-growth-cyan,#0891B2)]",
      border: "border-cyan-200"
    },
    isFeatured: false
  },
  {
    id: "growth-system-architecture-flowchart",
    title: "Growth System Architecture Flowchart",
    category: "Frameworks",
    readTime: "10 min read",
    format: "Diagram & Guide",
    description: "A high-resolution map illustrating how short-form content, MailerLite automations, landing pages, and CRM systems connect.",
    downloadUrl: siteConfig.integrations.mailerlite.formPreviewUrl,
    badgeColor: {
      bg: "bg-emerald-50",
      text: "text-[var(--color-growth-green,#059669)]",
      border: "border-emerald-200"
    },
    isFeatured: false
  }
];
