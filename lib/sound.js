// Lightweight Web Audio API sound synthesizer
// Generates ultra-crisp micro-interaction sounds without external audio assets.

class SoundManager {
  constructor() {
    this.ctx = null;
    this.muted = false;
    this.initialized = false;
  }

  init() {
    if (typeof window === "undefined" || this.initialized) return;
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
        this.initialized = true;
        const stored = localStorage.getItem("halveron_sound_muted");
        if (stored !== null) {
          this.muted = stored === "true";
        }
      }
    } catch {
      // AudioContext not supported or restricted
    }
  }

  setMuted(muted) {
    this.muted = muted;
    if (typeof window !== "undefined") {
      localStorage.setItem("halveron_sound_muted", String(muted));
    }
  }

  isMuted() {
    return this.muted;
  }

  resume() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Soft tactile click
  playClick() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(800, now);
      osc.frequency.exponentialRampToValueAtTime(300, now + 0.04);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.04);
    } catch {}
  }

  // Subtle hover chirp
  playHover() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "sine";
      osc.frequency.setValueAtTime(520, now);
      osc.frequency.exponentialRampToValueAtTime(680, now + 0.03);

      gain.gain.setValueAtTime(0.025, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.03);
    } catch {}
  }

  // Modal open whoosh / chime
  playOpen() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    try {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      const now = this.ctx.currentTime;

      osc.type = "triangle";
      osc.frequency.setValueAtTime(350, now);
      osc.frequency.exponentialRampToValueAtTime(880, now + 0.09);

      gain.gain.setValueAtTime(0.04, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.09);
    } catch {}
  }

  // Success / confirmation chord
  playSuccess() {
    if (this.muted) return;
    this.init();
    this.resume();
    if (!this.ctx) return;

    try {
      const freqs = [523.25, 659.25, 783.99]; // C5, E5, G5
      freqs.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const now = this.ctx.currentTime + idx * 0.04;

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        gain.gain.setValueAtTime(0.03, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.15);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.15);
      });
    } catch {}
  }
}

export const sound = new SoundManager();
