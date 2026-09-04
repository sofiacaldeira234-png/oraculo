// Base de dados das 37 cartas com textos completos
const cardsData = [
    {
        id: "01",
        name: "O Chamado",
        msg: "O início da jornada. Uma inquietação subtil anuncia que já não podes continuar a viver contra aquilo que sabes ser verdadeiro.",
        madalena: "Não te pede respostas imediatas. Pede disponibilidade para escutar o primeiro movimento interior.",
        ritual: "Acende uma vela e escreve uma frase que comece por: 'A minha Alma está a chamar-me para…'. Lê-a em silêncio.",
        journal: "O que está a nascer em mim? O que tenho adiado ouvir? Qual é o primeiro passo honesto?",
        keyword: "Chamamento",
        energy: "Início • Intuição • Coragem"
    },
    {
        id: "02",
        name: "O Véu Rasgado",
        msg: "A verdade aparece por baixo de uma narrativa que já não consegue sustentar-se. Ver pode doer, mas também devolve liberdade.",
        madalena: "Esta carta pede clareza sem dramatização. Observa o que mudou no teu olhar e não aquilo que gostarias que fosse diferente.",
        ritual: "Escreve uma situação sobre a qual tens dúvidas. Divide a folha em 'o que sei' e 'o que imagino'.",
        journal: "Que verdade tenho evitado? Que ilusão já não preciso proteger?",
        keyword: "Clareza",
        energy: "Revelação • Discernimento • Liberdade"
    },
    {
        id: "03",
        name: "A Lembrança",
        msg: "Há conhecimentos, desejos e formas de estar que parecem regressar de dentro, como se a vida apenas te devolvesse algo que já conhecias.",
        madalena: "Não confundas lembrança interior com obrigação. Recordar é reconhecer; escolher continua a ser teu.",
        ritual: "Fecha os olhos durante três minutos e recorda um momento em que te sentiste profundamente tu mesma. Escreve o que estava presente.",
        journal: "O que em mim permanece apesar das mudanças? Que parte de mim quero recuperar?",
        keyword: "Reconhecimento",
        energy: "Memória • Essência • Regresso"
    },
    {
        id: "04",
        name: "A Centelha",
        msg: "Nem toda a transformação começa com um acontecimento enorme. Às vezes começa com uma ideia, uma vontade ou uma coragem minúscula.",
        madalena: "Protege a centelha sem exigir que ela seja já uma fogueira. O que é pequeno também pode ser decisivo.",
        ritual: "Escolhe uma ação de quinze minutos que dê forma ao que quer nascer. Faz apenas essa ação.",
        journal: "Que ideia insiste em voltar? O que posso começar hoje sem esperar perfeição?",
        keyword: "Início",
        energy: "Inspiração • Movimento • Possibilidade"
    },
    {
        id: "05",
        name: "A Escolha",
        msg: "Escolher é deixar de viver apenas em função das possibilidades e assumir uma direção. Toda escolha verdadeira contém renúncia.",
        madalena: "Não procures a opção que elimina todo o risco. Procura a que está mais alinhada com a mulher que queres ser.",
        ritual: "Desenha dois caminhos. Em cada um escreve: 'se eu escolher isto, quem me torno?'. Observa sem julgar.",
        journal: "Que decisão estou a adiar? O que já sei, apesar do medo?",
        keyword: "Decisão",
        energy: "Liberdade • Responsabilidade • Direção"
    },
    {
        id: "06",
        name: "A Filha do Fogo",
        msg: "A paixão sagrada e a tua força interna procuram expressão. Deixa que a tua intensidade cure em vez de ocultar.",
        madalena: "O fogo interno foi feito para iluminar o teu caminho, nunca para te consumir.",
        ritual: "Dança livremente no teu espaço por 5 minutos, libertando a energia acumulada.",
        journal: "Onde estou a reter a minha paixão e o meu poder por medo do julgamento?",
        keyword: "Intensidade",
        energy: "Poder • Expressão • Vitalidade"
    },
    {
        id: "07",
        name: "O Silêncio do Deserto",
        msg: "Afasta-te do ruído das opiniões alheias. É na aparente nudez do deserto que a tua voz mais pura se revela.",
        madalena: "Não temas o vazio. O deserto não é a ausência de vida, é o berço da revelação.",
        ritual: "Permanece 10 minutos em silêncio absoluto, apenas a focar na tua respiração.",
        journal: "De que distrações me estou a rodear para não escutar a minha verdade?",
        keyword: "Isolamento",
        energy: "Paz • Presença • Escuta"
    },
    {
        id: "08",
        name: "O Perfume do Bálsamo",
        msg: "Chegou o momento de ungir as tuas próprias feridas. O cuidado e a autocompaixão são os teus maiores remédios.",
        madalena: "Derrama amor sobre a tua história. A cura começa no instante em que deixas de te condenar.",
        ritual: "Massaja as tuas mãos com um óleo ou creme perfumado, agradecendo ao teu corpo.",
        journal: "Que parte da minha história ou dor ainda necessita do meu perdão?",
        keyword: "Nutrição",
        energy: "Cura • Compaixão • Suavidade"
    },
    {
        id: "09",
        name: "A Estrela da Manhã",
        msg: "Uma nova esperança desponta no teu horizonte. A noite escura da alma está a dar lugar a um novo amanhecer.",
        madalena: "Olha para a frente com esperança. O teu brilho não depende da aprovação do mundo.",
        ritual: "Abre a janela ao acordar, respira o ar puro e estica os braços em direção ao céu.",
        journal: "Que nova perspetiva ou recomeço está a querer iluminar a minha vida?",
        keyword: "Esperança",
        energy: "Renovação • Fé • Luz"
    },
    {
        id: "10",
        name: "O Altar Interior",
        msg: "O teu coração é um espaço sagrado. Santifica os teus desejos e honra o teu próprio templo.",
        madalena: "Nenhum templo exterior tem mais valor do que a habitação divina em ti.",
        ritual: "Coloca um pequeno objeto que represente a tua essência num lugar de destaque na tua casa.",
        journal: "Tenho tratado as minhas necessidades com a reverência que elas merecem?",
        keyword: "Devoção",
        energy: "Sacralidade • Respeito • Centro"
    },
    {
        id: "11",
        name: "O Espinho da Rosa",
        msg: "Dificuldades e dores fazem parte do crescimento. O espinho protege a beleza que está a florescer.",
        madalena: "Não rejeites o teu sofrimento; ele é a casca protetora da tua sabedoria futura.",
        ritual: "Segura algo áspero nas mãos e medita sobre como superaste desafios passados.",
        journal: "Que barreira ou dor atual posso transformar em resiliência e proteção?",
        keyword: "Proteção",
        energy: "Resistência • Limites • Evolução"
    },
    {
        id: "12",
        name: "A Água Viva",
        msg: "Permite que as tuas emoções fluam livremente. Limpa o que está estagnado e deixa a intuição renovar-te.",
        madalena: "A alma rígida quebra. Sê como a água, que contorna os obstáculos e purifica a terra.",
        ritual: "Bebe um copo de água calmamente, mentalizando a purificação das tuas mágoas.",
        journal: "Que sentimentos tenho tentado conter ou esconder que precisam de ser chorados ou expressos?",
        keyword: "Fluidez",
        energy: "Purificação • Emoção • Renovação"
    },
    {
        id: "13",
        name: "O Sudário Exposto",
        msg: "O tempo do luto e da dor chegou ao fim. É hora de deixar para trás as velhas vestes do passado e permitir-se renascer.",
        madalena: "Não procures entre os mortos aquela que já ressuscitou. Liberta o que terminou.",
        ritual: "Escreve um hábito antigo ou mágoa num papel e rasga-o, decretando o fim definitivo desse ciclo.",
        journal: "A que dores ou passados que já cumpriram o seu propósito continuo a apegar-me?",
        keyword: "Libertação",
        energy: "Encerramento • Renascimento • Passagem"
    },
    {
        id: "14",
        name: "A Linhagem Real",
        msg: "Carregas em ti a herança, a força e a sabedoria de todas as mulheres que vieram antes de ti. A tua força é ancestral.",
        madalena: "Caminhas com o apoio de uma multidão invisível. Honra as tuas raízes femininas.",
        ritual: "Diz em voz alta o nome das tuas abós e mães, agradecendo pela vida e pela força herdada.",
        journal: "Que padrões da minha linhagem quero curar e que forças quero honrar a partir de hoje?",
        keyword: "Ancestralidade",
        energy: "Raízes • Pertence • Força"
    },
    {
        id: "15",
        name: "A Unção Sagrada",
        msg: "Reconhece o teu valor inestimável. Estás pronta para assumir o teu papel no mundo com total dignidade e respeito.",
        madalena: "Consagra-te ao teu propósito elevado. Foste escolhida para manifestar o amor na Terra.",
        ritual: "Coloca uma gota de perfume ou óleo essencial na testa e no peito, selando a tua auto-estima.",
        journal: "Estou a ocupar o meu espaço de direito ou continuo a diminuir-me para não incomodar os outros?",
        keyword: "Consagração",
        energy: "Dignidade • Valor • Propósito"
    },
    {
        id: "16",
        name: "O Encontro no Jardim",
        msg: "Uma revelação inesperada aguarda-te. O amor e o amparo que procuras manifestam-se nas formas mais simples do dia a dia.",
        madalena: "Abre os olhos para o presente. A resposta mística muitas vezes sussurra à luz do dia.",
        ritual: "Caminha descalça na terra ou na relva durante alguns minutos, ancorando a tua presença no agora.",
        journal: "Que milagres diários e pequenos sinais de apoio tenho ignorado devido à minha pressa?",
        keyword: "Revelação",
        energy: "Amor • Reencontro • Simplicidade"
    },
    {
        id: "17",
        name: "O Pote de Alabastro",
        msg: "Não economises o teu amor nem os teu dons. Entrega o que tens de mais precioso e autêntico ao mundo sem medos.",
        madalena: "O amor extravagante nunca é desperdício. Partilha a tua essência sem reservas.",
        ritual: "Faz um gesto de generosidade ou um elogio sincero a alguém hoje, sem esperar nada em troca.",
        journal: "Onde estou a ser avarenta com o meu afeto ou com a expressão dos meus talentos únicos?",
        keyword: "Generosidade",
        energy: "Entrega • Abundância • Afeto"
    },
    {
        id: "18",
        name: "A Voz Proibida",
        msg: "A tua verdade tem um poder imenso. Fala, posiciona-te e expressa-te, mesmo que a tua voz trema ou cause desconforto.",
        madalena: "Não silences a tua alma para manter uma falsa paz exterior.",
        ritual: "Olha-te fixamente nos olhos em frente ao espelho e diz em voz alta: 'A minha verdade tem valor.'",
        journal: "O que tenho calado ou engolido por medo de ser rejeitada, julgada ou incompreendida?",
        keyword: "Expressão",
        energy: "Voz • Verdade • Coragem"
    },
    {
        id: "19",
        name: "O Eclipse Lunar",
        msg: "Momento de olhar e acolher as tuas sombras. Aceita as tuas falhas e medos para que possas integrá-los na tua força.",
        madalena: "A sombra é apenas a ausência temporária de luz. Acolhe a tua totalidade sem julgamentos.",
        ritual: "Escreve num papel os teus três maiores medos ocultos e queima-o com cuidado numa superfície segura.",
        journal: "Que partes de mim continuo a rejeitar e a tentar esconder na escuridão por vergonha?",
        keyword: "Integração",
        energy: "Sombra • Aceitação • Totalidade"
    },
    {
        id: "20",
        name: "O Tecido de Ouro",
        msg: "A prosperidade espiritual e material está a tecer-se na tua vida neste momento. Reconhece a riqueza contida em ti.",
        madalena: "A verdadeira abundância nasce da conexão profunda com a tua Fonte Divina interior.",
        ritual: "Veste uma peça de roupa que adores ou usa um acessório especial que ative o teu sentimento de prosperidade.",
        journal: "Tenho agido e pensado a partir da mentalidade de escassez ou a partir do merecimento?",
        keyword: "Abundância",
        energy: "Merecimento • Riqueza • Manifestação"
    },
    {
        id: "21",
        name: "A Rosa Mística",
        msg: "O teu coração está pronto para desabrochar por completo. Abre-te à vulnerabilidade e ao fluxo do amor incondicional.",
        madalena: "O desabrochar pode ser lento, mas o perfume da tua alma é eterno e resiliente.",
        ritual: "Coloca uma rosa ou flor fresca num vaso perto de ti e observa o seu processo ao longo da semana.",
        journal: "Tenho o meu coração verdadeiramente aberto ao amor ou fechado com barreiras de autodefesa?",
        keyword: "Abertura",
        energy: "Vulnerabilidade • Desabrochar • Amor"
    },
    {
        id: "22",
        name: "A Caminhada Solitária",
        msg: "Há trechos da tua jornada que competem exclusivamente a ti. Confia plenamente na bússola que trazes no peito.",
        madalena: "Estar sozinha não significa desamparo; é o espaço sagrado onde te encontras com o Divino.",
        ritual: "Faz um pequeno passeio a pé sozinha, em completo silêncio e sem olhar para o telemóvel.",
        journal: "Consigo desfrutar da minha própria companhia ou fujo da solidão preenchendo o tempo com ruído?",
        keyword: "Autonomia",
        energy: "Independência • Confiança • Solidão"
    },
    {
        id: "23",
        name: "O Fogo Alquímico",
        msg: "Estás a atravessar um processo de purificação intensa. O que arde deixa espaço para que o teu ouro puro se revele.",
        madalena: "Permite que a transformação destrua as tuas ilusões para revelar a tua essência indestrutível.",
        ritual: "Olha fixamente para a chama de uma vela por dois minutos, entregando as tuas angústias ao fogo.",
        journal: "Que velhas estruturas, parcerias ou crenças na minha vida precisam de ser queimadas?",
        keyword: "Transmutação",
        energy: "Alquimia • Purificação • Mudança"
    },
    {
        id: "24",
        name: "A Sabedoria Oculta",
        msg: "As grandes respostas que procuras já estão guardadas na tua intuição mais profunda. É tempo de confiar no invisível.",
        madalena: "O conhecimento divino não se estuda com o intelecto; recorda-se na quietude do espírito.",
        ritual: "Coloca um caderno e uma caneta na mesa de cabeceira e regista os teus sonhos logo ao acordar.",
        journal: "Que mensagens a minha intuição profunda ou os meus sonhos têm tentado transmitir-me ultimamente?",
        keyword: "Intuição",
        energy: "Mistério • Sabedoria • Inconsciente"
    },
    {
        id: "25",
        name: "A Ponte de Luz",
        msg: "É hora de reconciliar opostos e restaurar a harmonia nas tuas relações. Perdoa para poderes caminhar leve.",
        madalena: "A ponte do perdão liberta tanto quem decide dar como quem recebe o ato.",
        ritual: "Mentaliza uma pessoa com quem tenhas um conflito ativo e envia-lhe silenciosamente um desejo sincero de paz.",
        journal: "Que laços partidos, mágoas antigas ou ressentimentos precisam hoje da minha energia de perdão?",
        keyword: "Perdão",
        energy: "Reconciliação • Harmonia • União"
    },
    {
        id: "26",
        name: "O Espelho Sagrado",
        msg: "O mundo exterior reflete com precisão o teu estado interno. O que te incomoda no outro revela algo que pede atenção em ti.",
        madalena: "Vê o outro com compaixão; ele é apenas o espelho das tuas próprias aprendizagens.",
        ritual: "Olha-te nos olhos em frente ao espelho por um minuto completo e repete: 'Eu acolho-te por inteiro.'",
        journal: "Que comportamentos ou características nos outros mais me irritam e onde é que eles habitam em mim?",
        keyword: "Reflexo",
        energy: "Espelho • Autoconhecimento • Projeção"
    },
    {
        id: "27",
        name: "O Manto Vermelho",
        msg: "Assume a tua autoridade pessoal e soberania espiritual. Encontras-te totalmente protegida contra energias densas.",
        madalena: "Cobre-te com o manto da fé e da verdade. Nenhuma força externa pode apagar o teu fogo sagrado.",
        ritual: "Envolve-te num xaile, lenço ou manta vermelha por uns instantes, visualizando um escudo dourado à tua volta.",
        journal: "Tenho sabido estabelecer limites claros para proteger a minha energia ou deixo-me desgastar?",
        keyword: "Soberania",
        energy: "Proteção • Poder • Autoridade"
    },
    {
        id: "28",
        name: "A Semente Oculta",
        msg: "O teu potencial mais elevado está guardado e seguro na terra escura. Espera com paciência o tempo certo de brotar.",
        madalena: "Não apresses o crescimento. O inverno da alma é estritamente necessário para nutrir as tuas raízes.",
        ritual: "Toca na terra de um vaso ou jardim com as tuas mãos, conectando-te com o tempo orgânico da natureza.",
        journal: "Que projetos, ideias ou transformações em mim estão em fase de gestação silenciosa e pedem tempo?",
        keyword: "Paciência",
        energy: "Gestação • Tempo • Potencial"
    },
    {
        id: "29",
        name: "O Abraço Eterno",
        msg: "Nunca estiveste sozinha na tua caminhada. O Amor Incondicional envolve a tua existência em todos os momentos.",
        madalena: "Descansa os teus fardos nos braços do Divino. O amor que tanto procuras lá fora sempre te possuiu por dentro.",
        ritual: "Cruza os braços sobre o peito e dá um abraço apertado a ti mesma, respirando de forma suave e grata.",
        journal: "Consigo sentir-me verdadeiramente amparada e amada pelo Universo mesmo nos meus dias de maior fraqueza?",
        keyword: "Amparo",
        energy: "Amor • Consolo • Proteção"
    },
    {
        id: "30",
        name: "O Fruto Maduro",
        msg: "Chegou o momento da colheita abundante. Celebra as tuas conquistas com orgulho e partilha a tua sabedoria acumulada.",
        madalena: "Saboreia os frutos colhidos do teu longo trabalho com profunda alegria e humildade.",
        ritual: "Come uma fruta ou alimento de forma totalmente consciente, agradecendo pelo sustento e nutrição.",
        journal: "Que vitórias pessoais, superações e amadurecimentos recentes merecem ser celebrados por mim hoje?",
        keyword: "Colheita",
        energy: "Celebração • Sucesso • Partilha"
    },
    {
        id: "31",
        name: "A Âncora da Terra",
        msg: "Encontra estabilidade e foco no teu corpo físico e no momento presente. Traz as tuas ideias elevadas para a realidade prática.",
        madalena: "O teu espírito habita um corpo vivo. Honra a tua matéria para que possas manifestar o divino na ação.",
        ritual: "Caminha pisando firmemente o chão de tua casa, sentindo a solidez e o suporte que a Terra te dá.",
        journal: "Tenho vivido demasiado perdida nos meus pensamentos e esquecido de aterrar e cuidar da minha saúde?",
        keyword: "Enraizamento",
        energy: "Estabilidade • Corpo • Realidade"
    },
    {
        id: "32",
        name: "O Voo da Pomba",
        msg: "A tua paz interior é o teu bem mais valioso. Liberta as tuas ansiedades antigas e confia no fluxo natural da vida.",
        madalena: "A paz verdadeira não depende das tempestades externas; ela nasce da tua capacidade de entrega.",
        ritual: "Inspira fundo e expira longamente pela boca aberta, visualizando o stress a abandonar os teus ombros.",
        journal: "O que me tem roubado a serenidade nos últimos dias e como posso entregar isso ao fluxo do Universo?",
        keyword: "Serenidade",
        energy: "Paz • Entrega • Leveza"
    },
    {
        id: "33",
        name: "A Taça Sagrada",
        msg: "Estás pronta para agir como um canal limpo de amor e cura. Cuida de encher o teu cálice interno primeiro para poderes transbordar.",
        madalena: "Só podes dar ao mundo aquilo que já cultivas em ti. Nutre a tua alma antes de servires os outros.",
        ritual: "Serve-te de uma infusão ou água com plena atenção, encarando esse momento como uma nutrição da tua alma.",
        journal: "Tenho esvaziado as minhas energias ao dar em demasia aos outros ou sei preservar o meu cálice sagrado?",
        keyword: "Recipiente",
        energy: "Nutrição • Serviço • Amor"
    },
    {
        id: "34",
        name: "O Selo do Pacto",
        msg: "Um compromisso sério e profundo com a tua própria evolução espiritual foi selado no teu peito. Não recues perante os desafios.",
        madalena: "A fidelidade incondicional à tua própria essência é o único voto que nunca deves quebrar.",
        ritual: "Coloca a tua mão direita firmemente sobre o coração e diz em voz baixa: 'Eu comprometo-me com a minha verdade.'",
        journal: "Que promessas íntimas fiz a mim mesma que ando a adiar, esquecer ou a negligenciar no quotidiano?",
        keyword: "Fidelidade",
        energy: "Compromisso • Voto • Verdade"
    },
    {
        id: "35",
        name: "A Coroa de Rosas",
        msg: "Reconhece a nobreza e a sabedoria que conquistaste através das tuas provações passadas. Tu és a soberana do teu destino.",
        madalena: "A coroa mais bela e brilhante é aquela que teces com os teus momentos de superação e resiliência.",
        ritual: "Ergue suavemente a cabeça, alinha as tuas costas e caminha com a dignidade de quem reconhece o seu percurso.",
        journal: "Sinto orgulho genuíno na mulher forte que me tornei após atravessar as minhas batalhas mais difíceis?",
        keyword: "Triunfo",
        energy: "Reconhecimento • Soberania • Vitória"
    },
    {
        id: "36",
        name: "O Fio Dourado",
        msg: "Existe um sentido maior e invisível que une todos os acontecimentos da tua vida. Confia na grande teia do teu destino.",
        madalena: "Nada na tua história ocorre por mero acaso. Cada dor e cada momento feliz alinham-se no propósito maior.",
        ritual: "Observa detalhadamente as linhas da palma da tua mão e medita sobre como as escolhas do passado te trouxeram aqui hoje.",
        journal: "Que eventos aparentemente desconexos ou difíceis do meu passado consigo hoje ver que tinham um propósito claro?",
        keyword: "Destino",
        energy: "Propósito • Sincronicidade • Fé"
    },
    {
        id: "37",
        name: "O Retorno à Essência",
        msg: "Chegaste com sucesso ao fim de uma longa travessia. Já não precisas de usar máscaras de proteção; regressaste a ti.",
        madalena: "A jornada de lembrança está completa. Descansa finalmente na beleza límpida da tua verdadeira identidade.",
        ritual: "Olha em direção ao céu ou horizonte e dá um suspiro longo de alívio, celebrando o caminho percorrido.",
        journal: "Consigo sentir a paz e a plenitude profunda de estar finalmente confortável na minha própria pele?",
        keyword: "Integração",
        energy: "Conclusão • Plenitude • Retorno"
    }
];
