# **The Sacred Spiral App – Physical Tier Dashboard and Back‑end Planning**

The **Sacred Spiral** website uses soft beige backgrounds with muted greens and warm terracotta accents. Its typography mixes an elegant serif for headings with a clean sans serif for body text, and the imagery evokes sunrise and spiralling motifs. The home page introduces the journey through physical, mental and spiritual realms and emphasises that women’s healing is **cyclical**, not linear. Any dashboard built for the app should therefore echo this brand aesthetic and reinforce the idea of cyclical embodiment.

## **1 Goal of the physical‑tier dashboard**

The client intends to build an app where each user has access to **one or more tiers** (physical, mental, spiritual) and, after logging in, is taken directly to the tier they are working on. The physical tier (to be implemented first) will:

* Provide **workouts** and **nutrition** recommendations that align with the user’s menstrual cycle.

* Display a **calendar** showing the current day in the cycle, the phase (menstrual, follicular, ovulation, luteal) and the workout expected for that day. Users should be able to log symptoms, period dates and training intensity.

* Offer a **library of meal plans and recipes** filtered by cycle phase, dietary restrictions and nutritional goals. Research from the Cleveland Clinic suggests eating iron‑rich foods (leafy greens, lentils, beans) and vitamin C sources during menstruation, complex carbohydrates and cruciferous vegetables during the follicular phase, and high‑fibre foods and magnesium‑rich snacks (pumpkin seeds, dark chocolate) in the luteal phase[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Nutrition%20for%20each%20phase%20includes%3A). Exercise recommendations likewise vary: low‑intensity walking/yoga during menstruation, cardio in the follicular phase, high‑intensity sessions during ovulation and moderate cardio/strength in the luteal phase[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=,phase).

* Include a **chat function** so clients can communicate with the coach. Messages should be stored in the back‑end and associated with a client and coach.

