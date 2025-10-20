# Sacred Spiral Frontend - Complete Polish & Implementation Plan

## 🌿 PROJECT OVERVIEW

**Site Name:** The Sacred Spiral  
**Current Status:** Phase 1 Public Website (in progress)  
**Live Preview:** https://sacred-spiral-flow.lovable.app/  
**Goal:** Create a polished, feminine, earth-rooted public website for a transformational ecosystem guiding women through physical, mental, and spiritual evolution.

---

## 🎯 CRITICAL AGENT INSTRUCTIONS

### BEFORE STARTING ANY WORK:
1. **SCAN THE ENTIRE CODEBASE** - Review all existing files, components, routes, and styles
2. **IDENTIFY REUSABLE COMPONENTS** - Never duplicate. Always extend existing code
3. **CHECK FOR EXISTING ROUTES** - Build on top of what exists, don't create parallel versions
4. **VERIFY CURRENT STATE** - Understand what's working before making changes

### NAMING CONVENTIONS:
- Routes: `/kebab-case` (e.g., `/physical-realm`)
- Components: `PascalCase.tsx` (e.g., `RealmCard.tsx`)
- Variables/Functions: `camelCase`

### DESIGN PHILOSOPHY:
This is not a fitness app — it's a **digital temple for embodied transformation**. Every pixel should feel like an invitation back into rhythm with nature, self, and the sacred feminine.

---

## 🎨 DESIGN SYSTEM

### COLOR PALETTE (Feminine Earth Tones)
```css
Primary Colors:
- Sage Green: #6C7A68 (sage-600), #8FA891 (sage-400), #B8C7BA (sage-300)
- Clay Rose: #8D5B4C (clay-600), #B08B7E (clay-400), #D4B5A9 (clay-300)
- Sand: #EDE6DF (sand-200), #F5F0EB (sand-100)
- Ivory: #F8F6F2 (ivory-50)
- Ink: #1E1B18 (ink-900), #4A4542 (ink-700)

Accent Colors:
- Moon Silver: #C4C0BA
- Earth Gold: #C9A875
- Soft Rose: #D4A5A5
```

### TYPOGRAPHY
```css
Headings (Serif - Elegant & Sacred):
- Font Family: 'Fraunces' or 'Cormorant Garamond'
- H1: 3.5rem (56px) / line-height: 1.1 / weight: 600
- H2: 2.5rem (40px) / line-height: 1.2 / weight: 600
- H3: 1.875rem (30px) / line-height: 1.3 / weight: 500
- H4: 1.5rem (24px) / line-height: 1.4 / weight: 500

Body (Sans-Serif - Clean & Modern):
- Font Family: 'Inter' or 'Nunito Sans'
- Body Large: 1.125rem (18px) / line-height: 1.7 / weight: 400
- Body Regular: 1rem (16px) / line-height: 1.6 / weight: 400
- Body Small: 0.875rem (14px) / line-height: 1.5 / weight: 400
```

### SPACING SYSTEM
```css
- xs: 0.5rem (8px)
- sm: 1rem (16px)
- md: 1.5rem (24px)
- lg: 2rem (32px)
- xl: 3rem (48px)
- 2xl: 4rem (64px)
- 3xl: 6rem (96px)
- 4xl: 8rem (128px)
```

### BORDER RADIUS
```css
- sm: 0.5rem (8px)
- md: 0.75rem (12px)
- lg: 1rem (16px)
- xl: 1.5rem (24px)
- 2xl: 2rem (32px)
- full: 9999px
```

### SHADOWS
```css
Soft shadows for depth:
- sm: 0 2px 8px rgba(30, 27, 24, 0.06)
- md: 0 4px 16px rgba(30, 27, 24, 0.08)
- lg: 0 8px 24px rgba(30, 27, 24, 0.10)
- xl: 0 12px 32px rgba(30, 27, 24, 0.12)
```

### ANIMATIONS
```css
Timing Functions (Sacred & Intentional):
- Ease: cubic-bezier(0.22, 1, 0.36, 1) /* smooth, organic */
- Duration: 150ms (micro), 250ms (small), 400ms (medium), 600ms (large)

Motion Types:
- Fade In: opacity 0 → 1
- Rise: transform translateY(20px) → 0
- Lift: transform translateY(0) → translateY(-4px) + shadow increase
- Scale: transform scale(1) → scale(1.02)

ALWAYS respect prefers-reduced-motion
```

---

## 📁 FILE STRUCTURE

```
/src
  /app or /pages
    /(public)
      page.tsx                    # Home/Landing
      /physical-realm
        page.tsx
      /mental-realm
        page.tsx
      /spiritual-realm
        page.tsx
      /journey
        page.tsx
      /contact
        page.tsx
      /initiates
        page.tsx
    /components
      /layout
        Header.tsx
        Footer.tsx
        PageLayout.tsx
      /sections
        PageHero.tsx
        Section.tsx
        RealmCard.tsx
        SpiralDivider.tsx
        JourneyTimeline.tsx
      /ui
        Button.tsx
        ContactForm.tsx
        Card.tsx
      /icons
        SpiralIcon.tsx
        MoonIcon.tsx
        LeafIcon.tsx
    /lib
      seo.ts
      theme.ts
    /assets
      /images
        /placeholders
          hero-main.jpg
          realm-physical.jpg
          realm-mental.jpg
          realm-spiritual.jpg
          journey.jpg
          about-portrait.jpg
```

---

## 🏗️ COMPONENT SPECIFICATIONS

