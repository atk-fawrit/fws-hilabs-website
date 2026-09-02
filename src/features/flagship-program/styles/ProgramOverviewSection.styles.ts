import type { CSSProperties } from "react";

/**
 * ProgramOverviewSection — Inline Apply Form Styles
 * Dark card variant (white-on-dark inputs)
 */

export const inputStyle: CSSProperties = {
  width: "100%",
  padding: "9px 12px",
  fontSize: "13px",
  background: "rgba(255,255,255,0.06)",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "8px",
  color: "#ffffff",
  outline: "none",
  transition: "border-color 0.2s",
  boxSizing: "border-box",
};

export const labelStyle: CSSProperties = {
  display: "block",
  fontSize: "10px",
  fontWeight: 700,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "rgba(255,255,255,0.65)",
  marginBottom: "5px",
};

export const errorStyle: CSSProperties = {
  fontSize: "11px",
  color: "#f87171",
  marginTop: "3px",
};