/**
 * ImportantNotesSection.tsx — Clean Brand Design (Important Notes + CTA)
 */
"use client";
import React, { useState } from "react";
import Link from "next/link";

const notes = ["Full-time, in-person program", "Not compatible with jobs or college attendance", "No refunds after program start", "Seats are limited and selective"];

export const ImportantNotesSection: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      {/* Important Notes */}
      <section style={{ background: "#1c2030", padding: "56px 0" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 56px" }}>
          {/* Collapsible Header */}
          <div
            style={{
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "20px",
              padding: "20px 0",
              borderBottom: "1px solid rgba(255,255,255,0.08)",
            }}
            onClick={toggleExpanded}
          >
            <div>
              {/* Eyebrow */}
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
                <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#ffffff" }}>
                  IMPORTANT NOTES
                </span>
                <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
              </div>
              <h2 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "#ffffff", letterSpacing: "-0.038em", lineHeight: 1.06, margin: 0 }}>
                Before you <b style={{ fontWeight: 800 }}>apply</b>
              </h2>
            </div>
            <div
              style={{
                width: "32px",
                height: "32px",
                borderRadius: "50%",
                border: `2px solid ${isExpanded ? "#ffffff" : "rgba(255,255,255,0.3)"}`,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
                transition: "all 0.25s ease",
                background: isExpanded ? "#ffffff" : "transparent",
              }}
            >
              <svg width="14" height="14" fill="none" stroke={isExpanded ? "#1c2030" : "#ffffff"} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d={isExpanded ? "M5 15l7-7 7 7" : "M19 9l-7 7-7-7"} />
              </svg>
            </div>
          </div>

          {/* Expandable Notes Grid */}
          {isExpanded && (
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: "24px", animation: "fadeIn 0.3s ease-in-out" }}>
              {notes.map((note, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    padding: "13px 0",
                    borderBottom: idx < notes.length - 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                    fontSize: "15px",
                    color: "#ffffff",
                    lineHeight: 1.5,
                    paddingRight: idx % 2 === 0 ? "40px" : "0",
                  }}
                >
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.7)", flexShrink: 0, marginTop: "5px" }} />
                  {note}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f2f2f0", padding: "96px 0", borderTop: "1px solid #e0dedd" }}>
        <div style={{ maxWidth: "1600px", margin: "0 auto", textAlign: "center", padding: "0 56px" }}>
          <h2
            style={{
              fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)",
              fontWeight: 200,
              color: "#000000",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            This is not for everyone.
            <br />
            <strong style={{ fontWeight: 800 }}>But if you are serious —</strong>
          </h2>

          <p style={{ fontSize: "18px", color: "#000000", marginBottom: "32px", fontWeight: 400, lineHeight: 1.65 }}>This can completely change your career.</p>

          <Link
            href="/admissions/flagship-program"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              padding: "14px 36px",
              background: "#1c2030",
              color: "#fff",
              borderRadius: "100px",
              fontSize: "15px",
              fontWeight: 700,
              letterSpacing: "0.01em",
              textDecoration: "none",
              border: "none",
              cursor: "pointer",
              transition: "background 0.2s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#242838";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "#1c2030";
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Start Your Journey
            <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(-10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}</style>
      </section>
    </>
  );
};
