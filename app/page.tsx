import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Check, Zap, Shield, Code2 } from "lucide-react"
import Link from "next/link"
import { CodeBlock } from "@/components/code-block"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-border/40">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(120,119,198,0.15),transparent_50%),radial-gradient(circle_at_70%_60%,rgba(74,222,128,0.1),transparent_50%)]" />

          <div className="container relative px-6 md:px-8 py-20 md:py-24 lg:py-32">
            <div className="mx-auto max-w-3xl text-center space-y-8 md:space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full border border-border/40 bg-muted/50 px-4 py-2 text-sm backdrop-blur">
                <Zap className="h-4 w-4 text-accent" />
                <span className="text-muted-foreground">Fast & Reliable Username Checking</span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                Check Username Availability Across <span className="text-primary">Multiple Platforms</span>
              </h1>

              <p className="text-lg md:text-lg lg:text-xl text-muted-foreground leading-relaxed text-balance">
                Fast username availability checker for Discord, GitHub, Instagram, Roblox, and Minecraft. Simple API,
                TypeScript support, and lightning-fast responses.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-4">
                <Button size="lg" asChild className="w-full sm:w-auto text-base">
                  <Link href="/docs">
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="w-full sm:w-auto bg-transparent text-base">
                  <a href="https://github.com/pqpcara/usernames" target="_blank" rel="noopener noreferrer">
                    View on GitHub
                  </a>
                </Button>
              </div>

              <div className="pt-8 md:pt-8">
                <pre className="inline-block text-left bg-card border border-border/40 rounded-lg p-4 md:p-4 text-sm md:text-sm font-mono backdrop-blur overflow-x-auto max-w-full">
                  <code className="text-foreground whitespace-nowrap">npm install @lookups/usernames</code>
                </pre>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/40 py-20 md:py-24">
          <div className="container px-6 md:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="text-center mb-16 md:mb-16">
                <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-4 md:mb-4">
                  Why Choose @lookups/usernames?
                </h2>
                <p className="text-lg md:text-lg text-muted-foreground text-balance">
                  Built for developers who need reliable username checking
                </p>
              </div>

              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 md:gap-8">
                <Card className="p-8 bg-card/50 backdrop-blur border-border/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-5">
                    <Zap className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Optimized API calls with minimal overhead. Check multiple usernames in parallel with ease.
                  </p>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur border-border/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-accent/10 mb-5">
                    <Shield className="h-7 w-7 text-accent" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Type Safe</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Full TypeScript support with comprehensive type definitions for all platforms.
                  </p>
                </Card>

                <Card className="p-8 bg-card/50 backdrop-blur border-border/40">
                  <div className="flex h-14 w-14 items-center justify-center rounded-lg bg-primary/10 mb-5">
                    <Code2 className="h-7 w-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Simple API</h3>
                  <p className="text-base text-muted-foreground leading-relaxed">
                    Clean, intuitive API design. Get started in minutes with minimal configuration.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="border-b border-border/40 py-20 md:py-24">
          <div className="container px-6 md:px-8">
            <div className="mx-auto max-w-5xl">
              <div className="grid lg:grid-cols-2 gap-12 md:gap-12 items-center">
                <div>
                  <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-6">Supported Platforms</h2>
                  <p className="text-lg md:text-lg text-muted-foreground mb-8 md:mb-8 leading-relaxed">
                    Check username availability across the most popular platforms with a single, unified API.
                  </p>

                  <ul className="space-y-4 md:space-y-4">
                    {["Discord", "GitHub", "Instagram", "Roblox", "Minecraft"].map((platform) => (
                      <li key={platform} className="flex items-center gap-3">
                        <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/10">
                          <Check className="h-4 w-4 text-primary" />
                        </div>
                        <span className="text-foreground font-medium text-base">{platform}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="overflow-x-auto">
                  <CodeBlock
                    language="ts"
                    code={`import { Client } from "@lookups/usernames";

const client = new Client();

const discord = await client.discord("username");
const github = await client.github("username");
const instagram = await client.instagram("username");

console.log(discord.available);
console.log(github.suggestions);`}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 md:py-24">
          <div className="container px-6 md:px-8">
            <div className="mx-auto max-w-3xl text-center space-y-8 md:space-y-8">
              <h2 className="text-3xl sm:text-3xl md:text-4xl font-bold">Ready to Get Started?</h2>
              <p className="text-lg md:text-lg text-muted-foreground leading-relaxed">
                Install the package and start checking username availability in minutes
              </p>
              <Button size="lg" asChild className="w-full sm:w-auto text-base">
                <Link href="/docs">
                  Read the Documentation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
