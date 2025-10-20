Got it. Here’s a meticulous, copy-pasteable **Phase 1 Front-End Implementation Plan** for an AI developer agent. It assumes a modern React/Next.js stack (Lovable’s default), Tailwind (or equivalent utility CSS), and a componentized design. It focuses on **public pages only** (no auth required), with placeholders for images and content blocks. It also instructs the agent to **scan the existing codebase and extend rather than duplicate**.

---

# Sacred Spiral — Phase 1 Public Website (Front-End Only)

## Global Agent Rules (apply before any work)

1. **Scan first, then extend**

   * Search the repository for existing components/pages/styles **before creating new files**.
   * Reuse and extend shared components (navigation, footer, button, layout wrappers).
   * If a similarly named component exists, **augment it** rather than duplicating.
   * If a route exists, **edit in place**; do not create parallel routes.
2. **Naming**

   * Use kebab-case for routes (`/physical-realm`).
   * Use PascalCase for components (`RealmCard.tsx`).
   * Use camelCase for local constants/functions.
3. **Design tokens**

   * Add (or extend) a theme file or Tailwind config shades:

     * Colors: `sage-600 (#6C7A68)`, `sage-300`, `clay-600 (#8D5B4C)`, `clay-300`, `sand-200 (#EDE6DF)`, `ivory (#F8F6F2)`, `ink-900 (#1E1B18)`
     * Typography: Elegant serif for headings (e.g., “Fraunces”, “Cormorant Garamond”), clean sans for body (e.g., “Inter”, “Nunito Sans”).
4. **Aesthetic**

   * Soft shadows, rounded-2xl corners, spacious line-height.
   * Subtle motion (fade/slide at 150–250ms, easing `[0.22, 1, 0.36, 1]`).
   * Organic accents: spiral, moon phases, botanical line art (use **SVG placeholders**).
5. **Accessibility & SEO**

   * Semantic landmarks: `header`, `nav`, `main`, `section`, `footer`.
   * Each page: unique `<title>`, meta description, OpenGraph/Twitter tags.
   * Alt text for all images (use “decorative” when appropriate with `aria-hidden="true"` if purely ornamental).
   * Minimum color contrast AA.

---

## File/Folder Structure (create only if missing)

```
/src
  /app or /pages
    /components
      Header.tsx
      Footer.tsx
      PageHero.tsx
      RealmCard.tsx
      Section.tsx
      SpiralDivider.tsx
      ContactForm.tsx
      Button.tsx
    /(icons)
      Moon.tsx
      Spiral.tsx
      Leaf.tsx
    /(images)
      placeholders/
        hero.jpg
        realm-physical.jpg
        realm-mental.jpg
        realm-spiritual.jpg
        journey.jpg
  /lib
    seo.ts
```

> If the project uses `/app` router, use nested routes (`/app/(public)/...`). If it uses `/pages`, create pages accordingly. **Scan first**.

---

## Shared Components (specs & placement)

### 1) `Header.tsx`

* **Purpose:** Global navigation bar.
* **Props:** none.
* **Structure:**

  * Left: logo lockup (“The Sacred Spiral” + small spiral icon).
  * Right: nav links: `Home`, `The Spiral` (anchor to realms on `/`), `Journey`, `About` (anchor on `/`), `Contact`, `For Initiates` (link to `/initiates` placeholder).
* **Behavior:**

  * Sticky on scroll, subtle shadow after 20px.
  * Mobile: hamburger → slide-over menu.
* **Accessibility:**

  * `<nav aria-label="Primary">`.
  * Mobile button `aria-expanded` toggled.

### 2) `Footer.tsx`

* **Content:**

  * Left: short line (“© The Sacred Spiral 2025”).
  * Center: small spiral animation (SVG line rotates slowly, `prefers-reduced-motion` respected).
  * Right: social icons (Instagram), email link, small nav: `Privacy`, `Contact`.
* **Accessibility:** `<footer role="contentinfo">`.

### 3) `PageHero.tsx`

* **Props:** `{ title: string; subtitle?: string; imageAlt?: string }`
* **Layout:** full-width soft background (ivory/sand gradient), left-aligned copy, right-aligned **image placeholder**.
* **Use on:** Home, realm pages, Journey, Contact.
* **Motion:** fade+rise on load.

### 4) `Section.tsx`

* **Props:** `{ id?: string; title?: string; eyebrow?: string; children: ReactNode; background?: 'default'|'ivory'|'sand'; }`
* **Use:** General container with consistent padding, max-width, and optional background.

### 5) `RealmCard.tsx`

* **Props:**

  ```
  {
    title: 'Physical Realm'|'Mental Realm'|'Spiritual Realm',
    description: string,
    href: string,          // e.g. '/physical-realm'
    imageSrc?: string,     // placeholder
    accent: 'sage'|'clay'|'ink',
    icon?: ReactNode       // e.g. Moon, Leaf, Spiral
  }
  ```
* **Layout:** Image (top), title, description, **primary button “Learn More”**.
* **Motion:** hover lift + subtle shadow.
* **Usage:** On Home “Three Realms” section (three instances).

