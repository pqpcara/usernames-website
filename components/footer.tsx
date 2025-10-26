import Link from "next/link"
import { Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container px-4 md:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <span className="font-mono text-lg font-bold text-primary-foreground">L</span>
              </div>
              <span className="font-mono font-semibold">@lookups/usernames</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Fast username availability checker for multiple platforms
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Documentation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/docs" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/installation"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Installation
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/examples"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Examples
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/api"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  API Reference
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Platforms</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Discord</li>
              <li className="text-sm text-muted-foreground">GitHub</li>
              <li className="text-sm text-muted-foreground">Instagram</li>
              <li className="text-sm text-muted-foreground">Roblox</li>
              <li className="text-sm text-muted-foreground">Minecraft</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-3">Community</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/pqpcara/usernames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors inline-flex items-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.npmjs.com/package/@lookups/usernames"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  NPM Package
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">© 2025 @lookups/usernames. MIT License.</p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/pqpcara/usernames/releases"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Changelog
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
