import Link from "next/link"
import { ArrowLeft, Calendar, Clock } from "lucide-react"

export default function JournalEntryPage({ params }: { params: { slug: string } }) {
  // Get current date in a readable format
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  // Extract day number from slug (e.g., "day-1" -> "1")
  const dayNumber = params.slug.split("-")[1] || "1"

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <article className="prose prose-slate dark:prose-invert mx-auto">
          <h1>Day {dayNumber} - Development Journal</h1>

          <div className="flex items-center gap-2 text-muted-foreground not-prose mb-8">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>

          <p>
            Today marks day {dayNumber} of my development journey. This page will contain my progress, challenges faced,
            and achievements for the day.
          </p>

          <h2>What I Learned Today</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
          </p>

          <h2>Challenges Faced</h2>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum.
          </p>

          <h2>Tomorrow's Goals</h2>
          <ul>
            <li>Continue working on feature X</li>
            <li>Research solution for problem Y</li>
            <li>Refactor component Z for better performance</li>
          </ul>
        </article>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Daily Dev Journal. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last updated: {formattedDate}</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
