html<!DOCTYPE html>
<html lang="pt-PT">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>A Voz da Alma — Oráculo de Maria Madalena</title>
    <style>
        body {
            font-family: 'Georgia', serif;
            background-color: #fcf9f2; /* Tom creme/editorial suave conforme o livro */
            color: #3a322d;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        .container {
            text-align: center;
            max-width: 650px;
            width: 100%;
        }

        h1 {
            color: #8c2d38; /* Vinho/Rosa místico elegante */
            font-size: 28px;
            font-weight: normal;
            letter-spacing: 1px;
            margin-bottom: 5px;
        }

        .subtitle {
            font-style: italic;
            color: #706259;
            margin-bottom: 25px;
            font-size: 15px;
        }

        .intro-text {
            font-size: 15px;
            line-height: 1.6;
            color: #544941;
            margin-bottom: 30px;
            padding: 0 20px;
        }

        button {
            padding: 14px 35px;
            font-size: 15px;
            font-family: 'Georgia', serif;
            background-color: #8c2d38;
            color: #fcf9f2;
            border: none;
            border-radius: 2px;
            cursor: pointer;
            transition: all 0.4s ease;
            letter-spacing: 1px;
            box-shadow: 0 4px 10px rgba(140, 45, 56, 0.15);
        }

        button:hover {
            background-color: #6b2029;
            box-shadow: 0 6px 15px rgba(140, 45, 56, 0.25);
        }

        /* Estrutura da Carta */
        .card-container {
            width: 240px;
            height: 380px;
            perspective: 1000px;
            margin: 40px auto;
        }

        .card {
            width: 100%;
            height: 100%;
            position: relative;
            transform-style: preserve-3d;
            transition: transform 0.9s cubic-bezier(0.25, 0.8, 0.25, 1);
        }

        .card.flipped {
            transform: rotateY(180deg);
        }

        .card-face {
            position: absolute;
            width: 100%;
            height: 100%;
            backface-visibility: hidden;
            border-radius: 8px;
            box-shadow: 0 6px 20px rgba(58, 50, 45, 0.15);
            border: 1px solid #e3dac9;
            box-sizing: border-box;
        }

        /* Verso com padrão floral místico (Rosa de Maria Madalena) */
        .card-back {
            background: #8c2d38 url('https://unsplash.com') center/cover;
            border: 6px solid #fcf9f2;
            box-shadow: inset 0 0 40px rgba(0,0,0,0.3);
        }

        /* Frente revelada */
        .card-front {
            transform: rotateY(180deg);
            background-color: #fff;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            overflow: hidden;
        }

        .card-front img {
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        /* Painel Editorial de Conteúdo */
        .meaning-panel {
            max-width: 580px;
            margin: 0 auto;
            text-align: left;
            background: #fff;
            padding: 30px;
            border-radius: 4px;
            border: 1px solid #e6dfd3;
            opacity: 0;
            transform: translateY(15px);
            transition: all 0.6s ease;
            box-shadow: 0 4px 12px rgba(0,0,0,0.03);
        }

        .meaning-panel.show {
            opacity: 1;
            transform: translateY(0);
        }

        .card-header-meta {
            text-transform: uppercase;
            font-size: 12px;
            letter-spacing: 2px;
            color: #a89485;
            margin-bottom: 5px;
        }

        .card-title {
            color: #8c2d38;
            font-size: 24px;
            font-weight: normal;
            margin: 0 0 15px 0;
            border-bottom: 1px solid #f2ece1;
            padding-bottom: 10px;
        }

        .section-title {
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 1px;
            color: #8c2d38;
            margin: 20px 0 5px 0;
            font-weight: bold;
        }

        .card-text {
            font-size: 15px;
            line-height: 1.6;
            margin: 0 0 10px 0;
            color: #4a4038;
        }

        .meta-tags {
            font-size: 13px;
            font-style: italic;
            color: #6e6055;
            background: #fdfbf7;
            padding: 8px 12px;
            border-left: 2px solid #8c2d38;
            margin-top: 15px;
        }
    </style>
</head>
<body>

    <div class="container">
        <h1>A Voz da Alma</h1>
        <div class="subtitle">Oráculo de Maria Madalena</div>
        
        <p class="intro-text">
            “A Alma não responde à pressa. Ela revela-se à presença.”<br>
            Antes de tirar a sua carta, respire fundo, acalme a mente e pergunte em silêncio:<br>
            <strong>«O que a minha Alma precisa de recordar hoje?»</strong>
        </p>
        
        <button onclick="drawOracleCard()">Escutar a Alma</button>

        <div class="card-container">
            <div class="card" id="oracleCard">
                <div class="card-face card-back"></div>
                <div class="card-face card-front">
                    <img id="cardImage" src="" alt="Carta do Oráculo">
                </div>
            </div>
        </div>

        <div class="meaning-panel" id="meaningPanel">
            <div class="card-header-meta" id="cardIndex">CARTA 01</div>
            <h2 class="card-title" id="cardName">O Chamado</h2>
            
            <div class="section-title">Mensagem Essencial</div>
            <p class="card-text" id="cardMsg"></p>
            
            <div class="section-title">A Voz de Maria Madalena</div>
            <p class="card-text" id="cardMadalena" style="font-style: italic;"></p>
            
            <div class="section-title">Ritual de Integração</div>
            <p class="card-text" id="cardRitual"></p>

            <div class="section-title">Para o teu Diário da Alma</div>
            <p class="card-text" id="cardJournal" style="color: #615349;"></p>
            
            <div class="meta-tags" id="cardMeta"></div>
        </div>
    </div>

    <script>
        // Base de dados estruturada a partir do PDF fornecido
        const voiceOfSoulDeck = [
            {
                id: "01",
                name: "O Chamado",
                msg: "O início da jornada. Uma inquietação subtil anuncia que já não podes continuar a viver contra aquilo que sabes ser verdadeiro.",
                madalena: "Não te pede respostas imediatas. Pede disponibilidade para escutar o primeiro movimento interior.",
                ritual: "Acende uma vela e escreve uma frase que comece por: 'A minha Alma está a chamar-me para…'. Lê-a em silêncio.",
                journal: "O que está a nascer em mim? O que tenho adiado ouvir? Qual é o primeiro passo honesto?",
                keyword: "Chamamento",
                energy: "Início • Intuição • Coragem",
                image: "https://unsplash.com"
            },
            {
                id: "02",
                name: "O Véu Rasgado",
                msg: "A verdade aparece por baixo de uma narrativa que já não consegue sustentar-se. Ver pode doer, mas também devolve liberdade.",
                madalena: "Esta carta pede clareza sem dramatização. Observa o que mudou no teu olhar e não aquilo que gostarias que fosse diferente.",
                ritual: "Escreve uma situação sobre a qual tens dúvidas. Divide a folha em 'o que sei' e 'o que imagino'.",
                journal: "Que verdade tenho evitado? Que ilusão já não preciso proteger?",
                keyword: "Clareza",
                energy: "Revelação • Discernimento • Liberdade",
                image: "https://unsplash.com"
            },
            {
                id: "03",
                name: "A Lembrança",
                msg: "Há conhecimentos, desejos e formas de estar que parecem regressar de dentro, como se a vida apenas te devolvesse algo que já conhecias.",
                madalena: "Não confundas lembrança interior com obrigação. Recordar é reconhecer; escolher continua a ser teu.",
                ritual: "Fecha os olhos durante três minutos e recorda um momento em que te sentiste profundamente tu mesma. Escreve o que estava presente.",
                journal: "O que em mim permanece apesar das mudanças? Que parte de mim quero recuperar?",
                keyword: "Reconhecimento",
                energy: "Memória • Essência • Regresso",
                image: "https://unsplash.com"
            },
            {
                id: "04",
                name: "A Centelha",
                msg: "Nem toda a transformação começa com um acontecimento enorme. Às vezes começa com uma ideia, uma vontade ou uma coragem minúscula.",
                madalena: "Protege a centelha sem exigir que ela seja já uma fogueira. O que é pequeno também pode ser decisivo.",
                ritual: "Escolhe uma ação de quinze minutos que dê forma ao que quer nascer. Faz apenas essa ação.",
                journal: "Que ideia insiste em voltar? O que posso começar hoje sem esperar perfeição?",
                keyword: "Início",
                energy: "Inspiração • Movimento • Possibilidade",
                image: "https://unsplash.com"
            },
            {
                id: "05",
                name: "A Escolha",
                msg: "Escolher é deixar de viver apenas em função das possibilidades e assumir uma direção. Toda escolha verdadeira contém renúncia.",
                madalena: "Não procures a opção que elimina todo o risco. Procura a que está mais alinhada com a mulher que queres ser.",
                ritual: "Desenha dois caminhos. Em cada um escreve: 'se eu escolher isto, quem me torno?'. Observa sem julgar.",
                journal: "Que decisão estou a adiar? O que já sei, apesar do medo?",
                keyword: "Decisão",
                energy: "Liberdade • Responsabilidade • Direção",
                image: "https://unsplash.com"
            },
            {
                id: "06",
                name: "A Filha do Fogo",
                msg: "A paixão sagrada e a tua força interna procuram expressão. Deixa que a tua intensidade cure em vez de ocultar.",
                madalena: "O fogo interno foi feito para iluminar o teu caminho, nunca para te consumir.",
                ritual: "Dança livremente no teu espaço por 5 minutos, libertando a energia acumulada.",
                journal: "Onde estou a reter a minha paixão e o meu poder por medo do julgamento?",
                keyword: "Intensidade",
                energy: "Poder • Expressão • Vitalidade",
                image: "https://unsplash.com"
            },
            {
                id: "07",
                name: "O Silêncio do Deserto",
                msg: "Afasta-te do ruído das opiniões alheias. É na aparente nudez do deserto que a tua voz mais pura se revela.",
                madalena: "Não temas o vazio. O deserto não é a ausência de vida, é o berço da revelação.",
                ritual: "Permanece 10 minutos em silêncio absoluto, apenas a focar na tua respiração.",
                journal: "De que distrações me estou a rodear para não escutar a minha verdade?",
                keyword: "Isolamento",
                energy: "Paz • Presença • Escuta",
                image: "https://unsplash.com"
            },
            {
                id: "08",
                name: "O Perfume do Bálsamo",
                msg: "Chegou o momento de ungir as tuas próprias feridas. O cuidado e a autocompaixão são os teus maiores remédios.",
                madalena: "Derrama amor sobre a tua história. A cura começa no instante em que deixas de te condenar.",
                ritual: "Massaja as tuas mãos com um óleo ou creme perfumado, agradecendo ao teu corpo.",
                journal: "Que parte da minha história ou dor ainda necessita do meu perdão?",
                keyword: "Nutrição",
                energy: "Cura • Compaixão • Suavidade",
                image: "https://unsplash.com"
            },
            {
                id: "09",
                name: "A Estrela da Manhã",
                msg: "Uma nova esperança desponta no teu horizonte. A noite escura da alma está a dar lugar a um novo amanhecer.",
                madalena: "Olha para a frente com esperança. O teu brilho não depende da aprovação do mundo.",
                ritual: "Abre a janela ao acordar, respira o ar puro e estica os braços em direção ao céu.",
                journal: "Que nova perspetiva ou recomeço está a querer iluminar a minha vida?",
                keyword: "Esperança",
                energy: "Renovação • Fé • Luz",
                image: "https://unsplash.com"
            },
            {
                id: "10",
                name: "O Altar Interior",
                msg: "O teu coração é um espaço sagrado. Santifica os teus desejos e honra o teu próprio templo.",
                madalena: "Nenhum templo exterior tem mais valor do que a habitação divina em ti.",
                ritual: "Coloca um pequeno objeto que represente a tua essência num lugar de destaque na tua casa.",
                journal: "Tenho tratado as minhas necessidades com a reverência que elas merecem?",
                keyword: "Devoção",
                energy: "Sacralidade • Respeito • Centro",
                image: "https://unsplash.com"
            },
            {
                id: "11",
                name: "O Espinho da Rosa",
                msg: "Dificuldades e dores fazem parte do crescimento. O espinho protege a beleza que está a florescer.",
                madalena: "Não rejeites o teu sofrimento; ele é a casca protetora da tua sabedoria futura.",
                ritual: "Segura algo áspero nas mãos e medita sobre como superaste desafios passados.",
                journal: "Que barreira ou dor atual posso transformar em resiliência e proteção?",
                keyword: "Proteção",
                energy: "Resistência • Limites • Evolução",
                image: "https://unsplash.com"
            },
            {
                id: "12",
                name: "A Água Viva",
                msg: "Permite que as tuas emoções fluam livremente. Limpa o que está estagnado e deixa a intuição renovar-te.",
                madalena: "A alma rígida quebra. Sê como a água, que contorna os obstáculos e purifica a terra.",
                ritual: "Bebe um copo de água calmamente, mentalizando a purificação das tuas mágoas.",
                journal: "Que sentimentos tenho tentado conter ou esconder que precisam de ser chorados ou expressos?",
                keyword: "Fluidez",
                energy: "Purificação • Emoção • Renovação",
                image: "https://unsplash.com"
            },
            {
                id: "13",
                name: "O Sudário Exposto",
                msg: "O tempo do luto e da dor chegou ao fim. É hora de deixar para trás as vestes do passado e renascer.",
                madalena: "Não procures entre os mortos aquela que já ressuscitou. Liberta o que terminou.",
                ritual: "Escreve um hábito antigo num papel e rasga-o, decretando o fim desse ciclo.",
