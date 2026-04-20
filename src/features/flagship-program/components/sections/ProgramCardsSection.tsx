/**
 * ProgramCardsSection.tsx — Clean Brand Design (Program Structure)
 */
"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const terms = [
  {
    num: "1",
    badge: "2 Months",
    badgeClass: "tb-blue",
    title: "Term 1 — Foundations",
    desc: "Build strong core fundamentals.",
    topLineClass: "ttl-1",
    imgClass: "ti-1",
    image: "/images/coding1.png",
    items: ["Data Structures & Algorithms", "Database Fundamentals (SQL + PostgreSQL)", "Problem Solving & Coding Practice"],
    more: "+2 more topics",
    accentColor: "#7ba3d4",
    accentBg: "rgba(74,111,165,0.15)",
    fullContent: {
      title: "Term 1 — Foundations",
      duration: "2 Months",
      description: "Build strong core fundamentals.",
      topics: [
        { label: "Data Structures & Algorithms", detail: "Arrays, linked lists, trees, graphs, sorting & searching" },
        { label: "Database Fundamentals", detail: "SQL + PostgreSQL — queries, joins, schema design" },
        { label: "Problem Solving & Coding Practice", detail: "Daily challenges, logical thinking, pattern recognition" },
        { label: "Git, GitHub, Jira", detail: "Version control, branching, issue tracking" },
        { label: "Basics of System Thinking", detail: "How software systems are structured and reasoned about" },
      ],
    },
  },
  {
    num: "2",
    badge: "2 Months",
    badgeClass: "tb-green",
    title: "Term 2 — Advanced Development",
    desc: "Move from theory to building real systems.",
    topLineClass: "ttl-2",
    imgClass: "ti-2",
    image: "/images/coding2.png",
    items: ["MERN Stack (MongoDB, Express, React, Node.js)", "Backend + API Development", "Real-world coding practices"],
    more: "+2 more topics",
    accentColor: "#5dbfa0",
    accentBg: "rgba(58,140,110,0.15)",
    fullContent: {
      title: "Term 2 — Advanced Development",
      duration: "2 Months",
      description: "Move from theory to building real systems.",
      topics: [
        { label: "MERN Stack", detail: "MongoDB, Express, React, Node.js — full-stack fundamentals" },
        { label: "Backend + API Development", detail: "REST APIs, authentication, middleware, error handling" },
        { label: "Real-world coding practices", detail: "Code structure, readability, refactoring, reviews" },
        { label: "Resume & LinkedIn building", detail: "Craft a developer profile that gets noticed" },
        { label: "Interview preparation basics", detail: "Mock interviews, common patterns, communication" },
      ],
    },
  },
  {
    num: "3",
    badge: "2 Months",
    badgeClass: "tb-purple",
    title: "Term 3 — Real-World Implementation",
    desc: "This is where you become an engineer.",
    topLineClass: "ttl-3",
    imgClass: "ti-3",
    image: "/images/phase3card.png",
    items: ["Build real-world applications", "Work on structured live projects", "Collaborate in teams"],
    more: "+3 more topics",
    accentColor: "#a886e8",
    accentBg: "rgba(124,92,191,0.15)",
    fullContent: {
      title: "Term 3 — Real-World Implementation",
      duration: "2 Months",
      description: "This is where you become an engineer.",
      topics: [
        { label: "Build real-world applications", detail: "Full products from scratch with real constraints" },
        { label: "Structured live projects", detail: "Deadlines, sprints, stakeholder feedback" },
        { label: "Collaborate in teams", detail: "Pair programming, code reviews, pull requests" },
        { label: "Debugging, optimization & deployment", detail: "Production mindset — performance, CI/CD basics" },
        { label: "AI tools in development workflows", detail: "GitHub Copilot, Claude, ChatGPT — used like a real engineer" },
      ],
    },
  },
  {
    num: "4",
    badge: "6 Months",
    badgeClass: "tb-red",
    title: "Term 4 — Internship",
    desc: "After training at HiLabs, you move into a real startup.",
    topLineClass: "ttl-4",
    imgClass: "ti-4",
    image: "/images/internship1.png",
    items: ["Work on live production systems", "Real codebases, not dummy projects", "Industry exposure and team collaboration"],
    more: "+2 more",
    accentColor: "#e53e3e",
    accentBg: "rgba(184,50,50,0.15)",
    fullContent: {
      title: "Term 4 — Internship",
      duration: "6 Months",
      description: "After training at HiLabs, you move into a real startup.",
      topics: [
        { label: "Live production systems", detail: "Real users, real bugs, real accountability" },
        { label: "Real codebases", detail: "Not dummy projects — actual company repositories" },
        { label: "Industry exposure", detail: "Standups, sprints, product decisions, engineering culture" },
        { label: "Performance-based evaluation", detail: "Your growth is measured and mentored continuously" },
        { label: "Mentorship during transition", detail: "HiLabs stays involved to ensure a smooth start" },
      ],
    },
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  "tb-blue":   { color: "rgba(122,163,212,.9)", background: "rgba(122,163,212,.1)", border: "1px solid rgba(122,163,212,.18)" },
  "tb-green":  { color: "rgba(93,191,160,.9)",  background: "rgba(93,191,160,.1)",  border: "1px solid rgba(93,191,160,.18)"  },
  "tb-purple": { color: "rgba(168,134,232,.9)", background: "rgba(168,134,232,.1)", border: "1px solid rgba(168,134,232,.18)" },
  "tb-red":    { color: "rgba(229,62,62,.9)",   background: "rgba(229,62,62,.1)",   border: "1px solid rgba(229,62,62,.18)"   },
};

