import { Hammer, PenTool, Flame, Stamp, Award, Clock, MapPin, Shield, Star, Users } from 'lucide-react';
import { NavItem, Feature, NewsItem, ProductHighlight, PageContent, CollectionInfo } from './types';

export const NAV_ITEMS: NavItem[] = [
  {
    label: 'Shop',
    id: 'shop',
    type: 'category',
    children: [
      { label: 'All Products', id: 'shop', type: 'category' },
      { label: 'Avro Arrow Collection', id: 'arrow-main', type: 'page' },
      { label: 'The 100 Collection', id: '100-collection', type: 'category' },
      { label: 'Flight Badges', id: 'badges', type: 'category' },
      { label: 'Watches', id: 'watches', type: 'category' },
    ]
  },
  {
    label: 'Avro Arrow',
    id: 'arrow-main',
    type: 'page',
    children: [
      { label: 'Golden Arrow', id: 'golden-arrow', type: 'page' },
      { label: 'Arrow Coin', id: 'silver-arrow', type: 'page' },
      { label: 'Arrow Metal Coins', id: 'arrow-program', type: 'page' },
      { label: 'Arrow Test Pilots', id: 'test-pilot', type: 'page' },
    ]
  },
  {
    label: 'The 100 Collection',
    id: '100-collection',
    type: 'category',
    children: [
      { label: 'Golden Maple', id: 'golden-maple', type: 'product' },
      { label: '5oz Command Maple', id: 'command-maple', type: 'product' },
      { label: 'RCAF Silver Maple', id: 'rcaf-silver-maple', type: 'product' },
      { label: 'Silver Dart', id: 'silver-dart-badge', type: 'product' },
      { label: 'Spitfire', id: 'supermarine-spitfire', type: 'product' },
      { label: 'Lancaster', id: 'lancaster-bomber', type: 'product' },
      { label: 'CF-188 Hornet', id: 'cf-188-hornet', type: 'product' },
    ]
  },
  {
    label: 'Services',
    id: 'services',
    type: 'page',
    children: [
      { label: 'Leadership', id: 'leadership', type: 'page' },
      { label: 'Consulting', id: 'consulting', type: 'page' },
      { label: 'Sculpting', id: 'sculpting', type: 'page' },
      { label: 'Striking', id: 'striking', type: 'page' },
    ]
  },
  { label: 'Bullion', id: 'bullion', type: 'page' },
  {
    label: 'About',
    id: 'story',
    type: 'page',
    children: [
      { label: 'Our Story', id: 'story', type: 'page' },
      { label: 'Press & Media', id: 'press', type: 'page' },
      { label: 'Music', id: 'music', type: 'page' },
    ]
  },
  { label: 'Contact', id: 'contact', type: 'page' },
];

export const PROCESS_STEPS: Feature[] = [
  {
    title: 'Original Layout',
    description: 'All artwork begins in 2D, tailored to the unique story of each coin. We help ensure your designs are fully cleared for use.',
    icon: PenTool
  },
  {
    title: 'Master Sculpting',
    description: 'Featuring work by William Woodruff, former Senior Engraver at the Royal Canadian Mint, ensuring master-level relief.',
    icon: Hammer
  },
  {
    title: 'Die Fabrication',
    description: 'Using specialized steel, we process, heat-treat, and polish dies to a mirror finish in-house.',
    icon: Stamp
  },
  {
    title: 'Striking',
    description: 'Coins are struck multiple times under high pressure to achieve a mirror-like proof finish.',
    icon: Flame
  }
];

export const NEWS_UPDATES: NewsItem[] = [
  {
    id: "news-prototype-2",
    title: "5 Oz Silver Command Maple: Prototype 2",
    date: "Jul 23 2025",
    excerpt: "As a gesture of deep appreciation, we recently had the honour of presenting the second 5oz Silver Command Maple to Frank Rathmann.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/c9c0594d-dd24-486b-bd47-644c3ff082c0.jpg"
  },
  {
    id: "news-creative",
    title: "Creative Exploration",
    date: "Nov 02 2024",
    excerpt: "Is it an Eagle or Albatross??? WHAT DOES THE HISTORICAL RECORD SHOW? Then, in 1918, the Royal Flying Corps (RFC) and the RNAS were combined...",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg" // Placeholder based on context
  },
  {
    id: "news-record",
    title: "Did We Set a New Canadian Record?",
    date: "Dec 08 2024",
    excerpt: "At 3.52mm, the RCAF Silver Maple is now the highest relief Canadian coin ever struck. It took over 20 strikes per coin.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Beaver.jpg"
  },
  {
    id: "news-album",
    title: "Per Ardua Ad Astra Album",
    date: "Jul 31 2025",
    excerpt: "In Loving Memory of my Musician Mom: Nadine “Naj” Green.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg"
  },
  {
    id: "news-prototype-1",
    title: "Prototype Number #01: RCAF Silver Maple",
    date: "Mar 28 2024",
    excerpt: "Presented to the RCAF Commanding General Eric Kenny. It was a gift of honour.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Beaver.jpg"
  },
  {
    id: "news-f35",
    title: "The F-35 Coin, did we set another record?",
    date: "Apr 17 2025",
    excerpt: "From the start of sculpting to striking the first coin, we clocked an impressive 9 hours and 45 minutes.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2020/12/495025436_10171114549275273_7267388054692897914_n.jpg"
  },
  {
    id: "news-beaver",
    title: "They Will Never Kill this Beaver",
    date: "Jun 30 2025",
    excerpt: "The recent discovery that all my websites were wiped out fits a pattern—an ongoing effort to undermine this work.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Beaver.jpg"
  },
  {
    id: "news-barn",
    title: "We Moved into the Beaver Barn!",
    date: "Nov 02 2025",
    excerpt: "We said goodbye to a space which saw us produce our first flawless coin. Moving an entire minting operation is no small feat.",
    image: "https://beaverworksmint.ca/wp-content/uploads/2025/11/move001.jpg"
  }
];

export const STATS = [
  { label: "Hours Invested", value: "18,000+", icon: Clock },
  { label: "Production", value: "100%", sub: "Canadian Made", icon: MapPin },
  { label: "Quality", value: "Premium", sub: "Numismatic Standard", icon: Award },
];

export const COLLECTION_INFO: Record<string, CollectionInfo> = {
  '100-collection': {
    title: "The 100 Collection",
    subtitle: "A promise kept in silver and gold",
    heroHeadline: "WE MADE A PROMISE TO FINISH THIS COLLECTION OF 100 DIFFERENT COINS.",
    heroSubheadline: "WE BUILT A MINT FROM SCRATCH TO KEEP FAITH.",
    heroImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/black.jpg",
    stats: [
      { value: "6", label: "Years" },
      { value: "18,000+", label: "Hours" }
    ],
    contentTitle: "We Did It! We Finished!",
    content: `We set out to complete a promise to the RCAF, the Canadian Forces and Canadians.
We gave our word of honour.
We built a mint from scratch because we didn’t have a choice.
We finally finished…..we finally finished.
We kept our word of honour.
Welcome to Beaverworks.

Now that we have finally completed the monumental task of building our own minting operation from the ground up, we are proud to resume work on *The 100 Collection*—a series of 100 uniquely designed coins commemorating the centennial of the Royal Canadian Air Force. Each coin in the collection honours an aircraft, pilot, battle, or historic moment from the past century of Canadian air power.

Our deepest regret is not having completed this collection in time for the RCAF’s official 100th anniversary. We pushed ourselves beyond exhaustion to meet that goal, but even the most relentless beaver can only do so much. Still, that delay wasn’t the end of the story—it became the catalyst for something greater.

Rather than rely on unreliable third-party contractors, with all the delays and quality concerns that come with them, we made the extraordinary decision to build our own mint. That meant mastering every step of the coin-making process—from design and die engraving to striking and packaging. It took years, sleepless nights, and sheer willpower. But we did it. And we did it to keep our word.`,
    secondaryImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/f3.jpg"
  },
  'arrow-collection': {
    title: "The Avro Arrow",
    subtitle: "Canada Set The Standard",
    heroHeadline: "IF WE ABANDON OUR PAST, WE CONDEMN OUR FUTURE.",
    heroSubheadline: "OCTOBER 4, 1957 — AVRO ARROW ROLLOUT",
    heroImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/GA1.jpg",
    contentTitle: "Build Canadian",
    content: `Canada stands at a crossroads. For too long, our national security and technological sovereignty have depended on the goodwill of foreign powers. The cancellation of the Avro Arrow in 1959 was a wound that never fully healed—a symbol of what happens when a nation abandons its own potential.

The Arrow was more than an aircraft. It was proof that Canada could compete with—and even surpass—the superpowers. It represented the pinnacle of Canadian engineering excellence: an advanced interceptor that could fly higher, faster, and farther than anything else in the world at the time.

When Canadian Artist Joe Green decided to make the Fine Silver Arrow coin, he went all out and in the process, as he was told by the minting sub-contractor he was using, that up until this coin, no coin in history was ever minted up to the specifications this one had.

Over the course of making and remaking our dies — sometimes due to ultra-fine flaws invisible to the untrained eye — we continued enhancing the sculpt of the Arrow. Each revision pushed the detail further, until even the canopy windows, individual actuators, and surface paneling on the aircraft's upper fuselage were crisply defined.

The Golden Arrow was never meant to fly—at least not by those who tried to silence it. But just like the engineers, pilots, and dreamers who built the Arrow, we refused to quit.

They tried to destroy our dream. They utterly, utterly failed.`,
    secondaryImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg"
  },
  'watches': {
    title: "Timepieces",
    subtitle: "Custom Swiss & Japanese Made",
    heroHeadline: "WE APPRECIATE TIME",
    heroSubheadline: "CUSTOM MADE SWISS AND JAPANESE MADE WATCHES",
    heroImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/watch1.jpg",
    contentTitle: "A Gift for ISS Commander Chris Hadfield",
    content: `A number of years ago, we produced a very small run of custom Swiss and Japanese made watches for the RCAF. Every great pilot deserves a great watch, and our leader believed the RCAF deserved its own timepieces.

Here is a custom, one of a kind watch we made as a gift for Commander Chris Hadfield, the first Canadian to command the International Space Station.

We are only interested in producing the high end. Our vision includes crafting our own watches with Swiss-made movements and collaborating with prestigious Zurich-based watchmakers. We had to pause this venture to focus on building the mint and studio, but stay tuned for more updates.`,
    secondaryImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/w9.jpg"
  },
  'badges': {
    title: "Flight Badges",
    subtitle: "RCAF Centennial",
    heroHeadline: "WEAR YOUR PRIDE",
    heroSubheadline: "100 YEARS OF EXCELLENCE",
    heroImage: "https://beaverworksmint.ca/wp-content/uploads/2015/12/ArrowBadge.jpg",
    contentTitle: "Embroidered History",
    content: `This is part of our expanding product line which honours the history and legacy of the Royal Canadian Air Force. Each badge is meticulously embroidered with Velcro backing, ready for flight suits or display.

From the Silver Dart to the Lancaster Bomber and the Avro Arrow, these badges celebrate the machines and the men and women who flew them.`,
    secondaryImage: "https://beaverworksmint.ca/wp-content/uploads/2015/12/backing.jpg"
  }
};

