# AI Developer Agent Implementation Guide for Sacred Spiral Flow Frontend

This comprehensive guide is designed for an AI developer agent to implement the Sacred Spiral Flow frontend. It provides step-by-step instructions, best practices, and critical considerations to ensure a polished, beautiful, and fully functional website.

## Overview

The Sacred Spiral Flow is a transformative program rooted in cyclical living, body sovereignty, and earth-aligned transformation. The frontend must reflect this philosophy through a feminine, modern, clean, and engaging design. The website will serve as the primary marketing and information hub, with a separate authenticated area for current students/initiates.

## Key Principles

1. **Separation of Concerns:** The public-facing landing page and realm pages are completely separate from any authenticated member or admin areas. Users should not be forced to log in to view the landing page.

2. **Mobile-First Design:** All pages must be responsive and optimized for mobile devices first, then enhanced for larger screens.

3. **Accessibility:** The website must be accessible to all users, including those with disabilities. Ensure proper semantic HTML, ARIA labels, keyboard navigation, and sufficient color contrast.

4. **Performance:** Optimize images, minimize CSS/JS, and lazy-load content to ensure fast loading times.

5. **Consistency:** Maintain consistent branding, typography, spacing, and interaction patterns across all pages.

## Phase 1: Project Setup and Architecture

### Step 1.1: Initialize the Project

Before beginning development, ensure the project is properly initialized with the necessary tools and structure.

**Action:** Use the `webdev_init_project` tool to scaffold the project with the following parameters:

- **Project Name:** `sacred-spiral-flow-frontend`
- **Project Title:** `Sacred Spiral Flow`
- **Description:** `A journey of embodiment through Physical, Mental, and Spiritual realms.`
- **Features:** `web-db-user` (to support future backend integration with Supabase for authentication and storage)

**Outcome:** A fully scaffolded project with a modern frontend framework (React, Vue, or similar), build tools, and a basic project structure.

### Step 1.2: Project Structure

After initialization, organize the project as follows:

```
sacred-spiral-flow-frontend/
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   └── ...
│   │   ├── sections/
│   │   │   ├── HeroSection.jsx
│   │   │   ├── ThreeRealmsSection.jsx
│   │   │   ├── JourneySection.jsx
│   │   │   └── ...
│   │   └── forms/
│   │       ├── ContactForm.jsx
│   │       ├── LoginForm.jsx
│   │       └── ...
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Physical.jsx
│   │   ├── Mental.jsx
│   │   ├── Spiritual.jsx
│   │   ├── Journey.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Login.jsx
│   ├── styles/
│   │   ├── global.css
│   │   ├── variables.css (for color palette and spacing)
│   │   └── animations.css
│   ├── assets/
│   │   ├── images/
│   │   ├── icons/
│   │   └── placeholders/
│   ├── App.jsx
│   └── index.js
├── public/
├── package.json
└── ...
```

### Step 1.3: Install Dependencies

Install necessary dependencies for styling, animations, and form handling. Examples include:

- **Styling:** Tailwind CSS, Styled Components, or Sass
- **Animations:** Framer Motion, GSAP, or CSS-based animations
- **Form Handling:** React Hook Form, Formik, or native HTML forms
- **Routing:** React Router (if using React)
- **Icons:** React Icons, Feather Icons, or custom SVGs

**Command Example:**
```bash
npm install tailwindcss framer-motion react-router-dom react-icons
```

### Step 1.4: Version Control Integration

Ensure the project is linked to a GitHub repository for version control and collaboration.

**Action:** Initialize a Git repository and push the initial project structure to GitHub.

```bash
git init
git add .
git commit -m "Initial project setup"
git remote add origin <repository-url>
git push -u origin main
```

## Phase 2: Design System Implementation

### Step 2.1: CSS Variables and Theme

Create a comprehensive CSS variables file that defines the color palette, typography, spacing, and other design tokens. This ensures consistency and makes it easy to update the design globally.

**File:** `src/styles/variables.css`

**Content:** Define CSS variables for colors, fonts, spacing, shadows, and transitions as outlined in the Design System document.

