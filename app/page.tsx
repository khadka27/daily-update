import Link from "next/link"
import { ArrowRight, Calendar, Clock, Github } from "lucide-react"
import { DevQuote } from "@/components/dev-quote"
import { DevMilestones } from "@/components/dev-milestones"
import { RecentJournals } from "@/components/recent-journals"

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
            <p className="text-lg text-muted-foreground">Code consistently. Grow daily. Track your progress.</p>
          </div>

          <div className="flex items-center gap-2 text-muted-foreground">
            <Clock className="h-4 w-4" />
            <span>Last updated: {formattedDate}</span>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Daily Reflection",
                description: "Document your coding wins, challenges overcome, and lessons learned each day.",
                link: "/journal/day-1",
              },
              {
                title: "Skill Progress",
                description: "Track your growing expertise in languages, frameworks, and development tools.",
                link: "/journal/day-2",
              },
              {
                title: "Project Milestones",
                description: "Record key achievements and breakthroughs in your development projects.",
                link: "/journal/day-3",
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-lg border bg-background p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    <h3 className="font-medium tracking-tight">{card.title}</h3>
                    <p className="text-muted-foreground">{card.description}</p>
                  </div>
                  <Link href={card.link} className="flex items-center gap-1 text-sm font-medium text-primary">
                    Read more <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        <RecentJournals />

        <section className="space-y-6 mt-12">
          <h2 className="text-2xl font-bold tracking-tight">How It Works</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-2 font-medium">Daily Automated Updates</h3>
              <p className="text-muted-foreground">
                Never miss a day in your coding streak. Automated commits keep your GitHub contribution graph active,
                while you focus on documenting real progress.
              </p>
            </div>
            <div className="rounded-lg border bg-background p-6">
              <h3 className="mb-2 font-medium">Built with Latest Tech</h3>
              <p className="text-muted-foreground">
                Experience the power of Next.js 15 and Tailwind CSS v4. This journal leverages cutting-edge web
                technologies for a seamless development experience.
              </p>
            </div>
          </div>
        </section>

        <DevMilestones />
        <DevQuote />
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
