import { useState } from "react";
import OpenAI from "openai";

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
    { role: "bot", text: "Hi 👋 Ask me anything about Nikita." },
  ]);
  
  const sendMessage = async () => {
    if (!input.trim()) return;
    const userMessage = { role: "user", text: input };
    const updatedMessages = [...messages, userMessage];
    setMessages(updatedMessages);
    setInput("");
    setLoading(true);
    try {
     const completion = await client.chat.completions.create({ model: "llama-3.1-8b-instant", messages: [ { role: "system", content: ` You are an AI assistant for Nikita Gavhale's portfolio website. Your purpose: - Answer questions about Nikita professionally. - Keep answers concise, friendly, and informative. - Only answer portfolio/career related questions. - If question is unrelated, politely refuse. About Nikita: - Frontend/UI Developer with 6+ years of experience. - Skilled in ReactJS, JavaScript, HTML5, CSS3, Tailwind CSS, PHP, MySQL, CMS Development, Git, GitHub, and JIRA. - Builds responsive and user-friendly web applications. - Experienced in Agile environments and cross-functional collaboration. - Passionate about modern UI development and frontend engineering. - Open to frontend developer and ReactJS opportunities. About Section: "I am a frontend developer focused on creating responsive, interactive, and modern web applications. I enjoy building clean user interfaces using React JS and Tailwind CSS while continuously improving my frontend development and problem-solving skills." Skills: - HTML - CSS - JavaScript - React JS - Tailwind CSS - Git - GitHub - JIRA - PHP - MySQL - CMS Development Projects: 1. Todo App - Built using React, Vite, and Tailwind CSS - Includes local storage support - GitHub: https://github.com/nikitagavhale97-prog/Todo-App - Demo: https://todo-app-new-tawny.vercel.app/ 2. Weather App - Built using React and Tailwind CSS - Uses OpenWeather API for real-time weather data - GitHub: https://github.com/nikitagavhale97-prog/weather-app - Demo: https://weather-app-kappa-rust-33.vercel.app/ 3. Skyline Pharma Systems - Professional business website - Built using PHP, HTML, CSS, and MySQL - Demo: https://skylinepharmasystems.com/ 4. Earthian Art Foundation - Responsive foundation website - Built using PHP, HTML, CSS, and MySQL - Demo: https://earthianartfoundation.com/ Social Links: - GitHub: https://github.com/nikitagavhale97-prog - Instagram: https://www.instagram.com/nikitagavhale97/ - LinkedIn: https://www.linkedin.com/in/nikita-gavhale-b7011217b Contact: - Email: nikitagavhale97@gmail.com Resume: - NikitaGavhale-Frontend-Developer.pdf Answer naturally like a professional portfolio assistant. `, }, { role: "user", content: input, }, ], });
      const response = completion.choices[0]?.message?.content;
      const botMessage = { role: "bot", text: response };
      setMessages([...updatedMessages, botMessage]);
    } catch (error) {
      console.error(error);
      setMessages([
        ...updatedMessages,
        { role: "bot", text: "AI service is temporarily unavailable." },
      ]);
    }
    setLoading(false);
  };
  return (
    <>
      {" "}
      {/* Floating Button */}{" "}
      <button
        onClick={() => setOpen(!open)}
        className=" fixed bottom-6 right-6 bg-white text-black w-14 h-14 rounded-full shadow-xl text-2xl hover:scale-110 transition duration-300 z-50 "
      >
        {" "}
        💬{" "}
      </button>{" "}
      {/* Chat Window */}{" "}
      {open && (
        <div className=" fixed bottom-24 right-6 w-[350px] h-[500px] bg-zinc-900 border border-white/10 rounded-2xl flex flex-col overflow-hidden shadow-2xl z-50 ">
          {" "}
          {/* Header */}{" "}
          <div className="p-4 border-b border-white/10">
            {" "}
            <h2 className="text-white font-semibold text-lg">
              {" "}
              Ask AI About Me{" "}
            </h2>{" "}
            <p className="text-white/50 text-sm mt-1">
              {" "}
              Powered by Groq AI{" "}
            </p>{" "}
          </div>{" "}
          {/* Messages */}{" "}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {" "}
            {messages.map((msg, index) => (
              <div
                key={index}
                className={` max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                  msg.role === "user"
                    ? "ml-auto bg-blue-500 text-white"
                    : "bg-white/10 text-white"
                } `}
              >
                {" "}
                {msg.text}{" "}
              </div>
            ))}{" "}
            {loading && (
              <div className="bg-white/10 text-white p-3 rounded-2xl w-fit text-sm">
                {" "}
                Typing...{" "}
              </div>
            )}{" "}
          </div>{" "}
          {/* Input */}{" "}
          <div className="p-3 border-t border-white/10 flex gap-2">
            {" "}
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
              className=" flex-1 bg-white/10 text-white rounded-xl px-4 py-2 outline-none placeholder:text-white/40 "
            />{" "}
            <button
              onClick={sendMessage}
              disabled={loading}
              className=" bg-white text-black px-4 rounded-xl font-medium hover:scale-105 transition disabled:opacity-50 "
            >
              {" "}
              Send{" "}
            </button>{" "}
          </div>{" "}
        </div>
      )}{" "}
    </>
  );
}
