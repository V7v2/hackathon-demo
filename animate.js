/* =========================================================================
   FARMSPHERICA NEXUS ADVANCED UI MATRIX ANIMATION ENGINE (CORE V2.5)
========================================================================= */

document.addEventListener("DOMContentLoaded", () => {
    // 1. Dynamic Injection of Cyberpunk Matrix & CRT Scanline Styles
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
        @keyframes subtle-glitch {
            0% { text-shadow: 1px 0 #2ecc71, -1px 0 #00ff88; transform: translate(0.5px, 0); }
            50% { text-shadow: -1px 0 #2ecc71, 1px 0 #00ff88; transform: translate(-0.5px, 0); }
            100% { text-shadow: 1px 0 #1abc9c, -1px 0 #2ecc71; transform: translate(0, 0); }
        }
        @keyframes matrix-fade {
            0% { opacity: 0; transform: translateY(-10px); filter: brightness(2); }
            100% { opacity: 1; transform: translateY(0); filter: brightness(1); }
        }
        
        .brand-title:hover {
            animation: subtle-glitch 0.15s infinite;
            -webkit-text-fill-color: #e8f8f5;
        }
        
        .typing-caret {
            display: inline-block;
            margin-left: 4px;
            vertical-align: middle;
            animation: blink 0.8s step-end infinite;
            color: #2ecc71;
            font-weight: bold;
        }

        .slide-up {
            animation: matrix-fade 0.3s cubic-bezier(0.1, 1, 0.1, 1) forwards;
        }

        /* Structured formatting rules within terminal streaming blocks */
        .terminal-header {
            color: #58d68d;
            font-size: 1.15rem;
            margin-top: 15px;
            margin-bottom: 8px;
            border-bottom: 1px dashed rgba(46,204,113,0.3);
            padding-bottom: 4px;
            font-weight: bold;
        }
        .terminal-bold {
            color: #fff;
            text-shadow: 0 0 4px rgba(255,255,255,0.4);
            font-weight: bold;
        }
        .terminal-bullet {
            padding-left: 15px;
            margin-vertical: 4px;
            color: rgba(46, 204, 113, 0.95);
            display: block;
        }
    `;
    document.head.appendChild(style);

    // 2. Immersive Boot Sequence Overlay Setup
    const bootOverlay = document.createElement("div");
    bootOverlay.id = "bootOverlay";
    Object.assign(bootOverlay.style, {
        position: "fixed", top: "0", left: "0", width: "100vw", height: "100vh",
        backgroundColor: "#050f0b", color: "#2ecc71", zIndex: "99999",
        display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center",
        fontFamily: "'Courier New', Courier, monospace", transition: "opacity 0.4s cubic-bezier(0.1, 1, 0.1, 1), transform 0.4s cubic-bezier(0.1, 1, 0.1, 1)",
        padding: "40px", boxSizing: "border-box"
    });

    const bootContent = document.createElement("div");
    bootContent.style.maxWidth = "700px";
    bootContent.style.width = "100%";
    
    const bootText = document.createElement("div");
    bootText.style.marginBottom = "35px";
    bootText.style.fontSize = "22px";
    bootText.style.letterSpacing = "1px";
    bootText.style.fontWeight = "bold";
    bootText.innerHTML = `INITIALIZING NEXUS_CORE_MATRIX V2.5... <span class="typing-caret">█</span>`;
    bootContent.appendChild(bootText);

    const createStatusBar = (label) => {
        const container = document.createElement("div");
        container.style.marginBottom = "20px";
        
        const labelDiv = document.createElement("div");
        labelDiv.style.color = "#abebc6";
        labelDiv.style.fontSize = "11px";
        labelDiv.style.letterSpacing = "2px";
        labelDiv.style.marginBottom = "6px";
        labelDiv.innerText = label;
        
        const track = document.createElement("div");
        Object.assign(track.style, {
            width: "100%", height: "8px", backgroundColor: "rgba(46,204,113,0.08)", 
            borderRadius: "1px", overflow: "hidden", border: "1px solid rgba(46,204,113,0.15)"
        });

        const bar = document.createElement("div");
        Object.assign(bar.style, {
            width: "0%", height: "100%", backgroundColor: "#2ecc71", 
            boxShadow: "0 0 12px rgba(46,204,113,0.6)", transition: "width 2.2s cubic-bezier(0.075, 0.82, 0.165, 1)"
        });

        track.appendChild(bar);
        container.appendChild(labelDiv);
        container.appendChild(track);
        bootContent.appendChild(container);
        return bar;
    };

    const cropHealthBar = createStatusBar("BIOMETRIC PROTOCOL ACCELERATION");
    const telemetryBar = createStatusBar("QUANTUM TELEMETRY COUPLING ARRAY");
    const encryptionBar = createStatusBar("AES-256 MATRIX SYMMETRIC CIPHER LINK");

    const logContainer = document.createElement("div");
    logContainer.style.marginTop = "25px";
    logContainer.style.fontSize = "12px";
    logContainer.style.color = "rgba(46, 204, 113, 0.75)";
    logContainer.style.height = "140px";
    logContainer.style.overflow = "hidden";
    logContainer.style.borderTop = "1px dashed rgba(46,204,113,0.2)";
    logContainer.style.paddingTop = "15px";
    bootContent.appendChild(logContainer);

    bootOverlay.appendChild(bootContent);
    document.body.appendChild(bootOverlay);

    // Fire bar expansion
    setTimeout(() => {
        cropHealthBar.style.width = "97.4%";
        telemetryBar.style.width = "100%";
        encryptionBar.style.width = "100%";
    }, 150);

    const logs = [
        ">> SEEDING TELEMETRY BUS PIPES...",
        ">> VECTOR GRID ONLINE. NODE AGGREGATOR RUNNING.",
        ">> TUNING SPECTRAL LEAF-DENSITY SENSORS...",
        ">> CRITICAL WARNING: SECTOR 4 DISCOVERED MINOR NITROGEN DEFICIT.",
        ">> INJECTING SUPPLEMENTARY PROTOCOLS TO RE-BALANCE RATIOS...",
        ">> AUTHENTICATED ENCRYPTED NODE HANDSHAKE COMPLETION...",
        ">> OVERRIDE SEQUENCE CLEARED. WELCOME BACK OPERATOR."
    ];

    let logIndex = 0;
    const logInterval = setInterval(() => {
        if (logIndex < logs.length) {
            const logLine = document.createElement("div");
            logLine.innerText = logs[logIndex];
            logLine.className = "slide-up";
            logLine.style.marginBottom = "5px";
            if (logs[logIndex].includes("WARNING")) logLine.style.color = "#f1c40f";
            logContainer.appendChild(logLine);
            logContainer.scrollTop = logContainer.scrollHeight;
            logIndex++;
        } else {
            clearInterval(logInterval);
            setTimeout(() => {
                bootText.innerHTML = "SYSTEM OPERATIONAL. TERMINAL READY.";
                setTimeout(() => {
                    bootOverlay.style.opacity = "0";
                    bootOverlay.style.transform = "translateY(-30px) scale(0.98)";
                    setTimeout(() => {
                        bootOverlay.remove();
                        initDataPulse(); 
                    }, 400);
                }, 500);
            }, 600);
        }
    }, 350);
});

/* =========================================================================
   LIVE SENSOR HUD TELEMETRY DATA PULSE
========================================================================= */
let pulseInterval;
function initDataPulse() {
    const pulseElements = document.querySelectorAll('.pulse-data');
    if (pulseElements.length === 0) return;

    pulseInterval = setInterval(() => {
        pulseElements.forEach(el => {
            if (Math.random() > 0.45) return;

            let text = el.innerText;
            if (text.includes('%')) {
                let num = parseFloat(text);
                if (!isNaN(num)) {
                    let flutter = (Math.random() * 0.6) - 0.3;
                    let newVal = Math.max(0, num + flutter).toFixed(1);
                    if (!text.includes('.')) newVal = Math.round(newVal);
                    el.innerText = `${newVal}%`;
                }
            } else {
                let num = parseInt(text);
                if (!isNaN(num)) {
                    let flutter = Math.floor(Math.random() * 5) - 2; // -2 to +2
                    el.innerText = Math.max(0, num + flutter);
                }
            }

            const originalColor = el.style.color || '#2ecc71';
            el.style.color = '#ffffff';
            el.style.textShadow = '0 0 8px #2ecc71';
            setTimeout(() => {
                el.style.color = originalColor;
                el.style.textShadow = 'none';
            }, 120);
        });
    }, 2000);
}

/* =========================================================================
   WEB AUDIO ENGINE (GLITCH AUDIO MATRIX EFFECTS)
========================================================================= */
let audioCtx;
let audioEnabled = true;

function initAudio() {
    if (!audioCtx) {
        audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
        audioCtx.resume();
    }
}

function toggleAudio() {
    audioEnabled = !audioEnabled;
    const btn = document.getElementById('hudAudioToggle');
    if (btn) {
        if (audioEnabled) {
            btn.textContent = "HUD AUDIO: ON";
            btn.classList.remove('audio-off');
            initAudio();
            playSystemAlertFreq(1200, 0.05, 0.1); // Success ping
        } else {
            btn.textContent = "HUD AUDIO: OFF";
            btn.classList.add('audio-off');
        }
    }
}

function playTypewriterBlip() {
    if (!audioEnabled) return;
    initAudio();
    const osc = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    osc.type = Math.random() > 0.85 ? 'triangle' : 'sine';
    // Add micro jitter frequency mapping to emulate real terminal mechanics
    osc.frequency.setValueAtTime(650 + Math.random() * 350, audioCtx.currentTime);
    
    gainNode.gain.setValueAtTime(0.012, audioCtx.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.015);

    osc.connect(gainNode);
    gainNode.connect(audioCtx.destination);

    osc.start();
    osc.stop(audioCtx.currentTime + 0.015);
}

function playSystemAlertFreq(freq, volume, duration) {
    if (!audioEnabled) return;
    initAudio();
    try {
        const osc = audioCtx.createOscillator();
        const gainNode = audioCtx.createGain();
        osc.type = 'square';
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(volume, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);
        osc.connect(gainNode);
        gainNode.connect(audioCtx.destination);
        osc.start();
        osc.stop(audioCtx.currentTime + duration);
    } catch(e) { console.log("Audio collision blocked."); }
}

/* =========================================================================
   REAL-TIME CONTEXTUAL MARKDOWN RE-RENDER STREAM LOOP
========================================================================= */
function animateTypewriter(textElement, caretElement, textContent, onComplete) {
    let i = 0;
    let timeoutId;
    let isSkipped = false;
    
    // Clear targeting element's static content
    textElement.innerHTML = "";

    if (caretElement) {
        caretElement.textContent = "█";
        caretElement.className = "typing-caret";
        caretElement.style.display = "inline-block";
    }

    // Dynamic buffer node architecture to parse styles mid-execution
    let currentContainer = textElement;

    function typeChar() {
        if (isSkipped) return;

        if (i < textContent.length) {
            // Check for Markdown Header patterns dynamically: "### Heading"
            if (textContent.substr(i, 4) === "### ") {
                const headerNode = document.createElement("div");
                headerNode.className = "terminal-header";
                textElement.appendChild(headerNode);
                currentContainer = headerNode;
                i += 4; 
                if (audioEnabled) playSystemAlertFreq(440, 0.01, 0.05);
            }
            // Check for Bold Text blocks: "**bold text**"
            else if (textContent.substr(i, 2) === "**") {
                if (currentContainer.className === "terminal-bold") {
                    // Revert target fallback to parent layout
                    currentContainer = textElement;
                } else {
                    const boldNode = document.createElement("span");
                    boldNode.className = "terminal-bold";
                    textElement.appendChild(boldNode);
                    currentContainer = boldNode;
                }
                i += 2;
            }
            // Check for explicit list structures: "* List item"
            else if (textContent.substr(i, 2) === "* " && (i === 0 || textContent.charAt(i - 1) === "\n" || textContent.charAt(i - 1) === "\r")) {
                const bulletNode = document.createElement("span");
                bulletNode.className = "terminal-bullet";
                bulletNode.innerHTML = "&#10145; &nbsp;"; // Futuristic block arrow replacing flat asterisk
                textElement.appendChild(bulletNode);
                currentContainer = bulletNode;
                i += 2;
            }
            // Handle native line breaks safely inside the node stack
            else if (textContent.charAt(i) === "\n") {
                textElement.appendChild(document.createElement("br"));
                currentContainer = textElement; // Reset scopes back to root layer
                i++;
            }
            // Append general text block byte data
            else {
                currentContainer.innerHTML += textContent.charAt(i);
                i++;
            }
            
            // Audio blip triggered selectively to prevent ear-fatigue
            if (i % 2 === 0) playTypewriterBlip();
            
            const chatFeed = document.getElementById('chatFeed') || textElement.closest('.chat-history') || textElement.parentElement;
            if (chatFeed) chatFeed.scrollTop = chatFeed.scrollHeight;
            
            // Read settings dynamically configured from settings configuration models 
            const baseSpeed = (window.settings && window.settings.animationSpeed) ? parseInt(window.settings.animationSpeed) : 12;
            const delay = Math.random() * 4 + baseSpeed; // Smooth typing behavior with stochastic jitter
            
            timeoutId = setTimeout(typeChar, delay);
        } else {
            finish();
        }
    }
    
    function finish() {
        if (caretElement) caretElement.style.display = 'none';
        
        // Strip temporary rendering artifacts, cleanly applying final formatting engine map
        // This acts as a fallback execution safeguard
        let cleanHTML = textElement.innerHTML;
        // Global cleanup maps for any leftover markers
        cleanHTML = cleanHTML.replace(/\*\*/g, "");
        textElement.innerHTML = cleanHTML;

        if (onComplete) onComplete();
    }

    // Initialize stream processing loop
    typeChar();

    return {
        skip: () => {
            if (isSkipped || i >= textContent.length) return;
            isSkipped = true;
            clearTimeout(timeoutId);
            
            // Generate clean parsed HTML instantly on user skip input
            let completeContent = textContent
                .replace(/### (.*?)\n/g, '<div class="terminal-header">$1</div>')
                .replace(/\*\*(.*?)\*\*/g, '<span class="terminal-bold">$1</span>')
                .replace(/^\* (.*?)$/gm, '<span class="terminal-bullet">&#10145; &nbsp;$1</span>')
                .replace(/\n/g, '<br>');

            textElement.innerHTML = completeContent;
            
            const chatFeed = document.getElementById('chatFeed') || textElement.closest('.chat-history') || textElement.parentElement;
            if (chatFeed) chatFeed.scrollTop = chatFeed.scrollHeight;
            
            finish();
        }
    };
}

// 4. Expose unified system bindings across global context arrays
window.animateTypewriter = animateTypewriter;
window.toggleAudio = toggleAudio;
window.playSystemAlertFreq = playSystemAlertFreq;
/* =========================================================================
   FARMSPHERICA QUANTUM PARTICLE MATRIX ENGINE (GEMINI CANVAS CLASSICS)
========================================================================= */
(() => {
    const canvas = document.getElementById('nexusParticleMatrix');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouse = { x: null, y: null, radius: 140 };

    // Automatically scale matrix canvas mapping to browser size
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }
    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Track mouse coordinates over the viewport to handle reactive repulsion waves
    window.addEventListener('mousemove', (e) => {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
    });

    window.addEventListener('mouseleave', () => {
        mouse.x = null;
        mouse.y = null;
    });

    class BioParticle {
        constructor() {
            this.reset();
            // Stagger instantiation positions across full display bounds
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 1.8 + 0.5; // Tiny, crisp telemetry dots
            this.baseX = this.x;
            this.baseY = this.y;
            this.density = (Math.random() * 30) + 10;
            // Velocity vectors for ambient floating flow patterns
            this.vx = (Math.random() * 0.4) - 0.2;
            this.vy = (Math.random() * 0.3) - 0.15;
            this.alpha = Math.random() * 0.5 + 0.15;
        }

        update() {
            // Check proximity equations relative to terminal mouse paths
            if (mouse.x != null && mouse.y != null) {
                let dx = mouse.x - this.x;
                let dy = mouse.y - this.y;
                let distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < mouse.radius) {
                    let force = (mouse.radius - distance) / mouse.radius;
                    let directionX = (dx / distance) * force * this.density * -0.6;
                    let directionY = (dy / distance) * force * this.density * -0.6;
                    
                    this.x += directionX;
                    this.y += directionY;
                }
            }

            // Continuously apply ambient baseline vectors
            this.x += this.vx;
            this.y += this.vy;

            // Recycle particles passing out of terminal screens safely
            if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) {
                this.reset();
                if (Math.random() > 0.5) this.x = 0; else this.y = 0;
            }
        }

        draw() {
            ctx.fillStyle = `rgba(46, 204, 113, ${this.alpha})`; // Agricultural Bio-Green glow
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fill();
        }
    }

    // Allocate structural particle arrays based on processing targets
    const totalParticles = 120;
    for (let i = 0; i < totalParticles; i++) {
        particles.push(new BioParticle());
    }

    // High performance frame loop rendering cycle
    function renderLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Ambient system dark tint matrix backdrop layer
        ctx.fillStyle = "rgba(4, 13, 8, 0.94)";
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particles.length; i++) {
            particles[i].update();
            particles[i].draw();
        }
        requestAnimationFrame(renderLoop);
    }
    
    // Fire up particle generation stream loops
    renderLoop();
})();