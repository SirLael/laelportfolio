"use client"

import { ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects = [
  {
    title: "RPG Framework",
    description:
      "Complete RPG game framework with inventory, quests, dialogues and combat systems. Modular component-based architecture with hot-reload configuration.",
    tags: ["Luau", "Roblox", "ECS", "OOP"],
    links: { github: "#", live: "#" },
  },
  {
    title: "Multiplayer Backend",
    description:
      "Backend infrastructure for real-time multiplayer games. Matchmaking system, state replication, anti-cheat and data persistence with high availability.",
    tags: ["TypeScript", "Node.js", "Redis", "WebSocket"],
    links: { github: "#", live: "#" },
  },
  {
    title: "Admin Dashboard",
    description:
      "Complete admin panel for managing games in production. Real-time monitoring, player management, analytics and moderation system.",
    tags: ["React", "Next.js", "PostgreSQL", "REST API"],
    links: { github: "#", live: "#" },
  },
  {
    title: "DataStore Service",
    description:
      "Data persistence service with multi-layered caching, automatic retry, incremental backup and zero-downtime schema migration.",
    tags: ["Luau", "Redis", "Data Structures"],
    links: { github: "#" },
  },
]

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">03.</span>
          <h2 className="text-2xl font-bold text-foreground">Featured Projects</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <article
              key={project.title}
              className="group relative flex flex-col rounded-lg border border-border bg-card/30 p-6 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              {/* Terminal-like header */}
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-primary/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-accent/40" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="ml-2 font-mono text-xs text-muted-foreground">
                  ~/{project.title.toLowerCase().replace(/\s/g, "-")}
                </span>
              </div>

              <h3 className="mb-2 text-lg font-semibold text-foreground transition-colors group-hover:text-primary">
                {project.title}
              </h3>

              <p className="mb-6 flex-1 text-sm leading-relaxed text-muted-foreground">
                {project.description}
              </p>

              {/* Tags */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-md bg-primary/10 px-2.5 py-1 font-mono text-xs text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-4">
                {project.links.github && (
                  <a
                    href={project.links.github}
                    className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} source code on GitHub`}
                  >
                    <GithubIcon size={16} />
                    <span className="font-mono text-xs">Code</span>
                  </a>
                )}
                {project.links.live && (
                  <a
                    href={project.links.live}
                    className="flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-primary"
                    aria-label={`View ${project.title} live demo`}
                  >
                    <ExternalLinkIcon size={16} />
                    <span className="font-mono text-xs">Live</span>
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
