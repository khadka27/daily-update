import Link from "next/link"
import { FileText } from "lucide-react"

// This would normally be fetched from the file system
// For demo purposes, we're hardcoding some sample entries
const recentJournals = [
  {
    date: "2023-05-23",
    title: "Setting Up the Daily Dev Journal",
    excerpt: "Today I set up the Daily Dev Journal project with Next.js 15 and configured GitHub Actions.",
  },
  {
    date: "2023-05-22",
    title: "Learning Tailwind CSS v4",
    excerpt: "Explored the new features in Tailwind CSS v4 and how they improve the development workflow.",
  },
  {
    date: "2023-05-21",
    title: "Next.js 15 Features",
    excerpt: "Investigated the new features in Next.js 15 and how they can be used in my projects.",
  },
]

export function RecentJournals() {
  return (
    <div className="space-y-6 mt-12">
      <h2 className="text-2xl font-bold tracking-tight">Recent Journal Entries</h2>
      <div className="space-y-4">
        {recentJournals.map((journal, index) => (
          <div key={index} className="rounded-lg border bg-background p-6">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm text-muted-foreground">{journal.date}</span>
            </div>
            <h3 className="font-medium mb-2">{journal.title}</h3>
            <p className="text-muted-foreground mb-4">{journal.excerpt}</p>
            <Link href={`/journals/${journal.date}`} className="text-sm font-medium text-primary hover:underline">
              Read full entry
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
