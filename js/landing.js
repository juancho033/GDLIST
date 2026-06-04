const ICON_SYMBOLS = ['✦', '◆', '◈', '◇', '▣', '■', '▦', '▩', '⧈', '⬡'];

(function initBgIcons() {
    const container = document.getElementById('bgIcons');
    if (!container) return;
    const count = 40;
    const icons = [];
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.className = 'bg-icon';
        el.textContent = ICON_SYMBOLS[i % ICON_SYMBOLS.length];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (14 + Math.random() * 24) + 'px';
        el.style.opacity = 0.02 + Math.random() * 0.05;
        el.style.transform = `rotate(${Math.random() * 360}deg)`;
        el.dataset.speed = 0.3 + Math.random() * 0.7;
        el.dataset.baseY = el.style.top;
        container.appendChild(el);
        icons.push(el);
    }
    let scrollY = 0;
    window.addEventListener('scroll', () => {
        scrollY = window.scrollY;
        for (const el of icons) {
            const speed = parseFloat(el.dataset.speed);
            const offset = scrollY * speed * 0.05;
            el.style.transform = `translateY(${offset}px) rotate(${parseFloat(el.style.transform.match(/rotate\(([^)]+)\)/)?.[1] || 0)}deg)`;
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
