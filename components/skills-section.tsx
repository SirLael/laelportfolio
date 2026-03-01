"use client"

import { SettingsIcon, ServerIcon, CpuIcon, WrenchIcon, GamepadIcon } from "lucide-react"

const skillCategories = [
  {
    icon: ServerIcon,
    title: "Backend",
    skills: ["Lua/Luau", "Java", "Python", "C", "C#", "C++", "Ruby"],
  },
  {
    icon: SettingsIcon,
    title: "Core Systems",
    skills: ["DataStore architeture", "Data Serialization", "Combat", "Currency", "Modular Systems", "NPC Features"],
  },
  {
    icon: CpuIcon,
    title: "Architecture",
    skills: ["Microservices", "Event-Driven", "Loaders/Boostrap Systems", "Domain-Driven Design", "Server Authoritative Design"],
  },
  {
    icon: GamepadIcon,
    title: "Gameplay Systems",
    skills: ["ECS", "State Machines", "AI Behavior Trees", "Data Management", "Networking", "Replication"],
  },
  {
    icon: WrenchIcon,
    title: "Tools",
    skills: ["Knit Framework", "Git", "Rojo", "VS Code", "Roblox Studio", "Luau LSP", "Unity"],
  },
]

export function SkillsSection() {
  return (
    <section id="skills" className="relative py-32">
      {/* Subtle glow */}
      <div className="animate-glow-pulse absolute right-0 top-1/2 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">02.</span>
          <h2 className="text-2xl font-bold text-foreground">Skills & Expertise</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group relative rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              {/* Icon + title */}
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                  <category.icon size={20} />
                </div>
                <h3 className="font-mono text-sm font-semibold tracking-wide text-foreground">
                  {category.title}
                </h3>
              </div>

              {/* Skills tags */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex rounded-md border border-border bg-secondary/50 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors group-hover:border-primary/20 group-hover:text-secondary-foreground"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
