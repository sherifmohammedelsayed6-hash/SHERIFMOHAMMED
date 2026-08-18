import { useEffect, useRef, useState } from "react";
import "./AIAssistant.css";

type Message = {
  role: "user" | "assistant";
  content: string;
};

/* =========================================================
   SHERIF MOHAMMED - PORTFOLIO DATA
========================================================= */

const sherifData = {
  name: "Sherif Mohammed El Sayed",

  professionalTitle:
    "Sales Executive, E-Commerce Specialist and Air Gun Technician",

  currentRole:
    "Sales Manager at Arabian Hunter / Ben Humaid Group",

  company: "Arabian Hunter / Ben Humaid Group",

  experience:
    "Sherif has professional experience at Arabian Hunter from 2018 to present, working across sales, customer service, online store management, product management, inventory, order processing and e-commerce operations.",

  skills: [
    "Sales Management",
    "Sales",
    "Customer Service",
    "E-Commerce",
    "Online Store Management",
    "Product Management",
    "Inventory Management",
    "Order Processing",
    "Website Management",
    "Odoo",
    "JavaScript",
    "React",
    "TypeScript",
    "CSS",
    "GSAP",
    "Three.js",
    "Air Gun Technical Work",
  ],

  projects: [
    {
      name: "Online Store",
      year: "2023",
      category: "Best Seller Award",
      description:
        "Recognized as an outstanding online store best seller for achieving excellent sales performance and customer satisfaction in 2023.",
    },

    {
      name: "Saudi Falcon Exhibition 2019",
      year: "2019",
      category: "E-Commerce",
      description:
        "Participated in the Saudi Falcon Exhibition 2019, gaining valuable experience in the hunting and falconry industry and engaging with customers and industry professionals.",
    },

    {
      name: "Best Seller Award Asswaiba Company",
      year: "2019",
      category: "Website Management",
      description:
        "Awarded as the Best Seller by Asswaiba Company during the Saudi Falcon Exhibition 2019 for outstanding sales performance and customer engagement.",
    },

    {
      name: "Best Seller & Online Store Management",
      year: "2026",
      category: "Business Website",
      description:
        "Recognized as a Best Seller while managing online store operations, sales, customer service and e-commerce activities at ArabianHunter.com.",
    },

    {
      name: "Best Seller Award - Arabian Hunter Khamis Branch",
      year: "2020",
      category: "Sales Management",
      description:
        "Recognized as a Best Seller at Arabian Hunters Khamis Branch in 2020 for outstanding sales performance and customer service.",
    },

    {
      name: "Saudi Falcon Exhibition Achievement",
      year: "2026",
      category: "E-Commerce Management",
      description:
        "Received recognition at the 2026 Saudi Falcon Exhibition alongside his respected boss, reflecting dedication, hard work and contribution to exhibition and sales performance.",
    },
  ],

  awards: [
    "Best Seller Award - 2023",
    "Saudi Falcon Exhibition 2019 recognition",
    "Best Seller Award - Asswaiba Company, 2019",
    "Best Seller - Arabian Hunter Khamis Branch, 2020",
    "Saudi Falcon Exhibition Achievement - 2026",
  ],

  education: [
    "P.S.C. - Primary School Certificate",
    "J.S.C. - Junior School Certificate",
    "S.S.C. - Secondary School Certificate",
    "H.S.C. - Higher Secondary Certificate",
  ],

  businessExperience: [
    {
      name: "Fenian Fashion",
      role: "Owner / Entrepreneur",
      description:
        "Independent retail business in Bangladesh focused on fashion, products and customer service.",
    },
    {
      name: "Nexoria BD",
      role: "Owner / Entrepreneur",
      description:
        "Independent business venture in Bangladesh focused on modern products and digital business opportunities.",
    },
  ],

  professionalSummary:
    "Sales Executive, E-Commerce Specialist and Air Gun Technician with extensive experience at Arabian Hunter from 2018 to present. Experienced in sales, customer service, online store management, product management, inventory, order processing, e-commerce operations, air gun maintenance and technical troubleshooting.",
};

/* =========================================================
   QUICK QUESTIONS
========================================================= */

const suggestions = [
  "What are Sherif's skills?",
  "Tell me about his experience.",
  "What projects has he built?",
  "What awards has he received?",
];

