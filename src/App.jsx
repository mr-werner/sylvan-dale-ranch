import React, { useEffect, useState } from "react";
import { ArrowRight, ArrowUpRight, CalendarDays, Clock, Dog, Mail, MapPin, Menu, Phone, Plane, Quote, Wifi, X } from "lucide-react";
import { ConceptWidget, StudioCredit } from "./concept.jsx";
import logo from "./assets/sylvan-dale-logo.png";
import badgeBotw from "./assets/badge-botw.jpg";
import badgeRanchweb from "./assets/badge-gold.png";
import badgeTripadvisor from "./assets/badge-ta.png";
import badgeCdgra from "./assets/badge-ccr.png";
import badgeDra from "./assets/badge-dra.png";

// ---------------------------------------------------------------- Content (from sylvandale.com, checked 2026-10-20)
const COMPANY = "Sylvan Dale Guest Ranch";
const ABBR = "sdr";
const END_DATE = "2026-11-24T23:59:59-07:00";
const PHONE = "970-667-3915";
const PHONE_HREF = "tel:+19706673915";
const EMAIL = "ranch@sylvandale.com";
const KAREN_EMAIL = "karenb@sylvandale.com";
const ADDRESS_1 = "2939 N. County Rd. 31D";
const ADDRESS_2 = "Loveland, CO 80538";
const ORIGINAL = "https://www.sylvandale.com/";
const RIDE_BOOKING = "https://fareharbor.com/embeds/book/sylvandale/?full-items=yes";
const WEDDING_SITE = "https://www.sylvandaleranch.wedding/";
const SHUTTLE = "https://www.genesis-executive.com/sylvan-dale-ranch";
const MAP_EMBED = "https://maps.google.com/maps?q=Sylvan%20Dale%20Guest%20Ranch%2C%202939%20N%20County%20Rd%2031D%2C%20Loveland%2C%20CO&z=12&output=embed";
const MAP_LINK = "https://www.google.com/maps/search/?api=1&query=Sylvan+Dale+Guest+Ranch+Loveland+CO";

const SOCIAL = [
  ["Facebook", "https://www.facebook.com/sylvandale/"],
  ["Instagram", "https://www.instagram.com/sylvandaleranch/"],
  ["YouTube", "https://www.youtube.com/user/sylvandaleranch"],
  ["Pinterest", "https://www.pinterest.com/sylvandale/"],
  ["LinkedIn", "https://www.linkedin.com/company/sylvan-dale-guest-ranch"],
];

const REVIEW_LINKS = [
  ["Google", "https://www.google.com/maps/search/?api=1&query=Sylvan+Dale+Guest+Ranch+Loveland+CO"],
  ["Tripadvisor", "https://www.tripadvisor.com/Hotel_Review-g33530-d220038-Reviews-Sylvan_Dale_Guest_Ranch-Loveland_Colorado.html"],
  ["Yelp", "https://www.yelp.com/biz/sylvan-dale-guest-ranch-loveland"],
  ["WeddingWire", "https://www.weddingwire.com/reviews/sylvan-dale-guest-ranch-loveland/00ed5d1ce6e166e0.html"],
  ["Facebook", "https://www.facebook.com/pg/sylvandale/reviews/"],
];

const P = (name) => `/photos/${name}.jpg`;

const NAV = [
  ["Stays", "#stays"],
  ["Riding", "#riding"],
  ["Lodging", "#lodging"],
  ["Weddings & Retreats", "#gatherings"],
  ["Our Story", "#story"],
  ["Directions", "#visit"],
];

const STAYS = [
  {
    brand: "01", name: "Dude Ranch Vacations", img: P("pasture-ride"),
    text: "A full week on horseback: daily riding lessons, twice-a-day trail rides, cattle work, trapshooting, archery and Western dance night. Meals, activities and lodging all included.",
    meta: "5- and 6-night weeks · from $2,600 per adult (2026)", href: "#weeks", cta: "See the weeks",
  },
  {
    brand: "02", name: "Bunk & Breakfast", img: P("cabin"),
    text: "A cozy cabin or guest house in the valley and a hearty ranch breakfast in the morning, 10 minutes from Loveland and an easy hour from Denver.",
    meta: "Year-round · from $114 a night", href: "#lodging", cta: "Cabins & rates",
  },
  {
    brand: "03", name: "Business & Wellness Retreats", img: P("retreat-room"),
    text: "Meetings in the Heritage Lodge with high-speed internet, riverside campfires at night, and miles of trail to clear your head. Custom pricing, September through May.",
    meta: "Custom quotes · call or email", href: "#gatherings", cta: "Plan a retreat",
  },
  {
    brand: "04", name: "Weddings", img: P("wedding-sunset"),
    text: "Two outdoor ceremony sites on the Big Thompson River, an indoor/outdoor lodge for the reception, on-site catering, day-of coordination and cabins for your guests.",
    meta: "Inclusive venue · on-site lodging", href: "#gatherings", cta: "Wedding details",
  },
];

