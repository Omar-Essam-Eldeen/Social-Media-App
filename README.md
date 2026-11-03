# Magic Social

A social media app built with React + TypeScript + Vite. My Route Academy assignment — it uses the academy's Linked Posts API.

**Live demo:** https://socialapp-seven-phi.vercel.app/

## What it does

- Sign up / log in, with a profile page
- Home feed with all posts, plus Following and My posts filters
- Create, edit and delete posts (text + image)
- Comments: add, edit, delete, like
- Like, share and bookmark posts, with a Saved page
- Infinite scroll — more posts load as you scroll down
- Change password (you stay logged in after)
- Dark / light mode, glass-style design

## Tech

- React 19 + TypeScript + Vite
- Mantine for UI components
- TanStack Query for data fetching and caching
- Axios for the API calls
- React Hook Form + Zod for the forms
- React Router for navigation

## Run it locally

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

To build for production:

```bash
npm run build
```

## API

All data comes from the Route Academy Linked Posts API: https://route-posts.routemisr.com/
