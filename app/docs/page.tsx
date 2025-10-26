import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { ArrowRight, Package, Zap } from "lucide-react"

export default function DocsPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Introduction</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Fast username availability checker for multiple platforms
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <p className="text-lg leading-relaxed">
          <strong>@lookups/usernames</strong> is a fast and reliable npm package that allows you to check username
          availability across multiple platforms including Discord, GitHub, Instagram, Roblox, and Minecraft.
        </p>

        <div className="grid md:grid-cols-2 gap-4 my-8 not-prose">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <Package className="h-8 w-8 text-primary mb-3" />
            <h3 className="text-lg font-semibold mb-2">Easy Installation</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Install via npm, pnpm, or yarn and start using immediately
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/docs/installation">
                Install Now
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <Zap className="h-8 w-8 text-accent mb-3" />
            <h3 className="text-lg font-semibold mb-2">Quick Start</h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Simple API with TypeScript support and comprehensive examples
            </p>
            <Button variant="outline" size="sm" asChild>
              <Link href="/docs/examples">
                View Examples
                <ArrowRight className="ml-2 h-3 w-3" />
              </Link>
            </Button>
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Features</h2>
        <ul className="space-y-2">
          <li>✅ Support for Discord, GitHub, Instagram, Roblox, and Minecraft</li>
          <li>✅ Full TypeScript support with type definitions</li>
          <li>✅ Fast and reliable API responses</li>
          <li>✅ Parallel username checking capabilities</li>
          <li>✅ Username suggestions for unavailable names (GitHub)</li>
          <li>✅ ESM and CommonJS support</li>
        </ul>

        <h2 className="text-2xl font-bold mt-12 mb-4">Quick Example</h2>
        <CodeBlock
          title="Getting Started"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();

async function main() {
  const discord = await client.discord("alwayswealthy");
  const github = await client.github("pqpcara");
  
  console.log(discord);
  console.log(github);
}

main();`}
          output={`{
  "platform": "discord",
  "username": "alwayswealthy",
  "available": false,
  "message": "Username alwayswealthy is not available."
}
{
  "platform": "github",
  "username": "pqpcara",
  "available": false,
  "suggestions": "pqpcara-dev, pqpcara2, or pqpcara232 are available.",
  "message": "Username pqpcara is not available."
}`}
        />
      </div>
    </div>
  )
}
