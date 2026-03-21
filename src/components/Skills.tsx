"use client";

import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Languages",
    hoverDot: "group-hover:bg-accent",
    hoverText: "group-hover:text-accent",
    borderColor: "border-l-accent",
    iconBg: "bg-accent/10",
    dotColor: "bg-accent",
    iconColor: "text-accent",
    skills: ["Python", "TypeScript", "Java", "C/C++", "JavaScript", "Go", "SQL", "PHP"],
  },
  {
    title: "Frameworks & Web",
    hoverDot: "group-hover:bg-sage",
    hoverText: "group-hover:text-sage",
    borderColor: "border-l-sage",
    iconBg: "bg-sage/10",
    dotColor: "bg-sage",
    iconColor: "text-sage",
    skills: ["React", "Next.js", "Node.js", "Django", "Flask", "REST APIs", "GraphQL", "Tailwind"],
  },
  {
    title: "Data & Databases",
    hoverDot: "group-hover:bg-lavender",
    hoverText: "group-hover:text-lavender",
    borderColor: "border-l-lavender",
    iconBg: "bg-lavender/10",
    dotColor: "bg-lavender",
    iconColor: "text-lavender",
    skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "DuckDB", "Kafka", "ETL Pipelines"],
  },
  {
    title: "ML & Visualization",
    hoverDot: "group-hover:bg-warm-highlight",
    hoverText: "group-hover:text-warm-highlight",
    borderColor: "border-l-warm-highlight",
    iconBg: "bg-warm-highlight/10",
    dotColor: "bg-warm-highlight",
    iconColor: "text-warm-highlight",
    skills: ["PyTorch", "Scikit-Learn", "Pandas", "NumPy", "OpenCV", "Hugging Face", "LangChain"],
  },
  {
    title: "Tools & Infra",
    hoverDot: "group-hover:bg-sky",
    hoverText: "group-hover:text-sky",
    borderColor: "border-l-sky",
    iconBg: "bg-sky/10",
    dotColor: "bg-sky",
    iconColor: "text-sky",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Git", "Linux", "Terraform", "Protobuf"],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  }),
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-36 overflow-hidden">
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-lavender/[0.03] to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-gradient-to-bl from-sage/[0.03] to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16"
        >
          <p className="text-lavender font-mono text-sm tracking-[0.2em] uppercase mb-4">
            <span className="inline-block w-8 h-px bg-lavender mr-3 align-middle" />
            Skills
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter">
            What I work with
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              custom={catIndex}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`bg-card rounded-2xl border border-border/60 ${category.borderColor} border-l-[3px] p-8 hover:border-border transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-7">
                <div
                  className={`w-8 h-8 rounded-lg ${category.iconBg} flex items-center justify-center`}
                >
                  <div className={`w-2 h-2 rounded-full ${category.dotColor}`} />
                </div>
                <h3 className={`text-sm font-mono tracking-[0.15em] uppercase ${category.iconColor}`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: catIndex * 0.1 + skillIndex * 0.04,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                    className="flex items-center gap-3 group cursor-default"
                  >
                    <span
                      className={`w-1.5 h-1.5 rounded-full bg-border ${category.hoverDot} transition-colors duration-200`}
                    />
                    <span
                      className={`text-foreground-muted ${category.hoverText} transition-colors duration-200`}
                    >
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
