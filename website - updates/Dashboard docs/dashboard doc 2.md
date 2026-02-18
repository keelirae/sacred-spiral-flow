# **Spiral Root Dashboard Integration Plan**

This plan is for integrating the chosen **Overload Trainer Hub** dashboard template (React \+ Tailwind \+ Firebase) into your existing **Spiral Root** frontend codebase. It assumes you already cloned the template into your project and that you have a working login flow. The goal is to create a unified dashboard that reflects Spiral Root’s brand, connects seamlessly after login, and exposes all the functions you outlined: cycle‑synced workouts, nutrition plans, cycle tracking, chat, tasks and metrics. The steps below should be followed sequentially by your VS Code agent or developer.

## **1\. Repository Structure and Environment Setup**

1. **Preserve your current frontend repo**. Create a new branch (e.g., `dashboard-integration`) to avoid disrupting the main branch. Copy the `client` folder from the Overload template into your project under a folder such as `dashboard`.

2. **Install dependencies**. Navigate to the `dashboard` folder and run `npm install` to install the template’s dependencies. Ensure your workspace still builds and that there are no conflicting versions with your existing app. If conflicts arise, consolidate dependencies (e.g., version of React, Tailwind) in the root `package.json`.

3. **Configure Firebase (or your chosen backend)**. If you are adopting Firebase, create a `firebaseConfig.ts` or similar file in `src` that initializes Firebase Auth and Firestore. If you intend to use your own API/backend, stub out Firebase calls with placeholder services that will call your REST or GraphQL endpoints instead. Keep the same function names (e.g., `getClientData`, `createWorkoutPlan`) so the rest of the code can remain unchanged.

## **2\. Routing and Login Integration**

1. **Unified routing**. In your existing app’s router (likely `App.tsx` or `routes.tsx`), add a new route `/dashboard/*` that renders a `DashboardWrapper` component. This wrapper should encapsulate all routes from the Overload template (e.g., `/dashboard/home`, `/dashboard/clients/:id`, etc.) and provide navigation.

2. **Authentication guard**. Modify the login success flow so that after a user signs in, they are redirected to `/dashboard/home`. The `DashboardWrapper` should check `currentUser` (from Firebase Auth or your auth context) and, if null, redirect back to `/login`.

3. **User context**. Create a `UserContext` or reuse the Overload `useAuth` hook to provide user data (e.g., cycle phase, membership tier). This context should be available to all dashboard components via React Context or a state management library (e.g., Redux or Zustand).

## **3\. Dashboard Layout and Branding**

1. **Update global styles**. Adjust the Tailwind configuration (`tailwind.config.js`) to reflect Spiral Root’s colour palette (earthy and mystical tones). Define custom colours (e.g., `primary`, `secondary`, `accent`) in the theme section and ensure they match your existing brand guidelines.

2. **Navigation menu**. Edit `src/components/Sidebar.tsx` and `Header.tsx` (names may vary) to include the tabs you need: **Home**, **Calendar**, **Workouts**, **Nutrition**, **Cycle Tracker**, **Chat**, and **Tasks/Notes**. Remove menu items that aren’t relevant (e.g., pricing packages if unused). Use icons from Heroicons or FontAwesome that match your aesthetic.

3. **Dashboard home page**. Create `src/pages/DashboardHome.tsx` that acts as an overview. It should display:

   * A calendar widget showing the current date and cycle day, with color coding for follicular, ovulatory, luteal and menstrual phases.

   * Quick links/cards summarizing today’s workout and nutrition plan based on the user’s cycle phase.

   * A summary of latest messages or notifications.

4. **Typography and imagery**. Integrate your brand fonts via Google Fonts or local files. Replace stock images or icons with your own branded assets. Ensure the dashboard header displays your logo and the tagline if appropriate.

## **4\. Implementing Cycle‑Synced Logic**

1. **Data model**. Extend the user data model to include cycle information: `cycleStartDate`, `cycleLength`, `currentPhase`, `phaseStartDate`. Store this data in Firestore or your API. Provide a form (`src/pages/CycleSettings.tsx`) where users can input and update their cycle length and start date.

2. **Phase calculation service**. Create a utility (`src/utils/cycleUtils.ts`) that, given the current date and the user’s cycle data, calculates the current phase and day. Phases might be defined as: Menstrual (Days 1–5), Follicular (6–12), Ovulatory (13–16), Luteal (17–28). Export functions like `getPhaseForDate(date, cycleData)` and `getNextPhaseDates(cycleData)`.

