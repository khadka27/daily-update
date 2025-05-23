import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Daily Dev Journal - Track Your Coding Journey",
  description:
    "Document your daily coding progress, overcome challenges, and celebrate your development milestones with automated GitHub contributions.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
      /  <footer className="container mx-auto mt-8 p-4 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Daily Dev Journal. All rights reserved.
          </p>
        </footer>
      </body>
    </html>
  )
}