const topLineStyles: Record<string, string> = {
  "ttl-1": "linear-gradient(90deg,#4a6fa5,#7ba3d4)",
  "ttl-2": "linear-gradient(90deg,#3a8c6e,#5dbfa0)",
  "ttl-3": "linear-gradient(90deg,#7c5cbf,#a886e8)",
  "ttl-4": "linear-gradient(90deg,#b83232,#e53e3e)",
};

const imgBgStyles: Record<string, string> = {
  "ti-1": "#0d1220",
  "ti-2": "#0a1710",
  "ti-3": "#0f0e1e",
  "ti-4": "#1a0a0a",
};

type Term = typeof terms[0];

function Modal({ term, onClose }: { term: Term; onClose: () => void }) {
  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      style={{
        position: "fixed", inset: 0,
        background: "rgba(8,10,15,0.75)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        zIndex: 1000, padding: "24px",
      }}
      onClick={onClose}
    >
      <div
        style={{
          background: "#0e1117",
          borderRadius: "16px",
          maxWidth: "640px",
          width: "100%",
          maxHeight: "88vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          boxShadow: "0 40px 120px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* ── HEADER ── */}
        <div style={{
          position: "relative",
          background: imgBgStyles[term.imgClass],
          padding: "32px 32px 28px",
          borderBottom: `1px solid rgba(255,255,255,0.06)`,
          overflow: "hidden",
          flexShrink: 0,
        }}>
          {/* accent glow */}
          <div style={{
            position: "absolute", top: "-60px", right: "-60px",
            width: "240px", height: "240px", borderRadius: "50%",
            background: `radial-gradient(circle, ${term.accentBg} 0%, transparent 70%)`,
            pointerEvents: "none",
          }} />

          {/* ghost number */}
          <div style={{
            position: "absolute", right: "24px", bottom: "-16px",
            fontSize: "96px", fontWeight: 900, lineHeight: 1,
            color: "rgba(255,255,255,0.04)",
            fontFamily: "'SF Mono',monospace",
            pointerEvents: "none", userSelect: "none",
          }}>{term.num}</div>

          {/* close */}
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              width: "28px", height: "28px",
              background: "rgba(255,255,255,0.08)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              cursor: "pointer", color: "rgba(255,255,255,0.6)",
              fontSize: "14px", lineHeight: 1,
              transition: "background 0.15s",
              zIndex: 2,
            }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.08)"; }}
          >×</button>

          {/* badge */}
          <span style={{
            display: "inline-block",
            fontSize: "9px", fontWeight: 700, letterSpacing: "0.12em",
            textTransform: "uppercase",
            padding: "4px 12px", borderRadius: "2px",
            marginBottom: "14px",
            ...badgeStyles[term.badgeClass],
          }}>{term.badge}</span>

          <h3 style={{
            fontSize: "22px", fontWeight: 700,
            color: "rgba(255,255,255,0.92)",
            letterSpacing: "-0.02em", lineHeight: 1.15,
            margin: "0 0 8px",
            fontFamily: "inherit",
            position: "relative", zIndex: 1,
          }}>{term.fullContent.title}</h3>

          <p style={{
            fontSize: "13px", color: "rgba(255,255,255,0.38)",
            margin: 0, lineHeight: 1.6,
            position: "relative", zIndex: 1,
            fontWeight: 300,
          }}>{term.fullContent.description}</p>

          {/* accent line at bottom */}
          <div style={{
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "1px",
            background: topLineStyles[term.topLineClass],
            opacity: 0.6,
          }} />
        </div>

        {/* ── TOPICS ── */}
        <div style={{
          flex: 1, overflowY: "auto",
          padding: "8px 0",
          scrollbarWidth: "none",
        }}>
          <div style={{
            padding: "20px 32px 8px",
            fontSize: "8px", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.2)",
          }}>What you&apos;ll cover</div>

          {term.fullContent.topics.map((topic, i) => (
            <div
              key={i}
              style={{
                display: "flex", alignItems: "flex-start", gap: "16px",
                padding: "16px 32px",
                borderBottom: i < term.fullContent.topics.length - 1
                  ? "1px solid rgba(255,255,255,0.05)" : "none",
                transition: "background 0.15s",
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; }}
            >
              {/* index number */}
              <div style={{
                width: "22px", height: "22px",
                borderRadius: "4px",
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, marginTop: "1px",
                fontSize: "10px", fontWeight: 600,
                color: "rgba(255,255,255,0.25)",
                fontFamily: "'SF Mono',monospace",
              }}>{String(i + 1).padStart(2, "0")}</div>

              <div style={{ flex: 1 }}>
                <div style={{
                  fontSize: "13.5px", fontWeight: 600,
                  color: "rgba(255,255,255,0.82)",
                  marginBottom: "3px", lineHeight: 1.3,
                }}>{topic.label}</div>
                <div style={{
                  fontSize: "12px", color: "rgba(255,255,255,0.32)",
                  lineHeight: 1.6, fontWeight: 300,
                }}>{topic.detail}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── FOOTER ── */}
        <div style={{
          padding: "16px 32px",
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          flexShrink: 0,
          background: "rgba(255,255,255,0.02)",
        }}>
          <span style={{
            fontSize: "11px", color: "rgba(255,255,255,0.2)",
            fontWeight: 400, letterSpacing: "0.02em",
          }}>
            {term.fullContent.topics.length} topics · {term.fullContent.duration}
          </span>
          <button
            onClick={onClose}
            style={{
              display: "inline-flex", alignItems: "center", gap: "7px",
              padding: "8px 20px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "3px",
              fontSize: "11px", fontWeight: 600,
              letterSpacing: "0.06em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.5)",
              cursor: "pointer",
              transition: "background 0.15s, color 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.12)";
              e.currentTarget.style.color = "rgba(255,255,255,0.8)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.07)";
              e.currentTarget.style.color = "rgba(255,255,255,0.5)";
            }}
          >Close</button>
        </div>
      </div>
    </div>
  );
}