const TRAILS = ["Sulzer Gulch", "Alexander Mountain", "Eagle Ridge", "Green Ridge", "The Rim Ride"];

const RIDES = [
  ["1 hour", "$80", "per rider"],
  ["1½ hours", "$100", "per rider"],
  ["2 hours", "$120", "per rider"],
  ["Lead-around", "$25", "3 laps of the arena for little buckaroos"],
];

const CHOW = [
  ["Breakfast Ride", "$140"],
  ["Steak Ride", "$150"],
];

const WEEKS = [
  ["Family Week", "June – August · 5 or 6 nights", "Adult, youth (7–12) and children's (3–6) rates."],
  ["Cowgirl Roundup", "Spring, summer & fall · women only", "Bring your mom, your aunt, your sister, your daughter, your best friend... but NO guys!"],
  ["Great Grownup Getaway", "August & September · adults only", "A kid-free week with lots of horseback riding, trapshooting, archery and more."],
  ["Cattle Work Week", "Late June – July 4 · 6 nights", "High-season week. 2026: $3,600 adults, $2,500 youth, $1,800 children."],
  ["Native American Living History", "July · 6 nights", "High-season week. 2026: $3,900 adults, $2,800 youth, $1,800 children."],
  ["Larimer County Rodeo Week", "Early August · 6 nights", "High-season week. 2026: $3,625 adults, $2,525 youth, $1,825 children."],
];

const LODGING = [
  ["Side by Side Cabin", "1 side of a cabin · 1 bath · porch", 2, "$148 / $171", "$114 / $137"],
  ["Fireside Cabin · Sir Sylvan", "1-bedroom cabin · private deck", 2, "$183 / $206", "$148 / $171"],
  ["Tommy House · Oh Rainbo · Baronet Bar", "2-bedroom guest house · kitchen", 4, "$309 / $344", "$252 / $286"],
  ["Homestead", "3-bedroom guest house · kitchen · deck", 6, "$424 / $459", "$344 / $378"],
  ["Isabella Bird · J-House (upper or lower)", "3-bedroom guest house · fireplace", 6, "$424 / $459", "$344 / $378"],
  ["Mama J's", "4-bedroom guest house · screen porch · wood stove", 10, "$516 / $562", "$424 / $459"],
];

const AWARDS = [
  { img: badgeBotw, title: "Best of the West 2026", by: "Gene Kilgore Ranch Vacations" },
  { img: badgeRanchweb, title: "2026 Member", by: "RanchWeb · #1 Worldwide Ranch Vacations" },
  { img: badgeTripadvisor, title: "Travelers' Choice 2024", by: "Tripadvisor" },
  { img: badgeCdgra, title: "Certified Member Ranch", by: "Colorado Dude & Guest Ranch Association" },
  { img: badgeDra, title: "Member Ranch", by: "The Dude Ranchers' Association" },
];

// Verbatim from sylvandale.com (homepage, /reviews and /business-retreats), as published there.
const REVIEWS = [
  { text: "Forget Disney, this is where all of your dreams can come true! Thanks to all of the wonderful staff, family and friends who made this a trip of a lifetime!", who: "C. Johnson", page: "/reviews" },
  { text: "What a wonderful experience! Breathtaking beauty on the many trail rides with horses that are trained so well. All the staff, and I mean all, were so helpful and kind. This place is truly a gem. The food (3 meals a day) and lodging were outstanding. The various activities offered were all excellent. The open, caring atmosphere made making new friends & relationships just happen.", who: "P.L.G.", page: "/reviews" },
  { text: "If Sylvan Dale isn’t heaven, then it must be in the same zip code.", who: "Dr. Richard Cramm", page: "homepage" },
  { text: "If you’re looking for an amazing experience with the horses - the place to visit is here! I have been going to Sylvan Dale for more than 5 years, staying as a guest for the dude ranch week - the riding is spectacular, accommodations 5 star level - a pampering cabin with all facilities - excellent food served - and plenty of it! It’s a great opportunity to get away - to nature, the horses - my favorite place.", who: "Tamar Amy F.", page: "/reviews" },
];

