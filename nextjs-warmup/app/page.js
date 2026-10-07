import Counter from "./components/Counter";
import ServerMessage from "./components/ServerMessage";

// This page is a Server Component (no 'use client' here).
// Only the small interactive parts below run in the browser.
export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      <p>This is my first Next.js app.</p>

      <section className="card">
        <h2>Counter</h2>
        <Counter />
      </section>

      <section className="card">
        <h2>Message from the server</h2>
        <ServerMessage />
      </section>
    </div>
  );
}
