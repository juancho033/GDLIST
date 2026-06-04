const ICON_SYMBOLS = ['✦', '◆', '◈', '◇', '▣', '■', '▦', '▩', '⧈', '⬡'];

(function initBgIcons() {
    const container = document.getElementById('bgIcons');
    if (!container) return;
    const isMobile = window.innerWidth < 768;
    const count = isMobile ? 16 : 32;
    const icons = [];
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'bg-icon';
        el.textContent = ICON_SYMBOLS[i % ICON_SYMBOLS.length];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (isMobile ? 10 + Math.random() * 16 : 14 + Math.random() * 22) + 'px';
        el.style.opacity = 0.02 + Math.random() * 0.04;
        el.style.transform = `rotate(${Math.random() * 360}deg)`;
        el.dataset.speed = 0.3 + Math.random() * 0.5;
        container.appendChild(el);
        icons.push(el);
    }
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const sy = window.scrollY;
                for (const el of icons) {
                    const speed = parseFloat(el.dataset.speed);
                    const offset = sy * speed * 0.05;
                    el.style.transform = `translateY(${offset}px)`;
                }
                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
})();

(function initCardLink() {
    const card = document.getElementById('heroCard');
    if (!card) return;
    card.addEventListener('click', () => {
        window.location.href = 'list.html';
    });
})();
