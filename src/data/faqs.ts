export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "General" | "Services" | "Products" | "Technical";
}

export const faqsData: FAQItem[] = [
  {
    id: "what-is-a-growth-system",
    category: "General",
    question: "What is a Growth System?",
    answer: "A Growth System is a connected marketing infrastructure combining short-form content, lead magnets, landing pages, email automations, and CRM workflows that convert attention into qualified leads 24/7."
  },
  {
    id: "agency-vs-growth-systems",
    category: "General",
    question: "How is Apex Content Lab different from a traditional marketing agency?",
    answer: "Traditional agencies sell one-off creative campaigns or manual monthly labor. Apex Content Lab builds permanent marketing infrastructure that continues working automatically even when you are offline."
  },
  {
    id: "why-email-marketing",
    category: "General",
    question: "Do I need email marketing if I already have a social media following?",
    answer: "Yes. Social media followers belong to algorithm platforms that can suppress your reach at any time. An email list is an owned business asset that guarantees direct access to your audience."
  },
  {
    id: "how-to-get-started",
    category: "General",
    question: "How do I get started with Apex Content Lab?",
    answer: "You can download our free Attention-to-Leads Blueprint on the Resources page, explore our digital products on Gumroad, or book a direct 1-on-1 strategy call with Founder Ebua Hastings Etta."
  },
  {
    id: "how-long-does-implementation-take",
    category: "Services",
    question: "How long does a full Growth System implementation take?",
    answer: "Turnkey systems typically take 2 to 4 weeks depending on complexity, including audience research, lead magnet design, landing page creation, MailerLite automation, and CRM integrations."
  },
  {
    id: "what-tech-stack-do-you-use",
    category: "Technical",
    question: "What tools and software do you integrate?",
    answer: "We primarily build and integrate with MailerLite, Gumroad, Astro, Tailwind CSS, Vercel, Cloudflare, and custom CRM webhooks to ensure maximum speed, security, and simplicity."
  }
];
