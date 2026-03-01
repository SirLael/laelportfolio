import { TerminalIcon, CodeIcon, ServerIcon } from "lucide-react"

const stats = [
  { label: "Years of Experience", value: "8+" },
  { label: "Projects Delivered", value: "30+" },
  { label: "Systems Built", value: "50+" },
]

const highlights = [
  {
    icon: CodeIcon,
    title: "Game Development",
    description: "Complex gameplay systems, AI and real-time performance optimization.",
  },
  {
    icon: ServerIcon,
    title: "Backend Engineering",
    description: "Microservices, distributed databases and scalable architectures.",
  },
  {
    icon: TerminalIcon,
    title: "DevOps & Tools",
    description: "CI/CD pipelines, containerization, monitoring and infrastructure automation.",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="relative py-32">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section header */}
        <div className="mb-16 flex items-center gap-4">
          <span className="font-mono text-sm text-primary">01.</span>
          <h2 className="text-2xl font-bold text-foreground">About Me</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-16 lg:grid-cols-5">
          {/* Text content */}
          <div className="lg:col-span-3">
            <p className="text-pretty leading-relaxed text-muted-foreground md:text-lg">
              I am a software developer with over 8 years of programming experience, specializing in Luau and backend game systems architecture. I began programming at an early age as a self-taught developer, driven by curiosity about how systems work and how logic can be used to create interactive experiences. Since then, programming has evolved from a personal interest into my primary professional focus. I later completed a 2-year Programming and Robotics certification at CTRL+PLAY, where I worked with languages such as C#, C++, and Java, and built my first structured game projects. I also completed a 200-hour C programming course at Federal University of São Paulo, strengthening my understanding of low-level programming, memory, and computational logic. Currently, I am pursuing a Bachelor’s degree in Computer Science at Instituto Mauá de Tecnologia, further deepening my knowledge of algorithms, systems design, and software engineering principles.
            </p>
            <p className="mt-6 text-pretty leading-relaxed text-muted-foreground md:text-lg">
              My primary expertise is in Roblox game development, particularly backend systems, data persistence, and scalable architecture. I design modular, strictly typed systems that prioritize maintainability, performance, and clarity. My workflow includes structured bootstrapping, clear client-server boundaries, and organized module architecture, allowing projects to scale safely and efficiently. I approach programming not just as implementation, but as systems engineering—designing reliable foundations that enable complex and polished gameplay experiences. I am currently open to collaborating with studios and creators who value high-quality architecture, reliability, and long-term scalability.
            </p>

            {/* Stats */}
            <div className="mt-12 grid grid-cols-3 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center lg:text-left">
                  <div className="font-mono text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Highlight cards */}
          <div className="flex flex-col gap-4 lg:col-span-2">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="group rounded-lg border border-border bg-card/50 p-5 transition-all hover:border-primary/30 hover:bg-card"
              >
                <div className="mb-3 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-md bg-primary/10 text-primary">
                    <item.icon size={18} />
                  </div>
                  <h3 className="font-mono text-sm font-medium text-foreground">{item.title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
