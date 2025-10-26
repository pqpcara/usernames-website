import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CodeBlock } from "@/components/code-block"

export default function ApiPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">API Reference</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Complete API documentation for @lookups/usernames
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Client</h2>
        <p className="leading-relaxed">The main class for interacting with the username checker API.</p>

        <div className="my-6 not-prose">
          <CodeBlock
            language="typescript"
            code={`import { Client } from "@lookups/usernames";

const client = new Client();`}
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Methods</h2>

        <div className="space-y-8 my-8 not-prose">
          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <code className="text-lg font-mono font-semibold">client.discord(username)</code>
              <Badge variant="secondary">async</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">Check if a username is available on Discord.</p>

            <div className="space-y-2 text-sm mb-6">
              <div>
                <span className="font-semibold">Parameters:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <code className="text-xs bg-muted px-2 py-1 rounded">username</code>{" "}
                    <span className="text-muted-foreground">(string) - The username to check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Returns:</span>
                <p className="text-muted-foreground mt-1">Promise&lt;UsernameCheckResult&gt;</p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const result = await client.discord("coolgamer");
console.log(result);`}
              output={`{
  platform: "discord",
  username: "coolgamer",
  available: true,
  message: "Username is available on Discord"
}`}
            />
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <code className="text-lg font-mono font-semibold">client.github(username)</code>
              <Badge variant="secondary">async</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">
              Check if a username is available on GitHub. Includes suggestions for unavailable usernames.
            </p>

            <div className="space-y-2 text-sm mb-6">
              <div>
                <span className="font-semibold">Parameters:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <code className="text-xs bg-muted px-2 py-1 rounded">username</code>{" "}
                    <span className="text-muted-foreground">(string) - The username to check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Returns:</span>
                <p className="text-muted-foreground mt-1">Promise&lt;UsernameCheckResult&gt;</p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const result = await client.github("torvalds");
console.log(result);`}
              output={`{
  platform: "github",
  username: "torvalds",
  available: false,
  message: "Username is not available on GitHub",
  suggestions: "torvalds1, torvalds-dev, torvalds2024"
}`}
            />
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <code className="text-lg font-mono font-semibold">client.instagram(username)</code>
              <Badge variant="secondary">async</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">Check if a username is available on Instagram.</p>

            <div className="space-y-2 text-sm mb-6">
              <div>
                <span className="font-semibold">Parameters:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <code className="text-xs bg-muted px-2 py-1 rounded">username</code>{" "}
                    <span className="text-muted-foreground">(string) - The username to check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Returns:</span>
                <p className="text-muted-foreground mt-1">Promise&lt;UsernameCheckResult&gt;</p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const result = await client.instagram("photographer");
console.log(result);`}
              output={`{
  platform: "instagram",
  username: "photographer",
  available: false,
  message: "Username is not available on Instagram"
}`}
            />
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <code className="text-lg font-mono font-semibold">client.roblox(username)</code>
              <Badge variant="secondary">async</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">Check if a username is available on Roblox.</p>

            <div className="space-y-2 text-sm mb-6">
              <div>
                <span className="font-semibold">Parameters:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <code className="text-xs bg-muted px-2 py-1 rounded">username</code>{" "}
                    <span className="text-muted-foreground">(string) - The username to check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Returns:</span>
                <p className="text-muted-foreground mt-1">Promise&lt;UsernameCheckResult&gt;</p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const result = await client.roblox("builderman");
console.log(result);`}
              output={`{
  platform: "roblox",
  username: "builderman",
  available: false,
  message: "Username is not available on Roblox"
}`}
            />
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur border-border/40">
            <div className="flex items-center gap-3 mb-4">
              <code className="text-lg font-mono font-semibold">client.minecraft(username)</code>
              <Badge variant="secondary">async</Badge>
            </div>
            <p className="text-muted-foreground mb-4 leading-relaxed">Check if a username is available on Minecraft.</p>

            <div className="space-y-2 text-sm mb-6">
              <div>
                <span className="font-semibold">Parameters:</span>
                <ul className="mt-2 ml-4 space-y-1">
                  <li>
                    <code className="text-xs bg-muted px-2 py-1 rounded">username</code>{" "}
                    <span className="text-muted-foreground">(string) - The username to check</span>
                  </li>
                </ul>
              </div>
              <div className="mt-4">
                <span className="font-semibold">Returns:</span>
                <p className="text-muted-foreground mt-1">Promise&lt;UsernameCheckResult&gt;</p>
              </div>
            </div>

            <CodeBlock
              language="typescript"
              code={`const result = await client.minecraft("Notch");
console.log(result);`}
              output={`{
  platform: "minecraft",
  username: "Notch",
  available: false,
  message: "Username is not available on Minecraft"
}`}
            />
          </Card>
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Error Handling</h2>
        <p className="leading-relaxed">Handle errors gracefully when checking usernames:</p>

        <div className="my-6 not-prose">
          <CodeBlock
            language="typescript"
            code={`try {
  const result = await client.discord("username");
  
  if (result.available) {
    console.log("Username is available!");
  } else {
    console.log("Username is taken");
  }
} catch (error) {
  console.error("Error checking username:", error);
}`}
          />
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-4">Batch Checking</h2>
        <p className="leading-relaxed">Check username availability across multiple platforms:</p>

        <div className="my-6 not-prose">
          <CodeBlock
            language="typescript"
            code={`const username = "myusername";

const results = await Promise.all([
  client.discord(username),
  client.github(username),
  client.instagram(username),
  client.roblox(username),
  client.minecraft(username)
]);

results.forEach(result => {
  console.log(\`\${result.platform}: \${result.available ? "✓" : "✗"}\`);
});`}
            output={`discord: ✓
github: ✗
instagram: ✓
roblox: ✗
minecraft: ✓`}
          />
        </div>
      </div>
    </div>
  )
}