const RETREAT_QUOTE = { text: "Hands down the best facility we have ever had for a team meeting! We have stayed in hotels across North America, and all of them are a distant second in service to your staff. I would love to duplicate your culture for all of our 3,000 hotels. Truly an amazing place!", who: "Mike Swanigan, Regional Director, InterContinental Hotels Group, The Americas" };
const WEDDING_QUOTE = { text: "Charming, Rustic, and Memorable! This all inclusive venue met every one of our needs! The food was fantastic… Every little touch from Sylvan Dale made our special day so wonderful and memorable!", who: "Marcella Saxton" };

const TEAM = [
  ["Susan Jessup & Dave Armstrong", "Ranch Owner / General Manager"],
  ["Karen Burbank", "Dude Ranch Programs Coordinator & Head Riding Instructor"],
  ["Kate Hite", "Sales & Marketing Manager"],
  ["Aja Moody", "Service Lead"],
  ["Lori Glasgow", "Head Wrangler"],
  ["Michael Guthrie", "Horse Operation Foreman"],
];

const SEASONAL = [
  ["Nov 26–29, 2026", "Thanksgiving Getaway", "Three nights' lodging, the Thanksgiving feast and 8 ranch-style meals, with wagon rides, pioneer games and an old Western hoedown."],
  ["December", "Christmas Candlelight & Carols", "Ring in the holidays with a Sylvan Dale tradition, or book the lodge for your holiday party."],
  ["February", "Valentine's Day", "A cozy cabin, dinner for two and a hearty ranch breakfast. 1- or 2-night packages."],
  ["Spring", "Easter Brunch & Mother's Day", "Holiday buffets and springtime on the ranch."],
  ["2027", "Wildheart Equine Retreat", "A growth-focused, equine-assisted retreat with Roxie Robertson. Now taking reservations."],
];

const FAQ = [
  [Clock, "Check-in & out", "Check-in is 3pm, check-out 10am. Dude ranch weeks usually arrive Sunday."],
  [Dog, "Pets", "Dogs are welcome in some cabins, on leash outside. Free for week-long guests; $50 per dog per day for shorter stays."],
  [Wifi, "Wi-Fi & cell", "Free Wi-Fi across the main grounds (not strong enough to stream). Cell service is patchy; Verizon is best at the Heritage."],
  [CalendarDays, "Deposits & tax", "30% secures a vacation week, 50% a retreat, one night a B&B stay. Sales tax is 3.95%."],
];

// ---------------------------------------------------------------- Motif: the Heart-J ranch brand + split-rail fence
function HeartJ({ className = "", title }) {
  return (
    <svg className={className} viewBox="0 0 100 92" aria-hidden={title ? undefined : true} role={title ? "img" : undefined}>
      {title && <title>{title}</title>}
      <path d="M50 86 C30 70 8 54 8 31 C8 17 19 7 32 7 C41 7 47 12 50 19 C53 12 59 7 68 7 C81 7 92 17 92 31 C92 54 70 70 50 86 Z" fill="none" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <path d="M58 22 V52 C58 62 51 67 44 67 C37 67 32 62 32 55" fill="none" stroke="currentColor" strokeWidth="6.5" strokeLinecap="round" />
    </svg>
  );
}

function FenceRail({ tone = "" }) {
  return (
    <div className={`fence ${tone}`} aria-hidden="true">
      <svg viewBox="0 0 1200 40" preserveAspectRatio="none">
        <path d="M0 14 L1200 10" />
        <path d="M0 28 L1200 26" />
      </svg>
    </div>
  );
}

function Eyebrow({ children }) {
  return <span className="eyebrow"><HeartJ className="eyebrow-brand" />{children}</span>;
}

