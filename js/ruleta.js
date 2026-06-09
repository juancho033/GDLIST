const demons = typeof DB_LEVELS !== 'undefined' ? DB_LEVELS : [];

function getDefaultRequirement(pos) {
    if (pos <= 5) return '5%';
    if (pos <= 10) return '10%';
    if (pos <= 25) return '15%';
    if (pos <= 50) return '25%';
    return '40%';
}

function getSegments(min, max) {
    const list = [];
    for (let i = min; i <= max; i++) {
        const d = demons[i - 1];
        if (d) {
            list.push({
                name: d.name || 'Unknown',
                author: d.author || 'Unknown',
                position: i,
                thumb: d.thumb || '',
                video: d.video || '',
                id: d.id || '',
                showcase: d.showcase || '',
                requirement: d.requirement || getDefaultRequirement(i),
            });
        }
    }
    return list;
}

let state = {
    min: 1,
    max: 10,
    segments: [],
    animFrame: null,
    isSpinning: false,
};

const configPanel = document.getElementById('configPanel');
const slotSection = document.getElementById('slotSection');
const slotViewport = document.getElementById('slotViewport');
const slotTrack = document.getElementById('slotTrack');
const resultOverlay = document.getElementById('resultOverlay');
const rangeLabel = document.getElementById('rangeLabel');
const resultPosition = document.getElementById('resultPosition');
const resultName = document.getElementById('resultName');
const resultCreator = document.getElementById('resultCreator');
const showcaseFrame = document.getElementById('showcaseFrame');
const showcaseIframe = document.getElementById('showcaseIframe');
const resultNoVideo = document.getElementById('resultNoVideo');
const resultRequirement = document.getElementById('resultRequirement');
const resultLevelId = document.getElementById('resultLevelId');
const btnViewInfo = document.getElementById('btnViewInfo');
const toast = document.getElementById('toast');

const REPEATS = 5;

function imgHtml(src, alt) {
    if (!src) return '<div class="thumb-fallback">◆</div>';
    return `<img src="${src}" alt="${alt}" loading="lazy" onerror="this.onerror=null;this.parentElement.innerHTML='<div class=thumb-fallback>◆</div>'">`;
}

function buildTrack(segments) {
    slotTrack.innerHTML = '';
    const frag = document.createDocumentFragment();
    for (let r = 0; r < REPEATS; r++) {
        segments.forEach((seg, i) => {
            const card = document.createElement('div');
            card.className = 'slot-card';
            card.dataset.idx = i;
            card.innerHTML = `
                <div class="slot-card-thumb">${imgHtml(seg.thumb, seg.name)}</div>
                <div class="slot-card-info">
                    <div class="card-pos">#${seg.position}</div>
                    <div class="card-name">${seg.name}</div>
                    <div class="card-author">by ${seg.author}</div>
                </div>
            `;
            frag.appendChild(card);
        });
    }
    slotTrack.appendChild(frag);
}

function clearWinnerHighlight() {
    slotTrack.querySelectorAll('.slot-card-highlight').forEach(el => el.classList.remove('slot-card-highlight'));
}

function highlightWinner(winIdx) {
    clearWinnerHighlight();
    const targetRepeat = 3;
    const targetCard = slotTrack.querySelectorAll('.slot-card')[targetRepeat * state.segments.length + winIdx];
    if (targetCard) {
        targetCard.classList.add('slot-card-highlight');
        const shimmer = document.createElement('div');
        shimmer.className = 'slot-shimmer';
        targetCard.appendChild(shimmer);
        shimmer.addEventListener('animationend', () => { shimmer.remove(); }, { once: true });
    }
}

