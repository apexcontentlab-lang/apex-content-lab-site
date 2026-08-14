export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  url: string;
  domain: string;

  founder: {
    name: string;
    title: string;
    bio: string;
    roles: string[];
    email: string;
    linkedin: string;
  };

  contact: {
    primaryEmail: string;
    generalEmail: string;
    supportEmail: string;
    founderEmail: string;

    phone: {
      raw: string;
      display: string;
      countryCode: string;
    };

    whatsapp: {
      number: string;
      defaultMessage: string;
      fullUrl: string;
    };

    address: {
      city: string;
      region: string;
      country: string;
      formatted: string;
    };
  };

  integrations: {
    mailerlite: {
      accountGroupId: string;
      formPreviewUrl: string;
      defaultSubscribeUrl: string;
    };

    gumroad: {
      storeUrl: string;
      handle: string;
    };
  };

  socialLinks: {
    linkedin: string;
    facebook: string;
    instagram: string;
    threads: string;
    tiktok: string;
    pinterest: string;
    youtube: string;
  };

  seo: {
    defaultTitle: string;
    titleTemplate: string;
    defaultDescription: string;
    ogImage: string;
    logo: string;
    locale: string;
    themeColor: string;
  };

  geo: {
    region: string;
    placename: string;
    position: string;
    ICBM: string;
    coverage: string;
    targetMarkets: string[];
  };

  routes: {
    home: string;
    services: string;
    framework: string;
    products: string;
    resources: string;
    about: string;
    contact: string;
    bookCall: string;
    blog: string;
    templates: string;
  };
}

export const siteConfig: SiteConfig = {
  name: "Apex Content Lab",
  legalName: "Apex Content Lab Ltd.",
  tagline: "Turn Attention Into Qualified Leads",

  description:
    "Apex Content Lab is a Growth Systems Company. We build marketing infrastructure that combines strategic short-form content, email marketing, automation, and customer journey design to turn attention into qualified leads and business growth.",

  url: "https://apex-content-lab.com",
  domain: "apex-content-lab.com",

  founder: {
    name: "Ebua Hastings Etta",
    title: "Founder & Growth Systems Strategist",

    bio:
      "Ebua Hastings Etta specializes in building scalable marketing systems that combine strategic short-form content, email marketing, automation, and customer journey design. His work focuses on building marketing assets and systems that continue generating qualified opportunities beyond individual campaigns or social media posts.",

    roles: [
      "Growth Systems Strategist",
      "Email Marketing Specialist",
      "Marketing Automation Consultant",
      "Customer Journey Architect",
    ],

    email: "founder@apex-content-lab.com",

    linkedin:
      "https://www.linkedin.com/in/ebua-hastings-ba05173a2",
  },

  contact: {
    primaryEmail: "contact@apex-content-lab.com",
    generalEmail: "hello@apex-content-lab.com",
    supportEmail: "support@apex-content-lab.com",
    founderEmail: "founder@apex-content-lab.com",

    phone: {
      raw: "+237652673073",
      display: "+237 652 673 073",
      countryCode: "CM",
    },

    whatsapp: {
      number: "+237652673073",

      defaultMessage:
        "Hi Apex Content Lab! I'm interested in building a marketing growth system for my business.",

      fullUrl:
        "https://wa.me/237652673073?text=Hi%20Apex%20Content%20Lab!%20I'm%20interested%20in%20building%20a%20marketing%20growth%20system%20for%20my%20business.",
    },

    address: {
      city: "Buea",
      region: "Southwest Region",
      country: "Cameroon",
      formatted: "Buea, Southwest Region, Cameroon",
    },
  },

  integrations: {
    mailerlite: {
      accountGroupId: "2453071",

      formPreviewUrl:
        "https://preview.mailerlite.io/preview/2453071/forms/190605752159700691",

      defaultSubscribeUrl:
        "https://preview.mailerlite.io/preview/2453071/forms/190605752159700691",
    },

    gumroad: {
      storeUrl: "https://apexlab1.gumroad.com/",
      handle: "apexlab1",
    },
  },

  socialLinks: {
    linkedin:
      "https://www.linkedin.com/in/ebua-hastings-ba05173a2",

    facebook:
      "https://www.facebook.com/profile.php?id=61592196512458",

    instagram:
      "https://www.instagram.com/apexcontentlab",

    threads:
      "https://www.threads.com/@apexcontentlab",

    tiktok:
      "https://www.tiktok.com/@apex.content.lab",

    pinterest:
      "https://pin.it/1ZAbYcTKX",

    youtube:
      "https://www.youtube.com/@ApexContentLab",
  },

    seo: {
    defaultTitle:
      "Apex Content Lab | Growth Systems Company",

    titleTemplate:
      "%s | Apex Content Lab",

    defaultDescription:
      "Apex Content Lab builds marketing systems that turn online attention into qualified leads, email subscribers, and automated customer journeys.",

    ogImage:
      "/image/we/og/og-default.png",

    logo:
      "/logos/logo-primary.svg",

    locale:
      "en_US",

    themeColor:
      "#2563EB",
  },

  geo: {
    region: "CM-SW",
    placename: "Buea",
    position: "4.1550;9.2435",
    ICBM: "4.1550, 9.2435",
    coverage: "Global",

    targetMarkets: [
      "Africa",
      "North America",
      "Europe",
      "Global Remote",
    ],
  },

  routes: {
    home: "/",
    services: "/services",
    framework: "/framework",
    products: "/products",
    resources: "/resources",
    about: "/about",
    contact: "/contact",
    bookCall: "/book-a-call",
    blog: "/blog",
    templates: "/templates",
  },
};

export default siteConfig;
