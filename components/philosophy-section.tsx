const principles = [
  {
    number: "01",
    title: "Server-Authoritative Backend",
    description:
      "I design systems with a strictly server-authoritative model. Clients are treated as input devices, not trusted entities. All critical validation happens server-side to ensure security, consistency, and exploit resistance.",
  },
  {
    number: "02",
    title: "Separation of Concerns",
    description:
      "Systems are structured around clear responsibility boundaries. Each module or service handles a single well-defined concern, reducing coupling, improving readability, and allowing safe scaling of complex projects.",
  },
  {
    number: "03",
    title: "Modular Framework-Oriented Design",
    description:
      "Core systems are built as independent, reusable modules. I design services and frameworks rather than isolated scripts, integrating with structured architectures such as Knit when required to maintain consistency and scalability.",
  },
  {
    number: "04",
    title: "Bootstrap & Loader Pattern",
    description:
      "Every project begins with a controlled initialization flow. Centralized bootstrappers on both server and client handle service loading, dependency initialization, correct startup ordering, and race condition prevention.",
  },
  {
    number: "05",
    title: "Strict Typing & Explicit Contracts",
    description:
      "I prioritize strict typing and explicit system definitions. Clear interfaces, typed data structures, and predictable return contracts reduce ambiguity, prevent runtime errors, and improve long-term maintainability.",
  },
  {
    number: "06",
    title: "Backend-First Mentality",
    description:
      "Game mechanics are built on strong backend foundations. Before focusing on visuals, I ensure scalable state management, optimized datastore usage, structured networking flow, and reliable signal communication.",
  },
  {
    number: "07",
    title: "Signal-Based & Event-Driven Communication",
    description:
      "Internal communication is handled through structured signals and event-driven patterns. Modules communicate intentionally and explicitly, avoiding hidden dependencies and unpredictable side effects.",
  },
  {
    number: "08",
    title: "Performance & Optimization Awareness",
    description:
      "Performance is considered during system design, not after deployment. I actively optimize loop efficiency, memory usage, datastore frequency, replication strategy, and network payload size to ensure scalable and responsive gameplay.",
  },
]

const codeBlock = `-- Architecture Pattern Example
local SystemManager = {}
SystemManager.__index = SystemManager

function SystemManager.new()
    return setmetatable({
        _systems = {},
        _running = false,
        _tickRate = 1/60,
    }, SystemManager)
end

function SystemManager:register(system)
    assert(system.update, "System must implement update()")
    table.insert(self._systems, system)
    return self
end

function SystemManager:start()
    self._running = true
    while self._running do
        local dt = task.wait(self._tickRate)
        for _, system in self._systems do
            system:update(dt)
        end
    end
end`

export function PhilosophySection() {
  return (
    <section id="philosophy" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">05.</span>
          <h2 className="text-2xl font-bold text-foreground">Architecture Philosophy</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Principles */}
          <div className="flex flex-col gap-8">
            {principles.map((principle) => (
              <div key={principle.number} className="group">
                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-xs text-primary/60">{principle.number}</span>
                  <h3 className="text-lg font-semibold text-foreground">{principle.title}</h3>
                </div>
                <p className="pl-9 text-sm leading-relaxed text-muted-foreground">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>

          {/* Code block */}
          <div className="relative">
            <div className="sticky top-24 rounded-lg border border-border bg-card/50">
              {/* Terminal header */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-destructive/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-4/60" />
                <span className="h-2.5 w-2.5 rounded-full bg-chart-2/60" />
                <span className="ml-3 font-mono text-xs text-muted-foreground">
                  system-manager.lua
                </span>
              </div>

              <pre className="overflow-x-auto p-5 font-mono text-xs leading-relaxed text-foreground/80 md:text-sm">
                <code>{codeBlock}</code>
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
