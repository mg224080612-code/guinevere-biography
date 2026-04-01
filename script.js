window.addEventListener('scroll', () => {
    const scroll = document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (scroll / height) * 100;
    document.getElementById('scroll-progress-left').style.height = scrolled + '%';
    document.getElementById('scroll-progress-right').style.height = scrolled + '%';
});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));

const cursor = document.getElementById('custom-cursor');
document.addEventListener('mousemove', e => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('img, a, .mermaid, blockquote, .lightbox-close').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
});

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

// 💡 사진 확대 (Lightbox) 기능
const lightbox = document.getElementById('lightbox-modal');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');
const galleryImages = document.querySelectorAll('.image-content img');

galleryImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('show');
        lightboxImg.src = img.src;
        
        const caption = img.nextElementSibling;
        if (caption && caption.classList.contains('image-caption')) {
            lightboxCaption.innerText = caption.innerText;
        } else {
            lightboxCaption.innerText = '';
        }
    });
});

lightbox.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('show');
    }
});