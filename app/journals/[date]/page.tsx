import Link from "next/link";
import { ArrowLeft, Calendar } from "lucide-react";

export default function JournalEntryPage({
  params,
}: {
  params: { date: string };
}) {
  const { date } = params;

  // Format the date for display
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  // This would normally be fetched from the file system
  // For demo purposes, we're hardcoding content based on the date
  const getJournalContent = (date: string) => {
    // Default content if no specific content is found
    return {
      title: `Journal Entry: ${date}`,
      content: `
# Journal Entry: ${date}

Daily automated journal entry created by GitHub Actions.

## Today's Focus

- Continue building and improving the project
- Review code and documentation
- Plan next features and enhancements

## Notes

This journal entry was automatically created by the GitHub Actions workflow.

## Tomorrow's Goals

- Add more content to the website
- Improve the styling and responsiveness
- Consider adding data visualization for tracking progress
      `,
    };
  };

  const journal = getJournalContent(date);

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-10 border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <Link
            href="/"
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      <main className="flex-1 container py-12">
        <article className="prose prose-slate dark:prose-invert mx-auto">
          <h1>{journal.title}</h1>

          <div className="flex items-center gap-2 text-muted-foreground not-prose mb-8">
            <Calendar className="h-4 w-4" />
            <span>{formattedDate}</span>
          </div>

          <div className="whitespace-pre-wrap">{journal.content}</div>
        </article>
      </main>

      <footer className="border-t py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Daily Dev Journal. All rights
            reserved.
          </p>
          <p className="text-center text-sm text-muted-foreground md:text-right">
            Version: v0.0.0
          </p>
        </div>
      </footer>
    </div>
  );
}
