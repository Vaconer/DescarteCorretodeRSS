function mostrarJogo(grupo) {
    // Remove a classe 'active' de todos os links de lista
    var links = document.querySelectorAll('.grupos-info ul li a');
    links.forEach(function (link) {
        link.classList.remove('active');
    });

    // Adiciona a classe 'active' apenas ao link clicado
    var linkAtivo = document.querySelector('a[href="#"][onclick="mostrarJogo(\'' + grupo + '\')"]');
    linkAtivo.classList.add('active');

    // Limpa o conteúdo atual do jogo
    document.getElementById('jogoContent').innerHTML = '';

    // Verifica qual grupo foi selecionado e exibe o jogo correspondente
    switch (grupo) {
        case 'A':
            document.getElementById('jogoContent').innerHTML = `
                <div id="game">
                    <h3>Descarte os resíduos infectantes no local adequado</h3>
                    <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
                    <div class="item" id="item1" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Medicamentos.png" alt="Medicamentos" style="width: 100px; height: 100px;">
                        <p>Medicamentos</p>
                    </div>
                    <div class="item" id="item2" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/gaze.jpg" alt="Gaze com Sangue" style="width: 100px; height: 100px;">
                        <p>Gaze com Sangue</p>
                    </div>
                    <div class="item" id="item3" draggable="true" ondragstart="drag(event)">
                        <img src="Microorganismo.jpg" alt="Culturas e Estoque de Microorganismos" style="width: 100px; height: 100px;">
                        <p>Microorganismos</p>
                    </div>
                    <div class="item" id="item4" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/orgao.png" alt="Órgãos e Tecidos" style="width: 100px; height: 100px;">
                        <p>Órgãos e Tecidos</p>
                    </div>
                    <div id="trash-can" ondrop="drop(event, 'A')" ondragover="allowDrop(event)">
                        <img src="../../images/jogo/lixeirainfectante.png" alt="Lixeira" style="width: 100px; height: 100px;">
                        <p>Lixeira</p>
                    </div>
                    <div id="message"></div>
                </div>
            `;
            break;

        case 'B':
            document.getElementById('jogoContent').innerHTML = `
                <div id="game">
                    <h3>Descarte os resíduos do grupo B no local adequado</h3>
                    <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
                    <div class="item" id="item5" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Amostras.png" alt="Sobras de amostras de laboratório" style="width: 100px; height: 100px;">
                        <p>Sobras de amostras de laboratório</p>
                    </div>
                    <div class="item" id="item6" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Medicamentos.png" alt="Medicamentos" style="width: 100px; height: 100px;">
                        <p>Medicamentos</p>
                    </div>
                    <div class="item" id="item7" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Saneantes.png" alt="Saneantes" style="width: 100px; height: 100px;">
                        <p>Saneantes</p>
                    </div>
                    <div id="trash-can" ondrop="drop(event, 'B')" ondragover="allowDrop(event)">
                        <img src="../../images/jogo/GrupoB.png" alt="Saco Laranja e Bombonas Azuis" style="width: 100px; height: 100px;">
                        <p>Saco Laranja e Bombonas Azuis</p>
                    </div>
                    <div id="message"></div>
                </div>
            `;
            break;

        case 'C':
            document.getElementById('jogoContent').innerHTML = `
                <div id="game">
                    <h3>Descarte no saco roxo e Latões de alumínio, apenas os resíduos do grupo C</h3>
                    <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
                    <div class="item" id="item8" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Antineoplasicos.png" alt="Antineoplásicos (Câncer)" style="width: 100px; height: 100px;">
                        <p>Antineoplásicos (Câncer)</p>
                    </div>
                    <div class="item" id="item9" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Pecas.png" alt="Peças anatômicas" style="width: 100px; height: 100px;">
                        <p>Peças anatômicas</p>
                    </div>
                    <div class="item" id="item10" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Quimioterapia.png" alt="Provenientes de Quimioterapia" style="width: 100px; height: 100px;">
                        <p>Provenientes de Quimioterapia</p>
                    </div>
                    <div class="item" id="item11" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Nuclear.png" alt="Medicina Nuclear" style="width: 100px; height: 100px;">
                        <p>Medicina Nuclear</p>
                    </div>
                    <div class="item" id="item12" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Radioterapia.png" alt="Produtos de Radioterapia" style="width: 100px; height: 100px;">
                        <p>Produtos de Radioterapia</p>
                    </div>
                    <div id="trash-can" ondrop="drop(event, 'C')" ondragover="allowDrop(event)">
                        <img src="../../images/jogo/GrupoC.png" alt="Saco roxo e Latões de alumínio" style="width: 100px; height: 100px;">
                        <p>Saco roxo e Latões de alumínio</p>
                    </div>
                    <div id="message"></div>
                </div>
            `;
            break;

        case 'D':
            document.getElementById('jogoContent').innerHTML = `
                <div id="game">
                    <h3>Descarte os resíduos do grupo D reciclável no local adequado</h3>
                    <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
                    <div class="item" id="Lancetas" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/lanceta.png" alt="Lancetas" style="width: 100px; height: 100px;">
                        <p>Lancetas</p>
                    </div>
                    <div class="item" id="VacinaVencida" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/vacina.png" alt="Vacina Vencida" style="width: 100px; height: 100px;">
                        <p>Vacina Vencida</p>
                    </div>
                    <div class="item" id="Papel" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/papel.png" alt="Papel" style="width: 100px; height: 100px;">
                        <p>Papel</p>
                    </div>
                    <div class="item" id="Plastico" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/plastico.png" alt="Plástico" style="width: 100px; height: 100px;">
                        <p>Plástico</p>
                    </div>
                    <div class="item" id="Metal" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Metal.png" alt="Metal" style="width: 100px; height: 100px;">
                        <p>Metal</p>
                    </div>
                    <div class="item" id="Vidro" draggable="true" ondragstart="drag(event)">
                        <img src="../../images/jogo/Vidro.png" alt="Vidro" style="width: 100px; height: 100px;">
                        <p>Vidro</p>
                    </div>
                    <div id="trash-cans" style="display: flex; justify-content: space-around; margin-top: 20px;">
                        <div id="trash-can-papel" ondrop="drop(event, 'D', 'Papel')" ondragover="allowDrop(event)">
                            <img src="../../images/jogo/Azul.png" alt="Lixeira Papel" style="width: 100px; height: 100px;">
                            <p>Lixeira Azul</p>
                        </div>
                        <div id="trash-can-plastico" ondrop="drop(event, 'D', 'Plastico')" ondragover="allowDrop(event)">
                            <img src="../../images/jogo/Vermelha.png" alt="Lixeira Plástico" style="width: 100px; height: 100px;">
                            <p>Lixeira Vermelha</p>
                        </div>
                        <div id="trash-can-metal" ondrop="drop(event, 'D', 'Metal')" ondragover="allowDrop(event)">
                            <img src="../../images/jogo/Amarelo.png" alt="Lixeira Metal" style="width: 100px; height: 100px;">
                            <p>Lixeira Amarela</p>
                        </div>
                        <div id="trash-can-vidro" ondrop="drop(event, 'D', 'Vidro')" ondragover="allowDrop(event)">
                            <img src="../../images/jogo/Verde.png" alt="Lixeira Vidro" style="width: 100px; height: 100px;">
                            <p>Lixeira Verde</p>
                        </div>
                    </div>
                    <div id="message"></div>
                </div>
            `;
            break;

        case 'E':
            document.getElementById('jogoContent').innerHTML = `
                    <div id="game">
                        <h3>Descarte os resíduos do grupo D Comum no local adequado</h3>
                        <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
                        <div class="item" id="SobrasAlimentos" draggable="true" ondragstart="drag(event)">
                            <img src="../../images/jogo/Sobras.png" alt="Sobras de Alimentos" style="width: 100px; height: 100px;">
                            <p>Sobras de Alimentos</p>
                        </div>
                        <div class="item" id="Caneta" draggable="true" ondragstart="drag(event)">
                            <img src="../../images/jogo/Caneta.png" alt="Caneta" style="width: 100px; height: 100px;">
                            <p>Caneta</p>
                        </div>
                        <div class="item" id="Lapiseira" draggable="true" ondragstart="drag(event)">
                            <img src="../../images/jogo/lapiseira.png" alt="Lápis – Caneta" style="width: 100px; height: 100px;">
                            <p>Lápis – Caneta</p>
                        </div>
                        <div class="item" id="LabAnalisesClinicas" draggable="true" ondragstart="drag(event)">
                            <img src="../../images/jogo/lab_analises_clinicas.png" alt="Laboratório de Análises Clínicas" style="width: 100px; height: 100px;">
                            <p>Laboratório de Análises Clínicas</p>
                        </div>
                        <div id="trash-cans" style="display: flex; justify-content: space-around; margin-top: 20px;">
                            <div id="trash-can-lixeira-branca" ondrop="drop(event, 'E', 'LixeiraBranca')" ondragover="allowDrop(event)">
                                <img src="../../images/jogo/GrupoE.png" alt="Lixeira Branca" style="width: 100px; height: 100px;">
                                <p>Lixeira Branca</p>
                            </div>
                        </div>
                        <div id="message"></div>
                    </div>
                `;
            break;

        case 'F':
            document.getElementById('jogoContent').innerHTML = `
    <div id="game">
        <h3>Descarte os resíduos do grupo F no local adequado</h3>
        <h5>Clique nos nomes, e coloque no lugar correto de descarte</h5>
        <div class="item" id="Escalpe" draggable="true" ondragstart="drag(event)">
            <img src="../../images/jogo/Escalpe.webp" alt="Escalpe" style="width: 100px; height: 100px;">
            <p>Escalpe</p>
        </div>
        <div class="item" id="item2" draggable="true" ondragstart="drag(event)">
            <img src="../../images/jogo/Medicamentos.png" alt="Medicamentos" style="width: 100px; height: 100px;">
            <p>Medicamentos</p>
        </div>
        <div class="item" id="item3" draggable="true" ondragstart="drag(event)">
            <img src="../../images/jogo/Luvas.jpg" alt="Luvas" style="width: 100px; height: 100px;">
            <p>Luvas</p>
        </div>
        <div class="item" id="LaminasBisturi" draggable="true" ondragstart="drag(event)">
            <img src="../../images/jogo/Lamina.webp" alt="Lâminas de bisturi" style="width: 100px; height: 100px;">
            <p>Lâminas de bisturi</p>
        </div>
        <div class="item" id="Agulha" draggable="true" ondragstart="drag(event)">
            <img src="../../images/jogo/Agulha.jpg" alt="Agulha" style="width: 100px; height: 100px;">
            <p>Agulha</p>
        </div>
        <div id="trash-can" ondrop="drop(event, 'F')" ondragover="allowDrop(event)">
            <img src="../../images/jogo/GrupoF.png" alt="Recipiente para Resíduos do Grupo F" style="width: 100px; height: 100px;">
            <p>Recipiente para Resíduos do Grupo F</p>
        </div>
        <div id="message"></div>
    </div>
`;
            break;

        default:
            break;
    }
}

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
    ev.dataTransfer.setData("alt", ev.target.alt);
}

