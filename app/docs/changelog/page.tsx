import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, GitCommit, Tag, Plus, Bug, Zap, Package } from "lucide-react"

export default function ChangelogPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Changelog</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">Track updates, improvements, and bug fixes</p>
      </div>

      <div className="space-y-8">
        <Card className="p-8 bg-card/50 backdrop-blur border-border/40">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-3">
              <Badge className="bg-primary text-primary-foreground">
                <Tag className="h-3 w-3 mr-1" />
                v0.0.5
              </Badge>
              <Badge variant="outline">Latest</Badge>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              <span>2025-10-18</span>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Plus className="h-5 w-5 text-green-500" />
            New Features
          </h3>
          <ul className="space-y-2 mb-6">
            <li className="flex items-start gap-2">
              <GitCommit className="h-5 w-5 text-green-500 mt-0.5 shrink-0" />
              <span className="leading-relaxed">Added support for discord username checking</span>
            </li>
          </ul>

          <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Bug className="h-5 w-5 text-red-500" />
            Bug Fixes
          </h3>
          <ul className="space-y-2">
            <li className="flex items-start gap-2">
              <GitCommit className="h-5 w-5 text-red-500 mt-0.5 shrink-0" />
              <span className="leading-relaxed">Code optimization</span>
            </li>
          </ul>
        </Card>

        <div className="flex justify-center pt-4">
          <Button variant="outline" asChild>
            <a href="https://github.com/pqpcara/usernames/releases" target="_blank" rel="noopener noreferrer">
              View All Releases on GitHub
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}
