# Next.js Warm-up

A small Next.js app with two pages, a counter, and an API endpoint.

## How to run

```bash
npm install
npm run dev
```

Open http://localhost:3000. The API endpoint is at http://localhost:3000/api/message.

## Project structure

- `app/layout.js` – root layout with `<html>`, `<body>` and the navigation
- `app/page.js` – home page (`/`), a Server Component
- `app/about/page.js` – about page (`/about`)
- `app/components/Counter.jsx` – interactive counter (Client Component)
- `app/components/ServerMessage.jsx` – button that loads a message from the API (Client Component)
- `app/api/message/route.js` – `GET /api/message` endpoint
- `app/globals.css` – global styles

## What I learned

**What does Next.js provide beyond React alone?**
Next.js adds file-based routing, server rendering, Server Components, API endpoints (Route Handlers) and a production build setup, so I don't need extra libraries like React Router or a separate backend.

**Why does the counter need `'use client'`?**
The counter uses `useState` and an `onClick` handler, which only work in the browser, so it must be marked as a Client Component.

**Where does the code in `app/api/message/route.js` run?**
It runs on the server (in Node.js), never in the user's browser.

**How is this endpoint similar to an Express route?**
Like `app.get('/api/message', (req, res) => res.json(...))` in Express, it handles a GET request on a URL and sends back JSON; the URL comes from the folder path instead of code.

**Why must secrets remain on the server?**
Any code sent to the browser can be read by anyone, so API keys and passwords must stay in server code (like route handlers) where users cannot see them.

## Browser vs. server

**Which code belongs in the browser?**
Interactive UI code: components that use state, event handlers like `onClick`, or browser APIs; in this app that is `Counter.jsx` and `ServerMessage.jsx`, marked with `'use client'`.

**Which code belongs on the server?**
Anything that uses secrets, talks to a database, or must be trusted, such as API keys, permission checks and data validation; in this app that is `app/api/message/route.js` and the Server Component pages.

**Why are database ownership policies still required?**
The server code might have a bug or forget a check, so rules in the database itself (for example "a user can only read or edit their own rows") act as a last line of defense.

**Why does hiding a button not protect an endpoint?**
Anyone can call the endpoint directly with the browser, `fetch` or a tool like curl without ever clicking the button, so the server must check who the user is and what they are allowed to do on every request.
