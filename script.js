// ==========================================
// 1. DADOS DOS JOGOS (Nossa "API" local)
// ==========================================
const gamesData = [
    { id: 1, title: 'Super Mario World', console: 'nintendo', category: 'Plataforma', color: '#e0115f', shortName: 'MARIO', desc: 'Aventure-se na Dinosaur Land com Mario, Luigi e Yoshi para resgatar a Princesa Toadstool das garras de Bowser!' },
    { id: 2, title: 'Sonic The Hedgehog', console: 'sega', category: 'Ação', color: '#0000ff', shortName: 'SONIC', desc: 'Corra na velocidade do som, colete anéis e derrote o malvado Dr. Robotnik neste clássico inesquecível do Mega Drive.' },
    { id: 3, title: 'Pac-Man', console: 'arcade', category: 'Puzzle', color: '#ffd700', shortName: 'PAC-MAN', desc: 'Coma as pastilhas, fuja dos fantasmas (Blinky, Pinky, Inky e Clyde) e alcance a maior pontuação possível no fliperama!' },
    { id: 4, title: 'The Legend of Zelda', console: 'nintendo', category: 'RPG', color: '#2e8b57', shortName: 'ZELDA', desc: 'Explore o reino de Hyrule, encontre a Master Sword e derrote Ganon para salvar a Princesa Zelda.' },
    { id: 5, title: 'Donkey Kong Country', console: 'nintendo', category: 'Plataforma', color: '#8b4513', shortName: 'DKC', desc: 'Ajude Donkey e Diddy Kong a recuperar seu estoque de bananas roubado pelo terrível King K. Rool.' },
    { id: 6, title: 'Street Fighter II', console: 'arcade', category: 'Luta', color: '#cc0000', shortName: 'SF II', desc: 'Escolha seu lutador favorito e viaje o mundo para enfrentar os guerreiros mais fortes. HADOUKEN!' },
    { id: 7, title: 'Mortal Kombat', console: 'arcade', category: 'Luta', color: '#800000', shortName: 'MK', desc: 'Participe do torneio mais sangrento da Terra. Descubra os Fatalities e derrote Shang Tsung. GET OVER HERE!' },
    { id: 8, title: 'Mega Man X', console: 'nintendo', category: 'Ação', color: '#1e90ff', shortName: 'MEGA X', desc: 'Assuma o controle de X, absorva os poderes dos Mavericks derrotados e salve o mundo da ameaça de Sigma.' },
    { id: 9, title: 'Castlevania', console: 'nintendo', category: 'Aventura', color: '#4b0082', shortName: 'DRACULA', desc: 'Armado com seu chicote Vampire Killer, explore o castelo assombrado para derrotar o Conde Drácula.' },
    { id: 10, title: 'Golden Axe', console: 'sega', category: 'Hack n Slash', color: '#daa520', shortName: 'AXE', desc: 'Escolha seu guerreiro e use magias poderosas para derrotar Death Adder e salvar o rei.' },
    { id: 11, title: 'Streets of Rage', console: 'sega', category: 'Beat em up', color: '#ff4500', shortName: 'RAGE', desc: 'Limpe as ruas da cidade de um sindicato do crime usando apenas seus punhos, canos e invocações da polícia.' },
    { id: 12, title: 'Altered Beast', console: 'sega', category: 'Ação', color: '#8b008b', shortName: 'BEAST', desc: '"Rise from your grave!" Transforme-se em bestas mitológicas e resgate a filha de Zeus.' },
    { id: 13, title: 'Space Invaders', console: 'arcade', category: 'Tiro', color: '#00fa9a', shortName: 'ALIENS', desc: 'Defenda a Terra contra ondas infinitas de alienígenas descendo pela tela. O clássico que iniciou tudo!' },
    { id: 14, title: 'Galaga', console: 'arcade', category: 'Tiro', color: '#4682b4', shortName: 'GALAGA', desc: 'Controle sua nave e destrua as formações inimigas no espaço. Cuidado com o raio trator!' },
    { id: 15, title: 'Chrono Trigger', console: 'nintendo', category: 'RPG', color: '#ff8c00', shortName: 'CHRONO', desc: 'Viaje através do tempo com Crono e seus amigos para impedir que o parasita alienígena Lavos destrua o futuro.' }
];

// ==========================================
// 2. SISTEMA DE ROTEAMENTO (SPA)
// ==========================================
function showView(viewId) {
    // Esconde todas as views
    document.querySelectorAll('.view').forEach(view => {
        view.classList.remove('active');
    });
    
    // Mostra a view solicitada (com prefixo view-)
    const selectedView = document.getElementById(`view-${viewId}`);
    if (selectedView) {
        selectedView.classList.add('active');
    }

    // Rola para o topo da página suavemente
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ==========================================
// 3. RENDERIZAÇÃO E DETALHES DOS JOGOS
// ==========================================
const gamesGrid = document.getElementById('gamesGrid');

function renderGames(filterConsole = 'todos') {
    gamesGrid.innerHTML = ''; // Limpa a grid

    const filteredGames = gamesData.filter(game => 
        filterConsole === 'todos' || game.console === filterConsole
    );

    filteredGames.forEach(game => {
        // Formata o console para exibição elegante
        const consoleName = game.console.charAt(0).toUpperCase() + game.console.slice(1);
        
        const card = document.createElement('div');
        card.className = 'game-card';
        card.setAttribute('data-console', game.console);
        
        // Define que ao clicar no card, vai para os detalhes
        card.onclick = () => openGameDetails(game.id);

        card.innerHTML = `
            <div class="game-cover" style="background-color: ${game.color}; color: ${game.console === 'arcade' ? 'black' : 'white'};">
                <span>${game.shortName}</span>
            </div>
            <h3 class="game-title">${game.title}</h3>
            <span class="game-category">${consoleName} • ${game.category}</span>
        `;
        
        gamesGrid.appendChild(card);
    });
}

function openGameDetails(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    // Formata console
    const consoleName = game.console.charAt(0).toUpperCase() + game.console.slice(1);

    // Preenche a View de Detalhes
    const coverElement = document.getElementById('detail-cover');
    coverElement.style.backgroundColor = game.color;
    coverElement.style.color = game.console === 'arcade' ? 'black' : 'white';
    coverElement.innerText = game.shortName;

    document.getElementById('detail-title').innerText = game.title;
    document.getElementById('detail-desc').innerText = game.desc;
    document.getElementById('detail-cat').innerText = `Categoria: ${game.category} | Console: ${consoleName}`;

    // Troca de tela
    showView('details');
}

// ==========================================
// 4. INTERATIVIDADE E FILTROS
// ==========================================
// Filtro do Catálogo
document.getElementById('filtroConsole').addEventListener('change', (e) => {
    renderGames(e.target.value);
});

// Terminal do Jogador
function gerarMensagem() {
    let nome = document.getElementById("nomeUsuario").value;
    let resultado = document.getElementById("resultado");
    
    if(nome.trim() === "") {
        resultado.innerText = "> ERRO: Insira o nome do Player 1!";
        resultado.style.color = "var(--neon-pink)";
    } else {
        resultado.innerText = `> LOGIN ACEITO: ${nome.toUpperCase()}, você tem potencial para zerar este fliperama!`;
        resultado.style.color = "var(--neon-green)";
    }
}

// Botão de Anúncios
function assistirAnuncio() {
    alert("CARREGANDO ANÚNCIO...\n\nBrincadeira! Mas se você assinar o Premium, nem precisaria ver isso. 😉");
}

// Inicializa a Home ao carregar a página
window.onload = () => {
    renderGames(); // Renderiza todos os jogos
};
