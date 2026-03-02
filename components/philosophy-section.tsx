"use client"

import { useEffect, useState } from "react"

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

const codeLines = [
  "--!strict",
  "--@Big_Honor | sirlael",
  "",
  "local ServerScriptService = game:GetService(\"ServerScriptService\")",
  "local ServerCombatSystem = ServerScriptService:WaitForChild(\"ServerCombatSystem\")",
  "",
  "local Configs = ServerCombatSystem:WaitForChild(\"Configs\")",
  "local Types = ServerCombatSystem:WaitForChild(\"Types\")",
  "",
  "local StatesConfig = require(Configs:WaitForChild(\"StatesConfig\"))",
  "local StateMachineTypes = require(Types:WaitForChild(\"StateMachineTypes\"))",
  "",
  "local ReplicatedStorage = game:GetService(\"ReplicatedStorage\")",
  "local FastSignal = require(ReplicatedStorage.SharedCombatSystem.Utils.FastSignal)",
  "",
  "local StateMachine = {}",
  "StateMachine.__index = StateMachine",
  "",
  "function StateMachine.new(): StateMachine",
  "    local self = setmetatable({}, StateMachine)",
  "",
  "    self._domains = StatesConfig",
  "    self._currentStates = {}",
  "    self._connections = {}",
  "",
  "    for domain, domainConfig in pairs(StatesConfig :: StateMachineTypes.StatesConfig) do",
  "        local initial = domainConfig.Initial",
  "        local states = domainConfig.States",
  "",
  "        if states[initial] ~= true then",
  "            warn(`[StateMachine] Invalid initial state on Domain \"{domain}\": {initial}`)",
  "        else",
  "            self._currentStates[domain] = initial",
  "            self._connections[domain] = FastSignal.new()",
  "        end",
  "    end",
  "",
  "    return self :: StateMachineTypes.StateMachine",
  "end",
  "",
  "function StateMachine:SetState(domain: DomainName, newState: StateName): boolean",
  "    local domainConfig = self._domains[domain]",
  "    if domainConfig == nil then",
  "        warn(`[StateMachine] Invalid domain: {domain}`)",
  "        return false",
  "    end",
  "",
  "    local states = domainConfig.States",
  "    if states[newState] ~= true then",
  "        return false",
  "    end",
  "",
  "    self._currentStates[domain] = newState",
  "    self._connections[domain]:Fire(newState)",
  "    return true",
  "end",
  "",
  "return StateMachine",
]

export function PhilosophySection() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) {
          clearInterval(interval)
          return prev
        }
        return prev + 1
      })
    }, 80)

    return () => clearInterval(interval)
  }, [])

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
                  StateMachine.luau
                </span>
              </div>

              <div className="p-4 font-mono text-sm leading-relaxed overflow-x-auto whitespace-pre">
                {codeLines.map((line, i) => (
                  <div
                    key={i}
                    className="flex transition-opacity duration-300"
                    style={{ opacity: i < visibleLines ? 1 : 0 }}
                  >
                    <span className="mr-4 w-6 text-right text-muted-foreground/40 select-none">
                      {i + 1}
                    </span>
                    <span className="whitespace-pre">
                      {formatCodeLine(line)}
                    </span>
                  </div>
                ))}

                <div className="flex">
                  <span className="mr-4 w-6" />
                  <span className="animate-terminal-blink inline-block h-5 w-2 bg-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function formatCodeLine(line: string) {
  if (!line.trim()) return <span>&nbsp;</span>

  const keywords = [
    "function",
    "local",
    "return",
    "if",
    "then",
    "else",
    "elseif",
    "end",
    "for",
    "in",
    "do",
    "true",
    "false",
    "nil",
    "export",
  ]

  const types = [
    "StateMachine",
    "StateMachineTypes",
    "DomainName",
    "StateName",
  ]

  const tokens = line.split(/(\s+|[{}()[\]:.=<>~,]|::|"[^"]*"|`[^`]*`)/)

  return tokens.map((token, i) => {
    if (token.startsWith("--")) {
      return <span key={i} className="text-muted-foreground/50">{token}</span>
    }

    if (keywords.includes(token)) {
      return <span key={i} className="text-primary">{token}</span>
    }

    if (types.includes(token)) {
      return <span key={i} className="text-accent">{token}</span>
    }

    if (token.startsWith('"') || token.startsWith("`")) {
      return <span key={i} className="text-chart-2">{token}</span>
    }

    return <span key={i} className="text-foreground/80">{token}</span>
  })
}
