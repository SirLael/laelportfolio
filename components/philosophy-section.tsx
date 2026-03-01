const principles = [
  {
    number: "01",
    title: "Separation of Concerns",
    description:
      "Each module, service and system should have a single, well-defined responsibility. This makes testing, maintenance and independent evolution of each part of the system easier.",
  },
  {
    number: "02",
    title: "Data-Driven Design",
    description:
      "Behaviors and configurations should be defined by data, not code. This enables rapid iteration, gameplay hot-reload and separation between designers and engineers.",
  },
  {
    number: "03",
    title: "Resilience by Design",
    description:
      "Systems should be built to fail gracefully. Retry policies, circuit breakers, fallbacks and graceful degradation are a fundamental part of the architecture.",
  },
  {
    number: "04",
    title: "Performance as a Feature",
    description:
      "Optimization is not an afterthought. Continuous profiling, performance budgets and automated benchmarks ensure the code stays fast as it evolves.",
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
