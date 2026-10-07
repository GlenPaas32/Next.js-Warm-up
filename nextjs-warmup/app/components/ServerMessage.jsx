"use client";

import { useState } from "react";

export default function ServerMessage() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Runs when the button is clicked
  async function loadMessage() {
    setLoading(true);
    setError("");
    setMessage("");

    try {
      const response = await fetch("/api/message");

      // response.ok is true for status codes 200-299
      if (!response.ok) {
        throw new Error("Request failed with status " + response.status);
      }

      const data = await response.json();
      setMessage(data.message);
    } catch (err) {
      setError("Could not load the message: " + err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <button onClick={loadMessage} disabled={loading}>
        {loading ? "Loading..." : "Load server message"}
      </button>

      {message && <p>{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
