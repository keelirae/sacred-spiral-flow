Mobile UI/UX Guidelines for Spiral Root Dashboard

These guidelines distill the design language from the sample interfaces provided (Clinician Dashboard, NutriCoach home screen and diet app concept) and adapt them for Spiral Root. They focus on creating a clean, friendly and modern mobile experience that aligns with your brand’s earthy, spiritual aesthetic.

1. Visual Style

Colour palette. Adopt soft, calming tones similar to the examples: pastel greens, light greys and off‑whites as base colours. Use your brand’s earthy colours (e.g., muted sage, lavender, terracotta) as accents. Reserve a bolder accent (e.g., emerald or teal) for primary actions and highlights.

Cards with rounded corners. Display information in card components with generous border‑radii (12–16 px). Use subtle shadows or elevation to distinguish cards from the background. Examples include: HEIFA score cards and the “My Score” panel.

Minimalistic icons and typography. Use simple line icons with consistent stroke widths (e.g., from Heroicons or Feather Icons). Pair these with a friendly sans‑serif typeface. Vary font weights to create hierarchy: bold for headings (e.g., 20–24 pt) and regular/light for body text (14–16 pt).

Illustrations and photography. Integrate playful illustrations or lifestyle photos to evoke warmth and wellness (e.g., the veggies graphic on the home screen). Place images in circles or rounded rectangles to soften the visual impact.

Curved background elements. Incorporate wave‑like shapes at the top or bottom of screens (as seen in the diet app concept). These can be implemented as SVG or CSS shapes and filled with gradient versions of your accent colours. Ensure curves do not interfere with content and adjust based on device height.

2. Layout and Navigation

Top bar. Keep the top bar compact (56–64 px tall) with a clear title and optional back/close icon. Use the primary accent colour for icons (e.g., arrow back) to maintain consistency. Avoid overcrowding; place secondary actions in an overflow menu or a floating button.

Bottom navigation bar. Use a fixed bottom nav bar with four or five icons labeled clearly (e.g., Home, Calendar, Workouts, Nutrition, Cycle/Insights, Settings). Highlight the active tab with a filled icon and accent colour. Ensure the nav bar adapts to devices with safe areas (e.g., iPhone notch) and uses enough padding for comfortable tapping.

Card lists and sections. Structure each screen into vertical sections separated by whitespace. For example, on the home screen, start with a greeting (“Hello, [Name]”), followed by a summary card (e.g., Food Quality Score), and then explanatory or educational text. Use bottom sheets or modals for detailed tasks rather than navigating away from the main screen.

Scroll behaviour. Screens should be vertically scrollable with a consistent background. Avoid nested scroll views; instead, let the card content flow naturally. Use sticky headers for key sections (e.g., “AI Consultant” title) so they remain visible when the user scrolls.

Responsive spacing. Maintain generous padding around elements (16–24 px), and spacing between sections (24–32 px) to avoid clutter. On very small devices, reduce padding slightly to maximize content space.

3. Specific Components

Score panels. Display metrics (e.g., HEIFA scores, Food Quality Score) in cards with large, coloured numbers. Include an icon (gender symbol, leaf icon, etc.) in a small circular badge next to the title. Provide a subtitle (“Average HEIFA Score”) below the number in smaller text.

Chat messages. Use speech‑bubble style containers with rounded corners. Align assistant messages to the left with a light background and user messages to the right with a slightly darker accent. Provide a chat input field with an icon button (e.g., send arrow) coloured according to your accent palette. Indicate the assistant’s name and role beneath messages in small grey text.

Forms and questionnaire pages. For data entry (e.g., cycle details, food intake), group inputs in a card with a soft grey background. Use input fields with filled backgrounds and rounded corners. Provide helpful placeholder text and clear labels. Include a floating action button or fixed bottom bar with a primary action (e.g., “Save”, “Next”).

Charts and analytics. Present charts (bar, line or donut) in cards with enough height (e.g., 200–250 px) for readability. On mobile, limit the number of visible data series and provide tooltips on tap. Summarize key figures above the chart.

Illustrative onboarding. If you include onboarding or introduction screens, use full‑screen illustrations and succinct text. Provide progress indicators (e.g., dots) and clear “Next” and “Skip” actions.

4. Interaction and Micro‑Animations

State feedback. Use subtle animations or colour changes to acknowledge interactions—pressing a button can scale it down slightly or change the shade. When loading data, show skeleton placeholders or shimmer animations instead of spinners to maintain engagement.

Transitions. Screen transitions should be smooth and consistent (e.g., slide up for modals, fade‑in for new content). Keep animation durations between 200–400 ms to feel snappy.

Gestures. Where it enhances usability, support swipe or drag gestures—e.g., swiping between calendar weeks, dragging down to refresh, or swiping chat messages to reveal options.

5. Accessibility Considerations

Contrast ratios. Ensure text and icon colours meet WCAG AA contrast requirements against their backgrounds. Pastel colours should be balanced with darker text to remain legible.

Typography sizing. Support system font scaling by using rem units or Tailwind’s responsive typography. Test with larger accessibility settings to verify layout integrity.

VoiceOver/screen reader. Provide semantic labels for navigation icons, buttons and inputs. For example, label the chat send button with “Send message” and each score card with descriptive text.

Tap target sizes. Maintain a minimum of 44 × 44 px touch targets to accommodate different finger sizes and prevent accidental taps.

6. Implementation Tips in Tailwind & React

Reusable components. Build generic card, button and input components with props for size, variant, and icons. This will ensure consistent styling across the app and speed up development.

Tailwind CSS customization. Extend Tailwind’s theme with custom colours and border radius values, and enable dark mode by adding darkMode: 'class'. Use Tailwind’s @apply directive for utility classes in CSS modules when you need to group classes.

SVG and asset management. Create an assets folder with your icons and illustrations in SVG format. Import them as React components (import { ReactComponent as Logo } from './logo.svg') to enable easy styling via CSS.

Testing on real devices. Throughout development, test the UI on multiple device sizes (using Chrome DevTools device mode and physical devices) to validate spacing, readability and performance.

Share these guidelines with your developer so they can plan the design and component library before coding. Combining the structural plan from the integration document with these mobile UI/UX guidelines will help create a professional, cohesive and delightful Spiral Root dashboard.