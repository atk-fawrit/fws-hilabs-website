/**
 * OutcomesSection.tsx — Clean Brand Design (Program Details)
 */
"use client";
import React from "react";

const outcomes = [
  "Build full-stack applications",
  "Understand real-world system design basics",
  "Work with modern tools and workflows",
  "Collaborate like a professional developer",
  "Be ready for startup or junior developer roles",
];

const typicalDay = ["Structured learning sessions", "Hands-on coding", "Problem-solving practice", "Project work", "Reviews and feedback"];

const admissionSteps = ["Application submission", "Basic aptitude + technical screening", "Personal interaction", "Final selection"];

const evaluationCriteria = ["Weekly assessments", "Project-based evaluation", "Code reviews", "Team collaboration"];

export const OutcomesSection: React.FC = () => {
  return (
    <section style={{ padding: "80px 0", background: "#f2f2f0" }}>
      <div style={{ maxWidth: "1120px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#9a9a9a" }}>PROGRAM DETAILS</span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(1.9rem, 3.8vw, 2.9rem)", fontWeight: 200, color: "#0d0d0d", letterSpacing: "-0.038em", lineHeight: 1.06, marginBottom: "28px" }}>
          By the end of the program, <b style={{ fontWeight: 800 }}>you will:</b>
        </h2>

        {/* Outcomes Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "9px 36px", marginBottom: "44px" }}>
          {outcomes.map((outcome, idx) => (
            <div key={idx} style={{ display: "flex", alignItems: "flex-start", gap: "11px", fontSize: "13.5px", color: "#3a3a3a", lineHeight: 1.5, fontWeight: 500 }}>
              <svg width="15" height="15" fill="none" stroke="#0d0d0d" viewBox="0 0 24 24" style={{ flexShrink: 0, marginTop: "1px" }}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7" />
              </svg>
              {outcome}
            </div>
          ))}
        </div>

        {/* Two Column Layout */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "44px" }}>
          {/* A Typical Day */}
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0d0d0d",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              A Typical Day
              <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {typicalDay.map((item, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                    padding: "10px 0",
                    borderBottom: idx < typicalDay.length - 1 ? "1px solid #e0dedd" : "none",
                    fontSize: "13.5px",
                    color: "#3a3a3a",
                  }}
                >
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1c2030", flexShrink: 0 }} />
                  {item}
                </div>
              ))}
            </div>

            <div style={{ marginTop: "16px", borderLeft: "2px solid #1c2030", padding: "10px 14px", background: "#ffffff", borderRadius: "0 6px 6px 0" }}>
              <div style={{ fontSize: "13px", color: "#6b6b6b", fontStyle: "italic", lineHeight: 1.65 }}>This is a full-time, immersive program.</div>
            </div>
          </div>

          {/* Admission Process */}
          <div>
            <div
              style={{
                fontSize: "12px",
                fontWeight: 700,
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                color: "#0d0d0d",
                marginBottom: "16px",
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              Admission Process
              <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
            </div>

            <div style={{ display: "flex", flexDirection: "column" }}>
              {admissionSteps.map((step, idx) => (
                <div
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "14px",
                    padding: "11px 0",
                    borderBottom: idx < admissionSteps.length - 1 ? "1px solid #e0dedd" : "none",
                  }}
                >
                  <div
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "8px",
                      background: "#1c2030",
                      color: "#fff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "12px",
                      fontWeight: 800,
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <div style={{ fontSize: "13.5px", color: "#3a3a3a", fontWeight: 500 }}>{step}</div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: "14px", borderLeft: "2px solid #9a9a9a", padding: "10px 14px", background: "#ffffff", borderRadius: "0 6px 6px 0" }}>
              <div style={{ fontSize: "13px", color: "#6b6b6b", fontStyle: "italic" }}>We select committed learners, not just applicants.</div>
            </div>
          </div>
        </div>

        {/* Evaluation Section */}
        <div style={{ marginTop: "44px", paddingTop: "36px", borderTop: "1px solid #e0dedd" }}>
          <div style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "#0d0d0d", marginBottom: "16px" }}>
            How You Are Evaluated
          </div>

          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
            {evaluationCriteria.map((criterion, idx) => (
              <div
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "8px 16px",
                  border: "1px solid #e0dedd",
                  borderRadius: "100px",
                  fontSize: "13px",
                  color: "#3a3a3a",
                  fontWeight: 500,
                  background: "#ffffff",
                  transition: "border-color 0.2s, background 0.2s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = "#1c2030";
                  e.currentTarget.style.background = "#f2f2f0";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = "#e0dedd";
                  e.currentTarget.style.background = "#ffffff";
                }}
              >
                <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#1c2030", flexShrink: 0 }} />
                {criterion}
              </div>
            ))}
          </div>

          <div style={{ marginTop: "16px", borderLeft: "2px solid #1c2030", padding: "10px 14px", background: "#ffffff", borderRadius: "0 6px 6px 0" }}>
            <div style={{ fontSize: "13px", color: "#6b6b6b", fontStyle: "italic", lineHeight: 1.65 }}>
              The goal is simple: Make sure you are truly ready — not just &quot;completed a course&quot;
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
