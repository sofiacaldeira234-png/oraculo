// Array de respostas do oráculo
const oracleResponses = [
    // Positivas
    "Sim, com certeza!",
    "O destino sorri para si",
    "Definitivamente",
    "As estrelas apontam para sim",
    "Será abençoado",
    "Tudo indica que sim",
    "O caminho está aberto",
    "Sua vontade triunfará",
    "Sucesso garantido",
    "Acredite e verá",
    
    // Negativas
    "Não, o momento não é apropriado",
    "O caminho está fechado",
    "Não é o destino",
    "As forças não o acompanham",
    "Ainda não é o tempo",
    "Reconsidere seus passos",
    "O não reina nesta questão",
    "Espere o momento certo",
    "Não é o seu sino que toca",
    "O universo diz que não",
    
    // Neutras/Misteriosas
    "Talvez... o tempo dirá",
    "O futuro é incerto",
    "Não é claro ainda",
    "Depende de suas escolhas",
    "O mistério permanece",
    "Concentrate-se melhor e repita",
    "As respostas virão em sonhos",
    "Consulte novamente quando o coração estiver calmo",
    "O oráculo guarda este segredo",
    "Medite sobre isto",
    "Nem tudo é dado conhecer",
    "A resposta já reside em si",
    "Procure dentro, não fora",
    "O tempo revelará a verdade",
    "Ouça a voz interior",
    
    // Cómicas
    "Peça ao oráculo da batata 🥔",
    "Apenas se beber água abençoada",
    "Sim, se acreditar muito forte",
    "Pergunta demasiado fácil para o oráculo",
    "Volta quando tiveres uma pergunta verdadeira",
    "O meu cristal está embaciado...",
    "Que tal café primeiro? ☕",
    "Repita, não estava a ouvir",
    "Essa pergunta já foi feita há eras",
    "Simmmm (às vezes)",
];

// Elementos do DOM
const oracleSphere = document.getElementById('oracleSphere');
const answerBox = document.getElementById('answerBox');
const answerText = document.getElementById('answerText');
const questionInput = document.getElementById('questionInput');
const askButton = document.getElementById('askButton');
const historyList = document.getElementById('historyList');

// Histórico de perguntas
let questionHistory = [];

// Função para obter resposta aleatória
function getRandomResponse() {
    return oracleResponses[Math.floor(Math.random() * oracleResponses.length)];
}

// Função para mostrar resposta do oráculo
function showAnswer(question) {
    if (!question.trim()) {
        answerText.textContent = "Faça uma pergunta ao oráculo...";
        return;
    }

    // Animação da esfera
    oracleSphere.style.animation = 'none';
    setTimeout(() => {
        oracleSphere.style.animation = 'pulse 1s ease-in-out infinite';
    }, 10);

    // Mostrar "pensando"
    answerText.textContent = "O oráculo pensa...";
    answerBox.classList.add('thinking');

    // Simular tempo de espera (2 segundos)
    setTimeout(() => {
        const response = getRandomResponse();
        answerText.textContent = `"${response}"`;
        answerBox.classList.remove('thinking');

        // Adicionar ao histórico
        addToHistory(question, response);
    }, 2000);
}

// Função para adicionar pergunta ao histórico
function addToHistory(question, response) {
    // Limitar histórico a 10 perguntas
    if (questionHistory.length >= 10) {
        questionHistory.shift();
    }

    questionHistory.push({ question, response });
    updateHistoryUI();
}

// Função para atualizar o UI do histórico
function updateHistoryUI() {
    historyList.innerHTML = '';

    if (questionHistory.length === 0) {
        historyList.innerHTML = '<li class="empty">Sem perguntas ainda...</li>';
        return;
    }

    questionHistory.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `<strong>P:</strong> ${item.question}<br><strong>R:</strong> ${item.response}`;
        historyList.appendChild(li);
    });
}

// Event listeners
askButton.addEventListener('click', () => {
    const question = questionInput.value;
    if (question.trim()) {
        showAnswer(question);
        questionInput.value = '';
        questionInput.focus();
    }
});

// Permitir Enter para enviar
questionInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const question = questionInput.value;
        if (question.trim()) {
            showAnswer(question);
            questionInput.value = '';
        }
    }
});

// Clicar na esfera também funciona
oracleSphere.addEventListener('click', () => {
    const question = questionInput.value;
    if (question.trim()) {
        showAnswer(question);
        questionInput.value = '';
        questionInput.focus();
    } else {
        answerText.textContent = "Você precisa fazer uma pergunta primeiro! 🔮";
    }
});

// Focus no input ao carregar
window.addEventListener('load', () => {
    questionInput.focus();
});