export const ProgramCardsSection: React.FC = () => {
  const [selectedTerm, setSelectedTerm] = useState<Term | null>(null);

  return (
    <>
      <section style={{ background: "#f2f2f0", borderTop: "1px solid #e0dedd", borderBottom: "1px solid #e0dedd", padding: "80px 0" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 32px" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
            <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#000000" }}>CURRICULUM</span>
            <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
          </div>

          {/* Title */}
          <h2 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "#000000", letterSpacing: "-0.038em", lineHeight: 1.06 }}>
            Program <b style={{ fontWeight: 800 }}>Structure</b>
          </h2>
          <p style={{ fontSize: "18px", color: "#000000", fontWeight: 500, marginBottom: "40px", marginTop: "6px" }}>6 Months Training + 6 Months Internship</p>

          {/* Terms Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "32px" }}>
            {terms.map((term, idx) => (
              <div
                key={idx}
                style={{
                  background: "#1c2030", borderRadius: "14px",
                  overflow: "hidden", position: "relative",
                  transition: "all 0.3s ease", cursor: "pointer",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#242838";
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "0 12px 40px rgba(0,0,0,0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "#1c2030";
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                onClick={() => setSelectedTerm(term)}
              >
                <div style={{ height: "2px", width: "100%", background: topLineStyles[term.topLineClass] }} />
                <div style={{
                  width: "100%", height: "120px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  position: "relative", overflow: "hidden",
                  background: imgBgStyles[term.imgClass], padding: "16px",
                }}>
                  <Image src={term.image} alt={term.title} width={200} height={120}
                    style={{ width: "100%", height: "100%", objectFit: "contain", position: "relative", zIndex: 2 }} />
                  <div style={{
                    position: "absolute", right: "8px", bottom: "-10px",
                    fontSize: "60px", fontWeight: 900, color: "rgba(255,255,255,.04)",
                    fontFamily: "'SF Mono',monospace", lineHeight: 1, pointerEvents: "none", zIndex: 1,
                  }}>{term.num}</div>
                </div>

                <div style={{ padding: "22px 24px 26px" }}>
                  <span style={{
                    display: "inline-block", fontSize: "12px", fontWeight: 700,
                    letterSpacing: "0.07em", padding: "5px 12px", borderRadius: "100px",
                    marginBottom: "10px", ...badgeStyles[term.badgeClass],
                  }}>{term.badge}</span>

                  <div style={{ fontSize: "16px", fontWeight: 700, color: "#ffffff", marginBottom: "8px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                    {term.title}
                  </div>
                  <p style={{ fontSize: "14px", color: "rgba(255,255,255,.8)", lineHeight: 1.6, marginBottom: "12px" }}>{term.desc}</p>

                  <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                    {term.items.map((item, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "13px", color: "rgba(255,255,255,.9)", lineHeight: 1.45 }}>
                        <span style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(255,255,255,.7)", flexShrink: 0, marginTop: "7px" }} />
                        {item}
                      </div>
                    ))}
                  </div>

                  <p style={{ fontSize: "12px", color: "rgba(255,255,255,.5)", marginTop: "10px", fontStyle: "italic" }}>{term.more}</p>

                  <div style={{
                    marginTop: "16px", padding: "8px 12px",
                    background: "rgba(255,255,255,0.06)",
                    borderRadius: "4px", fontSize: "10px",
                    color: "rgba(255,255,255,0.45)", textAlign: "center",
                    border: "1px solid rgba(255,255,255,0.08)",
                    letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 600,
                  }}>View Details →</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {selectedTerm && <Modal term={selectedTerm} onClose={() => setSelectedTerm(null)} />}
    </>
  );
};