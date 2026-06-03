
if(sessionStorage.getItem("logged") !== "true") { window.location.href = "login.html"; }

let levels = JSON.parse(localStorage.getItem("myDemonList")) || [];

function renderAdminList() {
    const container = document.getElementById('adminList');
    container.innerHTML = '';

    levels.forEach((lvl, index) => {
        const div = document.createElement('div');
        div.className = 'admin-card';
        div.innerHTML = `
            <div class="pos">#${index + 1}</div>
            <div class="details">
                <strong>${lvl.name}</strong>
                <span>ID: ${lvl.id}</span>
            </div>
            <div class="controls">
                <button onclick="move(${index}, -1)">▲</button>
                <button onclick="move(${index}, 1)">▼</button>
                <button onclick="remove(${index})" style="color:red">✖</button>
            </div>
        `;
        container.appendChild(div);
    });
    localStorage.setItem("myDemonList", JSON.stringify(levels));
}

function addLevel() {
    const newLvl = {
        name: document.getElementById('name').value,
        author: document.getElementById('author').value,
        verifier: document.getElementById('verifier').value,
        video: document.getElementById('ytUrl').value,
        thumb: document.getElementById('thumbUrl').value || `https://img.youtube.com/vi/${extractID(document.getElementById('ytUrl').value)}/mqdefault.jpg`,
        id: document.getElementById('levelID').value
    };

    if(!newLvl.name || !newLvl.video) return alert("Faltan datos");
    
    levels.push(newLvl);
    renderAdminList();
    document.querySelectorAll('input').forEach(i => i.value = "");
}

function move(index, direction) {
    const newIndex = index + direction;
    if (newIndex >= 0 && newIndex < levels.length) {
        [levels[index], levels[newIndex]] = [levels[newIndex], levels[index]];
        renderAdminList();
    }
}

function remove(index) {
    if(confirm("¿Borrar nivel?")) {
        levels.splice(index, 1);
        renderAdminList();
    }
}

function extractID(url) {
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : "";
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

function logout() { sessionStorage.clear(); window.location.href = "login.html"; }

renderAdminList();