* Allow users to **view educational resources** on female physiology, cycle‑syncing and wellness, similar to FitrWoman’s app features which provide quick physiology, training and nutrition tips for each phase and allow symptom logging and dynamic calendars[fitrwoman.com](https://www.fitrwoman.com/product/mobile-app-features#:~:text=Know%20your%20body).

* Support personalisation and progressive onboarding. Stormotion’s UX guidance emphasises progressive onboarding and personalising dashboards to avoid overwhelming new users[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Process). The home screen must show key information at a glance, using bold, easy‑to‑read fonts and colour‑coded sections[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=The%20home%20screen%20should%20provide,users%20need%20at%20a%20glance).

The physical‑tier dashboard will later be extended to mental and spiritual tiers, so the information architecture should remain flexible.

## **2 Data architecture and back‑end modules**

### **2.1 Entities**

1. **User** – stores the client’s profile, tier(s) subscribed to, dietary preferences, notification settings and cycle length. Women using hormonal contraceptives may not have typical cycle phases; the FitrWoman app allows users to specify whether they have a natural or contraceptive cycle[fitrwoman.com](https://www.fitrwoman.com/product/mobile-app-features#:~:text=Know%20your%20body), so the database should include `cycle_type` (natural/hormonal).

2. **Cycle Record** – tracks the start date of each period, predicted phase dates and user‑logged symptoms. It stores data such as flow intensity, energy level, mood, cramps and training intensity. A scheduled job calculates the current phase based on the cycle record.

3. **Workout** – defines each exercise routine (name, description, video link, intensity level, phase suitability, equipment required and optional difficulty modifiers). Several workouts can be grouped into programs for different cycle phases.

4. **Meal Plan/Recipe** – stores meal plans and individual recipes. Each recipe has nutritional values, phase tags (e.g., iron‑rich for menstruation, cruciferous vegetables for follicular)[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Nutrition%20for%20each%20phase%20includes%3A) and dietary flags (gluten‑free, vegan, etc.).

5. **Tier/Program** – defines each program (physical, mental, spiritual) and the modules within it. In the physical tier, modules include cycle tracking, workouts and nutrition. In the mental tier, modules might include meditation, journaling and therapy sessions.

6. **Coach** and **Chat Message** – messages are stored in a chat table with sender, recipient, timestamp and content fields. A chat room can link a user and coach.

7. **Notification** – handles push or email notifications for workout reminders, upcoming phase changes, new messages, etc.

### **2.2 Back‑end services**

* **User authentication & tier routing** – after login, identify the user’s active tier(s) and route them to the appropriate home page. If a user has multiple tiers, show a tier‑selection screen.

* **Cycle phase engine** – calculates the current phase by comparing the current date with the last period start date and cycle length; predicts the next phases. This engine drives workout and nutrition recommendations.

* **Workout & meal recommendation service** – selects workouts and meal plans based on the user’s current phase, intensity preference and training level. It also respects dietary restrictions. For example, during the menstrual phase, the service will suggest low‑intensity yoga and iron‑rich meals[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Nutrition%20for%20each%20phase%20includes%3A); during the follicular phase it will recommend cardio and strength workouts with complex carbohydrates[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Choose%20foods%20to%20support%20your,intensity%20workouts); during ovulation it suggests high‑intensity workouts like boot camp or kickboxing[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=,phase); and during the luteal phase it offers moderate cardio and strength training[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Medium,slower%20as%20your%20period%20approaches).

* **Progress tracking & analytics** – records completed workouts, meals logged, cycle symptoms, and sends data for analytics and progress charts. Stormotion highlights the importance of visual progress tracking with graphs and streak counters to motivate users[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Tracking).

* **Chat service** – real‑time messaging or asynchronous chat using a service such as Firebase, Pusher or a custom websocket server. Messages are tied to the user and coach.

* **Content management interface (admin dashboard)** – for the coach/administrator to create and edit workouts, meal plans, educational articles and push notifications; manage user subscriptions; review client progress and cycle data; respond to messages; and update program modules. The admin dashboard should support uploading exercise videos, tagging meals with phase labels, editing calendars and sending group messages.

* **Notification scheduler** – triggers reminders for workouts, meal logging and phase transitions; sends educational tips (e.g., a push note when the user enters the follicular phase reminding her to prioritise complex carbohydrates and strength training[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Choose%20foods%20to%20support%20your,intensity%20workouts)). Stormotion recommends personalised reminders to boost engagement[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Tracking).

### **2.3 Technology choices (suggested)**

* **Back‑end framework** – Node.js (Express) or Python (Django/Flask) to build RESTful or GraphQL APIs.

* **Database** – relational (PostgreSQL) or document (MongoDB) to store structured user, program and content data.

* **Authentication** – JWT‑based authentication with token refresh; third‑party OAuth integration if social logins are desired.

* **Scheduler** – a cron‑like job (e.g., Celery for Python, or node‑cron for Node.js) to update cycle phases daily and generate daily recommendations.

* **File storage** – cloud storage (AWS S3, Google Cloud Storage) for video and image assets.

* **Real‑time communication** – websockets via Socket.io or integration with a platform such as Twilio Chat.

* **Admin panel** – frameworks like Django Admin, KeystoneJS or a custom React/Vue dashboard to allow coaches to manage content.

## **3 Dashboard structure and user flow**

### **3.1 Navigation and layout**

Research on fitness app UX suggests that the home screen should present everything the user needs at a glance and avoid clutter; bold fonts and colour‑coded sections improve readability[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=The%20home%20screen%20should%20provide,users%20need%20at%20a%20glance). A persistent bottom navigation bar is recommended for quick access to core modules[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Navigation%20Flow). The physical‑tier dashboard can adopt a five‑tab layout:

| Icon | Tab | Purpose |
| ----- | ----- | ----- |
| 🏠 **Home** | The landing page with the **cycle calendar**. Shows today’s phase, date in cycle, and upcoming workouts and meals. Use a progress ring or spiral motif to visualise the current cycle. Provide quick actions (e.g., “Log period”, “Mark workout complete”). |  |
| 🩺 **Cycle** | Detailed cycle page. Allows logging period start/end, symptoms and flow; visualises phases on a monthly calendar; displays predicted fertile window. Offers educational tips for the current phase, echoing FitrWoman’s symptom logging and dynamic calendar[fitrwoman.com](https://www.fitrwoman.com/product/mobile-app-features#:~:text=One%20centralised%20place%20to%20log,symptoms%20and%20track%20your%20cycle). |  |
| 💪 **Workouts** | Library of video workouts categorised by cycle phase and intensity. Each workout card shows duration, equipment, difficulty and tags for “menstrual‑friendly”, “follicular power”, “ovulation HIIT”, “luteal strength”. Users can schedule workouts and mark them as completed. |  |
| 🍲 **Nutrition** | Meal plan hub. Displays recommended meals for the current phase, with filters for dietary preferences and macros. Recipes include ingredients and cooking instructions. Allows saving favourites and generating shopping lists, similar to FitrWoman’s nutrition hub which provides a library of recipes and dietary preference filters[fitrwoman.com](https://www.fitrwoman.com/product/mobile-app-features#:~:text=Nail%20your%20nutrition). |  |
| 💬 **Chat** | Messaging tab. Displays conversation with the coach, allows sending messages, attachments (photos of meals or form checks) and scheduled check‑ins. Show typing indicators and time stamps. |  |

The interface should use the brand’s **natural colour palette**: green (balance and trust), orange/terracotta (call‑to‑action buttons), and beige backgrounds. Colour psychology research suggests that green and blue evoke balance and trust while orange/red encourage action[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=Color%20psychology%20plays%20a%20crucial,role%20in%20user%20perception); therefore action buttons like “Start Workout” or “Send Message” can use terracotta, while informational sections use green. Use spiralling or circular progress bars to reinforce the theme.

### **3.2 Home screen (dashboard) details**

The home dashboard is the user’s daily hub. It should include:

* **Cycle calendar panel** – at the top, a horizontal calendar with a highlighted spiral or circular indicator showing the current day in the cycle. Under the date, a label displays the phase (Menstrual/Follicular/Ovulation/Luteal) and a brief summary of what the body experiences (e.g., “Low energy – focus on gentle movement and iron‑rich foods” during menstruation[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Nutrition%20for%20each%20phase%20includes%3A)). Users can tap the phase to read more.

* **Today’s workout card** – below the calendar, show the recommended workout with name, duration, intensity and a “Start” button. The card’s background colour corresponds to the phase (e.g., soothing blue for menstruation, energetic green for follicular). Include a checklist to mark the workout complete; completion triggers a confetti animation or haptic feedback to encourage engagement (small micro‑interactions increase dopamine and engagement[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Process)).

* **Meal suggestion card** – summarises suggested meals for the day or week, with photos, macros and an option to view recipes. Highlight nutrients needed for the phase (iron/vitamin C for menstruation; cruciferous vegetables, complex carbs and healthy fats for follicular[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Foods%20to%20eat%20during%20the,menstrual%20phase%20include); high‑energy foods for ovulation; high‑fibre foods and magnesium‑rich snacks for luteal[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=,phase)).

* **Cycle symptom quick log** – a small panel or plus (+) button to log symptoms such as cramps, mood or energy. This data feeds the cycle engine for more accurate predictions and helps the coach see patterns.

* **Motivational quote or educational tip** – an inspirational message or a one‑sentence physiological fact about the current phase. This encourages users to learn more about their bodies.

### **3.3 Cycle page**

* Provide a monthly calendar view with coloured blocks representing each phase. Users can tap on a day to add symptoms, flow, mood and exercise notes.

* Include predicted dates for the next period and ovulation; allow editing cycle length if the user has irregular cycles.

* Show an overview of previous cycles, including duration, symptoms and any skipped workouts, enabling pattern recognition. FitrWoman emphasises “visualise your past cycles and symptom history”[fitrwoman.com](https://www.fitrwoman.com/product/mobile-app-features#:~:text=Visualise%20your%20past%20cycles%20and,symptom%20history); such historical charts can help users understand patterns and communicate with their coach.

* Offer educational resources about hormone fluctuations, recommended training intensity, nutrition and lifestyle adjustments for each phase.

### **3.4 Workouts page**

* **Filters and categories** – allow filtering by cycle phase, workout type (HIIT, yoga, strength, cardio), duration and equipment. Display recommended workouts first based on the user’s current phase.

* **Workout detail screen** – each workout includes a video or GIF demonstration, description, benefits, equipment list, modifications for different fitness levels and a “Mark Completed” button. Provide a section for user notes or reflections to log how they felt.

* **Progress indicators** – show the number of workouts completed this week, streak badges (e.g., “5 workouts in your follicular phase\!”) and allow sharing achievements with the coach. Gamification through badges and streaks helps maintain motivation[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Tracking).

* **Download/offline** – optional feature to download workouts for offline access.

### **3.5 Nutrition page**

* **Meal plan overview** – displays the recommended meal plan for the week, broken down by meals (breakfast, lunch, dinner, snacks). Show macros, calories and recipe thumbnails.

* **Recipe library** – searchable database of recipes tagged by phase and nutrient content. Users can filter for dietary preferences (e.g., vegan, gluten‑free) and key nutrients (iron, omega‑3s). Include the ability to save favourites and generate a shopping list.

* **Nutrition tracker** – allow users to log meals or sync with third‑party trackers (MyFitnessPal, Apple Health). Provide feedback on whether nutritional goals for the phase have been met.

### **3.6 Chat page (Coach)**

* **One‑on‑one chat** – a simple messaging interface where users can ask questions, send updates, photos (e.g., meal pictures) and voice notes.

* **Group chat or announcements** – the coach can broadcast messages to all clients or groups (e.g., “New recipe pack for the follicular phase available\!”).

* **Integrated scheduling** – allow the coach to schedule check‑ins or video sessions; integrate with calendar invites.

* **Notifications** – new messages trigger push notifications so the client does not miss communications.

### **3.7 Admin (coach) dashboard**

The coach dashboard (web‑based) should include:

* **Client management** – view client profiles, active tiers, cycle data and progress. Filter clients by their current phase to see who may need extra support.

* **Content management** – create and upload workouts, meal plans, recipes and educational articles. Tag each item with relevant phases and difficulty levels.

* **Scheduling and automation** – configure the automation funnel that assigns workouts and meals to clients based on their cycle phase. Manage scheduled notifications and reminders.

* **Communication tools** – respond to messages, send announcements and schedule group sessions.

* **Analytics and reporting** – dashboards showing client engagement (workout completion rates, meal logging), cycle irregularities and correlation between symptoms and training. This helps tailor programmes.

* **Tier management** – create and edit new tiers (e.g., mental and spiritual modules), assign content to tiers and manage subscriptions.

## **4 Branding and visual design recommendations**

1. **Colour palette** – adopt the website’s soft beige backgrounds combined with muted green and warm terracotta accents. According to UX research, green/blue tones evoke balance and trust while orange/red encourage action[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=Color%20psychology%20plays%20a%20crucial,role%20in%20user%20perception). Use green for informational components (cycle phase, progress), terracotta for call‑to‑action buttons (start workout, send message) and beige for backgrounds. Avoid heavy contrast; keep the interface calming and supportive.

2. **Typography** – use an elegant serif for headings (mirroring the site’s typeface) and a legible sans serif for body text. Maintain a consistent hierarchy with larger font sizes for headings and clear spacing. Avoid clutter; follow Stormotion’s advice to use bold, easy‑to‑read fonts and to keep the home screen uncluttered[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=The%20home%20screen%20should%20provide,users%20need%20at%20a%20glance).

3. **Imagery and icons** – incorporate nature imagery (sunrises, spirals, botanical illustrations) that reflects the Sacred Spiral brand. Use simple, line‑art icons for navigation tabs (home, cycle, workouts, nutrition, chat). Avoid stock photography of real people to maintain anonymity and align with image safety policies.

4. **Micro‑interactions** – subtle animations (spiral spinning when loading, progress bar filling) and haptic feedback when completing a workout can increase engagement[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=,Process). Gamify achievements with badges shaped like spirals.

## **5 Roll‑out plan**

1. **Wireframing** – sketch low‑fidelity wireframes of each screen (home, cycle, workouts, nutrition, chat and admin). Validate navigation flows with potential users (women in your target demographic).

2. **MVP development** – build core back‑end services (authentication, cycle phase engine, workout & meal recommendation, chat) and integrate them with the existing front‑end login. Focus on the physical tier only. Use placeholder content for workouts and recipes.

3. **Testing and feedback** – release the MVP to a small group. Collect feedback on ease of use, accuracy of cycle predictions and appropriateness of workout/nutrition recommendations. Iterate on UI/UX.

4. **Content expansion** – develop a comprehensive library of workouts and recipes tagged by phase and difficulty. Create educational articles about cycle syncing, hormone health and self‑care.

5. **Add mental and spiritual tiers** – after refining the physical tier, create additional dashboards for mental (meditation, journaling, breathwork) and spiritual (ceremonies, rituals, herbal remedies) tiers, following the same structure. Each tier can have its own modules accessible via the bottom navigation bar or a tier‑selection screen after login.

## **6 Conclusion**

Building The Sacred Spiral’s physical‑tier dashboard requires blending **data‑driven recommendations** with a **soothing, cyclical design**. By tracking each client’s menstrual cycle and aligning workouts and nutrition accordingly, the app empowers women to honour their rhythms. Integrating research‑based exercise and nutrition guidance[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=,phase)[health.clevelandclinic.org](https://health.clevelandclinic.org/nutrition-and-exercise-throughout-your-menstrual-cycle#:~:text=Foods%20to%20eat%20during%20the,menstrual%20phase%20include) with user‑centred design principles[stormotion.io](https://stormotion.io/blog/fitness-app-ux/#:~:text=The%20home%20screen%20should%20provide,users%20need%20at%20a%20glance) will create an experience that is not only beautiful but also supportive and effective. A well‑structured admin dashboard enables the coach to manage content and monitor clients, while scalable back‑end services ensure the app can expand to include mental and spiritual tiers.

