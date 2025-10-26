"use client"

import type React from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { DocsSidebar } from "@/components/docs-sidebar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import { useState } from "react"

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <div className="container flex-1 px-4 md:px-8">
        <div className="flex gap-6 lg:gap-8">
          <DocsSidebar />
          <main className="flex-1 py-6 md:py-8 lg:py-12 min-w-0">
            <Button
              variant="outline"
              size="sm"
              className="lg:hidden mb-4 flex items-center gap-2 bg-transparent"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-4 w-4" />
              Menu
            </Button>
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  )
}
