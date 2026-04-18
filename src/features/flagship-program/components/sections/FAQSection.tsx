/**
 * FAQSection.tsx — Clean Brand Design
 */
"use client";
import React, { useState } from "react";

const faqs = [
  {
    num: "1",
    question: "Do I need prior coding experience?",
    answer: "No prior experience is required. Selection is based on commitment and aptitude, not prior coding knowledge. We start from the fundamentals.",
  },
  {
    num: "2",
    question: 'What does "AI-Native Software Engineer" mean?',
    answer:
      "It means you learn to build software the way modern engineers do — using AI tools (like GitHub Copilot, Claude, ChatGPT) as part of your workflow, while still understanding the fundamentals deeply.",
  },
  {
    num: "3",
    question: "Will I really get an internship after the program?",
    answer: "Yes. Every student who successfully completes the program is placed in a real startup internship. This is a core promise of the fellowship.",
  },
  {
    num: "4",
    question: "Is placement guaranteed?",
    answer:
      "The internship is guaranteed for those who complete the training. Final job placement depends on performance and the opportunities available, but the internship itself is 100% guaranteed.",
  },
  {
    num: "5",
    question: "What kind of roles can I get after this?",
    answer: "Junior Software Engineer, Full-Stack Developer, Backend Developer, Frontend Developer, or Software Developer roles at startups and tech companies.",
  },
  {
    num: "6",
    question: "What technologies will I learn?",
    answer: "JavaScript, Node.js, React, MongoDB, Express (MERN Stack), SQL/PostgreSQL, Git, REST APIs, System Design basics, and AI developer tools.",
  },
  {
    num: "7",
    question: "What makes this different from other courses?",
    answer:
      "Full-time in-person structure, real startup internship guarantee, performance-based progression, and an AI-native curriculum. This is not a passive course — it's an engineering bootcamp.",
  },
  {
    num: "8",
    question: "How are students evaluated?",
    answer: "Weekly assessments, project-based evaluation, code reviews, and team collaboration scores. Standards are high — this ensures your skills are genuinely job-ready.",
  },
];

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section style={{ padding: "80px 0", background: "#ffffff", borderTop: "1px solid #e0dedd" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#000000" }}>QUESTIONS</span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "#000000", letterSpacing: "-0.038em", lineHeight: 1.06, marginBottom: "40px" }}>
          Common <b style={{ fontWeight: 800 }}>questions</b>
        </h2>

        {/* FAQ List */}
        <div style={{ display: "flex", flexDirection: "column" }}>
          {faqs.map((faq, idx) => (
            <div key={idx} style={{ borderBottom: "1px solid #e0dedd" }}>
              {/* Question */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "16px",
                  padding: "18px 0",
                  cursor: "pointer",
                  userSelect: "none",
                }}
                onClick={() => toggle(idx)}
              >
                <span style={{ fontSize: "12px", fontWeight: 700, color: "#000000", minWidth: "20px" }}>{faq.num}</span>
                <span style={{ fontSize: "16px", fontWeight: 600, color: "#000000", flex: 1, letterSpacing: "-0.01em" }}>{faq.question}</span>
                <div
                  style={{
                    width: "22px",
                    height: "22px",
                    borderRadius: "50%",
                    border: `1px solid ${openIndex === idx ? "#1c2030" : "#e0dedd"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.15s, border-color 0.15s",
                    background: openIndex === idx ? "#1c2030" : "transparent",
                  }}
                >
                  <svg width="12" height="12" fill="none" stroke={openIndex === idx ? "white" : "#000000"} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={openIndex === idx ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
                  </svg>
                </div>
              </div>

              {/* Answer */}
              {openIndex === idx && (
                <div style={{ fontSize: "15px", color: "#000000", lineHeight: 1.72, padding: "0 0 18px 28px" }}>{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
