import { useState, useEffect, useRef } from "react";
import OpenAI from "openai";
import { createPrompt } from "../utils/createPrompt";
import ReactMarkdown from "react-markdown";

const client = new OpenAI({
  apiKey: import.meta.env.VITE_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1",
  dangerouslyAllowBrowser: true,
});

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi 👋 Ask me anything about Nikita.",
    },
  ]);

  // Auto Scroll Ref
  const messagesEndRef = useRef(null);

  // Auto Scroll Effect
  useEffect(() => {
    if (loading) {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [loading]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = {
      role: "user",
      text: input,
    };

    const updatedMessages = [...messages, userMessage];

    setMessages(updatedMessages);
    setInput("");
    setLoading(true);

    try {
      const completion = await client.chat.completions.create({
        model: "llama-3.1-8b-instant",
        messages: [
          {
            role: "system",
            content: createPrompt(),
          },
          {
            role: "user",
            content: input,
          },
        ],
      });

      const response = completion.choices[0]?.message?.content;

      const botMessage = {
        role: "bot",
        text: response,
      };

      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      console.error(error);

      setMessages([
        ...updatedMessages,
        {
          role: "bot",
          text: "AI service is temporarily unavailable.",
        },
      ]);
    }

    setLoading(false);
  };

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-white text-black w-14 h-14 rounded-full shadow-xl text-2xl hover:scale-110 transition duration-300 z-50"
      >
        💬
      </button>

      {/* Chat Window */}
      {open && (
        <div className="fixed bottom-24 right-6 w-[350px] h-[500px] bg-zinc-900 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50">
          
          {/* Header */}
          <div className="p-4 border-b border-white/10">
            <h2 className="text-white font-semibold text-lg">
              Ask AI About Me
            </h2>

            <p className="text-white/50 text-sm mt-1">
              Powered by Groq AI
            </p>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-white/10 text-white"
                }`}
              >
               <ReactMarkdown>
  {msg.text}
</ReactMarkdown>
              </div>
            ))}

            {loading && (
              <div className="bg-white/10 text-white p-3 rounded-2xl w-fit text-sm">
                Typing...
              </div>
            )}

            {/* Auto Scroll Target */}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-white/10 flex gap-2">
            <input
              type="text"
              placeholder="Ask something..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              className="flex-1 bg-white/10 text-white rounded-xl px-4 py-2 outline-none placeholder:text-white/40"
            />

            <button
              onClick={sendMessage}
              disabled={loading}
              className="bg-white text-black px-4 rounded-xl font-medium hover:scale-105 transition disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}