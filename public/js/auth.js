/**
 * AROX AUTH - ALWAYS-VISIBLE REAL-TIME EYE TRACKING SYSTEM
 * Tracks mouse movement and animates glowing neon capsule eyes continuously
 */

(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    initEyeTracking();
    initPasswordEyeClosing();
    initPasswordToggles();
    initAuthForms();
    initSocialAuth();
    initPasteHandling();
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
        const eyeEl = state.element;
        const isClosed = eyeEl.classList.contains('is-closed');
        const isPeeking = eyeEl.classList.contains('is-peeking');

        // When eyes are closed while entering password
        if (isClosed) {
          state.curX += (0 - state.curX) * 0.22;
          state.curY += (2 - state.curY) * 0.22;
          if (state.pupil) {
            state.pupil.style.opacity = '1';
            if (eyeEl.classList.contains('eye-flutter')) {
              state.pupil.style.transform = `translate(${state.curX.toFixed(2)}px, ${state.curY.toFixed(2)}px) scale(1.22, 0.45)`;
            } else {
              state.pupil.style.transform = `translate(${state.curX.toFixed(2)}px, ${state.curY.toFixed(2)}px) scale(1.4, 0.12)`;
            }
          }
          // The outer eye stays open, subtly level
          eyeEl.style.transform = 'perspective(400px) rotateY(0deg) rotateX(2deg)';
          return;
        }

        // When eyes are peeking (password visibility unmasked)
        if (isPeeking) {
          const rect = eyeEl.getBoundingClientRect();
          const cardEl = document.querySelector('.auth-card');
          const cardRect = cardEl ? cardEl.getBoundingClientRect() : rect;
          const targetX = (cardRect.left + cardRect.width / 2 > rect.left) ? 6 : -6;
          state.curX += (targetX - state.curX) * 0.2;
          state.curY += (1 - state.curY) * 0.2;
          if (state.pupil) {
            state.pupil.style.opacity = '1';
            state.pupil.style.transform = `translate(${state.curX.toFixed(2)}px, ${state.curY.toFixed(2)}px) scale(1.1, 0.65)`;
          }
          eyeEl.style.transform = 'perspective(400px) rotateY(0deg) rotateX(0deg)';
          return;
        }

        // Normal tracking when open
        if (state.pupil) {
          state.pupil.style.opacity = '1';
        }

        const rect = eyeEl.getBoundingClientRect();
        const eyeCenterX = rect.left + rect.width / 2;
        const eyeCenterY = rect.top + rect.height / 2;

        const dx = mouse.x - eyeCenterX;
        const dy = mouse.y - eyeCenterY;
        const dist = Math.hypot(dx, dy);
        const angle = Math.atan2(dy, dx);

        // Capsule boundary calculations
        const pupilSize = state.pupil ? state.pupil.offsetWidth : 22;
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
          state.pupil.style.transform = `translate(${state.curX.toFixed(2)}px, ${state.curY.toFixed(2)}px) scale(1, 1)`;
        }

        // Subtle eye socket 3D tilt towards mouse
        const tiltY = (state.curX / maxRx) * 6;
        const tiltX = -(state.curY / maxRy) * 5;
        eyeEl.style.transform = `perspective(400px) rotateY(${tiltY.toFixed(2)}deg) rotateX(${tiltX.toFixed(2)}deg)`;
      });

      requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }

  /* ══════════════════════════════════════════════════════════════
     EYE CLOSING ANIMATION WHILE ENTERING PASSWORD INPUTS
     Applies to Sign In (#auth-password) and Sign Up (password & confirm-password)
  ══════════════════════════════════════════════════════════════ */
  function initPasswordEyeClosing() {
    const eyes = document.querySelectorAll('.auth-eye');
    if (!eyes.length) return;

    function closeEyes() {
      eyes.forEach((eye) => {
        eye.classList.remove('is-peeking');
        eye.classList.add('is-closed');
      });
    }

    function peekEyes() {
      eyes.forEach((eye) => {
        eye.classList.remove('is-closed');
        eye.classList.add('is-peeking');
      });
    }

    function openEyes() {
      eyes.forEach((eye) => {
        eye.classList.remove('is-closed', 'is-peeking', 'eye-flutter');
      });
    }

    function triggerFlutter() {
      eyes.forEach((eye) => {
        if (eye.classList.contains('is-closed')) {
          eye.classList.remove('eye-flutter');
          // Force layout reflow to replay CSS keyframe animation smoothly
          void eye.offsetWidth;
          eye.classList.add('eye-flutter');
          
          // Remove class after animation finishes (160ms)
          setTimeout(() => {
            eye.classList.remove('eye-flutter');
          }, 160);
        }
      });
    }

    // Select all password inputs across Sign In and Sign Up
    const passwordInputs = document.querySelectorAll(
      'input[type="password"], input[name*="password"], #auth-password, #signup-password, #signup-confirm-password'
    );

    passwordInputs.forEach((pwdInput) => {
      // When focused: close eyes (or peek if unmasked)
      pwdInput.addEventListener('focus', () => {
        if (pwdInput.type === 'text') {
          peekEyes();
        } else {
          closeEyes();
        }
      });

      // While typing / entering characters: keep eyes closed and do a responsive micro-flutter
      pwdInput.addEventListener('input', () => {
        if (pwdInput.type === 'text') {
          peekEyes();
        } else {
          closeEyes();
          triggerFlutter();
        }
      });

      pwdInput.addEventListener('keydown', (e) => {
        if (e.key !== 'Tab' && e.key !== 'Shift' && pwdInput.type !== 'text') {
          closeEyes();
          triggerFlutter();
        }
      });

      // While pasting into password field: keep closed and flutter
      pwdInput.addEventListener('paste', () => {
        if (pwdInput.type === 'text') {
          peekEyes();
        } else {
          closeEyes();
          triggerFlutter();
        }
      });

      // When blurred: check if focus shifted to another password input (e.g. from password to confirm-password)
      pwdInput.addEventListener('blur', () => {
        setTimeout(() => {
          const activeEl = document.activeElement;
          const isAnotherPwd = Array.from(passwordInputs).some((p) => p === activeEl);
          if (!isAnotherPwd) {
            openEyes();
          }
        }, 100);
      });
    });
  }

  function initPasswordToggles() {
    const toggleBtns = document.querySelectorAll('.auth-input-toggle');
    const eyes = document.querySelectorAll('.auth-eye');

    toggleBtns.forEach((btn) => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const wrapper = btn.closest('.auth-input-wrapper');
        const input = wrapper ? wrapper.querySelector('input') : null;
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
          // Password unmasked: eyes peek playfully
          eyes.forEach((eye) => {
            eye.classList.remove('is-closed');
            eye.classList.add('is-peeking');
          });
        } else {
          btn.innerHTML = `
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path>
              <line x1="1" y1="1" x2="23" y2="23"></line>
            </svg>
          `;
          // Password masked again: eyes close tightly if input is active or has text
          const passwordInputs = document.querySelectorAll('input[name*="password"], #auth-password, #signup-password, #signup-confirm-password');
          const isAnyFocused = Array.from(passwordInputs).some((p) => p === document.activeElement);
          if (isAnyFocused || input.value.length > 0) {
            eyes.forEach((eye) => {
              eye.classList.remove('is-peeking');
              eye.classList.add('is-closed');
            });
          } else {
            eyes.forEach((eye) => eye.classList.remove('is-closed', 'is-peeking'));
          }
        }
      });
    });
  }

  /* ══════════════════════════════════════════════════════════════
     PREVENT WHITE BACKGROUND ON PASTE & AUTOFILL
  ══════════════════════════════════════════════════════════════ */
  function initPasteHandling() {
    const inputs = document.querySelectorAll('.auth-input');
    inputs.forEach((input) => {
      input.addEventListener('paste', () => {
        // Clear any inline styles that could be added by third-party extensions on paste
        input.style.backgroundColor = '';
        input.style.color = '';
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
