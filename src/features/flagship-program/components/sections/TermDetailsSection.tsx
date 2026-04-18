/**
 * Term Details Section
 * 
 * Clean design matching site style
 */

import React from 'react';
import { programTerms } from '../../data';

export const TermDetailsSection: React.FC = () => {
  return (
    <section style={{ padding: "80px 0", background: "#ffffff" }}>
      <div style={{ maxWidth: "1600px", margin: "0 auto", padding: "0 56px" }}>
        {/* Eyebrow */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
          <span style={{ fontSize: "12px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#000000" }}>TERM DETAILS</span>
          <div style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
        </div>

        {/* Title */}
        <h2 style={{ fontSize: "clamp(2.4rem, 4.5vw, 3.6rem)", fontWeight: 200, color: "#000000", letterSpacing: "-0.038em", lineHeight: 1.06, marginBottom: "40px" }}>
          Detailed <b style={{ fontWeight: 800 }}>curriculum</b>
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {programTerms.map((term, index) => (
            <div 
              key={term.id} 
              style={{
                background: "#f2f2f0",
                borderRadius: "20px",
                padding: "40px",
                border: "1px solid #e0dedd",
                boxShadow: "0 4px 20px rgba(0,0,0,0.04)",
              }}
            >
              <div style={{ display: "flex", alignItems: "flex-start", gap: "20px", marginBottom: "24px" }}>
                <div style={{
                  width: "48px",
                  height: "48px",
                  background: "#1c2030",
                  color: "#ffffff",
                  borderRadius: "12px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                  fontSize: "20px",
                  fontWeight: 800,
                  boxShadow: "0 4px 12px rgba(28, 32, 48, 0.15)",
                }}>
                  {index + 1}
                </div>
                
                <div style={{ flex: 1 }}>
                  <h3 style={{
                    fontSize: "28px",
                    fontWeight: 700,
                    color: "#000000",
                    marginBottom: "8px",
                    lineHeight: 1.2,
                  }}>
                    {term.title}
                  </h3>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", color: "#000000" }}>
                    <span style={{ fontWeight: 600, fontSize: "16px" }}>{term.duration}</span>
                    <span style={{ width: "4px", height: "4px", background: "#000000", borderRadius: "50%" }}></span>
                    <span style={{ fontSize: "16px" }}>{term.description}</span>
                  </div>
                </div>
              </div>

              <div>
                <h4 style={{
                  fontSize: "14px",
                  fontWeight: 700,
                  color: "#000000",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: "16px",
                }}>
                  What You&apos;ll Learn
                </h4>
                
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "12px" }}>
                  {term.topics.map((topic, topicIndex) => (
                    <div 
                      key={topicIndex} 
                      style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}
                    >
                      <span style={{ color: "#000000", marginTop: "2px", fontSize: "16px" }}>•</span>
                      <span style={{ color: "#000000", lineHeight: 1.6, fontSize: "15px" }}>{topic}</span>
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