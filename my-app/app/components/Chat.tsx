"use client";
import { useState } from "react";

export default function Chat() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response = await fetch("/api/chat", { method: "POST", body: JSON.stringify({ prompt: input }) });
    const aiMessage = await response.text();
    setMessages([...messages, input, aiMessage]);
    setInput("");
  };

  return (
    <div>
      {messages.map((msg, i) => <p key={i}>{msg}</p>)}
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
