const listContainer = document.getElementById('listContainer');
const searchInput = document.getElementById('searchInput');
const modal = document.getElementById('modal');
const closeBtn = document.querySelector('.close-btn');

let demonsData = [];


document.addEventListener('DOMContentLoaded', () => {
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
        card.innerHTML = `
            <div class="rank">#${index + 1}</div>
            <img class="thumbnail" src="${demon.thumb}" alt="thumb">
            <div class="info">
                <h3>${demon.name}</h3>
                <p>Por: <b>${demon.author}</b> | Verificador: <b>${demon.verifier}</b></p>
            </div>
        `;
        
        // Al hacer clic, abrimos el modal pasándole los datos del objeto
        card.onclick = () => openModal(demon, index + 1);
        container.appendChild(card);
    });
}

function openModal(demon, rank) {
    const modal = document.getElementById('modal');
    const videoId = extractID(demon.video); // Usa la función extractID que ya teníamos
    
    document.getElementById('videoContainer').innerHTML = `
        <iframe src="https://www.youtube.com/embed/${videoId}" allowfullscreen></iframe>
    `;
    
    document.getElementById('levelStats').innerHTML = `
        <h2 style="font-size: 2rem;">#${rank} - ${demon.name}</h2>
        <div class="stats-grid">
            <div class="stat-item"><span>Creador</span><b>${demon.author}</b></div>
            <div class="stat-item"><span>Verificador</span><b>${demon.verifier}</b></div>
            <div class="stat-item"><span>ID del Nivel</span><b>${demon.id}</b></div>
        </div>
    `;
    modal.style.display = 'block';
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

