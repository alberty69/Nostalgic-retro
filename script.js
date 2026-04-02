const gamesData = [
    { id: 'mario', title: 'Super Mario World', console: 'Nintendo', category: 'Plataforma', color: '#e0115f', short: 'MARIO', desc: 'O clássico absoluto do SNES. Explore mundos e resgate a princesa.' },
    { id: 'sonic', title: 'Sonic The Hedgehog', console: 'SEGA', category: 'Ação', color: '#0000ff', short: 'SONIC', desc: 'Alta velocidade e loops radicais com o ouriço azul da SEGA.' },
    { id: 'pacman', title: 'Pac-Man', console: 'Arcade', category: 'Puzzle', color: '#ffd700', short: 'PACMAN', desc: 'Coma todas as pastilhas e evite os fantasmas no labirinto.' },
    { id: 'zelda', title: 'The Legend of Zelda', console: 'Nintendo', category: 'Aventura', color: '#2e8b57', short: 'ZELDA', desc: 'Explore Hyrule e torne-se o herói do tempo.' },
    { id: 'sf2', title: 'Street Fighter II', console: 'Arcade', category: 'Luta', color: '#cc0000', short: 'SF II', desc: 'Escolha seu lutador e prove sua força no torneio mundial.' },
    { id: 'mk', title: 'Mortal Kombat', console: 'Arcade', category: 'Luta', color: '#333', short: 'MK', desc: 'Lutas sangrentas e Fatalities inesquecíveis.' },
    { id: 'donkey', title: 'Donkey Kong Country', console: 'Nintendo', category: 'Plataforma', color: '#8b4513', short: 'DKC', desc: 'Uma aventura incrível com gráficos revolucionários para a época.' },
    { id: 'megaman', title: 'Mega Man X', console: 'Nintendo', category: 'Ação', color: '#1e90ff', short: 'MEGA X', desc: 'Derrote os Mavericks e absorva seus poderes.' },
    { id: 'metroid', title: 'Super Metroid', console: 'Nintendo', category: 'Aventura', color: '#4b0082', short: 'SAMUS', desc: 'Explore o planeta Zebes neste clássico de exploração.' },
    { id: 'sor', title: 'Streets of Rage', console: 'SEGA', category: 'Ação', color: '#ff4500', short: 'RAGE', desc: 'Beat em up clássico nas ruas dominadas pelo crime.' },
    { id: 'castlevania', title: 'Castlevania', console: 'Nintendo', category: 'Aventura', color: '#800000', short: 'BELMONT', desc: 'Invada o castelo do Drácula com seu chicote sagrado.' },
    { id: 'tetris', title: 'Tetris', console: 'Arcade', category: 'Puzzle', color: '#00fa9a', short: 'TETRIS', desc: 'O quebra-cabeça mais viciante da história dos games.' },
    { id: 'chrono', title: 'Chrono Trigger', console: 'Nintendo', category: 'Aventura', color: '#ff8c00', short: 'CHRONO', desc: 'Viaje pelo tempo para salvar o futuro do mundo.' },
    { id: 'golden', title: 'Golden Axe', console: 'SEGA', category: 'Ação', color: '#daa520', short: 'AXE', desc: 'Guerreiros bárbaros contra hordas de monstros.' },
    { id: 'doom', title: 'DOOM', console: 'Arcade', category: 'Ação', color: '#222', short: 'DOOM', desc: 'Enfrente demônios no clássico que definiu os jogos de tiro.' }
];

function carregarJogosHome() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    grid.innerHTML = gamesData.map(g => `
        <div class="game-card" onclick="window.location.href='detalhes.html?id=${g.id}'">
            <div class="game-cover" style="background:${g.color}"><span>${g.short}</span></div>
            <h3 class="game-title">${g.title}</h3>
            <span class="game-category">${g.console}</span>
        </div>`).join('');
}

function carregarDetalhes() {
    const id = new URLSearchParams(window.location.search).get('id');
    const jogo = gamesData.find(g => g.id === id);
    if (!jogo) return;

    document.getElementById('game-title').innerText = jogo.title;
    document.getElementById('game-desc').innerText = jogo.desc;
    const cover = document.getElementById('game-cover');
    cover.style.background = jogo.color;
    cover.innerText = jogo.short;

    // RECOMENDAÇÕES (O que você pediu!)
    const recGrid = document.getElementById('recommendations-grid');
    const sugeridos = gamesData.filter(g => g.category === jogo.category && g.id !== jogo.id).slice(0, 4);
    recGrid.innerHTML = sugeridos.map(g => `
        <div class="game-card" onclick="window.location.href='detalhes.html?id=${g.id}'">
            <div class="game-cover" style="background:${g.color}"><span>${g.short}</span></div>
            <h3 class="game-title">${g.title}</h3>
        </div>`).join('');
}

function gerarMensagem() {
    const nome = document.getElementById("nomeUsuario").value;
    document.getElementById("resultado").innerText = nome ? `> PLAYER 1: ${nome.toUpperCase()}` : "> INSIRA O NOME!";
}

window.onload = () => {
    carregarJogosHome();
    carregarDetalhes();
};