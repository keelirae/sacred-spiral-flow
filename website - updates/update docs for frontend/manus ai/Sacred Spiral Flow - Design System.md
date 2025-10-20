# Sacred Spiral Flow - Design System

This document outlines the complete design system for the Sacred Spiral Flow frontend, including color palette, typography, spacing, components, and interaction patterns. This ensures consistency and coherence across all pages and elements.

## 1. Color Palette

The color palette is designed to evoke femininity, warmth, nature, and spiritual serenity. It moves away from harsh or cold tones and embraces soft, inviting, and elegant colors.

### Primary Colors

| Color Name | Hex Code | RGB | Usage | Notes |
|------------|----------|-----|-------|-------|
| Sage Green | #A8B8A8 | 168, 184, 168 | Primary accent, buttons, links | Soft, earthy, calming |
| Warm Cream | #F5F1ED | 245, 241, 237 | Primary background | Warm, inviting, clean |
| Dusty Rose | #D4A5A5 | 212, 165, 165 | Secondary accent, highlights | Feminine, warm, sophisticated |
| Soft Gold | #D4AF8F | 212, 175, 143 | Tertiary accent, borders | Luxurious, warm, grounding |

### Secondary Colors

| Color Name | Hex Code | RGB | Usage | Notes |
|------------|----------|-----|-------|-------|
| Deep Teal | #5A7A7A | 90, 122, 122 | Text, dark accents | Professional, grounded |
| Pale Lavender | #E8DFE8 | 232, 223, 232 | Background accents, cards | Soft, spiritual, feminine |
| Blush Pink | #F0D9D6 | 240, 217, 214 | Hover states, subtle highlights | Gentle, approachable |
| Charcoal | #3D3D3D | 61, 61, 61 | Primary text | High contrast, readable |

### Neutral Colors

| Color Name | Hex Code | RGB | Usage | Notes |
|------------|----------|-----|-------|-------|
| Off-White | #FAFAF8 | 250, 250, 248 | Page background | Clean, minimal |
| Light Gray | #E8E8E6 | 232, 232, 230 | Borders, dividers | Subtle separation |
| Medium Gray | #B8B8B8 | 184, 184, 184 | Secondary text, disabled states | Accessible contrast |

## 2. Typography

### Font Families

**Headings:** `Georgia, serif` (or a similar elegant serif font like "Lora" or "Playfair Display" from Google Fonts)
- Conveys elegance, sophistication, and femininity.
- Used for H1, H2, H3 tags.

**Body Text:** `Inter, sans-serif` (or a similar modern sans-serif like "Poppins" or "Raleway")
- Ensures readability and modern appeal.
- Used for paragraphs, body text, and UI labels.

**Accents/Special:** `Montserrat, sans-serif` (or similar for button labels and special text)
- Modern, friendly, and slightly more personality.

### Font Sizes and Hierarchy

| Element | Font Size | Line Height | Font Weight | Color | Usage |
|---------|-----------|-------------|-------------|-------|-------|
| H1 (Page Title) | 48px (mobile: 36px) | 1.2 | 700 | Deep Teal | Main page headings |
| H2 (Section Title) | 36px (mobile: 28px) | 1.3 | 600 | Deep Teal | Section headings |
| H3 (Subsection) | 24px (mobile: 20px) | 1.4 | 600 | Deep Teal | Card titles, subsections |
| Body Text | 16px | 1.6 | 400 | Charcoal | Main content |
| Small Text | 14px | 1.5 | 400 | Medium Gray | Captions, secondary info |
| Button Text | 16px | 1.5 | 600 | White or Deep Teal | CTA buttons |

## 3. Spacing and Layout

### Spacing Scale

A consistent spacing scale ensures visual harmony and makes responsive design easier.

| Scale | Value | Usage |
|-------|-------|-------|
| XS | 4px | Micro-interactions, small gaps |
| S | 8px | Small padding, tight spacing |
| M | 16px | Standard padding, normal spacing |
| L | 24px | Section padding, generous spacing |
| XL | 32px | Large section gaps |
| XXL | 48px | Hero sections, major gaps |

