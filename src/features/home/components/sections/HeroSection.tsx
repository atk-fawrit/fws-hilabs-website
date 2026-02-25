'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import Link from 'next/link';
import type { PipelineSectionProps } from '../../types';
import { heroLayoutConfig, heroTextContent } from '../../data';
import '../../styles/HeroSection.styles.css';

const { CARD_W, CARD_H, EXP_W, EXP_H, CARD_GAP, PUSH_EXTRA, CENTER_IDX } = heroLayoutConfig;

export function HeroSection({ stages }: PipelineSectionProps) {
  const [activeCard, setActiveCard] = useState<{ index: number; source: 'hover' | 'loop' } | null>(null);
  const activeRef   = useRef<typeof activeCard>(null);
  const isUserHovering = useRef(false);

  const [mousePos,    setMousePos]    = useState<Record<string, { x: number; y: number }>>({});
  const [typedText,   setTypedText]   = useState('');
  const [typedSub,    setTypedSub]    = useState('');
  const [showCursor,  setShowCursor]  = useState(true);

  const sectionRef    = useRef<HTMLDivElement>(null);
  const desktopRowRef = useRef<HTMLDivElement>(null);
  const cardRefs      = useRef<(HTMLDivElement | null)[]>([]);

  const isInView = useInView(sectionRef, { once: false, amount: 0.2 });

  const setActive = useCallback((val: typeof activeCard) => {
    activeRef.current = val;
    setActiveCard(val);
  }, []);

  const isExpanded        = (i: number) => activeCard?.index === i && activeCard.source === 'hover';
  const isLoopLit         = (i: number) => activeCard?.index === i && activeCard.source === 'loop';
  const isApplicationCard = (i: number) => stages[i]?.id === 'application';

  const { mainText, subText, aiEnrichedText, flagshipText } = heroTextContent;

  // Typing effect
  useEffect(() => {
    let i = 0;
    const t = setInterval(() => {
      if (i <= mainText.length) { setTypedText(mainText.slice(0, i++)); }
      else {
        clearInterval(t);
        setTimeout(() => {
          let j = 0;
          const t2 = setInterval(() => {
            if (j <= subText.length) { setTypedSub(subText.slice(0, j++)); }
            else { clearInterval(t2); setTimeout(() => setShowCursor(false), 500); }
          }, 50);
        }, 200);
      }
    }, 100);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    if (!showCursor) return;
    const t = setInterval(() => setShowCursor(p => !p), 530);
    return () => clearInterval(t);
  }, [showCursor]);

  // Auto-highlight loop
  useEffect(() => {
    if (!isInView) return;
    let dead = false;
    const cycle = () => {
      if (dead) return;
      const go = setTimeout(() => {
        if (dead) return;
        let cur = 0;
        const tick = setInterval(() => {
          if (dead) { clearInterval(tick); return; }
          if (!isUserHovering.current) setActive({ index: cur, source: 'loop' });
          if (++cur >= stages.length) {
            clearInterval(tick);
            setTimeout(() => {
              if (!dead && !isUserHovering.current) {
                setActive(null);
                setTimeout(cycle, 3000);
              } else if (!dead) {
                const wait = setInterval(() => {
                  if (!isUserHovering.current) { clearInterval(wait); if (!dead) setTimeout(cycle, 3000); }
                }, 200);
              }
            }, 1200);
          }
        }, 1000);
      }, 2000);
      return () => clearTimeout(go);
    };
    cycle();
    return () => {
      dead = true;
      if (activeRef.current?.source !== 'hover') setActive(null);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView, stages.length]);

  // Desktop container-level mouse tracking
  const handleDesktopMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const mx = e.clientX, my = e.clientY;
    let hit: number | null = null;
    cardRefs.current.forEach((card, i) => {
      if (!card) return;
      const r = card.getBoundingClientRect();
      if (mx >= r.left && mx <= r.right && my >= r.top && my <= r.bottom) hit = i;
    });
    if (hit !== null) {
      isUserHovering.current = true;
      if (activeRef.current?.index !== hit || activeRef.current?.source !== 'hover') setActive({ index: hit, source: 'hover' });
      const card = cardRefs.current[hit];
      if (card) {
        const r = card.getBoundingClientRect();
        const stageId = stages[hit]?.id;
        if (stageId) setMousePos(prev => ({ ...prev, [stageId]: { x: mx - r.left, y: my - r.top } }));
      }
    } else {
      if (activeRef.current?.source === 'hover') { isUserHovering.current = false; setActive(null); }
    }
  }, [stages, setActive]);

  const handleDesktopMouseLeave = useCallback(() => {
    isUserHovering.current = false;
    if (activeRef.current?.source === 'hover') setActive(null);
  }, [setActive]);

  const handleCardEnter = useCallback((i: number) => { isUserHovering.current = true; setActive({ index: i, source: 'hover' }); }, [setActive]);
  const handleCardLeave = useCallback(() => { isUserHovering.current = false; if (activeRef.current?.source === 'hover') setActive(null); }, [setActive]);
  const handleCardMove  = useCallback((e: React.MouseEvent<HTMLDivElement>, stageId: string, i: number) => {
    const card = cardRefs.current[i];
    if (!card) return;
    const r = card.getBoundingClientRect();
    setMousePos(prev => ({ ...prev, [stageId]: { x: e.clientX - r.left, y: e.clientY - r.top } }));
  }, []);

  // Desktop card positions
  const getCardX = (index: number, expandedIndex: number | null): string => {
    const step = CARD_W + CARD_GAP;
    const diff = index - CENTER_IDX;
    let base = diff * step;
    if (expandedIndex !== null) {
      const extraW = (EXP_W - CARD_W) / 2 + PUSH_EXTRA;
      if (index < expandedIndex) base -= extraW;
      if (index > expandedIndex) base += extraW;
    }
    return base === 0 ? 'calc(-50%)' : `calc(-50% + ${base}px)`;
  };

  const getDelay = (index: number) => 0.2 * Math.abs(index - CENTER_IDX);

  // Sub-components

  // StageBadge component
  const StageBadge = ({ number, large = false, centerOnMobile = false }: {
    number: number | string; large?: boolean; centerOnMobile?: boolean;
  }) => (
    <div className={`flex items-center gap-2.5 ${large ? 'mb-6' : 'mb-3'} ${centerOnMobile ? 'justify-center md:justify-start' : ''}`}>
      <div className={`flex items-center justify-center rounded-full border font-bold shrink-0
        ${large ? 'w-9 h-9 text-[12px] tracking-widest border-white/25 bg-white/10 text-white/80'
                : 'w-6 h-6 text-[9px]  tracking-widest border-white/18 bg-white/6  text-white/55'}`}>
        {number}
      </div>
      <span className={`font-black tracking-[0.38em] uppercase
        ${large ? 'text-[10px] text-white/50' : 'text-[8px] text-white/30'}`}>
        STAGE {number}
      </span>
    </div>
  );

  // CollapsedFace component
  const CollapsedFace = ({ stage, large = false, loopActive = false, centerText = false }: {
    stage: typeof stages[0]; large?: boolean; loopActive?: boolean; centerText?: boolean;
  }) => (
    <div className={`flex flex-col h-full ${centerText ? 'items-center text-center' : ''}`}>
      <StageBadge number={stage.number} large={large} centerOnMobile={centerText} />
      <div className={`flex-1 ${large ? 'space-y-3' : 'space-y-2'}`}>
        <h3 className={`font-bold text-white tracking-tight leading-tight transition-all duration-500
          ${large ? (loopActive ? 'text-[22px]' : 'text-[19px]') : (loopActive ? 'text-[17px]' : 'text-[15px]')}`}>
          {stage.title}
        </h3>
        <p className={`font-semibold tracking-[0.18em] uppercase transition-colors duration-500
          ${large ? 'text-[10px]' : 'text-[9px]'} ${loopActive ? 'text-white/60' : 'text-white/38'}`}>
          {stage.subtitle}
        </p>
      </div>
      <div className={`mt-auto pt-3 border-t transition-colors duration-500 w-full ${loopActive ? 'border-white/20' : 'border-white/10'}`}>
        <p className={`font-medium transition-colors duration-500
          ${large ? 'text-[11px]' : 'text-[10px]'} ${loopActive ? 'text-white/50' : 'text-white/28'}`}>
          {stage.duration}
        </p>
      </div>
    </div>
  );

  // HoverFace component
  const HoverFace = ({ stage, large = false, isAppCard = false, centerText = false }: {
    stage: typeof stages[0]; large?: boolean; isAppCard?: boolean; centerText?: boolean;
  }) => (
    <motion.div className={`flex flex-col h-full ${centerText ? 'items-center text-center' : ''}`}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      transition={{ duration: 0.18, delay: 0.08 }}>
      <StageBadge number={stage.number} large={large} centerOnMobile={centerText} />

      <motion.h3
        className={`font-black text-white leading-[1.1] tracking-tight
          ${large ? 'text-[28px] mb-2' : 'text-[21px] mb-1.5'}`}
        initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, delay: 0.08 }}
        style={{ textShadow: '0 0 40px rgba(255,255,255,0.25),0 2px 8px rgba(0,0,0,0.5)' }}
      >
        {stage.title}
      </motion.h3>

      <motion.p
        className={`font-bold tracking-[0.22em] uppercase text-white/60
          ${large ? 'text-[11px] mb-5' : 'text-[9px] mb-4'}`}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
        transition={{ duration: 0.2, delay: 0.12 }}>
        {stage.subtitle}
      </motion.p>

      {/* Divider */}
      <motion.div className="w-full mb-5" initial={{ scaleX: 0, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        transition={{ duration: 0.35, delay: 0.14, ease: [0.16, 1, 0.3, 1] }}
        style={{ originX: centerText ? 0.5 : 0 }}>
        <div className="h-px bg-gradient-to-r from-transparent via-white/40 to-transparent" />
        <div className="h-px bg-gradient-to-r from-transparent via-white/15 to-transparent mt-px blur-[1px]" />
      </motion.div>

      {stage.details && (
        <>
          <motion.p className={`text-white/72 leading-relaxed mb-5 font-light
            ${large ? 'text-[14px]' : 'text-[12px]'}`}
            initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: 0.16 }}>
            {stage.details.description}
          </motion.p>

          {/* Highlights — left-align even on mobile for readability */}
          <ul className={`space-y-3 flex-1 ${centerText ? 'text-left w-full' : ''}`}>
            {stage.details.highlights.map((h, idx) => (
              <motion.li key={idx} className="flex items-start gap-3"
                initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.20 + idx * 0.07, duration: 0.24, ease: [0.16, 1, 0.3, 1] }}>
                <div className="relative mt-[6px] shrink-0">
                  <div className={`rounded-full bg-blue-400 ${large ? 'w-[5px] h-[5px]' : 'w-[4px] h-[4px]'}`} />
                  <div className="absolute inset-0 rounded-full bg-blue-300 blur-[4px] opacity-70 scale-150" />
                </div>
                <span className={`text-white/68 leading-relaxed font-light ${large ? 'text-[12px]' : 'text-[11px]'}`}>{h}</span>
              </motion.li>
            ))}
          </ul>
        </>
      )}

      <motion.div className={`mt-auto pt-4 border-t border-white/12 w-full ${centerText ? 'text-center' : ''}`}
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.2, delay: 0.28 }}>
        <div className={`flex items-center gap-2 mb-4 ${centerText ? 'justify-center' : ''}`}>
          <svg width={large ? 13 : 11} height={large ? 13 : 11} viewBox="0 0 13 13" fill="none" className="text-white/40 shrink-0">
            <circle cx="6.5" cy="6.5" r="5.5" stroke="currentColor" strokeWidth="1"/>
            <path d="M6.5 3.5V6.5L8.5 8" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
          </svg>
          <p className={`text-white/50 font-medium ${large ? 'text-[12px]' : 'text-[10px]'}`}>{stage.duration}</p>
        </div>

        {isAppCard && (
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.35 }}>
            <Link href="/admissions#application" className="block">
              <motion.button
                whileHover={{ scale: 1.02, boxShadow: '0 0 25px rgba(96,165,250,0.4)' }}
                whileTap={{ scale: 0.98 }}
                className={`w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 hover:from-blue-600 hover:to-blue-700 shadow-lg hover:shadow-blue-500/50 ${large ? 'py-3 px-5 text-[13px]' : 'py-2.5 px-4 text-[11px]'}`}
                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}
              >
                <span>Start Application</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </motion.button>
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );

  // CardChrome component
  const CardChrome = ({ stageId, isLoop, expanded, rounded, children }: {
    stageId: string; isLoop: boolean; expanded: boolean; rounded: string; children: React.ReactNode;
  }) => (
    <>
      <div className={`absolute top-0 left-0 right-0 h-[1.5px] pointer-events-none bg-gradient-to-r from-transparent to-transparent
        ${expanded ? 'via-white/55' : isLoop ? 'via-white/35' : 'via-white/18'}`} />
      <div className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")` }} />
      <div className={`absolute inset-[1px] ${rounded} pointer-events-none bg-gradient-to-br from-white/8 via-transparent to-transparent`} />
      {mousePos[stageId] && (expanded || isLoop) && (
        <div className={`absolute inset-0 pointer-events-none ${rounded} overflow-hidden`}
          style={{ background: `radial-gradient(circle ${expanded ? 220 : 130}px at ${mousePos[stageId].x}px ${mousePos[stageId].y}px, rgba(255,255,255,${expanded ? 0.10 : 0.055}), transparent 70%)` }} />
      )}
      <div className={`absolute -inset-[1px] ${rounded} overflow-hidden pointer-events-none transition-opacity duration-700 ${expanded ? 'opacity-100' : 'opacity-0 group-hover:opacity-100'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/16 to-transparent animate-shimmer-slow" />
      </div>
      {(['tl','br'] as const).map(c => (
        <div key={c} className={`absolute ${c === 'tl' ? 'top-0 left-0' : 'bottom-0 right-0'} w-10 h-10
          pointer-events-none overflow-hidden transition-opacity duration-500
          ${expanded ? 'opacity-75' : 'opacity-0 group-hover:opacity-55'}
          ${c === 'tl' ? (rounded.includes('3xl') ? 'rounded-tl-3xl' : 'rounded-tl-2xl') : (rounded.includes('3xl') ? 'rounded-br-3xl' : 'rounded-br-2xl')}`}>
          <div className={`absolute ${c === 'tl' ? 'top-0 left-0' : 'bottom-0 right-0'} w-full h-[1.5px]
            ${c === 'tl' ? 'bg-gradient-to-r from-white/60 to-transparent' : 'bg-gradient-to-l from-white/60 to-transparent'}`} />
          <div className={`absolute ${c === 'tl' ? 'top-0 left-0' : 'bottom-0 right-0'} h-full w-[1.5px]
            ${c === 'tl' ? 'bg-gradient-to-b from-white/60 to-transparent' : 'bg-gradient-to-t from-white/60 to-transparent'}`} />
        </div>
      ))}
      <AnimatePresence>
        {isLoop && !expanded && (
          <>
            <motion.div className={`absolute -inset-3 ${rounded} border border-white/18 pointer-events-none`}
              initial={{ opacity: 0.6, scale: 1 }} animate={{ opacity: 0, scale: 1.12 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }} />
            <motion.div className={`absolute -inset-1.5 ${rounded} border border-white/10 pointer-events-none`}
              initial={{ opacity: 0.4, scale: 1 }} animate={{ opacity: 0, scale: 1.2 }} exit={{ opacity: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.15 }} />
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {expanded && (
          <>
            {[
              { cls: 'top-8 left-8',       size: 'w-[5px] h-[5px]', delay: 0,   dy: -55 },
              { cls: 'top-14 right-10',    size: 'w-1 h-1',         delay: 0.5, dy: -42 },
              { cls: 'bottom-16 left-12',  size: 'w-[5px] h-[5px]', delay: 1.0, dy: -60 },
              { cls: 'top-1/2 right-8',    size: 'w-1 h-1',         delay: 1.5, dy: -38 },
              { cls: 'bottom-24 right-10', size: 'w-1 h-1',         delay: 0.8, dy: -50 },
            ].map((p, i) => (
              <motion.div key={i}
                className={`absolute ${p.cls} ${p.size} bg-white/70 rounded-full pointer-events-none`}
                initial={{ opacity: 0, y: 0, scale: 0 }}
                animate={{ opacity: [0, 1, 0], y: p.dy, scale: [0, 1, 0.3] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, delay: p.delay }} />
            ))}
          </>
        )}
      </AnimatePresence>
      {children}
    </>
  );

  const expandedIndex = activeCard?.source === 'hover' ? activeCard.index : null;

  return (
    <section ref={sectionRef} className="relative min-h-screen overflow-hidden bg-white">
      <div className="absolute inset-0 z-[1]">
        <video autoPlay muted loop playsInline className="w-full h-full object-cover opacity-35">
          <source src="/images/Mbgvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-white/15 to-white/30" />
      </div>

      <div className="relative z-10 flex flex-col min-h-screen">

        {/* Hero text */}
        <div className="flex-shrink-0 flex items-center justify-center pt-14 pb-2 sm:pt-16 md:pt-16 md:pb-3 lg:pt-20 lg:pb-4 px-4 md:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight leading-[1.15] text-black drop-shadow-sm">
              {typedText}
              {typedText.length < mainText.length && (
                <span className="inline-block w-[6px] sm:w-[7px] md:w-[8px] h-[0.9em] ml-1 align-middle animate-blink" />
              )}
            </h1>
            {typedText.length === mainText.length && (
              <>
                <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-light mt-4 md:mt-6 text-black drop-shadow-sm px-4">
                  {typedSub}
                  {(typedSub.length < subText.length || showCursor) && (
                    <span className="inline-block w-[4px] sm:w-[5px] md:w-[6px] h-[0.8em] ml-1 align-middle animate-blink" />
                  )}
                </motion.div>
                {typedSub.length === subText.length && (
                  <>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light mt-8 md:mt-10 text-black drop-shadow-sm px-4">
                      {aiEnrichedText}
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                      className="text-sm sm:text-base md:text-lg lg:text-xl font-light mt-2 md:mt-3 text-black/60 drop-shadow-sm px-4">
                      {flagshipText}
                    </motion.div>
                  </>
                )}
              </>
            )}
          </div>
        </div>

        {/* Pipeline */}
        <div className="flex-1 px-3 sm:px-4 md:px-6 lg:px-12 pb-8 md:pb-12 lg:pb-16">
          <div className="relative max-w-[1700px] mx-auto">
            <div className="relative z-10 py-1 sm:py-2 md:py-3 lg:py-4 px-1 sm:px-4 md:px-6 lg:px-12">
              <div className="relative py-4 md:py-6 lg:py-8 mb-8 md:mb-12 lg:mb-16">

                {/* Flow line */}
                <div className="absolute top-1/2 left-0 right-0 h-[2px] -translate-y-1/2 z-[1] hidden md:block overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/22 to-transparent" />
                  {isInView && (
                    <div className="absolute inset-0">
                      <div className="absolute h-[3px] w-40 bg-gradient-to-r from-transparent via-black/55 to-transparent animate-flowParticle1 blur-[0.5px]" />
                      <div className="absolute h-[3px] w-32 bg-gradient-to-r from-transparent via-black/45 to-transparent animate-flowParticle2 blur-[0.5px]" />
                      <div className="absolute h-[2px] w-24 bg-gradient-to-r from-transparent via-black/35 to-transparent animate-flowParticle3" />
                    </div>
                  )}
                </div>

                <div className="relative flex items-center justify-center min-h-[340px] sm:min-h-[360px] md:min-h-[380px] lg:min-h-[460px]">

                  {/* Mobile view */}
                  <motion.div
                    className="md:hidden w-full max-w-[360px] mx-auto px-2 space-y-0"
                    variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } } }}
                    initial="hidden" animate={isInView ? 'visible' : 'hidden'}
                  >
                    {stages.map((stage, index) => {
                      const expanded = isExpanded(index);
                      const loop     = isLoopLit(index);
                      return (
                        <motion.div key={stage.id}
                          variants={{ hidden: { opacity: 0, y: 28, scale: 0.95 }, visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] } } }}>
                          <motion.div
                            ref={el => { cardRefs.current[index] = el; }}
                            className="relative w-full overflow-hidden rounded-2xl cursor-pointer group"
                            style={{
                              background: 'linear-gradient(145deg,rgba(10,10,12,0.98),rgba(22,22,26,0.96))',
                              border: expanded ? '1px solid rgba(255,255,255,0.30)' : loop ? '1px solid rgba(255,255,255,0.20)' : '1px solid rgba(255,255,255,0.09)',
                              boxShadow: expanded
                                ? '0 28px 70px rgba(0,0,0,0.75),inset 0 1px 0 rgba(255,255,255,0.12)'
                                : loop
                                ? '0 12px 40px rgba(0,0,0,0.55),inset 0 1px 0 rgba(255,255,255,0.08)'
                                : '0 4px 16px rgba(0,0,0,0.40),inset 0 1px 0 rgba(255,255,255,0.05)',
                            }}
                            animate={
                              expanded ? { scale: 1.02, y: -6, zIndex: 50 }
                              : loop    ? { scale: [1, 1.03, 1.02], y: [0, -8, -6] }
                              :           { scale: 1, y: 0, zIndex: 1 }
                            }
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            onMouseEnter={() => handleCardEnter(index)}
                            onMouseLeave={handleCardLeave}
                            onMouseMove={e => handleCardMove(e, stage.id, index)}
                          >
                            <CardChrome stageId={stage.id} isLoop={loop} expanded={expanded} rounded="rounded-2xl">
                              {/* Collapsed state */}
                              <motion.div className="px-5 py-6"
                                animate={{ opacity: expanded ? 0 : 1, height: expanded ? 0 : 'auto' }}
                                transition={{ duration: 0.16 }}
                                style={{ overflow: 'hidden', pointerEvents: expanded ? 'none' : 'auto' }}>
                                <CollapsedFace stage={stage} loopActive={loop} centerText />
                              </motion.div>
                              {/* Expanded state */}
                              <AnimatePresence>
                                {expanded && (
                                  <motion.div className="px-5 py-6"
                                    initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                                    <HoverFace stage={stage} isAppCard={isApplicationCard(index)} centerText />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 overflow-hidden">
                                {isInView && (
                                  <div className="h-full bg-gradient-to-r from-white/15 via-white/50 to-white/15"
                                    style={{ animation: `expandWidth 1.6s cubic-bezier(0.16,1,0.3,1) forwards`, animationDelay: `${index * 0.15 + 0.8}s`, width: 0 }} />
                                )}
                              </div>
                            </CardChrome>
                          </motion.div>

                          {index < stages.length - 1 && (
                            <div className="flex items-center justify-center py-1.5">
                              <div className="flex flex-col items-center gap-0.5 opacity-[0.14]">
                                <div className="h-3 w-px bg-black/40" />
                                <svg width="7" height="5" viewBox="0 0 7 5" fill="none">
                                  <path d="M1 1L3.5 4L6 1" stroke="rgba(0,0,0,0.5)" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      );
                    })}
                  </motion.div>

                  {/* Tablet view */}
                  <div className="hidden md:block xl:hidden w-full max-w-lg mx-auto px-4">
                    <div className="space-y-4">
                      {stages.map((stage, index) => {
                        const expanded = isExpanded(index);
                        const loop     = isLoopLit(index);
                        return (
                          <motion.div key={stage.id}
                            initial={{ opacity: 0, y: 20, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 20, scale: 0.95 }}
                            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}>
                            <motion.div
                              ref={el => { cardRefs.current[index] = el; }}
                              className="relative w-full rounded-2xl overflow-hidden cursor-pointer group"
                              style={{
                                background: 'linear-gradient(145deg,rgba(10,10,12,0.98),rgba(22,22,26,0.96))',
                                border: expanded ? '1px solid rgba(255,255,255,0.30)' : loop ? '1px solid rgba(255,255,255,0.22)' : '1px solid rgba(255,255,255,0.10)',
                                boxShadow: expanded
                                  ? '0 36px 90px rgba(0,0,0,0.80),inset 0 1px 0 rgba(255,255,255,0.13)'
                                  : loop
                                  ? '0 16px 48px rgba(0,0,0,0.60),inset 0 1px 0 rgba(255,255,255,0.08)'
                                  : '0 8px 28px rgba(0,0,0,0.45),inset 0 1px 0 rgba(255,255,255,0.06)',
                              }}
                              animate={
                                expanded ? { scale: 1.02, y: -10, zIndex: 50 }
                                : loop    ? { scale: [1, 1.04, 1.03], y: [0, -14, -11], rotateZ: [0, 1, 0, -1, 0] }
                                :           { scale: 1, y: 0, rotateZ: 0, zIndex: 1 }
                              }
                              transition={{ duration: expanded ? 0.32 : 0.7, ease: [0.34, 1.56, 0.64, 1] }}
                              onMouseEnter={() => handleCardEnter(index)}
                              onMouseLeave={handleCardLeave}
                              onMouseMove={e => handleCardMove(e, stage.id, index)}
                            >
                              <CardChrome stageId={stage.id} isLoop={loop} expanded={expanded} rounded="rounded-2xl">
                                <motion.div className="p-7"
                                  animate={{ opacity: expanded ? 0 : 1, height: expanded ? 0 : 'auto' }}
                                  transition={{ duration: 0.16 }}
                                  style={{ overflow: 'hidden', pointerEvents: expanded ? 'none' : 'auto' }}>
                                  <CollapsedFace stage={stage} large loopActive={loop} />
                                </motion.div>
                                <AnimatePresence>
                                  {expanded && (
                                    <motion.div className="p-7 z-10 relative"
                                      initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }} style={{ overflow: 'hidden' }}>
                                      <HoverFace stage={stage} large isAppCard={isApplicationCard(index)} />
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                                <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/6 overflow-hidden rounded-b-2xl">
                                  {isInView && (
                                    <div className="h-full bg-gradient-to-r from-white/30 via-white/70 to-white/30"
                                      style={{ animation: `expandWidth 1.6s cubic-bezier(0.16,1,0.3,1) forwards`, animationDelay: `${index * 0.15 + 0.8}s`, width: 0 }} />
                                  )}
                                </div>
                              </CardChrome>
                            </motion.div>
                            {index < stages.length - 1 && (
                              <div className="flex items-center justify-center py-2">
                                <div className="flex flex-col items-center gap-1 opacity-[0.18]">
                                  <div className="h-3 w-px bg-white/40" />
                                  <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                                    <path d="M1 1L5 7L9 1" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                  </svg>
                                </div>
                              </div>
                            )}
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Desktop view */}
                  <div
                    ref={desktopRowRef}
                    className="hidden xl:block relative w-full h-[460px]"
                    onMouseMove={handleDesktopMouseMove}
                    onMouseLeave={handleDesktopMouseLeave}
                  >
                    {stages.map((stage, index) => {
                      const expanded = isExpanded(index);
                      const loop     = isLoopLit(index);
                      const delay    = getDelay(index);
                      const xPos     = isInView ? getCardX(index, expandedIndex) : 'calc(-50%)';

                      return (
                        <motion.div
                          key={stage.id}
                          className="absolute left-1/2 top-1/2"
                          style={{
                            zIndex: expanded ? 100 : index === CENTER_IDX ? 50 : 40 - Math.abs(index - CENTER_IDX),
                            y: '-50%',
                          }}
                          animate={{ opacity: isInView ? 1 : index === CENTER_IDX ? 0.4 : 0, x: xPos }}
                          transition={{ duration: expanded ? 0.42 : 1.4, ease: [0.16, 1, 0.3, 1], delay: isInView && !expanded ? delay : 0 }}
                        >
                          <motion.div
                            ref={el => { cardRefs.current[index] = el; }}
                            className="relative rounded-3xl overflow-hidden cursor-pointer group"
                            style={{
                              background: 'linear-gradient(145deg,rgba(10,10,12,0.98),rgba(22,22,26,0.96))',
                              border: expanded ? '1px solid rgba(255,255,255,0.32)'
                                : loop ? '1px solid rgba(255,255,255,0.26)'
                                : '1px solid rgba(255,255,255,0.11)',
                              boxShadow: expanded
                                ? '0 52px 130px rgba(0,0,0,0.92),0 0 0 1px rgba(255,255,255,0.05),inset 0 1px 0 rgba(255,255,255,0.15)'
                                : loop
                                ? '0 22px 65px rgba(0,0,0,0.68),inset 0 1px 0 rgba(255,255,255,0.10)'
                                : '0 10px 36px rgba(0,0,0,0.50),inset 0 1px 0 rgba(255,255,255,0.07)',
                            }}
                            animate={{
                              width:   expanded ? EXP_W : CARD_W,
                              height:  expanded ? EXP_H : CARD_H,
                              y:       expanded ? -34 : loop ? [0, -18, -14] : 0,
                              scale:   loop && !expanded ? [1, 1.07, 1.05] : 1,
                              rotateZ: loop && !expanded ? [0, 1.8, 0, -1.8, 0] : 0,
                              rotateY: loop && !expanded ? [0, 3, 0] : 0,
                            }}
                            transition={{
                              width:   { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                              height:  { duration: 0.42, ease: [0.16, 1, 0.3, 1] },
                              y:       { duration: expanded ? 0.42 : 1, ease: [0.16, 1, 0.3, 1] },
                              scale:   { duration: 1, ease: [0.34, 1.56, 0.64, 1] },
                              rotateZ: { duration: 1, times: [0, 0.4, 1], ease: [0.34, 1.56, 0.64, 1] },
                              rotateY: { duration: 1, times: [0, 0.4, 1], ease: [0.34, 1.56, 0.64, 1] },
                            }}
                          >
                            <CardChrome stageId={stage.id} isLoop={loop} expanded={expanded} rounded="rounded-3xl">
                              <motion.div className="absolute inset-0 p-8 flex flex-col"
                                animate={{ opacity: expanded ? 0 : 1 }}
                                transition={{ duration: 0.14 }}
                                style={{ pointerEvents: expanded ? 'none' : 'auto' }}>
                                <CollapsedFace stage={stage} large loopActive={loop} />
                              </motion.div>
                              <AnimatePresence>
                                {expanded && (
                                  <motion.div className="absolute inset-0 p-8 flex flex-col"
                                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                                    transition={{ duration: 0.20, delay: 0.16 }}>
                                    <HoverFace stage={stage} large isAppCard={isApplicationCard(index)} />
                                  </motion.div>
                                )}
                              </AnimatePresence>
                              <div className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-white/6 overflow-hidden rounded-b-3xl">
                                {isInView && (
                                  <div className="h-full bg-gradient-to-r from-white/30 via-white/78 to-white/30 shadow-[0_0_8px_rgba(255,255,255,0.32)]"
                                    style={{ animation: `expandWidth 1.6s cubic-bezier(0.16,1,0.3,1) forwards`, animationDelay: `${delay + 1.2}s`, width: 0 }} />
                                )}
                              </div>
                            </CardChrome>
                          </motion.div>

                          {index < stages.length - 1 && (
                            <motion.div
                              className="absolute top-1/2 -translate-y-1/2 hidden lg:flex items-center pointer-events-none"
                              style={{ left: `${CARD_W + 12}px` }}
                              initial={{ opacity: 0 }}
                              animate={isInView ? { opacity: expanded ? 0 : 1 } : { opacity: 0 }}
                              transition={{ delay: delay + 1, duration: 0.4 }}
                            >
                              <div className="flex items-center gap-1 opacity-35">
                                <div className="w-5 h-[1.5px] bg-gradient-to-r from-black/45 to-black/20" />
                                <svg width="7" height="11" viewBox="0 0 7 11" fill="none" className="text-black/45">
                                  <path d="M1 1L6 5.5L1 10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                              </div>
                            </motion.div>
                          )}
                        </motion.div>
                      );
                    })}
                  </div>

                </div>
              </div>

              {/* Bottom label */}
              <motion.div className="text-center px-4"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}>
                <h2 className="font-light text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3 text-black tracking-tight">
                  6 month Training + 6 month Internship
                </h2>
                <p className="text-xs sm:text-sm md:text-base font-light leading-relaxed max-w-2xl mx-auto text-black/60">
                  Systematic talent development through structured phases
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent via-gray-100/50 to-black z-[5] pointer-events-none" />
      </div>
    </section>
  );
}