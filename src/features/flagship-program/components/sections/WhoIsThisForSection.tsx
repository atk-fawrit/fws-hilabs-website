/**
 * WhoIsThisForSection.tsx — Clean Brand Design
 */
"use client";
import React from "react";

const forYouItems = [
  "You are serious about becoming a software engineer",
  "You want to change your career to software engineering",
  "You want real skills and are ready for full-time commitment (no distractions)",
  "You are okay with discipline, feedback, and high standards",
];

const notForYouItems = [
  "You want a casual or part-time course",
  "You are only looking for a certificate",
  "You cannot commit daily time and effort",
  "You are not comfortable with performance-based progression",
];

export const WhoIsThisForSection: React.FC = () => {
  return (
    <section style={{ padding: "80px 0", background: "#f2f2f0" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a9a9a" }}>
            ELIGIBILITY
          </span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", fontWeight: 200, color: "#0d0d0d", letterSpacing: "-0.038em", lineHeight: 1.06, marginBottom: "40px" }}>
          Who is this <b style={{ fontWeight: 800 }}>for?</b>
        </h2>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "2px",
            borderRadius: "16px",
            overflow: "hidden",
            border: "1px solid #e0dedd",
          }}
        >
          {/* For You */}
          <div style={{ background: "#ffffff", padding: "36px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", paddingBottom: "20px", borderBottom: "1px solid #e0dedd", marginBottom: "2px" }}>
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "#1c2030",
                }}
              >
                <svg width="13" height="13" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "#0d0d0d" }}>This is for you if:</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {forYouItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom: i < forYouItems.length - 1 ? "1px solid #e0dedd" : "none",
                  }}
                >
                  <svg width="13" height="13" fill="none" stroke="#3a3a3a" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontSize: "13px", color: "#3a3a3a", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div style={{ background: "#1c2030", padding: "36px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                paddingBottom: "20px",
                borderBottom: "1px solid rgba(255,255,255,0.06)",
                marginBottom: "2px",
              }}
            >
              <div
                style={{
                  width: "28px",
                  height: "28px",
                  borderRadius: "7px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.1)",
                }}
              >
                <svg width="10" height="10" fill="none" stroke="rgba(255,255,255,0.5)" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span style={{ fontSize: "13px", fontWeight: 700, color: "rgba(255,255,255,0.65)" }}>This is NOT for you if:</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notForYouItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "12px 0",
                    borderBottom: i < notForYouItems.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  }}
                >
                  <svg width="11" height="11" fill="none" stroke="rgba(255,255,255,0.22)" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "3px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.38)", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <p style={{ marginTop: "18px", fontSize: "11.5px", color: "#9a9a9a", textAlign: "center", fontStyle: "italic" }}>
          Selection is based on commitment and aptitude — not prior experience.
        </p>
      </div>
    </section>
  );
};
