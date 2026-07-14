export interface QuizOption {
  text: string;
  roleScores: Record<string, number>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: QuizOption[];
}

// Role slugs: the-planner, the-chaos-agent, the-mom-friend, the-hype-man,
// the-ghost, the-connector, the-wildcard, the-anchor
export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: "It is 9pm on a Friday. The group chat is dead. What do you do?",
    options: [
      { text: "Drop three restaurant options with reservation links and a poll", roleScores: { "the-planner": 5, "the-anchor": 2 } },
      { text: "Suggest something unhinged like a 2am diner run or a stranger party", roleScores: { "the-chaos-agent": 5, "the-wildcard": 3 } },
      { text: "Text each person individually to check if they are okay", roleScores: { "the-mom-friend": 5, "the-anchor": 2 } },
      { text: "Leave it on read. If they want to do something they will say so", roleScores: { "the-ghost": 5, "the-anchor": 1 } },
    ],
  },
  {
    id: 2,
    question: "Someone in the squad shares that they got a promotion. You respond by...",
    options: [
      { text: "Replying first with caps lock and at least three emojis", roleScores: { "the-hype-man": 5, "the-connector": 2 } },
      { text: "Adding it to the mental file of who is thriving and who is not", roleScores: { "the-planner": 4, "the-anchor": 2 } },
      { text: "Asking how they are actually feeling about it, not just congrats", roleScores: { "the-mom-friend": 5, "the-anchor": 3 } },
      { text: "Seeing it six hours later and liking the message silently", roleScores: { "the-ghost": 5, "the-wildcard": 2 } },
    ],
  },
  {
    id: 3,
    question: "Your squad is planning a weekend trip. Your role naturally becomes...",
    options: [
      { text: "Researching flights, building a shared doc, locking in the Airbnb", roleScores: { "the-planner": 5, "the-anchor": 2 } },
      { text: "Suggesting we skip the plan and just show up wherever feels right", roleScores: { "the-chaos-agent": 5, "the-wildcard": 3 } },
      { text: "Making sure nobody forgets medication, chargers, or their passport", roleScores: { "the-mom-friend": 5, "the-planner": 2 } },
      { text: "Bringing a friend from another city because they would love this", roleScores: { "the-connector": 5, "the-wildcard": 2 } },
    ],
  },
  {
    id: 4,
    question: "Two squad members are in a low-key cold war. How do you handle it?",
    options: [
      { text: "Stay out of it. They will work it out or they will not", roleScores: { "the-ghost": 5, "the-anchor": 1 } },
      { text: "Privately check on both and try to gently broker a conversation", roleScores: { "the-mom-friend": 4, "the-anchor": 4 } },
      { text: "Make a joke so pointed that everyone has to address it", roleScores: { "the-chaos-agent": 4, "the-hype-man": 2 } },
      { text: "Invite them both to something neutral and let proximity do the work", roleScores: { "the-connector": 5, "the-anchor": 3 } },
    ],
  },
  {
    id: 5,
    question: "Which best describes your group chat behavior?",
    options: [
      { text: "I send memes once a month but they always hit", roleScores: { "the-ghost": 5, "the-wildcard": 2 } },
      { text: "I am the first to reply to almost everything and I keep it loud", roleScores: { "the-hype-man": 5, "the-connector": 2 } },
      { text: "I pin the important stuff and clean up the chat when no one asked", roleScores: { "the-planner": 5, "the-mom-friend": 2 } },
      { text: "I introduce new people to the chat regularly", roleScores: { "the-connector": 5, "the-hype-man": 1 } },
    ],
  },
  {
    id: 6,
    question: "A new person wants to join your friend group. Your honest reaction?",
    options: [
      { text: "Yes, immediately, the more the better", roleScores: { "the-connector": 5, "the-hype-man": 3 } },
      { text: "Fine, as long as they do not change the dynamic too much", roleScores: { "the-anchor": 4, "the-planner": 2 } },
      { text: "I will vet them quietly for signs of drama before approving", roleScores: { "the-mom-friend": 4, "the-anchor": 3 } },
      { text: "Cool. I probably will not meet them for six months anyway", roleScores: { "the-ghost": 5, "the-wildcard": 2 } },
    ],
  },
  {
    id: 7,
    question: "Pick the squad memory that sounds most like you.",
    options: [
      { text: "The time everyone got home safe because I planned the logistics", roleScores: { "the-planner": 5, "the-mom-friend": 3 } },
      { text: "The time I convinced everyone to go to a stranger rooftop at 1am", roleScores: { "the-chaos-agent": 5, "the-wildcard": 3 } },
      { text: "The time I stayed up until 4am with someone who was spiraling", roleScores: { "the-mom-friend": 5, "the-anchor": 3 } },
      { text: "The time I was not there but sent one text that became group lore", roleScores: { "the-ghost": 5, "the-hype-man": 2 } },
    ],
  },
  {
    id: 8,
    question: "When plans get canceled last minute, you feel...",
    options: [
      { text: "Mildly devastated because I had already optimized the itinerary", roleScores: { "the-planner": 5, "the-anchor": 2 } },
      { text: "Free. Now we can do something more interesting instead", roleScores: { "the-chaos-agent": 5, "the-wildcard": 4 } },
      { text: "Relieved but worried about who actually wanted to go", roleScores: { "the-mom-friend": 5, "the-anchor": 2 } },
      { text: "Honestly fine, I was not going to leave the house anyway", roleScores: { "the-ghost": 5, "the-wildcard": 2 } },
    ],
  },
  {
    id: 9,
    question: "Your squad is at a party and no one knows anyone else. You...",
    options: [
      { text: "Work the room and come back with three new friends for everyone", roleScores: { "the-connector": 5, "the-hype-man": 2 } },
      { text: "Hype up whoever looks nervous until they relax", roleScores: { "the-hype-man": 5, "the-mom-friend": 2 } },
      { text: "Find the calmest corner and create a home base for the squad", roleScores: { "the-anchor": 5, "the-mom-friend": 2 } },
      { text: "Suggest we leave in 20 minutes for a different, weirder party", roleScores: { "the-chaos-agent": 4, "the-wildcard": 4 } },
    ],
  },
  {
    id: 10,
    question: "How often does the squad actually hear from you directly?",
    options: [
      { text: "Daily. I keep the chat alive and the energy high", roleScores: { "the-hype-man": 5, "the-connector": 3 } },
      { text: "Weekly, usually with a plan or a logistics update", roleScores: { "the-planner": 5, "the-anchor": 2 } },
      { text: "Whenever someone needs something or checks in on me", roleScores: { "the-mom-friend": 4, "the-anchor": 3 } },
      { text: "I disappear for weeks and then send something so good it resets the chat", roleScores: { "the-ghost": 5, "the-wildcard": 3 } },
    ],
  },
  {
    id: 11,
    question: "Someone in the squad is going through a breakup. You...",
    options: [
      { text: "Show up with food and a plan for the next three days", roleScores: { "the-mom-friend": 5, "the-planner": 2 } },
      { text: "Distract them with the most chaotic night of their life", roleScores: { "the-chaos-agent": 5, "the-hype-man": 2 } },
      { text: "Sit with them and say nothing until they are ready to talk", roleScores: { "the-anchor": 5, "the-mom-friend": 3 } },
      { text: "Send one perfect meme two days later that makes them laugh", roleScores: { "the-ghost": 5, "the-wildcard": 2 } },
    ],
  },
  {
    id: 12,
    question: "Be honest. What does the squad actually rely on you for?",
    options: [
      { text: "Being the steady one who never makes anything about themselves", roleScores: { "the-anchor": 5, "the-planner": 2 } },
      { text: "Knowing everyone, everywhere, and making the right introductions", roleScores: { "the-connector": 5, "the-hype-man": 2 } },
      { text: "Making ordinary nights feel like events worth remembering", roleScores: { "the-chaos-agent": 4, "the-hype-man": 4 } },
      { text: "Proving that real friendship does not need daily proof", roleScores: { "the-ghost": 5, "the-anchor": 2 } },
    ],
  },
];
