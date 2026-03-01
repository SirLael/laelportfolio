export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <span className="font-mono text-xs text-muted-foreground">
          Built with Next.js & TypeScript
        </span>
        <span className="font-mono text-xs text-muted-foreground/50">
          &copy; {new Date().getFullYear()} All rights reserved.
        </span>
      </div>
    </footer>
  )
}