var itensNaLixeira = { A: [], B: [], C: [], D: { Papel: [], Plastico: [], Metal: [], Vidro: [] }, E: [], F: [] };

function drop(ev, grupo, tipo) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    var draggedItem = document.getElementById(data);
    var draggedItemId = draggedItem.id;

    if (grupo === 'D') {
        // Lógica para o grupo D
        if ((tipo === 'Papel' && draggedItemId === 'Papel') ||
            (tipo === 'Plastico' && draggedItemId === 'Plastico') ||
            (tipo === 'Metal' && draggedItemId === 'Metal') ||
            (tipo === 'Vidro' && draggedItemId === 'Vidro')) {

            // Adiciona o item à lista de itens na lixeira do tipo correspondente
            itensNaLixeira[grupo][tipo].push(draggedItemId);
            draggedItem.style.display = "none";

            // Verifica se todos os itens necessários do grupo D estão na lixeira correta
            if (itensNaLixeira['D']['Papel'].includes('Papel') &&
                itensNaLixeira['D']['Plastico'].includes('Plastico') &&
                itensNaLixeira['D']['Metal'].includes('Metal') &&
                itensNaLixeira['D']['Vidro'].includes('Vidro')) {
                mostrarParabens('Grupo D');
            }
        } else {
            showMessage("Que pena! Tente novamente.");
        }
    } else if (grupo === 'E') {
        // Lógica para o grupo E
        if ((draggedItemId === "SobrasAlimentos" || draggedItemId === "Caneta" || draggedItemId === "Lapiseira" || draggedItemId === "LabAnalisesClinicas") && tipo === "LixeiraBranca") {
            // Verifica se o item arrastado é permitido no grupo E, exceto "Laboratório de Análises Clínicas"
            if (draggedItemId === "LabAnalisesClinicas") {
                showMessage("Que pena! Tente novamente.");
            } else {
                // Adiciona o item à lista de itens na lixeira do grupo E
                itensNaLixeira[grupo].push(draggedItemId);
                draggedItem.style.display = "none";
    
                // Verifica se todos os itens necessários do grupo E foram descartidos corretamente
                if (itensNaLixeira['E'].includes("SobrasAlimentos") && itensNaLixeira['E'].includes("Caneta") && itensNaLixeira['E'].includes("Lapiseira")) {
                    mostrarParabens('Grupo E');
                }
            }
        } else {
            showMessage("Que pena! Tente novamente.");
        }
    } else if (grupo === 'F') {
        // Lógica para o grupo F
        if (draggedItemId === "Escalpe" || draggedItemId === "LaminasBisturi" || draggedItemId === "Agulha") {
            // Adiciona o item à lista de itens na lixeira do grupo F
            itensNaLixeira[grupo].push(draggedItemId);
            draggedItem.style.display = "none";

            // Verifica se todos os itens necessários do grupo F foram descartidos corretamente
            if (itensNaLixeira['F'].includes("Escalpe") && itensNaLixeira['F'].includes("LaminasBisturi") && itensNaLixeira['F'].includes("Agulha")) {
                mostrarParabens('Grupo F');
            }
        } else {
            showMessage("Que pena! Tente novamente.");
        }
    }else {
        // Lógica para os grupos A, B e C
        itensNaLixeira[grupo].push(draggedItemId);

        // Verifica se todos os itens necessários do grupo A foram descartidos corretamente
        if (grupo === 'A' && itensNaLixeira['A'].includes("item2") && itensNaLixeira['A'].includes("item3") && itensNaLixeira['A'].includes("item4")) {
            mostrarParabens('Grupo A');
        }

        // Verifica se todos os itens necessários do grupo B foram descartidos corretamente
        if (grupo === 'B' && itensNaLixeira['B'].includes("item6") && itensNaLixeira['B'].includes("item7")) {
            mostrarParabens('Grupo B');
        }

        // Verifica se todos os itens necessários do grupo C foram descartidos corretamente
        if (grupo === 'C' && itensNaLixeira['C'].includes("item10") && itensNaLixeira['C'].includes("item11") && itensNaLixeira['C'].includes("item12")) {
            mostrarParabens('Grupo C');
        }

        // Verifica se o item arrastado é da lista correta
        if ((grupo === 'A' && (draggedItemId === "item2" || draggedItemId === "item3" || draggedItemId === "item4")) ||
            (grupo === 'B' && (draggedItemId === "item6" || draggedItemId === "item7")) ||
            (grupo === 'C' && (draggedItemId === "item10" || draggedItemId === "item11" || draggedItemId === "item12")) ||
            (grupo === 'F' && (draggedItemId === "Escalpe" || draggedItemId === "LaminasBisturi" || draggedItemId === "Agulha"))) {
            draggedItem.style.display = "none";
        } else {
            showMessage("Que pena! Tente novamente.");
        }

    }

}