// Rich Content for Static Pages & Blog
export const PAGE_CONTENT: Record<string, PageContent> = {
  // Blog Post 1: Prototype 2
  'news-prototype-2': {
    title: "5 Oz Silver Command Maple: Prototype 2",
    subtitle: "Honouring a Supporter",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/c9c0594d-dd24-486b-bd47-644c3ff082c0.jpg",
    sections: [
      {
        type: 'standard',
        title: "Honouring a Key Supporter",
        content: `As a gesture of deep appreciation, we recently had the honour of presenting the second 5oz Silver Command Maple to Frank Rathmann, owner of Latmann Generators and Equipment. Frank has stood by us for years, quietly supporting our journey as we built Beaverworks Mint from the ground up. His steadfast encouragement and trust made a meaningful difference in helping us realize our vision.

Frank was also the first person to ever receive the prototype of the Silver Maple — a piece that represents both craftsmanship and national pride. With this recent presentation, he now holds a truly rare distinction: he is the only other person in the world, aside from the recipient of the first official piece, to own a 5oz Silver Maple bearing the Command Crest of the Royal Canadian Air Force.

The sister coin to Frank’s was presented to Canadian astronaut Colonel Joshua Kutryk — a proud moment that symbolically ties together service, vision, and legacy. We’re grateful to be able to share this journey with individuals like Frank who understand the meaning behind the metal.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Latman.jpg",
        imageAlign: 'left'
      },
      {
        type: 'standard',
        title: "A Family Legacy",
        content: `The flight badge of the nephew of Frank who is enrolled in the RCAF and undergoing flight training. Good luck! I am sure you will make us all exceptionally proud!
        
If you happen to need world class generators, please visit his website at: https://www.latmann.com/`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/ee1c3e0b-db60-4a1f-88f3-f7aff1212195.jpg",
        imageAlign: 'right'
      }
    ]
  },

  // Blog Post 2: Creative Exploration
  'news-creative': {
    title: "Creative Exploration",
    subtitle: "Historical Record",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg", // Fallback as specific image wasn't in source
    sections: [
      {
        type: 'standard',
        title: "Eagle or Albatross?",
        content: `Is it an Eagle or Albatross??? WHAT DOES THE HISTORICAL RECORD SHOW? 
        
“Then, in 1918, the Royal Flying Corps (RFC) and the RNAS were combined..."`,
        imageAlign: 'left'
      }
    ]
  },

  // Blog Post 3: Canadian Record
  'news-record': {
    title: "Did We Set a New Canadian Record?",
    subtitle: "RCAF Silver Maple",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/c888da9d9eea2708bd41824e6f68717d651f71ff943806c17b6b70cff1c40ea5-1.jpg",
    sections: [
      {
        type: 'standard',
        title: "Born from Grit. Forged with Pride.",
        content: `Most mints follow the rules. We built our own — then broke the record.

When we set out to honour the RCAF with a new silver maple, we asked a simple question: What’s the highest relief coin Canada has ever made?

Then we beat it.

At 3.52mm, the RCAF Silver Maple is now the highest relief Canadian coin ever struck. It took over 20 strikes per coin, rebuilt collars, and custom blanks. We shattered tools. We learned from failure. And we created something powerful.

A small handful of early flawed strikes accidentally shipped. Those collectors? They’re holding a future rarity. Each will receive a corrected coin, plus our gift — a Command Maple on the house.

We’re reworking dies now. The relaunch is coming. Stay tuned.

Beaverworks Mint — Canadian. Independent. Unstoppable.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/highrelief.jpg",
        imageAlign: 'left'
      }
    ]
  },

  // Blog Post 4: Album
  'news-album': {
    title: "Per Ardua Ad Astra Album",
    subtitle: "In Loving Memory",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg",
    sections: [
      {
        type: 'standard',
        title: "Nadine “Naj” Green",
        content: `Per Ardua Ad Astra by Johnson & The Beavers

-In Loving Memory of my Musician Mom: Nadine “Naj” Green.

Music, like minting, requires rhythm, soul, and a touch of the divine. This album is a tribute to the stars she reached for and the melody she left behind.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg",
        imageAlign: 'right'
      }
    ]
  },

  // Blog Post 5: Prototype #01
  'news-prototype-1': {
    title: "Prototype Number #01: RCAF Silver Maple",
    subtitle: "A Gift of Honour",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2020/12/GeneralKenny.jpg",
    sections: [
      {
        type: 'standard',
        title: "A Gift of Honour",
        content: `It was an honour to be asked to provide a special gift on behalf of the RCAF to present to the Commander of the Royal Canadian Air Force, Lieutenant-General Eric Kenny. Despite the immense pressure of getting our complex new minting operation fully operational, we committed ourselves completely—working day and night, including a 30-hour shift in the final stretch—to ensure everything was ready for the Mess Dinner in Calgary in late March 2024.

In addition to the Commander, we had the privilege of presenting coins to the Honourary Colonel of 410 Squadron and the retired 4 Wing Commander, callsign “MuskOx.” Each individual received a personalized prototype from our first-ever series of coins struck under the Beaverworks Mint banner—proudly produced in-house using our newly developed minting system.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2024/03/Musk33.jpg",
        imageAlign: 'left'
      },
      {
        type: 'standard',
        title: "A Hard Earned Coin",
        content: `This particular project was not just a coin—it was a deeply personal gift, created in gratitude for the service and dedication of the Royal Canadian Air Force. Despite multiple offers, we steadfastly refused any payment. This opportunity came at a pivotal time in our journey, as we were still learning and mastering the minting process from the ground up.

In total, we produced 13 prototype Command Maples—each one a step forward in our development. The first twelve were struck in the early stages, as seen in the slider gallery above. These prototypes featured an early concept of the golden eagle crest, and once complete, the die was ground down and retired permanently.

We worked tirelessly on every aspect—engraving, striking, packaging, and embroidery. The packaging itself included custom embroidered RCAF crests on tartan fabric, made in-house using our 15-needle digital embroidery machine. Even the broken steel dies, which we included as part of the presentation, served as a symbolic reminder: never outsource critical materials. Those dies, sourced from inferior overseas steel, failed under pressure—a lesson we’ll never forget.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2024/03/4f14f92b5fa3b2592a96adaf0557d088f5e5e24686120351c33e3a69a59f1dbe.jpg",
        imageAlign: 'right'
      },
      {
        type: 'standard',
        title: "Tragedy and Triumph",
        content: `Tragically, on the same night we struck our very first complete coin, we learned that our greatest supporter, Ms. Vicki Torrie, had passed away. She never got to see what she helped make possible. In her honour, we presented a coin at her funeral in April 2024 at the Edmonton Legion to her husband. Her strength, grace, and unwavering encouragement are etched into everything we do.

Every detail in this project carried meaning: from the layered, embossed-style packaging design to the embroidered eagles in black (symbolizing senior command leadership), orange (a nod to the Avro Arrow’s experimental legacy), and pink (a tribute to Vicki’s feminine strength and powerful presence). This was a tribute from the heart—to honour those who serve, and those who made our mission possible.

This particular gift was an all-in effort—a true investment of time, energy, love, and deep respect for Canada, the Royal Canadian Air Force, and the Canadian Armed Forces as a whole. When the royal red velvet-wrapped presentation boxes were finally handed over, we could rest knowing we had pushed every boundary within our means—creatively, technically, and symbolically.

We undertook this project on behalf of all Canadians, and our community of collectors, with the goal of doing it right—at every step, in every medium, and to the highest standard we could achieve. It was a mission of honour, and we carried it out with everything we had.

We would like to extend our heartfelt thanks to Colonel Jim Donihee for trusting us with this remarkable opportunity. We look forward to creating more meaningful gifts in the future for the RCAF and continuing to celebrate the legacy of service and excellence that defines Canada’s Air Force.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2024/03/5fd026cd-745d-4176-8769-9b743e1b720e-e1752044670602.jpg",
        imageAlign: 'left'
      }
    ]
  },

  // Blog Post 6: F-35
  'news-f35': {
    title: "The F-35 Coin, did we set another record?",
    subtitle: "Speed Record",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2020/12/495025436_10171114549275273_7267388054692897914_n.jpg",
    sections: [
      {
        type: 'standard',
        title: "We Tested Our System",
        content: `RCAF F-35 COIN PROTOTYPE
1 TROY OZ .9999 FINE SILVER

We Tested Our System. Its Pretty Fast!

After a recent call with the Executive Director of the RCAF Association, who suggested we consider minting a coin dedicated to the incoming F-35, we decided to put our minting system to the test. From the very start of sculpting to striking the first coin, we clocked an impressive 9 hours and 45 minutes.

While an alignment issue caused a fracture around the die’s edge rim during the press, the coin looks incredible for a first run. We’re excited about the possibility of adding this design to our catalog as we continue refining the process.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2020/12/495376331_10171114548280273_6341241384594726043_n.jpg",
        imageAlign: 'right'
      }
    ]
  },

  // Blog Post 7: Kill this Beaver
  'news-beaver': {
    title: "They Will Never Kill this Beaver",
    subtitle: "Unbroken Spirit",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Beaver.jpg",
    sections: [
      {
        type: 'standard',
        title: "Beaten and Bloody, but still Standing",
        content: `The recent discovery that all my websites were wiped out fits a pattern—an ongoing effort to undermine this work and crush the spirit behind it. No matter what I do, there seem to be forces determined to erase Beaverworks.

When I started this journey, I expected encouragement from industry insiders. Instead, I faced ridicule, dismissal, and outright attempts to destroy the reputation I’ve painstakingly built from nothing.

Beaverworks Mint was born out of necessity. The industry couldn’t be trusted to deliver quality or timeliness. In this tiny niche, uncovering even basic knowledge is nearly impossible—and competition is not welcomed.

One glaring example: we were outright lied to about the application of platinum plating on our gold coins. Without specialized testing tools, we wouldn’t have caught this deception. Had we shipped those coins claiming platinum plating that didn’t exist, it would have destroyed our reputation.

The attacks extended beyond just misinformation. Entire websites—mine and a client’s—were wiped out shortly after we released the coin commemorating the Truckers Freedom Convoy.

We’ve faced hardship, setbacks, and personal sacrifice on this path. But we’re still here, bleeding but unbroken, driven by a mission bigger than ourselves.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/B3.jpg",
        imageAlign: 'right'
      },
      {
        type: 'standard',
        title: "Checkmate",
        content: `There is nothing I look forward to more than completing this new website—fully updated, e-commerce enabled, with all systems functioning flawlessly. I am committed to fulfilling every back order and keeping my word of honour to everyone who has trusted me.

What I’ve come to truly appreciate in this field is how unforgiving it is. With tolerances measured in less than 100 microns, this industry demands patience, perseverance, and unwavering dedication. As we continue to strengthen our platform and finalize this multi-year journey to build our capacity, I hope everyone recognizes the depth of that commitment.

To those who tried to bring us down, I extend my hand in gratitude for the challenge—and with full confidence, I say:

Checkmate.

We have without a doubt, the finest backers, supporters, friends and family anywhere in the world today, whom have supported this this dream, and they are one of the core reasons, this beaver never gives up.`,
        imageAlign: 'left'
      }
    ]
  },

  // Blog Post 8: Beaver Barn
  'news-barn': {
    title: "We Moved into the Beaver Barn!",
    subtitle: "New Headquarters",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/11/move001.jpg",
    sections: [
      {
        type: 'standard',
        title: "Onward & Upwards",
        content: `We said goodbye to a space which saw us produce our first flawless coin, set a record and prove to Canadians, that it can, in fact, be done. The property was sold, we had to relocate, Green’s cousin Darren let us move into his barn and temporarily operate out of there until we get moving again. Moving in general is always very stressful, difficult and just hard. Having to move an entire minting operation only adds an exponential amplifier into the mix. Its taken a month or so to get everything all moved, sorted, positioned and installed and finally connected.

Our primary backer was never able to see the space she helped to create and we wish this building which was our home, all the love possible and thank it for hosting us during this critical phase.

-Every 2×4, sheet of OSB, drywall, wire, screw and paint stroke, all remembered and now, consigned to history. Everything was dismantled. We wish the new owners all the best in the future with their new space! May it serve you with creativity and joy as it did us.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/11/move002.jpg",
        imageAlign: 'left'
      },
      {
        type: 'standard',
        title: "The Beaver Barn",
        content: `The next chapter, albeit, temporary. As we methodically spin up production, we look forward to seeing what emerges from the barn and what sort of inspired works come into reality.

3 phase industrial power!

Molly McButtercup, our lovely, playful, gentle spirit of a Golden Retriever Molly can’t help but be excited to share her joy that we finally have been able to get the minting tools which require industrial 3 phase power all connected, tested and all the equipment and precautions taken to ensure nothing was damaged was worth it. This phase has been exhausting as its the 4th move in the last 10 years and once we get out of debt and complete our word of honour, then we plan on moving again into what will be our forever home.

We have without a doubt, the finest backers, supporters, friends and family anywhere in the world today, whom have supported this this dream, and they are one of the core reasons, this beaver never gives up.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/11/M015.jpg",
        imageAlign: 'right'
      }
    ]
  },

  // Service Pages
  leadership: {
    title: "Beaverworks Leader",
    subtitle: "Vision & Drive",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/370256928_10167807720900273_5689102158979314654_n.jpg",
    sections: [
      {
        type: 'standard',
        title: "Joseph Green",
        content: `Canadian artist Joseph Green, leader of Beaverworks Mint—the only mint in Western Canada—has devoted years and thousands of hours to mastering the art of minting. He first gained recognition within the Canadian Forces after publishing a website and a 1000+ page military anthology book of condolences honoring the first four Canadian soldiers lost in Afghanistan.

In gratitude for his work, the Third Battalion Princess Patricia’s Canadian Light Infantry presented Green with a signed regimental flag that had flown over their base in Afghanistan. Green facilitated the flag’s journey into space aboard Space Shuttle Atlantis on mission STS-115/12A with Canadian astronaut Dr. Steve MacLean.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/03/3ppcli-flag-1200x675-1.jpg",
        imageAlign: 'left'
      }
    ]
  },
  consulting: {
    title: "Concept Design",
    subtitle: "Consulting & Creation",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Concept.jpg",
    sections: [
      {
        type: 'standard',
        title: "Produce Your Own Coin",
        content: `Ever Wanted to Produce Your Own Coin? It’s often more complex than it seems—but Beaverworks is here to guide you every step of the way.

Starting with intellectual property considerations, we help ensure your designs are fully cleared for use on your coin. Once that’s confirmed, the process typically follows these stages: 2D Illustrated Mock-Up, 3D Sculpt, Die Fabrication, Engraving, Cleaning & Electroplating, Striking, and Finishing Touches.

Beyond minting, we also provide packaging solutions—everything from simple acrylic capsules and custom coin slabs to fully bespoke display boxes designed to showcase your coins perfectly.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/468014724_10169541676150273_3746237051668429720_n.jpg",
        imageAlign: 'right'
      }
    ]
  },
  sculpting: {
    title: "Master Level",
    subtitle: "The Art of Relief",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/sculpt.jpg",
    sections: [
      {
        type: 'standard',
        title: "William Woodruff",
        content: `Beaverworks Mint is profoundly honoured to have such masters in digital sculpting like the renowned coin sculptor William Woodruff as our heavy hitter in terms of being a master engraver.

Practicing and mastering his craft since 1975, Mr. Woodruff began his career engraving radio plates and dials at CFS Leitrim. Following that, he joined the Royal Canadian Mint and assisted in preparations for the 1978 Summer Olympics. Promoted to Senior Engraver with the Royal Canadian Mint in 2000, Woodruff was an active participant and leader on various committees leading to the Royal Canadian Mint's ascent to today’s renowned status.

Given how fast he works, his precision and depth of knowledge, it is our honour and distinct privilege to have him on board as our Senior Engraver.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/William-Woodruff.jpg",
        imageAlign: 'left'
      }
    ]
  },
  striking: {
    title: "Striking",
    subtitle: "The Moment of Truth",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Striking.jpg",
    sections: [
      {
        type: 'standard',
        title: "Zero Tolerance",
        content: `This is where it all comes together. Every ounce of thought, time, effort, cost, energy, and meticulous attention to detail merges within an unforgiving, zero-tolerance world. When everything goes right, you feel it—goosebumps, seriously. But when it doesn’t, sometimes it makes you want to throw up.

To make a coin, first you need the desire. Then you need the tools. We use Autodesk Maya for 3D modeling, specifically for laser output. The die must be the right type of steel, heat treated, and polished to a flawless mirror finish before engraving.

Once you have both a perfectly mirrored die and a flawlessly polished blank, you’re ready to proceed. For a proof-quality coin, striking it once isn’t enough — it needs to be struck under high pressure at least twice. The RCAF Silver Maple required about 20 strikes to fully drive the metal into the deep recesses of the dies.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/456790901_10169043772125273_1887859542596921941_n.jpg",
        imageAlign: 'right'
      }
    ]
  },
  story: {
    title: "Dedicated to the Pursuit of...",
    subtitle: "The art of minting",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Col1.jpg",
    sections: [
      {
        type: 'standard',
        title: "From Humble Beginnings",
        subtitle: "The story behind Beaverworks Mint",
        content: `Beaverworks Mint is not simply a mint — it is the result of a single artist’s unwavering commitment to craftsmanship, integrity, and country. Founded and operated by a Canadian artist who dared to take on what few would attempt, Beaverworks was built from the ground up to become Western Canada’s only operating private mint.

This journey did not begin in a garage — it began in a renovated industrial studio above a book bindery, where our founder spent four years building the foundation of what would become Beaverworks Mint. That space was customized with care to suit the demanding needs of precision coin production. But with only two weeks’ notice, everything came crashing down when the landlord faced commercial foreclosure. Forced to vacate suddenly, he moved his life and tools into his sister’s unheated garage, and built a shed by hand to store what wouldn’t fit.

It was during this time, amidst upheaval and uncertainty, that a third order came in for the Golden Arrow coin — a project featuring the crest of the Royal Canadian Air Force, paired with elite packaging our founder had spent months perfecting. For a brief moment, it seemed like hope had returned.

But the momentum was short-lived. Whether it was due to the exceptional quality of his work or the RCAF crest challenging the status quo, calls were likely made. His subcontracted minting partner — the only means of production — withdrew support, and with that, his ability to fulfill orders and sustain a livelihood vanished.

Unable to find another subcontractor who could meet his uncompromising standards, he came to a painful realization: to keep his promise to Canada and the RCAF to complete the collection, he would have to build a mint from scratch.

So, in that unheated garage, over four relentless years, he meticulously researched every aspect of minting. He engineered every solution himself, solving problem after problem. When the world shut down due to COVID, it had no effect on him — he had already been shut out, long before.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Col1.jpg",
        imageAlign: 'right'
      },
      {
        type: 'banner',
        title: "There were low points...",
        quote: "At times, it’s the smallest friends who bring the greatest grace, hope, and inspiration.",
      },
      {
        type: 'standard',
        title: "Started in a Canadian Garage",
        subtitle: "Joe built everything",
        content: `A 400-ton hydraulic press, fabricated from the ground up, obtained the steel plates, ground, sanded, polished then engraved symbols of the RCAF on one plate and engraved symbols dedicated to Vimy Ridge, the battle and our fallen on the other plate.

A laser system adapted from 2D to 3D.

Polishing, striking, blank-making, die engraving — all learned, built, and mastered in isolation.

As the mint progressed, a new opportunity emerged — a chance to upgrade to professional, calibrated systems. The original 400-ton press he had built was no longer required when he acquired and installed a full suite of commercial minting equipment:

• A 300-ton calibrated embossing press
• A 50-ton blanking press
• A rimming machine
• A precision roller mill
• A vibratory tumbler polisher
• A 3-phase industrial kiln

Every system was integrated and calibrated in-house, forming a complete coin production ecosystem from start to finish.

In every aspect of this highly specialized operation — from electroplating to 2D layout design, from 3D sculpting to blanking, striking, and final packaging — Joseph Green does it all. The only exception comes in the rare instance when ultra-high-end sculpting is needed; in those cases, Joseph calls on his go-to master sculptor William Woodruff, a veteran of the Royal Canadian Mint with a career’s worth of experience at the highest level.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Col2.jpg",
        imageAlign: 'left'
      },
      {
        type: 'banner',
        title: "They mocked it. They dismissed it.",
        quote: "Then I gave them a coin — and they held their silence."
      },
      {
        type: 'standard',
        title: "Moved to a larger garage",
        subtitle: "Vicki Torrie was a surrogate mom",
        content: `On the day his first coin — forged and struck for the Commanding General of the Royal Canadian Air Force — emerged from the press, she quietly left this world. She never got to hold hers.

During this struggle, one of his collectors offered a lifeline — a financial loan to get the mint off the ground. It was a critical act of support in a time when support was rare.

Then tragedy struck. His father — a retired fighter pilot, lifelong supporter, and the man who raised him after he lost his mother at age eight — passed away a day after his birthday. He was the moral compass, the one who instilled a rare sense of honour and discipline. His passing didn’t weaken the mission. It made the promise non-negotiable.

"I either keep my promise or I die trying."

Just as he was about to collapse from the burden, a primary financial backer stepped in. Her belief kept the dream alive. But fate dealt one more blow: on the very day he struck his first finished coin, she passed away. She never saw the coin she helped bring to life.

Today, he works alone, day in and day out, with only his dog — Molly McButtercup — by his side. The studio is so advanced, so complex, that training someone from scratch would take years. Even explaining the work is near impossible, adding to the isolation.

Yet out of that isolation comes something remarkable. To hold a finished coin — forged from silver he processed from bullion into polished blanks, struck with dies he engraved and electroplated, pressed in machines he installed, and packaged in materials he designed — is to hold a miracle of perseverance.

The mint is now fully operational. A small backlog remains — one that will be fulfilled as skillsets are further refined and as supplies arrive. This is not the end of the journey, but the beginning of Beaverworks Mint’s legacy.

More than coins, these are testaments to commitment, artistry, and the power of never giving up.

"I’m tired of financially struggling through this technical startup phase. I want to land on the airfield of success with this mint. I’ve given everything. I don’t even have a kitchen, bathroom, or running water here — and that’s okay. I’ve always guided this mission by the axiom: whatever it takes to do this, I’ll do. Now, all I want is to create beautiful works of art — to have them be welcomed, appreciated, and to succeed not just artistically, but also as a high-performance business."

This is Beaverworks Mint. Built from nothing. Forged with purpose. Minted for Canada.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Col3.jpg",
        imageAlign: 'right'
      }
    ]
  },
  press: {
    title: "Press & Media",
    subtitle: "In The News",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/top-1800-1.jpg",
    sections: [
      {
        type: 'pressGallery',
        items: [
          {
            title: "Arrow Coins Minted",
            source: "Canadian Aviator",
            date: "March/April 2016",
            description: "First of 100 coins marking aviation milestones. Edmonton designer Joe Green immortalizes the Avro Arrow.",
            image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/DaveNagy.jpg",
            link: "https://canadianaviator.com/coins-commemorate-arrow/",
            type: "article"
          },
          {
            title: "Space Flag Interview",
            source: "YouTube",
            date: "2016",
            description: "Proud to be Canadian. An interview about the Space Flag project and Canadian heritage.",
            image: "https://www.asc-csa.gc.ca/images/recherche//hi-res/68f46b6c-a357-440c-970a-a17612fdaf6d.jpg",
            link: "https://www.youtube.com/watch?v=efqkWNzy57A",
            type: "video"
          },
          {
            title: "Valuable coins reunited with owner after being left in St. John's taxi",
            source: "CBC Newfoundland",
            date: "June 2016",
            description: "There are no words to convey how much I love the people of Newfoundland and Labrador.",
            image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/CBC2-scaled.jpg",
            link: "https://www.cbc.ca/news/canada/newfoundland-labrador/cabbie-returns-missing-coins-1.3632396",
            type: "article"
          }
        ]
      }
    ]
  },
  bullion: {
    title: "Our Bullion",
    subtitle: "Refined by the Royal Canadian Mint",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Silver4-496x560.png",
    sections: [
      {
        type: 'banner',
        quote: "We exclusively use metals refined by the Royal Canadian Mint"
      },
      {
        type: 'standard',
        title: "Our Gold",
        subtitle: "A Commitment to Purity, Integrity, and National Pride",
        content: `At Beaverworks Mint, we exclusively source our gold from the Royal Canadian Mint — a globally respected institution renowned for producing some of the purest precious metals in the world.

When you hold one of our coins, you're holding gold that was responsibly refined right here in Canada, under some of the strictest ethical and environmental standards anywhere. This gold has passed through the hands of a Crown Corporation with a legacy of excellence and a reputation built on honour — and it continues that legacy in the form of every coin we strike.

By using only gold from the Royal Canadian Mint, we ensure that our art is rooted in integrity, traceability, and Canadian pride.

Because for us, purity is more than a measurement — it's a promise.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/smallbars.png",
        imageAlign: 'right'
      },
      {
        type: 'standard',
        title: "Our Silver",
        subtitle: "Pure, Ethical, and Proudly Canadian",
        content: `At Beaverworks Mint, every piece we produce is a reflection of our core values — integrity, craftsmanship, and national pride. That's why we are proud to say that all of our silver is sourced exclusively from the Royal Canadian Mint.

In a world where origins are often uncertain, we've made a deliberate choice to use silver that is not only among the purest available, but also ethically refined and traceable to Canadian soil. The Royal Canadian Mint stands as a global benchmark for excellence, and their commitment to environmental responsibility and transparency mirrors our own.

When you purchase a coin from us, you're investing in more than silver — you're investing in a piece of Canada. From the miner's hands to the artist's touch, our silver tells a story of purity, accountability, and national identity.

Because true value isn't just in the metal — it's in how it's sourced, why it's made, and who it's made for.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Silver4-496x560.png",
        imageAlign: 'left'
      }
    ]
  },
  'arrow-main': {
    title: "The Avro Arrow",
    subtitle: "Canada Set The Standard",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/thumbnail_20160527_150302.jpg",
    sections: [
      {
        type: 'banner',
        quote: "IF WE ABANDON OUR PAST, WE CONDEMN OUR FUTURE. — OCTOBER 4, 1957 — AVRO ARROW ROLLOUT"
      },
      {
        type: 'standard',
        title: "Build Canadian",
        subtitle: "Reclaim our sovereignty through aerospace innovation",
        content: `Canada stands at a pivotal crossroads in history—one where the security of our skies, sovereignty of our nation, and legacy of technological excellence depend on our resolve to take command of our own aerospace destiny. We can no longer afford to rely solely on foreign nations for the aircraft and spacecraft that defend our people and assert our independence. To protect our vast borders, uphold our values, and inspire the next generation of engineers, aviators, and visionaries, we must lead from within. Building our own aerospace platforms isn't merely about machines—it's about national confidence, capability, and character. It's about standing tall as a country that can dream, design, and deliver world-class technology that answers to no one but ourselves.

The Avro Arrow stands as both a triumph and a tragedy in this narrative—a shining example of Canadian genius that was tragically silenced just as it took flight. In the 1950s, Canadian engineers designed what was arguably the most advanced interceptor of its time: faster, higher-flying, and more sophisticated than anything else in the sky. It proved that Canada *could* lead the world in aerospace innovation. But the cancellation of the Arrow crushed more than a program—it wounded our national confidence and sent a generation of brilliance abroad. We must never repeat that mistake. Instead, let the spirit of the Arrow reignite our ambition. Let it be a rallying cry for a new era of Canadian aerospace independence—where we once again design the future, fly it with pride, and never hand over the keys to our own defence.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/B4.png",
        imageAlign: 'right'
      },
      {
        type: 'standard',
        title: "The Avrocar",
        subtitle: "A flying saucer that proved Canadian ingenuity—and why it's time we finish what we started",
        content: `The Avro Canada VZ-9 Avrocar is a powerful symbol of Canada's untapped potential and daring innovation in aerospace—a flying saucer-shaped experimental aircraft developed in the 1950s that, had it been fully realized, could have revolutionized vertical takeoff and landing (VTOL) technologies. While its testing phase exposed limitations in lift and stability, the very fact that Canadian engineers were entrusted with such a radical and forward-thinking design—under U.S. military contracts no less—speaks volumes about the respect our aerospace sector once commanded. The Avrocar wasn't a failure; it was an idea ahead of its time, and proof that Canadian minds could push the boundaries of aviation unlike any other.

What the Avrocar truly represents is lost opportunity—a Canadian-born concept that planted the seeds of future VTOL and stealth technologies, only to be abandoned before its potential could be fully explored. Its legacy is a reminder that innovation demands courage, commitment, and above all, sovereignty. When we allow others to dictate our direction, we sacrifice our ability to lead. Canada must reclaim its role as a pioneer—not just a partner—in aerospace development. The spirit that gave us the Avrocar still lives here. What we need now is the political will and national vision to ensure such breakthroughs are nurtured and completed on Canadian soil, for Canadian needs.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/bannerB1.png",
        imageAlign: 'left'
      },
      {
        type: 'standard',
        title: "The Arrow Documentary",
        subtitle: "A Nation's Dream, A Star's Voice — Dan Aykroyd Helps Tell the Story Canada Must Never Forget",
        content: `In the 1997 CBC miniseries The Arrow, Canadian actor and patriot Dan Aykroyd lent his voice and presence to one of the most haunting and inspiring tales in Canadian history—the rise and fall of the Avro Arrow. With gripping drama and factual depth, the film brings to life the brilliance, courage, and betrayal surrounding Canada's cutting-edge supersonic interceptor, the CF-105 Arrow.

More than just a television drama, The Arrow is a cultural reckoning—a reminder of how far Canadian innovation once soared, and how political interference and foreign pressure grounded our national ambition. Through Aykroyd's portrayal of Crawford Gordon, we see the dream of a sovereign Canadian aerospace industry dashed—but not extinguished.

The film stands as both memorial and battle cry. It shows us what we were capable of, and what we could still become—if we choose to once again believe in ourselves. The story of the Arrow is not just history; it's a challenge to the next generation of Canadians: to dream boldly, build fearlessly, and never again let others dictate the limits of our skies.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg",
        imageAlign: 'right'
      }
    ]
  },
  'golden-arrow': {
    title: "Golden Arrow",
    subtitle: "Our Highest Achievement",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/GA1.jpg",
    sections: [
      {
        type: 'videoHero',
        title: "Golden Performance",
        subtitle: "OUR HIGHEST ACHIEVEMENT",
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/GoldenBanner-scaled.jpg",
        videoUrl: "https://www.youtube.com/embed/DO309HBUBcI?autoplay=1&mute=1&loop=1&playlist=DO309HBUBcI&controls=0&showinfo=0&rel=0&modestbranding=1"
      },
      {
        type: 'productInfo',
        title: "Specifications",
        price: "$12,500.00",
        specs: [
          { label: 'Composition', value: '99.99% Gold' },
          { label: 'Weight', value: '2.01 Troy Oz' },
          { label: 'Mintage', value: '206' },
          { label: 'Plating', value: 'Select Rhodium' },
          { label: 'Features', value: 'Full Colour, Serialized Edge' }
        ],
        content: "First 7 coins come with a display box containing Arrow Program metal extracted from AVRO."
      },
      {
        type: 'standard',
        title: "The Coin That Started It All",
        subtitle: "A Legacy in Gold",
        content: `Here is the coin which started this journey of ours and was the catalyst for building our studio. As a fledgling coin designer and producer, we learned how to research, design, produce, fulfil and defend a vision of quality. This single coin, with its incredible complexity and nuances we built into it, was the catalyst for building an entire minting operation.

As an artist, trained at the prestigious Emily Carr Institute of Art + Design in Vancouver, our founder believed that this coin should be his magnum opus—a crowning artistic work—reflecting the aspirations of Canada: that if we can dream it, we can build it.

Given the RCAF was flying towards their 100th Anniversary, he created 100 tiny squares around the perimeter to reflect its anniversary. And because the first Arrow to fly was RL-201, he placed 201 tiny round dots around the interior perimeter to reflect this—something which all coins issued by Beaverworks Mint still to this day reflects, connecting all coins to their historical origins.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/GA1.jpg",
        imageAlign: 'right'
      },
      {
        type: 'banner',
        quote: "It's not just a coin, it's a statement of a steadfast belief Canada can and should be building our own—and the Arrow was the apex symbol of airborne dominance."
      },
      {
        type: 'standard',
        title: "Attention to Every Detail",
        subtitle: "Packaging as Art",
        content: `In keeping with his training, he ensured that every possible aspect of what this coin represents would serve to reflect the entirety of what the Arrow represented to Canadians: the pinnacle of achievement.

Even within packaging, every aspect of how someone would approach it, open it, view it, interact with it—all of it was accounted for and thoughtfully and lovingly added to the packaging. When collectors purchase the coin with the optional premium packaging, it is a coin within a box, within a box, within a shipping carton. With each layer, it builds anticipation and excitement for the collector.

Great care was taken for every element of the packaging: hand-polished acrylic capsules and coin frames; a satin-covered, magnetic closure display frame; an acrylic-topped, velvet-lined display box; an engraved, brushed aluminum plaque; a satin-covered, magnetic closure display container; a foam core insert; a satin-covered, magnetic closure exterior shipping container and yes, for the first 7 made, actual Avro Arrow Program metal from the actual Arrow aircraft.

Since there is only one opportunity for a first impression, it has to be done right and in such a manner where people are left truly happy with their new art piece.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/GoldenBanner-scaled.jpg",
        imageAlign: 'left'
      },
      {
        type: 'movieSection',
        title: "The Arrow Movie",
        subtitle: "A magnificent film that changed everything",
        content: "The 1997 CBC miniseries 'The Arrow' brought the story of Canada's greatest aerospace achievement to life. Starring Dan Aykroyd as Crawford Gordon, it showed the world what Canadian innovation could accomplish—and what was lost when the program was cancelled.",
        videoUrl: "https://www.youtube.com/embed/aJwBHtYHIaw"
      },
      {
        type: 'gallery',
        title: "Gallery",
        subtitle: "The Golden Arrow Collection",
        images: [
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/434037256_10168405616160273_7838943867899186036_n.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2024/03/f4302b07-9927-41a8-b06a-66f563f7a639.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/154105421_10164726748560273_8825968599372394819_n.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/67281828_1167816230092559_4495977628083159040_n.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/GA33.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/g17.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/GoldA1.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold6.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold7.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold1.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold2.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold3.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold4.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/Gold5.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/g17-1.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/GoldArrow.jpg"
        ]
      },
      {
        type: 'banner',
        title: "They tried to destroy our dream.",
        quote: "They utterly, utterly failed."
      }
    ]
  },
  'silver-arrow': {
    title: "The Silver Arrow",
    subtitle: "The Coin That Started It All",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA2.jpg",
    sections: [
      {
        type: 'videoHero',
        title: "The Silver Arrow",
        subtitle: "THE COIN THAT STARTED IT ALL",
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/20150817_073833-scaled.jpg"
      },
      {
        type: 'productInfo',
        title: "Specifications",
        price: "$145.00",
        specs: [
          { label: 'Composition', value: '99.99% Silver' },
          { label: 'Weight', value: '1 Troy Oz' },
          { label: 'Plating', value: 'Select Gold Plate' },
          { label: 'Mintage', value: '2,010' },
          { label: 'Features', value: 'Full Colour, Serialized Edge' }
        ],
        content: "Series A Complete: 425 total. Series J: Mintage 426-1535. Maximum Total Public Mintage: 2,010."
      },
      {
        type: 'standard',
        title: "Setting the Global Standard",
        subtitle: "A New Era in Minting",
        content: `When Canadian Artist Joe Green decided to make the Fine Silver Arrow coin, he went all out. As he was told by the minting sub-contractor he was using, up until this coin, no coin in history was ever minted up to the specifications this one had—thereby setting the standard in global minting excellence with this first issue.

When he started this, his emphasis was exclusively on beauty. It always has been and always will be to the exclusion of all else. He didn't care what the costs were—he wanted what he wanted. And since it would be dedicated to the AVRO Arrow and the Royal Canadian Air Force, it could not just be good. It had to be beyond exceptional to reflect Green's high regard for both the Arrow and the RCAF.

As an artist, trained at the prestigious Emily Carr Institute, Green paid close attention to every possible aspect of the symbolism within the coin. Given the RCAF was flying towards their 100th Anniversary, he created 100 tiny squares around the perimeter to reflect its anniversary. And because the first Arrow to fly was RL-201, he placed 201 tiny round dots around the interior perimeter to reflect this—something which all coins issued by Beaverworks Mint still to this day reflects, connecting all coins to their historical origins.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA2.jpg",
        imageAlign: 'right'
      },
      {
        type: 'banner',
        quote: "It's not just a coin, it's a performance piece."
      },
      {
        type: 'standard',
        title: "Her Majesty's Crown",
        subtitle: "The White Glove Treatment",
        content: `Since this was our first experience delving into the world of minting, we had no one to really guide us other than our own sense of how we think it should be done and use our own standards and practices we developed through honing our craft.

Given how this coin would feature the crown of the late Queen of Canada, Her Majesty Queen Elizabeth II, we were and have since, ALWAYS paid extra special attention to the history with her crown and to always ensure every single aspect was properly done.

Since this issue and with subsequent coins, we cannot convey how many hundreds of hours have been spent looking at this symbol and working to further refine the original sculpt, making adjustments in areas that most people would not even catch. But rest assured, we see and take all the steps to ensure all the contours and details are present regardless of anything. It must always be as perfect as possible. No exceptions.

When we first began this, most silver medallion bullion rounds are comprised of .999 pure silver. Since we were charged with the responsibility to reflect the highest possible standards that come with handling the Crest of the Royal Canadian Air Force, we ensured that our issue would have the exact same purity content that is produced by the Royal Canadian Mint: .9999.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/20150817_073641-scaled.jpg",
        imageAlign: 'left'
      },
      {
        type: 'banner',
        quote: "Thousands of people helped to build her, and countless millions were inspired by her. Do it right, down to the cubic micron."
      },
      {
        type: 'standard',
        title: "When They First Arrived",
        subtitle: "17 lbs of Silver Aerospace Art",
        content: `When the first batch of Arrows arrived, it felt like we were beyond privileged to have them. At this moment, we were the only ones in the world who had them—and it was a thing of true beauty.

The box opened with surprise.
Sparkled like stars twinkling.
Would the designer say it met his vision?
Elated. Beyond elated. Tears flowed.
A Canadian dream, preserved.
The finest coin, in the World.

Every single coin made has a serialized, engraved edge, marking its exact issue number. It truly is not just a coin, but a performance piece which can move people to tears. The day these arrived, the designer, trained at the prestigious Emily Carr Institute of Art + Design, broke down in tears. And so too have a number of recipients of this one-of-a-kind, uniquely Canadian experience.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA1.jpg",
        imageAlign: 'right'
      },
      {
        type: 'gallery',
        title: "Gallery",
        subtitle: "The Silver Arrow Collection",
        images: [
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA2.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA1.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/SA3.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/20150817_073833-scaled.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/20150817_073641-scaled.jpg"
        ]
      }
    ]
  },
  'arrow-program': {
    title: "Arrow Metal Coins",
    subtitle: "Struck From Legend",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/ArrowMetal.jpg",
    sections: [
      {
        type: 'videoHero',
        title: "Arrow Metal Coins",
        subtitle: "WE MINTED COINS FROM METAL EXTRACTED OUT OF AVRO FROM THE ARROW PROGRAM",
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Metal000.jpg"
      },
      {
        type: 'productInfo',
        title: "Specifications",
        price: "$795.00",
        specs: [
          { label: 'Material', value: 'Avro Arrow Program Metal' },
          { label: 'Mintage', value: '50' },
          { label: 'Origin', value: 'Recovered Artifact' },
          { label: 'Status', value: 'Extremely Limited' }
        ],
        content: "Each coin comes with a certificate of authenticity and the story of its origin."
      },
      {
        type: 'standard',
        title: "The Story Behind This Metal",
        subtitle: "A Fragment of Canadian History",
        content: `This coin has been minted using metal believed to originate from the legendary AVRO ARROW program—one of Canada's most iconic and controversial aerospace achievements. The material was entrusted to me by a highly respected, retired member of the Canadian Forces whose integrity I hold in the highest regard.

The origin of this metal is steeped in mystery. It came from a hand-built fishing boat found near Algonquin Park, just south of Barry's Bay, Ontario. According to the story passed to me, the boat was constructed by an expert craftsman—presumably involved in or with direct access to the AVRO program. For reasons thought to be related to national security, the boat was deliberately sunk to conceal its unique metallurgical composition.

Unbeknownst to his father, the builder's son—who I believe acted in a moment of quiet national heroism—rescued the boat and hid it under a neighbour's tree, where it remained undisturbed for over half a century. The story of the "Arrow boat" faded into obscurity until, years later, the retired Forces member came forward to share the hidden truth.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/ArrowMetal.jpg",
        imageAlign: 'right'
      },
      {
        type: 'standard',
        title: "The Discovery",
        subtitle: "Uncovering a Legend",
        content: `We began investigating. We traced the construction techniques and cross-referenced multiple sources to identify the original maker. What we discovered left us stunned. Once we understood the likely identity of the builder, we were both humbled and horrified—we had already begun cutting into what was likely a masterwork by one of Canada's unknown legends. There was no turning back, so I resolved to honour this legacy in the most meaningful way I know: through fine minting.

Stamped into the boat's metal were the numbers "1610" in two separate locations. Initially thought to be a part number, it became clear this was symbolic. The AVRO ARROW Mk.1 hit Mach 2.3, reaching speeds of over 1613 km/h (1000 mph) at 50,000 feet—and still climbing like a homesick Canadian angel. "1610" wasn't just a number; it was a code—an homage known only to those who truly understood what the Arrow meant to this country.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Metal000.jpg",
        imageAlign: 'left'
      },
      {
        type: 'banner',
        quote: "This is more than a coin. It is an artifact. A relic. A tangible connection to a story of Canadian ambition, heartbreak, and pride."
      },
      {
        type: 'standard',
        title: "A Letter to the Recipient",
        content: `This coin is struck from metal believed to originate from the legendary AVRO ARROW program—a piece of Canadian aerospace history thought lost, now reborn.

I present this coin to you not merely as a token, but as a fragment of our nation's spirit—reclaimed from obscurity and shaped into something enduring. May it remind you of what Canada once achieved, what was taken, and what must never be forgotten.

This metal is precious—priceless—and now, it's yours. May it serve you with strength, honour, and integrity. The hearts and souls of millions once soared with the Arrow. I now pass a piece of that legacy to you.

Carry it with pride, as a symbol of resilience, innovation, and the dream that refuses to die.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg",
        imageAlign: 'right'
      }
    ]
  },
  'test-pilot': {
    title: "Arrow Test Pilots",
    subtitle: "A Tribute to Courage and Flight",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-2.jpg",
    sections: [
      {
        type: 'videoHero',
        title: "Test Pilot Edition",
        subtitle: "A TRIBUTE TO COURAGE AND FLIGHT",
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg"
      },
      {
        type: 'productInfo',
        title: "Specifications",
        price: "$206.00",
        specs: [
          { label: 'Composition', value: '99.99% Silver' },
          { label: 'Finish', value: 'Gold Plated' },
          { label: 'Weight', value: '1 Troy Oz' },
          { label: 'Mintage', value: '206' },
          { label: 'Serials', value: '#RL-200 to RL-406' }
        ],
        content: "100% in-house production: plating, serialization, printing, assembly, and fulfillment."
      },
      {
        type: 'standard',
        title: "Honouring the Brave",
        subtitle: "The Men Who Flew the Dream",
        content: `Over the course of making and remaking our dies—sometimes due to ultra-fine flaws invisible to the untrained eye—we continued enhancing the sculpt of the Arrow. Each revision pushed the detail further, until even the canopy windows, individual actuators, and surface paneling on the aircraft's upper fuselage were crisply defined.

In this latest version of the Arrow coin, we've created something truly special: a coin designed to honour the brave test pilots who risked their lives to prove the Arrow's capabilities. By plating fine silver with radiant gold, we've created a version that showcases surface details that white ink printing previously obscured.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-2.jpg",
        imageAlign: 'right'
      },
      {
        type: 'banner',
        title: "The Four Test Pilots of the Avro Arrow",
        quote: "These men didn't just fly an airplane—they flew a dream."
      },
      {
        type: 'standard',
        title: "Janusz Żurakowski",
        content: `The legendary Polish-Canadian test pilot who made the Arrow's maiden flight on March 25, 1958. His fearless piloting and expert handling proved the aircraft's extraordinary capabilities to the world. "Zura" as he was known, became a Canadian aviation legend.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-1.jpg",
        imageAlign: 'left'
      },
      {
        type: 'standard',
        title: "The Other Heroes",
        content: `WŁADYSŁAW "SPUD" POTOCKI — Another Polish-Canadian aviator whose skill and dedication contributed immensely to the Arrow program's flight testing phase.

PETER COPE — An American test pilot who brought invaluable expertise and pushed the Arrow to its limits, helping to demonstrate its incredible performance envelope.

JACK WOODMAN — A distinguished Canadian test pilot whose contributions to the program were essential to proving the Arrow's revolutionary design.

These men took Canada's most advanced aircraft into the sky and showed the world what Canadian engineering could achieve. Each coin receives individual serialization, and matching serial numbers appear on custom-printed display slabs. Serial numbers run from #RL-200 to RL-406, paying homage to the Arrow aircraft designations.`,
        imageAlign: 'right'
      },
      {
        type: 'banner',
        quote: "Per Ardua Ad Astra — Through Adversity to the Stars."
      },
      {
        type: 'gallery',
        title: "Gallery",
        subtitle: "Test Pilot Edition Collection",
        images: [
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-2.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-1.jpg",
          "https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg"
        ]
      }
    ]
  },
  music: {
    title: "Music in Precious Metal",
    subtitle: "Per Ardua Ad Astra",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg",
    sections: [
      {
        type: 'standard',
        title: "A Creative Collaboration",
        content: `At Beaverworks Mint, we've always believed that art doesn't live in silos. Just as steel can be shaped into dies and silver pressed into memory, so too can music tell a story — of struggle, craftsmanship, and legacy. That's why it is our distinct honour to announce a powerful creative collaboration with Canada's most prolific hip-hop producer, Marek Czuba, who graciously offered his time and talent to help shape the rhythm behind our mission.

Czuba — known for his masterful fusion of swing, jazz, big band, and modern beats — has produced an album that sonically narrates our journey. From the soaring ambition of launching The 100 Collection, to the sleepless months of building a mint from scratch, to the moment of triumph as we struck our first coins dedicated to the Royal Canadian Air Force — his music captures it all. It's more than a soundtrack. It's an anthem of resilience, a celebration of ingenuity, and a sonic signature embedded into the soul of Beaverworks Mint.

We believe music and minting share the same heartbeat: precision, discipline, and soul. And now, you can hear the echoes of that heartbeat in every track, just as you see it reflected in every coin. We will be releasing more albums as time goes on. This album is simply amazing! Thank you brother!`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg",
        imageAlign: 'left'
      },
      {
        type: 'musicPlayer',
        title: "Listen to Per Ardua Ad Astra",
        subtitle: "by Johnson & The Beavers",
        albumArt: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Album.jpg",
        bandcampAlbumId: "2313670382",
        tracks: [
          { title: "USAF vs RCAF", trackId: 2471547931 },
          { title: "Royal Canadian Pride Machine", trackId: 2741235101 },
          { title: "Minted Nights", trackId: 2720296251 },
          { title: "Canadian Beaver", trackId: 1674012519 },
          { title: "Royal Wings", trackId: 2794692600 },
          { title: "Shattering The Dream", trackId: 1730328249 },
          { title: "Feathers Fly", trackId: 2312593314 },
          { title: "Maple Drips", trackId: 2164003609 },
          { title: "Eagles Cry", trackId: 1508829691 },
          { title: "Coins of Madness", trackId: 2776333973 },
          { title: "Minted Madness", trackId: 2752730704 },
          { title: "Crazy Coins", trackId: 3248265316 },
          { title: "Coins of Flair", trackId: 4191758437 },
          { title: "Pelican Pitches", trackId: 3661496476 }
        ]
      }
    ]
  },
  services: {
    title: "Our Services",
    subtitle: "Craftsmanship & Expertise",
    headerImage: "https://beaverworksmint.ca/wp-content/uploads/2025/07/Striking.jpg",
    sections: [
      {
        type: 'standard',
        title: "What We Offer",
        content: `Beaverworks Mint is Western Canada's only operating private mint, offering a complete range of services for collectors, organizations, and businesses seeking exceptional commemorative pieces.

Leadership — Learn about the visionaries and master craftsmen behind Beaverworks Mint.

Consulting — Custom coin design and minting services for organizations, military units, corporations, and private collectors.

Sculpting — Master-level digital sculpting and engraving by industry veterans, including former Royal Canadian Mint senior engravers.

Striking — Precision minting using our custom-built hydraulic press system, capable of producing museum-quality proof coins.

Every project we undertake is guided by our commitment to excellence, authenticity, and Canadian heritage.`,
        image: "https://beaverworksmint.ca/wp-content/uploads/2025/07/456790901_10169043772125273_1887859542596921941_n.jpg",
        imageAlign: 'right'
      }
    ]
  },
  contact: {
    title: "Get in Touch",
    subtitle: "We are listening",
    headerImage: "https://picsum.photos/id/203/1920/800?grayscale",
    sections: [
      {
        content: "Whether you are a collector, a veteran, or a fellow patriot, we want to hear from you. We are committed to fulfilling every back order and keeping our word of honor to everyone who has trusted us.",
        image: "https://picsum.photos/id/204/800/600?grayscale",
        imageAlign: 'right'
      }
    ]
  }
};

