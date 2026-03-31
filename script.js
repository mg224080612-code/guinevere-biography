// 1. Scroll Progress Bars (Left and Right)
window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById('scroll-progress-left').style.height = scrolled + '%';
    document.getElementById('scroll-progress-right').style.height = scrolled + '%';
});

// 2. Intersection Observer for Fade-in Animation
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

// 3. Custom Gold Cursor
const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('img, a, .mermaid, blockquote').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

// 4. Floating Gold Dust Generator
function createDust() {
    const dust = document.createElement('div');
    dust.className = 'gold-dust';
    dust.style.left = Math.random() * 100 + 'vw';
    dust.style.animationDuration = (Math.random() * 6 + 6) + 's';
    dust.style.animationDelay = Math.random() * 5 + 's';
    document.body.appendChild(dust);
    
    setTimeout(() => dust.remove(), 12000);
}

setInterval(createDust, 800);