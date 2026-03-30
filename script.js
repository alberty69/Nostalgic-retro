// ==========================================
// 1. BANCO DE DADOS DOS JOGOS (15 Jogos)
// ==========================================
const gamesData = [
    { id: 'mario', title: 'Super Mario World', console: 'Nintendo', category: 'Plataforma', color: '#e0115f', short: 'MARIO', desc: 'Resgate a Princesa Peach e explore a Ilha dos Dinossauros com Yoshi.' },
    { id: 'sonic', title: 'Sonic The Hedgehog', console: 'SEGA', category: 'Ação', color: '#0000ff', short: 'SONIC', desc: 'Corra em alta velocidade para libertar os animais do Dr. Robotnik.' },
    { id: 'pacman', title: 'Pac-Man', console: 'Arcade', category: 'Puzzle', color: '#ffd700', short: 'PAC-MAN', desc: 'Coma todas as pastilhas e fuja dos fantasmas coloridos no labirinto.' },
    { id: 'zelda', title: 'The Legend of Zelda', console: 'Nintendo', category: 'RPG', color: '#2e8b57', short: 'ZELDA', desc: 'Encontre os fragmentos da Triforce e derrote Ganon para salvar Hyrule.' },
    { id: 'sf2', title: 'Street Fighter II', console: 'Arcade', category: 'Luta', color: '#cc0000', short: 'SF II', desc: 'Escolha seu lutador e prove quem é o World Warrior mais forte.' },
    { id: 'dkc', title: 'Donkey Kong Country', console: 'Nintendo', category: 'Plataforma', color: '#8b4513', short: 'DKC', desc: 'Recupere o estoque de bananas roubado pelo Rei K. Rool.' },
    { id: 'mk', title: 'Mortal Kombat', console: 'Arcade', category: 'Luta', color: '#444', short: 'MK', desc: 'Lute pelo destino da Terra no torneio mais sangrento de todos.' },
    { id: 'megaman', title: 'Mega Man X', console: 'Nintendo', category: 'Ação', color: '#1e90ff', short: 'MEGA X', desc: 'Derrote os Mavericks e absorva seus poderes para salvar o futuro.' },
    { id: 'sor', title: 'Streets of Rage', console: 'SEGA', category: 'Beat em up', color: '#ff4500', short: 'RAGE', desc: 'Limpe as ruas da cidade enfrentando o sindicato do crime de Mr. X.' },
    { id: 'metroid', title: 'Super Metroid', console: 'Nintendo', category: 'Aventura', color: '#4b0082', short: 'SAMUS', desc: 'Explore o planeta Zebes como a caçadora de recompensas Samus Aran.' },
    { id: 'chrono', title: 'Chrono Trigger', console: 'Nintendo', category: 'RPG', color: '#ff8c00', short: 'CHRONO', desc: 'Viaje através do tempo para impedir o apocalipse causado por Lavos.' },
    { id: 'golden', title: 'Golden Axe', console: 'SEGA', category: 'Ação', color: '#daa520', short: 'AXE', desc: 'Guerreiros medievais em uma jornada épica contra Death Adder.' },
    { id: 'tetris', title: 'Tetris', console: 'Arcade', category: 'Puzzle', color: '#00fa9a', short: 'TETRIS', desc: 'Encaixe as peças perfeitamente para limpar as linhas e pontuar.' },
    { id: 'doom', title: 'DOOM', console: 'Arcade', category: 'FPS', color: '#333', short: 'DOOM', desc: 'Enfrente hordas de demônios em Marte com um arsenal pesado.' },
    { id: 'castlevania', title: 'Castlevania', console: 'Nintendo', category: 'Aventura', color: '#800000', short: 'BELMONT', desc: 'Use o chicote sagrado para invadir o castelo do Conde Drácula.' }
];

// ==========================================
// 2. FUNÇÕES DA HOME (index.html)
// ==========================================
function gerarMensagem() {
    const nome = document.getElementById("nomeUsuario").value;
    const resultado = document.getElementById("resultado");
    if(nome.trim() === "") {
        resultado.innerText = "> ERRO: INSIRA O NOME!";
    } else {
        resultado.innerText = `> BEM-VINDO, ${nome.toUpperCase()}!`;
    }
}

// Renderiza a lista de jogos na Home
function carregarJogosHome() {
    const grid = document.querySelector('.games-grid');
    if (!grid) return;

    grid.innerHTML = gamesData.map(jogo => `
        <div class="game-card" onclick="window.location.href='detalhes.html?id=${jogo.id}'">
            <div class="game-cover" style="background-color: ${jogo.color}">
                <span>${jogo.short}</span>
            </div>
            <h3 class="game-title">${jogo.title}</h3>
            <span class="game-category">${jogo.console} • ${jogo.category}</span>
        </div>
    `).join('');
}

// ==========================================
// 3. FUNÇÕES DE DETALHES (detalhes.html)
// ==========================================
function carregarDetalhesJogo() {
    const params = new URLSearchParams(window.location.search);
    const id = params.get('id');
    const jogo = gamesData.find(g => g.id === id);

    if (jogo) {
        document.title = `Nostalgic Retro - ${jogo.title}`;
        document.getElementById('game-title').innerText = jogo.title;
        document.getElementById('game-desc').innerText = jogo.desc;
        
        const cover = document.getElementById('game-cover');
        cover.style.backgroundColor = jogo.color;
        cover.innerText = jogo.short;
    }
}

// ==========================================
// 4. INICIALIZAÇÃO
// ==========================================
window.onload = () => {
    // Verifica em qual página estamos
    if (document.querySelector('.games-grid')) {
        carregarJogosHome();
    }
    if (document.getElementById('game-title')) {
        carregarDetalhesJogo();
    }
};