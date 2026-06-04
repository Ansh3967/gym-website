export type Service = {
  slug: string;
  title: string;
  img: string;
  tagline: string;
  description: string;
  whyItMatters: string[];
  examples: { name: string; story: string }[];
  benefits: string[];
};

export const services: Service[] = [
  {
    slug: "physical-fitness",
    title: "Physical Fitness",
    img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    tagline: "Build a body that keeps up with your life.",
    description:
      "Physical fitness is the foundation of everything you do — climbing stairs without losing breath, carrying your groceries in one trip, or playing with your kids without your back protesting. Our coaches build balanced programs that mix cardio, mobility, and strength so your body works the way you need it to, every single day.",
    whyItMatters: [
      "Improves heart, lung and joint health long term.",
      "Boosts daily energy and mental sharpness.",
      "Reduces risk of lifestyle diseases like diabetes and hypertension.",
    ],
    examples: [
      {
        name: "Aarav, 34 — Software Engineer",
        story:
          "Used to feel exhausted after a workday. After 3 months of guided fitness sessions, he now cycles 15km on weekends and sleeps deeper than ever.",
      },
      {
        name: "Priya, 41 — Mother of two",
        story:
          "Started with 20-minute mobility flows. Six months in, she ran her first 5K with her daughter cheering at the finish line.",
      },
    ],
    benefits: ["Better posture", "More stamina", "Improved sleep", "Stronger immunity"],
  },
  {
    slug: "weight-gain",
    title: "Weight Gain",
    img: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?auto=format&fit=crop&w=1200&q=80",
    tagline: "Gain quality mass — not just numbers on a scale.",
    description:
      "Healthy weight gain is about adding lean muscle, not just calories. We pair progressive resistance training with a structured nutrition plan so the weight you put on makes you stronger, fuller, and more confident — not sluggish.",
    whyItMatters: [
      "Underweight bodies often face fatigue and weaker immunity.",
      "Lean muscle improves metabolism and hormonal balance.",
      "Confidence and presence grow with a fuller frame.",
    ],
    examples: [
      {
        name: "Rohan, 22 — College student",
        story:
          "At 54kg he felt invisible in photos. With compound lifts and 5 meals a day, he reached 68kg of lean mass in 7 months.",
      },
      {
        name: "Sana, 27 — Recovering from illness",
        story:
          "Lost 9kg after surgery. A gentle strength + nutrition plan helped her rebuild safely without digestive stress.",
      },
    ],
    benefits: ["Lean muscle", "Stronger bones", "Better appetite", "Visible definition"],
  },
  {
    slug: "strength-training",
    title: "Strength Training",
    img: "https://images.unsplash.com/photo-1599058917212-d750089bc07e?auto=format&fit=crop&w=1200&q=80",
    tagline: "Lift heavy. Live lighter.",
    description:
      "Strength training rewires how your body handles load — from deadlifting a barbell to picking up a sleeping child. Our programs focus on safe progressive overload, perfect form, and the kind of strength you can actually use outside the gym.",
    whyItMatters: [
      "Protects joints and prevents injuries as you age.",
      "Increases bone density — especially important for women.",
      "Raises resting metabolism so you burn more even at rest.",
    ],
    examples: [
      {
        name: "Kabir, 38 — Office worker",
        story:
          "Chronic lower back pain disappeared 8 weeks after starting structured deadlifts and hip work.",
      },
      {
        name: "Meera, 52",
        story:
          "Started with 2kg dumbbells. A year later she squats her bodyweight and climbed Triund without stopping.",
      },
    ],
    benefits: ["Joint stability", "Bone density", "Functional power", "Confidence"],
  },
  {
    slug: "fat-loss",
    title: "Fat Loss",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=1200&q=80",
    tagline: "Lose fat without losing your life.",
    description:
      "Fat loss isn't about starving — it's about building a sustainable routine your body actually responds to. We combine smart training, walkable habits, and a flexible nutrition approach so you lose fat steadily and keep it off without bouncing back.",
    whyItMatters: [
      "Reduces risk of heart disease, diabetes and joint pain.",
      "Improves mobility, breathing, and energy.",
      "Restores hormonal balance and mental clarity.",
    ],
    examples: [
      {
        name: "Vikram, 45",
        story:
          "Dropped 14kg in 9 months without crash diets. Still enjoys his Sunday biryani — just portioned smarter.",
      },
      {
        name: "Anjali, 30 — New mom",
        story:
          "Shed post-pregnancy weight with 30-min home circuits 4x a week while her baby napped.",
      },
    ],
    benefits: ["Reduced waistline", "More energy", "Better mood", "Improved bloodwork"],
  },
  {
    slug: "weightlifting",
    title: "Weightlifting",
    img: "https://images.unsplash.com/photo-1517963879433-6ad2b056d712?auto=format&fit=crop&w=1200&q=80",
    tagline: "Master the bar. Master yourself.",
    description:
      "Olympic-style weightlifting is equal parts strength, speed, and precision. Our certified coaches teach you the snatch and clean & jerk from the ground up — building athletic power that translates into every sport and every confident step.",
    whyItMatters: [
      "Builds explosive full-body power unlike any other discipline.",
      "Trains coordination, balance, and mental focus.",
      "Highly competitive — sharpens discipline and goal-setting.",
    ],
    examples: [
      {
        name: "Dev, 19 — Aspiring athlete",
        story:
          "Joined as a beginner. Within a year, hit a 100kg clean & jerk and qualified for state-level competition.",
      },
      {
        name: "Ritika, 28",
        story:
          "Found weightlifting after burnout from cardio. Says lifting heavy is the best therapy she's tried.",
      },
    ],
    benefits: ["Explosive power", "Total-body strength", "Athletic skill", "Mental grit"],
  },
  {
    slug: "running",
    title: "Running",
    img: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1200&q=80",
    tagline: "One step. Then another. Then a thousand.",
    description:
      "Running is the simplest, most honest workout there is — but doing it right takes coaching. We help you build mileage safely, fix your form, and chase your first 5K, 10K, or marathon without injuries derailing the journey.",
    whyItMatters: [
      "Boosts cardiovascular endurance and lung capacity.",
      "Releases endorphins — nature's anti-anxiety medicine.",
      "Costs nothing and travels with you anywhere.",
    ],
    examples: [
      {
        name: "Neha, 26",
        story:
          "Couldn't run 500m without stopping. Followed our 12-week plan and finished the Mumbai Half Marathon.",
      },
      {
        name: "Arjun, 50",
        story:
          "Started slow jogging post-heart-checkup. Today runs 5km five mornings a week and feels two decades younger.",
      },
    ],
    benefits: ["Heart health", "Mental clarity", "Endurance", "Weight management"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const getServiceBySlug = getService;
