/* ==========================================
   FARMSPHERICA NEXUS - WEB AUDIO API ENGINE
   ========================================== */

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

function canPlayAudio() {
    try {
        const settings = JSON.parse(localStorage.getItem('nexusSettings')) || {};
        return settings.audioWarnings !== false;
    } catch (e) {
        return true;
    }
}

function playChirp() {
    if (!canPlayAudio()) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sine';
    osc.frequency.setValueAtTime(1200, audioCtx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(800, audioCtx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.1, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 0.05);
}

function playSuccess() {
    if (!canPlayAudio()) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();
    
    const playNote = (freq, startTime, duration) => {
        const osc = audioCtx.createOscillator();
        const gain = audioCtx.createGain();
        osc.type = 'triangle';
        osc.frequency.value = freq;
        
        gain.gain.setValueAtTime(0, startTime);
        gain.gain.linearRampToValueAtTime(0.15, startTime + 0.05);
        gain.gain.exponentialRampToValueAtTime(0.01, startTime + duration);
        
        osc.connect(gain);
        gain.connect(audioCtx.destination);
        osc.start(startTime);
        osc.stop(startTime + duration);
    };

    const now = audioCtx.currentTime;
    playNote(523.25, now, 0.2); // C5
    playNote(659.25, now + 0.1, 0.3); // E5
    playNote(783.99, now + 0.2, 0.4); // G5
}

function playGlitch() {
    if (!canPlayAudio()) return;
    if (audioCtx.state === 'suspended') audioCtx.resume();

    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(100, audioCtx.currentTime);
    osc.frequency.linearRampToValueAtTime(50, audioCtx.currentTime + 0.5);
    osc.frequency.linearRampToValueAtTime(200, audioCtx.currentTime + 1.0);
    
    gain.gain.setValueAtTime(0.2, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 1.5);
    
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    
    osc.start();
    osc.stop(audioCtx.currentTime + 1.5);
}

// Global click listener for interaction
document.addEventListener('DOMContentLoaded', () => {
    document.body.addEventListener('click', (e) => {
        if (e.target.closest('button') || e.target.closest('a') || e.target.closest('input[type="checkbox"]') || e.target.closest('input[type="radio"]')) {
            playChirp();
        }
    });
});
