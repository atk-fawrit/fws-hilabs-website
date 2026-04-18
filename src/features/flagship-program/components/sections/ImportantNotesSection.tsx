/**
 * ImportantNotesSection.tsx — Clean Brand Design (Important Notes + CTA)
 */
"use client";
import React from "react";
import Link from "next/link";

const notes = ["Full-time, in-person program", "Not compatible with jobs or college attendance", "No refunds after program start", "Seats are limited and selective"];

export const ImportantNotesSection: React.FC = () => {
  return (
    <>
      {/* Important Notes */}
      <section style={{ background: "#1c2030", padding: "56px 0" }}>
        <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 56px" }}>
          {/* Eyebrow */}
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "10px" }}>
            <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(255,255,255,0.25)" }}>
              IMPORTANT NOTES
            </span>
            <div style={{ flex: 1, height: "1px", background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Notes Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 0, marginTop: "4px" }}>
            {notes.map((note, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "13px 0",
                  borderBottom: idx < notes.length - 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
                  fontSize: "13.5px",
                  color: "rgba(255,255,255,0.45)",
                  lineHeight: 1.5,
                  paddingRight: idx % 2 === 0 ? "40px" : "0",
                }}
              >
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "rgba(255,255,255,0.2)", flexShrink: 0, marginTop: "5px" }} />
                {note}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ background: "#f2f2f0", padding: "96px 0", borderTop: "1px solid #e0dedd" }}>
        <div style={{ maxWidth: "720px", margin: "0 auto", textAlign: "center", padding: "0 56px" }}>
          <div style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.26em", textTransform: "uppercase", color: "#9a9a9a", marginBottom: "18px" }}>
            FINAL WORD
          </div>

          <h2
            style={{
              fontSize: "clamp(1.8rem, 3.6vw, 2.9rem)",
              fontWeight: 200,
              color: "#0d0d0d",
              letterSpacing: "-0.035em",
              lineHeight: 1.1,
              marginBottom: "8px",
            }}
          >
            This is not for everyone.
            <br />
            <strong style={{ fontWeight: 800 }}>But if you are serious —</strong>
          </h2>

          <p style={{ fontSize: "16px", color: "#6b6b6b", marginBottom: "32px", fontWeight: 400, lineHeight: 1.65 }}>This can completely change your career.</p>

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
              fontSize: "13px",
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
      </section>
    </>
  );
};
