/**
 * AROX TECH - Professional Interactive Hero Component
 * Features:
 * 1. 60 FPS Particle Constellation Canvas with reactive mouse gravitational pull.
 * 2. 3D Perspective Tilt Card with organic spring lerping.
 * 3. Dynamic Interactive Telemetry HUD Mode Switcher (Cloud / AI / Full-Stack).
 * 4. Real-time diagnostic ping simulation.
 * 5. Automatic battery/CPU optimization via IntersectionObserver.
 */

(function () {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. HUD MODE SWITCHING & DIAGNOSTICS
  // -------------------------------------------------------------------------
  const HUD_VIEWS = {
    cloud: 'hud-view-cloud',
    ai: 'hud-view-ai',
    fullstack: 'hud-view-fullstack'
  };

  window.switchHudMode = function (mode) {
    const tabs = document.querySelectorAll('.hud-tab');
    tabs.forEach((tab) => {
      const isTarget = tab.id === `hud-tab-${mode}`;
      tab.classList.toggle('active', isTarget);
    });

    Object.keys(HUD_VIEWS).forEach((key) => {
      const el = document.getElementById(HUD_VIEWS[key]);
      if (el) {
        if (key === mode) {
          el.classList.remove('hidden');
          el.style.display = 'block';
          el.style.opacity = '0';
          el.style.transform = 'translateY(6px)';
          requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.25s cubic-bezier(0.16, 1, 0.3, 1), transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)';
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
          });
        } else {
          el.classList.add('hidden');
          el.style.display = 'none';
        }
      }
    });

    const statusText = document.getElementById('hud-status-text');
    if (statusText) {
      statusText.textContent = `Mode switched to ${mode.toUpperCase()} telemetry`;
    }
  };

  window.runHudDiagnostics = function () {
    const btn = document.getElementById('btn-hud-diagnostics');
    const statusText = document.getElementById('hud-status-text');
    const throughputEl = document.getElementById('hud-metric-throughput');

    if (!btn || !statusText) return;

    btn.disabled = true;
    btn.style.opacity = '0.7';
    statusText.textContent = 'Pinging distributed nodes...';

    let count = 0;
    const interval = setInterval(() => {
      count++;
      if (throughputEl) {
        const randRps = 148000 + Math.floor(Math.random() * 4500);
        throughputEl.textContent = `${randRps.toLocaleString()} rps`;
      }
      if (count > 4) {
        clearInterval(interval);
        btn.disabled = false;
        btn.style.opacity = '1';
        const pingTime = (5.2 + Math.random() * 2.4).toFixed(1);
        statusText.innerHTML = `<span class="text-emerald-400 font-bold">✓ P99: ${pingTime}ms</span> | 0 packet loss`;
      }
    }, 150);
  };

  // -------------------------------------------------------------------------
  // 2. 3D PERSPECTIVE TILT CARD (Spring Lerp)
  // -------------------------------------------------------------------------
  function initTiltCard() {
    const card = document.getElementById('hero-tilt-card');
    const hero = document.getElementById('hero');
    if (!card || !hero) return;

    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;
    let isHovering = false;
    let rafId = null;

    function onMouseMove(e) {
      const rect = card.getBoundingClientRect();
      const cardCenterX = rect.left + rect.width / 2;
      const cardCenterY = rect.top + rect.height / 2;

      // Distance from mouse to card center
      const deltaX = (e.clientX - cardCenterX) / (window.innerWidth * 0.4);
      const deltaY = (e.clientY - cardCenterY) / (window.innerHeight * 0.4);

      // Clamp max tilt angles between -12 and 12 degrees
      targetRotY = Math.max(-12, Math.min(12, deltaX * 14));
      targetRotX = Math.max(-12, Math.min(12, -deltaY * 14));
      isHovering = true;
    }

    function onMouseLeave() {
      targetRotX = 0;
      targetRotY = 0;
      isHovering = false;
    }

    function updateTilt() {
      // Lerp smoothing
      const ease = 0.08;
      currentRotX += (targetRotX - currentRotX) * ease;
      currentRotY += (targetRotY - currentRotY) * ease;

      card.style.transform = `perspective(1000px) rotateX(${currentRotX.toFixed(2)}deg) rotateY(${currentRotY.toFixed(2)}deg)`;

      if (isHovering || Math.abs(currentRotX) > 0.05 || Math.abs(currentRotY) > 0.05) {
        rafId = requestAnimationFrame(updateTilt);
      } else {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
        rafId = null;
      }
    }

    hero.addEventListener('mousemove', (e) => {
      onMouseMove(e);
      if (!rafId) rafId = requestAnimationFrame(updateTilt);
    });

    hero.addEventListener('mouseleave', () => {
      onMouseLeave();
      if (!rafId) rafId = requestAnimationFrame(updateTilt);
    });
  }

  // -------------------------------------------------------------------------
  // 3. INTERACTIVE PARTICLE CONSTELLATION CANVAS
  // -------------------------------------------------------------------------
  function initInteractiveCanvas() {
    const canvas = document.getElementById('hero-interactive-canvas');
    const hero = document.getElementById('hero');
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = hero.offsetWidth);
    let height = (canvas.height = hero.offsetHeight);

    let mouse = { x: -1000, y: -1000, active: false };
    let particles = [];
    const NUM_PARTICLES = Math.min(50, Math.floor(width / 24));
    const CONNECT_DIST = 110;
    const MOUSE_RADIUS = 150;
    let isVisible = true;
    let animFrame = null;

    class Particle {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.vx = (Math.random() - 0.5) * 0.55;
        this.vy = (Math.random() - 0.5) * 0.55;
        this.radius = 1.2 + Math.random() * 1.5;
        this.baseAlpha = 0.25 + Math.random() * 0.45;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce on borders
        if (this.x < 0 || this.x > width) this.vx *= -1;
        if (this.y < 0 || this.y > height) this.vy *= -1;

        // Mouse gravitational attraction
        if (mouse.active) {
          const dx = mouse.x - this.x;
          const dy = mouse.y - this.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS && dist > 1) {
            const force = (1 - dist / MOUSE_RADIUS) * 0.035;
            this.x += (dx / dist) * force * 10;
            this.y += (dy / dist) * force * 10;
          }
        }
      }

      draw(isLight) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = isLight
          ? `rgba(2, 132, 199, ${this.baseAlpha})`
          : `rgba(56, 189, 248, ${this.baseAlpha})`;
        ctx.fill();
      }
    }

    function initParticles() {
      particles = [];
      for (let i = 0; i < NUM_PARTICLES; i++) {
        particles.push(new Particle());
      }
    }

    function onResize() {
      width = canvas.width = hero.offsetWidth;
      height = canvas.height = hero.offsetHeight;
      initParticles();
    }

    window.addEventListener('resize', onResize);

    hero.addEventListener('mousemove', (e) => {
      const rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
      mouse.active = true;
    });

    hero.addEventListener('mouseleave', () => {
      mouse.active = false;
      mouse.x = -1000;
      mouse.y = -1000;
    });

    function loop() {
      if (!isVisible) return;

      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains('theme-light');

      // Update and draw particles
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw(isLight);

        // Draw connections between neighboring particles
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < CONNECT_DIST) {
            const alpha = (1 - dist / CONNECT_DIST) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = isLight
              ? `rgba(2, 132, 199, ${alpha})`
              : `rgba(99, 102, 241, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        // Draw connection to mouse if nearby
        if (mouse.active) {
          const dx = particles[i].x - mouse.x;
          const dy = particles[i].y - mouse.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MOUSE_RADIUS) {
            const alpha = (1 - dist / MOUSE_RADIUS) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(56, 189, 248, ${alpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animFrame = requestAnimationFrame(loop);
    }

    // Battery / CPU Saver: pause when scrolled out of view
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          isVisible = entry.isIntersecting;
          if (isVisible && !animFrame) {
            loop();
          } else if (!isVisible && animFrame) {
            cancelAnimationFrame(animFrame);
            animFrame = null;
          }
        });
      },
      { threshold: 0.05 }
    );

    observer.observe(hero);

    initParticles();
    loop();
  }

  // Initialize on DOM load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initTiltCard();
      initInteractiveCanvas();
    });
  } else {
    initTiltCard();
    initInteractiveCanvas();
  }
})();
