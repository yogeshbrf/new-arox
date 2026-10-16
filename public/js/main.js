(function () {
  'use strict';

  /* ── THEME SYSTEM ─────────────────────────────────────────── */
  const THEMES = ['light', 'dark'];
  let currentTheme = localStorage.getItem('arox-theme') || 'dark';
  if (!THEMES.includes(currentTheme)) {
    currentTheme = window.matchMedia('(prefers-color-scheme:dark)').matches ? 'dark' : 'light';
  }

  function applyTheme(t, isInit) {
    const root = document.documentElement;
    const targetClass = 'theme-' + t;
    const alreadyApplied = root.classList.contains(targetClass);

    root.style.colorScheme = t;
    root.style.backgroundColor = (t === 'dark') ? '#0b0c11' : '#FFFFFF';
    if (document.body) {
      document.body.style.backgroundColor = (t === 'dark') ? '#0b0c11' : '#FFFFFF';
    }

    if (!alreadyApplied) {
      root.classList.add('theme-switching');
      root.classList.remove('theme-light', 'theme-dark', 'dark');
      root.classList.add(targetClass);
      if (t === 'dark') {
        root.classList.add('dark');
      }
    }
    currentTheme = t;
    localStorage.setItem('arox-theme', t);
    updateThemeUI();
    updateLogos();
    window.dispatchEvent(new CustomEvent('arox-theme-change', { detail: { theme: t } }));

    if (!alreadyApplied) {
      // Force instant style commit then release transition suppression
      void root.offsetHeight;
      requestAnimationFrame(() => {
        root.classList.remove('theme-switching');
      });
    }
  }

  function updateThemeUI() {
    // Sync all switch checkboxes with current theme (checked = light, unchecked = dark)
    document.querySelectorAll('#checkbox, #theme-checkbox, .theme-switch-checkbox').forEach(cb => {
      cb.checked = (currentTheme === 'light');
    });

    const icon = document.getElementById('theme-icon');
    if (icon) {
      if (!icon.querySelector('.eye-open-g')) {
        icon.setAttribute('viewBox', '0 0 24 24');
        icon.setAttribute('stroke-width', '2');
        icon.innerHTML = `
          <g class="eye-open-g">
            <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
            <circle cx="12" cy="12" r="3"></circle>
          </g>
          <g class="eye-closed-g">
            <path d="M2 10s3 5 10 5 10-5 10-5"></path>
            <path d="M6 13l-1.5 2.5"></path>
            <path d="M10 15v3"></path>
            <path d="M14 15v3"></path>
            <path d="M18 13l1.5 2.5"></path>
          </g>
        `;
      }
      
      if (currentTheme === 'light') {
        icon.setAttribute('stroke', '#f59e0b');
      } else {
        icon.setAttribute('stroke', '#38bdf8');
      }
    }

    document.querySelectorAll('.mobile-theme-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.theme === currentTheme);
    });
  }

  function updateLogos() {
    const isDark = currentTheme === 'dark';
    const src = isDark ? 'public/assets/logo/logo-dark.png' : 'public/assets/logo/logo-light.png';
    document.querySelectorAll('#nav-logo-img, #footer-logo-img, .nav-logo img, .footer-brand-logo img').forEach(el => {
      if (el) el.src = src;
    });
  }

  // Preload all theme assets immediately for zero-delay instant switching
  const PRELOAD_ASSETS = [
    'public/assets/logo/logo-dark.png',
    'public/assets/logo/logo-light.png',
    'assets/logo/logo-dark.png',
    'assets/logo/logo-light.png',
    'images/hero/home_dark.png',
    'images/hero/home_light.png',
    'images/hero/about_dark.png',
    'images/hero/about_light.png',
    'images/hero/services_dark.png',
    'images/hero/services_light.png',
    'images/hero/courses_dark.png',
    'images/hero/courses_light.png',
    'images/hero/contact_dark.png',
    'images/hero/contact_light.png'
  ];
  if (typeof window !== 'undefined') {
    PRELOAD_ASSETS.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }

  // Instant switch on click without event loop or label delay
  document.addEventListener('click', (e) => {
    const switchLabel = e.target.closest('.switch');
    if (switchLabel) {
      const cb = switchLabel.querySelector('input[type="checkbox"]');
      if (cb) {
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        cb.checked = (nextTheme === 'light');
        applyTheme(nextTheme);
        e.preventDefault();
        return;
      }
    }
    if (e.target.matches('#checkbox, #theme-checkbox, .theme-switch-checkbox')) {
      const nextTheme = e.target.checked ? 'light' : 'dark';
      applyTheme(nextTheme);
    }
  });

  document.addEventListener('change', (e) => {
    if (e.target.id === 'checkbox' || e.target.id === 'theme-checkbox' || e.target.classList.contains('theme-switch-checkbox')) {
      const targetTheme = e.target.checked ? 'light' : 'dark';
      if (targetTheme !== currentTheme) {
        applyTheme(targetTheme);
      }
    }
  });

  const oldBtn = document.getElementById('theme-toggle-btn');
  if (oldBtn) {
    oldBtn.addEventListener('click', () => {
      const idx = THEMES.indexOf(currentTheme);
      applyTheme(THEMES[(idx + 1) % THEMES.length]);
    });
  }
  document.querySelectorAll('.mobile-theme-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      applyTheme(btn.dataset.theme);
    });
  });
  applyTheme(currentTheme, true);

  // Sync theme changes across multiple tabs
  window.addEventListener('storage', (e) => {
    if (e.key === 'arox-theme') {
      const newTheme = e.newValue || 'dark';
      if (newTheme !== currentTheme) {
        applyTheme(newTheme);
      }
    }
  });

  const footerYear = document.getElementById('footer-year');
  if (footerYear) {
    footerYear.textContent = new Date().getFullYear();
  }

  /* ── NAVBAR ─────────────────────────────────────────────────── */
  const header = document.getElementById('site-header');
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const hamburgerIcon = document.getElementById('hamburger-icon');
  const mobileMenu = document.getElementById('mobile-menu');
  let lastScrollY = 0, mobileOpen = false;

  function setHamburgerIcon(open) {
    if (!hamburgerBtn) return;
    hamburgerBtn.classList.toggle('open', open);
  }
  setHamburgerIcon(false);

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', () => {
      mobileOpen = !mobileOpen;
      mobileMenu.classList.toggle('open', mobileOpen);
      mobileMenu.setAttribute('aria-hidden', String(!mobileOpen));
      document.body.classList.toggle('no-scroll', mobileOpen);
      setHamburgerIcon(mobileOpen);
    });

    mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-cta-btn, .mobile-login-btn').forEach(link => {
      link.addEventListener('click', () => {
        mobileOpen = false;
        mobileMenu.classList.remove('open');
        mobileMenu.setAttribute('aria-hidden', 'true');
        document.body.classList.remove('no-scroll');
        setHamburgerIcon(false);
      });
    });
  }

  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (header) {
      header.classList.toggle('scrolled', y > 40);
      if (window.isHScrollActive || window.isServicesScrollActive) {
        header.classList.add('hidden-nav');
      } else {
        if (y > lastScrollY && y > 100) header.classList.add('hidden-nav');
        else header.classList.remove('hidden-nav');
      }
    }
    lastScrollY = y;
  }, { passive: true });

  /* ── NAVBAR SLIDING HOVER PILL ───────────────────────────── */
  function initNavHoverPill() {
    const navLinksList = document.querySelectorAll('.nav-links');
    navLinksList.forEach(nav => {
      let pill = nav.querySelector('.nav-sliding-pill');
      if (!pill) {
        pill = document.createElement('div');
        pill.className = 'nav-sliding-pill';
        nav.insertBefore(pill, nav.firstChild);
      }

      const links = Array.from(nav.querySelectorAll('.nav-link'));
      if (!links.length) return;

      function updatePill(targetEl, immediate) {
        if (!targetEl) {
          pill.style.opacity = '0';
          return;
        }
        const navRect = nav.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();
        const left = targetRect.left - navRect.left;
        const top = targetRect.top - navRect.top;
        const width = targetRect.width;
        const height = targetRect.height;

        if (immediate) {
          pill.style.transition = 'none';
        } else {
          pill.style.transition = 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), width 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
        }

        pill.style.transform = `translate(${left}px, ${top}px)`;
        pill.style.width = `${width}px`;
        pill.style.height = `${height}px`;
        pill.style.opacity = '1';

        if (immediate) {
          requestAnimationFrame(() => {
            pill.style.transition = 'transform 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), width 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), height 0.28s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.2s ease, background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease';
          });
        }
      }

      nav.classList.add('nav-pill-ready');
      const activeLink = nav.querySelector('.nav-link.active') || links[0];
      
      // Position on active link on load
      requestAnimationFrame(() => {
        updatePill(activeLink, true);
      });
      setTimeout(() => {
        const curActive = nav.querySelector('.nav-link.active') || links[0];
        updatePill(curActive, true);
      }, 80);

      if (document.fonts && document.fonts.ready) {
        document.fonts.ready.then(() => {
          const curActive = nav.querySelector('.nav-link.active') || links[0];
          updatePill(curActive, true);
        });
      }

      links.forEach(link => {
        link.addEventListener('mouseenter', () => {
          nav.classList.add('nav-hovering');
          links.forEach(l => l.classList.remove('nav-link-hovered'));
          link.classList.add('nav-link-hovered');
          updatePill(link, false);
        });
      });

      nav.addEventListener('mouseleave', () => {
        nav.classList.remove('nav-hovering');
        links.forEach(l => l.classList.remove('nav-link-hovered'));
        const currentActive = nav.querySelector('.nav-link.active');
        if (currentActive) {
          updatePill(currentActive, false);
        } else {
          pill.style.opacity = '0';
        }
      });

      window.addEventListener('resize', () => {
        const currentHovered = nav.querySelector('.nav-link.nav-link-hovered') || nav.querySelector('.nav-link:hover');
        const currentActive = nav.querySelector('.nav-link.active');
        updatePill(currentHovered || currentActive, true);
      }, { passive: true });

      window.addEventListener('arox-theme-change', () => {
        setTimeout(() => {
          const currentHovered = nav.querySelector('.nav-link.nav-link-hovered') || nav.querySelector('.nav-link:hover');
          const currentActive = nav.querySelector('.nav-link.active');
          updatePill(currentHovered || currentActive, true);
        }, 50);
      });
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initNavHoverPill);
  } else {
    initNavHoverPill();
  }

  /* ── HERO SECTION ENTRANCE & PARALLAX ────────────────────────── */
  if (typeof gsap !== 'undefined') {
    gsap.ticker.lagSmoothing(500, 33);
  }
  const heroSection = document.getElementById('hero');
  if (heroSection && typeof gsap !== 'undefined') {
    const heroElements = heroSection.querySelectorAll('span.text-xs, h1, p, .flex.gap-4, .btn-primary, .btn-secondary, .scroll-indicator');
    if (heroElements.length) {
      gsap.from(heroElements, {
        opacity: 0,
        y: 18,
        duration: 0.75,
        stagger: 0.08,
        ease: 'power2.out',
        clearProps: 'transform,opacity'
      });
    }

    const gridBg = heroSection.querySelector('.grid-lines-bg');
    if (gridBg && window.innerWidth > 768) {
      heroSection.addEventListener('mousemove', (e) => {
        const xPos = (e.clientX / window.innerWidth - 0.5) * 18;
        const yPos = (e.clientY / window.innerHeight - 0.5) * 18;
        gsap.to(gridBg, { x: xPos, y: yPos, duration: 0.6, ease: 'power1.out' });
      });
    }
  }

  /* ── MAGNETIC BUTTONS ─────────────────────────────────────────── */
  function initMagnetic(btn) {
    let animX = 0, animY = 0, targetX = 0, targetY = 0, rafId = null;
    function tick() {
      animX += (targetX - animX) * 0.25;
      animY += (targetY - animY) * 0.25;
      btn.style.transform = `translate(${animX.toFixed(2)}px,${animY.toFixed(2)}px)`;
      if (Math.abs(targetX - animX) > 0.05 || Math.abs(targetY - animY) > 0.05) {
        rafId = requestAnimationFrame(tick);
      } else { rafId = null; }
    }
    btn.addEventListener('mousemove', e => {
      const r = btn.getBoundingClientRect();
      targetX = (e.clientX - r.left - r.width / 2) * 0.25;
      targetY = (e.clientY - r.top - r.height / 2) * 0.25;
      if (!rafId) rafId = requestAnimationFrame(tick);
    });
    btn.addEventListener('mouseleave', () => {
      targetX = 0; targetY = 0;
      if (!rafId) rafId = requestAnimationFrame(tick);
    });
  }
  document.querySelectorAll('.btn-primary, .btn-secondary').forEach(initMagnetic);

  /* ── GSAP STATS ─────────────────────────────────────────────── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
  }

  const statCards = Array.from(document.querySelectorAll('.stat-card-gsap'));
  const N_STATS = statCards.length;
  const TOTAL_SCROLL_STATS = N_STATS * 300;

  function revealStat(card, p) {
    p = Math.max(0, Math.min(1, p));
    card.style.clipPath = `inset(${((1 - p) * 100).toFixed(4)}% 0 0% 0 round 22px)`;
    if (typeof gsap !== 'undefined') {
      gsap.set(card, { opacity: p, y: (1 - p) * 110, scale: 0.94 + p * 0.06, force3D: true });
    }
    const sweep = card.querySelector('.light-sweep');
    if (sweep) sweep.style.left = `${p * 200 - 100}%`;
    const numEl = card.querySelector('.card-number');
    if (numEl) {
      const target = parseFloat(numEl.dataset.target || '0');
      const suffix = numEl.dataset.suffix || '';
      if (p >= 0.99) {
        card._appeared = true;
        if (!card._counting && card._val !== target) {
          card._counting = true;
          if (card._val === undefined) card._val = 0;
          if (typeof gsap !== 'undefined') {
            gsap.to(card, {
              _val: target, duration: 1.2, ease: 'power3.out',
              onUpdate() { numEl.textContent = Math.round(card._val) + suffix; },
              onComplete() {
                card._counting = false;
                numEl.textContent = target + suffix;
              }
            });
          } else {
            numEl.textContent = target + suffix;
            card._counting = false;
          }
        }
      } else if (!card._appeared) {
        if (typeof gsap !== 'undefined') {
          gsap.killTweensOf(card, '_val');
        }
        card._counting = false; card._val = 0;
        numEl.textContent = '0' + suffix;
      }
    }
  }

  if (N_STATS > 0 && document.getElementById('stats-section')) {
    if (window.innerWidth > 768) {
      let statsTrigger = null;
      let statsCompleted = false;
      let maxProgress = 0;

      function finalizeStats(isAtEnd) {
        if (statsCompleted) return;
        statsCompleted = true;

        // Ensure all cards are in permanent 100% revealed state
        statCards.forEach(card => {
          card._appeared = true;
          card.style.clipPath = 'none';
          card.style.opacity = '1';
          card.style.transform = 'none';
          const sweep = card.querySelector('.light-sweep');
          if (sweep) sweep.style.display = 'none';
          const numEl = card.querySelector('.card-number');
          if (numEl) {
            const target = numEl.dataset.target || '0';
            const suffix = numEl.dataset.suffix || '';
            numEl.textContent = target + suffix;
          }
        });

        if (statsTrigger) {
          const pinDistance = TOTAL_SCROLL_STATS;
          const currentY = window.scrollY;
          statsTrigger.kill(true);
          statsTrigger = null;

          if (isAtEnd) {
            const newY = Math.max(0, currentY - pinDistance);
            if (window.lenis) {
              window.lenis.scrollTo(newY, { immediate: true });
            } else {
              window.scrollTo(0, newY);
            }
          }
          ScrollTrigger.refresh();
        }
      }

      statCards.forEach(c => revealStat(c, 0));

      statsTrigger = ScrollTrigger.create({
        trigger: document.getElementById('stats-section'),
        pin: true,
        start: 'top top',
        end: `+=${TOTAL_SCROLL_STATS}`,
        scrub: 1,
        anticipatePin: 1,
        onUpdate(self) {
          if (statsCompleted) return;
          // Only play forward during initial scroll-down
          maxProgress = Math.max(maxProgress, self.progress);
          statCards.forEach((card, i) => {
            const sliceStart = i / N_STATS;
            const p = (maxProgress - sliceStart) / (1 / N_STATS);
            revealStat(card, p);
          });
          // Once full stats have appeared, mark them permanently
          if (maxProgress >= 0.99) {
            statCards.forEach(c => { c._appeared = true; });
          }
        },
        onLeave(self) {
          // Scrolled past the stats section down into next content
          if (maxProgress >= 0.95 || self.progress >= 0.95) {
            finalizeStats(true);
          }
        },
        onLeaveBack(self) {
          // If all stats appeared and user scrolls back up to hero, unpin so it never triggers again
          if (maxProgress >= 0.95) {
            finalizeStats(false);
          }
        }
      });
    } else {
      // Mobile view: Static numbers and smooth scroll without animation lock
      statCards.forEach(card => {
        card.style.clipPath = 'none';
        card.style.opacity = '1';
        card.style.transform = 'none';
        const numEl = card.querySelector('.card-number');
        if (numEl) {
          const target = numEl.dataset.target || '0';
          const suffix = numEl.dataset.suffix || '';
          numEl.textContent = target + suffix;
        }
      });
    }
  }

  /* ═══════════════════════════════════════════════════════════════
     WE DELIVER — Scroll-Driven Card Burst Animation
     ─────────────────────────────────────────────────────────────
     Pixel-accurate recreation from reference frames 1–4 & video:
     
     Phase 1 (0%–25% scroll):  Hero card appears large & centered,
                               scaled up ~1.8x, filling the viewport.
                               All background cards are hidden behind it.
     
     Phase 2 (25%–50% scroll): Hero card begins shrinking toward its
                               final grid position. Background cards
                               start peeking out from behind, tiny and
                               blurred, clustered at the center.
     
     Phase 3 (50%–80% scroll): Background cards burst outward radially
                               from center, scaling up and fanning out
                               to their final grid positions. Each card
                               has a staggered delay based on distance.
     
     Phase 4 (80%–100% scroll): All cards settle into final positions.
                               Hero glow fades, blur clears, hover
                               interactions are re-enabled.
     
     This is scroll-driven (scrub) — the user controls the animation
     progress by scrolling. The section is pinned during the animation.
     Once completed, it unpins and stays in final state permanently.
     ═══════════════════════════════════════════════════════════════ */
  const deliverSection = document.getElementById('we-deliver-section');
  if (deliverSection) {
    const heroCard = document.getElementById('deliver-hero-card');
    const surroundingCards = Array.from(deliverSection.querySelectorAll('.deliver-grid-card'));
    const gridContainer = document.getElementById('deliver-grid-container');

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ─── Per-card animation data (rotation, stagger delay, radial burst angle) ───
    // Order matches DOM: software, uiux, cloud, agile, security, ai, business, partnership
    const cardAnimData = [
      { stagger: 0.00, rotZ:  2.5, burstAngle: -135 }, // software    (top-left)
      { stagger: 0.04, rotZ: -1.8, burstAngle: -160 }, // uiux        (mid-left)
      { stagger: 0.08, rotZ:  1.5, burstAngle:  160 }, // cloud       (bot-left)
      { stagger: 0.02, rotZ: -2.0, burstAngle:  -90 }, // agile       (top-center)
      { stagger: 0.06, rotZ:  2.2, burstAngle:   90 }, // security    (bot-center)
      { stagger: 0.01, rotZ:  3.0, burstAngle:  -45 }, // ai          (top-right)
      { stagger: 0.05, rotZ: -2.5, burstAngle:   20 }, // business    (mid-right)
      { stagger: 0.09, rotZ:  1.2, burstAngle:  135 }, // partnership (bot-right)
    ];

    let deliverCompleted = false;
    let deliverTrigger = null;
    let masterTl = null;
    let maxDeliverProgress = 0;
    // Comfortable scroll distance synchronized to smooth scrolling
    const TOTAL_SCROLL_DELIVER = 1200;

    // ─── Finalize into permanent static layout & remove pin spacer ───
    function finalizeDeliver(isAtEnd) {
      if (deliverCompleted) return;
      deliverCompleted = true;

      deliverSection.classList.add('deliver-settled');
      if (masterTl) {
        masterTl.progress(1);
        masterTl.pause();
      }

      // ── Lock all 9 cards into their permanent, static CSS grid layout ──
      if (heroCard) {
        gsap.set(heroCard, { clearProps: 'transform,opacity,scale,x,y,zIndex' });
      }
      surroundingCards.forEach((card) => {
        gsap.set(card, { clearProps: 'transform,opacity,scale,x,y,rotateZ,zIndex' });
        card.style.pointerEvents = 'auto';
      });

      // ── Clean up & disable pin, remove pin-spacer and artificial scroll height ──
      if (deliverTrigger) {
        const pinDistance = TOTAL_SCROLL_DELIVER;
        const currentY = window.scrollY;
        deliverTrigger.kill(true);
        deliverTrigger = null;

        if (isAtEnd) {
          const newY = Math.max(0, currentY - pinDistance);
          if (window.lenis) {
            window.lenis.scrollTo(newY, { immediate: true });
          } else {
            window.scrollTo(0, newY);
          }
        }

        ScrollTrigger.refresh();
      }
    }

    // ─── Compute offset from each card's natural position to hero card's center ───
    function computeCenterOffsets() {
      if (!heroCard) return [];
      const heroRect = heroCard.getBoundingClientRect();
      const heroCX = heroRect.left + heroRect.width / 2;
      const heroCY = heroRect.top + heroRect.height / 2;

      return surroundingCards.map((card) => {
        const r = card.getBoundingClientRect();
        return {
          dx: heroCX - (r.left + r.width / 2),
          dy: heroCY - (r.top + r.height / 2)
        };
      });
    }

    // ─── Reduced motion fallback ───
    function runReducedMotionEntrance() {
      finalizeDeliver(false);
    }

    // ─── Mouse-following spotlight on background cards ───
    surroundingCards.forEach((card) => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });

      // Micro-interaction on click
      card.addEventListener('click', () => {
        if (!deliverSection.classList.contains('deliver-settled')) return;
        gsap.timeline()
          .to(card, { scale: 0.98, duration: 0.1, ease: 'power1.in' })
          .to(card, { scale: 1.02, duration: 0.2, ease: 'back.out(2)' });
      });
    });

    // ─── Initialize scroll-driven animation ───
    requestAnimationFrame(() => {
      if (prefersReducedMotion) {
        finalizeDeliver(false);
        return;
      }

      if (!heroCard || typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

      // If page was loaded/refreshed already scrolled past the deliver section, settle immediately
      if (window.scrollY >= deliverSection.offsetTop + TOTAL_SCROLL_DELIVER) {
        finalizeDeliver(false);
        return;
      }

      // Measure offsets before setting initial state
      const offsets = computeCenterOffsets();

      // ── Set initial state: hero card large & centered, bg cards hidden behind ──
      gsap.set(heroCard, {
        scale: 1.5,
        opacity: 0,
        y: 16,
        zIndex: 30
      });

      // Background cards: collapsed behind hero at centroid, invisible
      surroundingCards.forEach((card, i) => {
        const off = offsets[i] || { dx: 0, dy: 0 };
        const anim = cardAnimData[i] || { rotZ: 0 };
        gsap.set(card, {
          x: off.dx,
          y: off.dy,
          scale: 0.18,
          opacity: 0,
          rotateZ: anim.rotZ * 1.5,
          pointerEvents: 'none',
          zIndex: 5
        });
      });

      // ── Build the master scroll-driven timeline ──
      masterTl = gsap.timeline({ paused: true });

      // Phase 1: Center Hero Card smoothly fades in and rises (0.00 → 0.18)
      masterTl.to(heroCard, {
        scale: 1.5,
        opacity: 1,
        y: 0,
        duration: 0.18,
        ease: 'power1.out'
      }, 0);

      // Phase 2: Center Hero gently scales down toward grid scale (0.18 → 0.58)
      masterTl.to(heroCard, {
        scale: 1.0,
        duration: 0.40,
        ease: 'power1.inOut'
      }, 0.18);

      // Phase 3: Background cards smoothly burst and fan out radially (0.22 → 0.86)
      surroundingCards.forEach((card, i) => {
        const anim = cardAnimData[i] || { stagger: 0, rotZ: 0 };
        const burstStart = 0.22 + anim.stagger * 1.2;
        const burstDuration = 0.52;

        masterTl.to(card, {
          x: 0,
          y: 0,
          scale: 1.0,
          opacity: 1,
          rotateZ: 0,
          duration: burstDuration,
          ease: 'power2.out',
          pointerEvents: 'auto'
        }, burstStart);
      });

      // Phase 4: Final settle (0.85 → 1.00)
      masterTl.to(surroundingCards, {
        opacity: 1,
        duration: 0.15,
        ease: 'sine.out'
      }, 0.85);

      // ── Attach ScrollTrigger for silky smooth 60/120fps scrubbing (runs ONLY ONCE) ──
      if (window.innerWidth > 768) {
        deliverTrigger = ScrollTrigger.create({
          trigger: deliverSection,
          pin: true,
          start: 'top top',
          end: `+=${TOTAL_SCROLL_DELIVER}`,
          scrub: 1,
          anticipatePin: 1,
          onUpdate(self) {
            if (deliverCompleted) return;
            maxDeliverProgress = Math.max(maxDeliverProgress, self.progress);
            if (masterTl) {
              masterTl.progress(maxDeliverProgress);
            }
            if (maxDeliverProgress >= 0.95) {
              deliverSection.classList.add('deliver-settled');
              surroundingCards.forEach(c => { c.style.pointerEvents = 'auto'; });
              // If fully revealed and user scrolls back up, unpin so they are not trapped
              if (self.direction === -1 && maxDeliverProgress >= 0.98) {
                finalizeDeliver(false);
              }
            }
          },
          onLeave(self) {
            // User scrolled past the deliver section into next content -> finalize & unpin permanently
            if (maxDeliverProgress >= 0.95 || self.progress >= 0.95) {
              finalizeDeliver(true);
            }
          },
          onLeaveBack(self) {
            // If cards were revealed and user scrolled back to top -> finalize & unpin permanently
            if (maxDeliverProgress >= 0.95) {
              finalizeDeliver(false);
            }
          }
        });
      } else {
        // Mobile: use IntersectionObserver for a single triggered animation
        gsap.set(heroCard, { scale: 1, opacity: 0, y: 30, clearProps: 'zIndex' });
        surroundingCards.forEach((card, i) => {
          gsap.set(card, { clearProps: 'x,y,rotateZ,zIndex', scale: 0.8, opacity: 0, y: 40 });
        });

        const mobileTl = gsap.timeline({
          paused: true,
          onComplete: () => {
            finalizeDeliver(false);
          }
        });

        mobileTl.to(heroCard, {
          scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'power2.out'
        }, 0);

        surroundingCards.forEach((card, i) => {
          mobileTl.to(card, {
            scale: 1, opacity: 1, y: 0,
            duration: 0.4,
            ease: 'power2.out',
            pointerEvents: 'auto'
          }, 0.15 + i * 0.06);
        });

        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
              mobileTl.play();
              observer.disconnect();
            }
          });
        }, { threshold: [0.0, 0.15, 0.3] });

        observer.observe(deliverSection);
      }
    });

    // Window resize handler — recalculate offsets if not yet completed
    window.addEventListener('resize', () => {
      if (!deliverCompleted && !prefersReducedMotion && deliverTrigger) {
        ScrollTrigger.refresh();
      }
    }, { passive: true });
  }

  /* ── DELIVER GRID CARDS (SPOTLIGHT & CLICK INTERACTION SITE-WIDE) ── */
  document.querySelectorAll('.deliver-grid-card').forEach((card) => {
    // If not already in deliverSection (which has its own scroll state tracking)
    if (!card.closest('#we-deliver-section')) {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty('--mouse-x', `${e.clientX - rect.left}px`);
        card.style.setProperty('--mouse-y', `${e.clientY - rect.top}px`);
      });

      card.addEventListener('click', () => {
        if (typeof gsap !== 'undefined') {
          gsap.timeline()
            .to(card, { scale: 0.98, duration: 0.1, ease: 'power1.in' })
            .to(card, { scale: 1.02, duration: 0.2, ease: 'back.out(2)' })
            .to(card, { scale: 1, duration: 0.2, ease: 'power1.out' });
        }
      });
    }
  });

  /* ── MAGIC BENTO ─────────────────────────────────────────────── */
  const bentoGrid = document.getElementById('bento-grid');
  if (bentoGrid) {
    const bentoData = [
      {
        title: 'Web Development',
        desc: 'Modern, fast and scalable websites.',
        label: 'For Business',
        isWide: true,
        image: 'assets/our service/web development.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>'
      },
      {
        title: 'App Development',
        desc: 'High-performance mobile applications.',
        label: 'Mobile',
        isWide: false,
        image: 'assets/our service/app development.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>'
      },
      {
        title: 'Software Development',
        desc: 'Dedicated engineering support to build and scale your digital product.',
        label: 'Extended Team',
        isWide: false,
        image: 'assets/our service/software development.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>'
      },
      {
        title: 'Digital Marketing',
        desc: 'Data-driven growth strategies that work.',
        label: 'Marketing',
        isWide: false,
        image: 'assets/our service/digital marketing.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 11 18-5v12L3 13v-2z"/><path d="M11.6 16.8a3 3 0 1 1-5.8-1.6"/></svg>'
      },
      {
        title: 'BPO Services',
        desc: 'Efficient, accurate and cost-effective support.',
        label: 'Operations',
        isWide: false,
        image: 'assets/our service/bpo services.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/></svg>'
      },
      {
        title: 'Branding & Designing',
        desc: 'Crafting memorable visual identities.',
        label: 'Creative',
        isWide: true,
        image: 'assets/our service/branding and designing.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><path d="M2 2l7.586 7.586"/><circle cx="11" cy="11" r="2"/></svg>'
      },
      {
        title: 'Industry Training',
        desc: 'Corporate and technical training.',
        label: 'Education',
        isWide: true,
        image: 'assets/our service/industry training.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>'
      },
      {
        title: 'Internships',
        desc: 'Real-world experience to kickstart your career with hands-on projects and industry mentors.',
        label: 'Career',
        isWide: true,
        image: 'assets/our service/internships.png',
        icon: '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>'
      }
    ];
    const arrowSVG = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';

    bentoGrid.innerHTML = '';
    bentoData.forEach((card, idx) => {
      const el = document.createElement('article');
      const isEven = idx % 2 === 0;
      el.className = `service-card magic-bento-card ${card.isWide ? 'wide' : ''} magic-bento-card--border-glow particle-container ${isEven ? 'bento-primary' : 'bento-secondary'}`;
      el.innerHTML = `
        <div class="magic-blob-1"></div>
        <div class="magic-blob-2"></div>
        ${card.image ? `
        <div class="bento-card-media">
          <img src="${card.image}" alt="${card.title}" class="bento-card-img" loading="lazy" />
        </div>` : ''}
        <div class="icon-box magic-bento-card__icon">${card.icon}</div>
        <div class="service-meta magic-bento-card__label">${card.label}</div>
        <h2 class="service-title magic-bento-card__title">${card.title}</h2>
        <div class="magic-bento-card__content"><h2 class="magic-bento-card__title-desktop">${card.title}</h2></div>
        <p class="service-desc magic-bento-card__description">${card.desc}</p>
        <a href="services.html" class="arrow magic-bento-card__arrow" aria-label="${card.title}">
          ${arrowSVG}
        </a>
      `;
      bentoGrid.appendChild(el);

      el.addEventListener('click', e => {
        if (e.target.closest('a')) return;
        const link = el.querySelector('a');
        if (link) link.click();
      });

      if (window.innerWidth > 768) {
        let hovered = false, particles = [], timeouts = [];

        function clearParticles() {
          timeouts.forEach(clearTimeout); timeouts = [];
          particles.forEach(p => gsap.to(p, { scale: 0, opacity: 0, duration: 0.3, ease: 'back.in(1.7)', onComplete() { p.parentNode && p.parentNode.removeChild(p); } }));
          particles = [];
        }
        function spawnParticles() {
          if (!hovered) return;
          const { width, height } = el.getBoundingClientRect();
          
          // Dynamic theme-aware particle colors (white in dark theme, dark gray in light theme)
          const isDark = document.documentElement.classList.contains('theme-dark') || document.documentElement.classList.contains('theme-navy');
          const pColor = isDark ? '255,255,255' : '95,99,104';
          
          for (let i = 0; i < 12; i++) {
            const to = setTimeout(() => {
              if (!hovered) return;
              const p = document.createElement('div');
              p.style.cssText = `position:absolute;width:4px;height:4px;border-radius:50%;background:rgba(${pColor},1);box-shadow:0 0 6px rgba(${pColor},.6);pointer-events:none;z-index:100;left:${Math.random()*width}px;top:${Math.random()*height}px;`;
              el.appendChild(p); particles.push(p);
              gsap.fromTo(p, { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.3, ease: 'back.out(1.7)' });
              gsap.to(p, { x: (Math.random() - .5) * 100, y: (Math.random() - .5) * 100, rotation: Math.random() * 360, duration: 2 + Math.random() * 2, ease: 'none', repeat: -1, yoyo: true });
              gsap.to(p, { opacity: 0.3, duration: 1.5, ease: 'power2.inOut', repeat: -1, yoyo: true });
            }, i * 100);
            timeouts.push(to);
          }
        }

        el.addEventListener('mouseenter', () => { hovered = true; spawnParticles(); gsap.to(el, { rotateX: 5, rotateY: -5, duration: 0.3, ease: 'power2.out', transformPerspective: 1000 }); });
        el.addEventListener('mouseleave', () => { hovered = false; clearParticles(); gsap.to(el, { rotateX: 0, rotateY: 0, x: 0, y: 0, duration: 0.3, ease: 'power2.out' }); el.style.setProperty('--glow-intensity', '0'); });
        el.addEventListener('mousemove', e => {
          const r = el.getBoundingClientRect();
          const x = e.clientX - r.left, y = e.clientY - r.top;
          const cx = r.width / 2, cy = r.height / 2;
          gsap.to(el, { rotateX: ((y - cy) / cy) * -10, rotateY: ((x - cx) / cx) * 10, duration: 0.1, ease: 'power2.out', transformPerspective: 1000 });
          gsap.to(el, { x: (x - cx) * 0.05, y: (y - cy) * 0.05, duration: 0.3, ease: 'power2.out' });
          el.style.setProperty('--glow-x', ((x / r.width) * 100) + '%');
          el.style.setProperty('--glow-y', ((y / r.height) * 100) + '%');
          el.style.setProperty('--glow-intensity', '1');
          el.style.setProperty('--glow-radius', '200px');
        });
        el.addEventListener('click', e => {
          const r = el.getBoundingClientRect();
          const cx = e.clientX - r.left, cy = e.clientY - r.top;
          const maxD = Math.max(Math.hypot(cx, cy), Math.hypot(cx - r.width, cy), Math.hypot(cx, cy - r.height), Math.hypot(cx - r.width, cy - r.height));
          
          // Dynamic theme-aware ripple color
          const isDark = document.documentElement.classList.contains('theme-dark') || document.documentElement.classList.contains('theme-navy');
          const rColor = isDark ? '255,255,255' : '0,0,0';
          
          const ripple = document.createElement('div');
          ripple.style.cssText = `position:absolute;width:${maxD*2}px;height:${maxD*2}px;border-radius:50%;background:radial-gradient(circle,rgba(${rColor},.3) 0%,rgba(${rColor},.1) 30%,transparent 70%);left:${cx-maxD}px;top:${cy-maxD}px;pointer-events:none;z-index:1000;`;
          el.appendChild(ripple);
          gsap.fromTo(ripple, { scale: 0, opacity: 1 }, { scale: 1, opacity: 0, duration: 0.8, ease: 'power2.out', onComplete() { ripple.remove(); } });
        });
      }
    });

    // Bento global spotlight
    const spotlight = document.createElement('div');
    spotlight.className = 'global-spotlight';
    document.body.appendChild(spotlight);
    document.addEventListener('mousemove', e => {
      const rect = bentoGrid.getBoundingClientRect();
      const inside = e.clientX >= rect.left && e.clientX <= rect.right && e.clientY >= rect.top && e.clientY <= rect.bottom;
      if (!inside) { gsap.to(spotlight, { opacity: 0, duration: 0.3 }); return; }
      gsap.to(spotlight, { left: e.clientX, top: e.clientY, duration: 0.1 });
      let minD = Infinity;
      bentoGrid.querySelectorAll('.magic-bento-card').forEach(c => {
        const cr = c.getBoundingClientRect();
        minD = Math.min(minD, Math.max(0, Math.hypot(e.clientX - (cr.left + cr.width / 2), e.clientY - (cr.top + cr.height / 2)) - Math.max(cr.width, cr.height) / 2));
      });
      const prox = 150, fade = 225;
      const op = minD <= prox ? 0.8 : minD <= fade ? ((fade - minD) / (fade - prox)) * 0.8 : 0;
      gsap.to(spotlight, { opacity: op, duration: op > 0 ? 0.2 : 0.5 });
    });
  }

  /* ── PROJECTS ─────────────────────────────────────────────────── */
  const projectsData = [
    { title: 'Apex Finance Ledger', cat: 'FINTECH • ENTERPRISE', desc: 'Next-gen banking infrastructure streaming transactions for 10M+ accounts globally.', accent: 'linear-gradient(to top right,rgba(249,115,22,.2),rgba(245,158,11,.2))', idx: 1 },
    { title: 'Helix Supply Chain', cat: 'LOGISTICS • AI ENGINE', desc: 'Automated warehouse logistics routing utilizing semantic model prediction layers.', accent: 'linear-gradient(to top right,rgba(59,130,246,.2),rgba(14,165,233,.2))', idx: 2 },
    { title: 'Nova Telecom Portal', cat: 'TELECOM • CLOUD CORE', desc: 'High-performance web dashboard handling multi-tenant subscriber data securely.', accent: 'linear-gradient(to top right,rgba(168,85,247,.2),rgba(236,72,153,.2))', idx: 3 }
  ];
  const pg = document.getElementById('projects-grid');
  if (pg) {
    projectsData.forEach(proj => {
      const card = document.createElement('div');
      card.className = 'project-card';
      card.style.position = 'relative';
      card.innerHTML = `<div class="project-preview"><div class="project-preview-gradient" style="background:${proj.accent}"></div><div class="project-grid-overlay"></div><span class="project-case-label">CASE ${proj.idx}</span></div><div><span class="project-category">${proj.cat}</span><h3 class="project-title">${proj.title}</h3><p class="project-desc">${proj.desc}</p></div>`;
      let glowEl = null;
      card.addEventListener('mouseenter', () => { glowEl = document.createElement('div'); glowEl.className = 'spotlight-glow'; card.appendChild(glowEl); });
      card.addEventListener('mousemove', e => {
        const r = card.getBoundingClientRect();
        const x = e.clientX - r.left, y = e.clientY - r.top;
        if (glowEl) { glowEl.style.left = x + 'px'; glowEl.style.top = y + 'px'; }
        gsap.to(card, { rotateX: ((y - r.height / 2) / (r.height / 2)) * -6, rotateY: ((x - r.width / 2) / (r.width / 2)) * 6, scale: 1.015, duration: 0.1, ease: 'power2.out', transformPerspective: 1000, transformStyle: 'preserve-3d' });
      });
      card.addEventListener('mouseleave', () => { if (glowEl) { glowEl.remove(); glowEl = null; } gsap.to(card, { rotateX: 0, rotateY: 0, scale: 1, duration: 0.3 }); });
      pg.appendChild(card);
    });
  }

  /* ── TESTIMONIALS ─────────────────────────────────────────────── */
  const testimonials = [
    { 
      quote: 'Their training program is unmatched. The engineering standards they instilled transformed our team culture.', 
      highlightedQuote: 'Their training program is <span class="quote-highlight">unmatched</span>.<br/>The engineering standards they instilled transformed our <span class="quote-accent">team culture.</span>',
      author: 'Marcus Vance', 
      role: 'Director of Talent, Helix Logistics', 
      project: 'HELIX LOGISTICS',
      projectCat: 'Logistics Engine',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80' 
    },
    { 
      quote: 'Premium is an understatement. The code clarity, testing metrics, and UI design are world-class.', 
      highlightedQuote: '<span class="quote-highlight">Premium</span> is an understatement.<br/>The code clarity, testing metrics, and UI design are <span class="quote-accent">world-class.</span>',
      author: 'Sora Takahashi', 
      role: 'Lead Architect, Nova Portal', 
      project: 'NOVA PORTAL',
      projectCat: 'Enterprise Solutions',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80' 
    },
    { 
      quote: 'AROX rebuilt our entire payment system in record time. System outages dropped to zero.', 
      highlightedQuote: '<span class="quote-highlight">AROX rebuilt</span> our entire payment system in record time.<br/>System outages dropped to <span class="quote-accent">zero.</span>',
      author: 'Elena Rostova', 
      role: 'VP of Engineering, Apex Ledger', 
      project: 'APEX LEDGER',
      projectCat: 'Fintech Solutions',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&q=80' 
    }
  ];
  const contentArea = document.getElementById('testimonial-content-area');
  let activeIdx = 0;

  if (contentArea) {
    testimonials.forEach((t, i) => {
      const slide = document.createElement('div');
      slide.className = 'testimonial-slide' + (i === 0 ? ' active' : '');
      slide.innerHTML = `
        <p class="testimonial-quote">"${t.highlightedQuote || t.quote}"</p>
        <div class="testimonial-divider">
          <div class="divider-line"></div>
          <div class="divider-dot"></div>
        </div>
        <div class="testimonial-meta-row">
          <div class="meta-left">
            <div class="testimonial-name">${t.author}</div>
            <div class="testimonial-role">${t.role}</div>
          </div>
          <div class="meta-right">
            <div class="verified-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <polyline points="9 11 11 13 15 9"/>
              </svg>
              <span>VERIFIED CLIENT</span>
            </div>
          </div>
        </div>
      `;
      contentArea.appendChild(slide);
    });
  }

  function switchTestimonial(idx) {
    if (!contentArea) return;
    const slides = contentArea.querySelectorAll('.testimonial-slide');
    if (!slides || !slides[activeIdx]) return;
    slides[activeIdx].classList.remove('active');
    slides[activeIdx].classList.add('exit');
    const prev = activeIdx;
    setTimeout(() => { if (slides[prev]) slides[prev].classList.remove('exit'); }, 400);
    activeIdx = idx;
    if (slides[idx]) slides[idx].classList.add('active');
  }

  // Swipe card stack
  const cardStack = document.getElementById('card-stack');
  const stackDotsContainer = document.getElementById('stack-dots');
  let cards = testimonials.map((_, i) => ({ id: i, origIdx: i }));

  function getStyle(index) {
    const n = cards.length;
    const isMobile = window.innerWidth <= 768;
    const xOffset = isMobile ? 24 : 60;
    const yOffset = isMobile ? 8 : 12;
    const rotOffset = isMobile ? -8 : -15;
    return {
      zIndex: n - index,
      scale: 1 - index * 0.05,
      x: n > 1 ? (index / (n - 1)) * xOffset : 0,
      y: -(index * yOffset),
      rotate: n > 1 ? (index / (n - 1)) * rotOffset : 0,
      opacity: 1 - index * 0.15
    };
  }

  function updateDots(activeOrigIdx) {
    if (!stackDotsContainer) return;
    stackDotsContainer.innerHTML = '';
    testimonials.forEach((_, i) => {
      const dot = document.createElement('div');
      dot.className = i === activeOrigIdx ? 'stack-dot stack-dot-active' : 'stack-dot';
      stackDotsContainer.appendChild(dot);
    });
  }

  function buildStack() {
    if (!cardStack) return;
    cardStack.innerHTML = '';
    cards.forEach((card, index) => {
      const isTop = index === 0;
      const t = testimonials[card.origIdx];
      const s = getStyle(index);
      const div = document.createElement('div');
      div.className = 'stack-card' + (isTop ? ' is-top' : '') + ` stack-depth-${index}`;
      div.style.cssText = `z-index:${s.zIndex};transform:translate(${s.x}px,${s.y}px) rotate(${s.rotate}deg) scale(${s.scale});opacity:${s.opacity};`;
      
      if (isTop) {
        div.innerHTML = `
          <img src="${t.image}" alt="${t.author}" loading="lazy"/>
          <div class="stack-card-overlay">
            <div class="client-badge">
              <div class="badge-icon-circle">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="10" width="20" height="12" rx="2" ry="2"></rect>
                  <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18"></path>
                </svg>
              </div>
              <div class="badge-text-group">
                <div class="badge-title">${t.project}</div>
                <div class="badge-subtitle">${t.projectCat}</div>
              </div>
            </div>
          </div>`;
        setupDrag(div);
      } else {
        div.innerHTML = `<img src="${t.image}" alt="${t.author}" loading="lazy"/><div class="stack-card-overlay"></div>`;
      }
      cardStack.appendChild(div);
    });
    switchTestimonial(cards[0].origIdx);
    updateDots(cards[0].origIdx);
  }

  function pushToBack() {
    const [first, ...rest] = cards;
    cards = [...rest, first];
    buildStack();
  }

  let isDragging = false;
  let autoSwipeInterval;

  function autoSwipe() {
    if (!cardStack) return;
    const topCard = cardStack.querySelector('.is-top');
    if (!topCard || isDragging) return;
    gsap.to(topCard, {
      x: -150, 
      y: 50, 
      rotate: -15, 
      opacity: 0,
      duration: 0.4, 
      onComplete: () => {
        pushToBack();
      }
    });
  }

  function setupDrag(topCard) {
    let startX = 0, startY = 0, dx = 0, dy = 0;
    const s = getStyle(0);

    function onDown(cx, cy) {
      isDragging = true; 
      startX = cx; 
      startY = cy; 
      dx = 0; 
      dy = 0; 
      topCard.style.transition = 'none'; 
      clearInterval(autoSwipeInterval); 
    }
    
    function onMove(cx, cy) {
      if (!isDragging) return;
      dx = cx - startX; dy = cy - startY;
      topCard.style.transform = `translate(${s.x + dx}px,${s.y + dy}px) rotate(${s.rotate + dx * 0.05}deg) scale(1.05)`;
    }
    
    function onUp() {
      if (!isDragging) return;
      isDragging = false;
      topCard.style.transition = '';
      if (Math.hypot(dx, dy) > 50) { 
        pushToBack(); 
      }
      else { 
        gsap.to(topCard, { x: s.x, y: s.y, rotate: s.rotate, scale: s.scale, duration: 0.4, ease: 'back.out(1)' }); 
      }
      autoSwipeInterval = setInterval(autoSwipe, 3800); 
    }

    topCard.addEventListener('mousedown', e => onDown(e.clientX, e.clientY));
    window.addEventListener('mousemove', e => { if (isDragging) onMove(e.clientX, e.clientY); });
    window.addEventListener('mouseup', onUp);
    topCard.addEventListener('touchstart', e => { const t = e.touches[0]; onDown(t.clientX, t.clientY); }, { passive: true });
    window.addEventListener('touchmove', e => { if (isDragging) { const t = e.touches[0]; onMove(t.clientX, t.clientY); } }, { passive: true });
    window.addEventListener('touchend', onUp);
  }

  // Bind arrows controls
  const btnPrev = document.getElementById('stack-prev');
  const btnNext = document.getElementById('stack-next');
  if (btnPrev) {
    btnPrev.addEventListener('click', () => {
      clearInterval(autoSwipeInterval);
      const last = cards[cards.length - 1];
      cards = [last, ...cards.slice(0, -1)];
      buildStack();
      autoSwipeInterval = setInterval(autoSwipe, 3800);
    });
  }
  if (btnNext) {
    btnNext.addEventListener('click', () => {
      clearInterval(autoSwipeInterval);
      pushToBack();
      autoSwipeInterval = setInterval(autoSwipe, 3800);
    });
  }

  if (cardStack) {
    buildStack();
    autoSwipeInterval = setInterval(autoSwipe, 3800);
  }


  /* ── LENIS SMOOTH INERTIA SCROLLING ── */
  function initLenis() {
    if (window.lenis) return;
    if (typeof Lenis === 'undefined') return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 1.5,
    });

    window.lenis = lenis;

    if (window.ScrollTrigger) {
      lenis.on('scroll', ScrollTrigger.update);
    }

    if (window.gsap) {
      gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
      });
      gsap.ticker.lagSmoothing(0);
    } else {
      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    }
  }

  if (typeof Lenis !== 'undefined') {
    initLenis();
  } else {
    // Only load Lenis on desktop for performance (skip on mobile/touch devices)
    const isMobile = /Android|iPhone|iPad|iPod|webOS/i.test(navigator.userAgent) || window.innerWidth < 768;
    if (!isMobile) {
      const lenisScript = document.createElement('script');
      lenisScript.src = "https://cdn.jsdelivr.net/npm/@studio-freight/lenis@1.0.42/dist/lenis.min.js";
      lenisScript.defer = true;
      lenisScript.onload = initLenis;
      document.head.appendChild(lenisScript);
    }
  }

  /* ── SCROLL REVEAL ANIMATIONS ─────────────────────────────────── */
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    // 1. General Section Headers across all pages (initial scroll-down reveal)
    const sectionHeaders = document.querySelectorAll(
      '.section-header, .services-header, .projects-header, .testimonials-header, .process-header'
    );
    sectionHeaders.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true
          },
          clearProps: 'transform,opacity'
        });
      }
    });

    // 2. Purpose & Aspiration Cards (About Page We Deliver Card Style)
    const aboutDeliverCards = document.querySelectorAll('.about-deliver-card');
    if (aboutDeliverCards.length) {
      const triggerEl = document.getElementById('mission-section') || aboutDeliverCards[0];
      const rect = triggerEl.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        gsap.from(aboutDeliverCards, {
          opacity: 0,
          y: 35,
          scale: 0.97,
          duration: 0.75,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: triggerEl,
            start: 'top 82%',
            toggleActions: 'play none none none',
            once: true
          },
          clearProps: 'transform,scale,opacity'
        });
      }
    }

    // 3. Core Values Grid Tiles (About Page)
    const valueTiles = document.querySelectorAll('#values-section .value-tile');
    if (valueTiles.length) {
      const gridEl = document.querySelector('#values-section .grid') || valueTiles[0];
      const rect = gridEl.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        gsap.from(valueTiles, {
          opacity: 0,
          y: 28,
          duration: 0.6,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridEl,
            start: 'top 86%',
            toggleActions: 'play none none none',
            once: true
          },
          clearProps: 'transform,scale,opacity'
        });
      }
    }

    // 4. Operating Model / How We Do It Process Cards (About Page)
    const processCards = document.querySelectorAll('#process-section .process-card');
    if (processCards.length) {
      const gridEl = document.querySelector('#process-section .process-cards-grid') || processCards[0];
      const rect = gridEl.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        gsap.from(processCards, {
          opacity: 0,
          y: 25,
          duration: 0.55,
          stagger: 0.06,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: gridEl,
            start: 'top 86%',
            toggleActions: 'play none none none',
            once: true
          },
          clearProps: 'transform,opacity'
        });
      }
    }

    // 5. Pre-footer CTA Section & Cards
    const revealTargets = document.querySelectorAll('.cta-card, .cta-section');
    revealTargets.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top >= window.innerHeight) {
        gsap.from(el, {
          opacity: 0,
          y: 28,
          duration: 0.75,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 88%',
            toggleActions: 'play none none none',
            once: true
          },
          clearProps: 'transform,opacity'
        });
      }
    });
  }

  /* ── FOOTER RESPONSIVE ACCORDION / WEBVIEW SHOW-ALL ──────────── */
  function initFooterResponsive() {
    const footerCols = document.querySelectorAll('footer details.footer-col, .site-footer details.footer-col');
    if (!footerCols.length) return;

    function updateFooterState() {
      if (window.innerWidth > 768) {
        // Desktop / webview: expand ALL columns
        footerCols.forEach(col => col.setAttribute('open', ''));
      } else {
        // Mobile view: collapse all columns by default
        footerCols.forEach(col => col.removeAttribute('open'));
      }
    }

    // Ensure state on initial load
    updateFooterState();

    // On resize, update state
    window.addEventListener('resize', updateFooterState, { passive: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFooterResponsive);
  } else {
    initFooterResponsive();
  }

  /* ── PAGE NAVIGATION: Native instant navigation with zero delay ── */
  function initPageTransitions() {
    try {
      sessionStorage.removeItem('arox-page-transition');
    } catch (e) {}
    document.documentElement.classList.remove('page-is-entering');
    const overlay = document.querySelector('.page-transition-overlay');
    if (overlay) {
      overlay.remove();
    }
  }

  initPageTransitions();
})();
