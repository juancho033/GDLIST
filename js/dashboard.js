
if(sessionStorage.getItem("logged") !== "true") { window.location.href = "login.html"; }

let levels = [];
let pendingDelete = null;
let editingIndex = null;

function loadLevels() {
    const stored = localStorage.getItem("myDemonList");
    if (stored) {
        levels = JSON.parse(stored);
    } else if (typeof DB_LEVELS !== 'undefined') {
        levels = DB_LEVELS.map(l => ({ ...l }));
        localStorage.setItem("myDemonList", JSON.stringify(levels));
    }
}

function renderAdminList(filter = "") {
    const container = document.getElementById('adminList');
    container.innerHTML = '';
    const q = filter.toLowerCase();

    const filtered = levels.filter((lvl, i) =>
        !q || lvl.name.toLowerCase().includes(q) || lvl.author.toLowerCase().includes(q) || lvl.id.toString().includes(q)
    );

    document.getElementById('levelCount').textContent = filtered.length ? `(${filtered.length} de ${levels.length})` : '';

    filtered.forEach((lvl, idx) => {
        const realIndex = levels.indexOf(lvl);
        const div = document.createElement('div');
        div.className = 'admin-card';
        div.style.animationDelay = `${idx * 0.04}s`;
        div.innerHTML = `
            <div class="pos">#${realIndex + 1}</div>
            <div class="details">
                <strong>${lvl.name}</strong>
                <span>ID: ${lvl.id} &middot; ${lvl.author}</span>
            </div>
            <div class="controls">
                <button onclick="editLevel(${realIndex})" title="Editar">\u270E</button>
                <button onclick="move(${realIndex}, -1)" title="Subir">\u25B2</button>
                <button onclick="move(${realIndex}, 1)" title="Bajar">\u25BC</button>
                <button onclick="confirmDelete(${realIndex})" style="color:var(--danger)" title="Eliminar">\u2715</button>
            </div>
        `;
        container.appendChild(div);
    });
    localStorage.setItem("myDemonList", JSON.stringify(levels));
}

function addLevel() {
    const name = document.getElementById('name').value.trim();
    const author = document.getElementById('author').value.trim();
    const verifier = document.getElementById('verifier').value.trim();
    const video = document.getElementById('ytUrl').value.trim();
    const levelID = document.getElementById('levelID').value.trim();
    const thumb = document.getElementById('thumbUrl').value.trim() || (video ? `https://img.youtube.com/vi/${extractID(video)}/mqdefault.jpg` : "");

    if(!name || !video) {
        const form = document.querySelector('.form-section');
        form.style.borderColor = '#ff4444';
        form.style.boxShadow = '0 0 20px rgba(255,68,68,0.2)';
        setTimeout(() => { form.style.borderColor = ''; form.style.boxShadow = ''; }, 600);
        return;
    }

    if (editingIndex !== null) {
        levels[editingIndex] = { name, author, verifier, video, thumb, id: levelID };
        const form = document.querySelector('.form-section');
        form.style.borderColor = 'var(--warning)';
        form.style.boxShadow = '0 0 20px rgba(255,170,0,0.15)';
        setTimeout(() => { form.style.borderColor = ''; form.style.boxShadow = ''; }, 800);
    } else {
        levels.push({ name, author, verifier, video, thumb, id: levelID });
        const form = document.querySelector('.form-section');
        form.style.borderColor = 'var(--success)';
        form.style.boxShadow = '0 0 20px rgba(0,255,136,0.15)';
        setTimeout(() => { form.style.borderColor = ''; form.style.boxShadow = ''; }, 800);
    }

    cancelEdit();
    renderAdminList(document.getElementById('adminSearch').value);
}

function editLevel(index) {
    const lvl = levels[index];
    document.getElementById('name').value = lvl.name;
    document.getElementById('author').value = lvl.author || '';
    document.getElementById('verifier').value = lvl.verifier || '';
    document.getElementById('ytUrl').value = lvl.video || '';
    document.getElementById('thumbUrl').value = lvl.thumb || '';
    document.getElementById('levelID').value = lvl.id || '';
    previewThumb();

    editingIndex = index;
    document.getElementById('addBtn').textContent = 'GUARDAR CAMBIOS';
    document.getElementById('addBtn').style.background = 'var(--warning)';
    document.getElementById('addBtn').style.color = '#111';
    document.getElementById('addBtn').style.borderColor = 'var(--warning)';
    document.getElementById('cancelEdit').style.display = 'inline-block';

    document.querySelector('.form-section').scrollIntoView({ behavior: 'smooth' });
}

function cancelEdit() {
    editingIndex = null;
    document.querySelectorAll('#name, #author, #verifier, #ytUrl, #thumbUrl, #levelID').forEach(i => i.value = "");
    document.getElementById('thumbPreview').innerHTML = '<div class="thumb-placeholder">Vista previa</div>';
    const btn = document.getElementById('addBtn');
    btn.textContent = 'AÑADIR A LA LISTA';
    btn.style.background = '';
    btn.style.color = '';
    btn.style.borderColor = '';
    document.getElementById('cancelEdit').style.display = 'none';
}

function move(index, direction) {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < levels.length) {
        [levels[index], levels[newIndex]] = [levels[newIndex], levels[index]];
        renderAdminList(document.getElementById('adminSearch').value);
    }
}

function confirmDelete(index) {
    pendingDelete = index;
    const msg = document.getElementById('confirmMsg');
    msg.innerHTML = `¿Seguro que quieres borrar <span class="level-name">${levels[index].name}</span>?`;
    document.getElementById('confirmModal').classList.add('show');
}

function executeDelete() {
    if (pendingDelete !== null) {
        levels.splice(pendingDelete, 1);
        pendingDelete = null;
        closeConfirm();
        renderAdminList(document.getElementById('adminSearch').value);
    }
}

function closeConfirm() {
    document.getElementById('confirmModal').classList.remove('show');
    pendingDelete = null;
}

function extractID(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : "";
}

function previewThumb() {
    const url = document.getElementById('ytUrl').value;
    const preview = document.getElementById('thumbPreview');
    const id = extractID(url);
    if (id) {
        preview.innerHTML = `<img src="https://img.youtube.com/vi/${id}/mqdefault.jpg" alt="preview" onerror="this.parentNode.innerHTML='<div class=thumb-placeholder>Sin vista previa</div>'">`;
    } else {
        preview.innerHTML = '<div class="thumb-placeholder">Vista previa</div>';
    }
}

function downloadDB() {
    const content = `const DB_LEVELS = ${JSON.stringify(levels, null, 2)};`;
    const blob = new Blob([content], { type: "text/javascript" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = "DBLEVEL.js";
    a.click();
}

document.getElementById('adminSearch').addEventListener('input', (e) => {
    renderAdminList(e.target.value);
});

document.getElementById('confirmOk').addEventListener('click', executeDelete);
document.getElementById('confirmCancel').addEventListener('click', closeConfirm);
document.getElementById('confirmModal').addEventListener('click', (e) => {
    if (e.target === e.currentTarget) closeConfirm();
});

function logout() { sessionStorage.clear(); window.location.href = "login.html"; }

loadLevels();
renderAdminList();
