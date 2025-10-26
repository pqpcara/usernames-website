import { Button } from "@/components/ui/button"
import { CodeBlock } from "@/components/code-block"
import Link from "next/link"
import { ArrowRight, Github, Instagram, Gamepad2, Box } from "lucide-react"
import { FaDiscord } from "react-icons/fa"

export default function ExamplesPage() {
  return (
    <div className="max-w-4xl">
      <div className="space-y-2 mb-8">
        <h1 className="text-4xl font-bold tracking-tight">Examples</h1>
        <p className="text-xl text-muted-foreground leading-relaxed">
          Learn how to check username availability across different platforms
        </p>
      </div>

      <div className="prose prose-neutral dark:prose-invert max-w-none">
        <h2 className="text-2xl font-bold mb-4">Quick Start</h2>
        <p className="leading-relaxed">Import the Client and start checking usernames in seconds:</p>

        <CodeBlock
          title="Basic Usage"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.github("pqpcara");

console.log(result);`}
          output={`{
  "platform": "github",
  "username": "pqpcara",
  "available": false,
  "suggestions": "pqpcara-dev, pqpcara2, or pqpcara232 are available.",
  "message": "Username pqpcara is not available."
}`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <FaDiscord className="h-7 w-7 text-[#5865F2]" />
          Discord
        </h2>
        <p className="leading-relaxed">Check if a username is available on Discord:</p>

        <CodeBlock
          title="Discord Example"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.discord("alwayswealthy");

if (result.available === true) {
  console.log(\`✓ Username "\${result.username}" is available!\`);
} else if (result.available === false) {
  console.log(\`✗ Username "\${result.username}" is taken\`);
  if (result.suggestions) {
    console.log(\`Suggestions: \${result.suggestions}\`);
  }
} else {
  console.log(\`? Could not determine: \${result.message}\`);
}`}
          output={`✗ Username "alwayswealthy" is taken
Suggestions: alwayswealthy2, alwayswealthy_dev, or alwayswealthy123 are available.`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Github className="h-7 w-7" />
          GitHub
        </h2>
        <p className="leading-relaxed">Check GitHub username availability and get suggestions:</p>

        <CodeBlock
          title="GitHub Example"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.github("pqpcara");

console.log(\`Platform: \${result.platform}\`);
console.log(\`Username: \${result.username}\`);
console.log(\`Available: \${result.available}\`);
console.log(\`Message: \${result.message}\`);`}
          output={`Platform: github
Username: pqpcara
Available: false
Message: Username pqpcara is not available.`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Instagram className="h-7 w-7 text-[#E4405F]" />
          Instagram
        </h2>
        <p className="leading-relaxed">Verify Instagram username availability:</p>

        <CodeBlock
          title="Instagram Example"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.instagram("muitaura");

if (result.available) {
  console.log("Username is available! Claim it now.");
} else {
  console.log("Username is already taken.");
}`}
          output={`Username is already taken.`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Box className="h-7 w-7 text-[#00D26A]" />
          Minecraft
        </h2>
        <p className="leading-relaxed">Check Minecraft (Java Edition) username availability:</p>

        <CodeBlock
          title="Minecraft Example"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.minecraft("Notch");

console.log(result);`}
          output={`{
  "platform": "minecraft",
  "username": "Notch",
  "available": false,
  "message": "Username Notch is not available."
}`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-6 flex items-center gap-3">
          <Gamepad2 className="h-7 w-7 text-[#FF0000]" />
          Roblox
        </h2>
        <p className="leading-relaxed">Check Roblox username availability:</p>

        <CodeBlock
          title="Roblox Example"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.roblox("builderman");

console.log(\`Checking: \${result.username}\`);
console.log(\`Status: \${result.available ? "Available" : "Taken"}\`);`}
          output={`Checking: builderman
Status: Taken`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-4">Check Multiple Platforms</h2>
        <p className="leading-relaxed">Check the same username across all supported platforms simultaneously:</p>

        <CodeBlock
          title="Multi-Platform Check"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();
const username = "myusername";

const [discord, github, instagram, minecraft, roblox] = await Promise.all([
  client.discord(username),
  client.github(username),
  client.instagram(username),
  client.minecraft(username),
  client.roblox(username),
]);

console.log({
  discord: discord.available,
  github: github.available,
  instagram: instagram.available,
  minecraft: minecraft.available,
  roblox: roblox.available,
});`}
          output={`{
  discord: true,
  github: false,
  instagram: true,
  minecraft: false,
  roblox: true
}`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-4">Batch Checking with Rate Limiting</h2>
        <p className="leading-relaxed">Check multiple usernames with proper rate limiting to avoid API restrictions:</p>

        <CodeBlock
          title="Batch Check with Delays"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();

async function checkUsernames(usernames: string[], platform: string) {
  const results = [];
  
  for (const username of usernames) {
    const result = await client[platform](username);
    results.push(result);
    
    await new Promise(resolve => 
      setTimeout(resolve, 500 + Math.random() * 500)
    );
  }
  
  return results;
}

const usernames = ["user1", "user2", "user3", "user4"];
const githubResults = await checkUsernames(usernames, "github");

githubResults.forEach(result => {
  console.log(\`\${result.username}: \${result.available ? "✓" : "✗"}\`);
});`}
          output={`user1: ✗
user2: ✓
user3: ✗
user4: ✓`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-4">Error Handling</h2>
        <p className="leading-relaxed">Handle errors and undetermined results gracefully:</p>

        <CodeBlock
          title="Robust Error Handling"
          code={`import { Client } from "@lookups/usernames";

const client = new Client();

async function safeCheck(username: string) {
  try {
    const result = await client.github(username);
    
    if (result.available === true) {
      return { status: "available", username };
    } else if (result.available === false) {
      return { 
        status: "unavailable", 
        username,
        suggestions: result.suggestions 
      };
    } else {
      return { 
        status: "unknown", 
        username,
        message: result.message 
      };
    }
  } catch (error) {
    return { 
      status: "error", 
      username,
      error: error.message 
    };
  }
}

const result = await safeCheck("testuser");
console.log(result);`}
          output={`{
  status: "available",
  username: "testuser"
}`}
        />

        <h2 className="text-2xl font-bold mt-12 mb-4">Next Steps</h2>
        <p className="leading-relaxed">
          Explore the full API reference to learn about all available methods, response types, and advanced options.
        </p>

        <div className="flex gap-4 mt-6 not-prose">
          <Button asChild>
            <Link href="/docs/api">
              API Reference
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/docs/changelog">View Changelog</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
