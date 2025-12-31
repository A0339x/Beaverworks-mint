import { Hammer, PenTool, Flame, Stamp, Award, Clock, MapPin, Shield, Star, Users } from 'lucide-react';
import { NavItem, Feature, NewsItem, ProductHighlight, PageContent, CollectionInfo } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Shop', id: 'shop', type: 'category' },
  { 
    label: 'Avro Arrow', 
    id: 'arrow-collection',
    type: 'category',
    children: [
      { label: 'The Golden Arrow', id: 'golden-arrow', type: 'product' },
      { label: 'The Silver Arrow', id: 'silver-arrow', type: 'product' },
      { label: 'Program Metal', id: 'arrow-program', type: 'product' },
      { label: 'Test Pilot Edition', id: 'test-pilot', type: 'product' },
      { label: 'Flight Badge', id: 'arrow-badge', type: 'product' },
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
    type: 'page', // Parent type, specific children handle routing
    children: [
      { label: 'Leadership', id: 'leadership', type: 'page' },
      { label: 'Consulting', id: 'consulting', type: 'page' },
      { label: 'Sculpting', id: 'sculpting', type: 'page' },
      { label: 'Striking', id: 'striking', type: 'page' },
    ]
  },
  { label: 'Flight Badges', id: 'badges', type: 'category' },
  { label: 'Watches', id: 'watches', type: 'category' },
  { label: 'Music', id: 'music', type: 'page' },
  { label: 'Our Story', id: 'story', type: 'page' },
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
    subtitle: "A Canadian Legend",
    heroHeadline: "THE ARROW LIVES ON",
    heroSubheadline: "FORGED IN GOLD AND SILVER",
    heroImage: "https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg",
    contentTitle: "The Coin They Tried to Kill",
    content: `When Canadian Artist Joe Green decided to make the Fine Silver Arrow coin, he went all out and in the process, as he was told by the minting sub-contractor he was using, that up until this coin, no coin in history was ever minted up to the specifications this one had.

Over the course of making and remaking our dies — sometimes due to ultra-fine flaws invisible to the untrained eye — we continued enhancing the sculpt of the Arrow. Each revision pushed the detail further, until even the canopy windows, individual actuators, and surface paneling on the aircraft’s upper fuselage were crisply defined.

The Golden Arrow was never meant to fly—at least not by those who tried to silence it. But just like the engineers, pilots, and dreamers who built the Arrow, we refused to quit.`,
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
    title: 'The Golden Arrow', 
    subtitle: 'The Coin They Tried to Kill', 
    price: '$12,500.00', 
    category: 'arrow-collection gold',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/GoldenArrow22.jpg',
    description: "A Golden Tribute They Wanted Forgotten—But We Refused to Let Die. 2.01 Troy Oz .9999 Fine Gold.",
    longDescription: "The Golden Arrow was never meant to fly—at least not by those who tried to silence it. Struck from 2.01 troy ounces of solid, .9999 fine gold. Each coin is select Rhodium plated and individually serialized. This is not just a coin; it is a monument in miniature.",
    specs: [
      {label: 'Composition', value: '99.99% Gold'}, 
      {label: 'Weight', value: '2.01 Troy Oz'}, 
      {label: 'Mintage', value: '206'}, 
      {label: 'Plating', value: 'Select Rhodium'}
    ]
  },
  { 
    id: 'silver-arrow', 
    title: 'The Silver Arrow', 
    subtitle: 'The Coin That Started It All', 
    price: '$155.00', 
    category: 'arrow-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/SilverArrow.jpg',
    description: "1 Troy Oz .9999 Fine Silver. Dedicated to the AVRO Arrow and the Royal Canadian Air Force.",
    longDescription: "When Canadian Artist Joe Green decided to make the Fine Silver Arrow coin, he went all out. Setting the standard in global minting excellence with this first issue. Features full colour printing and serialised edge markings.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Diameter', value: '38 mm'},
      {label: 'Mintage', value: '2010'}
    ]
  },
  { 
    id: 'arrow-program', 
    title: 'Arrow Program Metal Coin', 
    subtitle: 'Reclaimed Artifact', 
    price: '$799.00', 
    category: 'arrow-collection',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/ArrowProgram.jpg',
    description: "Struck from the Fabric of a Canadian Legend. Authentic metal salvaged from Avro facilities.",
    longDescription: "This is not gold. This is not silver. This is something far rarer—a coin struck from authentic metal salvaged from the Avro facilities tied to the legendary Arrow program. With only 50 coins minted, this is among the most exclusive and meaningful commemorative coins ever produced.",
    specs: [
      {label: 'Material', value: 'Reclaimed Avro Metal'}, 
      {label: 'Mintage', value: '50'}, 
      {label: 'Status', value: 'Top Secret'}
    ]
  },
  { 
    id: 'test-pilot', 
    title: 'Test Pilot Edition', 
    subtitle: 'Gold Plated Silver Arrow', 
    price: '$206.00', 
    category: 'arrow-collection silver',
    image: 'https://beaverworksmint.ca/wp-content/uploads/2025/08/TestPilotEdition.jpg',
    description: "Dedicated to the Test Pilots: Janusz Zurokowski, Wladyslaw Potocki, Peter Cope, Jack Woodman.",
    longDescription: "The Test Pilot Edition Coin: A Tribute to Courage and Flight. By plating fine silver with radiant gold, we’ve created a version of our Golden Arrow that’s accessible to every Canadian who shares in this pride. #RL-200 - RL-406.",
    specs: [
      {label: 'Composition', value: '99.99% Silver'}, 
      {label: 'Finish', value: 'Gold Plated'},
      {label: 'Weight', value: '1 Troy Oz'}, 
      {label: 'Mintage', value: '206'}
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