// ---------------------------------------------------------------- Page
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [season, setSeason] = useState(() => {
    const m = new Date().getMonth();
    return m >= 5 && m <= 8 ? "summer" : "winter";
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 380);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      <div className="topbar">
        <span><strong>80th season on the ranch</strong> · Now booking retreats, vacations &amp; weddings for 2027 &amp; 2028</span>
        <a href={PHONE_HREF}><Phone size={13} /> {PHONE}</a>
      </div>

      <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
        <a className="header-logo" href="#top" aria-label={`${COMPANY} home`}>
          <img src={logo} alt={`${COMPANY} logo`} width="500" height="315" />
        </a>
        <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main">
          {NAV.map(([label, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{label}</a>)}
          <a className="nav-phone" href={PHONE_HREF} onClick={() => setMenuOpen(false)}><Phone size={16} /> {PHONE}</a>
        </nav>
        <div className="header-actions">
          <a className="btn btn-brand btn-sm" href="#plan">Plan a stay</a>
          <button type="button" className="menu-toggle" onClick={() => setMenuOpen((v) => !v)} aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen}>
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      <main id="top">
        {/* HERO: the ranch entrance gate with the brand sign hanging from the crossbeam */}
        <section className="gate" aria-labelledby="hero-title">
          <img className="gate-photo" src={P("overlook")} alt="A Sylvan Dale rider looking out over the valley and the Rocky Mountain foothills" />
          <div className="gate-shade" />
          <div className="gate-beam" aria-hidden="true"><span className="gate-post left" /><span className="gate-post right" /></div>
          <div className="gate-sign">
            <span className="chain left" aria-hidden="true" /><span className="chain right" aria-hidden="true" />
            <div className="sign-plate">
              <img src={logo} alt={COMPANY} width="500" height="315" />
              <span>Est. 1946 · Loveland, Colorado</span>
            </div>
          </div>
          <div className="gate-copy">
            <p className="gate-kicker">Family-run since 1946 · 3,200 acres on the Big Thompson River</p>
            <h1 id="hero-title">A world <em>beyond</em> <span className="br">the ridge.</span></h1>
            <p className="gate-lede">A working horse and cattle ranch in the foothills seven miles west of Loveland: dude ranch weeks, cabins and B&amp;B stays, retreats and weddings. A lot like the Old West, but a whole lot more comfortable.</p>
            <div className="gate-ctas">
              <a className="btn btn-brand" href="#plan">Plan your stay <ArrowRight size={18} /></a>
              <a className="btn btn-ghost" href={RIDE_BOOKING} target="_blank" rel="noopener noreferrer">Book a trail ride <ArrowUpRight size={18} /></a>
            </div>
          </div>
        </section>

        {/* TRAILHEAD BOARD: phone, booking, hours within the first scroll */}
        <section className="trailhead" aria-label="Contact and booking">
          <a className="board" href={PHONE_HREF}>
            <Phone size={22} />
            <span><small>Call the front desk</small><strong>{PHONE}</strong></span>
          </a>
          <a className="board" href={`mailto:${EMAIL}`}>
            <Mail size={22} />
            <span><small>Email reservations</small><strong>{EMAIL}</strong></span>
          </a>
          <a className="board" href={RIDE_BOOKING} target="_blank" rel="noopener noreferrer">
            <CalendarDays size={22} />
            <span><small>Trail rides, year-round</small><strong>Book online</strong></span>
          </a>
          <div className="board">
            <Clock size={22} />
            <span><small>Check-in 3pm · Check-out 10am</small><strong>Office in the Heritage</strong></span>
          </div>
        </section>

        {/* WAYS TO STAY */}
        <section className="section stays" id="stays">
          <div className="section-head">
            <Eyebrow>Ranch stays</Eyebrow>
            <h2>Four ways through <em>the gate.</em></h2>
            <p>Every reservation is made with a real person at the ranch, so your stay gets fitted to you. Pick a starting point and we'll take it from there.</p>
          </div>
          <div className="stay-grid">
            {STAYS.map((s) => (
              <article className="stay-card" key={s.name}>
                <div className="stay-img"><img src={s.img} alt="" loading="lazy" /><span className="stay-brand">{s.brand}</span></div>
                <div className="stay-body">
                  <h3>{s.name}</h3>
                  <p>{s.text}</p>
                  <span className="stay-meta">{s.meta}</span>
                  <a className="text-link" href={s.href}>{s.cta} <ArrowRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <FenceRail />

        {/* RIDING */}
        <section className="section riding" id="riding">
          <div className="riding-grid">
            <div className="riding-copy">
              <Eyebrow>Riding adventures</Eyebrow>
              <h2>3,200 acres of <em>don't fence me in.</em></h2>
              <p>Gentle meadow rides to climbing rides with ridge-top views, every one guided by a Sylvan Dale wrangler and geared to the least experienced rider. Our horses are raised right here on the ranch.</p>
              <ol className="trail-line" aria-label="Trails on the ranch">
                {TRAILS.map((t) => <li key={t}>{t}</li>)}
              </ol>
              <div className="season-toggle" role="tablist" aria-label="Riding season">
                <button type="button" role="tab" aria-selected={season === "summer"} className={season === "summer" ? "is-on" : ""} onClick={() => setSeason("summer")}>Summer (Jun–Sep)</button>
                <button type="button" role="tab" aria-selected={season === "winter"} className={season === "winter" ? "is-on" : ""} onClick={() => setSeason("winter")}>Winter (Oct–Mar)</button>
              </div>
              <p className="season-note">
                {season === "summer"
                  ? "During the summer season, day-ride reservations are limited to weekends."
                  : "Rides run year-round, weather permitting. In the winter months, 1-hour and 1½-hour rides only."}
              </p>
            </div>
            <div className="tack-board">
              <div className="tack-head"><span>Scenic trail rides</span><span>Rider must be 7+</span></div>
              <ul className="price-list">
                {RIDES.map(([len, price, note]) => (
                  <li key={len}><span className="pl-name">{len}<small>{note}</small></span><span className="pl-dots" /><strong>{price}</strong></li>
                ))}
              </ul>
              <div className="tack-head"><span>"Chow Down" rides</span><span>Groups of 6+ · May–Sep</span></div>
              <ul className="price-list">
                {CHOW.map(([name, price]) => (
                  <li key={name}><span className="pl-name">{name}<small>per person, by advance reservation</small></span><span className="pl-dots" /><strong>{price}</strong></li>
                ))}
              </ul>
              <p className="tack-fine">15% gratuity suggested. Check in at the Horsebarn (the first building on the ranch, by the big arena) 15 minutes early. Weight limit 220 lbs in peak season, 200 lbs in winter. Long pants, boots and a hat.</p>
              <div className="tack-ctas">
                <a className="btn btn-brand" href={RIDE_BOOKING} target="_blank" rel="noopener noreferrer">Book a ride <ArrowUpRight size={18} /></a>
                <a className="btn btn-line-light" href={PHONE_HREF}><Phone size={16} /> {PHONE}</a>
              </div>
            </div>
          </div>
          <div className="photo-strip" aria-hidden="true">
            <img src={P("trail")} alt="" loading="lazy" />
            <img src={P("cattle-drive")} alt="" loading="lazy" />
            <img src={P("winter-ride")} alt="" loading="lazy" />
            <img src={P("horse-fence")} alt="" loading="lazy" />
          </div>
        </section>

        {/* DUDE RANCH WEEKS */}
        <section className="section weeks" id="weeks">
          <div className="weeks-grid">
            <div className="weeks-copy">
              <Eyebrow>Dude ranch vacations</Eyebrow>
              <h2>Find your <em>week.</em></h2>
              <p>Meals, activities, amenities and your choice of available lodging are all in the package price. If you don't need an assigned horse, adult packages have a non-rider rate $400 less.</p>
              <div className="rate-card">
                <div><small>Low season · 5 nights</small><strong>$2,600</strong><span>adults · youth $1,800 · kids $1,300</span></div>
                <div><small>High season · 6 nights</small><strong>$3,600</strong><span>adults · youth $2,500 · kids $1,800</span></div>
              </div>
              <p className="fine">2026 rates. Tax (3.95%) and gratuity additional. Extras: guided fly fishing $300–$500 a half day; massage $60 per ½ hour, $100 per hour.</p>
              <div className="callout">
                <strong>2027 weeks are selling fast.</strong> Dates post soon. To hold a spot now, write to Karen at <a href={`mailto:${KAREN_EMAIL}`}>{KAREN_EMAIL}</a>.
              </div>
            </div>
            <ul className="week-list">
              {WEEKS.map(([name, when, text]) => (
                <li key={name}>
                  <HeartJ className="week-brand" />
                  <div><h3>{name}</h3><span>{when}</span><p>{text}</p></div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* LODGING */}
        <section className="section lodging" id="lodging">
          <div className="lodging-head">
            <div>
              <Eyebrow>Cabins & guest houses</Eyebrow>
              <h2>Cozy cabins, <em>a good night's rest.</em></h2>
            </div>
            <p>Bunk &amp; Breakfast stays include a hearty ranch breakfast. Between April and October, B&amp;B stays open up 2–3 weeks before arrival; November through March has the most availability. Extra guests $29 each.</p>
          </div>
          <div className="lodging-grid">
            <div className="lodging-photos">
              <img src={P("guest-house")} alt="A Sylvan Dale guest house among the cottonwoods" loading="lazy" />
              <img src={P("winter-wagon")} alt="A horse-drawn wagon ride in the snow at Sylvan Dale" loading="lazy" />
            </div>
            <div className="rate-table" role="table" aria-label="Bunk and breakfast nightly rates">
              <div className="rt-row rt-head" role="row">
                <span role="columnheader">Cabin</span>
                <span role="columnheader">Sleeps</span>
                <span role="columnheader">May–Oct<small>Sun–Thu / Fri–Sat</small></span>
                <span role="columnheader">Nov–Apr<small>Sun–Thu / Fri–Sat</small></span>
              </div>
              {LODGING.map(([name, desc, sleeps, summer, winter]) => (
                <div className="rt-row" role="row" key={name}>
                  <span role="cell" className="rt-name"><strong>{name}</strong><small>{desc}</small></span>
                  <span role="cell" className="rt-sleeps" data-label="Sleeps">{sleeps}</span>
                  <span role="cell" data-label="May–Oct">{summer}</span>
                  <span role="cell" data-label="Nov–Apr">{winter}</span>
                </div>
              ))}
              <p className="fine">Nightly B&amp;B rates. Tax 3.95% plus a 15% service charge for the staff. Vacation packages include lodging at no extra cost. The full 6-bedroom J-House sleeps up to 12.</p>
            </div>
          </div>
        </section>

        {/* WEDDINGS & RETREATS */}
        <section className="section gatherings" id="gatherings">
          <article className="gather gather-wedding">
            <img src={P("ceremony")} alt="An outdoor wedding ceremony at Sylvan Dale Ranch" loading="lazy" />
            <div className="gather-copy">
              <Eyebrow>Weddings</Eyebrow>
              <h2>Say "I do" by <em>the river.</em></h2>
              <p>Two scenic outdoor ceremony sites with mountain and river backdrops, an indoor/outdoor lodge for the reception, cocktail hour on the back deck, a campfire under the stars, and charming cabins so your guests can stay the night.</p>
              <ul className="checks"><li>Inclusive venue</li><li>Day-of coordination</li><li>On-site catering</li><li>On-site lodging</li></ul>
              <blockquote><Quote size={20} /><p>{WEDDING_QUOTE.text}</p><cite>{WEDDING_QUOTE.who}, quoted on sylvandale.com</cite></blockquote>
              <a className="btn btn-brand" href={WEDDING_SITE} target="_blank" rel="noopener noreferrer">Visit the wedding site <ArrowUpRight size={18} /></a>
            </div>
          </article>
          <article className="gather gather-retreat">
            <img src={P("heritage")} alt="The Heritage Lodge at Sylvan Dale" loading="lazy" />
            <div className="gather-copy">
              <Eyebrow>Retreats</Eyebrow>
              <h2>Meetings that end <em>at the campfire.</em></h2>
              <p>Corporate meetings, executive offsites and wellness retreats on the banks of the Big Thompson. High-speed internet in the Heritage Lodge, AV on request, game courts and game rooms for breaks, and a meditative moment from the top of Eagle Ridge.</p>
              <p className="fine">A little over an hour from Denver or Boulder, 40 minutes from Greeley or Longmont. Retreats September through May, custom pricing: <a href={PHONE_HREF}>{PHONE}</a> or <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.</p>
              <blockquote><Quote size={20} /><p>{RETREAT_QUOTE.text}</p><cite>{RETREAT_QUOTE.who}, quoted on sylvandale.com</cite></blockquote>
            </div>
          </article>
        </section>

        {/* AWARDS */}
        <section className="section awards" aria-labelledby="awards-title">
          <div className="section-head center">
            <Eyebrow>Brands we wear proudly</Eyebrow>
            <h2 id="awards-title">Recognized across <em>the West.</em></h2>
          </div>
          <ul className="award-shelf">
            {AWARDS.map((a) => (
              <li key={a.title}>
                <div className="award-img"><img src={a.img} alt={`${a.title}, ${a.by}`} loading="lazy" /></div>
                <strong>{a.title}</strong>
                <span>{a.by}</span>
              </li>
            ))}
          </ul>
          <p className="award-note">Certified through the Dude Ranchers' Association Horse Safety Program · Member of the American Quarter Horse Association</p>
        </section>

        {/* REVIEWS */}
        <section className="section reviews" aria-labelledby="reviews-title">
          <div className="section-head">
            <Eyebrow>Guest reviews</Eyebrow>
            <h2 id="reviews-title">Our guests <em>say it best.</em></h2>
            <p>Word for word from the guest reviews published on sylvandale.com. Read more, or leave your own:</p>
            <div className="review-links">
              {REVIEW_LINKS.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label} <ArrowUpRight size={14} /></a>)}
            </div>
          </div>
          <div className="review-grid">
            {REVIEWS.map((r) => (
              <figure className="review" key={r.who}>
                <HeartJ className="review-brand" />
                <blockquote>“{r.text}”</blockquote>
                <figcaption><strong>{r.who}</strong><span>From sylvandale.com {r.page === "homepage" ? "homepage" : "reviews page"}</span></figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* STORY */}
        <section className="section story" id="story">
          <div className="story-grid">
            <div className="story-photo">
              <img src={P("susan-dave")} alt="Susan Jessup and Dave Armstrong, owners of Sylvan Dale Ranch" loading="lazy" />
              <div className="story-stamp"><HeartJ /><span>80<small>seasons</small></span></div>
            </div>
            <div className="story-copy">
              <Eyebrow>Legendary hospitality since 1946</Eyebrow>
              <h2>The ranch is our home <em>and our legacy.</em></h2>
              <p>“Howdy! We’re the Jessup Family and the Ranch is our home and our legacy.” Sylvan Dale has been family owned and operated by the Jessups since 1946, a historic working horse and cattle ranch whose story reaches back a thousand years, to the Native American tribes and European settlers who knew this valley first.</p>
              <ol className="timeline">
                <li><span>Long before</span>Native American tribes, then European settlers, call the Big Thompson valley home.</li>
                <li><span>1946</span>The Jessup family takes the reins of Sylvan Dale.</li>
                <li><span>2026</span>Our 80th season, still family-run, with horses raised on the ranch.</li>
              </ol>
              <ul className="team">
                {TEAM.map(([name, role]) => <li key={name}><strong>{name}</strong><span>{role}</span></li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* SEASONAL */}
        <section className="section seasonal" aria-labelledby="seasonal-title">
          <div className="section-head">
            <Eyebrow>Traditions & events</Eyebrow>
            <h2 id="seasonal-title">A new <em>holiday tradition.</em></h2>
          </div>
          <div className="seasonal-grid">
            <img src={P("breakfast")} alt="A ranch breakfast with pancakes and berries" loading="lazy" />
            <ul className="event-list">
              {SEASONAL.map(([when, name, text]) => (
                <li key={name}><span className="ev-when">{when}</span><div><h3>{name}</h3><p>{text}</p></div></li>
              ))}
            </ul>
          </div>
        </section>

        {/* VISIT */}
        <section className="section visit" id="visit">
          <div className="visit-grid">
            <div className="visit-copy">
              <Eyebrow>Getting here</Eyebrow>
              <h2>Look for the <em>covered wagons.</em></h2>
              <p className="warn"><MapPin size={18} /> GPS and map apps can lead you astray with our mailing address.</p>
              <p>Sylvan Dale is off US 34, about an hour from Denver, 10 minutes from Loveland and 30 minutes south of Fort Collins. Coming from Loveland, watch for the covered wagons on the north side of the road: turn in, pass the Horsebarn and arena, cross the Big Thompson River, turn right at the old silo and follow the signs to the office in the Heritage.</p>
              <p>Missed it? Turn right just before the Dam Store on County Road 22H, then left at the Horsebarn onto County Road 31D and over the bridge. <strong>Trail riders check in at the Horsebarn, not the office.</strong></p>
              <p className="shuttle"><Plane size={18} /><span>Flying in? Our preferred partner <a href={SHUTTLE} target="_blank" rel="noopener noreferrer">Genesis Executive</a> runs door-to-door shuttles from Denver International Airport.</span></p>
              <div className="faq">
                {FAQ.map(([Icon, q, a]) => (
                  <div key={q}><Icon size={18} /><div><strong>{q}</strong><p>{a}</p></div></div>
                ))}
              </div>
            </div>
            <div className="map-wrap">
              <iframe title="Map to Sylvan Dale Guest Ranch" src={MAP_EMBED} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
              <a className="map-link" href={MAP_LINK} target="_blank" rel="noopener noreferrer">Open in Google Maps <ArrowUpRight size={14} /></a>
            </div>
          </div>
        </section>

        {/* PLAN */}
        <PlanForm />
      </main>

      <footer className="site-footer">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={logo} alt={COMPANY} width="500" height="315" loading="lazy" />
            <p>Family owned and operated since 1946, in the foothills west of Loveland, Colorado. An easy drive to Estes Park and Rocky Mountain National Park.</p>
          </div>
          <div>
            <h3>Get in touch</h3>
            <a href={PHONE_HREF}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <a href={MAP_LINK} target="_blank" rel="noopener noreferrer">{ADDRESS_1}<br />{ADDRESS_2}</a>
          </div>
          <div>
            <h3>Explore</h3>
            {NAV.map(([label, href]) => <a key={href} href={href}>{label}</a>)}
            <a href={RIDE_BOOKING} target="_blank" rel="noopener noreferrer">Book a trail ride</a>
          </div>
          <div>
            <h3>Follow along</h3>
            {SOCIAL.map(([label, href]) => <a key={label} href={href} target="_blank" rel="noopener noreferrer">{label}</a>)}
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} {COMPANY} · Concept redesign by Blueprint WebStudio · Independent concept, not for official use · <a href={ORIGINAL} target="_blank" rel="noopener noreferrer">Current site</a></span>
          <StudioCredit />
        </div>
      </footer>

      <ConceptWidget company={COMPANY} abbr={ABBR} endDate={END_DATE} />
    </>
  );
}

// ---------------------------------------------------------------- Plan-your-stay form (opens an email to the front desk)
function PlanForm() {
  const [f, setF] = useState({ type: "Dude Ranch Vacation", dates: "", guests: "", name: "", phone: "", note: "" });
  const up = (k, v) => setF((p) => ({ ...p, [k]: v }));
  function submit(e) {
    e.preventDefault();
    const body = [
      `Stay type: ${f.type}`,
      `Dates: ${f.dates}`,
      `Guests: ${f.guests}`,
      `Name: ${f.name}`,
      `Phone: ${f.phone}`,
      "",
      f.note,
    ].join("\n");
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(`${f.type} inquiry`)}&body=${encodeURIComponent(body)}`;
  }
  return (
    <section className="section plan" id="plan" aria-labelledby="plan-title">
      <div className="plan-grid">
        <div className="plan-copy">
          <HeartJ className="plan-brand" />
          <h2 id="plan-title">Let's plan <em>your stay.</em></h2>
          <p>All reservations are made directly with someone at the ranch, so you get a personal quote and a stay built around you.</p>
          <a className="plan-line" href={PHONE_HREF}><Phone size={20} /> {PHONE}</a>
          <a className="plan-line" href={`mailto:${EMAIL}`}><Mail size={20} /> {EMAIL}</a>
          <p className="plan-addr"><MapPin size={18} /> {ADDRESS_1}, {ADDRESS_2}</p>
        </div>
        <form className="plan-form" onSubmit={submit}>
          <label>What are you planning?
            <select value={f.type} onChange={(e) => up("type", e.target.value)}>
              <option>Dude Ranch Vacation</option>
              <option>Bunk &amp; Breakfast</option>
              <option>Business or Wellness Retreat</option>
              <option>Wedding</option>
              <option>Holiday Party or Event</option>
            </select>
          </label>
          <div className="two">
            <label>Dates<input value={f.dates} onChange={(e) => up("dates", e.target.value)} placeholder="e.g. June 2027" /></label>
            <label>Guests<input value={f.guests} onChange={(e) => up("guests", e.target.value)} inputMode="numeric" placeholder="How many?" /></label>
          </div>
          <div className="two">
            <label>Name<input value={f.name} onChange={(e) => up("name", e.target.value)} required autoComplete="name" /></label>
            <label>Phone<input value={f.phone} onChange={(e) => up("phone", e.target.value)} type="tel" autoComplete="tel" /></label>
          </div>
          <label>Anything we should know?<textarea rows={3} value={f.note} onChange={(e) => up("note", e.target.value)} placeholder="Riding experience, special occasions, group details..." /></label>
          <button className="btn btn-brand" type="submit">Request my quote <ArrowRight size={18} /></button>
          <p className="fine">Opens an email to {EMAIL} with your details filled in.</p>
        </form>
      </div>
    </section>
  );
}
