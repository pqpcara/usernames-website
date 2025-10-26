import { Terminal } from "lucide-react"
import { CodeBlock } from "@/components/code-block"

export default function InstallationPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Installation</h1>
      <p className="text-muted-foreground leading-relaxed mb-8">
        Get started with @lookups/usernames by installing it via your preferred package manager.
      </p>

      <div className="space-y-6 my-8">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">npm</span>
          </div>
          <CodeBlock language="bash" code="npm install @lookups/usernames" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">yarn</span>
          </div>
          <CodeBlock language="bash" code="yarn add @lookups/usernames" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">pnpm</span>
          </div>
          <CodeBlock language="bash" code="pnpm add @lookups/usernames" />
        </div>

        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Terminal className="h-5 w-5 text-primary" />
            <span className="font-semibold text-lg">bun</span>
          </div>
          <CodeBlock language="bash" code="bun add @lookups/usernames" />
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">Basic Setup</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        After installation, import the Client class and create a new instance:
      </p>

      <CodeBlock
        language="ts"
        code={`import { Client } from "@lookups/usernames";

const client = new Client();`}
      />

      <h2 className="text-2xl font-bold mt-12 mb-4">TypeScript</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        @lookups/usernames is written in TypeScript and includes full type definitions. No additional @types packages
        are required.
      </p>

      <CodeBlock
        language="ts"
        code={`import { Client } from "@lookups/usernames";

const client = new Client();

const result = await client.discord("username");
console.log(result.available);`}
      />

      <h2 className="text-2xl font-bold mt-12 mb-4">CommonJS Support</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        If you're using CommonJS, you can import the package using require:
      </p>

      <CodeBlock
        language="js"
        code={`const { Client } = require("@lookups/usernames");

const client = new Client();

client.discord("username").then(result => {
  console.log(result.available);
});`}
      />

      <h2 className="text-2xl font-bold mt-12 mb-4">ESM Support</h2>
      <p className="text-muted-foreground leading-relaxed mb-6">
        The package fully supports ES modules with top-level await:
      </p>

      <CodeBlock
        language="ts"
        code={`import { Client } from "@lookups/usernames";

const client = new Client();
const result = await client.github("username");

if (result.available) {
  console.log("Username is available!");
} else {
  console.log("Username is taken");
  console.log("Suggestions:", result.suggestions);
}`}
      />
    </div>
  )
}