/* =========================================================
   TEXT HELPERS
========================================================= */

const normalizeText = (text: string) => {
  return text
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/[?!.:,;]/g, "")
    .trim();
};

/* =========================================================
   LOCAL KNOWLEDGE ENGINE
========================================================= */

const generateAnswer = (question: string): string => {
  const q = normalizeText(question);

  /* -----------------------------------------
     NAME
  ----------------------------------------- */

  if (
    q.includes("who is sherif") ||
    q.includes("who is sharif") ||
    q.includes("who is sherif mohammed") ||
    q.includes("tell me about sherif")
  ) {
    return (
      `${sherifData.name} is a ${sherifData.professionalTitle}. ` +
      `He currently works as ${sherifData.currentRole}. ` +
      `${sherifData.experience}`
    );
  }

  /* -----------------------------------------
     SKILLS
  ----------------------------------------- */

  if (
    q.includes("skill") ||
    q.includes("skills") ||
    q.includes("what can sherif do") ||
    q.includes("expertise") ||
    q.includes("technologies")
  ) {
    return (
      "Sherif's main skills include:\n\n" +
      "• " +
      sherifData.skills.join("\n• ")
    );
  }

  /* -----------------------------------------
     EXPERIENCE
  ----------------------------------------- */

  if (
    q.includes("experience") ||
    q.includes("work experience") ||
    q.includes("career") ||
    q.includes("job") ||
    q.includes("professional")
  ) {
    return (
      `Sherif has been working at ${sherifData.company} since 2018. ` +
      `His experience includes sales, customer service, online store management, ` +
      `product management, inventory, order processing and e-commerce operations.\n\n` +
      `Current role: ${sherifData.currentRole}.`
    );
  }

  /* -----------------------------------------
     CURRENT JOB
  ----------------------------------------- */

  if (
    q.includes("current job") ||
    q.includes("current role") ||
    q.includes("where does sherif work") ||
    q.includes("where does he work") ||
    q.includes("company")
  ) {
    return (
      `Sherif currently works as ${sherifData.currentRole}.\n\n` +
      `Company: ${sherifData.company}`
    );
  }

  /* -----------------------------------------
     PROJECTS
  ----------------------------------------- */

  if (
    q.includes("project") ||
    q.includes("projects") ||
    q.includes("built") ||
    q.includes("portfolio")
  ) {
    return (
      "Sherif's portfolio includes:\n\n" +
      sherifData.projects
        .map(
          (project) =>
            `• ${project.name} (${project.year})\n  ${project.description}`
        )
        .join("\n\n")
    );
  }

  /* -----------------------------------------
     AWARDS
  ----------------------------------------- */

  if (
    q.includes("award") ||
    q.includes("awards") ||
    q.includes("achievement") ||
    q.includes("achievements") ||
    q.includes("recognition")
  ) {
    return (
      "Sherif's notable awards and achievements include:\n\n" +
      "• " +
      sherifData.awards.join("\n• ")
    );
  }

  /* -----------------------------------------
     EDUCATION
  ----------------------------------------- */

  if (
    q.includes("education") ||
    q.includes("school") ||
    q.includes("certificate") ||
    q.includes("study")
  ) {
    return (
      "Sherif's education background includes:\n\n" +
      "• " +
      sherifData.education.join("\n• ")
    );
  }

  /* -----------------------------------------
     BUSINESS
  ----------------------------------------- */

  if (
    q.includes("business") ||
    q.includes("entrepreneur") ||
    q.includes("fenian") ||
    q.includes("nexoria")
  ) {
    return (
      "Sherif's business experience includes:\n\n" +
      sherifData.businessExperience
        .map(
          (business) =>
            `• ${business.name} — ${business.role}\n  ${business.description}`
        )
        .join("\n\n")
    );
  }

  /* -----------------------------------------
     E-COMMERCE
  ----------------------------------------- */

  if (
    q.includes("ecommerce") ||
    q.includes("e-commerce") ||
    q.includes("online store") ||
    q.includes("odoo")
  ) {
    return (
      "Sherif has strong experience in e-commerce and online store operations. " +
      "His experience includes online store management, product management, " +
      "inventory, order processing, customer service and Odoo-based e-commerce operations."
    );
  }

  /* -----------------------------------------
     SALES
  ----------------------------------------- */

  if (
    q.includes("sales") ||
    q.includes("seller") ||
    q.includes("selling")
  ) {
    return (
      "Sales is one of Sherif's strongest professional areas. " +
      "He has experience in sales management, customer engagement, " +
      "online store sales and has received multiple Best Seller recognitions."
    );
  }

  /* -----------------------------------------
     WEBSITE
  ----------------------------------------- */

  if (
    q.includes("website") ||
    q.includes("web development") ||
    q.includes("coding") ||
    q.includes("programming")
  ) {
    return (
      "Sherif's portfolio includes web-related skills such as React, " +
      "TypeScript, JavaScript, CSS, GSAP and Three.js. " +
      "He also has experience with website and online store management."
    );
  }

  /* -----------------------------------------
     CONTACT / INTRO
  ----------------------------------------- */

  if (
    q.includes("hello") ||
    q.includes("hi") ||
    q.includes("hey") ||
    q === "help"
  ) {
    return (
      "Hello! I'm Sherif's Portfolio Assistant. " +
      "You can ask me about his skills, experience, projects, awards, education, " +
      "business experience or e-commerce work."
    );
  }

  /* -----------------------------------------
     SUMMARY
  ----------------------------------------- */

  if (
    q.includes("summary") ||
    q.includes("about his career") ||
    q.includes("professional summary")
  ) {
    return sherifData.professionalSummary;
  }

  /* -----------------------------------------
     FALLBACK
  ----------------------------------------- */

  return (
    "I can help you with information about Sherif Mohammed's portfolio.\n\n" +
    "Try asking:\n\n" +
    "• What are Sherif's skills?\n" +
    "• Tell me about his experience.\n" +
    "• What projects has he built?\n" +
    "• What awards has he received?\n" +
    "• Where does Sherif work?\n" +
    "• Tell me about his education.\n" +
    "• What is his e-commerce experience?"
  );
};