**Example:**
```css
:root {
  /* Colors */
  --color-sage-green: #A8B8A8;
  --color-warm-cream: #F5F1ED;
  --color-dusty-rose: #D4A5A5;
  --color-soft-gold: #D4AF8F;
  --color-deep-teal: #5A7A7A;
  --color-pale-lavender: #E8DFE8;
  --color-blush-pink: #F0D9D6;
  --color-charcoal: #3D3D3D;
  --color-off-white: #FAFAF8;
  --color-light-gray: #E8E8E6;
  --color-medium-gray: #B8B8B8;

  /* Typography */
  --font-serif: 'Georgia', serif;
  --font-sans: 'Inter', sans-serif;
  --font-accent: 'Montserrat', sans-serif;

  /* Spacing */
  --spacing-xs: 4px;
  --spacing-s: 8px;
  --spacing-m: 16px;
  --spacing-l: 24px;
  --spacing-xl: 32px;
  --spacing-xxl: 48px;

  /* Transitions */
  --transition-default: 0.3s ease-in-out;
}
```

### Step 2.2: Global Styles

Create a global styles file that sets up the base styling for the entire website.

**File:** `src/styles/global.css`

**Content:** Reset styles, base element styling, and utility classes.

**Example:**
```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: var(--font-sans);
  color: var(--color-charcoal);
  background-color: var(--color-off-white);
  line-height: 1.6;
}

h1, h2, h3 {
  font-family: var(--font-serif);
  font-weight: 600;
  color: var(--color-deep-teal);
}

a {
  color: var(--color-sage-green);
  text-decoration: none;
  transition: color var(--transition-default);
}

a:hover {
  color: var(--color-soft-gold);
}
```

### Step 2.3: Reusable Components

Create reusable components for common UI elements. This promotes consistency and reduces code duplication.

**Components to Create:**

1. **Button Component**
   - Props: `variant` (primary, secondary), `size` (small, medium, large), `disabled`, `onClick`, `children`
   - Styling: Based on the Design System specifications

2. **Card Component**
   - Props: `children`, `className`
   - Styling: Consistent padding, border, shadow, and hover effects

3. **Input Component**
   - Props: `type`, `placeholder`, `label`, `value`, `onChange`, `required`, `error`
   - Styling: Consistent with form design specifications

4. **Container Component**
   - Props: `children`, `maxWidth`, `className`
   - Styling: Responsive padding and max-width