### 1. Header.tsx (Global Navigation)

**Purpose:** Consistent navigation across all pages

**Structure:**
```tsx
<header className="sticky top-0 z-50 bg-ivory-50/95 backdrop-blur-sm border-b border-sand-200">
  <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-20">
      {/* Left: Logo */}
      <div className="flex items-center gap-2">
        <SpiralIcon className="w-8 h-8 text-sage-600" />
        <span className="font-serif text-2xl font-semibold text-ink-900">
          The Sacred Spiral
        </span>
      </div>
      
      {/* Center: Desktop Nav */}
      <div className="hidden md:flex items-center gap-8">
        <Link href="/">Home</Link>
        <Link href="/#realms">The Spiral</Link>
        <Link href="/journey">Journey</Link>
        <Link href="/#about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/initiates" className="text-clay-600">For Initiates</Link>
      </div>
      
      {/* Right: Mobile Menu Button */}
      <button className="md:hidden" aria-label="Menu">
        <MenuIcon />
      </button>
    </div>
  </nav>
  
  {/* Mobile Slide-Over Menu */}
  <MobileMenu />
</header>
```

**Behavior:**
- Sticky positioning with subtle shadow after scroll
- Desktop: horizontal nav, elegant spacing
- Mobile: hamburger menu → smooth slide-over from right
- Active link styling with underline or color change
- Smooth scroll for anchor links (e.g., "The Spiral" → #realms)

**Accessibility:**
- `<nav aria-label="Primary navigation">`
- Mobile button: `aria-expanded="false"` toggled on click
- Focus visible on all links
- Keyboard navigable

---

### 2. Footer.tsx

**Purpose:** Consistent footer with contact, social, and visual flourish

**Structure:**
```tsx
<footer className="bg-sand-100 border-t border-sand-200 mt-20">
  <div className="max-w-7xl mx-auto px-4 py-12">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
      {/* Left: Copyright */}
      <div className="text-ink-700 text-sm text-center md:text-left">
        © The Sacred Spiral 2025<br />
        Created with love and rhythm
      </div>
      
      {/* Center: Spiral Animation */}
      <div className="flex justify-center">
        <SpiralIcon className="w-16 h-16 text-sage-600 animate-slow-spin" />
      </div>
      
      {/* Right: Social & Links */}
      <div className="flex flex-col items-center md:items-end gap-4">
        <div className="flex gap-4">
          <a href="https://instagram.com/..." aria-label="Instagram">
            <InstagramIcon />
          </a>
          <a href="mailto:hello@sacredspiral.com">
            <MailIcon />
          </a>
        </div>
        <div className="flex gap-4 text-sm text-ink-700">
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
        </div>
      </div>
    </div>
  </div>
</footer>
```

**Animation:**
- Spiral rotates slowly (360deg over 20s)
- Respect `prefers-reduced-motion`

---

### 3. PageHero.tsx

**Purpose:** Reusable hero section for page headers

**Props:**
```typescript
interface PageHeroProps {
  title: string;
  subtitle?: string;
  imageSrc?: string;
  imageAlt?: string;
  ctaText?: string;
  ctaHref?: string;
  ctaOnClick?: () => void;
  variant?: 'default' | 'large' | 'compact';
}
```

**Structure:**
```tsx
<section className="relative overflow-hidden bg-gradient-to-br from-sand-100 to-ivory-50">
  <div className="max-w-7xl mx-auto px-4 py-16 md:py-24">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
      {/* Left: Content */}
      <div className="space-y-6">
        <h1 className="font-serif text-5xl md:text-6xl text-ink-900 leading-tight">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-ink-700 leading-relaxed">
            {subtitle}
          </p>
        )}
        {ctaText && (
          <Button variant="primary" href={ctaHref} onClick={ctaOnClick}>
            {ctaText}
          </Button>
        )}
      </div>
      
      {/* Right: Image */}
      <div className="relative h-80 md:h-96 rounded-2xl overflow-hidden">
        <img 
          src={imageSrc || '/images/placeholders/hero.jpg'}
          alt={imageAlt || ''}
          className="w-full h-full object-cover"
        />
        {/* Optional overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-sand-100/20 to-transparent" />
      </div>
    </div>
  </div>
  
  {/* Decorative spiral accent */}
  <SpiralDivider />
</section>
```

**Motion:**
- Fade in + rise 20px on load (250ms delay)
- Image subtle parallax on scroll (optional)

---

### 4. RealmCard.tsx

**Purpose:** Display each realm with consistent styling

**Props:**
```typescript
interface RealmCardProps {
  title: 'Physical Realm' | 'Mental Realm' | 'Spiritual Realm';
  description: string;
  href: string;
  imageSrc: string;
  accent: 'sage' | 'clay' | 'ink';
  icon: ReactNode;
}
```

**Structure:**
```tsx
<Link href={href}>
  <article className="group relative overflow-hidden rounded-2xl bg-ivory-50 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
    {/* Image */}
    <div className="relative h-64 overflow-hidden">
      <img 
        src={imageSrc}
        alt={`${title} imagery`}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className={`absolute inset-0 bg-gradient-to-t from-${accent}-900/60 to-transparent`} />
    </div>
    
    {/* Content */}
    <div className="p-6 space-y-4">
      <div className="flex items-center gap-3">
        <div className={`text-${accent}-600`}>
          {icon}
        </div>
        <h3 className="font-serif text-2xl font-semibold text-ink-900">
          {title}
        </h3>
      </div>
      
      <p className="text-ink-700 leading-relaxed">
        {description}
      </p>
      
      <Button variant="secondary" className="w-full">
        Learn More
      </Button>
    </div>
  </article>
</Link>
```

**Interaction:**
- Hover: lift (-4px), shadow increase, image scale 1.05
- Focus: visible outline
- Smooth transitions (300ms)

---

### 5. Button.tsx

**Purpose:** Consistent button styling across the site

**Variants:**
```typescript
type ButtonVariant = 'primary' | 'secondary' | 'ghost';

interface ButtonProps {
  children: ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
  as?: 'button' | 'a';
}
```

**Styles:**
```tsx
// Primary (Sage)
className="px-8 py-4 bg-sage-600 text-white rounded-full font-medium 
           hover:bg-sage-700 hover:scale-102 focus:ring-4 focus:ring-sage-300
           transition-all duration-200"

// Secondary (Clay Outline)
className="px-8 py-4 border-2 border-clay-600 text-clay-600 rounded-full font-medium
           hover:bg-clay-600 hover:text-white hover:scale-102
           transition-all duration-200"

// Ghost
className="px-6 py-3 text-ink-700 hover:text-sage-600 underline-offset-4 hover:underline
           transition-colors duration-200"
```

---

### 6. ContactForm.tsx

**Purpose:** Functional contact form with validation

**Structure:**
```tsx
<form onSubmit={handleSubmit} className="space-y-6 max-w-xl">
  {/* Name Field */}
  <div>
    <label htmlFor="name" className="block text-sm font-medium text-ink-900 mb-2">
      Name *
    </label>
    <input
      type="text"
      id="name"
      required
      className="w-full px-4 py-3 rounded-lg border border-sand-200 
                 focus:border-sage-600 focus:ring-2 focus:ring-sage-200
                 transition-colors"
    />
  </div>
  
  {/* Email Field */}
  <div>
    <label htmlFor="email" className="block text-sm font-medium text-ink-900 mb-2">
      Email *
    </label>
    <input
      type="email"
      id="email"
      required
      className="w-full px-4 py-3 rounded-lg border border-sand-200 
                 focus:border-sage-600 focus:ring-2 focus:ring-sage-200
                 transition-colors"
    />
  </div>
  
  {/* Message Field */}
  <div>
    <label htmlFor="message" className="block text-sm font-medium text-ink-900 mb-2">
      Message *
    </label>
    <textarea
      id="message"
      required
      rows={6}
      className="w-full px-4 py-3 rounded-lg border border-sand-200 
                 focus:border-sage-600 focus:ring-2 focus:ring-sage-200
                 transition-colors resize-none"
    />
  </div>
  
  {/* Submit Button */}
  <Button type="submit" variant="primary" className="w-full">
    Send Message
  </Button>
  
  {/* Success State */}
  {submitted && (
    <div className="p-4 bg-sage-100 border border-sage-300 rounded-lg text-sage-900">
      Thank you for reaching out — I'll be in touch soon.
    </div>
  )}
</form>
```

**Behavior:**
- Client-side validation
- On submit: prevent default, show success message, keep form for additional messages
- TODO: Wire to backend/email service in future phase

---

## 📄 PAGE SPECIFICATIONS

### HOME PAGE (/)

**Route:** `/` (default landing)

**Sections (in order):**

#### 1. Hero Section
```tsx
<PageHero 
  title="The Sacred Spiral"
  subtitle="A journey of embodiment through the Physical, Mental, and Spiritual realms."
  imageSrc="/images/placeholders/hero-main.jpg"
  imageAlt="Sacred botanical spiral"
  ctaText="Enter the Spiral"
  ctaOnClick={() => scrollTo('#realms')}
/>
```

#### 2. Three Realms Section (id="realms")
```tsx
<Section 
  id="realms"
  background="ivory"
  className="py-20"
>
  <div className="text-center mb-16">
    <h2 className="font-serif text-4xl text-ink-900 mb-4">
      The Three Realms
    </h2>
    <p className="text-xl text-ink-700 max-w-3xl mx-auto leading-relaxed">
      The Spiral is a cyclical path of remembering. Move with your body's wisdom, 
      clarify the mind, and root into spirit.
    </p>
  </div>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <RealmCard
      title="Physical Realm"
      description="Body intelligence through functional movement, whole-food nutrition, and cycle syncing."
      href="/physical-realm"
      imageSrc="/images/placeholders/realm-physical.jpg"
      accent="sage"
      icon={<LeafIcon />}
    />
    
    <RealmCard
      title="Mental Realm"
      description="Shadow work, nervous system support, and mindset re-patterning."
      href="/mental-realm"
      imageSrc="/images/placeholders/realm-mental.jpg"
      accent="clay"
      icon={<MoonIcon />}
    />
    
    <RealmCard
      title="Spiritual Realm"
      description="Ceremony, ritual, meditation, and feminine embodiment."
      href="/spiritual-realm"
      imageSrc="/images/placeholders/realm-spiritual.jpg"
      accent="ink"
      icon={<SpiralIcon />}
    />
  </div>
</Section>
```

#### 3. Journey Through the Spiral Section (id="journey")
```tsx
<Section 
  id="journey"
  background="default"
  className="py-20"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left: Content */}
    <div className="space-y-6">
      <h2 className="font-serif text-4xl text-ink-900">
        Journey Through the Spiral
      </h2>
      <p className="text-lg text-ink-700 leading-relaxed">
        A year-long path through three realms: 3 months in each, with a month of 
        integration between levels.
      </p>
      <p className="text-lg text-ink-700 leading-relaxed">
        Integration months include optional community meetups and continued access 
        to me for questions and shares.
      </p>
      <Button variant="primary" href="/journey">
        Learn More
      </Button>
    </div>
    
    {/* Right: Image */}
    <div className="relative h-96 rounded-2xl overflow-hidden">
      <img 
        src="/images/placeholders/journey.jpg"
        alt="Sacred Spiral journey"
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</Section>
```

#### 4. About Section (id="about")
```tsx
<Section 
  id="about"
  background="sand"
  className="py-20"
>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    {/* Left: Image */}
    <div className="relative h-96 rounded-2xl overflow-hidden order-2 md:order-1">
      <img 
        src="/images/placeholders/about-portrait.jpg"
        alt="Sacred Spiral guide"
        className="w-full h-full object-cover"
      />
    </div>
    
    {/* Right: Content */}
    <div className="space-y-6 order-1 md:order-2">
      <h2 className="font-serif text-4xl text-ink-900">
        About the Work
      </h2>
      <p className="text-lg text-ink-700 leading-relaxed">
        The Sacred Spiral is a return to cyclical living — honoring the body's 
        wisdom, the mind's capacity for transformation, and the spirit's longing 
        for ceremony.
      </p>
      <p className="text-lg text-ink-700 leading-relaxed">
        This work is rooted in body sovereignty, earth-based rhythms, and the 
        feminine principle that true power comes from being in flow, not force.
      </p>
      <p className="text-lg text-ink-700 leading-relaxed">
        Whether you're rebuilding your relationship with movement, clearing old 
        patterns, or stepping into spiritual practice — this journey meets you 
        where you are.
      </p>
    </div>
  </div>
</Section>
```

#### 5. Contact Section (id="contact")
```tsx
<Section 
  id="contact"
  background="default"
  className="py-20"
>
  <div className="max-w-2xl mx-auto text-center mb-12">
    <h2 className="font-serif text-4xl text-ink-900 mb-4">
      Connect with Me
    </h2>
    <p className="text-xl text-ink-700">
      Have a question or feel called to walk the spiral? I'd love to hear from you.
    </p>
  </div>
  
  <div className="max-w-xl mx-auto">
    <ContactForm />
  </div>
</Section>
```

**SEO:**
```tsx
<Head>
  <title>The Sacred Spiral — Feminine, Earth-Rooted Transformation</title>
  <meta name="description" content="A year-long cyclical journey through the Physical, Mental, and Spiritual realms: movement, nourishment, nervous system, ceremony." />
  <meta property="og:title" content="The Sacred Spiral" />
  <meta property="og:description" content="Transform through the three realms of embodiment" />
  <meta property="og:image" content="/og-image.jpg" />
</Head>
```

---

### PHYSICAL REALM PAGE (/physical-realm)

**Hero:**
```tsx
<PageHero 
  title="The Physical Realm"
  subtitle="Fitness, nutrition, and cycle syncing — in rhythm with your body."
  imageSrc="/images/placeholders/realm-physical.jpg"
/>
```

**Content Sections:**

#### 1. Overview
```tsx
<Section className="py-16">
  <div className="max-w-4xl mx-auto space-y-6 text-lg text-ink-700 leading-relaxed">
    <p>
      The Physical Realm is where transformation begins — through functional movement, 
      whole-food nourishment, and aligning your training with the natural rhythm of 
      your menstrual cycle.
    </p>
    <p>
      This isn't about pushing through pain or following generic programs. It's about 
      learning to listen to your body's intelligence and moving with intention.
    </p>
    <p>
      You'll build strength, mobility, and a deeper relationship with your body as a 
      sacred vessel — not something to control, but something to honor.
    </p>
  </div>
</Section>
```

#### 2. Three Pillars (Fitness, Nutrition, Cycle Syncing)
```tsx
<Section background="ivory" className="py-16">
  <h2 className="font-serif text-4xl text-ink-900 text-center mb-12">
    The Three Pillars
  </h2>
  
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    <Card icon={<DumbbellIcon />} title="Fitness">
      <p>
        Functional strength, mobility, and cycles of intensity and recovery. 
        Training that honors your body's capacity.
      </p>
    </Card>
    
    <Card icon={<AppleIcon />} title="Nutrition">
      <p>
        Whole-food, hormone-supportive meals aligned to your needs. Nourishment 
        that fuels transformation.
      </p>
    </Card>
    
    <Card icon={<MoonIcon />} title="Cycle Syncing">
      <p>
        Training, fuel, and self-care tuned to menstrual, follicular, ovulatory, 
        and luteal phases.
      </p>
    </Card>
  </div>
</Section>
```

#### 3. CTA Section
```tsx
<Section className="py-16 text-center">
  <div className="max-w-2xl mx-auto space-y-6">
    <h2 className="font-serif text-4xl text-ink-900">
      Ready to Begin?
    </h2>
    <p className="text-xl text-ink-700">
      Join the Physical Realm and start your journey of embodied transformation.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" href="/initiates">
        Join the Physical Realm
      </Button>
      <Button variant="secondary" href="/">
        Back to The Spiral
      </Button>
    </div>
  </div>
</Section>
```

---

### MENTAL REALM PAGE (/mental-realm)

**Hero:**
```tsx
<PageHero 
  title="The Mental Realm"
  subtitle="Shadow work, nervous system literacy, and mindset re-patterning."
  imageSrc="/images/placeholders/realm-mental.jpg"
/>
```

**Content:**
```tsx
<Section className="py-16">
  <div className="max-w-4xl mx-auto space-y-8 text-center">
    <p className="text-lg text-ink-700 leading-relaxed">
      The Mental Realm is where we turn toward the inner landscape — exploring 
      shadow patterns, regulating the nervous system, and rewiring limiting beliefs.
    </p>
    <p className="text-lg text-ink-700 leading-relaxed">
      This work requires courage, but it's where true liberation lives.
    </p>
    
    {/* Coming Soon Panel */}
    <div className="mt-12 p-12 bg-sand-100 rounded-2xl border-2 border-sand-200">
      <h3 className="font-serif text-3xl text-ink-900 mb-4">
        Full Program Launching Soon
      </h3>
      <p className="text-lg text-ink-700 mb-6">
        The Mental Realm will open in the coming months. Sign up for updates or 
        reach out with questions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" href="/contact">
          Get Notified
        </Button>
        <Button variant="ghost" href="/">
          Back to The Spiral
        </Button>
      </div>
    </div>
  </div>
</Section>
```

---

### SPIRITUAL REALM PAGE (/spiritual-realm)

**Hero:**
```tsx
<PageHero 
  title="The Spiritual Realm"
  subtitle="Ceremony, ritual, meditation, and feminine embodiment."
  imageSrc="/images/placeholders/realm-spiritual.jpg"
/>
```

**Content:**
```tsx
<Section className="py-16">
  <div className="max-w-4xl mx-auto space-y-8 text-center">
    <p className="text-lg text-ink-700 leading-relaxed">
      The Spiritual Realm is the deepest layer of the spiral — connecting to the 
      sacred, practicing ritual, and embodying the feminine principle of receptivity 
      and intuition.
    </p>
    <p className="text-lg text-ink-700 leading-relaxed">
      This is where structure meets spirit, and where transformation becomes ceremony.
    </p>
    
    {/* Coming Soon Panel */}
    <div className="mt-12 p-12 bg-sand-100 rounded-2xl border-2 border-sand-200">
      <h3 className="font-serif text-3xl text-ink-900 mb-4">
        Full Program Launching Soon
      </h3>
      <p className="text-lg text-ink-700 mb-6">
        The Spiritual Realm will open in the coming months. Sign up for updates or 
        reach out with questions.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button variant="secondary" href="/contact">
          Get Notified
        </Button>
        <Button variant="ghost" href="/">
          Back to The Spiral
        </Button>
      </div>
    </div>
  </div>
</Section>
```

---

### JOURNEY PAGE (/journey)

**Hero:**
```tsx
<PageHero 
  title="Journey Through the Sacred Spiral"
  subtitle="A 12-month cyclical path of growth, integration, and remembrance."
  imageSrc="/images/placeholders/journey.jpg"
/>
```

**Content Sections:**

#### 1. Timeline/Spiral Concept
```tsx
<Section className="py-16">
  <div className="max-w-4xl mx-auto space-y-8">
    <div className="text-center mb-12">
      <h2 className="font-serif text-4xl text-ink-900 mb-4">
        The 12-Month Path
      </h2>
      <p className="text-xl text-ink-700 leading-relaxed">
        Three months per realm with one-month integration in between — a rhythm 
        that honors both growth and rest.
      </p>
    </div>
    
    {/* Timeline Visualization */}
    <div className="space-y-6">
      {/* Physical Realm - Months 1-3 */}
      <div className="flex items-start gap-6 p-6 bg-sage-50 rounded-xl border-l-4 border-sage-600">
        <div className="flex-shrink-0">
          <LeafIcon className="w-12 h-12 text-sage-600" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Physical Realm — Months 1–3
          </h3>
          <p className="text-ink-700">
            Fitness, nutrition, and cycle syncing. Build a foundation of body 
            intelligence and learn to move with your natural rhythm.
          </p>
        </div>
      </div>
      
      {/* Integration - Month 4 */}
      <div className="flex items-start gap-6 p-6 bg-sand-100 rounded-xl border-l-4 border-sand-300">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center">
            <span className="text-2xl">⟳</span>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Integration Month — Month 4
          </h3>
          <p className="text-ink-700">
            Optional community meetups, continued access to guidance, gentle integration 
            practices. A pause to embody what you've learned.
          </p>
        </div>
      </div>
      
      {/* Mental Realm - Months 5-7 */}
      <div className="flex items-start gap-6 p-6 bg-clay-50 rounded-xl border-l-4 border-clay-600">
        <div className="flex-shrink-0">
          <MoonIcon className="w-12 h-12 text-clay-600" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Mental Realm — Months 5–7
          </h3>
          <p className="text-ink-700">
            Shadow work, nervous system awareness, and mindset reprogramming. Turn 
            toward the inner landscape with compassion.
          </p>
        </div>
      </div>
      
      {/* Integration - Month 8 */}
      <div className="flex items-start gap-6 p-6 bg-sand-100 rounded-xl border-l-4 border-sand-300">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center">
            <span className="text-2xl">⟳</span>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Integration Month — Month 8
          </h3>
          <p className="text-ink-700">
            Reflection, rest, and integration. Space to allow new patterns to settle 
            into your being.
          </p>
        </div>
      </div>
      
      {/* Spiritual Realm - Months 9-11 */}
      <div className="flex items-start gap-6 p-6 bg-ink-50 rounded-xl border-l-4 border-ink-700">
        <div className="flex-shrink-0">
          <SpiralIcon className="w-12 h-12 text-ink-700" />
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Spiritual Realm — Months 9–11
          </h3>
          <p className="text-ink-700">
            Ceremony, meditation, and embodiment. Root into spiritual practice and 
            connect to the sacred feminine.
          </p>
        </div>
      </div>
      
      {/* Final Integration - Month 12 */}
      <div className="flex items-start gap-6 p-6 bg-sand-100 rounded-xl border-l-4 border-sand-300">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-sand-200 flex items-center justify-center">
            <span className="text-2xl">✦</span>
          </div>
        </div>
        <div>
          <h3 className="font-serif text-2xl text-ink-900 mb-2">
            Completion & Integration — Month 12
          </h3>
          <p className="text-ink-700">
            A month to honor the full cycle, celebrate transformation, and prepare 
            for what comes next.
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>
```

#### 2. What You Receive
```tsx
<Section background="ivory" className="py-16">
  <div className="max-w-4xl mx-auto">
    <h2 className="font-serif text-4xl text-ink-900 text-center mb-12">
      What You Receive
    </h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            Structured programs for each realm with clear milestones
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            Monthly integration periods with optional community gatherings
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            Continuous access to guidance and support throughout the year
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            Tools, practices, and resources aligned to each realm
          </p>
        </div>
      </div>
      
      <div className="space-y-4">
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            A sacred container to explore body, mind, and spirit
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            Connection with other women walking the spiral
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            A rhythm that honors growth, rest, and cyclical living
          </p>
        </div>
        
        <div className="flex items-start gap-4">
          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-sage-600 flex items-center justify-center text-white">
            ✓
          </div>
          <p className="text-ink-700">
            A year-long investment in your transformation
          </p>
        </div>
      </div>
    </div>
  </div>
</Section>
```

#### 3. CTA Section
```tsx
<Section className="py-16 text-center">
  <div className="max-w-2xl mx-auto space-y-6">
    <h2 className="font-serif text-4xl text-ink-900">
      Begin Your Journey
    </h2>
    <p className="text-xl text-ink-700">
      The full-year journey is coming soon. For now, you can begin in the Physical Realm.
    </p>
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="primary" href="/physical-realm">
        Start with the Physical Realm
      </Button>
      <Button variant="secondary" href="/contact">
        Contact Me
      </Button>
    </div>
  </div>
</Section>
```

---

### CONTACT PAGE (/contact)

**Hero:**
```tsx
<PageHero 
  title="Connect with Me"
  subtitle="Questions, resonance, or collaboration?"
  variant="compact"
/>
```

**Content:**
```tsx
<Section className="py-16">
  <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
    {/* Left: Welcome Copy */}
    <div className="space-y-6">
      <h2 className="font-serif text-3xl text-ink-900">
        I'd Love to Hear From You
      </h2>
      <p className="text-lg text-ink-700 leading-relaxed">
        Whether you have questions about the Sacred Spiral, feel called to begin 
        your journey, or simply want to connect — I'm here.
      </p>
      <p className="text-lg text-ink-700 leading-relaxed">
        You can also reach me directly at:
      </p>
      <a 
        href="mailto:hello@sacredspiral.com" 
        className="text-sage-600 hover:text-sage-700 text-lg font-medium"
      >
        hello@sacredspiral.com
      </a>
      
      {/* Optional: Social Links */}
      <div className="pt-6">
        <p className="text-sm text-ink-700 mb-3">Connect on social:</p>
        <div className="flex gap-4">
          <a 
            href="https://instagram.com/..." 
            className="text-sage-600 hover:text-sage-700"
            aria-label="Instagram"
          >
            <InstagramIcon className="w-6 h-6" />
          </a>
        </div>
      </div>
    </div>
    
    {/* Right: Contact Form */}
    <div>
      <ContactForm />
    </div>
  </div>
</Section>
```

---

### INITIATES PAGE (/initiates)

**Purpose:** Placeholder for future login portal

**Content:**
```tsx
<Section className="py-24">
  <div className="max-w-2xl mx-auto text-center space-y-8">
    <SpiralIcon className="w-24 h-24 text-sage-600 mx-auto" />
    
    <h1 className="font-serif text-5xl text-ink-900">
      For Initiates
    </h1>
    
    <p className="text-xl text-ink-700 leading-relaxed">
      The private portal for current students is being prepared.
    </p>
    
    <p className="text-lg text-ink-700 leading-relaxed">
      If you've already enrolled in the Physical Realm, you'll receive login 
      instructions via email when your portal is ready.
    </p>
    
    <div className="pt-8 flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="secondary" href="/">
        Back to Home
      </Button>
      <Button variant="ghost" href="/contact">
        Contact Me
      </Button>
    </div>
  </div>
</Section>
```

---

## 🎨 POLISH CHECKLIST

### Visual Polish
- [ ] **Typography hierarchy** clear and consistent on all pages
- [ ] **Color usage** limited to defined palette (sage, clay, sand, ivory, ink)
- [ ] **Spacing** consistent using the spacing system (no random margins/padding)
- [ ] **Border radius** consistent (rounded-2xl for cards, rounded-lg for inputs)
- [ ] **Shadows** subtle and consistent (use defined shadow scale)
- [ ] **Images** all have proper aspect ratios and object-fit
- [ ] **Icons** sized consistently (w-6 h-6 for inline, w-12 h-12 for feature icons)
- [ ] **Buttons** same height/padding across variants
- [ ] **Line length** max 65-75 characters for body text (use max-w-prose or max-w-4xl)

### Interaction Polish
- [ ] **Hover states** on all interactive elements (buttons, links, cards)
- [ ] **Focus states** visible and accessible (ring-2 ring-sage-300)
- [ ] **Active states** for navigation links
- [ ] **Loading states** if any async operations
- [ ] **Disabled states** styled appropriately
- [ ] **Smooth transitions** (200-400ms) on all interactive elements
- [ ] **Scroll behavior** smooth for anchor links
- [ ] **Form validation** visual feedback for errors
- [ ] **Success states** for form submissions

### Animation Polish
- [ ] **Page transitions** subtle fade-in on load
- [ ] **Section reveals** scroll-triggered animations (IntersectionObserver)
- [ ] **Spiral animation** in footer (slow rotate, respects prefers-reduced-motion)
- [ ] **Button hover** scale 1.02 + shadow increase
- [ ] **Card hover** lift -4px + shadow increase + image scale 1.05
- [ ] **Image loading** fade-in when loaded
- [ ] **Staggered animations** for grids (50ms delay between items)
- [ ] **Respect prefers-reduced-motion** media query everywhere

### Responsive Polish
- [ ] **Mobile (320-767px)**: Single column, stacked sections, hamburger menu
- [ ] **Tablet (768-1023px)**: 2-column grids where appropriate
- [ ] **Desktop (1024px+)**: 3-column grids, full navigation bar
- [ ] **Hero sections** stack on mobile, side-by-side on desktop
- [ ] **Typography** scales down on mobile (use clamp() or responsive classes)
- [ ] **Spacing** slightly reduced on mobile
- [ ] **Touch targets** minimum 44x44px on mobile
- [ ] **Forms** full width on mobile, max-width on desktop
- [ ] **Navigation** mobile menu slides in smoothly

### Content Polish
- [ ] **Spell check** all copy
- [ ] **Consistent voice** feminine, grounded, invitational (not corporate)
- [ ] **Clear CTAs** every page has an obvious next step
- [ ] **No Lorem Ipsum** all placeholder text replaced with actual copy
- [ ] **Image alt text** descriptive and meaningful
- [ ] **Link text** descriptive (avoid "click here")
- [ ] **Headings** follow hierarchy (H1 → H2 → H3)
- [ ] **Paragraph length** 2-4 sentences max for readability

### Accessibility Polish
- [ ] **Semantic HTML** (header, nav, main, section, article, footer)
- [ ] **Heading hierarchy** logical (no skipped levels)
- [ ] **Color contrast** AA minimum (4.5:1 for text, 3:1 for large text)
- [ ] **Focus visible** on all interactive elements
- [ ] **Keyboard navigation** works for all interactions
- [ ] **ARIA labels** on icon buttons and decorative elements
- [ ] **Form labels** properly associated with inputs
- [ ] **Error messages** announced to screen readers (aria-live)
- [ ] **Skip to main content** link at top
- [ ] **Landmark roles** if needed for older browsers

### Technical Polish
- [ ] **No console errors** in browser dev tools
- [ ] **No 404s** for images or resources
- [ ] **Optimized images** compressed and sized appropriately
- [ ] **Lazy loading** for below-fold images
- [ ] **Meta tags** present on all pages (title, description, OG tags)
- [ ] **Favicon** present and correctly sized
- [ ] **robots.txt** and sitemap.xml prepared
- [ ] **Performance** Lighthouse score 90+ (Performance, Accessibility, Best Practices, SEO)
- [ ] **Mobile friendly** passes Google Mobile-Friendly Test
- [ ] **GitHub repo** clean commit history with meaningful messages

---

## 🚀 IMPLEMENTATION SEQUENCE

### Phase 1A: Foundation (Days 1-2)
1. **Scan existing codebase** — understand current structure
2. **Set up design system** — colors, typography, spacing in theme config
3. **Create base components** — Button, Section, Card
4. **Build Header & Footer** — global navigation and footer
5. **Test responsive behavior** — mobile menu works properly

### Phase 1B: Homepage (Days 3-4)
1. **Build PageHero component** — reusable hero section
2. **Create Homepage hero** — main landing hero with CTA
3. **Build Three Realms section** — RealmCard component + grid
4. **Add Journey section** — two-column layout with image
5. **Create About section** — copy + optional portrait
6. **Build Contact section** — ContactForm component
7. **Test all sections** — responsiveness and interactions

### Phase 1C: Realm Pages (Days 5-6)
1. **Physical Realm page** — full content with three pillars
2. **Mental Realm page** — coming soon with styled panel
3. **Spiritual Realm page** — coming soon with styled panel
4. **Journey page** — timeline visualization + content
5. **Contact page** — standalone contact layout
6. **Initiates page** — placeholder with clear messaging

### Phase 1D: Polish (Days 7-8)
1. **Visual polish** — spacing, colors, typography consistency
2. **Animation polish** — add subtle motion to all interactions
3. **Accessibility audit** — keyboard nav, focus states, ARIA labels
4. **Mobile testing** — test on real devices (iOS, Android)
5. **Content review** — copy edit, tone consistency
6. **Performance optimization** — image compression, lazy loading
7. **SEO setup** — meta tags, OG images, structured data
8. **Final QA** — run through entire checklist above

---

## 📋 DETAILED CODE EXAMPLES

### Design Tokens (theme.ts or tailwind.config.js)
```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        sage: {
          50: '#f6f7f6',
          100: '#e3e7e3',
          200: '#c7cfc7',
          300: '#b8c7ba',
          400: '#8fa891',
          500: '#7a8d7c',
          600: '#6c7a68',
          700: '#596355',
          800: '#4a5148',
          900: '#3e433c',
        },
        clay: {
          50: '#f9f6f5',
          100: '#f1e9e5',
          200: '#e3d3cb',
          300: '#d4b5a9',
          400: '#b08b7e',
          500: '#9e7768',
          600: '#8d5b4c',
          700: '#754b40',
          800: '#614037',
          900: '#513731',
        },
        sand: {
          50: '#fafaf9',
          100: '#f5f0eb',
          200: '#ede6df',
          300: '#e0d5ca',
          400: '#cbb8a7',
          500: '#b49b85',
          600: '#9a7f65',
          700: '#7f6854',
          800: '#695647',
          900: '#58483c',
        },
        ivory: {
          50: '#f8f6f2',
          100: '#f3f0ec',
          200: '#e8e3dc',
          300: '#dbd4ca',
          400: '#c9bfb1',
          500: '#b7a897',
          600: '#a18d7a',
          700: '#877565',
          800: '#6f6156',
          900: '#5c5148',
        },
        ink: {
          50: '#f6f6f5',
          100: '#e7e6e5',
          200: '#d1cfcd',
          300: '#b0adaa',
          400: '#898582',
          500: '#6e6b67',
          600: '#5a5754',
          700: '#4a4542',
          800: '#3f3d3a',
          900: '#1e1b18',
        },
      },
      fontFamily: {
        serif: ['Fraunces', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'Nunito Sans', 'system-ui', 'sans-serif'],
      },
      animation: {
        'slow-spin': 'spin 20s linear infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.4s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
```

### Scroll Animation Hook
```typescript
// hooks/useScrollReveal.ts
import { useEffect, useRef, useState } from 'react';

export const useScrollReveal = (options = {}) => {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        ...options,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return { ref, isVisible };
};

// Usage in components:
const { ref, isVisible } = useScrollReveal();

<section 
  ref={ref}
  className={`transition-all duration-600 ${
    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
  }`}
>
  Content here
</section>
```

### Smooth Scroll Utility
```typescript
// utils/smoothScroll.ts
export const smoothScrollTo = (targetId: string) => {
  const element = document.querySelector(targetId);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

// Usage in buttons:
<Button onClick={() => smoothScrollTo('#realms')}>
  Enter the Spiral
</Button>
```

---

## 🎯 FINAL NOTES FOR AI AGENT

### Critical Success Factors:
1. **Consistency over cleverness** — use the design system religiously
2. **Feminine aesthetic** — soft, organic, flowing (not sharp or aggressive)
3. **Intentional motion** — every animation should feel like breath or tide
4. **Content hierarchy** — guide the eye naturally from hero → realms → journey → contact
5. **Mobile-first** — build for mobile, enhance for desktop
6. **Accessibility** — this site should be usable by everyone
7. **Performance** — fast load times, optimized images
8. **Scalability** — code should be easy to extend for future realms

### Quality Standards:
- **Every component** should have proper TypeScript types
- **Every page** should have proper SEO meta tags
- **Every interactive element** should have hover/focus states
- **Every image** should have meaningful alt text
- **Every section** should be responsive on all breakpoints
- **Every animation** should respect prefers-reduced-motion

### When in Doubt:
- **Simplify** — less is more in sacred design
- **Space** — generous whitespace is key to feminine aesthetic
- **Nature** — look to plants, spirals, and moon phases for inspiration
- **Rhythm** — create visual rhythm through repetition and variation

---

## ✅ FINAL DELIVERABLE CHECKLIST

Before considering Phase 1 complete:

### Functionality
- [ ] All 7 pages render without errors
- [ ] All navigation links work correctly
- [ ] Anchor links scroll smoothly
- [ ] Contact form validates and shows success state
- [ ] Mobile menu opens/closes properly
- [ ] All images load (even as placeholders)
- [ ] No broken links or 404s

### Design
- [ ] Color palette used consistently
- [ ] Typography hierarchy clear on all pages
- [ ] Spacing consistent using design system
- [ ] All buttons styled consistently
- [ ] All cards/sections aligned properly
- [ ] Footer present on all pages
- [ ] Header sticky on all pages

### Responsive
- [ ] Works on mobile (320px+)
- [ ] Works on tablet (768px+)
- [ ] Works on desktop (1024px+)
- [ ] No horizontal scroll on any breakpoint
- [ ] Text readable on all sizes
- [ ] Touch targets large enough on mobile

### Accessibility
- [ ] Keyboard navigable
- [ ] Focus states visible
- [ ] Color contrast meets AA
- [ ] Alt text on all images
- [ ] Semantic HTML used
- [ ] Screen reader friendly

### Performance
- [ ] Lighthouse Performance 90+
- [ ] Lighthouse Accessibility 90+
- [ ] Lighthouse Best Practices 90+
- [ ] Lighthouse SEO 90+
- [ ] Images optimized
- [ ] No console errors

### Content
- [ ] All copy proofread
- [ ] Tone consistent (feminine, grounded)
- [ ] No Lorem Ipsum
- [ ] CTAs clear on every page
- [ ] Coming soon messages clear
- [ ] Contact info correct

---

**This concludes the Phase 1 Frontend Implementation Plan.**

The next phase (Phase 2) will add Supabase authentication, user roles, and the private portal for initiates. But first, let's make this public-facing site absolutely beautiful.