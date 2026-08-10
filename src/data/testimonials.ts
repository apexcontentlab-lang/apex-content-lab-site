export interface Testimonial {
  quote: string;
  author: {
    name: string;
    role: string;
    company: string;
  };
  metricHighlight?: {
    label: string;
    value: string;
  };
}

export const testimonialsData: Testimonial[] = [
  {
    quote: "Working with Apex Content Lab transformed our digital presence. We now have a predictable stream of qualified clients coming through our systems.",
    author: {
      name: "Sarah Jenkins",
      role: "Founder",
      company: "GrowthScale Media"
    },
    metricHighlight: {
      label: "Pipeline Growth",
      value: "300%"
    }
  },
  {
    quote: "The marketing infrastructure they built runs completely on autopilot. It's easily the highest ROI investment we've made this year.",
    author: {
      name: "Marcus Vance",
      role: "Managing Director",
      company: "Vance Financial Group"
    },
    metricHighlight: {
      label: "Inbound Leads",
      value: "45+/mo"
    }
  },
  {
    quote: "Clean execution, professional branding, and systems that actually work in the real world. Highly recommended.",
    author: {
      name: "Elena Rostova",
      role: "Head of Growth",
      company: "SaaS Metrics Inc."
    },
    metricHighlight: {
      label: "Conversion Rate",
      value: "4.8x"
    }
  }
];
