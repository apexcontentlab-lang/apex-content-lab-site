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
  startingPrice?: string;
  accentColor: { bg: string; text: string; border: string };
  deliverables: ServiceDeliverable[];
  keyFeatures: string[];
  cta: { text: string; href: string };
  growthStage: string[];
}

const cta = { text: 'Discuss This System', href: siteConfig.routes.bookCall };

export const servicesData: ServiceOffer[] = [
  {
    id: 'lead-capture-system', slug: 'lead-capture-system', badge: 'Capture', title: 'Lead Capture System',
    purpose: 'Turn relevant attention into owned leads.',
    summary: 'Design and implementation of the capture layer connecting an offer, value asset, landing experience, form, delivery, and initial follow-up.',
    startingPrice: 'From $1,200',
    accentColor: { bg: 'bg-blue-50', text: 'text-[var(--color-apex-blue,#2563EB)]', border: 'border-blue-200' },
    deliverables: [
      { title: 'Audience & Offer Alignment', description: 'Clarify the audience problem, value proposition, and conversion event the capture system must support.' },
      { title: 'Lead Asset Architecture', description: 'Plan or refine a useful lead asset that gives the right prospect a reason to exchange contact information.' },
      { title: 'Landing Page & Capture Flow', description: 'Build a focused, mobile-ready path from intent to opt-in and resource delivery.' },
      { title: 'Welcome Handoff', description: 'Connect capture to the appropriate onboarding and follow-up journey.' },
      { title: 'Measurement Setup', description: 'Define the events and conversion points needed to evaluate the capture layer.' },
    ],
    keyFeatures: ['Audience and offer alignment', 'Lead asset architecture', 'Landing page and form', 'Welcome handoff', 'Conversion measurement'],
    cta, growthStage: ['Capture', 'Onboard'],
  },
  {
    id: 'lead-nurture-system', slug: 'lead-nurture-system', badge: 'Nurture', title: 'Lead Nurture System',
    purpose: 'Turn subscribers into informed, qualified opportunities.',
    summary: 'A structured nurture system combining email journeys, segmentation, recurring communication, intent signals, and conversion pathways.',
    startingPrice: 'From $1,500',
    accentColor: { bg: 'bg-cyan-50', text: 'text-[var(--color-growth-cyan,#0891B2)]', border: 'border-cyan-200' },
    deliverables: [
      { title: 'Nurture Architecture', description: 'Map what subscribers need to understand, trust, and do at each stage of the journey.' },
      { title: 'Automated Workflows', description: 'Build relevant follow-up sequences triggered by lifecycle stage, interests, or meaningful behavior.' },
      { title: 'Segmentation Model', description: 'Separate subscribers using declared information and behavioral signals that support better communication.' },
      { title: 'Broadcast Framework', description: 'Create a repeatable structure for newsletters, campaigns, and offer communication.' },
      { title: 'Conversion Path', description: 'Connect nurture activity to a clear next action such as booking, inquiry, or purchase.' },
    ],
    keyFeatures: ['Email nurture architecture', 'Behavioral segmentation', 'Automated follow-up', 'Newsletter framework', 'Conversion pathways'],
    cta, growthStage: ['Onboard', 'Nurture', 'Segment'],
  },
  {
    id: 'attention-to-leads-growth-system', slug: 'attention-to-leads-growth-system', badge: 'Flagship System', title: 'Attention-to-Leads Growth System',
    purpose: 'Build a complete, end-to-end customer acquisition engine.',
    summary: 'The flagship Apex engagement for businesses with an established offer, meaningful acquisition activity, and fragmented infrastructure. It connects content, distribution, capture, CRM, nurture, conversion, analytics, and optimization.',
    startingPrice: 'From $5,000', isFlagship: true,
    accentColor: { bg: 'bg-amber-50', text: 'text-[var(--color-strategic-orange,#D97706)]', border: 'border-amber-200' },
    deliverables: [
      { title: 'Customer Journey Map', description: 'Document the journey from first discovery through lead capture, nurture, conversion, and post-conversion stages.' },
      { title: 'Funnel & System Architecture', description: 'Define the connected architecture for acquisition, capture, CRM, nurture, sales handoff, and measurement.' },
      { title: 'Lead Capture Architecture', description: 'Build the landing, value-asset, form, and delivery layer required to convert attention into owned leads.' },
      { title: 'Email & Nurture Automation', description: 'Implement lifecycle communication, segmentation, intent signals, and appropriate conversion journeys.' },
      { title: 'CRM & Workflow Integration', description: 'Connect relevant customer data and handoffs across the existing client ecosystem.' },
      { title: 'Analytics & Optimization Plan', description: 'Establish meaningful events, reporting, bottleneck identification, and an iteration plan.' },
    ],
    keyFeatures: ['Customer journey architecture', 'Content-to-lead architecture', 'CRM integration', 'Email automation', 'Conversion workflow', 'Analytics and optimization'],
    cta, growthStage: ['Attract', 'Capture', 'Onboard', 'Nurture', 'Segment', 'Convert', 'Optimize'],
  },
  {
    id: 'content-acquisition-system', slug: 'content-acquisition-system', badge: 'Attract', title: 'Content Acquisition System',
    purpose: 'Turn content activity into a repeatable acquisition pathway.',
    summary: 'A structured content system designed around audience problems, distribution, calls to action, capture, and downstream conversion rather than visibility alone.',
    startingPrice: 'From $1,500/month',
    accentColor: { bg: 'bg-emerald-50', text: 'text-[var(--color-growth-green,#059669)]', border: 'border-emerald-200' },
    deliverables: [
      { title: 'Content Acquisition Strategy', description: 'Define content themes and buyer problems that support acquisition goals.' },
      { title: 'Short-Form Production Workflow', description: 'Create repeatable workflows for scripts, production, editing, review, and publishing.' },
      { title: 'Distribution Architecture', description: 'Organize platform distribution and repurposing around the audience rather than vanity volume.' },
      { title: 'CTA & Capture Routing', description: 'Connect useful content to an appropriate next step, landing experience, or owned audience channel.' },
      { title: 'Performance Loop', description: 'Use meaningful acquisition and conversion signals to improve topics, hooks, calls to action, and routing.' },
    ],
    keyFeatures: ['Content strategy', 'Short-form workflows', 'Distribution', 'Repurposing', 'CTA routing', 'Acquisition measurement'],
    cta, growthStage: ['Attract', 'Capture'],
  },
  {
    id: 'growth-systems-optimization', slug: 'growth-systems-optimization', badge: 'Optimize', title: 'Growth Systems Optimization',
    purpose: 'Improve the performance of an existing growth system.',
    summary: 'Ongoing diagnostic and optimization support for businesses that already have acquisition infrastructure but need better conversion, efficiency, measurement, or system reliability.',
    startingPrice: 'From $1,500/month',
    accentColor: { bg: 'bg-violet-50', text: 'text-violet-700', border: 'border-violet-200' },
    deliverables: [
      { title: 'Performance Review', description: 'Review agreed business, acquisition, conversion, and system health indicators.' },
      { title: 'Bottleneck Diagnosis', description: 'Identify the highest-impact constraints instead of optimizing isolated vanity metrics.' },
      { title: 'Experiment Plan', description: 'Prioritize practical changes to messaging, capture, nurture, conversion, or workflow logic.' },
      { title: 'Implementation Support', description: 'Apply approved improvements and verify that the system continues to work as intended.' },
      { title: 'Optimization Reporting', description: 'Document changes, observations, outcomes, and next priorities.' },
    ],
    keyFeatures: ['System diagnostics', 'Conversion optimization', 'Workflow improvement', 'Measurement review', 'Continuous iteration'],
    cta, growthStage: ['Optimize'],
  },
  {
    id: 'growth-systems-consulting', slug: 'growth-systems-consulting', badge: 'Advisory', title: 'Growth Systems Consulting',
    purpose: 'Get expert direction before, during, or between implementations.',
    summary: 'Focused strategic consulting for founders and teams that need help diagnosing growth-system problems, evaluating architecture, prioritizing work, or making implementation decisions.',
    startingPrice: '$100/hour',
    accentColor: { bg: 'bg-slate-50', text: 'text-slate-700', border: 'border-slate-200' },
    deliverables: [
      { title: 'Problem Diagnosis', description: 'Clarify the actual business-system problem before selecting a solution.' },
      { title: 'Architecture Review', description: 'Evaluate an existing funnel, customer journey, CRM, automation, or acquisition system.' },
      { title: 'Priority Roadmap', description: 'Identify what should happen now, later, or not at all.' },
      { title: 'Implementation Guidance', description: 'Provide decision support for internal teams or external implementation partners.' },
    ],
    keyFeatures: ['Strategic diagnosis', 'Architecture review', 'Prioritization', 'Implementation guidance'],
    cta, growthStage: ['Diagnose', 'Strategize', 'Architect'],
  },
  {
    id: 'growth-systems-training', slug: 'growth-systems-training', badge: 'Capability', title: 'Growth Systems Training',
    purpose: 'Help teams understand, operate, and improve their growth systems.',
    summary: 'Practical training for founders, marketers, and teams covering customer journeys, acquisition systems, lead capture, nurture, automation, measurement, and system adoption.',
    startingPrice: 'From $150',
    accentColor: { bg: 'bg-rose-50', text: 'text-rose-700', border: 'border-rose-200' },
    deliverables: [
      { title: 'Systems Training', description: 'Explain how the components of a growth system work together.' },
      { title: 'Platform Walkthroughs', description: 'Train users on the relevant tools and workflows within the client ecosystem.' },
      { title: 'Hands-On Exercises', description: 'Move from explanation to demonstration and supervised execution.' },
      { title: 'Adoption Support', description: 'Confirm competence and document repeatable operating procedures.' },
    ],
    keyFeatures: ['Founder training', 'Team workshops', 'Platform walkthroughs', 'Hands-on system adoption'],
    cta, growthStage: ['All stages as relevant'],
  },
];

