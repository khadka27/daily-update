"use client"

import { useEffect, useState } from "react"
import { Quote } from "lucide-react"

const quotes = [
  {
    text: "Code is like humor. When you have to explain it, it's bad.",
    author: "Cory House",
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
  },
  {
    text: "Make it work, make it right, make it fast.",
    author: "Kent Beck",
  },
  {
    text: "Every great developer you know got there by solving problems they were unqualified to solve until they actually did it.",
    author: "Patrick McKenzie",
  },
  {
    text: "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    author: "Martin Fowler",
  },
]

export function DevQuote() {
  const [quote, setQuote] = useState(quotes[0])

  useEffect(() => {
    // Get a random quote on initial load
    const randomIndex = Math.floor(Math.random() * quotes.length)
    setQuote(quotes[randomIndex])
  }, [])

  return (
    <div className="rounded-lg border bg-background p-6 my-8">
      <div className="flex gap-4 items-start">
        <Quote className="h-8 w-8 text-muted-foreground flex-shrink-0 mt-1" />
        <div>
          <p className="text-lg italic mb-2">{quote.text}</p>
          <p className="text-sm text-muted-foreground text-right">— {quote.author}</p>
        </div>
      </div>
    </div>
  )
}
