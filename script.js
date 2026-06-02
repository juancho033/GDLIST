const listContainer = document.getElementById('listContainer');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

let demonsData = [];


const PROXY = "https://corsproxy.io/?";
const API_URL = "https://pointercrate.com/api/v2/demons/?limit=50&after=0";

async function getDemons() {
    try {
        const response = await fetch(PROXY + encodeURIComponent(API_URL));
        if (!response.ok) throw new Error("Error en la respuesta");
        demonsData = await response.json(); // <--- ESTA LÍNEA ES VITAL
        demonsData.sort((a, b) => a.position - b.position);

        renderList(demonsData);
    } catch (error) {
        console.error(error);
        listContainer.innerHTML = `<div class="error">Error de conexión: Pointercrate bloqueó la petición local. Intenta recargar o usa un servidor web.</div>`;
    }
}

function renderList(list) {
    listContainer.innerHTML = '';
    list.forEach(demon => {
        const card = document.createElement('div');
        card.className = 'demon-card';
        card.innerHTML = `
            <div class="rank">#${demon.position}</div>
            <img class="thumbnail" src="https://img.youtube.com/vi/${extractID(demon.video)}/mqdefault.jpg" onerror="this.src='https://i.ytimg.com/vi/hsh7m9L8zTg/mqdefault.jpg'" alt="thumbnail">
            <div class="info">
                <h3>${demon.name}</h3>
                <p>Publicado por: <b>${demon.publisher.name}</b></p>
            </div>
        `;
        card.onclick = () => openModal(demon.id);
        listContainer.appendChild(card);
    });
}

function extractID(url) {
    if (!url) return "placeholder";
    const regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[7].length == 11) ? match[7] : "";
}

async function openModal(id) {
    modal.style.display = 'block';
    const statsDiv = document.getElementById('levelStats');
    const videoDiv = document.getElementById('videoContainer');

    statsDiv.innerHTML = "Cargando detalles...";
    videoDiv.innerHTML = "";

    try {
        const res = await fetch(PROXY + encodeURIComponent(`https://pointercrate.com/api/v2/demons/${id}`));
        const data = await res.json();

        const videoId = extractID(data.video);

        videoDiv.innerHTML = `<iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>`;

        statsDiv.innerHTML = `
            <h2 style="font-size: 2rem; margin-bottom: 5px;">${data.name}</h2>
            <div class="stats-grid">
                <div class="stat-item"><span>Verificador</span><b>${data.verifier.name}</b></div>
                <div class="stat-item"><span>Publisher</span><b>${data.publisher.name}</b></div>
                <div class="stat-item"><span>ID del Nivel</span><b>${data.id}</b></div>
                <div class="stat-item"><span>Posición</span><b>#${data.position}</b></div>
            </div>
        `;
    } catch (e) {
        statsDiv.innerHTML = "Error al cargar detalles.";
    }
}


searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = demonsData.filter(d =>
        d.name.toLowerCase().includes(query) ||
        d.publisher.name.toLowerCase().includes(query)
    );
    renderList(filtered);
});

closeBtn.onclick = () => {
    modal.style.display = 'none';
    document.getElementById('videoContainer').innerHTML = "";
}

window.onclick = (e) => { if (e.target == modal) closeBtn.onclick(); }

getDemons();