function spin() {
    if (state.isSpinning) return;
    if (state.segments.length === 0) return;
    state.isSpinning = true;
    clearWinnerHighlight();

    const n = state.segments.length;
    const winIdx = Math.floor(Math.random() * n);
    const targetRepeat = 3;
    const targetCardIdx = targetRepeat * n + winIdx;
    const cards = slotTrack.querySelectorAll('.slot-card');
    const cardH = cards.length ? cards[0].offsetHeight : 130;

    const middleOffset = Math.floor(slotViewport.offsetHeight / cardH / 2);
    const endY = (targetCardIdx - middleOffset) * cardH;

    const startY = 0;
    const totalDist = endY - startY;
    const duration = 4000 + Math.random() * 2000;
    const startTime = performance.now();

    slotTrack.style.transform = 'translateY(0)';

    // Remove any previous scale transforms
    cards.forEach(c => c.style.transform = '');

    function applyPerspective(y, intensity) {
        const vpHeight = slotViewport.offsetHeight;
        const vpCenter = vpHeight / 2;
        for (let i = 0; i < cards.length; i++) {
            const cardCenter = (i + 0.5) * cardH - y;
            const dist = Math.abs(cardCenter - vpCenter);
            const ratio = dist / vpCenter;
            const scale = 1 - Math.min(ratio, 1) * 0.3 * intensity;
            cards[i].style.transform = `scale(${scale})`;
        }
    }

    function animate(time) {
        const elapsed = time - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 4);
        const y = startY + totalDist * eased;
        slotTrack.style.transform = `translateY(${-y}px)`;
        const speed = 4 * Math.pow(1 - progress, 3);
        const fadeIn = 1 - Math.min(speed / 4, 1);
        const intensity = fadeIn * fadeIn;
        applyPerspective(y, intensity);

        if (progress < 1) {
            state.animFrame = requestAnimationFrame(animate);
        } else {
            slotTrack.style.transform = `translateY(${-endY}px)`;
            slotTrack.style.setProperty('--settle-y', `-${endY}px`);
            slotTrack.style.animation = 'slotSettle 0.5s ease-out forwards';
            slotTrack.addEventListener('animationend', () => {
                slotTrack.style.animation = '';
                state.isSpinning = false;
                highlightWinner(winIdx);
                document.getElementById('btnSpinAgain').disabled = false;
                setTimeout(() => showResult(winIdx), 500);
            }, { once: true });
        }
    }

    state.animFrame = requestAnimationFrame(animate);
}

function clearShowcaseVideo() {
    if (showcaseIframe) showcaseIframe.src = '';
}

function showResult(idx) {
    const d = state.segments[idx];
    resultPosition.textContent = '#' + d.position;
    resultName.textContent = d.name;
    resultCreator.textContent = 'by ' + d.author;
    resultRequirement.textContent = d.requirement;
    resultLevelId.textContent = d.id;
    resultLevelId.dataset.id = d.id;

    if (d.showcase) {
        showcaseFrame.style.display = 'block';
        resultNoVideo.style.display = 'none';
        showcaseIframe.src = 'https://www.youtube.com/embed/' + d.showcase + '?rel=0&autoplay=1&loop=1&playlist=' + d.showcase;
    } else {
        showcaseFrame.style.display = 'none';
        resultNoVideo.style.display = 'flex';
        showcaseIframe.src = '';
    }

    btnViewInfo.href = 'list.html?level=' + d.position;
    resultOverlay.style.display = 'flex';
    resultOverlay.classList.remove('result-exit');
}

function copyRouletteID(el) {
    const id = el.dataset.id;
    if (!id) return;
    navigator.clipboard.writeText(id).then(() => {
        const orig = el.textContent;
        el.textContent = '✓ Copiado';
        setTimeout(() => { el.textContent = orig; }, 1200);
    }).catch(() => {});
}

function showConfig() {
    if (state.animFrame) { cancelAnimationFrame(state.animFrame); state.isSpinning = false; }
    clearShowcaseVideo();
    resultOverlay.classList.add('result-exit');
    setTimeout(() => { resultOverlay.style.display = 'none'; }, 300);
    slotViewport.classList.remove('slot-enter');
    slotSection.style.display = 'none';
    configPanel.style.display = 'block';
    setTimeout(() => {
        configPanel.style.opacity = '1';
        configPanel.style.transform = 'translateY(0)';
    }, 10);
}

function showSlot() {
    configPanel.style.opacity = '0';
    configPanel.style.transform = 'translateY(-30px)';
    setTimeout(() => {
        configPanel.style.display = 'none';
        buildTrack(state.segments);
        slotTrack.style.transform = 'translateY(0)';
        slotTrack.style.animation = '';
        slotViewport.classList.remove('slot-enter');
        slotSection.style.display = 'flex';
        void slotViewport.offsetWidth;
        slotViewport.classList.add('slot-enter');
    }, 350);
}

const quickRange = document.getElementById('quickRange');
const customWrap = document.getElementById('customRangeWrap');

quickRange.addEventListener('click', (e) => {
    const btn = e.target.closest('.range-btn');
    if (!btn) return;
    quickRange.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const min = parseInt(btn.dataset.min);
    const max = parseInt(btn.dataset.max);
    state.min = min;
    state.max = max;
    document.getElementById('customMin').value = min;
    document.getElementById('customMax').value = max;
    customWrap.classList.add('dimmed');
});

