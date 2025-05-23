import { Milestone, Trophy, Code, Lightbulb } from "lucide-react"

const milestones = [
  {
    day: 1,
    title: "First Commit",
    description: "Begin your coding journey with your first project commit.",
    icon: <Milestone className="h-5 w-5" />,
  },
  {
    day: 7,
    title: "Week Streak",
    description: "Maintain daily coding for a full week. Consistency is key!",
    icon: <Trophy className="h-5 w-5" />,
  },
  {
    day: 30,
    title: "Month Mastery",
    description: "Complete a month of daily coding. You're building serious momentum!",
    icon: <Code className="h-5 w-5" />,
  },
  {
    day: 100,
    title: "Century Club",
    description: "Join the elite 100-day coders. Your skills have grown exponentially.",
    icon: <Lightbulb className="h-5 w-5" />,
  },
]

export function DevMilestones() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold tracking-tight">Development Milestones</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {milestones.map((milestone, index) => (
          <div key={index} className="rounded-lg border bg-background p-6">
            <div className="flex items-center gap-3 mb-3">
              {milestone.icon}
              <h3 className="font-medium">
                Day {milestone.day}: {milestone.title}
              </h3>
            </div>
            <p className="text-muted-foreground">{milestone.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
