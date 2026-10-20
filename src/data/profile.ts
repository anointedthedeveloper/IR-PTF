// Everything personal lives here. Edit this file and the whole site updates.

export const profile = {
  name: "Agunloye Ayomipo Testimony",
  shortName: "Ayomipo Agunloye",
  monogram: "AT",

  // Contact details. Anything left empty is hidden on the site.
  email: "Joyfultestimony14@gmail.com", // shows an email button and enables the mailto fallback
  phone: "+234 815 399 1658", // shown as a call card
  whatsapp: "2348153991658", // digits only with country code
  linkedin: "https://ng.linkedin.com/in/agunloye-testimony-ayomipo-a8a771267",
  cvUrl: "", // e.g. "/Agunloye-Ayomipo-CV.pdf" (put the file in /public)
  // Free form backend: get a key at https://web3forms.com (enter her email there).
  // With a key, the form delivers straight to her inbox without opening an email app.
  web3formsKey: import.meta.env.VITE_WEB3FORMS_KEY ?? "",

  role: "International Relations graduate",
  openTo: ["Graduate roles", "Fellowships", "Research collaborations"],

  specializations: [
    {
      title: "Diplomacy",
      body: "The craft of representing interests and building relationships across borders, cultures and institutions, where tone, timing and trust matter as much as the argument.",
      topics: ["Foreign policy", "Statecraft", "Multilateralism", "Protocol"],
    },
    {
      title: "Negotiation Skills",
      body: "Moving from positions to interests: preparing carefully, listening closely and designing agreements that every side can live with and actually keep.",
      topics: ["Interest-based bargaining", "Persuasion", "Mediation", "Strategic communication"],
    },
    {
      title: "Peace & Conflict Resolution",
      body: "Understanding why conflicts start, escalate and end, and what makes peace last once the talking is over.",
      topics: ["Conflict analysis", "Peacebuilding", "Dialogue", "Post-conflict recovery"],
    },
  ],

  experience: [
    {
      role: "Intern",
      org: "National Assembly Service Commission",
      place: "Abuja, Nigeria",
      date: "August 2025",
      stamp: "AUG 2025",
      summary:
        "An internship placement inside the National Assembly Service Commission, a first-hand look at how a public institution at the heart of Nigeria's legislature actually runs.",
      takeaways: [
        "Saw how a legislative-support institution works day to day",
        "Practised formal, professional communication and protocol",
        "Connected academic training to real public-sector practice",
      ],
    },
  ],

  principles: [
    {
      title: "Listen first",
      body: "Good negotiators ask more than they tell. Understanding what the other side truly needs opens doors that force never will.",
    },
    {
      title: "Interests over positions",
      body: "Behind every demand sits a need. Finding it turns a zero-sum argument into a problem both sides want to solve.",
    },
    {
      title: "Peace is a process",
      body: "Lasting peace is built through trust, institutions and patience. It is rarely signed away in a single day.",
    },
  ],

  toolkit: [
    { icon: "ear", title: "Active listening", body: "Hearing what is meant, not only what is said." },
    { icon: "globe", title: "Cross-cultural fluency", body: "Reading context before drawing conclusions." },
    { icon: "scales", title: "Structured argument", body: "Clear, fair, evidence-led reasoning on paper and aloud." },
    { icon: "search", title: "Research & analysis", body: "Turning complex events into clear, usable insight." },
    { icon: "handshake", title: "Mediation mindset", body: "Finding the overlap between opposing interests." },
    { icon: "shield", title: "Discretion & protocol", body: "Handling formal settings and sensitive matters with care." },
  ],

  about: [
    "I'm an International Relations graduate drawn to the moments when people at odds choose to talk. My focus is diplomacy, negotiation and peace and conflict resolution: how disagreements are managed, how trust is built, and how agreements hold.",
    "In August 2025 I interned at the National Assembly Service Commission in Abuja, which gave me a close view of public institutions at work. I'm now looking to put that training to work through graduate roles, fellowships and research in diplomacy, negotiation and peacebuilding.",
  ],

  peace: [
    "Peace", "Alaafia", "Paix", "Amani", "Paz", "Udo", "Frieden", "Shalom", "Salaam", "Zaman lafiya", "和平",
  ],
};

export const nav = [
  { id: "focus", label: "Focus" },
  { id: "experience", label: "Experience" },
  { id: "world", label: "World" },
  { id: "approach", label: "Approach" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

export const initials = profile.monogram;