/* =========================================================
   COMPONENT
========================================================= */

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

  /* =========================================================
     AUTO SCROLL
  ========================================================= */

  useEffect(() => {
    const timer = window.setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);

    return () => window.clearTimeout(timer);
  }, [messages, loading]);

  /* =========================================================
     SEND MESSAGE
  ========================================================= */

  const sendMessage = async (message?: string) => {
    const question = (
      message !== undefined ? message : input
    ).trim();

    if (!question || loading) {
      return;
    }

    setInput("");

    /* USER MESSAGE */

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setLoading(true);

    /*
      Small delay makes the assistant feel natural.
      No API call.
      No API key.
      No backend.
    */

    window.setTimeout(() => {
      const answer = generateAnswer(question);

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: answer,
        },
      ]);

      setLoading(false);
    }, 500);
  };

  /* =========================================================
     FORM
  ========================================================= */

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
    sendMessage();
  };

  /* =========================================================
     ENTER KEY
  ========================================================= */

  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      sendMessage();
    }
  };

  /* =========================================================
     RETURN
  ========================================================= */

  return (
    <>
      {/* =====================================================
          NAVBAR BUTTON
      ===================================================== */}

      <button
        type="button"
        className={`sherif-assistant-nav ${
          open ? "active" : ""
        }`}
        onClick={() => setOpen((prev) => !prev)}
        aria-label="Open Sherif's Assistant"
        aria-expanded={open}
      >
        <span className="assistant-status-dot" />

        <span className="assistant-nav-text">
          SHERIF’S ASSISTANT
        </span>
      </button>

      {/* =====================================================
          CHAT PANEL
      ===================================================== */}

      <div
        className={`sherif-assistant-panel ${
          open ? "open" : ""
        }`}
        aria-hidden={!open}
      >
        {/* HEADER */}

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

        {/* MESSAGES */}

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

          {/* TYPING */}

          {loading && (
            <div className="assistant-message bot-message typing">
              <span />
              <span />
              <span />
            </div>
          )}

          <div
            ref={messagesEndRef}
            className="assistant-scroll-anchor"
          />
        </div>

        {/* SUGGESTIONS */}

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

        {/* INPUT */}

        <form
          className="assistant-input-wrapper"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            value={input}
            onChange={(event) =>
              setInput(event.target.value)
            }
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

        {/* FOOTER */}

        <div className="assistant-footer">
          Sherif’s Assistant · Portfolio AI
        </div>
      </div>
    </>
  );
}