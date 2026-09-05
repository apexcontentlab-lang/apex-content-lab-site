/**
 * Authoritative external sources used by Apex Content Lab's knowledge content.
 *
 * Keep this registry centralized so citation relationships remain stable,
 * reviewable, and reusable across GEO/AEO content without scattering URLs
 * throughout individual pages.
 */
export interface AuthoritativeSource {
  id: string;
  name: string;
  publisher: string;
  description: string;
  url: string;
}

export const authoritativeSources: Record<string, AuthoritativeSource> = {
  googleSenderGuidelines: {
    id: 'https://support.google.com/mail/answer/81126',
    name: 'Email sender guidelines',
    publisher: 'Google',
    description: 'Google guidance for email senders covering authentication, sender requirements, and message quality.',
    url: 'https://support.google.com/mail/answer/81126',
  },

  googleSenderIssues: {
    id: 'https://support.google.com/mail/answer/15256272',
    name: 'Email sender issues',
    publisher: 'Google',
    description: 'Google troubleshooting guidance for common sender and delivery issues.',
    url: 'https://support.google.com/mail/answer/15256272',
  },

  googlePostmasterTools: {
    id: 'https://support.google.com/mail/answer/14289100',
    name: 'Postmaster Tools',
    publisher: 'Google',
    description: 'Google documentation for monitoring email performance and sender reputation signals.',
    url: 'https://support.google.com/mail/answer/14289100',
  },

  googleHelpfulContent: {
    id: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
    name: 'Creating helpful, reliable, people-first content',
    publisher: 'Google Search Central',
    description: 'Google Search guidance on creating useful, reliable content for people rather than content designed only to manipulate rankings.',
    url: 'https://developers.google.com/search/docs/fundamentals/creating-helpful-content',
  },

  googleAiSearch: {
    id: 'https://developers.google.com/search/docs/appearance/ai-features',
    name: 'AI features and your website',
    publisher: 'Google Search Central',
    description: 'Google Search guidance relevant to how websites can be understood and surfaced in AI-powered search features.',
    url: 'https://developers.google.com/search/docs/appearance/ai-features',
  },

  icoElectronicMarketing: {
    id: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/',
    name: 'Direct marketing using electronic mail',
    publisher: 'UK Information Commissioner’s Office',
    description: 'ICO guidance covering electronic-mail direct marketing, consent, and opt-out requirements under UK rules.',
    url: 'https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-direct-marketing-using-electronic-mail/',
  },
  openAiPublisherGuidance: {
    id: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq',
    name: 'Publishers and Developers FAQ',
    publisher: 'OpenAI',
    description: 'OpenAI guidance for publishers on website discovery, crawler access, and ChatGPT search visibility.',
    url: 'https://help.openai.com/en/articles/12627856-publishers-and-developers-faq',
  },

};
