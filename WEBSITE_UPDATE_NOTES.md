# Apex Content Lab Website — Growth Systems Update

Updated: September 3, 2026

## Scope

This update preserves the existing visual design and focuses on content, positioning, information architecture, technical hygiene, accessibility, structured data, and search/AI discoverability.

## Strategic updates

- Repositioned Apex Content Lab as a Growth Systems Company.
- Updated the homepage around customer acquisition systems rather than generic marketing activity.
- Canonicalized the seven primary services:
  1. Lead Capture System
  2. Lead Nurture System
  3. Attention-to-Leads Growth System
  4. Content Acquisition System
  5. Growth Systems Optimization
  6. Growth Systems Consulting
  7. Growth Systems Training
- Added the three diagnostic entry points to the services architecture.
- Separated the seven-stage customer Growth System from the eleven-stage Apex delivery methodology.
- Removed unsupported client-result testimonials and quantitative claims from the homepage.
- Reframed the proof page as Work & Proof until verified client case studies exist.
- Removed Facebook from the public social configuration.
- Added a dedicated SEO/GEO/AEO knowledge page.

## Technical updates

- Centralized service structured data around `services.ts`.
- Updated Organization, Person, WebSite, WebPage, and Service schema relationships.
- Added breadcrumb schema to the framework and service detail pages.
- Added accessible skip navigation and consistent `main-content` targets.
- Fixed the global CSS token scope issue.
- Removed the BaseLayout typography override that conflicted with the global font system.
- Fixed malformed `aria-hidden` markup.
- Added the missing `/cookies` page.
- Added redirects from retired service URLs to the new canonical service URLs.
- Corrected the 512x512 favicon asset dimensions.
- Removed duplicate root robots/manifest files and redundant asset files.
- Explicitly allowed `OAI-SearchBot` in `public/robots.txt`.
- Removed the unused Meta Pixel environment placeholder.
- Added article authorship and update dates to key knowledge pages.

## SEO / GEO / AEO principles

The site does not rely on artificial “AI ranking” hacks. It focuses on crawlability, clear information architecture, useful original content, answer-oriented headings, internal linking, entity clarity, accessible HTML, accurate structured data, authorship, and measurement.

No `llms.txt` file is added as a claimed ranking mechanism. Current Google guidance says special AI text files are not required for AI search visibility.

## Known external dependency

The online scheduling URL is not hard-coded because the current project did not contain a verified live calendar URL. The booking page now provides a clean email/WhatsApp fallback and is ready for the real scheduling URL to be connected once supplied.

## Validation

Relative-import and source-reference checks were run locally. A full Astro production build could not be completed in this environment because the project dependencies were not available locally and package installation timed out.
