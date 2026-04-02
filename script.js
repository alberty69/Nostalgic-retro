const gamesData = [
    { id: 'mario', title: 'Super Mario World', console: 'Nintendo', category: 'Plataforma', color: '#e0115f', short: 'MARIO', desc: 'Salve a Princesa Peach em uma das maiores aventuras de plataforma de todos os tempos.' },
    { id: 'sonic', title: 'Sonic The Hedgehog', console: 'SEGA', category: 'Ação', color: '#0000ff', short: 'SONIC', desc: 'Corra em loops alucinantes e derrote o Dr. Robotnik com o ouriço mais rápido do mundo.' },
    { id: 'pacman', title: 'Pac-Man', console: 'Arcade', category: 'Puzzle', color: '#ffd700', short: 'PACMAN', desc: 'Coma as pastilhas no labirinto e fuja dos fantasmas Blinky, Pinky, Inky e Clyde.' },
    { id: 'zelda', title: 'The Legend of Zelda', console: 'Nintendo', category: 'Aventura', color: '#2e8b57', short: 'ZELDA', desc: 'Desbrave o reino de Hyrule e encontre a Master Sword para derrotar o vilão Ganon.' },
    { id: 'sf2', title: 'Street Fighter II', console: 'Arcade', category: 'Luta', color: '#cc0000', short: 'SF II', desc: 'Escolha seu lutador mundial e use o Hadouken para vencer o torneio!' },
    { id: 'mk', title: 'Mortal Kombat', console: 'Arcade', category: 'Luta', color: '#333', short: 'MK', desc: 'Participe do torneio fatal e descubra os segredos dos movimentos Fatality.' },
    { id: 'dkc', title: 'Donkey Kong Country', console: 'Nintendo', category: 'Plataforma', color: '#8b4513', short: 'DKC', desc: 'Recupere o estoque de bananas roubado pelo Rei K. Rool nesta selva 16-bits.' },
    { id: 'megaman', title: 'Mega Man X', console: 'Nintendo', category: 'Ação', color: '#1e90ff', short: 'MEGA X', desc: 'Assuma o controle de X e derrote os Mavericks para absorver seus poderes especiais.' },
    { id: 'metroid', title: 'Super Metroid', console: 'Nintendo', category: 'Aventura', color: '#4b0082', short: 'SAMUS', desc: 'Explore o planeta Zebes e enfrente Mother Brain como a caçadora Samus Aran.' },
    { id: 'sor', title: 'Streets of Rage', console: 'SEGA', category: 'Ação', color: '#ff4500', short: 'RAGE', desc: 'Limpe as ruas da cidade enfrentando o sindicato do crime usando apenas seus punhos.' },
    { id: 'castlevania', title: 'Castlevania', console: 'Nintendo', category: 'Aventura', color: '#800000', short: 'BELMONT', desc: 'Use o chicote sagrado para invadir o castelo assombrado e derrotar o Conde Drácula.' },
    { id: 'tetris', title: 'Tetris', console: 'Arcade', category: 'Puzzle', color: '#00fa9a', short: 'TETRIS', desc: 'O quebra-cabeça clássico onde você deve encaixar blocos para limpar as linhas.' },
    { id: 'chrono', title: 'Chrono Trigger', console: 'Nintendo', category: 'Aventura', color: '#ff8c00', short: 'CHRONO', desc: 'Viaje através das eras para impedir que o parasita Lavos destrua o futuro.' },
    { id: 'golden', title: 'Golden Axe', console: 'SEGA', category: 'Ação', color: '#daa520', short: 'AXE', desc: 'Escolha seu guerreiro bárbaro e use magias para derrotar hordas de monstros.' },
    { id: 'doom', title: 'DOOM', console: 'Arcade', category: 'Ação', color: '#222', short: 'DOOM', desc: 'O FPS lendário onde você enfrenta hordas de demônios nas luas de Marte.' }
];

function carregarJogosHome() {
    const grid = document.getElementById('main-grid');
    if (!grid) return;
    grid.innerHTML = gamesData.map(g => `
        <div class="game-card" onclick="window.location.href='detalhes.html?id=${g.id}'">
            <div class="game-cover" style="background:${g.color}"><span>${g.short}</span></div>
            <h3 class="game-title">${g.title}</h3>
            <span class="game-category" style="font-size:8px; opacity:0.7;">${g.console}</span>
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

    const recGrid = document.getElementById('recommendations-grid');
    if(recGrid) {
        const sugeridos = gamesData
            .filter(g => g.category === jogo.category && g.id !== jogo.id)
            .slice(0, 4);

        recGrid.innerHTML = sugeridos.map(g => `
            <div class="game-card" onclick="window.location.href='detalhes.html?id=${g.id}'">
                <div class="game-cover" style="background:${g.color}"><span>${g.short}</span></div>
                <h3 class="game-title">${g.title}</h3>
            </div>`).join('');
    }
}

function gerarMensagem() {
    const nome = document.getElementById("nomeUsuario").value;
    const res = document.getElementById("resultado");
    if(nome.trim()) {
        res.innerText = `> LOGIN ACEITO: ${nome.toUpperCase()}`;
        res.style.color = "var(--neon-green)";
    } else {
        res.innerText = "> ERRO: INSIRA O NOME!";
        res.style.color = "var(--neon-pink)";
    }
}

window.onload = () => {
    carregarJogosHome();
    carregarDetalhes();
};