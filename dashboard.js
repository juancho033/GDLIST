
if(sessionStorage.getItem("logged") !== "true") { window.location.href = "login.html"; }

let levels = JSON.parse(localStorage.getItem("myDemonList")) || [];

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
                <button onclick="remove(${realIndex})" style="color:var(--danger)" title="Eliminar">\u2715</button>
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

    if(!name || !video) return alert("Nombre y URL del video son obligatorios");

    levels.push({ name, author, verifier, video, thumb, id: levelID });
    renderAdminList(document.getElementById('adminSearch').value);
    document.querySelectorAll('#name, #author, #verifier, #ytUrl, #thumbUrl, #levelID').forEach(i => i.value = "");
    document.getElementById('thumbPreview').innerHTML = '<div class="thumb-placeholder">Vista previa</div>';
}

function editLevel(index) {
    const lvl = levels[index];
    const newName = prompt("Editar nombre del nivel:", lvl.name);
    if (newName && newName.trim() !== lvl.name) {
        lvl.name = newName.trim();
        renderAdminList(document.getElementById('adminSearch').value);
    }
}

function move(index, direction) {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < levels.length) {
        [levels[index], levels[newIndex]] = [levels[newIndex], levels[index]];
        renderAdminList(document.getElementById('adminSearch').value);
    }
}

function remove(index) {
    if(confirm("¿Borrar nivel?")) {
        levels.splice(index, 1);
        renderAdminList(document.getElementById('adminSearch').value);
    }
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

function logout() { sessionStorage.clear(); window.location.href = "login.html"; }

renderAdminList();
