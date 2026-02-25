'use client';

/**
 * SimpleHero — Premium Redesign
 * Matches the existing MainContentSection: Playfair Display serif headings,
 * DM Sans body, dark/light contrast motifs, editorial rhythm.
 */

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface SimpleHeroProps {
  image: string;
  imageAlt: string;
  title: string;
  description: string;
  badge?: { icon?: React.ReactNode; text: string };
  eyebrow?: string;
  stats?: { value: string; label: string }[];
  overlayOpacity?: 'light' | 'medium' | 'dark';
  height?: string;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export const SimpleHero: React.FC<SimpleHeroProps> = ({
  image,
  imageAlt,
  title,
  description,
  badge,
  eyebrow,
  stats,
  overlayOpacity = 'dark',
  height = 'h-[520px]',
}) => {
  const baseTint = overlayOpacity === 'light' ? 'rgba(0,0,0,0.38)' : 'rgba(0,0,0,0.55)';

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400&family=DM+Sans:opsz,wght@9..40,300;9..40,400;9..40,500;9..40,600&display=swap');
        .sh-root  { font-family: 'DM Sans', sans-serif; }
        .sh-serif { font-family: 'Playfair Display', Georgia, serif; }

        /* Grain overlay */
        .sh-grain::after {
          content: '';
          position: absolute; inset: 0; z-index: 4;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.88' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
          opacity: 0.04;
          pointer-events: none;
          mix-blend-mode: overlay;
        }

        /* Slow zoom on mount */
        @keyframes sh-zoom {
          from { transform: scale(1.06); }
          to   { transform: scale(1.0); }
        }
        .sh-img { animation: sh-zoom 2.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        /* Scroll caret bounce */
        @keyframes sh-bounce {
          0%, 100% { transform: translateX(-50%) translateY(0px);  opacity: 0.4; }
          50%       { transform: translateX(-50%) translateY(6px);  opacity: 0.8; }
        }
        .sh-caret { animation: sh-bounce 2.4s ease-in-out infinite; }

        /* Vertical label */
        .sh-vlabel {
          writing-mode: vertical-rl;
          font-size: 10px; font-weight: 600;
          letter-spacing: 0.22em; text-transform: uppercase;
          color: rgba(255,255,255,0.22);
          transform: rotate(180deg);
          user-select: none;
          font-family: 'DM Sans', sans-serif;
        }
      `}</style>

      <section
        className={`sh-root sh-grain relative ${height} overflow-hidden`}
        style={{ minHeight: 440 }}
      >
        {/* Background image */}
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-cover sh-img"
          priority
          style={{ objectPosition: 'center 30%', zIndex: 0 }}
        />

        {/* ── Overlay stack ── */}
        {/* 1. Base tint */}
        <div style={{ position: 'absolute', inset: 0, background: baseTint, zIndex: 1 }} />
        {/* 2. Strong bottom-to-top cinematic fade */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.06) 100%)', zIndex: 2 }} />
        {/* 3. Left vignette */}
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, rgba(0,0,0,0.42) 0%, transparent 65%)', zIndex: 2 }} />
        {/* 4. Top fade */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 120, background: 'linear-gradient(to bottom, rgba(0,0,0,0.3), transparent)', zIndex: 2 }} />

        {/* ── Decorative horizontal hairline ── */}
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '23%', height: 1, background: 'linear-gradient(90deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.05) 60%, transparent 100%)', zIndex: 3, pointerEvents: 'none' }} />

        {/* ── Vertical editorial label (desktop) ── */}
        <div className="absolute right-8 top-1/2 -translate-y-1/2 hidden lg:flex flex-col items-center gap-3" style={{ zIndex: 5 }}>
          <div style={{ width: 1, height: 68, background: 'rgba(255,255,255,0.13)' }} />
          <span className="sh-vlabel">HI Labs · Admissions</span>
        </div>

        {/* ── Main content ── */}
        <div
          className="sh-root relative h-full flex items-end"
          style={{
            paddingBottom: 'clamp(44px, 6vw, 76px)',
            paddingLeft:   'clamp(24px, 6vw, 72px)',
            paddingRight:  'clamp(24px, 6vw, 72px)',
            zIndex: 5,
          }}
        >
          <div style={{ maxWidth: 600 }}>
            <motion.div variants={container} initial="hidden" animate="show">

              {/* Eyebrow / badge */}
              {(eyebrow || badge) && (
                <motion.div variants={fadeUp} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 20 }}>
                  <div style={{ width: 24, height: 1, background: 'rgba(255,255,255,0.4)', flexShrink: 0 }} />
                  {badge ? (
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(255,255,255,0.10)', backdropFilter: 'blur(8px)', border: '1px solid rgba(255,255,255,0.16)', borderRadius: 999, padding: '6px 14px' }}>
                      {badge.icon && <span style={{ opacity: 0.8 }}>{badge.icon}</span>}
                      <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.80)' }}>{badge.text}</span>
                    </div>
                  ) : (
                    <span style={{ fontSize: 11, fontWeight: 600, letterSpacing: '0.20em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.45)' }}>{eyebrow}</span>
                  )}
                </motion.div>
              )}

              {/* Title — Playfair Display, same as MainContentSection h3s */}
              <motion.h1
                variants={fadeUp}
                className="sh-serif"
                style={{
                  fontSize: 'clamp(40px, 6.5vw, 72px)',
                  fontWeight: 500,
                  color: '#fff',
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                  marginBottom: 20,
                  textShadow: '0 2px 28px rgba(0,0,0,0.4)',
                }}
              >
                {title}
              </motion.h1>

              {/* Hairline rule — same motif used in MainContentSection cards */}
              <motion.div
                variants={fadeUp}
                style={{ width: 40, height: 1.5, background: 'rgba(255,255,255,0.35)', marginBottom: 18 }}
              />

              {/* Description */}
              <motion.p
                variants={fadeUp}
                style={{
                  fontSize: 'clamp(14px, 1.8vw, 17px)',
                  color: 'rgba(255,255,255,0.68)',
                  lineHeight: 1.78,
                  fontWeight: 300,
                  maxWidth: 460,
                }}
              >
                {description}
              </motion.p>

              {/* Optional stats */}
              {stats && stats.length > 0 && (
                <motion.div variants={fadeUp} style={{ display: 'flex', gap: 36, marginTop: 32 }}>
                  {stats.map((s, i) => (
                    <div key={i}>
                      <div className="sh-serif" style={{ fontSize: 28, fontWeight: 500, color: '#fff', lineHeight: 1 }}>{s.value}</div>
                      <div style={{ fontSize: 10, fontWeight: 600, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.36)', marginTop: 6 }}>{s.label}</div>
                    </div>
                  ))}
                </motion.div>
              )}

            </motion.div>
          </div>
        </div>

        {/* Scroll caret */}
        <div className="sh-caret" style={{ position: 'absolute', bottom: 20, left: '50%', zIndex: 5, pointerEvents: 'none' }}>
          <svg width="20" height="11" viewBox="0 0 20 11" fill="none">
            <path d="M1 1L10 10L19 1" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>
    </>
  );
};

export default SimpleHero;