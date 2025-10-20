### Sacred Spiral Phase 1: Polished Frontend Implementation Plan for AI Developer Agent

This plan synthesizes all data from the provided chat history, including original and refined prompts for Lovable.dev, the evolution of features (e.g., public landing page, realms, journey, contact, initiates placeholder), design ethos (nature-rooted, feminine, intuitive, clean), and the minimal scraped content from https://sacred-spiral-flow.lovable.app/ (which appears as a basic placeholder with only a title, "Built with" badge link, and separator—indicating an incomplete or undeployed build). The scraped pages (/physical-realm, /mental-realm, etc.) are similarly empty, lacking structure, content, or design elements, so this plan assumes starting from a near-blank slate but instructs you to scan and build on any existing codebase without duplicates.

The goal is to create a **truly amazing and beautiful UI/UX**: feminine (soft, flowing, warm, empowering), engaging (subtle animations, intuitive flows, motivational copy), organized/easy to navigate (clear hierarchy, smooth transitions), super clean/modern (minimalist yet textured, responsive), with warm elements (earth tones, organic motifs). I've enhanced colors for femininity: softer, warmer palette with subtle gradients for depth.

**Key Enhancements from Chat History and Analysis:**
- **Colors**: Refined for femininity—primary: soft sage (#A8BFA3), accent: warm rose clay (#D4A5A5), neutral: creamy ivory (#F5F1E9), sand beige (#E3D6C7), deep ink (#4A4A4A) for text. Use gradients (e.g., sage to ivory) for backgrounds. Avoid harsh contrasts; ensure AA+ accessibility.
- **Typography**: Headings: Elegant serif (e.g., "Playfair Display" or "Lora" for feminine curves). Body: Clean sans-serif (e.g., "Montserrat" or "Open Sans" for modernity). Sizes: h1 3rem (mobile 2.5rem), body 1rem, with generous line-height (1.6).
- **Animations**: Subtle, breath-like (e.g., fade-in on scroll, gentle hover scales). Use Framer Motion or CSS transitions; respect prefers-reduced-motion.
- **UI/UX Principles**: Mobile-first, responsive (breakpoints: sm=640px, md=768px, lg=1024px). Warm elements: organic textures (subtle noise gradients), spirals/moons as SVGs. Engaging: Interactive CTAs with micro-feedback, scroll-triggered reveals. Organized: Consistent sections with dividers. Modern: No clutter, ample whitespace.
- **Missing from Scraped Site**: Everything—navigation, sections, content, images, forms. Build as specified, treating current placeholder as base (e.g., keep "Built with" in footer if exists, but style it subtly).
- **Scalability**: Prepare for Phase 2 (auth/dashboard) with modular code.

#### Global Agent Rules (Always Apply First)
- **Scan and Build on Top**: Before any change, scan the entire codebase (files in /src, /app, /pages, /components, etc.) for existing elements. Reuse/extend: e.g., if a Header.tsx exists, modify it; don't create HeaderNew.tsx. Avoid duplicates—merge logic if similar components found. If routes exist (e.g., /physical-realm), edit in-place.
- **Tech Stack Assumptions**: React/Next.js (Lovable default), Tailwind CSS for styling (extend config with custom colors/fonts). Use Framer Motion for animations. No backend yet (Supabase prep via comments/TODOs).
- **Naming Conventions**: PascalCase for components (e.g., RealmCard.tsx). kebab-case for routes (/physical-realm). camelCase for vars/functions.
- **Accessibility/SEO**: Semantic HTML (header/nav/main/section/footer). ARIA labels on interactives. Alt text on all images. Unique <title>/meta per page. Contrast checks via tools like WAVE.
- **Testing/QA**: After each step, test on mobile/desktop. Ensure no console errors. Lighthouse score >90 for performance/a11y.
- **Commit Strategy**: Git commit after each major step (e.g., "Add Header and Navigation").

#### File/Folder Structure (Create If Missing, Extend If Exists)
```
/src
  /app (or /pages if not app router)
    /layout.tsx (global layout with Header/Footer)
    /page.tsx (Home)
    /physical-realm/page.tsx
    /mental-realm/page.tsx
    /spiritual-realm/page.tsx
    /journey/page.tsx
    /contact/page.tsx
    /initiates/page.tsx
  /components
    /ui/Header.tsx
    /ui/Footer.tsx
    /ui/PageHero.tsx
    /ui/SectionWrapper.tsx
    /ui/RealmCard.tsx
    /ui/SpiralDivider.tsx (SVG component)
    /ui/ContactForm.tsx
    /ui/Button.tsx
    /ui/Timeline.tsx (for Journey page)
  /icons
    SpiralIcon.tsx
    MoonIcon.tsx
    LeafIcon.tsx
  /assets
    /images/placeholders
      hero-bg.png (subtle texture)
      physical-realm.jpg (warm, feminine fitness image placeholder)
      mental-realm.jpg (serene mind image)
      spiritual-realm.jpg (ritualistic image)
      journey-spiral.svg (spiral graphic)
  /styles
    globals.css (import fonts, Tailwind)
  /lib
    theme.ts (colors, fonts as exports)
    seo.ts (meta helpers)
```
- Extend Tailwind config: Add colors (e.g., 'sage': '#A8BFA3'), fonts.

#### Shared Components (Detailed Specs)
1. **Header.tsx** (Global nav, sticky)
   - Props: none.
   - Structure: Flex row (logo left, nav links right). Logo: "The Sacred Spiral" + SpiralIcon (warm rose clay). Links: Home (/), The Spiral (#realms anchor on home), Journey (/journey), About (#about on home), Contact (/contact), For Initiates (/initiates).
   - Style: Bg-ivory, shadow on scroll. Mobile: Hamburger (animate open/close). Anim: Fade-in on load.
   - Reuse: If exists, add feminine colors/animations.

2. **Footer.tsx** (Global, warm closure)
   - Structure: Flex (left: copyright "© The Sacred Spiral 2025 | Created with love"), center: SpiralDivider (animated subtle rotate), right: Instagram icon/link, email.
   - Style: Bg-sand-beige, small text. Include "Built with Lovable" if scanned in codebase (subtle).
   - Anim: Gentle fade on scroll.

3. **PageHero.tsx** (Hero section for all pages)
   - Props: { title: string, subtitle: string, bgImage?: string (placeholder path), ctaText?: string, ctaHref?: string | '#' }.
   - Structure: Full-width, gradient bg (sage to ivory), left: text (h1 title, p subtitle, Button if cta), right: image (with alt="Decorative [theme] background").
   - Style: Curved edges, warm texture overlay. Mobile: Stack vertical.
   - Anim: Text fade-up, image scale-in.

4. **SectionWrapper.tsx** (Reusable section container)
   - Props: { id: string, title?: string, children, bgColor?: 'ivory' | 'sand' }.
   - Structure: Max-width container, padding, optional h2 title with underline (rose clay).
   - Style: Spacious (py-16), subtle shadow.

5. **RealmCard.tsx** (For realms on home)
   - Props: { title: string, desc: string, href: string, icon: ReactNode, imageSrc: string, accentColor: 'sage' | 'rose' | 'ink' }.
   - Structure: Card with top image (alt="[Title] imagery"), icon, h3 title, p desc, Button "Learn More".
   - Style: Rounded, hover shadow (warm glow). Accent border.
   - Anim: Hover scale 1.05, ease-in-out 300ms.

6. **SpiralDivider.tsx** (Organic separator)
   - Structure: SVG path for spiral/moon/leaf motif, low opacity.
   - Style: Width full, height 50px, color rose-clay.
   - Anim: Subtle pulse or draw-in on scroll.

7. **Button.tsx** (Consistent CTAs)
   - Props: { variant: 'primary' (filled sage) | 'secondary' (outline rose) | 'ghost' (text-only), href?: string, onClick?: func }.
   - Style: Rounded, padding, warm hover (bg shift to rose).
   - Anim: Scale 1.02 on hover/focus.

8. **ContactForm.tsx** (Engaging form)
   - Structure: Fields (Name input, Email input, Message textarea), Submit Button.
   - Behavior: Client-side validation (required, email format). On submit: Show success message ("Thank you—I'll respond soon") with warm animation (fade green check).
   - Style: Soft borders, placeholders in ink. Mobile: Full-width.
   - Anim: Fields focus glow (rose clay).

9. **Timeline.tsx** (For Journey page)
   - Props: { stages: array of { phase: string, desc: string, duration: string } }.
   - Structure: Vertical line with nodes (Physical 3mo, Integration 1mo, etc.), icons.
   - Style: Curved connections, warm colors.
   - Anim: Draw line on scroll.

#### Routes & Pages (Detailed Content/Layout)
All pages wrap in layout with Header/Footer. Use SectionWrapper for blocks. Content from history: Warm, invitational tone (e.g., "Embrace your body's rhythm...").

1. **/ (Home - Default Landing)**
   - Hero: Title "The Sacred Spiral", Subtitle "A journey of embodiment through the Physical, Mental, and Spiritual realms.", CTA "Enter the Spiral" (#realms scroll).
   - Realms Section (id="realms", bg="ivory"): Intro p ("The Spiral is a path of remembering..."), 3-column grid (mobile 1) of RealmCards (Physical: sage/leaf, desc "Body intelligence...", href /physical-realm; Mental: rose/moon, "Shadow work..."; Spiritual: ink/spiral, "Ceremony...").
   - Journey Section: Header "Journey Through the Spiral", sub "The full-year path...", CTA "Learn More" (/journey).
   - About Section (id="about", bg="sand"): 2-3 p on cyclical living, image placeholder right.
   - Contact Section: Header "Connect with Me", sub "Have a question?...", ContactForm.
   - SEO: Title "The Sacred Spiral - Feminine Transformation", Desc "Cyclical journey through realms."

2. **/physical-realm**
   - Hero: Title "The Physical Realm", Subtitle "Fitness, nutrition, cycle syncing—in rhythm.", CTA "Join Now" (/initiates placeholder).
   - Overview Section: 2-3 p on functional movement, whole-foods, phases.
   - Pillars Grid: 3 cards (Fitness, Nutrition, Cycle Syncing) with descs.
   - CTA Section: Button "Back to Spiral" (/).

3. **/mental-realm**
   - Hero: Title "The Mental Realm", Subtitle "Shadow work, nervous system, mindset."
   - Desc Section: 2-3 p.
   - Coming Soon: Warm card "Launching soon—sign up for updates." (link to /contact).
   - Back Button.

4. **/spiritual-realm** (Similar to Mental, with spiritual desc).

5. **/journey**
   - Hero: Title "Journey Through the Sacred Spiral", Subtitle "12-month path of growth."
   - Timeline Section: Timeline component with stages (Physical 3mo, Integration 1mo, etc.), desc on integrations (meetups, access).
   - Benefits List: Bullets (guidance, community).
   - CTA: "Begin in Physical" (/physical-realm), "Contact" (/contact).

6. **/contact**
   - Hero: Title "Connect with Me", Subtitle "Questions or resonance?"
   - Split Layout: Left welcoming p + email link, right ContactForm.

7. **/initiates** (Placeholder)
   - Hero: Title "For Initiates", p "Private portal coming soon."
   - CTAs: "Back Home" (/), "Contact" (/contact).

#### Step-by-Step Implementation Guide
1. **Setup/Scan (1-2 hours)**: Clone repo if exists. Scan for duplicates. Install deps (framer-motion, tailwind). Extend Tailwind config with colors/fonts.
2. **Shared Components (2-3 hours)**: Build/extend Header, Footer, Button, SpiralDivider, PageHero, SectionWrapper, RealmCard, ContactForm, Timeline. Test animations.
3. **Home Page (2 hours)**: Add Hero, Realms grid, Journey/About/Contact sections. Wire anchors/CTAs.
4. **Realm Pages (1 hour each)**: Physical (full), Mental/Spiritual (coming soon).
5. **Journey/Contact/Initiates (1-2 hours)**: Add specific components (Timeline, Form).
6. **Polish & Animations (1 hour)**: Add fades/hovers site-wide. Responsive tests.
7. **SEO/Accessibility (30 min)**: Add meta, ARIA, alts.
8. **QA & Deploy (1 hour)**: Test navigation, forms, mobile. Commit, push to GitHub. Preview on Lovable.

This plan will yield a polished, feminine frontend. If needed, iterate with code stubs or Phase 2 plan.