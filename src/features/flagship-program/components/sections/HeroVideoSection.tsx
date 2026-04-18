/**
 * HeroVideoSection.tsx — Clean Brand Design
 */
"use client";
import React from "react";

export const HeroVideoSection: React.FC = () => {
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        overflow: "hidden",
        background: "#ffffff",
        paddingTop: "60px",
      }}
    >
      {/* Background Video */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
        }}
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.35,
          }}
        >
          <source src="/images/flagshipbg.mp4" type="video/mp4" />
        </video>
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(255,255,255,0.3), rgba(255,255,255,0.15), rgba(255,255,255,0.3))",
          }}
        />
      </div>

      {/* Subtle grid lines */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          pointerEvents: "none",
          backgroundImage:
            "linear-gradient(#e0dedd 1px, transparent 1px), linear-gradient(90deg, #e0dedd 1px, transparent 1px)",
          backgroundSize: "120px 120px",
          opacity: 0.25,
          zIndex: 2,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1200px",
          margin: "0",
          width: "100%",
          padding: "clamp(50px, 7vh, 90px) 56px clamp(60px, 8vh, 100px)",
          alignSelf: "flex-start",
        }}
      >
        {/* Badge pill */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "9px",
            padding: "5px 16px 5px 10px",
            border: "1px solid #e0dedd",
            borderRadius: "100px",
            background: "#ffffff",
            marginBottom: "32px",
            opacity: 0,
            animation: "fadeUp 0.7s 0.1s ease forwards",
          }}
        >
          <div
            style={{
              width: "6px",
              height: "6px",
              borderRadius: "50%",
              background: "#e53e3e",
              flexShrink: 0,
              animation: "blink 1.4s ease-in-out infinite",
            }}
          />
          <span
            style={{
              fontSize: "13px",
              fontWeight: 600,
              letterSpacing: "0.06em",
              color: "#000000",
            }}
          >
            LIVE · LUCKNOW
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: "clamp(2.8rem, 5.5vw, 5rem)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.04em",
            color: "#000000",
            opacity: 0,
            animation: "fadeUp 0.7s 0.18s ease forwards",
            margin: 0,
          }}
        >
          AI Native Software
          <br />
          <strong style={{ fontWeight: 800, display: "block" }}>
            Engineer Fellowship
          </strong>
          <em
            style={{
              fontStyle: "normal",
              fontWeight: 300,
              color: "#333333",
              display: "block",
              fontSize: "0.46em",
              letterSpacing: "-0.005em",
              marginTop: "14px",
              lineHeight: 1.5,
            }}
          >
            Become a Job-Ready Software Engineer in 6 Months · 100% Guaranteed
            Internship at Real Startups
          </em>
        </h1>
      </div>

      <style>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(12px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes blink {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.25;
          }
        }
      `}</style>
    </section>
  );
};