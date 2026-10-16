'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Code2,
  LayoutTemplate,
  Cloud,
  RefreshCw,
  PackageCheck,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  RotateCw
} from 'lucide-react';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Deliverables Data Schema
 */
export const deliverablesData = {
  centerHero: {
    title: 'We Deliver',
    subtitle: 'High-performance digital products engineered for long-term impact.',
    icon: 'PackageCheck'
  },
  leftColumn: [
    {
      title: 'Custom Software Solutions',
      description: 'Bespoke architectures engineered precisely for your unique operational workflows and scale.',
      icon: 'Code2'
    },
    {
      title: 'Premium UI/UX Experience',
      description: 'Human-centered, pixel-perfect interfaces crafted to drive engagement and retention.',
      icon: 'LayoutTemplate'
    },
    {
      title: 'Cloud-Ready Architecture',
      description: 'Scalable, resilient, and secure microservices built for zero downtime and peak traffic.',
      icon: 'Cloud'
    }
  ],
  centerColumnFlanks: {
    top: {
      title: 'Agile Development Process',
      description: 'Rapid sprint cycles, continuous feedback, and transparent, on-time milestones.',
      icon: 'RefreshCw'
    },
    bottom: {
      title: 'Robust Cyber Security',
      description: 'Proactive threat intelligence, end-to-end encryption, and rigorous compliance.',
      icon: 'ShieldAlert'
    }
  },
  rightColumn: [
    {
      title: 'AI-Powered Innovation',
      description: 'Intelligent automation and predictive models embedded natively into your core stack.',
      icon: 'Sparkles'
    },
    {
      title: 'Business-First Solutions',
      description: 'Technology engineered with clear ROI and strategic revenue drivers.',
      icon: 'TrendingUp'
    },
    {
      title: 'Long-Term Partnership',
      description: 'Dedicated continuous maintenance, proactive optimization, and evolving features.',
      icon: 'ShieldCheck'
    }
  ]
};

const ICON_MAP = {
  Code2,
  LayoutTemplate,
  Cloud,
  RefreshCw,
  PackageCheck,
  ShieldAlert,
  Sparkles,
  TrendingUp,
  ShieldCheck
};