### Grid System

A 12-column grid system (or similar) ensures responsive and organized layouts. Breakpoints are defined as:

- **Mobile:** 320px - 767px
- **Tablet:** 768px - 1023px
- **Desktop:** 1024px and above

## 4. Component Styling

### Buttons

**Primary Button (CTA):**
- Background: Sage Green (#A8B8A8)
- Text Color: White
- Padding: 12px 32px
- Border Radius: 4px
- Font Weight: 600
- Hover State: Background becomes Soft Gold (#D4AF8F), subtle shadow appears
- Transition: 0.3s ease-in-out

**Secondary Button:**
- Background: Pale Lavender (#E8DFE8)
- Text Color: Deep Teal (#5A7A7A)
- Padding: 12px 32px
- Border Radius: 4px
- Font Weight: 600
- Hover State: Background becomes Dusty Rose (#D4A5A5), text color remains Deep Teal
- Transition: 0.3s ease-in-out

### Cards

- Background: Off-White (#FAFAF8) or Pale Lavender (#E8DFE8)
- Border: 1px solid Light Gray (#E8E8E6)
- Border Radius: 8px
- Padding: 24px
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.05) (subtle)
- Hover State: Box shadow increases to 0 8px 16px rgba(0, 0, 0, 0.1), slight lift (transform: translateY(-2px))
- Transition: 0.3s ease-in-out

### Input Fields

- Background: Off-White (#FAFAF8)
- Border: 1px solid Light Gray (#E8E8E6)
- Border Radius: 4px
- Padding: 12px 16px
- Font Size: 16px
- Focus State: Border color changes to Sage Green (#A8B8A8), subtle glow (box-shadow: 0 0 0 3px rgba(168, 184, 168, 0.1))
- Transition: 0.3s ease-in-out

### Navigation Bar

- Background: Warm Cream (#F5F1ED)
- Text Color: Deep Teal (#5A7A7A)
- Link Hover: Text color becomes Sage Green (#A8B8A8), subtle underline appears
- Transition: 0.3s ease-in-out
- Height: 64px (mobile: 56px)
- Logo Size: 32px (height)

### Footer

- Background: Deep Teal (#5A7A7A)
- Text Color: Warm Cream (#F5F1ED)
- Link Hover: Text color becomes Soft Gold (#D4AF8F)
- Transition: 0.3s ease-in-out
- Padding: 48px 24px

## 5. Animations and Transitions

### Fade In (on scroll or page load)

```css
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
animation: fadeIn 0.6s ease-in-out;
```

### Slide In (from left or right)

```css
@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}
animation: slideInLeft 0.6s ease-in-out;
```

### Subtle Scale on Hover

```css
transition: transform 0.3s ease-in-out;
&:hover {
  transform: scale(1.02);
}
```

### Parallax Scrolling (subtle)

Applied to hero section background images for a sense of depth. Offset: 50% of scroll distance.

## 6. Accessibility Guidelines

- **Color Contrast:** Ensure WCAG AA compliance (minimum 4.5:1 ratio for normal text, 3:1 for large text).
- **Keyboard Navigation:** All interactive elements must be accessible via keyboard (Tab, Enter, Escape).
- **ARIA Labels:** Use appropriate ARIA attributes for screen readers.
- **Focus Indicators:** Visible focus states for all interactive elements.
- **Alt Text:** Descriptive alt text for all images.

## 7. Responsive Design Principles

- **Mobile-First Approach:** Design for mobile first, then enhance for larger screens.
- **Flexible Layouts:** Use flexbox and CSS Grid for responsive layouts.
- **Responsive Typography:** Font sizes scale appropriately for different screen sizes.
- **Touch-Friendly:** Ensure buttons and interactive elements are at least 44x44px on mobile.

This design system ensures a cohesive, beautiful, and engaging user experience across all pages and devices.

