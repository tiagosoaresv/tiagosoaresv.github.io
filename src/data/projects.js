// Centralized projects data
const projects = [
  {
    slug: "spotaa-eu",
    title: "spotaa.eu",
    externalUrl: "https://spotaa.eu",
    summary:
      "Full-stack OOH platform: real-time billboard booking, media asset management, and modular campaign planning.",
    body: [
      "Spotaa is a composable OOH (out‑of‑home) advertising platform designed for speed and clarity. The core experience focuses on fast inventory search, transparent pricing, and predictable booking flows.",
      "I built a typed backend (tRPC + Prisma + PostgreSQL) with clean domain boundaries and a minimal front‑end surface that keeps the UI crisp under load. Media uploads are processed and versioned; availability is computed on the fly with caching where it compounds.",
      "Operationally, the system favors small, auditable actions and clear states. The result is a premium, low‑noise product that scales with teams and campaigns without getting in the way.",
    ],
    images: ["/spotaa.png", "/work/p1-2.svg"],
  },
];

export default projects;
