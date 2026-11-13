import confetti from 'canvas-confetti';

export const triggerEnquiryConfetti = () => {
  try {
    const end = Date.now() + 1.2 * 1000;
    const colors = ['#3B82F6', '#8B5CF6', '#06B6D4', '#F59E0B'];

    (function frame() {
      confetti({
        particleCount: 3,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: colors
      });
      confetti({
        particleCount: 3,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: colors
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    })();
  } catch (err) {
    console.warn('Confetti effect skipped:', err);
  }
};

