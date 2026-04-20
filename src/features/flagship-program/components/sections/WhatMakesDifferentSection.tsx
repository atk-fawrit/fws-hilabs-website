/**
 * WhatMakesDifferentSection.tsx — Clean Brand Design
 */
"use client";
import React from "react";

const differentiators = [
  {
    num: "1",
    title: "AI-Native Learning Approach",
    desc: "We don't just teach coding — we teach you how to think and build with AI like a modern engineer.",
    subs: [
      "First build strong fundamentals (so you're not dependent on tools)",
      "Then learn how to use AI to accelerate development, debug faster, and build smarter",
    ],
  },
  {
    num: "2",
    title: "Real Engineering, Not Tutorials",
    desc: "Build real-world systems, work on meaningful projects, write clean, production-level code.",
    subs: ["Build real-world systems", "Work on meaningful projects", "Write clean, production-level code", "No copy-paste learning. No passive watching."],
  },
  {
    num: "3",
    title: "100% Guaranteed Internship",
    desc: "Every student who successfully completes the program gets a guaranteed internship opportunity.",
    subs: ["Work on real products", "Contribute to actual codebases"],
  },
  {
    num: "4",
    title: "High Discipline Environment",
    desc: "Structured daily schedule, continuous feedback and evaluation, strong accountability.",
    subs: ["Structured daily schedule", "Continuous feedback and evaluation", "Strong accountability — this ensures you stay consistent and actually improve"],
  },
  {
    num: "5",
    title: "Performance-Based Progression",
    desc: "This is not a \"pay and pass\" program. We maintain high standards.",
    subs: ["You stay serious", "Your skills stay real", "Your outcome stays strong"],
  },
  {
    num: "6",
    title: "Direct Path to Industry",
    desc: "From learning → building → working. No gap. No confusion.",
    subs: ["Just a clear path to becoming a software engineer"],
  },
];

export const WhatMakesDifferentSection: React.FC = () => {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#000000" }}>DIFFERENTIATORS</span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "#000000", letterSpacing: "-0.038em", lineHeight: 1.06, marginBottom: "48px" }}>
          What makes this program <b style={{ fontWeight: 800 }}>different</b>
        </h2>

        {/* Grid */}
            <div
        className="responsivegrid"
        style={{
          display: "grid",
          gap: 0,
          border: "1px solid #e0dedd",
          borderRadius: "20px",
          overflow: "hidden",
          boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
        }}
        >
          {differentiators.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "flex-start",
                gap: "20px",
                padding: "40px",
                borderBottom: idx !== differentiators.length - 1 ? "1px solid #e0dedd" : "none",
                borderRight: idx % 2 === 0 ? "1px solid #e0dedd" : "none",
                transition: "all 0.25s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f2f2f0";
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 25px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "none";
              }}
            >
              {/* Number */}
              <div
                style={{
                  width: "40px",
                  height: "40px",
                  borderRadius: "10px",
                  background: "#1c2030",
                  color: "#fff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "14px",
                  fontWeight: 800,
                  flexShrink: 0,
                  fontFamily: "'SF Mono', monospace",
                  boxShadow: "0 4px 12px rgba(28, 32, 48, 0.15)",
                }}
              >
                {item.num}
              </div>

              {/* Content */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: "19px", fontWeight: 700, color: "#000000", letterSpacing: "-0.015em", marginBottom: "10px" }}>{item.title}</div>
                <div style={{ fontSize: "16px", color: "#000000", lineHeight: 1.68, marginBottom: "14px" }}>{item.desc}</div>
                <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                  {item.subs.map((sub, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "15px", color: "#000000" }}>
                      <span style={{ flexShrink: 0, fontSize: "12px", marginTop: "1px", opacity: 0.7, color: "#1c2030" }}>→</span>
                      {sub}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
