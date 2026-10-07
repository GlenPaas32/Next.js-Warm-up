import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Next.js Warm-up",
  description: "My first Next.js app",
};

// The root layout wraps every page. It must keep <html> and <body>.
export default function RootLayout({ chil dren }) {
  return (
    <html lang="en">
      <body>
        {/* Navigation is shown on every page */}
        <nav className="nav">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
        </nav>

        <main className="container">{children}</main>
      </body>
    </html>
  );
}