function mostrarParabens() {
    // Exibe o texto de parabéns
    var parabensText = document.createElement("p");
    parabensText.textContent = "Parabéns! Você aprendeu bem sobre o assunto! Continue jogando para aprimorar seus conhecimentos.";
    parabensText.style.position = "fixed";
    parabensText.style.bottom = "10%"; // Posiciona o texto na parte inferior da página com um pequeno espaço
    parabensText.style.left = "58%";
    parabensText.style.transform = "translate(-50%, 0)";
    parabensText.style.zIndex = "9999"; // Prioridade maior para que fique sobreposta à imagem
    parabensText.style.color = "#000000"; // Cor do texto preta
    parabensText.style.fontSize = "24px"; // Tamanho da fonte aumentado
    parabensText.style.fontWeight = "bold"; // Negrito
    parabensText.style.textAlign = "left"; // Alinhamento centralizado
    document.body.appendChild(parabensText);

    // Exibe a imagem de parabéns
    var parabensImg = document.createElement("img");
    parabensImg.src = "../../images/photoshop/Carlos.png";
    parabensImg.alt = "";
    parabensImg.style.position = "fixed";
    parabensImg.style.bottom = "0"; // Posiciona a imagem na parte inferior da página
    parabensImg.style.left = "50%";
    parabensImg.style.transform = "translateX(-50%)";
    parabensImg.style.zIndex = "9998"; // Prioridade menor para que fique abaixo do texto
    parabensImg.style.width = "100%"; // Define a largura da imagem
    parabensImg.style.height = "auto"; // Define a altura proporcionalmente
    parabensImg.style.cursor = "pointer"; // Define o cursor como ponteiro para indicar que a imagem é clicável
    document.body.appendChild(parabensImg);

    // Adiciona um evento de clique à imagem para remover o texto e a imagem e restaurar a página ao normal
    parabensImg.addEventListener("click", function () {
        document.body.removeChild(parabensText);
        document.body.removeChild(parabensImg);
        document.body.removeChild(blurOverlay);
        document.body.style.overflow = "auto"; // Restaura a rolagem da página
    });

    // Adiciona um elemento de sobreposição com blur para o fundo
    var blurOverlay = document.createElement("div");
    blurOverlay.style.position = "fixed";
    blurOverlay.style.top = "0";
    blurOverlay.style.left = "0";
    blurOverlay.style.width = "100%";
    blurOverlay.style.height = "100%";
    blurOverlay.style.background = "rgba(255, 255, 255, 0.5)"; // Cor de fundo com opacidade para efeito de desfoque
    blurOverlay.style.backdropFilter = "blur(5px)"; // Aplica o efeito de desfoque
    blurOverlay.style.zIndex = "9997"; // Garante que a sobreposição fique abaixo do texto e da imagem de parabéns
    document.body.appendChild(blurOverlay);
}

function showMessage(message) {
    var messageDiv = document.getElementById("message");
    messageDiv.textContent = message;
    messageDiv.style.color = "red";
}
