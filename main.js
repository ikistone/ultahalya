// Efek confetti sederhana
const canvas = document.getElementById('confetti-canvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];
const colors = ['#ff5722', '#ff9800', '#ffc107', '#4caf50', '#2196f3', '#9c27b0'];

function createConfetti() {
    for (let i = 0; i < 100; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height - canvas.height,
            vx: (Math.random() - 0.5) * 4,
            vy: Math.random() * 3 + 2,
            color: colors[Math.floor(Math.random() * colors.length)],
            size: Math.random() * 5 + 5
        });
    }
}

function updateConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.1; // Gravitasi
        if (p.y > canvas.height) {
            p.y = 0;
            p.x = Math.random() * canvas.width;
        }
        ctx.fillStyle = p.color;
        ctx.fillRect(p.x, p.y, p.size, p.size);
    });
    requestAnimationFrame(updateConfetti);
}

function startConfetti() {
    createConfetti();
    updateConfetti();
}

// Auto-start confetti saat halaman load (opsional)
window.onload = () => {
    setTimeout(startConfetti, 1000); // Mulai confetti setelah 1 detik
};

