# Buildit

**AI-powered app builder** — describe what you want, and buildit scaffolds, edits, and previews a working app in real time.

🔗 **Live app:** [buildit-wine.vercel.app](https://buildit-wine.vercel.app)

---

## ✨ Features

- 🤖 **AI-driven code generation** — powered by Google Gemini to generate and edit application code from natural-language prompts
- ⚡ **Live in-browser sandbox** — instant code preview and execution via Sandpack, no local setup needed to see results
- 🔐 **Authentication** — secure sign-in/sign-up flows out of the box with Clerk
- 🗄️ **Persistent data layer** — Prisma ORM over PostgreSQL (Supabase-hosted)
- 🛡️ **Built-in security** — rate limiting and bot/attack protection via Arcjet
- 🎨 **Modern UI** — shadcn/ui components, Tailwind CSS v4, and Motion for animations
- 📦 **Project export** — bundle and download generated projects as a `.zip` (JSZip)
- 🌗 **Light/dark themes** — via `next-themes`

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js](https://nextjs.org) 16 (App Router) + React 19 |
| Language | TypeScript |
| Styling | Tailwind CSS v4, shadcn/ui, `class-variance-authority` |
| Auth | [Clerk](https://clerk.com) |
| Database | PostgreSQL ([Supabase](https://supabase.com)) via [Prisma](https://www.prisma.io) 7 |
| AI | [Google Gen AI SDK](https://ai.google.dev) (Gemini) |
| Code Sandbox | [Sandpack](https://sandpack.codesandbox.io) |
| Security | [Arcjet](https://arcjet.com) |
| Validation | Zod |
| Deployment | [Vercel](https://vercel.com) |

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- A PostgreSQL database (e.g. a free [Supabase](https://supabase.com) project)
- API keys/credentials for: Clerk, Google Gemini, and Arcjet

### 1. Clone the repository

```bash
git clone https://github.com/Harshp61/buildit.git
cd buildit
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Create a `.env` file in the project root with the following (adjust names to match your provider dashboards):

```env
# Database
DATABASE_URL=

# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# Google Gemini
GOOGLE_GENAI_API_KEY=

# Arcjet
ARCJET_KEY=
```

### 4. Set up the database

```bash
npx prisma generate
npx prisma migrate dev
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see the app.

## 📁 Project Structure

```
buildit/
├── actions/       # Server actions
├── app/           # Next.js App Router pages & routes
├── components/    # Reusable UI components
├── lib/           # Utilities, config, and shared logic
├── prisma/        # Prisma schema & migrations
├── public/        # Static assets
└── types/         # Shared TypeScript types
```

## 🧰 Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the development server |
| `npm run build` | Build for production |
| `npm run start` | Run the production build |
| `npm run lint` | Lint the codebase |

## 🚢 Deployment

This project is set up to deploy seamlessly on [Vercel](https://vercel.com/new). Make sure to configure the same environment variables from your `.env` file in your Vercel project settings.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repo
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## 📄 License

No license has been specified for this repository yet. Consider adding one (e.g. [MIT](https://choosealicense.com/licenses/mit/)) if you plan to accept outside contributions.
