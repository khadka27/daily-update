interface Props {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params, searchParams }: Props) {
  const dayNumber = Number.parseInt(params.slug)

  return (
    <main className="font-serif">
      <h1>Day {dayNumber} of Development</h1>

      {/* Replace the lorem ipsum content with meaningful journal entries */}
      <p>
        Today marks day {dayNumber} of my development journey. I'm documenting my progress to build consistency and
        reflect on my growth as a developer.
      </p>

      <h2>What I Learned Today</h2>
      <p>
        I deepened my understanding of React Server Components in Next.js 15. The ability to fetch data directly in
        components without client-side JavaScript has significantly improved my application's performance and user
        experience.
      </p>

      <h2>Challenges Faced</h2>
      <p>
        Implementing proper state management across server and client components proved challenging. I had to carefully
        consider which components needed interactivity and which could remain server-rendered. After some refactoring, I
        found a clean architecture that maintains performance while preserving needed interactivity.
      </p>

      <h2>Tomorrow's Goals</h2>
      <ul>
        <li>Implement authentication flow using environment variables for secure credential management</li>
        <li>Optimize image loading with Next.js built-in Image component</li>
        <li>Write unit tests for critical application paths</li>
      </ul>

      <h2>Code Snippet of the Day</h2>
      <pre>
        <code>{`// Server Component data fetching
async function getData() {
  const res = await fetch('https://api.example.com/data')
  if (!res.ok) throw new Error('Failed to fetch data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Use data here */}</main>
}`}</code>
      </pre>

      <h2>Resources Discovered</h2>
      <p>
        Found an excellent article on optimizing Tailwind CSS for production. Will implement these strategies tomorrow
        to reduce bundle size and improve load times.
      </p>
    </main>
  )
}