**Example Button Component:**
```jsx
import React from 'react';
import styles from './Button.module.css';

const Button = ({ variant = 'primary', size = 'medium', disabled = false, onClick, children }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]}`}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
```

## Phase 3: Component Development

### Step 3.1: Global Components

Develop the global components that appear on every page.

#### Navbar Component

**File:** `src/components/common/Navbar.jsx`

**Features:**

- Logo/site title linking to home
- Navigation links (Home, The Spiral, Journey, About, Contact, For Initiates)
- Mobile hamburger menu
- Responsive design
- Smooth transitions and hover effects

**Implementation Notes:**

- Use React Router's `Link` component for navigation
- Implement a mobile menu toggle using state management (useState)
- Apply active link styling to indicate current page
- Ensure keyboard accessibility (Tab navigation, focus states)

#### Footer Component

**File:** `src/components/common/Footer.jsx`

**Features:**

- Copyright information
- Secondary links (Privacy Policy, Terms of Service)
- Social media icons (placeholders)
- Responsive layout

**Implementation Notes:**

- Use consistent spacing and typography
- Ensure links are accessible and have proper focus states
- Consider lazy-loading social media icons

### Step 3.2: Section Components

Develop reusable section components for the landing page.

#### HeroSection Component

**File:** `src/components/sections/HeroSection.jsx`

**Props:**

- `title` (string)
- `tagline` (string)
- `backgroundImage` (string or URL)
- `ctaButton` (object with `text` and `link`)

**Features:**

- Full-viewport height on desktop, 70vh on mobile
- Background image with overlay
- Centered content
- Fade-in animation on load

#### ThreeRealmsSection Component

**File:** `src/components/sections/ThreeRealmsSection.jsx`

**Features:**

- 3-column grid on desktop, single column on mobile
- RealmCard sub-components for each realm
- Staggered fade-in animation

#### RealmCard Component

**File:** `src/components/sections/RealmCard.jsx`

**Props:**

- `title` (string)
- `description` (string)
- `image` (string or URL)
- `buttonText` (string)
- `buttonLink` (string)

**Features:**

- Placeholder image
- Title, description, and button
- Hover effects (lift, shadow increase)
- Responsive sizing

### Step 3.3: Form Components

#### ContactForm Component

**File:** `src/components/forms/ContactForm.jsx`

**Features:**

- Name, Email, and Message fields
- Client-side validation
- Success and error messages
- Submission handling (to be integrated with backend)
- Responsive layout

**Implementation Notes:**

- Use React Hook Form for efficient form handling
- Implement email validation using regex or a library
- Show loading state during submission
- Display success message upon successful submission
- Handle and display error messages

#### LoginForm Component

**File:** `src/components/forms/LoginForm.jsx`

**Features:**

- Email/Username and Password fields
- "Forgot Password" link
- Login button
- Error handling
- Responsive layout

**Implementation Notes:**

- Ensure password field is properly masked
- Implement form validation
- Handle authentication errors gracefully
- Consider integrating with Supabase authentication

## Phase 4: Page Development

### Step 4.1: Home Page

**File:** `src/pages/Home.jsx`

**Structure:**

1. Import Navbar and Footer
2. Import section components (HeroSection, ThreeRealmsSection, JourneySection, PhilosophySection, ContactSection)
3. Compose the page by arranging sections vertically
4. Apply responsive styling

**Implementation Notes:**

- Ensure proper semantic HTML structure
- Use appropriate heading hierarchy (H1 for page title, H2 for sections, H3 for subsections)
- Implement lazy-loading for images below the fold
- Add scroll-triggered animations for sections entering the viewport

### Step 4.2: Realm Pages (Physical, Mental, Spiritual)

**Files:** `src/pages/Physical.jsx`, `src/pages/Mental.jsx`, `src/pages/Spiritual.jsx`

**Structure:**

1. HeroSection with realm-specific content
2. Introduction section
3. For Physical: Detailed content and "Buy Program" button
4. For Mental and Spiritual: "Coming Soon" notice and email signup form
5. Optional: Testimonials section

**Implementation Notes:**

- Reuse components from the home page where applicable
- Apply unique accent colors or borders for each realm
- Ensure consistent layout and spacing
- Implement proper error handling for form submissions

### Step 4.3: Journey Page

**File:** `src/pages/Journey.jsx`

**Structure:**

1. HeroSection
2. Program overview section
3. Timeline/infographic (visual representation of the year-long journey)
4. Integration months section
5. FAQ section
6. Testimonials section
7. Call to action

**Implementation Notes:**

- Create a reusable Timeline component for the visual representation
- Implement accordion-style FAQ for better UX
- Use placeholder testimonials that can be easily updated
- Ensure the timeline is responsive and readable on mobile

### Step 4.4: About Page

**File:** `src/pages/About.jsx`

**Structure:**

1. HeroSection
2. Founder's story section
3. Philosophy and values section
4. Professional background section
5. Call to action

**Implementation Notes:**

- Use high-quality placeholder images
- Ensure text is well-organized and easy to read
- Apply consistent spacing and typography
- Consider using a two-column layout on desktop for better visual balance

### Step 4.5: Contact Page

**File:** `src/pages/Contact.jsx`

**Structure:**

1. HeroSection
2. Contact information section
3. Contact form
4. Optional: Map

**Implementation Notes:**

- Reuse the ContactForm component from the home page
- Display contact information in an organized manner
- If including a map, use a lightweight solution (e.g., Leaflet) to avoid performance issues
- Ensure form submission is handled properly

### Step 4.6: Login Page

**File:** `src/pages/Login.jsx`

**Structure:**

1. Minimal hero section
2. Login form
3. Additional links (Forgot Password, Sign Up)
4. Security notice (optional)

**Implementation Notes:**

- Keep the design clean and focused on the form
- Ensure proper error handling for authentication failures
- Implement password visibility toggle
- Consider integrating with Supabase authentication
- Ensure the page is secure and follows best practices for handling sensitive information

## Phase 5: Routing and Navigation

### Step 5.1: Set Up React Router

**File:** `src/App.jsx`

**Implementation:**

```jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Home from './pages/Home';
import Physical from './pages/Physical';
import Mental from './pages/Mental';
import Spiritual from './pages/Spiritual';
import Journey from './pages/Journey';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/physical" element={<Physical />} />
        <Route path="/mental" element={<Mental />} />
        <Route path="/spiritual" element={<Spiritual />} />
        <Route path="/journey" element={<Journey />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
```

### Step 5.2: Navigation Links

Ensure all navigation links are properly configured and link to the correct pages. Test navigation across all pages to ensure smooth transitions.

## Phase 6: Animations and Interactions

### Step 6.1: Scroll-Triggered Animations

Implement animations that trigger as sections enter the viewport. Use a library like Framer Motion or GSAP, or implement custom CSS animations.

**Example using Framer Motion:**

```jsx
import { motion } from 'framer-motion';

const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6 } },
};

