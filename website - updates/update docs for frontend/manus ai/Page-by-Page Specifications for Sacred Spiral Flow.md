# Page-by-Page Specifications for Sacred Spiral Flow

This document provides detailed specifications for each page of the Sacred Spiral Flow website, including exact content, layout structure, and visual hierarchy. This serves as a reference for the AI developer agent to implement each page with precision.

## Landing Page (Home - `/`)

### Page Structure and Layout

The landing page is the primary entry point and should be visually stunning, informative, and inviting. It consists of multiple sections stacked vertically, each with distinct visual characteristics.

### Section 1: Hero Section

**Height:** Full viewport height (100vh) on desktop, 70vh on mobile.

**Background:** Placeholder image (nature-inspired, serene, possibly with spiral motif) or subtle gradient overlay. Overlay opacity: 0.3-0.4 to ensure text readability.

**Content Alignment:** Centered, both horizontally and vertically.

**Elements:**

1. **Main Heading:** `<h1>The Sacred Spiral</h1>`
   - Font: Georgia, serif, 48px (mobile: 36px), weight 700
   - Color: Warm Cream (#F5F1ED) or White
   - Text Shadow: Subtle shadow for readability against background (0 2px 4px rgba(0, 0, 0, 0.2))
   - Margin Bottom: 16px

2. **Tagline:** `<p>A journey of embodiment through the Physical, Mental, and Spiritual realms.</p>`
   - Font: Inter, sans-serif, 18px (mobile: 16px), weight 400
   - Color: Warm Cream (#F5F1ED) or White
   - Max Width: 600px
   - Text Align: Center
   - Margin Bottom: 32px

3. **Primary CTA Button:** `<button>Enter the Spiral</button>`
   - Style: Primary Button (Sage Green background, white text)
   - Size: 16px font, 12px 32px padding
   - Hover Animation: Background transitions to Soft Gold, subtle lift (transform: translateY(-2px))
   - Link Destination: Scroll to "The Three Realms" section or `/the-spiral` page

**Animation:** Fade-in effect on page load (0.8s duration).

### Section 2: Introduction to the Spiral

**Background:** Warm Cream (#F5F1ED) or Off-White (#FAFAF8)

**Padding:** 64px 24px (mobile: 48px 24px)

**Max Width:** 900px, centered

**Elements:**

1. **Section Heading:** `<h2>The Spiral is a cyclical path of remembering.</h2>`
   - Font: Georgia, serif, 36px (mobile: 28px), weight 600
   - Color: Deep Teal (#5A7A7A)
   - Text Align: Center
   - Margin Bottom: 24px

2. **Body Text:** `<p>Move with your body's wisdom, clarify the mind, and root into spirit.</p>`
   - Font: Inter, sans-serif, 18px (mobile: 16px), weight 400
   - Color: Charcoal (#3D3D3D)
   - Text Align: Center
   - Line Height: 1.6
   - Max Width: 700px, centered

**Animation:** Fade-in effect as section enters viewport (0.6s duration, slight delay).

### Section 3: The Three Realms

**Background:** Off-White (#FAFAF8)

**Padding:** 80px 24px (mobile: 60px 24px)

**Section Heading:** `<h2>The Three Realms</h2>` (optional, can be omitted for visual flow)
- Font: Georgia, serif, 36px, weight 600
- Color: Deep Teal (#5A7A7A)
- Text Align: Center
- Margin Bottom: 48px

**Layout:** 3-column grid on desktop, single column on mobile (stacked vertically).

**Grid Gap:** 32px (mobile: 24px)

**Each Realm Card:**

**Card Structure:**

1. **Placeholder Image/Icon:**
   - Size: 200px x 200px (mobile: 150px x 150px)
   - Border Radius: 8px
   - Margin Bottom: 24px
   - Object Fit: Cover
   - Alt Text: Descriptive (e.g., "Physical Realm - Body Movement")

2. **Realm Name (Heading):** `<h3>[Physical/Mental/Spiritual] Realm</h3>`
   - Font: Georgia, serif, 24px (mobile: 20px), weight 600
   - Color: Deep Teal (#5A7A7A)
   - Margin Bottom: 12px

3. **Description:** `<p>[Realm-specific description]</p>`
   - Font: Inter, sans-serif, 16px, weight 400
   - Color: Charcoal (#3D3D3D)
   - Line Height: 1.6
   - Margin Bottom: 24px

4. **"Learn More" Button:**
   - Style: Secondary Button (Pale Lavender background, Deep Teal text)
   - Size: 16px font, 12px 32px padding
   - Link Destination: `/physical`, `/mental`, or `/spiritual` respectively
   - Hover Animation: Background transitions to Dusty Rose

**Card Styling:**

- Background: Pale Lavender (#E8DFE8) or Off-White (#FAFAF8)
- Border: 1px solid Light Gray (#E8E8E6)
- Border Radius: 8px
- Padding: 32px 24px
- Box Shadow: 0 2px 8px rgba(0, 0, 0, 0.05)
- Hover State: Box shadow increases, slight lift (transform: translateY(-4px))
- Transition: 0.3s ease-in-out

**Realm Descriptions:**

- **Physical Realm:** "Body intelligence through functional movement, whole-food nutrition, and cycle syncing."
- **Mental Realm:** "Shadow work, nervous system support, and mindset re-patterning."
- **Spiritual Realm:** "Ceremony, ritual, meditation, and feminine embodiment."

**Animation:** Each card fades in as it enters the viewport, with a slight stagger effect (0.1s delay between each card).

### Section 4: Journey Through the Spiral

**Background:** Warm Cream (#F5F1ED)

**Padding:** 80px 24px (mobile: 60px 24px)

**Max Width:** 900px, centered

**Elements:**

1. **Section Heading:** `<h2>A year-long path through three realms</h2>`
   - Font: Georgia, serif, 36px (mobile: 28px), weight 600
   - Color: Deep Teal (#5A7A7A)
   - Text Align: Center
   - Margin Bottom: 32px

2. **Body Text:** 
   ```
   <p>A year-long path through three realms: 3 months in each, with a month of integration between levels. Integration months include optional community meetups and continued access to me for questions and shares.</p>
   ```
   - Font: Inter, sans-serif, 16px, weight 400
   - Color: Charcoal (#3D3D3D)
   - Text Align: Center
   - Line Height: 1.6
   - Margin Bottom: 32px

3. **"Learn More" Button:**
   - Style: Primary Button (Sage Green background)
   - Link Destination: `/journey`
   - Centered alignment

**Visual Element (Optional):** A subtle spiral graphic or timeline illustration to reinforce the cyclical nature of the program.

**Animation:** Fade-in effect as section enters viewport.

### Section 5: Philosophy/Rooted in Cyclical Living

**Background:** Off-White (#FAFAF8)

**Padding:** 80px 24px (mobile: 60px 24px)

**Max Width:** 900px, centered

**Elements:**

1. **Section Heading:** `<h2>Rooted in cyclical living, body sovereignty, and earth-aligned transformation</h2>`
   - Font: Georgia, serif, 36px (mobile: 28px), weight 600
   - Color: Deep Teal (#5A7A7A)
   - Text Align: Center
   - Margin Bottom: 32px

2. **Body Text:**
   ```
   <p>This work is rooted in cyclical living, body sovereignty, and earth-aligned transformation. We move slowly and intentionally, honoring the intelligence of the body, mind, and spirit.</p>
   ```
   - Font: Inter, sans-serif, 16px, weight 400
   - Color: Charcoal (#3D3D3D)
   - Text Align: Center
   - Line Height: 1.6
   - Margin Bottom: 24px

3. **Concluding Text:**
   ```
   <p>Through gentle structure and spaciousness, the Spiral offers a grounded path of remembrance and return.</p>
   ```
   - Font: Georgia, serif (italic), 18px, weight 400
   - Color: Deep Teal (#5A7A7A)
   - Text Align: Center
   - Line Height: 1.6

**Animation:** Fade-in effect as section enters viewport.

### Section 6: Contact Section

**Background:** Pale Lavender (#E8DFE8)

**Padding:** 80px 24px (mobile: 60px 24px)

**Max Width:** 600px, centered

**Elements:**

1. **Section Heading:** `<h2>Have a question or feel called to walk the spiral?</h2>`
   - Font: Georgia, serif, 36px (mobile: 28px), weight 600
   - Color: Deep Teal (#5A7A7A)
   - Text Align: Center
   - Margin Bottom: 12px

2. **Subheading:** `<p>I'd love to hear from you.</p>`
   - Font: Inter, sans-serif, 18px, weight 400
   - Color: Charcoal (#3D3D3D)
   - Text Align: Center
   - Margin Bottom: 32px

3. **Contact Form:**

   **Form Fields:**

   a. **Name Field:**
      - Label: "Name"
      - Input Type: Text
      - Placeholder: "Your Name"
      - Required: Yes

   b. **Email Field:**
      - Label: "Email"
      - Input Type: Email
      - Placeholder: "your.email@example.com"
      - Required: Yes

   c. **Message Field:**
      - Label: "Message"
      - Input Type: Textarea
      - Placeholder: "Your message here..."
      - Rows: 5
      - Required: Yes

   **Form Styling:**
   - Input Background: Off-White (#FAFAF8)
   - Input Border: 1px solid Light Gray (#E8E8E6)
   - Input Border Radius: 4px
   - Input Padding: 12px 16px
   - Input Font: Inter, sans-serif, 16px
   - Focus State: Border color becomes Sage Green (#A8B8A8), subtle glow
   - Label Font: Inter, sans-serif, 14px, weight 600
   - Label Color: Deep Teal (#5A7A7A)
   - Label Margin Bottom: 8px
   - Field Margin Bottom: 24px

4. **Submit Button:**
   - Text: "Send Message"
   - Style: Primary Button (Sage Green background)
   - Full Width: Yes (on mobile), auto (on desktop)
   - Hover Animation: Background transitions to Soft Gold, slight lift

**Form Validation:**
- Client-side validation for required fields and email format.
- Success message displayed upon submission (e.g., "Thank you for your message! I'll get back to you soon.").
- Error messages displayed for validation failures.

**Animation:** Form fields fade in as section enters viewport, with a slight stagger effect.

---

## Physical Realm Page (`/physical`)

### Page Structure

**Hero Section:** Similar to landing page hero, but with Physical Realm-specific imagery (e.g., movement, nature, body).

**Content Sections:**

1. **Introduction to Physical Realm**
   - Heading: "The Physical Realm"
   - Body: Detailed explanation of fitness, nutrition, and cycle syncing.
   - Styling: Centered, max-width 800px.

2. **Program Details**
   - Subsections for Fitness, Nutrition, and Cycle Syncing.
   - Each subsection includes a heading, description, and possibly an icon or placeholder image.

3. **Call to Action**
   - Button: "Buy Program" or "Enroll Now"
   - Style: Primary Button (Sage Green)
   - Link Destination: To be determined (possibly an external payment page or internal enrollment page)

4. **Testimonials (Optional)**
   - Placeholder testimonials from past participants.

### Styling

- Consistent navigation and footer.
- Unique accent color or border for the Physical Realm (e.g., a subtle green tint).
- Responsive layout with mobile-first approach.

---

## Mental Realm Page (`/mental`)

### Page Structure

Similar to Physical Realm Page, but with:

1. **Introduction to Mental Realm**
   - Heading: "The Mental Realm"
   - Body: Detailed explanation of shadow work, nervous system support, and mindset re-patterning.

2. **Coming Soon Notice**
   - Prominent message: "Coming Soon"
   - Explanation: "We're crafting a comprehensive program for mental transformation. Sign up below to be notified when it launches."

3. **Email Signup Form**
   - Fields: Email, optional Name
   - Button: "Notify Me"
   - Style: Secondary Button

### Styling

- Consistent with overall site design.
- Unique accent color or border for the Mental Realm (e.g., a subtle purple tint).

---

## Spiritual Realm Page (`/spiritual`)

### Page Structure

Similar to Mental Realm Page, with Spiritual Realm-specific content.

1. **Introduction to Spiritual Realm**
   - Heading: "The Spiritual Realm"
   - Body: Detailed explanation of ceremony, ritual, meditation, and feminine embodiment.

2. **Coming Soon Notice**
   - Prominent message: "Coming Soon"
   - Explanation: "We're preparing sacred practices and spiritual guidance. Sign up below to be notified when it launches."

3. **Email Signup Form**
   - Fields: Email, optional Name
   - Button: "Notify Me"
   - Style: Secondary Button

### Styling

- Consistent with overall site design.
- Unique accent color or border for the Spiritual Realm (e.g., a subtle lavender or gold tint).

---

## Journey Page (`/journey`)

### Page Structure

1. **Hero Section:** "Journey Through the Spiral"

2. **Program Overview**
   - Heading: "A Year-Long Transformation"
   - Body: Detailed explanation of the year-long structure, 3-month cycles, and integration months.

3. **Timeline/Infographic**
   - Visual representation of the year-long journey, showing each realm and integration month.
   - Possibly interactive (hover to reveal more details).

4. **Integration Months**
   - Heading: "Integration Months"
   - Body: Explanation of integration months, optional community meetups, and continued access to the coach.

5. **FAQ Section**
   - Common questions and answers about the program.

6. **Testimonials**
   - Placeholder testimonials from past participants.

7. **Call to Action**
   - Button: "Start Your Journey" or "Learn More About the Physical Realm"
   - Style: Primary Button

### Styling

- Consistent with overall site design.
- Use of visual elements (timeline, infographics) to enhance understanding.

---

## About Page (`/about`)

### Page Structure

1. **Hero Section:** "About the Sacred Spiral"

2. **Founder's Story**
   - Heading: "Meet the Guide"
   - Body: Founder's personal story, mission, and why they created the Sacred Spiral.
   - Placeholder Image: High-quality portrait of the founder.

3. **Philosophy and Values**
   - Heading: "Our Philosophy"
   - Body: Core values and beliefs that underpin the Sacred Spiral program.

4. **Professional Background**
   - Heading: "Qualifications and Experience"
   - Body: Founder's professional background, certifications, and relevant experience.

5. **Call to Action**
   - Button: "Begin Your Journey" or "Contact Me"
   - Style: Primary Button

### Styling

- Consistent with overall site design.
- Use of imagery to create a personal and inviting feel.

---

## Contact Page (`/contact`)

### Page Structure

1. **Hero Section:** "Get in Touch"

2. **Contact Information**
   - Email address
   - Social media links (placeholders)
   - Optional: Physical address or office hours

3. **Contact Form**
   - Fields: Name, Email, Subject, Message
   - Styling: Consistent with landing page contact form
   - Button: "Send Message"

4. **Optional: Map**
   - If applicable, embed a map showing location.

### Styling

- Consistent with overall site design.
- Clean, minimalist layout to focus on the contact form.

---

## Login Page (`/login`)

### Page Structure

1. **Hero Section (Minimal):** "For Initiates"

2. **Login Form**
   - Fields: Email/Username, Password
   - Button: "Log In"
   - Style: Primary Button

3. **Additional Links**
   - "Forgot Password?" link
   - "Don't have an account?" with a link to signup (if applicable)

4. **Security Notice (Optional)**
   - Brief message assuring users of security and privacy.

### Styling

- Clean, minimalist design with a focus on usability and security.
- Consistent branding elements (logo, colors).
- Responsive layout for mobile and desktop.

---

This detailed specification ensures that the AI developer agent has all the information needed to implement each page accurately and consistently, resulting in a cohesive and beautiful user experience.

