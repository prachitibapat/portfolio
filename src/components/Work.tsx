"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    company: "Easley Dunn Productions",
    role: "Lead Software Engineer",
    period: "Dec 2025 — Present",
    location: "Los Angeles, CA",
    bullets: [
      "Enhanced a Kanboard Gantt plugin using PHP, JavaScript, and DHTMLX Gantt, turning the default timeline into an interactive planning interface used by 4-5 teams (~50+ users) across ~10 projects.",
      "Implemented backend endpoints and validation logic to persist task creation, updates, and dependency links while blocking circular and invalid dependencies.",
      "Added sprint-aware planning workflows including inline sprint creation, child-task assignment, and milestone handling with automatic schedule recalculation.",
      "Built advanced planning controls — timeline zoom, grouping by assignee/category/sprint, workload views, and visual legends for project visibility.",
      "Contributed 22 commits across 27 files, touching 5,316 lines of code (4,024 added / 1,292 removed) over a 2-month window.",
    ],
    tags: ["PHP", "JavaScript", "DHTMLX Gantt", "Kanboard", "REST APIs"],
    borderClass: "border-l-accent",
    glowClass: "from-accent/10",
    tagClass: "text-accent",
    titleColor: "text-accent",
    shimmer: "via-accent/10",
    hoverBorder: "hover:border-accent/30",
    hoverShadow: "hover:shadow-accent/5",
  },
  {
    company: "Lux Vitae",
    role: "Founding Software Engineer",
    period: "Jun 2025 — Dec 2025",
    location: "Los Angeles, CA",
    bullets: [
      "Designed and implemented D-Bus APIs in C/C++ connecting gesture detection services, AI assistants, and GNOME UI components in a modular Linux OS architecture.",
      "Implemented ~10-15 D-Bus endpoints across 3-4 services enabling cross-service communication with a real-time gesture pipeline processing ~30-60 events/sec at <50ms UI latency.",
      "Migrated inter-service messaging from JSON to Protobuf, reducing message size by 40-60% and improving serialization latency by ~20-30%.",
      "Built a gesture-driven application launcher using GNOME Shell extensions (GJS/JavaScript) enabling hands-free navigation.",
      "Contributed ~6K-9K lines across D-Bus interfaces, GNOME extension UI, serialization modules, and gesture routing within a 4-6 engineer startup team.",
    ],
    tags: ["C/C++", "D-Bus", "Protobuf", "GNOME", "Linux", "GJS"],
    borderClass: "border-l-sage",
    glowClass: "from-sage/10",
    tagClass: "text-sage",
    titleColor: "text-sage",
    shimmer: "via-sage/10",
    hoverBorder: "hover:border-sage/30",
    hoverShadow: "hover:shadow-sage/5",
  },
  {
    company: "Amazon",
    role: "Software Development Engineering Intern",
    period: "May 2024 — Aug 2024",
    location: "Seattle, WA",
    bullets: [
      "Designed and built a Java-based ingestion pipeline integrating Amazon\u2019s POG warehouse planning system with the GOAT monitoring platform for Amazon Fresh operations.",
      "Implemented data transformation and schema mapping logic to normalize datasets (CSV to structured records) with schema-flexible ingestion supporting future system onboarding.",
      "Added 3+ audit metadata fields for change traceability, integrated with AWS S3 storage for validated persistence across ingestion stages.",
      "Delivered the end-to-end project independently during a 3-month internship — from system analysis and schema design to implementation, testing, and validation.",
    ],
    tags: ["Java", "AWS", "S3", "Data Pipelines", "ETL"],
    borderClass: "border-l-lavender",
    glowClass: "from-lavender/10",
    tagClass: "text-lavender",
    titleColor: "text-lavender",
    shimmer: "via-lavender/10",
    hoverBorder: "hover:border-lavender/30",
    hoverShadow: "hover:shadow-lavender/5",
  },
];

export default function Work() {
  return (
    <section id="experience" className="relative py-36">
      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <p className="text-accent font-mono text-sm tracking-[0.2em] uppercase mb-4">
              <span className="inline-block w-8 h-px bg-accent mr-3 align-middle" />
              Experience
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
              Where I&apos;ve worked
            </h2>
          </div>
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="hidden md:block w-10 h-10 border border-lavender/20 rounded-lg"
          />
        </motion.div>

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                delay: index * 0.12,
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              <motion.div
                whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 20 } }}
                className={`group relative bg-card rounded-2xl border border-border/60 ${exp.borderClass} border-l-[3px] p-8 md:p-10 ${exp.hoverBorder} ${exp.hoverShadow} hover:shadow-xl transition-all duration-400 overflow-hidden`}
              >
                {/* Base glow */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${exp.glowClass} to-transparent pointer-events-none`}
                />

                {/* Shimmer sweep on hover */}
                <div
                  className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent ${exp.shimmer} to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out pointer-events-none`}
                />

                <div className="relative">
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-5">
                    <div>
                      <div className="flex items-center gap-3 mb-1">
                        <span className={`font-mono text-xs tracking-wider ${exp.tagClass}`}>
                          0{index + 1}
                        </span>
                        <span className="w-6 h-px bg-border group-hover:w-10 transition-all duration-300" />
                      </div>
                      <h3 className={`text-2xl md:text-3xl font-semibold tracking-tight ${exp.titleColor}`}>
                        {exp.company}
                      </h3>
                      <p className="text-foreground-muted mt-1">{exp.role}</p>
                    </div>
                    <div className="text-right hidden md:block shrink-0">
                      <p className="text-sm text-foreground-muted">{exp.period}</p>
                      <p className="text-xs text-foreground-muted/60">{exp.location}</p>
                    </div>
                  </div>

                  <p className="text-sm text-foreground-muted md:hidden mb-4">
                    {exp.period} &middot; {exp.location}
                  </p>

                  <ul className="space-y-2 mb-5">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i} className="flex gap-3 text-foreground-muted text-sm leading-relaxed text-justify">
                        <span className={`w-1 h-1 rounded-full ${exp.tagClass.replace("text-", "bg-")} mt-2 shrink-0`} />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`px-3 py-1.5 text-xs font-mono rounded-full border border-border/60 ${exp.tagClass}/70`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
