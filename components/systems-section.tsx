"use client"

import { DatabaseIcon, PackageIcon, ShieldIcon, NetworkIcon, LayersIcon, ZapIcon } from "lucide-react"

const systems = [
  {
    icon: DatabaseIcon,
    name: "DataStore System",
    description: "Persistence system with multi-level caching, compression and automatic schema migration.",
    status: "production",
    tech: "Luau / Redis",
  },
  {
    icon: PackageIcon,
    name: "Inventory System",
    description: "Item management with stacking, customizable metadata, efficient serialization and multiplayer sync.",
    status: "production",
    tech: "Luau / ECS",
  },
  {
    icon: ShieldIcon,
    name: "Admin System",
    description: "Administration panel with granular permissions, audit logs and real-time actions.",
    status: "production",
    tech: "React / Node.js",
  },
  {
    icon: NetworkIcon,
    name: "Networking Layer",
    description: "Optimized networking layer with packet compression, client-side prediction and state reconciliation.",
    status: "production",
    tech: "Luau / UDP",
  },
  {
    icon: LayersIcon,
    name: "UI Framework",
    description: "Declarative UI framework with reactive bindings, dynamic themes and reusable components.",
    status: "beta",
    tech: "Luau / Roact",
  },
  {
    icon: ZapIcon,
    name: "Event System",
    description: "Pub/sub event bus with priorities, middleware, replay and visual debugging.",
    status: "production",
    tech: "TypeScript",
  },
]

export function SystemsSection() {
  return (
    <section id="systems" className="relative py-32">
      {/* Glow */}
      <div className="animate-glow-pulse absolute left-0 top-1/3 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">04.</span>
          <h2 className="text-2xl font-bold text-foreground">Systems Showcase</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {systems.map((system) => (
            <div
              key={system.name}
              className="group relative rounded-lg border border-border bg-card/30 p-5 transition-all hover:border-primary/30 hover:bg-card/60"
            >
              {/* Header */}
              <div className="mb-4 flex items-start justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary/10 text-primary">
                  <system.icon size={20} />
                </div>
                <span
                  className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider ${
                    system.status === "production"
                      ? "border-chart-2/30 text-chart-2"
                      : "border-accent/30 text-accent"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      system.status === "production" ? "bg-chart-2" : "bg-accent"
                    }`}
                  />
                  {system.status}
                </span>
              </div>

              <h3 className="mb-2 font-mono text-sm font-semibold text-foreground">
                {system.name}
              </h3>
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">
                {system.description}
              </p>

              {/* Tech footer */}
              <div className="border-t border-border pt-3">
                <span className="font-mono text-xs text-muted-foreground/60">
                  {system.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
