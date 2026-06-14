/* =========================================================================
   FARMSPHERICA NEXUS — ANIME.JS ADVANCED ANIMATION MATRIX ENGINE (V3.0)
   All four animation modules: Boot, Ambient, Hover Physics, Chat Injection
   Requires: anime.js (CDN-loaded before this file)
========================================================================= */

document.addEventListener('DOMContentLoaded', () => {
    // Guard: silently abort if anime.js failed to load
    if (typeof anime === 'undefined') {
        console.warn('[NEXUS-ANIM] anime.js not loaded — advanced animations suppressed.');
        return;
    }

    /* ===================================================================
       MODULE 1 — CINEMATIC SYSTEM BOOT SEQUENCE
       Executes once after the boot overlay from animate.js is dismissed.
    =================================================================== */
    function runBootSequence() {
        const sidebar = document.getElementById('sidebar');
        const header  = document.querySelector('.header');
        const chatFeed = document.getElementById('chatFeed');
        const canvas  = document.getElementById('nexusParticleMatrix');

        // ── PHASE 1: Grid Canvas Flash (CRT power-on flicker) ──────────────
        if (canvas) {
            anime({
                targets: canvas,
                opacity: [0, 1, 0.4, 1, 0.6, 1],
                duration: 600,
                easing: 'steps(6)',
                complete: runPhase2
            });
        } else {
            runPhase2();
        }

        // ── PHASE 2: Sidebar elastic slide-in ──────────────────────────────
        function runPhase2() {
            if (!sidebar) { runPhase3(); return; }
            sidebar.style.opacity = '0';
            sidebar.style.transform = 'translateX(-40px)';
            anime({
                targets: sidebar,
                opacity: [0, 1],
                translateX: [-40, 0],
                duration: 800,
                easing: 'easeOutElastic(1, 0.6)',
                complete: runPhase3
            });
        }

        // ── PHASE 3: Card Cascade (telemetry & chat blocks) ─────────────────
        function runPhase3() {
            const cards = document.querySelectorAll(
                '#chatFeed .message-row, .feature-card, .metric-block, .arch-layer-card'
            );
            anime({
                targets: cards,
                opacity: [0, 1],
                translateY: [20, 0],
                scale: [0.8, 1],
                duration: 600,
                delay: anime.stagger(60),
                easing: 'easeOutCubic',
                complete: runPhase4
            });
        }

        // ── PHASE 4: Header reveal + glow pulse ─────────────────────────────
        function runPhase4() {
            if (!header) return;
            header.style.opacity = '0';
            header.style.transform = 'translateY(-20px)';

            const tl = anime.timeline({ easing: 'easeOutCubic' });
            tl.add({
                targets: header,
                opacity: [0, 1],
                translateY: [-20, 0],
                duration: 500
            }).add({
                targets: header,
                boxShadow: [
                    '0 0 0px rgba(0, 255, 136, 0)',
                    '0 0 18px rgba(0, 255, 136, 0.4)',
                    '0 0 6px rgba(0, 255, 136, 0.1)'
                ],
                duration: 800,
                easing: 'easeInOutSine'
            });
        }
    }

    // Boot sequence fires after animate.js boot overlay finishes (~3.5s total)
    const bootDelay = 3600;
    setTimeout(runBootSequence, bootDelay);

    /* ===================================================================
       MODULE 2 — LIVING AMBIENT TEXT & GRID PULSES
    =================================================================== */

    // 2a. Breathing brightness cycle on key status labels
    function initAmbientTextPulse() {
        const nexusLabels = document.querySelectorAll(
            'strong[style*="color: var(--accent-blue)"], .hud-toggle'
        );
        if (nexusLabels.length > 0) {
            anime({
                targets: nexusLabels,
                opacity: [1, 0.55, 1],
                duration: 3000,
                direction: 'alternate',
                loop: true,
                delay: anime.stagger(400),
                easing: 'easeInOutSine'
            });
        }

        // 2b. Subtle text-shadow breathing on the brand title
        const brand = document.querySelector('.brand-title');
        if (brand) {
            anime({
                targets: brand,
                textShadow: [
                    '0 0 4px rgba(0,255,136,0.3)',
                    '0 0 14px rgba(0,255,136,0.8)',
                    '0 0 4px rgba(0,255,136,0.3)'
                ],
                duration: 4000,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });
        }

        // 2c. Slow diagonal grid drift on the particle canvas backdrop
        const body = document.body;
        anime({
            targets: body,
            backgroundPositionX: ['0px', '30px'],
            backgroundPositionY: ['0px', '30px'],
            duration: 20000,
            loop: true,
            direction: 'alternate',
            easing: 'linear'
        });
    }

    // Start ambient pulses after boot completes
    setTimeout(initAmbientTextPulse, bootDelay + 1000);

    /* ===================================================================
       MODULE 3 — LIQUID BUTTON & ACCENT HOVER EFFECTS (Spring Physics)
    =================================================================== */
    function attachHoverPhysics() {
        const hoverTargets = document.querySelectorAll(
            '.preset-btn, .hud-toggle, #sendBtn, .new-chat-btn'
        );

        hoverTargets.forEach(btn => {
            // Store baseline box-shadow for restore
            const baseBoxShadow = getComputedStyle(btn).boxShadow;

            btn.addEventListener('mouseenter', () => {
                anime({
                    targets: btn,
                    boxShadow: ['0 0 0px rgba(0,255,136,0)', '0 0 20px rgba(0,255,136,0.55)'],
                    borderRadius: ['4px', '8px'],
                    scale: 1.05,
                    duration: 280,
                    easing: 'easeOutCubic'
                });
            });

            btn.addEventListener('mouseleave', () => {
                anime({
                    targets: btn,
                    boxShadow: '0 0 0px rgba(0,255,136,0)',
                    borderRadius: '4px',
                    scale: 1,
                    duration: 600,
                    easing: 'easeOutElastic(1, 0.5)'
                });
            });
        });

        // Special treatment for the [EXPORT_LOGS] button
        const exportBtn = document.querySelector('[onclick="exportSessionLogs()"]');
        if (exportBtn) {
            exportBtn.addEventListener('mouseenter', () => {
                anime({
                    targets: exportBtn,
                    boxShadow: '0 0 25px rgba(0, 210, 255, 0.6)',
                    scale: 1.06,
                    duration: 260,
                    easing: 'easeOutCubic'
                });
            });
            exportBtn.addEventListener('mouseleave', () => {
                anime({
                    targets: exportBtn,
                    boxShadow: '0 0 0px rgba(0,210,255,0)',
                    scale: 1,
                    duration: 700,
                    easing: 'easeOutElastic(1, 0.5)'
                });
            });
        }
    }

    attachHoverPhysics();

    /* ===================================================================
       MODULE 4 — CHAT OUTPUT INJECTION SPLINE
       Exposed globally so appendAIMessage / appendUserMessage can call it.
    =================================================================== */
    window.animateNewChatRow = function(element) {
        if (typeof anime === 'undefined' || !element) return;
        // Set initial invisible state
        element.style.opacity = '0';
        element.style.transform = 'translateY(16px)';

        anime({
            targets: element,
            opacity: [0, 1],
            translateY: [16, 0],
            scale: [0.96, 1],
            duration: 380,
            easing: 'easeOutCubic'
        });
    };
});
