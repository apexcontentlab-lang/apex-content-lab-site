export interface Resource {
  id: string;
  title: string;
  description: string;
  category: string;
  format: string;
  readTime: string;
  downloadUrl: string;
  coverImage?: string;
  isFeatured?: boolean;
  badgeColor: {
    bg: string;
    text: string;
  };
}

export const resourcesData: Resource[] = [
  {
    id: 'attention-to-leads-blueprint',
    title: 'Attention-to-Leads Blueprint',
    description:
      'A practical framework for understanding how to turn content attention into captured leads, email relationships, and business opportunities.',
    category: 'Growth System',
    format: 'PDF',
    readTime: '10 min',
    downloadUrl:
      'https://apexlab1.gumroad.com/l/attention-to-leads-blueprint',
    coverImage: '/image/we/resources/blueprint-preview.png',
    isFeatured: true,
    badgeColor: {
      bg: 'bg-blue-50',
      text: 'text-blue-700',
    },
  },
];

export default resourcesData;