// Comprehensive Product Database from PRODUCTS.txt
export const ALL_PRODUCTS: ProductHighlight[] = [
  // --- Avro Arrow Collection ---
  {
    id: 'golden-arrow',
    title: 'Golden Arrow',
    subtitle: 'The Coin They Tried to Kill',
    price: '$12,500.00',
    category: 'arrow-collection gold',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA1.jpg',
    description: "A Golden Tribute They Wanted Forgotten—But We Refused to Let Die. 2.01 Troy Oz .9999 Fine Gold.",
    longDescription: `Here is the coin which started this journey of ours and was the catalyst for building our studio. As a fledgling coin designer and producer, we learned how to research, design, produce, fulfil and defend a vision of quality. This single coin, with it's incredible complexity and nuances we built into it, was the catalyst for building an entire minting operation.

As an artist, trained at the prestigious Emily Carr Institute of Art + Design in Vancouver, our founder believed that this coin should be his magnum opus—a crowning artistic work—reflecting the aspirations of Canada: that if we can dream it, we can build it.

"It's not just a coin, it's a statement. You hold in your hands something, some day, may be as big a deal as having a Rembrandt. This is the gold coin who's silver equivalent, people are talking about as The Finest Silver Coin in the World."

In keeping with his training, he ensured that every possible aspect of what this coin represents would serve to reflect the entirety of what the Arrow represented to Canadians: the pinnacle of achievement.

Why? Because as an artist, who wanted to make his finest coin, he felt that for the sake of history and art, that it was necessary to push design to its limit so that the highest form of artistry and integrity would be imbued forever in this precious metal.

Great care was taken for every element of the packaging: hand-polished acrylic capsules and coin frames; a satin-covered, magnetic closure display frame; an acrylic-topped, velvet-lined display box; an engraved, brushed aluminum plaque; a satin-covered, magnetic closure display container; a foam core insert; a satin-covered, magnetic closure exterior shipping container and yes, for the first 7 made, actual Avro Arrow Program metal from the actual Arrow aircraft.

They tried to destroy our dream. They utterly, utterly failed.`,
    specs: [
      {label: 'Composition', value: '99.99% Gold'},
      {label: 'Weight', value: '2.01 Troy Oz'},
      {label: 'Mintage', value: '206'},
      {label: 'Plating', value: 'Select Rhodium'},
      {label: 'Features', value: 'Full Colour Printing, Serialized Edge'}
    ],
    gallery: [
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA1.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA2.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA3.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA4.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA5.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/GA6.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg'
    ]
  },
  {
    id: 'silver-arrow',
    title: 'Arrow Coin',
    subtitle: 'The Coin That Started It All',
    price: '$145.00',
    category: 'arrow-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/SA2.jpg',
    description: "The coin that started it all. 1 Troy Oz .9999 Fine Silver with Select Gold Plate.",
    longDescription: `THE SILVER ARROW

When Canadian Artist Joe Green decided to make the Fine Silver Arrow coin, he went all out and in the process, as he was told by the minting sub-contractor he was using, that up until this coin, no coin in history was ever minted up to the specifications this one had. We pushed their system further than any other coin in history had been pushed. The result was a coin with 6 different platings, with over 900+ unique design elements, full colour printing, serialized edge and extreme precision.

HER MAJESTY'S CROWN

The designer wanted to incorporate a very subtle nod to Her Majesty Queen Elizabeth II and was able to incorporate her crown as part of the coin's perimeter design. One can see the crown, albeit subtly, embedded into the hash-marks around the perimeter of the coin. In 2022, after the passing of Her Majesty Queen Elizabeth II and the transition to King Charles III, the coins which display her crown will never be modified with King Charles' crown.

Also around the perimeter of the coin are 100 tiny squares, which reflect the 100th Anniversary of the Royal Canadian Air Force. And further along the interior perimeter, one can count 201 tiny round dots. This reflects the first Arrow to fly, RL-201, meaning "Roll Out Number 201".

WHEN THEY FIRST ARRIVED

The box opened with surprise.
Sparkled like stars twinkling.
Would the designer say it met his vision?
Elated. Beyond elated. Tears flowed.
A Canadian dream, preserved.
The finest coin, in the World.

Every single coin made, has a serialized, engraved edge, marking its exact issue number. It truly is not just a coin, but a performance piece which can move people to tears. The day these arrived, the designer, trained at the prestigious Emily Carr Institute of Art + Design, broke down in tears. And so too have a number of recipients of this one-of-a-kind, uniquely Canadian experience.

Series A Complete: 425 total. Series J: Mintage 426-1535. Maximum Total Public Mintage: 2,010.`,
    specs: [
      {label: 'Composition', value: '99.99% Silver'},
      {label: 'Weight', value: '1 Troy Oz'},
      {label: 'Plating', value: 'Select Gold Plate'},
      {label: 'Mintage', value: '2,010'},
      {label: 'Features', value: 'Full Colour Printing, Serialized Edge'}
    ],
    gallery: [
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/SA2.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/SA1.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/SA3.jpg'
    ]
  },
  {
    id: 'arrow-program',
    title: 'Arrow Metal Coins',
    subtitle: 'A Tangible Connection to History',
    price: '$795.00',
    category: 'arrow-collection',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/ArrowMetal.jpg',
    description: "Minted from metal believed to originate from the legendary AVRO ARROW program.",
    longDescription: `THE STORY OF THE METAL

This is more than a coin. It is an artifact. A relic. A tangible connection to a story of Canadian ambition, heartbreak, and pride.

The AVRO Arrow program represented a pinnacle of Canadian aerospace achievement—a supersonic interceptor so advanced for its time that its cancellation in 1959 remains one of the most controversial moments in Canadian history. When the program was shut down, almost everything was destroyed: blueprints, tooling, parts, and aircraft. They tried to erase it from existence.

But some of it survived.

The metal used to create this coin was recovered from a hand-built fishing boat discovered near Algonquin Park, Ontario. The vessel, painstakingly constructed by someone connected to the AVRO program, was deliberately sunk—hidden away for reasons we may never fully understand. Perhaps to preserve a piece of history. Perhaps for security. Perhaps simply because throwing it away would have been too painful.

What we do know is that the stamped numbers "1610" found on the boat correspond with unmistakable precision to the AVRO ARROW Mk.1's published speed capability: 1613 km/h (1000 mph) at 50,000 feet. This detail isn't coincidence—it's a signature, a silent declaration: this metal was part of something legendary.

Whether from production tooling, prototype components, or infrastructure tied to the Arrow, this metal represents an irreplaceable link to a story that shaped—and was nearly stolen from—Canadian identity.

A LETTER TO THE FIRST RECIPIENT

"This coin is struck from metal believed to originate from the legendary AVRO ARROW program—a piece of Canadian aerospace history thought lost, now reborn.

I present this coin to you not merely as a token, but as a fragment of our nation's spirit—reclaimed from obscurity and shaped into something enduring. May it remind you of what Canada once achieved, what was taken, and what must never be forgotten.

Carry it with pride, as a symbol of resilience, innovation, and the dream that refuses to die."

A number of these coins were given to Royal Canadian Air Cadets affiliated with the Princess Patricia's Canadian Light Infantry, presented to Cadets who exhibit the highest form of extreme excellence. It is hoped that these young Canadians will be inspired by the legacy of the Arrow and carry that spirit forward into the future.

We are never going to allow them to wipe her from history.`,
    specs: [
      {label: 'Material', value: 'Avro Arrow Program Metal'},
      {label: 'Mintage', value: '50'},
      {label: 'Origin', value: 'Recovered Artifact'},
      {label: 'Status', value: 'Extremely Limited'}
    ],
    gallery: [
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/ArrowMetal.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/ArrowMetal2.jpg'
    ]
  },
  {
    id: 'test-pilot',
    title: 'Arrow Test Pilots',
    subtitle: 'A Tribute to Courage and Flight',
    price: '$206.00',
    category: 'arrow-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-2.jpg',
    description: "Dedicated to the Test Pilots: Janusz Zurokowski, Wladyslaw Potocki, Peter Cope, Jack Woodman.",
    longDescription: `THE TEST PILOT EDITION COIN: A TRIBUTE TO COURAGE AND FLIGHT

Over the course of making and remaking our dies—sometimes due to ultra-fine flaws invisible to the untrained eye—we continued enhancing the sculpt of the Arrow. Each revision pushed the detail further, until even the canopy windows, individual actuators, and surface paneling on the aircraft's upper fuselage were crisply defined.

In this latest version of the Arrow coin, we've created something truly special: a coin designed to honour the brave test pilots who risked their lives to prove the Arrow's capabilities. By plating fine silver with radiant gold, we've created a version that showcases surface details that white ink printing previously obscured.

THE FOUR TEST PILOTS OF THE AVRO ARROW

We dedicate this coin to the courageous men who flew the Arrow:

JANUSZ ŻURAKOWSKI — The legendary Polish-Canadian test pilot who made the Arrow's maiden flight on March 25, 1958. His fearless piloting and expert handling proved the aircraft's extraordinary capabilities to the world.

WŁADYSŁAW "SPUD" POTOCKI — Another Polish-Canadian aviator whose skill and dedication contributed immensely to the Arrow program's flight testing phase.

PETER COPE — An American test pilot who brought invaluable expertise and pushed the Arrow to its limits, helping to demonstrate its incredible performance envelope.

JACK WOODMAN — A distinguished Canadian test pilot whose contributions to the program were essential to proving the Arrow's revolutionary design.

These men didn't just fly an airplane—they flew a dream. They took Canada's most advanced aircraft into the sky and showed the world what Canadian engineering could achieve.

PRODUCTION DETAILS

Each coin receives individual serialization, and matching serial numbers appear on custom-printed display slabs. Serial numbers run from #RL-200 to RL-406, paying homage to the Arrow aircraft designations.

This entire production run—plating, serialization, printing, assembly, and fulfillment—was completed 100% in-house at Beaverworks Mint, representing our commitment to Canadian craftsmanship and our dedication to honouring these aviation pioneers.

Per Ardua Ad Astra — Through Adversity to the Stars.`,
    specs: [
      {label: 'Composition', value: '99.99% Silver'},
      {label: 'Finish', value: 'Gold Plated'},
      {label: 'Weight', value: '1 Troy Oz'},
      {label: 'Mintage', value: '206'},
      {label: 'Serials', value: '#RL-200 to RL-406'}
    ],
    gallery: [
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-2.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/TestPilot-1.jpg',
      'https://beaverworksmint.ca/wp-content/uploads/2025/07/arrowpilots2.jpg'
    ]
  },
  { 
    id: 'arrow-badge', 
    title: 'Avro Arrow Flight Badge', 
    subtitle: 'RCAF Centennial', 
    price: '$25.00', 
    category: 'arrow-collection badges',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2015/12/ArrowBadge.jpg',
    description: "100 Years of Excellence Avro Arrow embroidered military flight badge with Velcro backing.",
    specs: [
      {label: 'Type', value: 'Embroidered'}, 
      {label: 'Backing', value: 'Velcro'}, 
      {label: 'Series', value: 'Centennial'}
    ]
  },
  
  // --- The 100 Collection / RCAF ---
  { 
    id: 'golden-maple', 
    title: 'The Golden Maple', 
    subtitle: 'RCAF Centennial', 
    price: '$12,500.00', 
    category: '100-collection gold',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenMaple.jpg',
    description: "A Solid Gold Tribute to Canadian Legacy. 2.01 Troy Oz .9999 Fine Gold.",
    longDescription: "Struck from 2.01 troy ounces of solid, .9999 fine gold. Its precise weight pays homage to RL-201, the first Avro Arrow. With a strict mintage limit of only 100 coins, this rare release stands as a symbol of national pride.",
    specs: [
      {label: 'Composition', value: '99.99% Gold'}, 
      {label: 'Weight', value: '2.01 Troy Oz'}, 
      {label: 'Mintage', value: '100'}
    ]
  },
  { 
    id: 'command-maple', 
    title: 'The 5Oz Command Maple', 
    subtitle: 'Monumental Tribute', 
    price: '$1,000.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/CommandMaple.jpg',
    description: "5 Troy Oz .9999 Fine Silver. 80mm Diameter. Serialised Face Marking.",
    longDescription: "Our first-ever 80mm, 5 oz fine silver maple coin, proudly bearing the Royal Canadian Air Force Command Crest. At 5 troy ounces, it’s not just a coin—it’s a statement of command, service, and sacrifice.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '5 Troy Oz'}, 
      {label: 'Diameter', value: '80mm'},
      {label: 'Mintage', value: '100'}
    ]
  },
  { 
    id: 'rcaf-silver-maple', 
    title: 'The RCAF Silver Maple', 
    subtitle: 'Born from Grit', 
    price: '$145.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/SilverMaple1.jpg',
    description: "Born From Grit. Forged With Pride. Ultra High Relief & Command Maple.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Diameter', value: '38 mm'}
    ]
  },
  { 
    id: 'supermarine-spitfire', 
    title: 'The Supermarine Spitfire', 
    subtitle: 'Legacy Series', 
    price: '$155.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Spitfire.jpg',
    description: "One of the Pillars of Air Defence in WWII. 1 Troy Oz .9999 Fine Silver.",
    longDescription: "The Supermarine Spitfire is a British single-seat fighter aircraft used by the Royal Air Force and other Allied countries. It was the only British fighter produced continuously throughout the war. This coin honors that legacy.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Mintage', value: '250'}
    ]
  },
  { 
    id: 'spitfire-misprint', 
    title: 'The Spitfire Misprint', 
    subtitle: 'Discontinued Variant', 
    price: '$195.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Misprint.jpg',
    description: "We screwed up. We had the wrong variant. Only 100 minted with this flaw.",
    longDescription: "Chris Ball pointed out we used the wrong variant of Spitfire for the Battle of Britain. It was an embarrassing mistake. Green decided to give them away to Chris' friends in his memory. A rare collector's item due to the flaw.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Status', value: 'Discontinued'}
    ]
  },
  { 
    id: 'hawker-hurricane', 
    title: 'The Hawker Hurricane', 
    subtitle: 'Battle of Britain', 
    price: '$155.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/HawkerHurricane.jpg',
    description: "The RCAF Hurricane Pilots of the Battle of Britain. Select Gold Plate.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Mintage', value: '250'}
    ]
  },
  { 
    id: 'lancaster-bomber', 
    title: 'The Lancaster Bomber', 
    subtitle: 'Vera', 
    price: '$155.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Lancaster1.jpg',
    description: "'Vera' The Mynarski Memorial Lancaster Bomber. 1 Troy Oz .9999 Fine Silver.",
    longDescription: "Flight Engineer Andrew Charles Mynarski's extraordinary valor and selfless sacrifice earned him the Victoria Cross. This coin pays tribute to the iconic aircraft and its legendary crew.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Mintage', value: '250'}
    ]
  },
  { 
    id: 'cf-188-hornet', 
    title: 'The CF-188 Hornet', 
    subtitle: "Canada's Workhorse", 
    price: '$155.00', 
    category: '100-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Hornet.jpg',
    description: "The backbone of the RCAF's tactical air power. Select Gold Plate.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Mintage', value: '250'}
    ]
  },
  { 
    id: 'truckers-convoy', 
    title: 'Truckers Freedom Convoy', 
    subtitle: 'Born from Road Grit', 
    price: '$145.00', 
    category: 'silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/Truckers2.jpg',
    description: "This country rolls because you do. 1 Troy Oz .9999 Fine Silver.",
    longDescription: "For the men and women behind the wheel who kept the shelves stocked. You are more than drivers. You are the heartbeat of this country. And now, your story will be struck in silver.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Diameter', value: '38mm'}
    ]
  },
  
  // --- Badges ---
  { 
    id: 'silver-dart-badge', 
    title: 'Silver Dart Flight Badge', 
    subtitle: 'First Flight', 
    price: '$25.00', 
    category: 'badges 100-collection',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2015/12/SDB.jpg',
    description: "RCAF Centennial Flight Badges 100 Years of Excellence.",
    specs: [{label: 'Type', value: 'Embroidered'}, {label: 'Backing', value: 'Velcro'}]
  },
  { 
    id: 'lancaster-badge', 
    title: 'Lancaster Flight Badge', 
    subtitle: 'Bomber Command', 
    price: '$25.00', 
    category: 'badges',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2015/12/LancasterB.jpg',
    description: "RCAF Centennial Flight Badges 100 Years of Excellence.",
    specs: [{label: 'Type', value: 'Embroidered'}, {label: 'Backing', value: 'Velcro'}]
  },

  // --- Upgrades ---
  { 
    id: 'packaging-upgrade', 
    title: 'Premium Packaging', 
    subtitle: 'Performance Piece', 
    price: '$40.00', 
    category: 'shop',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/015-2.jpg',
    description: "A Coin in a box, in a box, in a box. It is not just a coin, it is a performance piece.",
    specs: [{label: 'Type', value: 'Custom Box'}, {label: 'Availability', value: 'While Supplies Last'}]
  },
  
  // --- Watches ---
  {
    id: 'hadfield-watch',
    title: 'Commander Hadfield Edition',
    subtitle: 'ISS Commander Tribute',
    price: 'One of a Kind',
    category: 'watches',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/w9.jpg',
    description: "A custom, one of a kind watch made as a gift for Commander Chris Hadfield, the first Canadian to command the International Space Station.",
    longDescription: "This exclusive timepiece was personally crafted and gifted to RCAF Colonel and Canadian astronaut Chris Hadfield. A tribute to Canadian excellence in space exploration and military service.",
    specs: [{label: 'Movement', value: 'Swiss'}, {label: 'Edition', value: 'Unique'}, {label: 'Recipient', value: 'Col. Chris Hadfield'}]
  },
  {
    id: 'rcaf-pilot-watch',
    title: 'RCAF Pilot Edition',
    subtitle: 'Swiss Movement',
    price: 'Coming Soon',
    category: 'watches',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/w3.jpg',
    description: "Custom designed for RCAF pilots. Swiss-made movement with Canadian craftsmanship.",
    longDescription: "Every great pilot deserves a great watch. Our vision includes crafting our own watches with Swiss-made movements and collaborating with prestigious Zurich-based watchmakers.",
    specs: [{label: 'Movement', value: 'Swiss'}, {label: 'Origin', value: 'Canada'}]
  },
  {
    id: 'aviator-chronograph',
    title: 'Aviator Chronograph',
    subtitle: 'Japanese Movement',
    price: 'Coming Soon',
    category: 'watches',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/w5.jpg',
    description: "Precision Japanese movement paired with aviation-inspired design.",
    longDescription: "A timepiece designed for those who appreciate precision and the spirit of flight. Japanese movement ensures reliability and accuracy.",
    specs: [{label: 'Movement', value: 'Japanese'}, {label: 'Style', value: 'Chronograph'}]
  },
  {
    id: 'centennial-watch',
    title: 'RCAF Centennial',
    subtitle: 'Limited Edition',
    price: 'Coming Soon',
    category: 'watches',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/07/w8.jpg',
    description: "Commemorating 100 years of the Royal Canadian Air Force.",
    longDescription: "A limited edition timepiece created to honour the centennial of the Royal Canadian Air Force. Swiss craftsmanship meets Canadian heritage.",
    specs: [{label: 'Movement', value: 'Swiss'}, {label: 'Edition', value: 'Centennial Limited'}]
  },
];
