"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Check, Copy } from "lucide-react"
import { useState } from "react"

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  output?: string
}

export function CodeBlock({ code, language = "typescript", title, output }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const highlightCode = (code: string, lang: string) => {
    let result = ""
    let i = 0

    const keywords = new Set([
      "import",
      "from",
      "const",
      "let",
      "var",
      "function",
      "async",
      "await",
      "return",
      "if",
      "else",
      "for",
      "while",
      "do",
      "switch",
      "case",
      "break",
      "continue",
      "try",
      "catch",
      "finally",
      "throw",
      "new",
      "class",
      "extends",
      "export",
      "default",
      "interface",
      "type",
      "enum",
      "namespace",
      "module",
      "declare",
      "public",
      "private",
      "protected",
      "static",
      "readonly",
      "as",
      "typeof",
      "instanceof",
      "in",
      "of",
      "delete",
      "void",
      "yield",
    ])

    const types = new Set([
      "string",
      "number",
      "boolean",
      "void",
      "any",
      "unknown",
      "never",
      "null",
      "undefined",
      "object",
      "symbol",
      "bigint",
      "Promise",
      "Array",
      "Map",
      "Set",
      "Date",
      "RegExp",
      "Error",
    ])

    const constants = new Set(["true", "false", "null", "undefined", "NaN", "Infinity"])

    while (i < code.length) {
      if (code[i] === "/" && code[i + 1] === "/") {
        let comment = ""
        while (i < code.length && code[i] !== "\n") {
          comment += code[i]
          i++
        }
        result += `<span style="color: #6a9955">${comment}</span>`
        continue
      }

      if (code[i] === "/" && code[i + 1] === "*") {
        let comment = ""
        while (i < code.length && !(code[i] === "*" && code[i + 1] === "/")) {
          comment += code[i]
          i++
        }
        comment += "*/"
        i += 2
        result += `<span style="color: #6a9955">${comment}</span>`
        continue
      }

      if (code[i] === '"' || code[i] === "'" || code[i] === "`") {
        const quote = code[i]
        let str = quote
        i++
        while (i < code.length && code[i] !== quote) {
          if (code[i] === "\\") {
            str += code[i] + (code[i + 1] || "")
            i += 2
          } else {
            str += code[i]
            i++
          }
        }
        str += quote
        i++
        result += `<span style="color: #ce9178">${str}</span>`
        continue
      }

      if (/[a-zA-Z_$]/.test(code[i])) {
        let word = ""
        while (i < code.length && /[a-zA-Z0-9_$]/.test(code[i])) {
          word += code[i]
          i++
        }

        if (keywords.has(word)) {
          result += `<span style="color: #c586c0">${word}</span>`
        } else if (types.has(word)) {
          result += `<span style="color: #4ec9b0">${word}</span>`
        } else if (constants.has(word)) {
          result += `<span style="color: #569cd6">${word}</span>`
        } else if (/^[A-Z]/.test(word)) {
          result += `<span style="color: #4ec9b0">${word}</span>`
        } else if (code[i] === "(") {
          result += `<span style="color: #dcdcaa">${word}</span>`
        } else {
          result += `<span style="color: #9cdcfe">${word}</span>`
        }
        continue
      }

      if (/\d/.test(code[i])) {
        let num = ""
        while (i < code.length && /[\d.]/.test(code[i])) {
          num += code[i]
          i++
        }
        result += `<span style="color: #b5cea8">${num}</span>`
        continue
      }

      if (code[i] === "<") {
        result += "&lt;"
      } else if (code[i] === ">") {
        result += "&gt;"
      } else {
        result += code[i]
      }
      i++
    }

    return result
  }

  return (
    <div className="space-y-3 not-prose">
      <Card className="overflow-hidden bg-transparent backdrop-blur border-border/40">
        {title && (
          <div className="px-6 py-3 border-b border-border/40 flex items-center justify-between bg-muted/30">
            <div className="flex items-center gap-2">
              <span className="text-sm font-semibold text-foreground">{title}</span>
              <span className="text-xs px-2 py-0.5 rounded bg-primary/10 text-primary font-mono">{language}</span>
            </div>
            <Button variant="ghost" size="sm" onClick={copyToClipboard} className="h-8 px-2">
              {copied ? <Check className="h-4 w-4 text-green-500" /> : <Copy className="h-4 w-4" />}
            </Button>
          </div>
        )}
        <div className="p-6">
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="text-[#d4d4d4]" dangerouslySetInnerHTML={{ __html: highlightCode(code, language) }} />
          </pre>
        </div>
      </Card>
      {output && (
        <Card className="p-6 bg-transparent backdrop-blur border-green-500/20">
          <div className="flex items-center gap-2 mb-3">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <div className="text-xs font-semibold text-green-400 uppercase tracking-wide">Output</div>
          </div>
          <pre className="text-sm font-mono overflow-x-auto">
            <code className="text-green-400">{output}</code>
          </pre>
        </Card>
      )}
    </div>
  )
}
