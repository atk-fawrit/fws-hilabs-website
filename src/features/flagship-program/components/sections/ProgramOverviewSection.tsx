/**
 * ProgramOverviewSection.tsx
 */

"use client";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { APPS_SCRIPT_URL } from "@/app/constant";
import { Captcha, CaptchaRef } from "@/src/shared/components/content/Captcha";
import { ApplicationModal } from "@/src/shared/components/content/ApplicationModal";
import { CountdownTime } from "../../types";
import {
  inputStyle,
  labelStyle,
  errorStyle,
} from "../../styles/ProgramOverviewSection.styles";
import "../../styles/ProgramOverviewSection.styles.css";

// -- Countdown hook ------------------------------------------------------------

function useCountdown(target: string): CountdownTime | null{
  const [t, setT] = useState<CountdownTime | null>(null);
  useEffect(() => {
    const calc = (): CountdownTime => {
      const d = new Date(target).getTime() - Date.now();

      if (d <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        days: Math.floor(d / 86400000),
        hours: Math.floor((d / 3600000) % 24),
        minutes: Math.floor((d / 60000) % 60),
        seconds: Math.floor((d / 1000) % 60),
      };
    };

    setT(calc());

    const id = setInterval(() => {
      setT(calc());
    }, 1000);

    return () => clearInterval(id);
  }, [target]);

  return t;
}

// -- Digit display -------------------------------------------------------------

function Digit({ v, label }: { v: number; label: string }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "5px",
      }}
    >
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
      <span
        style={{
          fontSize: "9px",
          fontWeight: 700,
          letterSpacing: "0.2em",
          textTransform: "uppercase",
          color: "#9a9a9a",
        }}
      >
        {label}
      </span>
    </div>
  );
}

// -- Static data ---------------------------------------------------------------

