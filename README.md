Picture of the website: 
<img width="530" height="404" alt="image" src="https://github.com/user-attachments/assets/20280335-5aaa-4f69-9a1d-c1000b3c95fb" />
What does Next.js provide beyond React alone? Next.js adds file-based routing, server rendering, Server Components, API endpoints (Route Handlers) and a production build setup, so I don't need extra libraries like React Router or a separate backend.

Why does the counter need 'use client'? The counter uses useState and an onClick handler, which only work in the browser, so it must be marked as a Client Component.

Where does the code in app/api/message/route.js run? It runs on the server (in Node.js), never in the user's browser.

How is this endpoint similar to an Express route? Like app.get('/api/message', (req, res) => res.json(...)) in Express, it handles a GET request on a URL and sends back JSON; the URL comes from the folder path instead of code.

Why must secrets remain on the server? Any code sent to the browser can be read by anyone, so API keys and passwords must stay in server code (like route handlers) where users cannot see them.