function activateCustom() {
    quickRange.querySelectorAll('.range-btn').forEach(b => b.classList.remove('active'));
    customWrap.classList.remove('dimmed');
}

document.getElementById('customMin').addEventListener('focus', activateCustom);
document.getElementById('customMax').addEventListener('focus', activateCustom);
document.getElementById('customMin').addEventListener('click', activateCustom);
document.getElementById('customMax').addEventListener('click', activateCustom);

function validateAndGetRange() {
    const active = quickRange.querySelector('.range-btn.active');
    let min, max;
    const maxLevel = demons.length;
    if (active) {
        min = parseInt(active.dataset.min);
        max = parseInt(active.dataset.max);
    } else {
        min = parseInt(document.getElementById('customMin').value);
        max = parseInt(document.getElementById('customMax').value);
        if (isNaN(min) || isNaN(max)) { showToast('Ingresa valores numéricos válidos'); return null; }
        if (min < 1) { showToast('El mínimo no puede ser menor a 1'); return null; }
        if (max > maxLevel) { showToast('El máximo no puede superar #' + maxLevel); return null; }
        if (min > max) { showToast('El mínimo no puede ser mayor al máximo'); return null; }
        if (min === max) { showToast('El rango debe tener al menos 2 niveles'); return null; }
    }
    if (max > maxLevel) max = maxLevel;
    if (min < 1) min = 1;
    return { min, max };
}

function showToast(msg) {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toast._hide);
    toast._hide = setTimeout(() => toast.classList.remove('show'), 3000);
}

document.getElementById('btnSpin').addEventListener('click', () => {
    const range = validateAndGetRange();
    if (!range) return;
    let { min, max } = range;
    const maxLevel = demons.length;
    if (min > max) { const t = min; min = max; max = t; }

    state.min = min;
    state.max = max;
    state.segments = getSegments(min, max);
    rangeLabel.textContent = `Rango: #${min} – #${max}`;
    showSlot();
    setTimeout(() => spin(), 800);
});

document.getElementById('btnSpinAgain').addEventListener('click', () => {
    document.getElementById('btnSpinAgain').disabled = true;
    clearShowcaseVideo();
    resultOverlay.classList.add('result-exit');
    setTimeout(() => {
        resultOverlay.style.display = 'none';
        buildTrack(state.segments);
        slotTrack.style.transform = 'translateY(0)';
        slotTrack.style.animation = '';
        slotTrack.querySelectorAll('.slot-card').forEach(c => c.style.transform = '');
        setTimeout(() => spin(), 400);
    }, 300);
});

document.getElementById('btnChangeRange').addEventListener('click', showConfig);

function initBtnShimmer() {
    const btns = document.querySelectorAll('.btn-spin:not(.shimmer-active)');
    if (!btns.length) { scheduleBtnShimmer(); return; }
    btns.forEach((btn, i) => {
        setTimeout(() => {
            btn.classList.add('btn-shimmer', 'shimmer-active');
            btn.addEventListener('animationend', () => {
                btn.classList.remove('btn-shimmer', 'shimmer-active');
            }, { once: true });
        }, i * 300);
    });
    scheduleBtnShimmer();
}
function scheduleBtnShimmer() {
    const btns = document.querySelectorAll('.btn-spin');
    if (!btns.length) return;
    const base = 4000 + Math.random() * 3000;
    setTimeout(initBtnShimmer, base);
}
setTimeout(initBtnShimmer, 1500);

resultOverlay.addEventListener('click', (e) => {
    if (e.target === resultOverlay) showConfig();
});

const ICON_SYMBOLS = ['✦','◆','◈','◇','▣','■','▦','▩','⧈','⬡'];
(function initBgIcons() {
    const container = document.getElementById('bgIcons');
    if (!container) return;
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.className = 'bg-icon';
        el.textContent = ICON_SYMBOLS[i % ICON_SYMBOLS.length];
        el.style.left = Math.random() * 100 + '%';
        el.style.top = Math.random() * 100 + '%';
        el.style.fontSize = (12 + Math.random() * 20) + 'px';
        el.style.opacity = 0.015 + Math.random() * 0.035;
        el.style.transform = `rotate(${Math.random() * 360}deg)`;
        container.appendChild(el);
    }
})();
