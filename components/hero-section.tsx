"use client"

import { useEffect, useState } from "react"

const codeLines = [
  "function StateMachine.new(): StateMachine",
  "\tlocal self = setmetatable({}, StateMachine)",
  "",
  "\tself._domains = StatesConfig",
  "\tself._currentStates = {}",
  "\tself._connections = {}",
  "",
  "\tfor domain, domainConfig in pairs(StatesConfig :: StateMachineTypes.StatesConfig) do",
  "\t\tlocal initial = domainConfig.Initial",
  "\t\tlocal states = domainConfig.States",
  "",
  "\t\tif states[initial] ~= true then",
  "\t\t\twarn(",
  "\t\t\t\t`[StateMachine] Invalid initial state on Domain \"{domain}\": {initial}`",
  "\t\t\t)",
  "\t\telse",
  "\t\t\tself._currentStates[domain] = initial",
  "\t\t\tself._connections[domain] = FastSignal.new()",
  "\t\tend",
  "\tend",
  "",
  "\treturn self :: StateMachineTypes.StateMachine",
  "end",
]

export function HeroSection() {
  const [visibleLines, setVisibleLines] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= codeLines.length) return prev
        return prev + 1
      })
    }, 150)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden">
      {/* Grid background */}
      <div className="grid-bg absolute inset-0 opacity-40" />

      {/* Glow orb */}
      <div className="animate-glow-pulse absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[120px]" />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center gap-16 px-6 pt-24 lg:flex-row lg:items-center lg:pt-0">
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5">
            <span className="h-2 w-2 rounded-full bg-primary animate-glow-pulse" />
            <span className="font-mono text-xs text-muted-foreground">
              Available for projects
            </span>
          </div>

          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground md:text-6xl lg:text-7xl">
            Game Programmer
            <span className="block text-primary">& Backend Engineer</span>
          </h1>

          <p className="mt-6 max-w-lg text-pretty leading-relaxed text-muted-foreground md:text-lg">
            Backend-focused Roblox developer specializing in scalable systems,
            DataStores, and secure server-authoritative architecture.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-mono text-sm text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-[0_0_20px_oklch(0.65_0.2_285_/_0.3)]"
            >
              View Projects
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 17 5-5-5-5"/><path d="m13 17 5-5-5-5"/></svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-mono text-sm text-secondary-foreground transition-colors hover:border-primary/50 hover:text-primary"
            >
              Contact
            </a>
          </div>
        </div>

        {/* Right - Decorative code block */}
        <div className="hidden flex-1 lg:block">
          <div className="relative rounded-lg border border-border bg-card/80 p-1 backdrop-blur-sm">
            {/* Terminal header */}
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-destructive/60" />
              <span className="h-3 w-3 rounded-full bg-chart-4/60" />
              <span className="h-3 w-3 rounded-full bg-chart-2/60" />
              <span className="ml-4 font-mono text-xs text-muted-foreground">engine.ts</span>
            </div>

            {/* Code content */}
            <div className="p-4 font-mono text-sm leading-relaxed">
              {codeLines.map((line, i) => (
                <div
                  key={i}
                  className="flex transition-opacity duration-300"
                  style={{ opacity: i < visibleLines ? 1 : 0 }}
                >
                  <span className="mr-4 w-6 text-right text-muted-foreground/40 select-none">
                    {i + 1}
                  </span>
                  <span>
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

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs text-muted-foreground/50">scroll</span>
          <div className="h-8 w-px bg-border" />
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
  ]

  const types = [
    "StateMachine",
    "StateMachineTypes",
  ]

  const tokens = line.split(/(\s+|[{}()[\]:.=<>~]|"[^"]*"|`[^`]*`)/)

  return tokens.map((token, i) => {
    if (keywords.includes(token)) {
      return <span key={i} className="text-primary">{token}</span>
    }

    if (types.includes(token)) {
      return <span key={i} className="text-accent">{token}</span>
    }

    if (token.startsWith('"') || token.startsWith("`")) {
      return <span key={i} className="text-chart-2">{token}</span>
    }

    if (token === "--" || token.startsWith("--")) {
      return <span key={i} className="text-muted-foreground/50">{token}</span>
    }

    return <span key={i} className="text-foreground/80">{token}</span>
  })
}