export const diagnosticOffers = [
  { name: 'Rapid Growth Audit', price: '$250', description: 'Focused diagnostic for a defined growth bottleneck.' },
  { name: 'Growth Infrastructure Diagnostic', price: '$650', description: 'Structured review of the customer-acquisition infrastructure and major handoffs.' },
  { name: 'Comprehensive Systems Audit', price: '$1,250', description: 'Deep review across customer journey, acquisition, capture, nurture, conversion, automation, and measurement.' },
];

export const processSteps = [
  { number: '01', title: 'Diagnose', description: 'Understand the business, customer journey, existing systems, constraints, evidence, and bottlenecks.' },
  { number: '02', title: 'Strategize', description: 'Define the objective, priorities, audience, offer logic, and intervention required.' },
  { number: '03', title: 'Architect', description: 'Design the customer journey, system logic, data flow, workflows, and measurement structure.' },
  { number: '04', title: 'Build', description: 'Create the approved assets, pages, content systems, workflows, and infrastructure.' },
  { number: '05', title: 'Connect', description: 'Integrate the relevant tools, data sources, customer touchpoints, and handoffs.' },
  { number: '06', title: 'Automate', description: 'Automate repetitive administration while keeping strategic judgment under human control.' },
  { number: '07', title: 'Train', description: 'Explain, demonstrate, supervise, and confirm that the client can operate the system.' },
  { number: '08', title: 'Test', description: 'Run strategic, production, technical, and customer-experience QA before launch.' },
  { number: '09', title: 'Launch', description: 'Deploy the approved system and verify the live customer journey.' },
  { number: '10', title: 'Measure', description: 'Monitor agreed business, acquisition, conversion, and system-health signals.' },
  { number: '11', title: 'Optimize', description: 'Use evidence to identify bottlenecks and improve the system continuously.' },
];
