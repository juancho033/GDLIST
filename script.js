const listContainer = document.getElementById('listContainer');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

let demonsData = [];


function initBgIcons() {
    const container = document.createElement('div');
    container.id = 'bgIcons';
    document.body.prepend(container);

    const icons = [
        // Cube 1 — Default con cara
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="11" y="12" width="6" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.1"/><rect x="23" y="12" width="6" height="7" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.1"/><path d="M13 26 Q20 31 27 26" fill="none" stroke="currentColor" stroke-width="1.1" stroke-linecap="round"/></svg>`,
        // Cube 2 — Geométrico con rombo
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" stroke-width="1"/><rect x="14" y="14" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="0.8"/></svg>`,
        // Cube 3 — Con púas arriba y abajo
        `<svg viewBox="0 0 40 40"><rect x="2" y="10" width="36" height="20" rx="4" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M8 10 L10 4 L12 10 M18 10 L20 3 L22 10 M28 10 L30 4 L32 10 M8 30 L10 36 L12 30 M18 30 L20 37 L22 30 M28 30 L30 36 L32 30" fill="none" stroke="currentColor" stroke-width="1" stroke-linejoin="round"/><rect x="12" y="17" width="5" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1"/><rect x="23" y="17" width="5" height="6" rx="1" fill="none" stroke="currentColor" stroke-width="1"/></svg>`,
        // Cube 4 — Marco concéntrico
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="8" y="8" width="24" height="24" rx="3" fill="none" stroke="currentColor" stroke-width="1"/><rect x="14" y="14" width="12" height="12" rx="2" fill="none" stroke="currentColor" stroke-width="0.8"/><line x1="20" y1="14" x2="20" y2="26" stroke="currentColor" stroke-width="0.6"/><line x1="14" y1="20" x2="26" y2="20" stroke="currentColor" stroke-width="0.6"/></svg>`,
        // Cube 5 — Líneas diagonales
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="6" y1="6" x2="34" y2="34" stroke="currentColor" stroke-width="0.6"/><line x1="10" y1="6" x2="34" y2="30" stroke="currentColor" stroke-width="0.4"/><line x1="6" y1="10" x2="30" y2="34" stroke="currentColor" stroke-width="0.4"/><rect x="15" y="15" width="10" height="10" rx="2" fill="none" stroke="currentColor" stroke-width="1"/></svg>`,
        // Cube 6 — Puntos en esquinas
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><rect x="8" y="8" width="24" height="24" rx="2" fill="none" stroke="currentColor" stroke-width="1"/><rect x="4" y="4" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="33" y="4" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="4" y="33" width="3" height="3" rx="0.5" fill="currentColor"/><rect x="33" y="33" width="3" height="3" rx="0.5" fill="currentColor"/></svg>`,
        // Cube 7 — Zigzag en bordes
        `<svg viewBox="0 0 40 40"><path d="M2 6 L6 2 L12 6 L18 2 L24 6 L30 2 L36 6 L38 4 L38 36 L36 38 L30 34 L24 38 L18 34 L12 38 L6 34 L2 38 L2 4 Z" fill="none" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/><rect x="11" y="14" width="4" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1"/><rect x="25" y="14" width="4" height="5" rx="1" fill="none" stroke="currentColor" stroke-width="1"/><path d="M14 25 Q20 29 26 25" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round"/></svg>`,
        // Cube 8 — Triángulos en esquinas
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M2 2 L12 2 L2 12 Z M38 2 L28 2 L38 12 Z M2 38 L12 38 L2 28 Z M38 38 L28 38 L38 28 Z" fill="none" stroke="currentColor" stroke-width="0.8"/><rect x="10" y="10" width="20" height="20" rx="3" fill="none" stroke="currentColor" stroke-width="1"/></svg>`,
        // Cube 9 — Rejilla interna
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><line x1="8" y1="8" x2="32" y2="8" stroke="currentColor" stroke-width="0.6"/><line x1="8" y1="14" x2="32" y2="14" stroke="currentColor" stroke-width="0.4"/><line x1="8" y1="20" x2="32" y2="20" stroke="currentColor" stroke-width="0.4"/><line x1="8" y1="26" x2="32" y2="26" stroke="currentColor" stroke-width="0.4"/><line x1="8" y1="32" x2="32" y2="32" stroke="currentColor" stroke-width="0.6"/><line x1="8" y1="8" x2="8" y2="32" stroke="currentColor" stroke-width="0.6"/><line x1="14" y1="8" x2="14" y2="32" stroke="currentColor" stroke-width="0.4"/><line x1="20" y1="8" x2="20" y2="32" stroke="currentColor" stroke-width="0.4"/><line x1="26" y1="8" x2="26" y2="32" stroke="currentColor" stroke-width="0.4"/><line x1="32" y1="8" x2="32" y2="32" stroke="currentColor" stroke-width="0.6"/></svg>`,
        // Cube 10 — Minimalista con diamante
        `<svg viewBox="0 0 40 40"><rect x="2" y="2" width="36" height="36" rx="5" fill="none" stroke="currentColor" stroke-width="1.4"/><path d="M20 10 L30 20 L20 30 L10 20 Z" fill="none" stroke="currentColor" stroke-width="1"/><line x1="10" y1="10" x2="30" y2="30" stroke="currentColor" stroke-width="0.5"/><line x1="10" y1="30" x2="30" y2="10" stroke="currentColor" stroke-width="0.5"/></svg>`
    ];

    const items = [];
    const count = 48;
    for (let i = 0; i < count; i++) {
        const el = document.createElement('div');
        el.innerHTML = icons[i % icons.length];
        const size = 18 + Math.random() * 42;
        el.style.cssText = `
            position: absolute;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 250}%;
            width: ${size}px;
            opacity: ${0.03 + Math.random() * 0.07};
            color: #fff;
            transform: rotate(${Math.random() * 360}deg);
            will-change: transform;
        `;
        container.appendChild(el);
        items.push({ el, speed: 0.05 + Math.random() * 0.25, rot: Math.random() * 360 });
    }

    window.addEventListener('scroll', () => {
        const sy = window.scrollY;
        for (const item of items) {
            item.el.style.transform = `translateY(${sy * item.speed}px) rotate(${item.rot}deg)`;
        }
    }, { passive: true });
}

document.addEventListener('DOMContentLoaded', () => {
    initBgIcons();
    if (typeof DB_LEVELS !== 'undefined') {
        demonsData = DB_LEVELS;
        renderList(demonsData);
    } else {
        console.error("No se encontró el archivo DBLEVEL.js");
        document.getElementById('listContainer').innerHTML = "<p style='color:gray'>No hay niveles cargados. Ve al Dashboard para añadir el primero.</p>";
    }
});

function renderList(list) {
    const container = document.getElementById('listContainer');
    container.innerHTML = '';

    list.forEach((demon, index) => {
        const card = document.createElement('div');
        card.className = 'demon-card';
        card.style.animationDelay = `${index * 0.04}s`;
        card.innerHTML = `
            <div class="rank">#${index + 1}</div>
            <img class="thumbnail" src="${demon.thumb}" alt="thumb" loading="lazy">
            <div class="info">
                <h3>${demon.name}</h3>
                <p>Por: <b>${demon.author}</b> | Verificador: <b>${demon.verifier}</b></p>
            </div>
        `;
        card.onclick = () => openModal(demon, index + 1);
        container.appendChild(card);
    });
}

function openModal(demon, rank) {
    const modal = document.getElementById('modal');
    const videoId = extractID(demon.video);
    
    document.getElementById('videoContainer').innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
    `;
    
    document.getElementById('levelStats').innerHTML = `
        <h2 style="font-size: 2rem;">#${rank} - ${demon.name}</h2>
        <div class="stats-grid">
            <div class="stat-item"><span>Creador</span><b>${demon.author}</b></div>
            <div class="stat-item"><span>Verificador</span><b>${demon.verifier}</b></div>
            <div class="stat-item"><span>ID del Nivel</span><b class="copy-id" onclick="copyID('${demon.id}')">${demon.id}</b></div>
        </div>
    `;
    modal.style.display = 'block';
}

function copyID(id) {
    navigator.clipboard.writeText(id).catch(() => {});
    const toast = document.getElementById('toast');
    toast.textContent = 'ID copiado al portapapeles';
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
}

function extractID(url) {
    if (!url) return "placeholder";
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : "";
}

searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = demonsData.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.author.toLowerCase().includes(query)
    );
    renderList(filtered);
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.getElementById('videoContainer').innerHTML = "";
}

window.onclick = (e) => { if (e.target == modal) closeBtn.onclick(); }