const statItems = [
  {
    label: "Location",
    value: "In-Person - Lucknow",
    icon: (
      <svg
        width="14"
        height="14"
        fill="none"
        stroke="rgba(255,255,255,.5)"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: "Batch Size",
    value: "30 students per batch",
    icon: (
      <svg
        width="14"
        height="14"
        fill="none"
        stroke="rgba(255,255,255,.5)"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
    ),
  },
  {
    label: "Outcome",
    value: "Real startup internship",
    icon: (
      <svg
        width="14"
        height="14"
        fill="none"
        stroke="rgba(255,255,255,.5)"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Guarantee",
    value: "100% internship placement",
    icon: (
      <svg
        width="14"
        height="14"
        fill="none"
        stroke="rgba(255,255,255,.5)"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.8"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
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

// -- InlineApplyForm -----------------------------------------------------------

function InlineApplyForm() {
  const router = useRouter();
  const captchaRef = useRef<CaptchaRef>(null);
  const PREFIX = "+91 ";

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: PREFIX,
    highestDegree: "",
    graduationYear: "",
  });
  const [userCaptcha, setUserCaptcha] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [captchaError, setCaptchaError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const validatePhone = (v: string) => /^\+91 [0-9]{10}$/.test(v);
  const validateEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let val = e.target.value;
    if (!val.startsWith(PREFIX)) val = PREFIX;
    const digits = val.slice(PREFIX.length).replace(/\D/g, "").slice(0, 10);
    setFormData((p) => ({ ...p, phone: PREFIX + digits }));
    setPhoneError("");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
    if (e.target.name === "email") setEmailError("");
  };

  const reset = () => {
    setFormData({
      fullName: "",
      email: "",
      phone: PREFIX,
      highestDegree: "",
      graduationYear: "",
    });
    setPhoneError("");
    setEmailError("");
    setUserCaptcha("");
    setCaptchaError("");
    captchaRef.current?.refresh();
    setSubmitError(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validatePhone(formData.phone)) {
      setPhoneError("Invalid phone number");
      return;
    }
    if (!validateEmail(formData.email)) {
      setEmailError("Enter a valid email");
      return;
    }
    if (!captchaRef.current?.validate(userCaptcha)) {
      setCaptchaError("Invalid code");
      captchaRef.current?.refresh();
      return;
    }
    setIsSubmitting(true);
    setSubmitError(false);
    try {
      const body = new URLSearchParams();
      body.append("formType", "flagship");
      body.append("name", formData.fullName);
      body.append("email", formData.email);
      body.append("phone", formData.phone.replace("+91 ", ""));
      body.append("highestDegree", formData.highestDegree);
      body.append("graduationYear", formData.graduationYear);
      body.append("course", "-");
      body.append("comment", "-");
      body.append("address", "-");
      body.append("file", "");
      body.append("filename", "");
      await fetch(APPS_SCRIPT_URL, { method: "POST", mode: "no-cors", body });
      reset();
      router.push("/application-success");
    } catch {
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="inline-apply-form"
      style={{ display: "flex", flexDirection: "column", gap: "12px", flex: 1 }}
    >
      <div>
        <label style={labelStyle}>Full Name *</label>
        <input
          type="text"
          name="fullName"
          required
          value={formData.fullName}
          onChange={handleChange}
          placeholder="Your full name"
          style={inputStyle}
        />
      </div>

      <div>
        <label style={labelStyle}>Email *</label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="you@gmail.com"
          style={{
            ...inputStyle,
            borderColor: emailError ? "#f87171" : "rgba(255,255,255,0.12)",
          }}
        />
        {emailError && <p style={errorStyle}>{emailError}</p>}
      </div>

      <div>
        <label style={labelStyle}>Phone *</label>
        <input
          type="tel"
          name="phone"
          required
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="+91 XXXXXXXXXX"
          style={{
            ...inputStyle,
            borderColor: phoneError ? "#f87171" : "rgba(255,255,255,0.12)",
          }}
        />
        {phoneError && <p style={errorStyle}>{phoneError}</p>}
      </div>

      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}
      >
        <div>
          <label style={labelStyle}>Degree *</label>
          <input
            type="text"
            name="highestDegree"
            required
            value={formData.highestDegree}
            onChange={handleChange}
            placeholder="B.Tech, BCA..."
            style={inputStyle}
          />
        </div>
        <div>
          <label style={labelStyle}>Grad. Year *</label>
          <select
            name="graduationYear"
            required
            value={formData.graduationYear}
            onChange={handleChange}
            style={{ ...inputStyle, cursor: "pointer" }}
          >
            <option value="" disabled style={{ background: "#1c2030" }}>
              Year
            </option>
            {Array.from({ length: 10 }, (_, i) => 2025 + i).map((y) => (
              <option
                key={y}
                value={String(y)}
                style={{ background: "#1c2030" }}
              >
                {y}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="dark-captcha-wrap">
        <Captcha
          ref={captchaRef}
          value={userCaptcha}
          onChange={setUserCaptcha}
          error={captchaError}
          onErrorClear={() => setCaptchaError("")}
          isOpen={true}
        />
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        style={{
          width: "100%",
          padding: "11px",
          background: isSubmitting ? "rgba(255,255,255,0.12)" : "#ffffff",
          color: isSubmitting ? "rgba(255,255,255,0.4)" : "#1c2030",
          border: "none",
          borderRadius: "8px",
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.04em",
          cursor: isSubmitting ? "not-allowed" : "pointer",
          transition: "background 0.2s, color 0.2s",
          marginTop: "2px",
        }}
      >
        {isSubmitting ? "Submitting..." : "Apply Now ->"}
      </button>

      {submitError && (
        <p style={{ fontSize: "12px", color: "#f87171", textAlign: "center" }}>
          Submission failed. Please try again.
        </p>
      )}
    </form>
  );
}

// -- Main section --------------------------------------------------------------

export const ProgramOverviewSection: React.FC = () => {
  const t = useCountdown("2026-09-15T00:00:00");
  const over = t !== null && !t.days && !t.hours && !t.minutes && !t.seconds;
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div
        style={{
          position: "relative",
          padding: "0 clamp(16px, 5vw, 32px)",
          marginTop: "40px",
          display: "flex",
          justifyContent: "center",
          zIndex: 20,
        }}
      >
        <div
          style={{
            maxWidth: "1600px",
            width: "100%",
            borderRadius: "20px",
            background: "#ffffff",
            border: "1px solid #e0dedd",
            boxShadow:
              "0 24px 64px rgba(0,0,0,0.08), 0 4px 16px rgba(0,0,0,0.04)",
            overflow: "hidden",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            position: "relative",
          }}
        >
          {/* Left panel */}
          <div style={{ padding: "clamp(20px, 5vw, 50px)" }}>
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "7px",
                    marginBottom: "12px",
                  }}
                >
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      borderRadius: "50%",
                      background: "#e53e3e",
                      animation: "blink 1.4s ease-in-out infinite",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 700,
                      letterSpacing: "0.2em",
                      textTransform: "uppercase",
                      color: "#6b6b6b",
                    }}
                  >
                    NEXT BATCH
                  </span>
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#e53e3e",
                      letterSpacing: "0.02em",
                    }}
                  >
                    15TH SEPTEMBER 2026
                  </span>
                </div>

                {t === null ? (
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#6b6b6b",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Loading...
                  </span>
                ) : !over ? (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "4px",
                    }}
                  >
                    <Digit v={t.days} label="Days" />

                    <span
                      style={{
                        color: "#c8c8c4",
                        fontSize: "14px",
                        marginTop: "17px",
                        fontWeight: 300,
                      }}
                    >
                      :
                    </span>

                    <Digit v={t.hours} label="Hrs" />

                    <span
                      style={{
                        color: "#c8c8c4",
                        fontSize: "14px",
                        marginTop: "17px",
                        fontWeight: 300,
                      }}
                    >
                      :
                    </span>

                    <Digit v={t.minutes} label="Min" />

                    <span
                      style={{
                        color: "#c8c8c4",
                        fontSize: "14px",
                        marginTop: "17px",
                        fontWeight: 300,
                      }}
                    >
                      :
                    </span>

                    <Digit v={t.seconds} label="Sec" />
                  </div>
                ) : (
                  <span
                    style={{
                      fontSize: "12px",
                      fontWeight: 800,
                      color: "#e53e3e",
                      textTransform: "uppercase",
                      letterSpacing: "0.12em",
                    }}
                  >
                    Batch has started
                  </span>
                )}

                {!over && (
                  <p
                    className="enroll-text"
                    style={{
                      fontSize: "12px",
                      color: "#6b6b6b",
                      marginTop: "9px",
                    }}
                  >
                    Enroll before the batch fills up
                  </p>
                )}
              </div>
            </div>

            {/* Overview text */}
            <div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "14px",
                }}
              >
                <span
                  className="program-overview-label"
                  style={{
                    fontSize: "10px",
                    fontWeight: 700,
                    letterSpacing: "0.22em",
                    textTransform: "uppercase",
                    color: "#6b6b6b",
                  }}
                >
                  PROGRAM OVERVIEW
                </span>
              </div>

              <h2
                className="program-title"
                style={{
                  fontSize: "clamp(1.6rem, 2.2vw, 2rem)",
                  fontWeight: 800,
                  color: "#000000",
                  letterSpacing: "-0.025em",
                  lineHeight: 1.15,
                  marginBottom: "12px",
                }}
              >
                <span className="desktop-program-title">
                  What is this program?
                </span>

                <span className="mobile-program-title">
                  AI Native Software
                  <br />
                  <strong>Engineer Fellowship</strong>
                </span>
              </h2>

              <p
                className="program-subtitle"
                style={{
                  fontSize: "18px",
                  fontWeight: 700,
                  color: "#000000",
                  marginBottom: "8px",
                }}
              >
                <span className="desktop-program-subtitle">
                  This is not a typical course.
                </span>

                <span
                  className="mobile-program-subtitle"
                  style={{
                    fontSize: "16px",
                    fontWeight: 700,
                  }}
                >
                  Founded by alumni of IISc Bangalore and IE Business
                  School,Spain
                </span>
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "#1a1a1a",
                  lineHeight: 1.72,
                  marginBottom: "6px",
                }}
              >
                A structured engineering program designed to transform serious
                learners into industry-ready software engineers.
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "#333333",
                  marginBottom: "20px",
                  fontStyle: "italic",
                }}
              >
                You won&apos;t just watch tutorials.
              </p>

              <div
                style={{
                  fontSize: "12px",
                  fontWeight: 800,
                  letterSpacing: "0.22em",
                  textTransform: "uppercase",
                  color: "#333333",
                  marginBottom: "12px",
                }}
              >
                YOU WILL:
              </div>

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                  gap: "10px 20px",
                }}
              >
                {bullets.map((item) => (
                  <div
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: "12px",
                    }}
                  >
                    <div
                      style={{
                        width: "5px",
                        height: "5px",
                        borderRadius: "50%",
                        background: "#000000",
                        flexShrink: 0,
                        marginTop: "9px",
                      }}
                    />
                    <span
                      style={{
                        fontSize: "16px",
                        color: "#000000",
                        lineHeight: 1.55,
                        fontWeight: 600,
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right panel — dark apply form */}
          <div
            className="flex dark-section"
            style={{
              background: "#1c2030",
              flexDirection: "column",
              padding: "32px 36px 28px",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Decorative glow */}
            <div
              style={{
                position: "absolute",
                top: "-80px",
                right: "-60px",
                width: "220px",
                height: "220px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)",
                pointerEvents: "none",
              }}
            />

            {/* Header */}
            <div style={{ marginBottom: "18px" }}>
              <p
                style={{
                  fontSize: "20px",
                  color: "rgba(255,255,255,0.9)",
                  fontWeight: 800,
                  margin: "0 0 6px",
                }}
              >
                Apply now to secure your spot!
              </p>

              <p
                style={{
                  fontSize: "16px",
                  color: "rgba(255,255,255,0.5)",
                  fontWeight: 500,
                  margin: 0,
                  letterSpacing: "0.02em",
                }}
              >
                Next batch: 15 Sep 2026
              </p>
            </div>

            <InlineApplyForm />

            {/* Stats grid */}
            <div
              className="stats-grid"
              style={{
                display: "grid",
                gap: "10px",
                marginTop: "16px",
                paddingTop: "14px",
                borderTop: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {statItems.map((stat) => (
                <div
                  key={stat.label}
                  style={{ display: "flex", alignItems: "center", gap: "8px" }}
                >
                  <div
                    style={{
                      width: "24px",
                      height: "24px",
                      borderRadius: "6px",
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    {stat.icon}
                  </div>

                  <span
                    className="stat-value"
                    style={{
                      fontSize: "clamp(9.5px, 2.6vw, 11px)",
                      color: "rgba(255,255,255,0.75)",
                      fontWeight: 500,
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <ApplicationModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        programType="flagship"
      />

      <style>{`
  .mobile-program-title,
  .mobile-program-subtitle {
    display: none;
  }

  @media (max-width: 768px) {
    .desktop-program-title,
    .desktop-program-subtitle {
      display: none;
    }

    .mobile-program-title,
    .mobile-program-subtitle {
      display: inline;
    }

    .enroll-text {
      display: none !important;
    }

    .program-overview-label {
      display: none !important;
    }

    .program-title {
      margin-top: -5px !important;
    }
  }
`}</style>
    </>
  );
};
