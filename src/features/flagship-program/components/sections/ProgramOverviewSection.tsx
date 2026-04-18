/**
 * ProgramOverviewSection.tsx — Clean Brand Design
 */
"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

interface TL {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function useCountdown(target: string): TL {
  const calc = (): TL => {
    const d = new Date(target).getTime() - Date.now();
    if (d <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    return {
      days: Math.floor(d / 86400000),
      hours: Math.floor((d / 3600000) % 24),
      minutes: Math.floor((d / 60000) % 60),
      seconds: Math.floor((d / 1000) % 60),
    };
  };
  const [t, setT] = useState<TL>(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []); // eslint-disable-line
  return t;
}

function Digit({ v, label }: { v: number; label: string }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "5px" }}>
      <div
        style={{
          width: "50px",
          height: "50px",
          background: "#1c2030",
          color: "#fff",
          borderRadius: "8px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontFamily: "'SF Mono','Fira Code',monospace",
          fontSize: "21px",
          fontWeight: 800,
          letterSpacing: "-0.05em",
        }}
      >
        {String(v).padStart(2, "0")}
      </div>
      <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#9a9a9a" }}>
        {label}
      </span>
    </div>
  );
}

const statItems = [
  {
    label: "Location",
    value: "In-Person · Lucknow",
    icon: (
      <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,.5)" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    label: "Batch Size",
    value: "60 students per batch",
    icon: (
      <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,.5)" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
  {
    label: "Outcome",
    value: "Real startup internship",
    icon: (
      <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,.5)" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Guarantee",
    value: "100% internship placement",
    icon: (
      <svg width="14" height="14" fill="none" stroke="rgba(255,255,255,.5)" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

const bullets = [
  "Learn fundamentals deeply",
  "Build real systems",
  "Work like a developer from Day 1",
  "Move into a real startup internship",
];

export const ProgramOverviewSection: React.FC = () => {
  const t = useCountdown("2026-07-15T00:00:00");
  const over = !t.days && !t.hours && !t.minutes && !t.seconds;

  return (
    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "0 32px", marginBottom: "60px", display: "flex", justifyContent: "center", transform: "translateY(60%)", zIndex: 20 }}>
      <div
        style={{
          maxWidth: "1600px",
          width: "100%",
          borderRadius: "20px",
          background: "#ffffff",
          border: "1px solid #e0dedd",
          boxShadow: "0 24px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
          overflow: "hidden",
          display: "grid",
          gridTemplateColumns: "1fr 400px",
          position: "relative",
        }}
      >
        {/* Left */}
        <div style={{ padding: "50px 60px" }}>
          {/* Countdown row */}
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "space-between",
              gap: "20px",
              flexWrap: "wrap",
              paddingBottom: "28px",
              borderBottom: "1px solid #e0dedd",
              marginBottom: "28px",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "12px" }}>
                <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#e53e3e", animation: "blink 1.4s ease-in-out infinite" }} />
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "#6b6b6b" }}>NEXT BATCH</span>
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#e53e3e", letterSpacing: "0.02em" }}>15TH JULY 2026</span>
              </div>

              {!over ? (
                <div style={{ display: "flex", alignItems: "flex-start", gap: "4px" }}>
                  <Digit v={t.days} label="Days" />
                  <span style={{ color: "#c8c8c4", fontSize: "14px", marginTop: "17px", fontWeight: 300 }}>:</span>
                  <Digit v={t.hours} label="Hrs" />
                  <span style={{ color: "#c8c8c4", fontSize: "14px", marginTop: "17px", fontWeight: 300 }}>:</span>
                  <Digit v={t.minutes} label="Min" />
                  <span style={{ color: "#c8c8c4", fontSize: "14px", marginTop: "17px", fontWeight: 300 }}>:</span>
                  <Digit v={t.seconds} label="Sec" />
                </div>
              ) : (
                <span style={{ fontSize: "12px", fontWeight: 800, color: "#e53e3e", textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  Batch has started
                </span>
              )}

              {!over && (
                <p style={{ fontSize: "12px", color: "#6b6b6b", marginTop: "9px" }}>Enroll before the batch fills up</p>
              )}
            </div>

            <Link
              href="/admissions/flagship-program"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "11px 24px",
                background: "#1c2030",
                color: "#fff",
                borderRadius: "100px",
                fontSize: "13px",
                fontWeight: 700,
                letterSpacing: "0.02em",
                textDecoration: "none",
                flexShrink: 0,
                alignSelf: "flex-start",
                transition: "background 0.2s, transform 0.15s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#242838";
                e.currentTarget.style.transform = "translateY(-1px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#1c2030";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              Apply Now{" "}
              <svg width="12" height="12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Link>
          </div>

          {/* Overview text */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "14px" }}>
              <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: "#6b6b6b" }}>
                PROGRAM OVERVIEW
              </span>
              <span style={{ flex: 1, height: "1px", background: "#e0dedd" }} />
            </div>

            <h2 style={{ fontSize: "clamp(1.6rem, 2.2vw, 2rem)", fontWeight: 800, color: "#000000", letterSpacing: "-0.025em", lineHeight: 1.15, marginBottom: "12px" }}>
              What is this program?
            </h2>

            <p style={{ fontSize: "18px", fontWeight: 700, color: "#000000", marginBottom: "8px" }}>This is not a typical course.</p>
            <p style={{ fontSize: "16px", color: "#1a1a1a", lineHeight: 1.72, marginBottom: "6px" }}>
              A structured engineering program designed to transform serious learners into industry-ready software engineers.
            </p>
            <p style={{ fontSize: "15px", color: "#333333", marginBottom: "20px", fontStyle: "italic" }}>You won&apos;t just watch tutorials.</p>

            <div style={{ fontSize: "12px", fontWeight: 800, letterSpacing: "0.22em", textTransform: "uppercase", color: "#333333", marginBottom: "12px" }}>
              YOU WILL:
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px 20px" }}>
              {bullets.map((item) => (
                <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "12px" }}>
                  <div style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#000000", flexShrink: 0, marginTop: "9px" }} />
                  <span style={{ fontSize: "16px", color: "#000000", lineHeight: 1.55, fontWeight: 600 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right panel */}
        <div
          style={{
            background: "#1c2030",
            display: "flex",
            flexDirection: "column",
            padding: "44px 40px",
            position: "relative",
            overflow: "hidden",
          }}
          className="hidden lg:flex"
        >
          <div
            style={{
              position: "absolute",
              top: "-80px",
              right: "-60px",
              width: "220px",
              height: "220px",
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
            }}
          />

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "100px",
              padding: "6px 14px",
              marginBottom: "auto",
              alignSelf: "flex-start",
            }}
          >
            <span style={{ fontSize: "15px", fontWeight: 800, color: "#ffffff" }}>12 months</span>
            <div style={{ width: "1px", height: "9px", background: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.9)", fontWeight: 500 }}>Training + Internship</span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", marginTop: "22px", flex: 1, justifyContent: "center" }}>
            {statItems.map((stat) => (
              <div
                key={stat.label}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "12px",
                  padding: "13px 0",
                  borderBottom: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                <div
                  style={{
                    width: "32px",
                    height: "32px",
                    borderRadius: "7px",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {stat.icon}
                </div>
                <div>
                  <div style={{ fontSize: "12px", letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(255,255,255,0.7)", fontWeight: 700, marginBottom: "3px" }}>
                    {stat.label}
                  </div>
                  <div style={{ fontSize: "16px", fontWeight: 600, color: "#ffffff" }}>{stat.value}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
      `}</style>
    </div>
  );
};