const SectionComponent = () => {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      variants={fadeInVariants}
    >
      {/* Content */}
    </motion.section>
  );
};
```

### Step 6.2: Hover Effects

Implement subtle hover effects on buttons, cards, and links. Use CSS transitions for smooth animations.

**Example:**

```css
.button:hover {
  background-color: var(--color-soft-gold);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  transition: all var(--transition-default);
}
```

### Step 6.3: Page Transitions

Implement smooth transitions between pages. This can be achieved using React Router's built-in transitions or a library like Framer Motion.

## Phase 7: Form Handling and Validation

### Step 7.1: Contact Form Submission

Implement form submission handling for the contact form. This involves:

1. Client-side validation (email format, required fields)
2. Sending the form data to a backend endpoint
3. Displaying success or error messages

**Implementation Notes:**

- Use React Hook Form for efficient form handling
- Implement proper error handling and user feedback
- Consider using Supabase functions for backend processing
- Ensure the form is accessible and follows best practices

### Step 7.2: Login Form Submission

Implement authentication handling for the login form. This involves:

1. Validating email and password
2. Sending credentials to the authentication service (Supabase)
3. Storing authentication tokens securely
4. Redirecting to the dashboard upon successful login

**Implementation Notes:**

- Use Supabase's authentication API for secure login
- Implement proper error handling for failed login attempts
- Store authentication tokens in secure storage (e.g., httpOnly cookies)
- Implement session management and token refresh logic

## Phase 8: Performance Optimization

### Step 8.1: Image Optimization

- Use modern image formats (WebP) with fallbacks
- Implement responsive images using srcset
- Lazy-load images below the fold
- Compress images without losing quality

### Step 8.2: Code Splitting

- Split code by route to reduce initial bundle size
- Lazy-load components that are not immediately visible
- Use dynamic imports for large components

### Step 8.3: Caching and CDN

- Implement browser caching for static assets
- Use a CDN to serve images and static files
- Implement service workers for offline support

## Phase 9: Accessibility and SEO

### Step 9.1: Accessibility

- Use semantic HTML elements
- Implement proper ARIA labels and attributes
- Ensure keyboard navigation is fully functional
- Test with screen readers
- Ensure sufficient color contrast (WCAG AA compliance)
- Implement focus indicators for all interactive elements

### Step 9.2: SEO

- Implement proper meta tags (title, description, keywords)
- Use semantic HTML for better search engine understanding
- Implement structured data (Schema.org) for rich snippets
- Create an XML sitemap
- Implement Open Graph tags for social media sharing

## Phase 10: Testing and Deployment

### Step 10.1: Testing

- Implement unit tests for components
- Implement integration tests for page functionality
- Perform cross-browser testing
- Test responsive design on various devices
- Perform accessibility testing

### Step 10.2: Deployment

- Build the project for production
- Deploy to a hosting service (Vercel, Netlify, etc.)
- Set up continuous integration and deployment (CI/CD)
- Monitor performance and errors using tools like Sentry

## Critical Reminders for the AI Developer Agent

1. **Always scan the codebase first** before implementing any feature. Check if similar components or functionality already exist to avoid duplication.

2. **Follow the design system** consistently. Use the defined color palette, typography, spacing, and animations throughout the project.

3. **Maintain semantic HTML structure** for better accessibility and SEO.

4. **Test responsiveness** on multiple devices and screen sizes. The design should be mobile-first.

5. **Implement proper error handling** for all forms and API calls.

6. **Document your code** with comments explaining complex logic or non-obvious implementations.

7. **Keep components modular and reusable.** Avoid hard-coding values; use props and configuration files instead.

8. **Ensure accessibility** by implementing proper ARIA labels, keyboard navigation, and color contrast.

9. **Optimize performance** by lazy-loading images, code splitting, and minimizing bundle size.

10. **Maintain version control** by committing regularly with clear, descriptive commit messages.

This guide provides a comprehensive roadmap for implementing the Sacred Spiral Flow frontend. By following these steps and best practices, the AI developer agent will create a beautiful, functional, and engaging website that reflects the essence of the Sacred Spiral program.

