# Website 2.0 — Release Checklist

Master checklist before this site (`careos-website`, Sprints 1–6) replaces the current
production site. Status reflects the actual state of the codebase at the end of Sprint 6, not a
generic template — update the checkboxes as items are completed, don't just check everything off.

## Content

- [x] Landing page (Sprint 2)
- [x] Alltagshilfe (Sprint 3)
- [x] Salon & Club (Sprint 4)
- [x] Gut Begleitet Friend (Sprint 5)
- [x] Mitglied werden (Sprint 6)
- [x] Über Uns, Kontakt, Impressum, Datenschutz, News (pre-existing, Sprint 1 architecture only —
      content itself predates this project and hasn't been re-validated against current specs)
- [ ] **Images finalized** — several sections still use placeholder treatment, not real
      photography:
  - Landing carousel: all 15 news/event/project cards use an icon+gradient placeholder (no real
    photos exist for individual news items or events)
  - Salon gallery: only 2 real photos (`salon-activity-1.png`, `salon-activity-2.png`) — spec
    anticipates more
  - Alltagshilfe Trust section: helper profiles use initial-avatar placeholders, not real staff
    photos (photos explicitly "pending" per the client's own content spec)
  - Friend: 2 real device photos in use (`gut-friend-1.png`, `gut-friend-2.png`);
    `gut-friend-comparison.png` unused (not a real comparison graphic, just two photo variants)
- [ ] **Links verified** — recommend a full click-through pass on the production build
      (`npm run build && npm run preview`) before launch; automated smoke tests this session
      covered primary nav, footer, and cross-page CTAs but not every internal anchor
- [ ] **Legal pages reviewed** — Impressum has placeholder fields (`[placeholder]` for
      Vertretungsberechtigte Person, phone, email in `ImpressumPage.tsx`) that still need real
      values before launch; Datenschutz text has not been reviewed by legal counsel as far as this
      project's history shows

## Technical

- [x] `npm run build` passes with zero TypeScript errors (verified every sprint, most recently
      this sprint)
- [x] No TypeScript errors (`strict` mode on, `noUnusedLocals`/`noUnusedParameters` enabled in
      `tsconfig.app.json`)
- [ ] **Accessibility review** — component-level a11y has been a running concern each sprint
      (semantic headings, keyboard-operable `Accordion` via native `<details>`, focus rings via
      the global `:focus-visible` rule, alt text on content images) but there has been no full
      audit (axe/Lighthouse a11y score, screen-reader pass, color-contrast check across every
      section)
- [ ] **Performance review** — no formal Lighthouse run performed this sprint; the two largest
      images (`gut-friend-1.png`, `gut-friend-2.png`, `salon-activity-*.png`) are ~2MB PNGs,
      uncompressed and not converted to WebP — worth optimizing before launch given they're
      above-the-fold Hero images on their respective pages
- [ ] **SEO review** — only 4 of 11 pages have per-page metadata (`Seo` component, added
      Sprint 3): Alltagshilfe, Salon, Friend, Membership. Home, About, Contact, Impressum,
      Datenschutz, News, and Booking still show the static `index.html` title/description for
      every route. Also note: `Seo` sets tags client-side only (no SSR/prerendering in this
      app), so it helps same-session sharing and JS-rendering crawlers but not a plain
      non-JS crawler — a real fix would require SSR or prerendering, out of scope so far.
- [ ] **Sitemap** — no `sitemap.xml` exists yet
- [ ] **Robots** — no `robots.txt` exists yet
- [ ] **Open Graph images** — `Seo` supports an `ogImage` prop and the 4 pages using it pass a
      real existing photo, but there's no dedicated 1200×630 OG-optimized image for any page —
      they reuse full-size Hero photos

## Business

- [ ] **Contact forms tested** — `ConsultationForm` (Contact page), `InterestForm` (Membership),
      and the Footer `NewsletterForm` all work client-side (local confirmation state) but **none
      of them send data anywhere** — there is no backend endpoint for any of them. Only the
      booking flow (`POST /api/bookings`) hits a real API. This needs a decision before launch:
      wire these forms to a real destination (email, CRM, Mailchimp/Brevo per the client's own
      dev notes) or accept that submissions are currently not captured anywhere.
- [ ] **Newsletter configured** — footer signup is UI-only (per Sprint 2's explicit scope:
      "placeholder newsletter functionality for now"); no Mailchimp/Brevo integration exists
- [ ] **Analytics configured** — no analytics package (GA4, Plausible, or otherwise) is present
      anywhere in this codebase
- [ ] **Cookie consent reviewed** — no cookie banner or consent management exists; relevant once
      analytics is added, since GDPR compliance is called out repeatedly in the client's own
      product documentation
- [ ] **Final management approval** — pending

## Known follow-ups from Sprint 6 (Migration Report)

- `/mitgliedschaft`'s Interest Registration form and the Membership CTA's generic Family/Partner
  participation options were deliberately written without specific benefits, fees, or eligibility
  rules (none are documented) — real copy should replace these once those programs are actually
  defined.
- Multiple pages fall back to `/kontakt` for actions that don't have a dedicated flow yet
  (Friend waitlist, Membership registration, Salon volunteer interest) — consider whether these
  need their own routing/handling as the backend grows.
