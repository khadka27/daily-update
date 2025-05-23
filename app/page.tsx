import Link from "next/link"
import { ArrowRight, Calendar, Clock, Github } from "lucide-react"

export default function Home() {
  // Get current date in a readable format
  const today = new Date()
  const formattedDate = today.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold">
            <Calendar className="h-5 w-5" />
            <span>Daily Dev Journal</span>
          </div>
          <nav className="flex items-center gap-4">
            <Link
              href="https://github.com/yourusername/daily-dev-journal"
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
              <span className="hidden sm:inline">GitHub</span>
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <section className="space-y-6 pb-12">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">Daily Dev Journal</h1>
            <p className="text-lg text-muted-foreground">Track your coding journey with daily automated updates</p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last updated: {formattedDate}</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 3 }).map((_, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium tracking-tight">Day {i + 1} Update</h3>
                    <p className="text-muted-foreground">
                      Your daily development progress, challenges, and achievements.
                    </p>
                  </div>
                  <Link
                    href={`/journal/day-${i + 1}`}
                    className="flex items-center gap-1 text-sm font-medium text-primary"
                  >
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-2 font-medium">Daily Automated Updates</h3>
              <p className="text-muted-foreground">
                This project uses GitHub Actions to make an empty commit every day at midnight Nepal Time (UTC+05:45),
                ensuring your contribution graph stays active.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-2 font-medium">Built with Latest Tech</h3>
              <p className="text-muted-foreground">
                Powered by Next.js 15 and Tailwind CSS v4, this project uses the latest web technologies for optimal
                performance and developer experience.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Daily Dev Journal. All rights reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">Version: v0.0.0</p>
        </div>
      </footer>
    </div>
  )
}
