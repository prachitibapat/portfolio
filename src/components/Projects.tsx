"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "View Materialization in DuckDB",
    period: "Aug 2024 — Dec 2024",
    description:
      "Extended DuckDB\u2019s query engine to support persistent materialized views for analytical queries with aggregations (COUNT, SUM, AVG). Designed parser extensions, catalog metadata structures, and a cost-aware optimization strategy.",
    highlight: "~98.6% improvement in query efficiency on TPC-H/TPC-DS benchmarks",
    tags: ["DuckDB", "C++", "SQL", "TPC-H", "TPC-DS"],
    color: "accent",
  },
  {
    title: "UAV Navigation with Reinforcement Learning",
    period: "Jan 2024 — May 2024",
    description:
      "Developed a custom RL environment for autonomous drone navigation using Gymnasium and Microsoft AirSim. Trained a DDPG agent with CNN policy integrating Artificial Potential Field navigation for obstacle avoidance.",
    highlight: "Goal-directed navigation with visual observations from drone camera feeds",
    tags: ["Python", "AirSim", "Stable-Baselines3", "DDPG", "Gymnasium"],
    color: "sage",
  },
  {
    title: "Travel Recommendation & Route Optimizer",
    period: "Aug 2022 — May 2023",
    description:
      "Built a tourist recommendation system for 5 cities (~600 locations) with web-scraped data. Implemented and compared multiple optimization algorithms — Genetic Algorithm, Tabu Search, Simulated Annealing, and Ant Colony Optimization.",
    highlight: "Route visualization on OpenStreetMap via OSMnx + NetworkX",
    tags: ["Python", "BeautifulSoup", "Folium", "OSMnx", "Google APIs"],
    color: "lavender",
  },
];

const colorMap: Record<string, { border: string; tag: string; highlight: string; glow: string }> = {
  accent: {
    border: "border-l-accent",
    tag: "text-accent",
    highlight: "text-accent",
    glow: "from-accent/10",
  },
  sage: {
    border: "border-l-sage",
    tag: "text-sage",
    highlight: "text-sage",
    glow: "from-sage/10",
  },
  lavender: {
    border: "border-l-lavender",
    tag: "text-lavender",
    highlight: "text-lavender",
    glow: "from-lavender/10",
  },
};

export default function Projects() {
  return (
    <section id="projects" className="relative py-36 bg-background-secondary overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-bl from-accent/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-warm-highlight font-mono text-sm tracking-[0.2em] uppercase mb-4">
            <span className="inline-block w-8 h-px bg-warm-highlight mr-3 align-middle" />
            Projects
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            Academic work
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project, index) => {
            const c = colorMap[project.color];
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  delay: index * 0.12,
                  duration: 0.7,
                  ease: [0.22, 1, 0.36, 1],
                }}
                whileHover={{ y: -4 }}
                className={`group relative bg-card rounded-2xl border border-border/60 ${c.border} border-l-[3px] p-8 hover:border-border transition-all duration-300 overflow-hidden`}
              >
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${c.glow} to-transparent pointer-events-none`}
                />

                <div className="relative space-y-4">
                  <div className="flex items-center justify-between">
                    <span className={`font-mono text-xs tracking-wider ${c.tag}`}>
                      0{index + 1}
                    </span>
                    <span className="text-xs text-foreground-muted/50 font-mono">
                      {project.period}
                    </span>
                  </div>

                  <h3 className={`text-xl font-semibold tracking-tight ${c.tag}`}>
                    {project.title}
                  </h3>

                  <p className="text-foreground-muted text-sm leading-relaxed text-justify">
                    {project.description}
                  </p>

                  <p className={`text-sm font-medium ${c.highlight}`}>
                    {project.highlight}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-mono rounded-full border border-border/60 ${c.tag}/70`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
