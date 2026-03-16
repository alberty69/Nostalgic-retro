// ==========================================
// 1. TERMINAL DO JOGADOR (Seu código original)
// ==========================================
function gerarMensagem() {
    let nome = document.getElementById("nomeUsuario").value;
        let resultado = document.getElementById("resultado");
            
                if(nome === "") {
                        resultado.innerText = "Por favor, insira o nome do Player 1!";
                            } else {
                                    resultado.innerText = nome + ", você tem potencial para zerar este fliperama!";
                                        }
                                        }

                                        // ==========================================
                                        // 2. SISTEMA DE FILTROS DO CATÁLOGO
                                        // ==========================================
                                        const selectFiltro = document.getElementById('filtroConsole');
                                        const jogos = document.querySelectorAll('.game-card');

                                        if(selectFiltro) {
                                            selectFiltro.addEventListener('change', (evento) => {
                                                    // Pega qual console o usuário escolheu (nintendo, sega, arcade)
                                                            const consoleEscolhido = evento.target.value;

                                                                    // Passa por todos os cartuchos (cards) de jogos
                                                                            jogos.forEach(jogo => {
                                                                                        // Se escolheu "todos" ou se o console bate com o do jogo
                                                                                                    if (consoleEscolhido === 'todos' || jogo.getAttribute('data-console') === consoleEscolhido) {
                                                                                                                    jogo.style.display = 'block'; // Mostra o jogo
                                                                                                                                } else {
                                                                                                                                                jogo.style.display = 'none'; // Esconde o jogo
                                                                                                                                                            }
                                                                                                                                                                    });
                                                                                                                                                                        });
                                                                                                                                                                        }

                                                                                                                                                                        // ==========================================
                                                                                                                                                                        // 3. SISTEMA DO MODAL E CONVITE WHATSAPP
                                                                                                                                                                        // ==========================================
                                                                                                                                                                        const modal = document.getElementById('modalJogo');
                                                                                                                                                                        const btnFecharModal = document.querySelector('.close-btn');
                                                                                                                                                                        const textoNomeJogo = document.getElementById('nomeDoJogoSelecionado');
                                                                                                                                                                        const btnChamarAmigo = document.getElementById('btnWhatsApp');

                                                                                                                                                                        let jogoSelecionado = "";

                                                                                                                                                                        // Quando clicar em qualquer jogo (card)
                                                                                                                                                                        jogos.forEach(jogo => {
                                                                                                                                                                            jogo.addEventListener('click', () => {
                                                                                                                                                                                    // Pega o nome do jogo que está dentro da tag com a classe 'game-title'
                                                                                                                                                                                            jogoSelecionado = jogo.querySelector('.game-title').innerText;
                                                                                                                                                                                                    
                                                                                                                                                                                                            // Coloca o nome do jogo no texto do Modal
                                                                                                                                                                                                                    textoNomeJogo.innerText = "Você selecionou: " + jogoSelecionado;
                                                                                                                                                                                                                            
                                                                                                                                                                                                                                    // Mostra o modal (a janelinha) na tela
                                                                                                                                                                                                                                            modal.style.display = 'flex'; 
                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                // Fechar modal ao clicar no "X"
                                                                                                                                                                                                                                                if(btnFecharModal) {
                                                                                                                                                                                                                                                    btnFecharModal.addEventListener('click', () => {
                                                                                                                                                                                                                                                            modal.style.display = 'none';
                                                                                                                                                                                                                                                                });
                                                                                                                                                                                                                                                                }

                                                                                                                                                                                                                                                                // Fechar modal se clicar fora da janelinha preta
                                                                                                                                                                                                                                                                window.addEventListener('click', (evento) => {
                                                                                                                                                                                                                                                                    if (evento.target === modal) {
                                                                                                                                                                                                                                                                            modal.style.display = 'none';
                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                });

                                                                                                                                                                                                                                                                                // Botão de chamar no WhatsApp
                                                                                                                                                                                                                                                                                if(btnChamarAmigo) {
                                                                                                                                                                                                                                                                                    btnChamarAmigo.addEventListener('click', () => {
                                                                                                                                                                                                                                                                                            // Cria a mensagem chamando o Player 2
                                                                                                                                                                                                                                                                                                    const mensagem = `Ei, Player 2! Bora jogar ${jogoSelecionado} no Nostalgic Retro? Acesse o site e vem pro co-op! 🎮`;
                                                                                                                                                                                                                                                                                                            
                                                                                                                                                                                                                                                                                                                    // Abre o link do WhatsApp para compartilhar
                                                                                                                                                                                                                                                                                                                            const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensagem)}`;
                                                                                                                                                                                                                                                                                                                                    window.open(url, '_blank');
                                                                                                                                                                                                                                                                                                                                        });
                                                                                                                                                                                                                                                                                                                                        }

                                                                                                                                                                                                                                                                                                                                        