# Daily Dev Journal

A Next.js 15 application that automatically tracks your coding journey with daily GitHub commits.

## Features

- **Automatic Daily Commits**: GitHub Actions workflow creates a commit every day at midnight Nepal Time (UTC+05:45)
- **Journal Entries**: Automatically creates dated journal entries in the `journals` directory
- **Modern Tech Stack**: Built with Next.js 15 and Tailwind CSS v4
- **Development Milestones**: Track your progress with predefined milestones

## How It Works

1. The GitHub Actions workflow runs daily at midnight Nepal Time
2. It creates a new journal entry file for the current date if one doesn't exist
3. It commits and pushes the changes to the main branch
4. Your GitHub contribution graph stays active, even on days when you don't manually commit

## Getting Started

1. Fork this repository
2. Clone your fork: `git clone https://github.com/yourusername/daily-dev-journal.git`
3. Install dependencies: `npm install`
4. Run the development server: `npm run dev`
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Customization

- Edit the journal template in the GitHub workflow file
- Modify the website content in the `app` directory
- Add your own milestones and quotes in the components

## Deployment

Deploy this project to Vercel, Netlify, or any other hosting platform that supports Next.js.

## License

MIT
\`\`\`

Let's create a journals directory with a sample journal entry:
