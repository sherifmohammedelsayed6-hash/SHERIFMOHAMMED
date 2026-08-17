import { useEffect, useRef, useState } from "react";
import "./AIAssistant.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

const suggestions = [
  "What are Sherif's skills?",
  "Tell me about his experience.",
  "What projects has he built?",
  "What awards has he received?",
];

export default function AIAssistant() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content:
        "Hi! I'm Sherif’s Assistant. Ask me anything about Sherif Mohammed, his skills, experience, projects, awards or work.",
    },
  ]);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);

  /*
  =========================================================
  AUTO SCROLL
  =========================================================
  */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);

    return () => {
      window.clearTimeout(timer);
    };
  }, [messages, loading]);

  /*
  =========================================================
  SEND MESSAGE
  =========================================================
  */

  const sendMessage = async (message?: string) => {
    const question = (message !== undefined ? message : input).trim();

    if (!question || loading) {
      return;
    }

    setInput("");

    /*
    USER MESSAGE
    */

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify({
          message: question,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data?.error || "Something went wrong.");
      }

      /*
      ASSISTANT MESSAGE
      */

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            data?.answer ||
            "Sorry, I couldn't find an answer right now.",
        },
      ]);
    } catch (error) {
      console.error("Sherif's Assistant:", error);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong. Please try again.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  /*
  =========================================================
  FORM SUBMIT
  =========================================================
  */

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    sendMessage();
  };

  /*
  =========================================================
  ENTER KEY
  =========================================================
  */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();

      sendMessage();
    }
  };

  /*
  =========================================================
  RETURN
  =========================================================
  */

  return (
    <>
      {/* =================================================
          NAVBAR ASSISTANT BUTTON
      ================================================= */}

      <button
        type="button"
        className={`sherif-assistant-nav ${open ? "active" : ""}`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open Sherif's Assistant"
        aria-expanded={open}
      >
        <span className="assistant-status-dot" />

        <span className="assistant-nav-text">
          SHERIF’S ASSISTANT
        </span>
      </button>

      {/* =================================================
          CHAT PANEL
      ================================================= */}

      <div
        className={`sherif-assistant-panel ${open ? "open" : ""}`}
        aria-hidden={!open}
      >
        {/* ===============================================
            HEADER
        =============================================== */}

        <div className="assistant-header">
          <div className="assistant-header-left">
            <div className="assistant-orb">
              <span />
            </div>

            <div className="assistant-heading">
              <h3>Sherif’s Assistant</h3>

              <p>
                Portfolio Assistant
                <span className="online-dot" />
              </p>
            </div>
          </div>

          <button
            type="button"
            className="assistant-close"
            onClick={() => setOpen(false)}
            aria-label="Close assistant"
          >
            ×
          </button>
        </div>

        {/* ===============================================
            MESSAGES
        =============================================== */}

        <div className="assistant-messages">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={`assistant-message ${
                message.role === "user"
                  ? "user-message"
                  : "bot-message"
              }`}
            >
              <span className="assistant-message-text">
                {message.content}
              </span>
            </div>
          ))}

          {/* =============================================
              TYPING INDICATOR
          ============================================= */}

          {loading && (
            <div className="assistant-message bot-message typing">
              <span />
              <span />
              <span />
            </div>
          )}

          {/* =============================================
              SCROLL TARGET
          ============================================= */}

          <div
            ref={messagesEndRef}
            className="assistant-scroll-anchor"
          />
        </div>

        {/* ===============================================
            SUGGESTIONS
        =============================================== */}

        {messages.length === 1 && !loading && (
          <div className="assistant-suggestions">
            {suggestions.map((suggestion) => (
              <button
                key={suggestion}
                type="button"
                onClick={() => sendMessage(suggestion)}
              >
                {suggestion}
              </button>
            ))}
          </div>
        )}

        {/* ===============================================
            INPUT
        =============================================== */}

        <form
          className="assistant-input-wrapper"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Ask about Sherif..."
            disabled={loading}
            autoComplete="off"
            aria-label="Ask about Sherif"
          />

          <button
            type="submit"
            disabled={!input.trim() || loading}
            aria-label="Send message"
          >
            {loading ? "…" : "→"}
          </button>
        </form>

        {/* ===============================================
            FOOTER
        =============================================== */}

        <div className="assistant-footer">
          Sherif’s Assistant · Portfolio AI
        </div>
      </div>
    </>
  );
}
