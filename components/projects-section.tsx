"use client"

import { ExternalLinkIcon, GithubIcon } from "lucide-react"

const projects = [
  {
    title: "Don't Get Crushed By An Avalanche",
    role: "Lead Programmer / Main Scripter",
    description:
      "Developed a high-engagement multiplayer game where players race to climb a mountain while avoiding dynamic avalanches. Implemented a variety of interactive items and mechanics to enhance replayability in a low-poly, round-based design. Focused on smooth, addictive gameplay loops that drove high player retention and monetization. Led the full programming architecture, ensuring responsiveness and stability across rounds.",
    tags: ["DynamicEnvironment", "MonetizationIntegration", "RoundSystem", "ServerAuthoritative"],
    links: { live: "https://www.roblox.com/games/115491566739843/Dont-Get-Crushed-by-an-Avalanche" },
  },
  {
    title: "Spoon Battles",
    role: "Lead Programmer / Main Scripter",
    description:
      "Created a skill-based PvP combat game with fluid, responsive mechanics centered around unique spoons and items. Engineered multiple abilities, inventory, and in-game economy systems, focusing on player-versus-player balance and competitive fairness. Oversaw the entire codebase, optimizing for real-time combat interactions and seamless arena experiences.",
    tags: ["PvPCombat", "MultiplayerNetworking", "GameStateManagement", "SkillBasedMechanics"],
    links: { live: "https://www.roblox.com/games/109032379461991/Spoon-Battles" },
  },
  {
    title: "AFK for UGC",
    role: "Lead Programmer / Main Scripter",
    description:
      "Complete admin panel for managing games in production. Real-time monitoring, player management, analytics and moderation system.",
    tags: ["BackendArchitecture", "ProfileStore", "DataPersistence", "WebhookTracking", "PlayerDataValidation"],
    links: { live: "https://www.roblox.com/games/111837340716801/AFK-For-UGC" },
  },
  {
    title: "Velocity-Based Client-Side Prediction & Latency Compensation System",
    role: "Main System Engineer",
    description:
      "Engineered a high-precision, server-authoritative prediction system for multiplayer PvP, compensating for network latency and ensuring smooth, real-time synchronization of fast-moving entities. The system extrapolates client positions using velocity and movement vectors, minimizing perceived lag for remote players while maintaining deterministic server validation. Optimized for responsiveness in high-speed combat scenarios, it balances accuracy, prediction, and network efficiency, reducing jitter and desync without sacrificing gameplay integrity.",
    tags: ["LatencyCompensation", "ClientSidePrediction", "NetworkOptimization", "EngineLevel", "PredictionSystem"],
    links: { github: "https://github.com/SirLael/roblox/tree/main/portfolioSampleCodes/LatencyCompensationSystem" },
  },
  {
    title: "Combat-Oriented Entity State Architecture",
    role: "Lead Programmer / Main Scripter",
    description:
      "Developed a modular, server-authoritative Entity State Framework with full support for deterministic state transitions, validation, and multi-entity orchestration. Designed for PvP gameplay, enabling clean separation of concerns, extensibility of states, and predictable combat and movement flow.",
    tags: ["StateMachine", "EntitySystem", "ServerAuthoritative", "CombatFlow", "Deterministic"],
    links: { github: "https://github.com/SirLael/roblox/tree/main/portfolioSampleCodes/Combat-OrientedArchitecture" },
  },
  {
    title: "Animator Track Caching System",
    role: "Main Optimization Engineer",
    description:
      "Implemented a lifecycle-aware caching system for Humanoid Animators, preventing redundant animation loading, reducing replication overhead, and avoiding animation track limits in high-combat PvP environments. Designed for memory efficiency and automated cleanup when animators are removed.",
    tags: ["MemoryManagement", "Cache", "ReusableModule", "GameDev", "Performance"],
    links: { github: "https://github.com/SirLael/roblox/blob/main/portfolioSampleCodes/TrackCache.luau" },
  },
  {
    title: "Event-Driven Timer System for PvP gameplay",
    role: "Main System Engineer",
    description:
      "Built a frame-accurate, event-driven Timer System supporting countdown and stopwatch modes, promise-based awaitable timers, and centralized heartbeat updates. Includes full lifecycle management, modularity, and seamless integration with asynchronous gameplay systems.",
    tags: ["Stopwatch", "Promise", "HeartbeatUpdate", "AsyncGameplay", "Countdown"],
    links: { github: "https://github.com/SirLael/roblox/blob/main/portfolioSampleCodes/TimerController.luau" },
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

              <p className="mb-4 text-xs font-mono text-primary/70">{project.role}</p>

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