export default function WeDeliverCards() {
  const sectionRef = useRef(null);
  const heroCardRef = useRef(null);
  const cardsRef = useRef([]);
  const isRevealedRef = useRef(false);
  const isAnimatingRef = useRef(false);

  // Compute offset deltas from each surrounding card to the center hero card
  const computeCenterOffsets = useCallback(() => {
    const heroCard = heroCardRef.current;
    if (!heroCard) return [];
    const heroRect = heroCard.getBoundingClientRect();
    const heroCenterX = heroRect.left + heroRect.width / 2;
    const heroCenterY = heroRect.top + heroRect.height / 2;

    return cardsRef.current.map((card) => {
      if (!card) return { dx: 0, dy: 0 };
      const cardRect = card.getBoundingClientRect();
      const cardCenterX = cardRect.left + cardRect.width / 2;
      const cardCenterY = cardRect.top + cardRect.height / 2;
      return {
        dx: heroCenterX - cardCenterX,
        dy: heroCenterY - cardCenterY
      };
    });
  }, []);

  // Initial hidden collapsed state matching Frame 1 & Frame 2
  const setupInitialState = useCallback(() => {
    if (isRevealedRef.current || !heroCardRef.current) return;
    const offsets = computeCenterOffsets();

    gsap.set(heroCardRef.current, {
      scale: 0.92,
      y: 24,
      opacity: 0
    });

    cardsRef.current.forEach((card, i) => {
      if (!card) return;
      const off = offsets[i] || { dx: 0, dy: 0 };
      gsap.set(card, {
        x: off.dx,
        y: off.dy,
        scale: 0.35,
        opacity: 0,
        pointerEvents: 'none'
      });
    });
  }, [computeCenterOffsets]);

  // Choreographed zoom-and-burst reveal sequence matching Reference Frames 1-4
  const runEntranceSequence = useCallback(() => {
    if (isRevealedRef.current || isAnimatingRef.current || !heroCardRef.current) return;
    isRevealedRef.current = true;
    isAnimatingRef.current = true;

    const offsets = computeCenterOffsets();
    const validCards = cardsRef.current.filter(Boolean);

    validCards.forEach((card, i) => {
      const off = offsets[i] || { dx: 0, dy: 0 };
      gsap.set(card, {
        x: off.dx,
        y: off.dy,
        scale: 0.35,
        opacity: 0,
        pointerEvents: 'none'
      });
    });

    const tl = gsap.timeline({
      onComplete: () => {
        isAnimatingRef.current = false;
        // Clear transform overrides so CSS hover transitions trigger without inline style conflict
        gsap.set(validCards, {
          clearProps: 'transform,pointerEvents,opacity'
        });
        gsap.set(heroCardRef.current, {
          clearProps: 'transform'
        });
      }
    });

    // Frame 1 -> Frame 2: Center hero card enters (420ms, soft overshoot)
    tl.to(heroCardRef.current, {
      scale: 1.0,
      y: 0,
      opacity: 1,
      duration: 0.42,
      ease: 'cubic-bezier(0.22, 1, 0.36, 1)'
    }, 0);

    // Frame 2 -> Frame 3 -> Frame 4: Burst reveal of surrounding cards outward from center
    tl.to(
      validCards,
      {
        x: 0,
        y: 0,
        scale: 1.0,
        opacity: 0.85,
        duration: 0.22,
        ease: 'power2.out',
        stagger: {
          each: 0.08,
          from: 'center'
        }
      },
      0.28
    );
  }, [computeCenterOffsets]);

  // Replay animation handler
  const replayBurst = useCallback(() => {
    if (isAnimatingRef.current || !heroCardRef.current) return;
    isAnimatingRef.current = true;

    const offsets = computeCenterOffsets();
    const validCards = cardsRef.current.filter(Boolean);

    const collapseTl = gsap.timeline({
      onComplete: () => {
        isRevealedRef.current = false;
        isAnimatingRef.current = false;
        runEntranceSequence();
      }
    });

    collapseTl.to(validCards, {
      x: (i) => (offsets[i] ? offsets[i].dx : 0),
      y: (i) => (offsets[i] ? offsets[i].dy : 0),
      scale: 0.35,
      opacity: 0,
      duration: 0.32,
      ease: 'power2.in',
      pointerEvents: 'none'
    });

    collapseTl.to(
      heroCardRef.current,
      {
        scale: 1.12,
        opacity: 0.6,
        duration: 0.3,
        ease: 'power2.in'
      },
      0
    );
  }, [computeCenterOffsets, runEntranceSequence]);

  // Spotlight mouse-tracking effect
  const handleMouseMove = (e, el) => {
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    el.style.setProperty('--mouse-x', `${x}px`);
    el.style.setProperty('--mouse-y', `${y}px`);
  };

  // Card click micro-pulse (Permanent Hero Rule: center card stays fixed)
  const handleCardClick = (cardEl) => {
    if (!cardEl) return;
    gsap
      .timeline()
      .to(cardEl, { scale: 0.98, duration: 0.1, ease: 'power1.in' })
      .to(cardEl, { scale: 1.02, duration: 0.2, ease: 'back.out(2)' });
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const timer = setTimeout(() => {
      setupInitialState();

      if (typeof ScrollTrigger !== 'undefined') {
        ScrollTrigger.create({
          trigger: section,
          start: 'top 75%',
          once: true,
          onEnter: () => {
            runEntranceSequence();
          }
        });
      } else {
        runEntranceSequence();
      }
    }, 60);

    const handleResize = () => {
      if (!isRevealedRef.current) {
        setupInitialState();
      }
    };
    window.addEventListener('resize', handleResize, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', handleResize);
    };
  }, [setupInitialState, runEntranceSequence]);

  let cardIndex = 0;

  const renderSurroundingCard = (item) => {
    const currentIndex = cardIndex++;
    const Icon = ICON_MAP[item.icon] || Code2;

    return (
      <article
        key={item.title}
        ref={(el) => (cardsRef.current[currentIndex] = el)}
        onMouseMove={(e) => handleMouseMove(e, cardsRef.current[currentIndex])}
        onClick={() => handleCardClick(cardsRef.current[currentIndex])}
        tabIndex={0}
        role="button"
        aria-label={item.title}
        className="group relative w-full min-h-[195px] p-6 sm:p-7 rounded-[24px] flex flex-col justify-start overflow-hidden transition-all duration-300 ease-out cursor-pointer bg-white dark:bg-[radial-gradient(135%_120%_at_50%_0%,#111728_0%,#080c16_55%,#05070d_100%)] border border-slate-200/90 dark:border-white/[0.08] hover:border-sky-400/60 dark:hover:border-white/25 shadow-[0_10px_30px_-5px_rgba(15,23,42,0.04),0_20px_45px_-12px_rgba(2,132,199,0.04),inset_0_1px_1px_0_#FFFFFF] dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.14),inset_0_-1px_0_0_rgba(255,255,255,0.03),0_16px_36px_-10px_rgba(0,0,0,0.65)] hover:shadow-[0_20px_45px_-10px_rgba(2,132,199,0.14),0_8px_20px_-4px_rgba(15,23,42,0.06),0_0_25px_-4px_rgba(56,189,248,0.25)] dark:hover:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.22),0_22px_45px_-10px_rgba(0,0,0,0.75),0_0_25px_-4px_rgba(56,189,248,0.22)] hover:-translate-y-1 hover:scale-[1.02] backdrop-blur-xl"
      >
        {/* Skeuomorphic Glassy Squircle Badge */}
        <div
          className="w-12 h-12 rounded-[14px] flex items-center justify-center relative shrink-0 transition-all duration-300 bg-gradient-to-br from-blue-50 to-sky-100 dark:bg-[#121726] border border-sky-200/90 dark:border-white/15 text-sky-600 dark:text-white shadow-[inset_0_1.5px_2px_0_#FFFFFF,0_4px_12px_-2px_rgba(2,132,199,0.08)] dark:shadow-[inset_0_1px_1px_0_rgba(255,255,255,0.38),inset_0_-1.5px_3px_0_rgba(0,0,0,0.55),0_8px_18px_-4px_rgba(0,0,0,0.5)]"
        >
          <Icon className="w-[23px] h-[23px] stroke-current" />
        </div>

        {/* Card Typography */}
        <div className="relative z-10 mt-5 flex flex-col gap-1.5">
          <h3 className="text-slate-900 dark:text-white font-bold text-[1.15rem] leading-snug tracking-[-0.015em]">
            {item.title}
          </h3>
          <p className="text-slate-500 dark:text-slate-400 font-normal text-[0.865rem] leading-relaxed tracking-[-0.005em]">
            {item.description}
          </p>
        </div>

        {/* Spotlight Glow Overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(56, 189, 248, 0.12) 0%, transparent 60%)'
          }}
          aria-hidden="true"
        />
      </article>
    );
  };

  const HeroIcon = ICON_MAP[deliverablesData.centerHero.icon] || PackageCheck;

  return (
    <section
      ref={sectionRef}
      id="we-deliver-section"
      className="relative w-full py-24 sm:py-28 px-4 sm:px-6 overflow-hidden select-none bg-[radial-gradient(circle_at_50%_20%,#FFFFFF_0%,#F6F9FD_50%,#EDF3FA_100%)] dark:bg-[radial-gradient(circle_at_50%_25%,#0d1222_0%,#070a12_55%,#030509_100%)]"
      aria-label="We Deliver"
    >
      {/* Ambient Deep Radial Glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] pointer-events-none blur-[85px] z-[1] bg-[radial-gradient(ellipse_at_center,rgba(56,189,248,0.16)_0%,rgba(14,165,233,0.08)_45%,transparent_70%)] dark:bg-[radial-gradient(ellipse_at_center,rgba(37,99,235,0.16)_0%,rgba(6,182,212,0.08)_45%,transparent_72%)]"
        aria-hidden="true"
      />

      {/* Celestial Orbital Rings in Background (Reference Mockup) */}
      <div className="absolute inset-0 max-w-[1400px] max-h-[900px] m-auto pointer-events-none z-[2]" aria-hidden="true">
        {/* Outer Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1180px] h-[820px] rounded-full border border-sky-400/20 dark:border-sky-400/[0.08]">
          <span className="absolute top-[26%] left-[3.5%] w-[7px] h-[7px] rounded-full bg-sky-500 shadow-[0_0_10px_#38bdf8,0_0_18px_rgba(56,189,248,0.6)]" />
        </div>
        {/* Inner Ring */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[560px] rounded-full border border-sky-400/15 dark:border-sky-400/[0.05]" />
      </div>

      {/* Header with Core Capabilities Badge */}
      <div className="relative z-10 max-w-3xl mx-auto mb-14 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-100/80 dark:bg-blue-600/10 border border-sky-300/80 dark:border-sky-400/30 text-sky-600 dark:text-sky-400 text-xs font-bold tracking-widest uppercase mb-4 shadow-[0_4px_14px_rgba(2,132,199,0.09)] dark:shadow-[0_4px_15px_rgba(0,102,255,0.12)]">
          <span className="w-2 h-2 rounded-full bg-sky-500 dark:bg-sky-400 shadow-[0_0_8px_#0284c7] animate-pulse" />
          <span>Core Capabilities</span>
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-0">
          We <span className="text-sky-500 bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent dark:text-white dark:bg-none">Deliver</span>
        </h2>
      </div>

      {/* 3-Column Structured Card Grid (9 Cards Total) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[22px] max-w-[1220px] mx-auto relative z-10">
        
        {/* Left Column (3 cards) */}
        <div className="flex flex-col gap-[22px]">
          {deliverablesData.leftColumn.map(renderSurroundingCard)}
        </div>

        {/* Center Column (3 cards with permanent hero anchor) */}
        <div className="flex flex-col gap-[22px]">
          {/* Top Flank: Agile Development Process */}
          {renderSurroundingCard(deliverablesData.centerColumnFlanks.top)}

          {/* Center "We Deliver" Permanent Hero Card */}
          <article
            ref={heroCardRef}
            id="deliver-hero-card"
            className="relative w-full min-h-[195px] p-6 sm:p-7 rounded-[24px] flex flex-col justify-start overflow-hidden z-20 cursor-default bg-[radial-gradient(circle_at_100%_80%,rgba(56,189,248,0.42)_0%,rgba(14,165,233,0.22)_35%,rgba(224,242,254,0.15)_60%,#FFFFFF_85%)] dark:bg-[radial-gradient(135%_120%_at_50%_0%,#111728_0%,#080c16_55%,#05070d_100%)] border-[1.5px] border-sky-400 dark:border-white/[0.14] shadow-[0_16px_45px_-8px_rgba(14,165,233,0.35),0_0_30px_rgba(56,189,248,0.22),inset_0_1px_1px_#FFFFFF] dark:shadow-[inset_0_1px_1.5px_0_rgba(255,255,255,0.24),inset_0_-1px_0_0_rgba(255,255,255,0.08),0_25px_60px_-15px_rgba(0,0,0,0.9),0_10px_40px_-10px_rgba(59,130,246,0.45)] backdrop-blur-xl"
          >
            {/* Center Hero 3D-Embossed Squircle Badge */}
            <div
              className="w-12 h-12 rounded-[14px] flex items-center justify-center text-white relative shrink-0 backdrop-blur-md bg-gradient-to-br from-sky-600 to-blue-600 border border-white/50 shadow-md shadow-sky-600/40"
            >
              <HeroIcon className="w-[23px] h-[23px] stroke-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.25)]" />
            </div>

            {/* Typography */}
            <div className="relative z-10 mt-5 flex flex-col gap-1.5">
              <h3 className="text-slate-900 dark:text-white font-extrabold text-[1.35rem] leading-tight tracking-[-0.02em]">
                {deliverablesData.centerHero.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 font-normal text-[0.885rem] leading-relaxed">
                {deliverablesData.centerHero.subtitle}
              </p>
            </div>

            {/* Vivid Blue Electric Rim Light */}
            <div
              className="absolute -bottom-[2px] inset-x-0 h-[70px] rounded-b-[24px] pointer-events-none opacity-80 blur-[12px] bg-[radial-gradient(ellipse_95%_100%_at_50%_100%,rgba(56,189,248,0.55)_0%,rgba(14,165,233,0.28)_45%,transparent_80%)] dark:bg-[radial-gradient(ellipse_95%_100%_at_50%_100%,rgba(56,189,248,0.85)_0%,rgba(37,99,235,0.5)_45%,transparent_80%)]"
              aria-hidden="true"
            />

            {/* Bottom Neon Accent Highlight Line */}
            <div
              className="absolute bottom-0 inset-x-[10%] h-[1.5px] pointer-events-none bg-[linear-gradient(90deg,transparent_0%,rgba(56,189,248,0.8)_20%,rgba(2,132,199,0.95)_50%,rgba(56,189,248,0.8)_80%,transparent_100%)] shadow-[0_0_10px_rgba(56,189,248,0.5)]"
              aria-hidden="true"
            />
          </article>

          {/* Bottom Flank: Robust Cyber Security */}
          {renderSurroundingCard(deliverablesData.centerColumnFlanks.bottom)}
        </div>

        {/* Right Column (3 cards) */}
        <div className="flex flex-col gap-[22px]">
          {deliverablesData.rightColumn.map(renderSurroundingCard)}
        </div>

      </div>

      {/* Subtle Ambient Diamond Accent in background */}
      <div className="absolute bottom-[8%] right-[5%] text-4xl text-sky-400/25 dark:text-white/[0.12] pointer-events-none drop-shadow-[0_0_8px_rgba(56,189,248,0.35)]" aria-hidden="true">
        ✦
      </div>

      {/* Controls: Replay Burst Animation */}
      <div className="flex justify-center mt-11 relative z-20">
        <button
          onClick={replayBurst}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/[0.04] border border-slate-300 dark:border-white/10 text-slate-600 dark:text-slate-400 hover:text-sky-600 dark:hover:text-white hover:bg-sky-50 dark:hover:bg-white/[0.09] hover:border-sky-400/40 text-xs font-medium transition-all group shadow-sm hover:shadow"
          title="Replay Reveal Animation"
          aria-label="Replay reveal animation"
        >
          <RotateCw className="w-3.5 h-3.5 transition-transform duration-500 group-hover:rotate-180" />
          <span>Replay Reveal Animation</span>
        </button>
      </div>
    </section>
  );
}
