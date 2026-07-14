export interface SquadMetric {
  slug: string;
  name: string;
  icon: string;
  color: string;
  shortDescription: string;
  fullDescription: string;
  howToImprove: string[];
  signsOfHealth: string[];
  signsOfProblems: string[];
}

export const squadMetrics: SquadMetric[] = [
  {
    slug: "reliability",
    name: "Reliability",
    icon: "⚙",
    color: "#1E40AF",
    shortDescription:
      "Reliability measures how consistently squad members show up when they say they will. Do they arrive on time? Do they follow through on commitments? A high reliability score means the group can be counted on, which is the foundation of trust. Low reliability creates frustration, forces members to over-plan around flakes, and eventually erodes the sense that the squad is a real commitment rather than a loose option.",
    fullDescription: `Reliability measures how consistently squad members show up when they say they will. It is the most foundational of the five squad health metrics because every other metric depends on it. A group cannot build trust, generate fun, or maintain cohesion if its members cannot predict whether the group will actually materialize when plans are made. Reliability is not the same as frequency. A member who only attends one event per year can still be highly reliable if they always attend that one event, on time, prepared, and present. Reliability is about the gap between what the group expects and what the group actually gets.

## Why Reliability Matters

The sociological literature on trust is consistent: trust is built through repeated, predictable follow-through. Every time a squad member does what they said they would do, the group's collective trust ledger ticks up by one. Every time a member flakes, arrives an hour late, or quietly cancels, the ledger ticks down. Over months and years, the cumulative balance determines whether the group feels like a stable institution or a fragile arrangement that could collapse at any moment. Low-reliability squads eventually force their members to over-plan around the flakes, which converts social life into logistics and slowly kills the fun.

## What a Healthy Score Looks Like

A reliability score above 80 means the squad operates like clockwork. Plans made are plans kept. Members arrive within a reasonable window of the agreed time. When someone has to cancel, they cancel early, not ten minutes after they were supposed to be there. A score between 60 and 80 is healthy but imperfect — the group generally shows up but has one or two members who require constant contingency planning. Below 60, the group has a structural reliability problem that is almost certainly eroding trust faster than the group realizes.

## The Hidden Cost of Low Reliability

The most insidious effect of low reliability is that it punishes the reliable members. The members who always show up on time eventually start to feel like they are the only ones holding the group together, and that feeling is the single biggest predictor of burnout in long-running friend groups. If your audit reveals a low reliability score, the fix is not to shame the flakes. It is to have an honest group conversation about what the current pattern is costing the people who are holding the line.`,
    howToImprove: [
      "Establish a standing weekly or monthly ritual that does not require re-planning every time.",
      "Agree as a group on a cancellation deadline — anything later than 24 hours before counts as a flake.",
      "Stop rescuing flakes by re-planning around them; let the plan stand and let them experience missing out.",
      "Use a shared calendar visible to everyone so commitments are explicit rather than implied.",
      "Have one honest conversation about reliability before it becomes a resentment — most flakes do not know the cost they are imposing.",
      "Praise reliability when you see it; the members who always show up rarely get credit for holding the line.",
    ],
    signsOfHealth: [
      "Plans made are plans kept — members arrive within ten minutes of the agreed time.",
      "Cancellations are rare, early, and accompanied by a real reason, not a vague excuse.",
      "The group can plan something a month out and trust that the same people will be there.",
      "Reliable members do not feel like they are carrying the group.",
    ],
    signsOfProblems: [
      "The same one or two members consistently arrive late or cancel at the last minute.",
      "Plans are routinely re-made on the day-of to accommodate flakes, punishing the punctual.",
      "Members have stopped committing in advance because they assume the plan will change.",
      "The reliable members privately resent the flakes but never raise it.",
    ],
  },
  {
    slug: "fun-factor",
    name: "Fun Factor",
    icon: "🎉",
    color: "#0D9488",
    shortDescription:
      "Fun Factor measures how much joy the group generates without it requiring labor. Are gatherings genuinely enjoyable, or does every good night require one person to spend three hours organizing it? High fun factor keeps people coming back and makes the squad self-sustaining. Low fun factor leads to boredom, declining attendance, and the slow drift where members start finding other groups more compelling.",
    fullDescription: `Fun Factor measures how much joy the group generates without it requiring labor. It is the metric most squads under-rotate on, and it is the one most easily mistaken for a personality trait rather than a group dynamic. A high fun factor means that gathering the squad produces genuine enjoyment as a near-automatic byproduct of the group being in the same room. A low fun factor means every good night requires one person — usually the Planner — to spend three hours organizing it, and the squad is one exhausted planner away from no longer having good nights.

## Fun Is a System, Not a Vibe

The instinct is to treat fun as a mystical property that some groups have and others do not. The research says otherwise. Psychologist William Rawlins, who has studied adult friendship for decades, found that fun in long-running friend groups is almost always the product of two structural conditions: shared context and low-stakes interaction. Shared context means the group has enough common history, inside jokes, and recurring references that humor can be generated cheaply. Low-stakes interaction means members can be together without every hangout being an event that requires planning, money, or emotional bandwidth.

## What a Healthy Score Looks Like

A fun factor score above 80 means the squad can manufacture a memorable evening with zero prep. Someone texts "tonight?" at 6pm and by 8pm the group is laughing about something nobody will remember tomorrow. A score between 60 and 80 means the group is fun when it gets going but requires a catalyst — a holiday, a birthday, a visitor from out of town. Below 60, the group is dependent on external triggers to have fun, which is a fragile arrangement that breaks down the moment life gets busy.

## Why Fun Factor Decays

Fun factor does not usually drop because the members become less fun. It drops because the conditions that produced the fun quietly erode. The inside jokes go stale because the group stops generating new shared experiences. The low-stakes hangouts disappear because the group starts treating every gathering as a production. The fix is rarely to schedule more fun. It is to lower the activation energy required for the group to be in the same room with no agenda. The squads with the highest fun factor are the ones where "nothing" is a recurring calendar entry.`,
    howToImprove: [
      "Lower the activation energy — create recurring no-planning hangouts where 'nothing' is the agenda.",
      "Rotate the role of catalyst so the Planner is not the only one generating momentum.",
      "Generate new shared experiences on purpose; inside jokes need fresh material to stay alive.",
      "Stop turning every hangout into an event with logistics, cost, and a calendar entry.",
      "Identify which two members can manufacture fun on demand and protect their energy.",
      "Track fun retroactively — after a hangout, ask whether it was genuinely enjoyable or just attended.",
    ],
    signsOfHealth: [
      "Someone texts 'tonight?' at 6pm and the group is laughing by 8pm with zero prep.",
      "Hangouts produce new inside jokes rather than recycling the same five from three years ago.",
      "Fun is not dependent on a holiday, birthday, or visitor to trigger it.",
      "Multiple members can generate momentum, not just one exhausted Planner.",
    ],
    signsOfProblems: [
      "Every good night requires one person to spend hours organizing it.",
      "The group only has fun when there is an external occasion.",
      "Inside jokes have gone stale and no new ones are being generated.",
      "Members increasingly suggest skipping gatherings because they feel like work.",
    ],
  },
  {
    slug: "drama-level",
    name: "Drama Level",
    icon: "⚠",
    color: "#DC2626",
    shortDescription:
      "Drama Level measures the amount of unnecessary conflict in the group. Note: this is the only metric where lower is better. A small amount of low-grade friction is normal and even healthy, but high drama exhausts the group, consumes emotional bandwidth, and drives members away. The healthy range is narrow — below 10 means the group is probably avoiding real conversations, above 40 means the group spends more energy managing itself than enjoying itself.",
    fullDescription: `Drama Level measures the amount of unnecessary conflict in the group. It is the only one of the five squad health metrics where lower is not always better and where the healthy range is narrow rather than open-ended. A small amount of low-grade friction is normal and even healthy — it is part of how groups build trust through resolution. But high drama exhausts the group, consumes emotional bandwidth, and drives members away faster than any other single factor. The healthy range is between 15 and 25 out of 100. Below 10 means the group is probably avoiding real conversations. Above 40 means the group spends more energy managing itself than enjoying itself.

## The Counterintuitive Truth About Zero Drama

A squad with zero drama is not actually healthier than a squad with some. Research from psychologist William Rawlins on adult friendship found that low-grade friction, conflict, and reconciliation are part of how groups build durable trust over time. A group that never argues is almost always a group that has learned to swallow disagreements rather than resolve them, and swallowed disagreements compound silently until they break the group from the inside. The absence of drama is often the presence of avoidance.

## What a Healthy Score Looks Like

A drama level between 15 and 25 means the group can have hard conversations without them becoming recurring crises. Disagreements surface, get addressed, and recede. A score between 25 and 40 means the group has recurring friction that members are managing but that is quietly draining energy. Above 40, the group is in a chronic state of internal conflict that is almost certainly driving members to consider leaving, even if no one has said so out loud.

## The Difference Between Healthy Friction and Chronic Drama

Healthy friction is specific, time-bound, and resolvable. Two members disagree about where to go for dinner, they talk about it, they move on. Chronic drama is recurring, structural, and unresolvable. The same conflict surfaces every three months in a slightly different costume, and the group has learned to defuse it rather than resolve it. The diagnostic question is simple: is this conflict new, or is this the same conflict the group has had five times before? If it is the same conflict, the drama is not the problem. The underlying structural issue is the problem, and the drama will keep returning until the group names it and addresses it directly.`,
    howToImprove: [
      "Distinguish between new friction and recurring friction; recurring friction signals a structural issue.",
      "Create a norm where disagreements are addressed within a week rather than swallowed.",
      "Lower the social cost of honesty so members can name problems without being punished.",
      "If the same conflict keeps returning, name the underlying structural issue out loud.",
      "Do not recruit mediators from outside the group to manage internal friction.",
      "Accept that some low-grade friction is healthy; aiming for zero drama is itself a warning sign.",
    ],
    signsOfHealth: [
      "Disagreements surface, get discussed, and recede without becoming recurring crises.",
      "Members can raise hard topics without being frozen out for raising them.",
      "Conflicts are specific and time-bound rather than chronic and structural.",
      "The group spends most of its energy enjoying itself rather than managing itself.",
    ],
    signsOfProblems: [
      "The same conflict resurfaces every few months in a slightly different costume.",
      "Members have learned to defuse tension rather than resolve it.",
      "Honesty is punished — members who raise concerns get quietly frozen out.",
      "The group chat has recurring tensions that everyone tiptoes around.",
    ],
  },
  {
    slug: "loyalty",
    name: "Loyalty",
    icon: "🤝",
    color: "#16A34A",
    shortDescription:
      "Loyalty measures whether members choose the squad when life expands. The test is simple: when someone gets a new partner, a new job, or moves to a new city, do they still make space for the original squad? High loyalty creates a sense of safety and permanence. Low loyalty makes the group feel conditional and fragile, and members begin to hedge their investment because they expect the group to eventually dissolve.",
    fullDescription: `Loyalty measures whether members choose the squad when life expands. It is the metric that quietly holds every other metric up, and it is the one most easily taken for granted until it is gone. The test for loyalty is simple: when a member gets a new partner, a new job, a new city, or a new friend group, do they still make space for the original squad? High loyalty creates a sense of safety and permanence that allows members to invest in the group without hedging. Low loyalty makes the group feel conditional and fragile, and members begin to hedge their investment because they expect the group to eventually dissolve.

## Loyalty Is Not Loyalty Until It Is Tested

Anyone can be loyal when nothing is competing for their time. Real loyalty is measured at the moments of expansion — when a new partner arrives, when a new job consumes bandwidth, when a more exciting friend group starts forming nearby. These are the moments when the squad is most likely to lose a member, and they are the moments when the group's loyalty culture is most visible. A high-loyalty squad has a shared norm that members make space for the group even when life expands. A low-loyalty squad has no such norm, and members quietly drift the moment something shinier appears.

## What a Healthy Score Looks Like

A loyalty score above 80 means members consistently choose the squad across life changes. New partners are introduced to the group within weeks. Moves are followed by scheduled visits. Job changes prompt more attendance, not less. A score between 60 and 80 means the group is mostly loyal but has lost a member or two during recent expansions. Below 60, the group has a structural loyalty problem — members treat the squad as a default rather than a commitment, and the group shrinks every time someone's life improves, which is a paradoxical and painful pattern.

## Why Loyalty Erodes Quietly

Loyalty rarely collapses in a single moment. It erodes through a hundred small decisions to prioritize something else, none of which feel like a betrayal in isolation but which compound into a clear signal that the squad is no longer a priority. The fix is not to demand loyalty, which never works. The fix is to make the squad worth choosing — which means investing in the other four metrics, because a group that is reliable, fun, low-drama, and cohesive is a group that members do not want to lose. Loyalty is not a cause of squad health. It is a consequence of it.`,
    howToImprove: [
      "Introduce new partners to the squad within the first month, not after a year.",
      "Schedule a recurring visit for members who move away before the distance becomes the default.",
      "When life expands for a member, explicitly ask how to keep them in rather than assuming they will leave.",
      "Celebrate members' wins publicly in the group so the squad stays associated with their growth.",
      "Build rituals that survive life changes — a yearly trip, a monthly call, a standing date.",
      "Do not punish members for expanding; make the squad a place they want to bring their new life into.",
    ],
    signsOfHealth: [
      "Members introduce new partners to the group within weeks, not months.",
      "Members who move still show up for the standing rituals.",
      "Job changes and promotions prompt more engagement, not less.",
      "Members do not hedge their investment in the group.",
    ],
    signsOfProblems: [
      "The group quietly loses a member every time someone gets a new partner.",
      "Members who move away fade out within months rather than re-engaging.",
      "Members treat the squad as a default rather than a commitment.",
      "The group shrinks every time someone's life improves.",
    ],
  },
  {
    slug: "cohesion",
    name: "Cohesion",
    icon: "🔗",
    color: "#EAB308",
    shortDescription:
      "Cohesion measures whether the group feels like a unit or just a collection of individuals who happen to know the same person. Does the group have a shared identity, inside jokes, and rituals? High cohesion means the group is more than the sum of its parts and can survive a member leaving. Low cohesion is the hub-and-spoke model — everyone is friends with one central person but not really with each other, and the group collapses the moment the hub leaves.",
    fullDescription: `Cohesion measures whether the group feels like a unit or just a collection of individuals who happen to know the same person. It is the metric most often confused with loyalty, but the two are structurally different. Loyalty is about whether members choose the group when life expands. Cohesion is about whether the group exists as a thing in members' minds at all. A high-cohesion group has its own identity, inside jokes, rituals, and a clear sense of us. A low-cohesion group is a hub-and-spoke model where everyone is friends with one central person but not really with each other, and the group collapses the moment the hub leaves.

## The Common Ingroup Identity Model

In the late 1990s, psychologist Samuel Gaertner and his colleagues proposed the Common Ingroup Identity Model, which says that groups become cohesive when their members shift from thinking of themselves as individuals who happen to be friends to thinking of themselves as members of a single group. The shift is subtle but measurable in language. Cohesive groups use "we" more than "I." They develop shared rituals, shared vocabulary, and shared history. They have a name for themselves, even if the name is never spoken out loud. Groups that never make this shift remain hub-and-spoke collections of individual friendships, and hub-and-spoke groups are structurally fragile.

## What a Healthy Score Looks Like

A cohesion score above 80 means the group has a clear shared identity. Members refer to the squad as a thing. There are rituals, inside jokes, and a felt sense that the group is more than the sum of its parts. A score between 60 and 80 means the group has some cohesion but is still largely organized around one or two central members. Below 60, the group is structurally a hub-and-spoke, and the group chat is probably quieter than it used to be because the spokes have less and less reason to talk to each other directly.

## The Hub-and-Spoke Trap

The hub-and-spoke model is the most common squad structure, and it is also the most fragile. It works beautifully while the hub is engaged, because the hub is the connective tissue that holds every relationship together. But the moment the hub moves, gets busy, or drifts, the spokes discover they have nothing in common with each other except the person who is no longer in the room. The fix for low cohesion is not to recruit new members. It is to build direct relationships between the spokes — group activities that do not route through the hub, shared rituals that belong to the group rather than to the central member. Cohesion is the metric most worth investing in, because it is the one that determines whether the group survives the eventual loss of any single member.`,
    howToImprove: [
      "Build direct relationships between spokes that do not route through the hub.",
      "Create group rituals that belong to the squad, not to one central member.",
      "Develop a shared vocabulary — name the group, name the rituals, name the inside jokes.",
      "Plan activities that require multiple members to interact directly rather than through a coordinator.",
      "Shift the language from 'I am friends with X' to 'we are the squad.'",
      "If the group has a hub, consciously rotate the connective role so no single member is load-bearing.",
    ],
    signsOfHealth: [
      "Members refer to the squad as a thing — 'the squad,' 'the group,' a name.",
      "The group has rituals, inside jokes, and shared history that belong to everyone.",
      "Spokes have direct relationships with each other, not just with the hub.",
      "The group could survive the loss of any single member.",
    ],
    signsOfProblems: [
      "The group is organized around one central person and everyone else is friends with them, not each other.",
      "The group chat is quiet unless the hub initiates.",
      "Members do not have a name for the group or a sense of shared identity.",
      "If the hub left, the spokes would have no reason to gather.",
    ],
  },
];