### 6) `SpiralDivider.tsx`

* **Purpose:** Visual flourish between sections.
* **Implementation:** Inline SVG spiral path, low opacity, `aria-hidden="true"`.

### 7) `Button.tsx`

* **Variants:** primary (sage), secondary (clay outline), ghost.
* **Props:** `{ as?: 'a'|'button', href?: string, children, variant?: 'primary'|'secondary'|'ghost' }`

### 8) `ContactForm.tsx`

* **Fields:** Name (required), Email (required), Message (required).
* **Behavior:** For Phase 1, **client-side validation only** and **no external submission**; show success toast “Thanks for reaching out — I’ll be in touch soon.”

  * Implement a `submitHandler` that prevents default and displays success.
  * Leave a TODO to wire backend later.
* **Accessibility:** Labels tied to inputs; error messages with `aria-live="polite"`.

---

## Routes & Page Specs

### `/` — Home / Landing (default, public)

**Goal:** Invite into the Spiral; route to all public subpages.

**Sections & exact content order:**

1. **Hero** (`PageHero`)

   * Title: “The Sacred Spiral”
   * Subtitle: “A journey of embodiment through the Physical, Mental, and Spiritual realms.”
   * Right: image placeholder (soft botanical/spiral).
   * Primary CTA: “Enter the Spiral” → smooth scroll to `#realms`.

2. **Three Realms** (`Section id="realms" background="ivory"`)

   * Intro copy (2–3 sentences):
     “The Spiral is a cyclical path of remembering. Move with your body’s wisdom, clarify the mind, and root into spirit.”
   * Grid (3 cols desktop, 1 col mobile) of `RealmCard`s:

     * **Physical Realm**

       * desc: “Body intelligence through functional movement, whole-food nutrition, and cycle syncing.”
       * href: `/physical-realm`, accent: `sage`, icon: `<Leaf />`, image: `/images/placeholders/realm-physical.jpg`
     * **Mental Realm**

       * desc: “Shadow work, nervous system support, and mindset re-patterning.”
       * href: `/mental-realm`, accent: `clay`, icon: `<Moon />`, image: `/images/placeholders/realm-mental.jpg`
     * **Spiritual Realm**

       * desc: “Ceremony, ritual, meditation, and feminine embodiment.”
       * href: `/spiritual-realm`, accent: `ink`, icon: `<Spiral />`, image: `/images/placeholders/realm-spiritual.jpg`

3. **Journey Through the Spiral** (`Section id="journey"`)

   * Two-column layout: left copy + right image placeholder (`/images/placeholders/journey.jpg`).
   * Header: “Journey Through the Spiral”
   * Text (concise):
     “A year-long path through three realms: 3 months in each, with a month of integration between levels. Integration months include optional community meetups and continued access to me for questions and shares.”
   * CTA: Button “Learn More” → `/journey`.

4. **About (on Home)** (`Section id="about" background="sand"`)

   * Header: “About the Work”
   * Paragraphs (2–3): language about cyclical living, body sovereignty, earth-rooted transformation.
   * Optional small portrait/illustration placeholder floated right on desktop.

5. **Contact (on Home)** (`Section id="contact"`)

   * Header: “Connect with Me”
   * Subtext: “Have a question or feel called to walk the spiral? I’d love to hear from you.”
   * Include `ContactForm`.

6. **Footer**

**SEO for `/`:**

* `<title>The Sacred Spiral — Feminine, Earth-Rooted Transformation</title>`
* Description: “A year-long cyclical journey through the Physical, Mental, and Spiritual realms: movement, nourishment, nervous system, ceremony.”

---

### `/physical-realm` — Learn More (active realm)

**Hero:**

* Title: “The Physical Realm”
* Subtitle: “Fitness, nutrition, and cycle syncing — in rhythm with your body.”
* Right image placeholder.

**Content sections:**

1. **Overview**

   * 2–3 paragraphs: functional movement, whole-food nourishment, training with menstrual phases.
2. **Three Pillars (cards row)**

   * **Fitness:** “Functional strength, mobility, and cycles of intensity and recovery.”
   * **Nutrition:** “Whole-food, hormone-supportive meals aligned to your needs.”
   * **Cycle Syncing:** “Training, fuel, and self-care tuned to menstrual, follicular, ovulatory, and luteal phases.”
3. **CTA**

   * Primary Button: “Join the Physical Realm” → (for now) `/initiates` or a placeholder checkout page.
   * Secondary Button: “Back to The Spiral” → `/`.

**SEO:**

* Title/desc emphasizing cycle-synced training & whole-food nutrition.

---

### `/mental-realm` — Learn More (coming soon)

**Hero:** Title “The Mental Realm”, subtitle “Shadow work, nervous system literacy, and mindset re-patterning.”

**Content:**

* Short description (2–3 paragraphs).
* **Coming Soon** panel (soft card):

  * “Full program launching soon.”
  * Notification CTA (for now, button opens `Contact` section or mailto).

**CTA:**

