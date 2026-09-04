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
                image: "https://unsplash.com" // Mulher a caminhar em direção à luz/amanhecer
            },
            {
                id: "02",
                name: "O Véu Rasgado",
