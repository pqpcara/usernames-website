"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

const navigation = [
  {
    title: "Getting Started",
    items: [
      { title: "Introduction", href: "/docs" },
      { title: "Installation", href: "/docs/installation" },
    ],
  },
  {
    title: "Usage",
    items: [
      { title: "Examples", href: "/docs/examples" },
      { title: "API Reference", href: "/docs/api" },
    ],
  },
  {
    title: "Resources",
    items: [{ title: "Changelog", href: "/docs/changelog" }],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()

  return (
    <aside className="hidden lg:block w-64 shrink-0">
      <div className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-8 pr-8">
        <nav className="space-y-8">
          {navigation.map((section) => (
            <div key={section.title}>
              <h4 className="font-semibold mb-3 text-sm">{section.title}</h4>
              <ul className="space-y-2">
                {section.items.map((item) => {
                  const isActive = pathname === item.href
                  return (
                    <li key={item.href}>
                      <Link
                        href={item.href}
                        className={cn(
                          "flex items-center gap-2 text-sm py-1.5 px-3 rounded-md transition-colors",
                          isActive
                            ? "bg-primary text-primary-foreground font-medium"
                            : "text-muted-foreground hover:text-foreground hover:bg-muted",
                        )}
                      >
                        {isActive && <ChevronRight className="h-4 w-4" />}
                        {item.title}
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </aside>
  )
}
