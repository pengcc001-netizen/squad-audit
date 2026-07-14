export interface SquadRole {
  slug: string;
  name: string;
  emoji: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  strengths: string[];
  weaknesses: string[];
  compatibility: string[];
  auditScore: {
    reliability: number;
    funFactor: number;
    dramaLevel: number;
    loyalty: number;
    cohesion: number;
  };
  color: string;
}

export const squadRoles: SquadRole[] = [
  {
    slug: "the-planner",
    name: "The Planner",
    emoji: "📋",
    tagline: "The architect of every squad memory.",
    description:
      "The Planner is the strategic backbone of any friend group. They are the one who quietly researches restaurants three weeks before a birthday, sends calendar invites that no one acknowledges but everyone secretly relies on, and remembers that Marcus cannot eat shellfish. Their group chat is a controlled archive of links, polls, and pinned reservation confirmations. Without The Planner, the squad would still be asking \"what are we doing this weekend?\" at 9pm on Saturday. They treat social logistics the way other people treat tax filings: with spreadsheets, deadlines, and a quiet, unshakable conviction that preparation is a form of love. The Planner is not loud about their effort, which is precisely why the entire group quietly orbits around them.",
    responsibilities: [
      "Researches and books restaurants, trips, and group events weeks in advance",
      "Maintains the squad calendar and sends gentle reminders",
      "Tracks dietary restrictions, birthdays, and availability across the group",
      "Builds itineraries that balance everyones energy levels and budgets",
      "Serves as the default decision-maker when the group stalls on logistics",
    ],
    strengths: [
      "Eliminates decision fatigue for the entire squad",
      "Rarely forgets a birthday, anniversary, or important detail",
      "Creates a sense of stability that holds the group together over years",
    ],
    weaknesses: [
      "Can feel unappreciated when effort goes unnoticed",
      "May struggle to adapt when plans collapse unexpectedly",
      "Risks burning out from carrying the mental load alone",
    ],
    compatibility: ["the-anchor", "the-hype-man", "the-connector"],
    auditScore: { reliability: 95, funFactor: 48, dramaLevel: 18, loyalty: 88, cohesion: 82 },
    color: "#1E40AF",
  },
  {
    slug: "the-chaos-agent",
    name: "The Chaos Agent",
    emoji: "🎲",
    tagline: "The wildcard that turns a quiet night into a story.",
    description:
      "The Chaos Agent is the controlled explosion at the center of every squad story worth retelling. They are the one who suggests karaoke at 1am, who befriends a stranger at the bar and somehow gets the whole group invited to a rooftop party, who orders the mystery dish on the menu just to see what happens. Chaos Agents are not reckless for the sake of recklessness; they operate on a different frequency than the rest of the squad, reading a room and deciding that what it needs is disruption. They generate the raw material that becomes inside jokes, group lore, and the kind of memories that get retold at weddings ten years later. Without a Chaos Agent, the squad risks drifting into comfortable routine, which over time becomes comfortable distance. The trick is that they need an Anchor or a Mom Friend nearby, or the chaos stops being fun and starts being exhausting.",
    responsibilities: [
      "Proposes the spontaneous plans that become core group memories",
      "Breaks social tension with unexpected energy or humor",
      "Pushes the squad out of comfort zones and into new experiences",
      "Generates the inside jokes and stories that define group identity",
      "Tests the groups flexibility by changing plans with little warning",
    ],
    strengths: [
      "Prevents the squad from calcifying into routine",
      "Creates the stories that bind the group together over time",
      "Reads social energy and injects momentum when the room is flat",
    ],
    weaknesses: [
      "Can overwhelm members who need predictability to feel safe",
      "Sometimes mistakes disruption for connection",
      "May leave others to handle the logistical aftermath",
    ],
    compatibility: ["the-mom-friend", "the-anchor", "the-wildcard"],
    auditScore: { reliability: 32, funFactor: 96, dramaLevel: 72, loyalty: 58, cohesion: 64 },
    color: "#DC2626",
  },
  {
    slug: "the-mom-friend",
    name: "The Mom Friend",
    emoji: "🍵",
    tagline: "The one who makes sure everyone gets home safe.",
    description:
      "The Mom Friend is the squads unspoken safety net, the person who carries ibuprofen in their bag, texts \"text me when youre home\" without irony, and notices that someone has been quiet for the last twenty minutes. Their care is not performative; it is operational. They remember who is allergic to what, who does not drink, who had a rough week and needs to be checked on. The Mom Friend often goes underthanked because their work is invisible by design: the goal is that no one ever feels the gap they are filling. The risk they carry is the same one caregivers always carry: slowly absorbing the groups emotional labor until their own reserves run dry. A healthy squad recognizes this and returns the care. An unhealthy one treats The Mom Friend as an inexhaustible resource and is genuinely surprised when they eventually pull back.",
    responsibilities: [
      "Monitors everyones emotional and physical wellbeing during outings",
      "Carries emergency supplies: medication, snacks, chargers, bandaids",
      "Follows up with members who seem off or have been absent",
      "Ensures everyone gets home safely after late nights",
      "Defuses conflicts before they escalate by reading the room early",
    ],
    strengths: [
      "Makes every member feel individually seen and cared for",
      "Catches problems before anyone else notices they are forming",
      "Creates a baseline of psychological safety across the whole group",
    ],
    weaknesses: [
      "Absorbs emotional labor that the group rarely redistributes",
      "Can become resentful if care is not reciprocated",
      "May overfunction in ways that prevent others from growing",
    ],
    compatibility: ["the-chaos-agent", "the-hype-man", "the-anchor"],
    auditScore: { reliability: 90, funFactor: 52, dramaLevel: 12, loyalty: 96, cohesion: 88 },
    color: "#0D9488",
  },
  {
    slug: "the-hype-man",
    name: "The Hype Man",
    emoji: "📣",
    tagline: "The amplifier of every small win into a moment.",
    description:
      "The Hype Man is the squads emotional amplifier, the person who turns a mediocre promotion into a parade and a bad haircut into a redemption arc. Their gift is not just enthusiasm; it is the ability to make other people feel like the main character of their own life for a few minutes. When someone in the squad shares good news, The Hype Man responds first, loudest, and with the most specific compliments. They remember the project someone mentioned three months ago and ask about it by name. This is not empty cheerleading; it is a form of attention that most people are starved for and almost no one provides consistently. The Hype Man understands that friendship is, in part, a shared practice of noticing each other out loud. Squads with a strong Hype Man have measurably higher morale, because being celebrated becomes the cultural default rather than a rare event.",
    responsibilities: [
      "Celebrates every squad members wins publicly and enthusiastically",
      "Amplifies good news before anyone else can underplay it",
      "Maintains morale during tough stretches with targeted encouragement",
      "Hypes up quieter members who would not self-promote",
      "Sets the emotional tone by responding first in the group chat",
    ],
    strengths: [
      "Boosts individual confidence and group morale simultaneously",
      "Makes people feel witnessed in their efforts, not just their results",
      "Creates a culture where celebrating each other is the norm",
    ],
    weaknesses: [
      "Can burn bright then crash if their own lows go unnoticed",
      "May default to positivity when someone actually needs to be heard",
      "Risks being typecast as the cheerful one and never the struggling one",
    ],
    compatibility: ["the-planner", "the-mom-friend", "the-connector"],
    auditScore: { reliability: 62, funFactor: 88, dramaLevel: 24, loyalty: 84, cohesion: 90 },
    color: "#EAB308",
  },
  {
    slug: "the-ghost",
    name: "The Ghost",
    emoji: "👻",
    tagline: "Present in spirit, absent in practice, still family.",
    description:
      "The Ghost is the squad member who is somehow always there and never there. They read every message in the group chat and respond to none of them. They miss three events in a row, then appear at the fourth as if no time has passed, slotting back into the group with zero friction. The Ghost is not checked out; they operate on a different cadence than the rest of the squad, one that values low-frequency, high-fidelity connection over constant contact. They will ghost for six weeks and then send a single meme so perfectly calibrated to the groups humor that it proves they have been paying attention the entire time. The healthiest squads understand that The Ghost is not a problem to be fixed; they are a pattern to be respected. Forcing a Ghost to participate on the squads schedule, rather than theirs, is the fastest way to lose them entirely.",
    responsibilities: [
      "Maintains connection through low-frequency, high-signal check-ins",
      "Shows up for the events that actually matter, even after long absences",
      "Proves that the bond does not require constant proximity to survive",
      "Provides a counterweight to the squads higher-energy members",
      "Demonstrates that friendship can run on trust rather than performance",
    ],
    strengths: [
      "Models that real friendship does not require daily maintenance",
      "Brings grounded, undiluted presence when they do show up",
      "Reduces pressure on the group to perform closeness constantly",
    ],
    weaknesses: [
      "Can be misread as disinterest or detachment",
      "May miss critical moments if absent for too long",
      "Risks drifting permanently if the squad stops extending invitations",
    ],
    compatibility: ["the-anchor", "the-connector", "the-planner"],
    auditScore: { reliability: 40, funFactor: 38, dramaLevel: 8, loyalty: 72, cohesion: 44 },
    color: "#64748B",
  },
  {
    slug: "the-connector",
    name: "The Connector",
    emoji: "🔗",
    tagline: "The bridge between every sub-circle in your life.",
    description:
      "The Connector is the squads social infrastructure, the person who knows a person for every need: a mechanic who will not overcharge, a photographer for the group trip, a friend of a friend who works at the venue you want into. Their value is not just in having a big network; it is in the instinct to match people to each other and then step back. Connectors introduce members of different friend groups at dinners, then watch with quiet satisfaction as those people become friends in their own right. They are the reason your social graph has edges you did not build yourself. The Connector operates on a simple conviction: that good people should know other good people, and that introductions are a form of generosity. Squads anchored by a Connector tend to grow rather than calcify, because new energy keeps flowing in through the doors they hold open.",
    responsibilities: [
      "Introduces squad members to people who will enrich their lives",
      "Maintains a wide network of contacts across different social circles",
      "Bridges cliques within the squad so no subgroup becomes isolated",
      "Sources resources, recommendations, and opportunities for the group",
      "Welcomes new partners and friends into the squad gracefully",
    ],
    strengths: [
      "Expands the squads world by linking it to other good people",
      "Prevents the squad from becoming closed or ingrown",
      "Turns social capital into a shared resource, not a hoarded one",
    ],
    weaknesses: [
      "Can overextend by maintaining too many relationships at once",
      "Risks being valued for utility rather than for who they are",
      "May struggle to ask for help because they are always offering it",
    ],
    compatibility: ["the-hype-man", "the-planner", "the-anchor"],
    auditScore: { reliability: 70, funFactor: 76, dramaLevel: 34, loyalty: 80, cohesion: 92 },
    color: "#0D9488",
  },
  {
    slug: "the-wildcard",
    name: "The Wildcard",
    emoji: "🃏",
    tagline: "Unpredictable in the best and worst possible ways.",
    description:
      "The Wildcard is the squad member you can never quite predict, and that is exactly the point. One week they are hyper-present, organizing dinners and dominating the group chat; the next they have pivoted entirely to a new hobby, a new crowd, or a new identity and the squad barely hears from them. Unlike The Ghost, whose absence is stable and patterned, The Wildcards presence is genuinely volatile. They bring a current of unpredictability that keeps the squad alert. Wildcards are often the most interesting person in the room and frequently the most exhausting. They generate energy, tension, surprise, and occasionally chaos in proportions that vary by the week. A squad that can hold a Wildcard without trying to fix them gets access to a rare kind of creative friction. A squad that cannot hold them will cycle through them every few months and wonder why they keep leaving.",
    responsibilities: [
      "Injects genuine unpredictability into the squads rhythm",
      "Brings new obsessions, crowds, and ideas into the group orbit",
      "Challenges the squad to not take its own patterns too seriously",
      "Models that identity is allowed to shift over time",
      "Tests the squads capacity to hold someone who will not be managed",
    ],
    strengths: [
      "Keeps the group from settling into a static, predictable identity",
      "Introduces novelty that prevents social stagnation",
      "Often the source of the squads most memorable, unrepeatable nights",
    ],
    weaknesses: [
      "Volatility can erode trust if it swings too far, too often",
      "May unintentionally make the squad feel like a fallback option",
      "Hard to plan around, which strains The Planner over time",
    ],
    compatibility: ["the-chaos-agent", "the-mom-friend", "the-anchor"],
    auditScore: { reliability: 28, funFactor: 90, dramaLevel: 68, loyalty: 50, cohesion: 46 },
    color: "#3B82F6",
  },
  {
    slug: "the-anchor",
    name: "The Anchor",
    emoji: "⚓",
    tagline: "The steady center the whole squad holds onto.",
    description:
      "The Anchor is the squads gravitational center, the person whose presence alone makes the group feel settled. They are not necessarily the loudest or the most organized; they are the most consistent. An Anchor shows up the same way every time: calm, present, and unbothered by the small dramas that ripple through the group. When a conflict breaks out, the Anchor is the one everyone privately hopes will weigh in, because their read is trusted. When someone is spiraling, the Anchor is the one they text, because the Anchor will not make it about themselves. The Anchor does not chase the squad; the squad orbits the Anchor. Squads that lose their Anchor rarely break apart dramatically; they simply start drifting, slowly, until someone new grows into the role or the group fades into separate friendships. The Anchor is the load-bearing wall of the group, and recognizing that matters.",
    responsibilities: [
      "Provides emotional stability that the rest of the squad leans on",
      "Mediates conflicts with calm, trusted judgment",
      "Shows up consistently across years, not just in intense moments",
      "Holds the groups history and identity in a way others can rely on",
      "Models what steady, low-drama friendship actually looks like",
    ],
    strengths: [
      "Reduces the squads collective anxiety through sheer consistency",
      "Trusted enough to mediate conflicts others cannot touch",
      "Often the reason the squad stays together across years of change",
    ],
    weaknesses: [
      "Carries invisible emotional weight that few think to check on",
      "May suppress their own needs to maintain the role others depend on",
      "Can become the scapegoat when the group needs someone to blame",
    ],
    compatibility: ["the-planner", "the-mom-friend", "the-ghost"],
    auditScore: { reliability: 94, funFactor: 54, dramaLevel: 10, loyalty: 92, cohesion: 86 },
    color: "#1E40AF",
  },
];
