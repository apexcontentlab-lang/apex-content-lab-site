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
    description:
      "The complete visual framework for turning short-form social attention into owned email subscribers and automated client acquisition.",
    downloadUrl:
      siteConfig.integrations.mailerlite.formPreviewUrl,
    badgeColor: {
      bg: "bg-blue-50",
      text: "text-[var(--color-apex-blue,#2563EB)]",
      border: "border-blue-200"
    },
    isFeatured: true
  }
];

export default resourcesData;