3. **Automatic workout/meal selection**. In the home page and calendar page, call `getPhaseForDate` to determine the phase, then fetch corresponding workouts and meal plans from the database. For example, maintain collections `workouts/{phase}` and `meals/{phase}` in Firestore. Display the relevant workout and nutrition plan for each calendar day.

4. **Calendar view**. Use a calendar component (e.g., `react-big-calendar` or `fullcalendar`) to render the month view. Each day should show the phase color and include a link to view details. Provide a mini legend of phase colours for clarity.

## **5\. Workouts and Nutrition Tabs**

1. **Workouts tab**. Render a list of workouts for the current phase. Each workout card should include exercises, sets/reps, weight suggestions, and a button to mark as complete. Provide filtering (e.g., by phase, by type). When a user marks a workout as done, update their history in the database. Consider using Chart.js or Recharts to display progress over time.

2. **Nutrition tab**. Display the current phase’s meal plan or macro targets. Include macros by meal (breakfast, lunch, dinner, snacks) with ingredients, recipes, and preparation instructions. Provide a button to log compliance or notes. If the user changes their phase (e.g., due to an early period), update the meal plan accordingly.

## **6\. Cycle Tracking Tab**

1. **Cycle data entry**. Create a form that allows users to log symptoms (e.g., cramps, mood), flow intensity, and start date. Each entry should be timestamped and stored in the database.

2. **Charts and analytics**. Use charts to visualize cycle length variability, symptom trends, and mood patterns. Provide a table of past periods with start and end dates. Highlight patterns that might inform workout/nutrition adjustments.

3. **Notifications and reminders**. Add optional notifications to remind users when a new phase is approaching. Use Firebase Cloud Messaging or a scheduled CRON job on your backend to send push/email notifications.

## **7\. Chat/Messaging Module**

1. **Reuse the Overload chat component**. The template includes a real‑time messaging system powered by Firestore[github.com](https://github.com/Samuel-J-Mathew/overload-trainer-hub-Web-App#:~:text=). Keep the same structure but update the UI to match your brand. Ensure the chat context uses the logged‑in user’s ID and that messages are stored under `messages/{userId}`.

2. **Integration in navigation**. Add a chat icon/badge in the header showing unread messages. Within the chat page, provide threads by client or by subject. If you need group chat or broadcast messages, add a `groupChats` collection and adapt the UI accordingly.

## **8\. Tasks and Notes (Optional but recommended)**

1. **Task system**. If you want to track tasks like “complete workout” or “update nutrition log,” reuse the `Task` component from the Overload template[github.com](https://github.com/Samuel-J-Mathew/overload-trainer-hub-Web-App#:~:text=). Modify fields to suit your workflow (e.g., add due date, priority). Display tasks on the home page and allow users to mark them as complete.

2. **Notes/journal**. Provide a simple text editor where users can log reflections or journal entries each day. Store them in a `journals/{userId}` collection and allow editing/deletion.

## **9\. Testing and Quality Assurance**

1. **Component testing**. Write unit tests with Jest and React Testing Library for critical components (e.g., cycle phase calculations, workout selection). Ensure that the correct phase is returned for edge cases such as cycle length changes.

2. **End‑to‑end testing**. Use Cypress to simulate user flows: logging in, entering cycle data, viewing the calendar, completing a workout, sending a chat message. Verify that the state updates correctly and that UI remains responsive.

3. **Accessibility and responsiveness**. Use Lighthouse or aXe to test for accessibility violations. Ensure the dashboard is responsive on mobile and desktop. Adapt the navigation into a collapsible menu on small screens.

## **10\. Deployment and Handoff**

1. **Prepare build scripts**. Add scripts in `package.json` for development and production builds (e.g., `npm run build:dashboard`). If using Firebase hosting, configure `firebase.json` with rewrite rules for your dashboard routes. If using another platform (Netlify, Vercel), adjust accordingly.

2. **Documentation**. Update your project’s README to explain how the dashboard works, including instructions for setting environment variables (Firebase keys, API endpoints), running the app locally, and deploying.

3. **Merge back into main**. Once you and the agent are satisfied with the dashboard, merge the `dashboard-integration` branch into the main branch and resolve any conflicts. Tag a release so you have a restore point.

---

**Next steps for your VS Code agent:** Open this plan, follow each section sequentially, and keep a checklist of completed tasks. Start by setting up the environment and router integration, then progressively move through UI branding, phase logic, feature tabs, chat, tasks, and testing. Ensure the finished dashboard is tightly integrated with your login flow and visually aligned with the Spiral Root brand.

