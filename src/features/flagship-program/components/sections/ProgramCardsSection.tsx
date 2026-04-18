/**
 * ProgramCardsSection.tsx — Clean Brand Design (Program Structure)
 */
"use client";
import React from "react";
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
  },
];

const badgeStyles: Record<string, React.CSSProperties> = {
  "tb-blue": { color: "rgba(122,163,212,.9)", background: "rgba(122,163,212,.1)", border: "1px solid rgba(122,163,212,.18)" },
  "tb-green": { color: "rgba(93,191,160,.9)", background: "rgba(93,191,160,.1)", border: "1px solid rgba(93,191,160,.18)" },
  "tb-purple": { color: "rgba(168,134,232,.9)", background: "rgba(168,134,232,.1)", border: "1px solid rgba(168,134,232,.18)" },
  "tb-red": { color: "rgba(229,62,62,.9)", background: "rgba(229,62,62,.1)", border: "1px solid rgba(229,62,62,.18)" },
};

const topLineStyles: Record<string, string> = {
  "ttl-1": "linear-gradient(90deg, #4a6fa5, #7ba3d4)",
  "ttl-2": "linear-gradient(90deg, #3a8c6e, #5dbfa0)",
  "ttl-3": "linear-gradient(90deg, #7c5cbf, #a886e8)",
  "ttl-4": "linear-gradient(90deg, #b83232, #e53e3e)",
};

const imgBgStyles: Record<string, string> = {
  "ti-1": "#0d1220",
  "ti-2": "#0a1710",
  "ti-3": "#0f0e1e",
  "ti-4": "#1a0a0a",
};

export const ProgramCardsSection: React.FC = () => {
  return (
    <section style={{ background: "#f2f2f0", borderTop: "1px solid #e0dedd", borderBottom: "1px solid #e0dedd", padding: "80px 0" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 32px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a9a9a" }}>CURRICULUM</span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", fontWeight: 200, color: "#0d0d0d", letterSpacing: "-0.038em", lineHeight: 1.06 }}>
          Program <b style={{ fontWeight: 800 }}>Structure</b>
        </h2>

        <p style={{ fontSize: "14px", color: "#6b6b6b", fontWeight: 500, marginBottom: "40px", marginTop: "6px" }}>6 Months Training + 6 Months Internship</p>

        {/* Terms Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "16px" }}>
          {terms.map((term, idx) => (
            <div
              key={idx}
              style={{
                background: "#1c2030",
                borderRadius: "14px",
                overflow: "hidden",
                position: "relative",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#242838";
                e.currentTarget.style.transform = "translateY(-3px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1c2030";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              {/* Top line */}
              <div style={{ height: "2px", width: "100%", background: topLineStyles[term.topLineClass] }} />

              {/* Image area */}
              <div
                style={{
                  width: "100%",
                  height: "120px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  overflow: "hidden",
                  background: imgBgStyles[term.imgClass],
                  padding: "16px",
                }}
              >
                <Image
                  src={term.image}
                  alt={term.title}
                  width={200}
                  height={120}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "contain",
                    position: "relative",
                    zIndex: 2,
                  }}
                />
                <div
                  style={{
                    position: "absolute",
                    right: "8px",
                    bottom: "-10px",
                    fontSize: "60px",
                    fontWeight: 900,
                    color: "rgba(255,255,255,.04)",
                    fontFamily: "'SF Mono', monospace",
                    lineHeight: 1,
                    pointerEvents: "none",
                    zIndex: 1,
                  }}
                >
                  {term.num}
                </div>
              </div>

              {/* Body */}
              <div style={{ padding: "16px 18px 20px" }}>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: "9.5px",
                    fontWeight: 700,
                    letterSpacing: "0.07em",
                    padding: "3px 9px",
                    borderRadius: "100px",
                    marginBottom: "8px",
                    ...badgeStyles[term.badgeClass],
                  }}
                >
                  {term.badge}
                </span>

                <div style={{ fontSize: "12.5px", fontWeight: 700, color: "rgba(255,255,255,.85)", marginBottom: "6px", letterSpacing: "-0.01em", lineHeight: 1.3 }}>
                  {term.title}
                </div>

                <p style={{ fontSize: "11.5px", color: "rgba(255,255,255,.3)", lineHeight: 1.6, marginBottom: "10px" }}>{term.desc}</p>

                <div style={{ display: "flex", flexDirection: "column", gap: "5px" }}>
                  {term.items.map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "11px", color: "rgba(255,255,255,.45)", lineHeight: 1.45 }}>
                      <span style={{ width: "3px", height: "3px", borderRadius: "50%", background: "rgba(255,255,255,.25)", flexShrink: 0, marginTop: "5px" }} />
                      {item}
                    </div>
                  ))}
                </div>

                <p style={{ fontSize: "10.5px", color: "rgba(255,255,255,.18)", marginTop: "7px", fontStyle: "italic" }}>{term.more}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