* “Back to The Spiral” → `/`.

---

### `/spiritual-realm` — Learn More (coming soon)

**Hero:** Title “The Spiritual Realm”, subtitle “Ceremony, ritual, meditation, and feminine embodiment.”

**Content & CTA:** same pattern as Mental Realm.

---

### `/journey` — The Year-Long Path

**Hero:** Title “Journey Through the Sacred Spiral”, subtitle “A 12-month cyclical path of growth, integration, and remembrance.”

**Content sections:**

1. **Timeline/Spiral Concept**

   * Copy: “Three months per realm with one-month integration in between.”
   * Visual: a **vertical timeline** OR **spiral graphic** (SVG placeholder) labeling order: Physical (3mo) → Integration (1mo) → Mental (3mo) → Integration (1mo) → Spiritual (3mo) → Integration (1mo).
2. **Integration Months**

   * Copy: Optional community meetups; continued access to guide for questions/shares; gentle assignments.
3. **What You Receive** (bulleted list)

   * Guidance, structure, seasonal rhythm, community touchpoints.
4. **CTA**

   * Primary: “Begin in the Physical Realm” → `/physical-realm`.
   * Secondary: “Contact Me” → `/contact`.

---

### `/contact` — Contact Page

**Hero:** Title “Connect with Me”, subtitle “Questions, resonance, or collaboration?”

**Content:**

* Left column: short welcoming copy, email link.
* Right column: `ContactForm` (Name, Email, Message).
* On submit: success state with message; keep the form for another message.

---

### `/initiates` — Placeholder (public)

* Title: “For Initiates”
* Text: “Private portal for current students — coming soon.”
* Buttons: “Back to Home” and “Contact Me”.

---

## Component Copy (starter text)

* Use the exact strings above; they’re intentionally concise.
* Where not specified, insert **one short paragraph** (2–4 sentences), tone: grounded, warm, invitational.

---

## Motion & Micro-interactions

* **On load:** Section fade-ins (20px rise).
* **Buttons:** scale 1.02 on hover/focus; focus outline 2px `sage-600`.
* **RealmCard hover:** lift + soft shadow.
* Respect `prefers-reduced-motion`.

---

## Responsive Rules

* Breakpoints: mobile-first; at `md` switch grids to 2 cols where relevant; at `lg` use 3 cols in the Realms grid.
* Hero: stack columns on mobile; align center text; image full-width above copy.

---

## SEO & Head Tags (all pages)

Use a shared helper `lib/seo.ts`:

```ts
export const seo = {
  siteName: 'The Sacred Spiral',
  defaultTitle: 'The Sacred Spiral',
  defaultDescription: 'A cyclical journey through the Physical, Mental, and Spiritual realms.',
  url: 'https://<your-domain>',
  image: 'https://<your-domain>/og.jpg'
}
```

On each page, set:

* `<title>{Page Title} | The Sacred Spiral</title>`
* `<meta name="description" content="...">`
* OpenGraph/Twitter meta using `seo`.

---

## QA / Acceptance Criteria Checklist

* [ ] `/` renders with **Hero → Realms → Journey → About → Contact → Footer** in that order.
* [ ] Each realm card shows **“Learn More”** and navigates correctly.
* [ ] `/physical-realm`, `/mental-realm`, `/spiritual-realm`, `/journey`, `/contact`, `/initiates` exist and match content specs.
* [ ] ContactForm validates required fields and shows success state (no backend calls).
* [ ] Header is sticky; “The Spiral” scrolls to Realms anchor on Home.
* [ ] All images are placeholders in `/images/placeholders/*`.
* [ ] No duplicate components/routes; existing site components reused/extended.
* [ ] Lighthouse: no major a11y errors; titles/descriptions set; links have discernible names.
* [ ] Mobile layout verified (≤375px width).

---

## Developer Notes / TODOs (for future phases, don’t implement now)

* Wire `ContactForm` to backend/email service.
* Add `/login` + Supabase auth; role-based gating for Initiates portal.
* Build dashboard routes and data models.
* Replace placeholders with brand imagery.

---

## Agent Execution Order (do this in sequence)

1. **Scan codebase** for existing `Header`, `Footer`, layout, typography, color tokens, buttons. Reuse or extend.
2. **Create/verify routes**: `/`, `/physical-realm`, `/mental-realm`, `/spiritual-realm`, `/journey`, `/contact`, `/initiates`.
3. **Implement shared components** (only if missing): `PageHero`, `Section`, `RealmCard`, `SpiralDivider`, `ContactForm`, `Button`.
4. **Build Home** using exact section order and copy above.
5. **Build realm pages** with learn-more content and “Coming Soon” messages for Mental/Spiritual.
6. **Build Journey page** with the timeline/spiral placeholder and CTAs.
7. **Build Contact page** with functional client-side form.
8. **Wire header nav** links + anchors; ensure smooth scroll.
9. **Set SEO meta** per page.
10. **Run QA checklist**, fix issues, commit.

---

(Added verbatim from user guidance as the canonical Phase 1 plan.)
