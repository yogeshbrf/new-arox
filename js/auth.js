/**
 * AROX AUTH - ALWAYS-VISIBLE REAL-TIME EYE TRACKING SYSTEM
 * Tracks mouse movement and animates glowing neon capsule eyes continuously
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initEyeTracking();
    initPasswordToggles();
    initAuthForms();
    initSocialAuth();
  });

  function initEyeTracking() {
    const eyes = document.querySelectorAll('.auth-eye');
    if (!eyes.length) return;

    // Initial eye gaze towards upper right as seen in reference image
    let mouse = {
      x: window.innerWidth * 0.75,
      y: window.innerHeight * 0.3
    };

    // Track mouse movement constantly across whole window
    window.addEventListener('mousemove', (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }, { passive: true });

    // Touch tracking for mobile
    window.addEventListener('touchmove', (e) => {
      if (e.touches && e.touches[0]) {
        mouse.x = e.touches[0].clientX;
        mouse.y = e.touches[0].clientY;
      }
    }, { passive: true });

    // Per-eye state for smooth animation
    const eyeStates = Array.from(eyes).map((eye) => {
      const pupil = eye.querySelector('.auth-pupil');
      return {
        element: eye,
        pupil: pupil,
        curX: 0,
        curY: 0,
        targetX: 0,
        targetY: 0
      };
    });

    // 60fps Render Loop - Eyes are ALWAYS visible and active
    function animate() {
      eyeStates.forEach((state) => {
        const rect = state.element.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = mouse.x - eyeCenterX;
        const dy = mouse.y - eyeCenterY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);

        // Capsule boundary calculations
        const pupilSize = state.pupil ? state.pupil.offsetWidth : 18;
        const maxRx = Math.max(10, (rect.width / 2) - (pupilSize / 2) - 8);
        const maxRy = Math.max(6, (rect.height / 2) - (pupilSize / 2) - 7);

        // Distance factor
        const distFactor = Math.min(1, Math.max(0.18, dist / 220));

        state.targetX = Math.cos(angle) * maxRx * distFactor;
        state.targetY = Math.sin(angle) * maxRy * distFactor;

        // Smooth easing (Lerp)
        state.curX += (state.targetX - state.curX) * 0.18;
        state.curY += (state.targetY - state.curY) * 0.18;

        if (state.pupil) {
          state.pupil.style.transform = `translate(${state.curX.toFixed(2)}px, ${state.curY.toFixed(2)}px)`;
        }

        // Subtle eye socket 3D tilt towards mouse
        const tiltY = (state.curX / maxRx) * 6;
        const tiltX = -(state.curY / maxRy) * 5;
        state.element.style.transform = `perspective(400px) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  function initPasswordToggles() {
    const toggleBtns = document.querySelectorAll('.auth-input-toggle');
    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const wrapper = btn.closest('.auth-input-wrapper');
        const input = wrapper.querySelector('input');
        if (!input) return;

        const isPassword = input.type === 'password';
        input.type = isPassword ? 'text' : 'password';

        if (isPassword) {
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>
          `;
        } else {
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          `;
        }
      });
    });
  }

  function initSocialAuth() {
    const googleBtns = document.querySelectorAll('#google-signin-btn, #google-signup-btn');
    const toast = document.getElementById('auth-toast');
    const toastMsg = document.getElementById('auth-toast-msg');

    function showToast(message) {
      if (!toast || !toastMsg) return;
      toastMsg.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, 3000);
    }

    googleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        showToast('Connecting with Google Account...');
        btn.style.opacity = '0.75';
        setTimeout(() => {
          showToast('Google authentication successful! Redirecting...');
          setTimeout(() => {
            window.location.href = 'index.html';
          }, 1000);
        }, 1200);
      });
    });
  }

  function initAuthForms() {
    const signinForm = document.getElementById('signin-form') || document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const toast = document.getElementById('auth-toast');
    const toastMsg = document.getElementById('auth-toast-msg');

    function showToast(message, duration = 3000) {
      if (!toast || !toastMsg) return;
      toastMsg.textContent = message;
      toast.classList.add('show');
      setTimeout(() => {
        toast.classList.remove('show');
      }, duration);
    }

    if (signinForm) {
      signinForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const usernameInput = signinForm.querySelector('#auth-username');
        const usernameVal = usernameInput ? usernameInput.value.trim() : 'User';

        showToast(`Welcome back, ${usernameVal || 'Pooja'}! Signing you in...`);
        const submitBtn = signinForm.querySelector('.auth-submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.85';
          submitBtn.textContent = 'Signing in...';
        }

        setTimeout(() => {
          window.location.href = 'index.html';
        }, 1200);
      });
    }

    if (signupForm) {
      signupForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameInput = signupForm.querySelector('#signup-name');
        const pwd = signupForm.querySelector('#signup-password');
        const confirmPwd = signupForm.querySelector('#signup-confirm-password');

        if (pwd && confirmPwd && pwd.value !== confirmPwd.value) {
          showToast('Passwords do not match. Please verify.');
          confirmPwd.focus();
          return;
        }

        const nameVal = nameInput ? nameInput.value.trim() : 'there';
        showToast(`Welcome, ${nameVal}! Your account has been created.`);
        const submitBtn = signupForm.querySelector('.auth-submit-btn');
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.style.opacity = '0.85';
          submitBtn.textContent = 'Signing up...';
        }

        setTimeout(() => {
          window.location.href = 'login.html';
        }, 1300);
      });
    }
  }
})();
