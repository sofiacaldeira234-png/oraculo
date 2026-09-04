// Elementos do DOM
const singleCardBtn = document.getElementById('singleCardBtn');
const threeCardBtn = document.getElementById('threeCardBtn');
const fiveCardBtn = document.getElementById('fiveCardBtn');
const resetBtn = document.getElementById('resetBtn');
const deckVisual = document.getElementById('deckVisual');
const cardsDisplay = document.getElementById('cardsDisplay');
const cardDetail = document.getElementById('cardDetail');

// Estado da aplicação
let currentCards = [];
let selectedCardId = null;

// Event Listeners
singleCardBtn.addEventListener('click', () => drawCards(1));
threeCardBtn.addEventListener('click', () => drawCards(3));
fiveCardBtn.addEventListener('click', () => drawCards(5));
resetBtn.addEventListener('click', resetConsultation);
deckVisual.addEventListener('click', () => {
    if (currentCards.length > 0) {
        revealNextCard();
    }
});

// Função para tirar cartas aleatórias
function drawCards(numberOfCards) {
    // Limpar estado anterior
    currentCards = [];
    selectedCardId = null;
    cardsDisplay.innerHTML = '';
    cardDetail.classList.add('hidden');
    
    // Selecionar cartas aleatórias
    const shuffled = [...cardsData].sort(() => Math.random() - 0.5);
    currentCards = shuffled.slice(0, numberOfCards);
    
    // Mostrar baralho com instrução
    deckVisual.innerHTML = '<div class="card-back">🔮 Clique para revelar</div>';
    
    // Mostrar placeholder das cartas
    currentCards.forEach((card, index) => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card-item';
        cardElement.dataset.cardId = card.id;
        cardElement.innerHTML = `<div class="card-number">Carta ${index + 1}</div><div class="card-name">?</div>`;
        cardElement.addEventListener('click', () => selectCard(card.id));
        cardsDisplay.appendChild(cardElement);
    });
}

// Função para revelar a próxima carta
function revealNextCard() {
    const unrevealed = currentCards.filter(card => {
        const cardElement = document.querySelector(`[data-card-id="${card.id}"]`);
        return cardElement && !cardElement.classList.contains('active');
    });
    
    if (unrevealed.length > 0) {
        const cardToReveal = unrevealed[0];
        selectCard(cardToReveal.id);
    }
}

// Função para selecionar e exibir detalhes de uma carta
function selectCard(cardId) {
    const card = cardsData.find(c => c.id === cardId);
    if (!card) return;
    
    // Atualizar visual da carta
    const cardElement = document.querySelector(`[data-card-id="${cardId}"]`);
    if (cardElement) {
        cardElement.classList.add('active');
        cardElement.innerHTML = `<div class="card-number">Carta ${card.id}</div><div class="card-name">${card.name}</div>`;
    }
    
    // Mostrar detalhes
    displayCardDetail(card);
    selectedCardId = cardId;
}

// Função para exibir detalhes completos da carta
function displayCardDetail(card) {
    cardDetail.innerHTML = `
        <div class="card-header-meta">CARTA ${card.id}</div>
        <h2 class="card-title">${card.name}</h2>
        
        <div class="section-title">Mensagem Essencial</div>
        <p class="card-text">${card.msg}</p>
        
        <div class="section-title">A Voz de Maria Madalena</div>
        <p class="card-text madalena">${card.madalena}</p>
        
        <div class="section-title">Ritual de Integração</div>
        <p class="card-text">${card.ritual}</p>

        <div class="section-title">Para o teu Diário da Alma</div>
        <p class="card-text">${card.journal}</p>
        
        <div class="meta-tags">
            <strong>Palavra-chave:</strong> ${card.keyword}<br>
            <strong>Energia:</strong> ${card.energy}
        </div>
    `;
    
    cardDetail.classList.remove('hidden');
    
    // Scroll para o detalhe
    setTimeout(() => {
        cardDetail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);
}

// Função para resetar a consulta
function resetConsultation() {
    currentCards = [];
    selectedCardId = null;
    cardsDisplay.innerHTML = '';
    cardDetail.classList.add('hidden');
    deckVisual.innerHTML = '<div class="card-back">🔮</div>';
}
