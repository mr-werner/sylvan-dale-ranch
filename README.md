# Sylvan Dale Guest Ranch — Blueprint WebStudio Concept

Independent, non-official redesign concept for https://www.sylvandale.com/ (Loveland, CO).
Preview: https://sdr.blueprintwebstudio.com (noindex; the demo code lives in the Neon `demos` table).

Custom build, not the shared concept layout. Content and layout are in `src/App.jsx`, styles in `src/styles.css`, and the Blueprint WebStudio concept widget in `src/concept.jsx`.

## Local setup

```bash
npm install
cp .env.example .env.local
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Vercel project `sylvan-dale-ranch` (framework: Vite, team mrwerner-s-projects). Pushes to `main` deploy automatically.
Domain `sdr.blueprintwebstudio.com` is a CNAME at Porkbun pointing to the target Vercel shows for this project.

Environment variables (optional): `VITE_CONCEPT_END_DATE` (countdown end, 2026-11-24). The "I'm Interested" form posts to `api/demo-interest.js`, which proxies to the main studio site.

## Design

- Motif: their own Heart-J brand (the heart and J from the logo, also the name of their Heart-J Saloon) used as a branding-iron mark on eyebrows, week list, reviews and the 80-seasons stamp; a split-rail fence divider; and a ranch-entrance gate hero, with timber posts, a crossbeam and the logo on a swinging oxblood sign.
- Colors from the current site and logo: oxblood #660000, charcoal #2a2829 and bone #e2dfdf, warmed with a hide-paper neutral (#f5efe6) and a saddle-leather tan (#b5773d).
- Type: Fraunces (soft editorial serif with italic accents), Oswald (condensed caps, echoing the logo lettering) and Karla for body.
- Section order: gate hero, a "trailhead" board (phone, email, online trail-ride booking, check-in times), four ways to stay, riding (trail names, summer/winter toggle, tack-room price board), dude ranch weeks and rates, cabins with the full B&B rate table, weddings and retreats, awards shelf, guest reviews, family story and team, holiday traditions, directions with the "look for the covered wagons" note and FAQ, and a plan-your-stay form.
- Trail rides go to their existing FareHarbor booking page. The plan-your-stay form opens a pre-filled email to ranch@sylvandale.com (their site says all stays are booked with a salesperson directly). Wedding button links to their wedding site, sylvandaleranch.wedding.
- Photos and badges were downloaded from sylvandale.com into `public/photos` and `src/assets` for the demo. They are the ranch's own images and must be confirmed or replaced with licensed originals before a real launch.

## What changed from the current site

- Removes the "Click Here for Our COVID-19 Preparations & Policies" banner (it still links to a one-line COVID page) and the "©2022" footer.
- The current homepage hero puts long underlined text straight over a busy photo and buries the phone number in the footer. Here phone, email, booking and check-in times sit directly under the hero, and the phone is in the top bar on every scroll.
- The "Upcoming Events" cards on the current homepage show post dates rather than event dates (e.g. "Saddle Up for Fall" is dated August 29, 2026 but is about October 11) and still promote 2025 posts. The concept lists traditions by when they happen.
- Rates that are spread across Dude Ranch Vacations, Bunk & Breakfast, Lodging and Riding Adventures are brought onto one page.
- All awards from the current site are shown together (Best of the West 2026, RanchWeb 2026, Tripadvisor Travelers' Choice 2024, Colorado Dude & Guest Ranch Association, Dude Ranchers' Association); they were scattered on the homepage and vacation pages.
- Checked at 1440px and 390px with no sideways scrolling.

## Owner should confirm

- Rates are the 2026 figures from the current site (vacation weeks, B&B, trail rides, chow-down rides, riding extras); confirm or update for 2027 before launch.
- The week season labels (e.g. "June – August" for Family Week, "Spring, summer & fall" for Cowgirl Roundup) are summarized from the 2026 dates table.
- "Our 80th season" (2026) is based on the site's "80th season" wording and the 1946 founding year.
- Summer day-ride rule (weekends only, June–September) and winter rule (1 and 1½-hour rides only, October–March) are copied from the Riding Adventures page.
- Whether the Wildheart Equine Retreat (2027) and the Thanksgiving Getaway (Nov 26–29, 2026) are still open for booking.
- The Tripadvisor Travelers' Choice badge is from 2024; add a newer one if they have it.
- Reviews are quoted word for word from sylvandale.com (homepage, /reviews and /business-retreats). No star rating is shown because none was verified; the review links go to Google, Tripadvisor, Yelp, WeddingWire and Facebook.
- The Google Maps embed uses a keyless embed URL; swap in an API key or a static map if preferred.
- Photo and badge usage rights (all taken from sylvandale.com).
