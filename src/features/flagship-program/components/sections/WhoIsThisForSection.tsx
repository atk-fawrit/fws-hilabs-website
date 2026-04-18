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
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow and Title on same line */}
        <div style={{ display: "flex", alignItems: "baseline", gap: "20px", marginBottom: "40px" }}>
          <span style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, letterSpacing: "-0.038em", lineHeight: 1.06, color: "#000000" }}>
            ELIGIBILITY
          </span>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#000000" }}>
            Who is this <b style={{ fontWeight: 800 }}>for?</b>
          </span>
        </div>

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
          <div style={{ background: "#ffffff", padding: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "14px", paddingBottom: "26px", borderBottom: "1px solid #e0dedd", marginBottom: "6px" }}>
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "#000000",
                }}
              >
                <svg width="16" height="16" fill="none" stroke="white" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#000000" }}>This is for you if:</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {forYouItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < forYouItems.length - 1 ? "1px solid #e0dedd" : "none",
                  }}
                >
                  <svg width="16" height="16" fill="none" stroke="#000000" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "2px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
                  </svg>
                  <span style={{ fontSize: "16px", color: "#000000", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Not For You */}
          <div style={{ background: "#1c2030", padding: "50px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                paddingBottom: "26px",
                borderBottom: "1px solid rgba(255,255,255,0.1)",
                marginBottom: "6px",
              }}
            >
              <div
                style={{
                  width: "34px",
                  height: "34px",
                  borderRadius: "9px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  background: "rgba(255,255,255,0.1)",
                  border: "1px solid rgba(255,255,255,0.15)",
                }}
              >
                <svg width="13" height="13" fill="none" stroke="#ffffff" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <span style={{ fontSize: "17px", fontWeight: 700, color: "#ffffff" }}>This is NOT for you if:</span>
            </div>

            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {notForYouItems.map((item, i) => (
                <li
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                    padding: "16px 0",
                    borderBottom: i < notForYouItems.length - 1 ? "1px solid rgba(255,255,255,0.08)" : "none",
                  }}
                >
                  <svg width="14" height="14" fill="none" stroke="#ffffff" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "3px" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span style={{ fontSize: "16px", color: "#ffffff", lineHeight: 1.55 }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Note */}
        <p style={{ marginTop: "24px", fontSize: "14px", color: "#000000", textAlign: "center", fontStyle: "italic" }}>
          Selection is based on commitment and aptitude — not prior experience.
        </p>
      </div>
    </section>
  );
};