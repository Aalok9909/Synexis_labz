# Synexis Labs

Premium AI automation and web development agency website built with Next.js, Tailwind CSS, Framer Motion, and MongoDB.

## Project Overview

- Frontend: Next.js 15 + React + Tailwind CSS
- Animations: Framer Motion
- Backend: Next.js API route with Node.js + MongoDB
- Database: Local MongoDB first, scalable to hosted clusters
- Deployment ready for Vercel
- SEO optimized with semantic tags, OG metadata, alt text, and structured content

## Setup Instructions

1. Install dependencies

   ```bash
   npm install
   ```

2. Create `.env.local`

   Copy the example file and add your MongoDB URI:

   ```bash
   cp .env.local.example .env.local
   ```

3. Start local development

   ```bash
   npm run dev
   ```

4. Open the site at `http://localhost:3000`

## Environment Variables

Create `.env.local` with:

```env
MONGODB_URI=mongodb://127.0.0.1:27017/synexis_labs
```

## Running MongoDB Locally

1. Install MongoDB Community Server.
2. Start the MongoDB service.
3. Confirm connection:

   ```bash
   mongo --eval "db.runCommand({ connectionStatus: 1 })"
   ```

## Deployment

1. Push the repository to GitHub.
2. Connect the repo in Vercel.
3. Add `MONGODB_URI` in Vercel environment variables.
4. Deploy.

## Project Structure

- `app/` - Next.js app pages, API routes, global layout
- `components/` - Reusable UI components
- `lib/` - Shared data and MongoDB connection helper
- `public/` - Images and SVG assets

## SEO Keywords Included

- AI automation for gyms USA
- WhatsApp automation for salons UK
- affordable web development services USA
- AI website chatbot
- smart booking system
- lead generation funnel
