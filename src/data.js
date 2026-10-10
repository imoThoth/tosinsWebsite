// All the CV content lives here, so you can edit text without touching the layout.

export const hero = {
  name: "Tosin Adeoyo",
  role: "Java Backend Engineer",
  focus: "Cloud & Distributed Systems",
  blurb: "4+ years building Java and Spring microservices for policing, airlines and trading desks. Greenwich, London.",
  stamp: "Case file 0526",
  nowPlaying: "now playing: backend systems, loud",
};

export const contact = {
  email: "a.tosin14@gmail.com",
  heading: "Next episode: us?",
  pitch: "Open to backend and distributed systems work. Email is the fastest way in.",
  signOff: "Greenwich, London. Transmission ends.",
};

export const ticker = ["Java 17/21", "Spring Boot", "Kafka", "Kubernetes", "AWS", "Kotlin", "TypeScript", "PostgreSQL", "Docker", "Elasticsearch", "Jenkins", "React"];

export const stats = [
  { big: "4+", label: "years shipping", color: "bg-pink text-line" },
  { big: "4", label: "sectors", color: "bg-cyan text-line" },
  { big: "3", label: "story arcs", color: "bg-lime text-line" },
  { big: "AWS", label: "certified", color: "bg-violet text-paper" },
];

// Newest first.
export const arcs = [
  {
    arc: "Arc 3", when: "08/2024 – Present", title: "NTT DATA", sub: "Java Developer · Client: UK Home Office", color: "bg-cyan",
    intro: "Embedded in NTT DATA's delivery team, building critical backend services for national policing and Home Office operations.",
    groups: [
      { name: "Persons-of-Interest Tracking Service", items: [
        "Built a Spring Boot service (Java 17) that ingests EDI files from regional police forces and turns them into structured records flagging people as wanted, missing or of interest.",
        "Designed Kafka event pipelines so a record updated by one force reaches every other UK force in near real-time.",
        "Aggregated fragmented regional records into one consolidated view for cross-jurisdiction investigations.",
        "Containerised with Docker; PostgreSQL with jOOQ for type-safe SQL.",
      ] },
      { name: "Document Distribution Platform", items: [
        "Engineered a high-throughput service routing large volumes of reports to the right Home Office departments, on demand and on schedule.",
        "Used Kafka streams and queues to decouple producers from consumers and absorb bursty workloads without data loss.",
        "Ran workloads on Kubernetes with cron-scheduled jobs and Amazon S3 as the document store.",
        "Automated CI/CD with Jenkins on AWS.",
      ] },
    ],
    tags: ["Java 17", "Spring Boot", "Kafka", "Kubernetes", "PostgreSQL", "S3"],
  },
  {
    arc: "Arc 2", when: "07/2022 – 08/2024", title: "NTT DATA", sub: "Java Developer · Client: British Airways", color: "bg-yellow",
    intro: "Services touching millions of passenger journeys: check-in, identity, baggage, boarding and Executive Club.",
    groups: [
      { name: null, items: [
        "Delivered Spring Boot microservices moving Executive Club / Avios from a distance-flown model to a revenue-based one.",
        "Built a passport-scan service (Java, Spring, AWS, React) in the BA app so passengers verify travel documents at home.",
        "Delivered baggage scan and retrieval workflows on AWS Lambda.",
        "Delivered a boarding-pass retrieval service in TypeScript on AWS Lambda.",
        "Implemented SOAP integrations with legacy systems, JMeter performance testing and Jenkins database deployments.",
        "Built Splunk dashboards and presented performance metrics to product owners and stakeholders.",
      ] },
    ],
    tags: ["Spring Boot", "AWS Lambda", "TypeScript", "React", "SOAP", "Splunk"],
  },
  {
    arc: "Arc 1", when: "11/2020 – 06/2022", title: "Citi", sub: "Full Stack Developer · Equity Options trading desk", color: "bg-lime",
    intro: "Tools and surveillance pipelines used directly by traders.",
    groups: [
      { name: null, items: [
        "Designed and deployed an API streaming trader logs into Elasticsearch (Kotlin / Ktor, TypeScript / Axios) for the desk's trade surveillance pipeline.",
        "Built a real-time options volatility chart (React, TypeScript, Redux, Java) plotting 24-hour trends from live market data.",
        "Fixed usability bugs raised by live desk users in the trading app's React/TypeScript frontend and extended production services.",
      ] },
    ],
    tags: ["Kotlin", "Ktor", "Elasticsearch", "React", "Redux", "Java"],
  },
];

export const shelves = [
  { label: "Languages & frameworks", items: ["Java 17/21", "Kotlin", "TypeScript", "Spring Boot", "Dropwizard", "React"] },
  { label: "APIs & integration", items: ["REST (JAX-RS, Jersey)", "SOAP", "Jackson", "Layered architecture"] },
  { label: "Messaging & events", items: ["Apache Kafka", "Event-driven pipelines", "Async data flows"] },
  { label: "Build & deploy", items: ["Kubernetes", "Docker", "OpenShift", "AWS Lambda", "AWS S3", "Jenkins", "Maven", "UrbanCode Deploy"] },
  { label: "Testing", items: ["JUnit", "Mockito", "Cucumber BDD", "Apache JMeter"] },
  { label: "Data & storage", items: ["PostgreSQL / jOOQ", "Elasticsearch", "SLF4J"] },
];

export const credits = [
  { from: "Certification", what: "AWS Certified Cloud Practitioner" },
  { from: "British Computer Society", what: "Software Development Methodologies Apprenticeship" },
  { from: "University of West London", what: "Accounting and Finance (Foundation Year)" },
  { from: "Christ the King Sixth Form", what: "A Levels: Psychology, Business Studies" },
];

// The `slots` are placeholders: replace each string with your real picks.
export const interests = {
  anime: { title: "Anime", tagline: "Big arcs, bigger power-ups.", slots: ["favourite series", "best arc", "watching now"] },
  conspiracy: { title: "Conspiracy theories", tagline: "For the storytelling. Mostly.", slots: ["favourite rabbit hole", "one you half believe"] },
  books: { title: "Books", tagline: "Always mid-chapter in something.", slots: ["reading now", "all-time favourite", "up next"] },
  music: { title: "Music", tagline: "Nothing gets built in silence.", slots: ["on repeat", "coding soundtrack", "top artist"] },
};