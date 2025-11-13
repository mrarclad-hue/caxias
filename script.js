let score = 0;
let currentCategory = null;
let currentQuestion = 0;
let attempts = 0;
let answered = {};
let categoryScores = {};

const questions = {
  lei_municipal: [
    {
      text: "<h3> QUESTÃO 1 </p> O Poder Executivo e Legislativo municipal de Caxias, são obrigados, por lei, a:</h3> ",
      options: [
        "Abordar temas socioeconômicos sobre o município de Caxias e estado do Maranhão, nos concursos públicos.",
        "Incluírem, em concursos públicos, em média 10% (dez por cento) dos quesitos, tendo como objeto temas referentes ao município de Caxias.",
        "Abordar temas econômicos sobre o município de Caxias e estado do Maranhão, nos concursos públicos.",
        "Incluírem, em concursos públicos, o mínimo de 10% (dez por cento) dos quesitos, tendo como objeto temas referentes ao município de Caxias."
      ],
      correct: 3,
      explanation: "A Lei Municipal nº 2.156/2014 estabelece a obrigatoriedade de incluir o mínimo de 10% (dez por cento) dos quesitos dos concursos públicos municipais com temas referentes ao município de Caxias (Lei de Conteúdo Local)."
    }
  ],


  aspectos_arquivos_1: [

 {
      text: "<h3> QUESTÃO 1 </p> A Academia Caxiense de Letras é um ponto de cultura do cenário caxiense e maranhense, e é também conhecida como:</h3>",
      options: [
        "Academia Gonçalves Dias",
        "Academia Coelho Neto",
        "A Casa de Gonçalves Dias",
        "A Casa de Coelho Neto"
      ],
      correct: 3,
      explanation: "A Academia Caxiense de Letras é conhecida como 'A Casa de Coelho Neto', em homenagem a Henrique Maximiano Coelho Neto, famoso escritor e político caxiense."
    },

    {
      text: "<h3> QUESTÃO 2 </p> Dom Manoel Joaquim da Silveira, denominou Caxias com qual título?</h3>",
      options: [
        "Freguesia das Aldeias Altas",
        "Arraial das Aldeias Altas",
        "Vila de Caxias",
        "A Princesa do Sertão Maranhense"
      ],
      correct: 3,
      explanation: "Foi Dom Manoel Joaquim da Silveira quem conferiu a Caxias o título poético e histórico de 'A Princesa do Sertão Maranhense'."
    },
    {
      text: "<h3> QUESTÃO 3 </p>  De acordo com o poeta caxiense, Wybson Carvalho, o que representa o nome Caxias? </h3>",
      options: ["Memorial da Balaiada", "Palmáceas que dão flores em cachos", "Aldeias Altas", "Aldeias Altas"],
      correct: 1,
      explanation: "Segundo Wybson Carvalho, Caxias é um vocábulo indígena, que significa 'Palmáceas que dão flores em cachos', referindo-se à riqueza da flora local."
    },
    {
      text: "<h3> QUESTÃO 4 </p>  Nas alternativas abaixo, assinale aquela que descreve os Caxienses que tiveram participação em dois dos principais </p> símbolos nacionais: o Hino Nacional Brasileiro e a Bandeira Nacional Brasileira, respectivamente: </h3>",
      options: ["Raimundo Teixeira Mendes; Antônio Gonçalves Dias", "Antônio Gonçalves Dias; Luís Alves de Lima e Silva", "Raimundo Teixeira Mendes; Coelho Neto", "Antônio Gonçalves Dias; Raimundo Teixeira Mendes"],
      correct: 3,
      explanation: "O poeta Antônio Gonçalves Dias é o autor dos versos 'Nossos bosques têm mais vida...' no Hino Nacional, e Raimundo Teixeira Mendes, filósofo positivista, foi o idealizador da insígnia 'Ordem e Progresso' na Bandeira Nacional."
    },
    {
      text: "<h3> QUESTÃO 5 </p>  A história de Caxias começou no século XVII, com qual Movimento no interior maranhense, para o reconhecimento e ocupação de terras, durante a invasão francesa no Maranhão?</h3>",
      options: ["Guerra de Canudos", "Revolta de Beckman", "Balaiada", "Entradas e Bandeiras"],
      correct: 3,
      explanation: "O processo de colonização e povoamento da região de Caxias está ligado ao movimento de 'Entradas e Bandeiras', que avançava pelo interior em busca de riquezas e ocupação de terras."
    },
    {
      text: "<h3> QUESTÃO 6 </p>  Sobre o município de Caxias, assinale a alternativa INCORRETA:</h3>",
      options: ["Está a 365 quilômetros da capital do Maranhão.", " Geograficamente, em relação ao território nacional, o município de Caxias está localizado na região Nordeste do Brasil, Oeste do Norte Brasileiro e a Leste do Estado do Maranhão.", "Delimitada, a atual área do município equivale somente a 45,45% da área original, antes das emancipações de Governador Eugênio Barros, Parnarama, Matões e Timon.", "Situada na mesorregião do leste maranhense."],
      correct: 2,
      explanation: "As fontes indicam que a atual área do município equivale a 45,45% da área original (aproximadamente 11.691 km²), mas que as emancipações que reduziram essa área foram as de Timon, Aldeias Altas, Coelho Neto, Codó e São João do Sóter. Embora Governador Eugênio Barros, Parnarama e Matões também sejam citados como municípios limítrofes ou que fizeram parte do antigo território, a lista de municípios que causou a redução para 45,45% é diferente da apresentada na alternativa, tornando-a incorreta pela imprecisão ou incorreção da lista de emancipações."
    },

 {
      text: "<h3> QUESTÃO 7 </p>  O poder político executivo em Caxias é representado por qual(is) órgão(s)?</h3> ",
      options: ["Câmara Municipal", " Tribunal de Justiça", "Controlador e Procuradoria General", "Prefeito, vice-prefeito e secretários municipais"],
      correct: 3,
      explanation: "Em nível municipal, o Poder Executivo é composto pelo Prefeito, que é o chefe do governo, o Vice-Prefeito e os Secretários Municipais."
    },
    {
      text: "<h3> QUESTÃO 8  </p>  Assinale a alternativa que preenche corretamente e respectivamente as lacunas do texto abaixo: </P> “O município é banhado pelo `_______________`, que banha quase toda extensão do município, e pelo `_________` a nordeste, além de possuir vários afluentes que cercam a cidade com diversos banhos naturais.” </h3>",
      options: ["Rio Parnaíba; Rio Pindaré", "Rio Itapecuru; Rio Parnaíba", "Rio Itapecuru; Rio Mearim", "Rio Parnaíba; Rio Itapecuru"],
      correct: 1,
      explanation: "Caxias é banhada principalmente pelo Rio Itapecuru, que corta grande parte do município, e tem o Rio Parnaíba como limite natural a nordeste, na divisa com o Piauí."
    },
    {
      text: "<h3> QUESTÃO 9 </p>  Sobre a cidade de Caxias no Maranhão, não é correto afirmar que:</h3>",
      options: ["Foi, primitivamente, um agregado de grandes aldeias dos índios Timbiras e Gamelas.", "Está situada na meso-região do leste maranhense e na micro-região de Porto Franco.", "Através da Lei Provincial, número 24, datada de 05 de julho de 1836, fora elevado à categoria de cidade com a denominação de Caxias.", "Geograficamente, em relação ao território nacional, o município de Caxias está localizado na região Nordeste do Brasil, Oeste do Norte Brasileiro e a Leste do Estado do Maranhão."],
      correct: 1,
      explanation: "Caxias está situada na Mesorregião do Leste Maranhense, mas na Microrregião de Caxias, não na de Porto Franco."
    },
    {
      text: "<h3> QUESTÃO 10 </p>  A atual área do município de Caxias equivale somente a 45,45% da área original, antes das emancipações das seguintes cidades, exceto:</h3>",
      options: ["Aldeias Altas", "Codó", "Chapadinha", "Timon"],
      correct: 2,
      explanation: "Chapadinha, historicamente, não faz parte do rol de cidades que se emanciparam diretamente do território de Caxias para reduzir sua área a 45,45% da original."
    },
    {
      text: "<h3> QUESTÃO 11 </p>  Sobre o nome Caxias, do qual o município de Caxias recebeu o nome, não é correto afirmar que:  </h3>",
      options: ["O nome de Caxias se atribui a Luís Alves de Lima e Silva, patrono do Exército Brasileiro.", "Guanaré foi um dos seus nomes, denominação indígena.", "Freguesia das Aldeias Altas já foi um dos nomes que o município de Caxias recebeu.", "Dom Manoel Joaquim da Silveira denominou Caxias com o título: “A princesa do sertão maranhense”."],
      correct: 0,
      explanation: "O nome da cidade não se atribui a Luís Alves de Lima e Silva. Ele recebeu o título de Barão de Caxias por sua atuação na Balaiada, movimento social que aconteceu na região. O município de Caxias recebeu esse nome em virtude de um Jardim e espaço arquitetônico nas proximidades de Lisboa, conhecido como Quinta Real de Caxias."
    },
    {
      text: "<h3> QUESTÃO 12 </p>  No centro da Bandeira Nacional Brasileira, há a insígnia extraída do Lema Positivista escrito pelo seu idealizador e filósofo caxiense: “Ordem e Progresso”. Qual o nome desse idealizador e filósofo? </h3> ",
      options: ["Raimundo Teixeira Mendes.", "Joaquim Vespasiano Ramos.", "Antônio Gonçalves Dias.", "Henrique Maximiliano Coelho Neto."],
      correct: 0,
      explanation: "O lema 'Ordem e Progresso' e a concepção da bandeira são fortemente influenciados pelo pensamento de Raimundo Teixeira Mendes, filósofo positivista caxiense."
    },
    {
      text: "<h3> QUESTÃO 13 </p>  No Hino Nacional Brasileiro, há em uma das suas estrofes dois versos de um poeta e professor nascido em Caxias no Maranhão. Que versos são esses? </h3> ",
      options: [" 'Gigante pela própria natureza, És belo, és forte, impávido colosso' ", " 'Se em teu formoso céu, risonho e límpido, A imagem do Cruzeiro resplandece' ", " 'Nossos bosques têm mais vida, Nossa vida em teu seio mais amores' ", "  'Deitado eternamente em berço esplêndido, Ao som do mar e à luz do céu profundo' "],
      correct: 2,
      explanation: "Eles foram escritos pelo poeta Gonçalves Dias, que nasceu em Caxias, Maranhão, e retirados do seu poema 'Canção do Exílio'."
    },
    {
      text: "<h3> QUESTÃO 14 </p>  O município de Caxias está localizado na: </h3> ",
      options: ["Mesorregião Centro Maranhense", "Microrregião Chapadinha", "Mesorregião Leste Maranhense", "Microrregião Presidente Dutra"],
      correct: 2,
      explanation: "De acordo com a divisão geográfica, Caxias está situada na Mesorregião Leste Maranhense e é a sede da microrregião de Caxias."
    },
    {
      text: "<h3> QUESTÃO 15 </p>  Qual capital brasileira mais próxima de Caxias? </h3> ",
      options: [" São Luiz", "Teresina", "Palmas", "Belém"],
      correct: 1,
      explanation: "Caxias faz divisa com o estado do Piauí e está localizada a cerca de 65 km de Teresina (capital do Piauí). A capital maranhense (São Luís) está a cerca de 360 km."
    },
    {
      text: "<h3> QUESTÃO 16 </p>  São temas referentes ao município de Caxias, o que trata a Lei Municipal nº 2.156/2014, exceto: </h3> ",
      options: ["Aspectos históricos", "Aspectos geográficos", "Aspectos econômicos", " Aspectos políticos"],
      correct: 2,
      explanation: "A Lei Municipal nº 2.156/2014 obriga a inclusão de temas referentes a aspectos 'históricos, geográficos, literários, políticos e culturais' do município. Aspectos 'econômicos' não estão listados na lei."
    },
    {
      text: "<h3> QUESTÃO 17 </p>   Que líder militar, na história do município de Caxias, recebeu o título de “Duque de Caxias”? </h3>",
      options: ["Antônio Gonçalves Dias", "Raimundo Teixeira Mendes", "Luís Alves de Lima e Silva", "Coelho Neto"],
      correct: 2,
      explanation: "Luís Alves de Lima e Silva foi quem recebeu o título de Duque de Caxias, por sua atuação na pacificação da revolta da Balaiada, que teve Caxias como um dos seus palcos mais importantes."
    },
    {
      text: "<h3> QUESTÃO 18 </p> Qual é o período aproximado do nascimento de Caxias?     </h3>   ",
      options: ["No início do século XVII.", "No final do século XV. ", "Por volta de 1500. ", "Na metade do século XIX."],
      correct: 0,
      explanation: "Caxias (MA) foi elevada à categoria de cidade em 5 de julho de 1836, pela Lei Provincial nº 24. A história da região, no entanto, remonta ao século XVII, quando era um conjunto de aldeias indígenas chamadas Guanaré, e mais tarde evoluiu para vila com a denominação de Caxias das Aldeias Altas, antes de se tornar cidade."
    },
    {
      text: "<h3> QUESTÃO 19 </p> O escritor caxiense Libânio da Costa Lôbo utiliza uma metáfora para se referir ao rio Itapecuru, às margens do qual a cidade foi formada. Qual é o epíteto (apelido/alcunha) dado ao rio Itapecuru por Libânio da Costa Lôbo?   </h3>   ",
      options: [" O 'Parnaíba maranhense' ", " O 'Rio de Ouro maranhense' ", " O 'Nilo maranhense' ", " O 'Amazonas maranhense' "],
      correct: 2,
      explanation: "Nas palavras do escritor caxiense Libânio da Costa Lôbo, o rio Itapecuru era o 'Nilo maranhense”, o local era habitado por diversas tribos indígenas, entre elas os Guanarés, os Timbiras e os Gamelas, quando chegaram os colonizadores."
    },
    {
      text: "<h3> QUESTÃO 20 </p> A cidade de Caxias possui uma localização geográfica estratégica no Leste Maranhense. Além do Rio Itapecuru, o município é notavelmente delimitado e influenciado por qual outro rio relevante, especialmente em seu limite nordeste?</h3>",
      options: ["Rio Pindaré, que marca a divisa com o estado do Piauí.", "Rio Mearim, essencial para a bacia hidrográfica do município.", "Rio Parnaíba, marcando parte da fronteira natural com o Piauí.", "Rio Tocantins, por ser um dos maiores rios da região."],
      correct: 2,
      explanation: "Caxias está localizada no leste do Maranhão e é banhada pelo Rio Itapecuru e, na porção nordeste do município, pelo Rio Parnaíba, que serve como fronteira natural entre o Maranhão e o Piauí."
    },
    {
      text: "<h3> QUESTÃO 21 </p> Considerando a história, a geografia e os aspectos culturais de Caxias, analise as afirmações a seguir:</p>I. O surgimento de Caxias, por volta de 1716, ocorreu às margens do Rio Itapecuru, curso d'água crucial para o desenvolvimento e que recebeu a alcunha de 'Nilo maranhense'.</p>II. Antes da colonização, a área era habitada por diversas tribos, como os Guanarés, os Timbiras e os Gamelas, o que inspirou a primeira denominação conhecida da localidade.</p>III. A cidade é um polo regional que, apesar do grande desenvolvimento econômico, não possui patrimônio histórico arquitetônico relevante, sendo sua importância atual baseada apenas no setor de serviços.</h3>",
      options: ["Apenas I.", "Apenas I e II.", "Apenas II e III.", "I, II e III."],
      correct: 1,
      explanation: "As afirmações I e II estão corretas e confirmadas por fontes históricas. A afirmação III está incorreta, pois Caxias possui um acervo arquitetônico herdado do século XIX e início do século XX, e conserva boa parte de seu patrimônio histórico, sendo conhecida como 'terra das águas cristalinas' e 'Princesa do Sertão'."
    },
 
    {
      text: "<h3> QUESTÃO 22 </p> A cidade de Caxias, ao longo de sua história, recebeu diversas denominações antes de sua grafia e nome atuais. Qual das sequências a seguir representa a ordem cronológica CORRETA de alguns dos nomes anteriores da cidade?</h3>",
      options: [
        "Missão Alta, Guanaré, Cachias, São José das Aldeias Altas.",
        "Guanaré, Missão Alta, São José das Aldeias Altas, Cachias.",
        "São José das Aldeias Altas, Guanaré, Missão Alta, Caxias das Aldeias Altas.",
        "Cachias, Guanaré, Caxias das Aldeias Altas, Princesa do Sertão."
      ],
      correct: 1,
      explanation: "Esta sequência reflete a ordem em que as denominações da cidade foram mencionadas, desde o primeiro 'batismo' (Guanaré) até o registro pelos viajantes (Cachias)."
    },
    {
      text: "<h3> QUESTÃO 23 </p> O desenvolvimento econômico de Caxias, que culminou em sua ascensão a cidade em 1836, foi impulsionado por uma cultura agrícola principal que se tornou o \"principal fator de desenvolvimento econômico de Caxias\" entre meados do século XVIII e a década de 1950. Qual é essa cultura agrícola?</h3>",
      options: [
        "A exploração da amêndoa de babaçu.",
        "O cultivo de arroz, milho, mandioca e feijão para exportação.",
        "A cultura algodoeira.",
        "O plantio de cana-de-açúcar para a produção de aguardente."
      ],
      correct: 2,
      explanation: "A cultura do algodão é explicitamente citada no texto como o principal fator de desenvolvimento econômico da cidade, abastecendo a Europa e os grandes centros do Sul do Brasil."
    },
    {
      text: "<h3> QUESTÃO 24 </p> Caxias localiza-se na Mesorregião Leste do Maranhão e faz fronteira com diversos municípios do Maranhão e do Piauí. Qual município listado NÃO faz fronteira direta com Caxias?</h3>",
      options: [
        "São Luís.",
        "Codó.",
        "União-PI.",
        "Matões."
      ],
      correct: 0,
      explanation: "São Luís é a capital do Maranhão e fica a 360 quilômetros de Caxias, não possuindo fronteira direta."
    },
    {
      text: "<h3> QUESTÃO 25 </p> O Arraial de Caxias foi elevado à categoria de Vila em 1811, passando a se chamar Caxias das Aldeias Altas. Em que ano Caxias ascendeu à categoria de Cidade e qual foi o instrumento legal que efetivou essa mudança?</h3>",
      options: [
        "1895, devido à inauguração da estrada de ferro que ligava Caxias a Cajazeiras (Timon).",
        "1796, conforme o documento elaborado pelo Marechal-de-campo Antônio Corrêa Furtado de Mendonça.",
        "1836, por meio da Lei Provincial nº 24, em função do significativo desenvolvimento econômico e aumento populacional.",
        "1823, após a resistência à independência do Brasil ser reconhecida em agosto."
      ],
      correct: 2,
      explanation: "O texto afirma que a ascensão à categoria de cidade ocorreu em 1836, pela Lei Provincial nº 24, sendo consequência do desenvolvimento econômico."
    },
    {
      text: "<h3> QUESTÃO 26 </p> Caxias é reconhecida por sua riqueza cultural e por ser o berço de uma 'constelação de literatos' que deixaram sua marca na literatura brasileira. Quais poetas são patronos de cadeiras na Academia Brasileira de Letras (ABL)?</h3>",
      options: [
        "Libânio da Costa Lôbo, Mílson Coutinho e Quincas Vilaneto.",
        "Antônio Gonçalves Dias, Aluísio Azevedo e Graça Aranha.",
        "Professor Aciel Tavares, Pe. Cláudio Melo e D. Fernando Antônio de Noronha.",
        "Antônio Gonçalves Dias, Henrique Maximiliano Coelho Neto e Teófilo Dias."
      ],
      correct: 3,
      explanation: "Estes três nomes são explicitamente citados como os literatos caxienses que são patronos de cadeiras na Academia Brasileira de Letras."
    },
    {
      text: "<h3> QUESTÃO 27 </p> A navegação fluvial pelo Rio Itapecuru foi o principal meio de circulação de riquezas em Caxias por um longo tempo. Posteriormente, a necessidade de escoar a produção forçou a abertura de estradas terrestres e, no final do século XIX, iniciou-se a construção de uma ferrovia. Qual era o trajeto original dessa ferrovia e em que ano ela foi inaugurada em Caxias?</h3>",
      options: [
        "Ligando Caxias a São Luís, inaugurada em 1895.",
        "Ligando Caxias a Pastos Bons, inaugurada no início do século XX.",
        "Ligando Caxias a Cajazeiras (hoje Timon), inaugurada em 1895.",
        "Ligando Caxias ao Piauí, inaugurada em 1882."
      ],
      correct: 2,
      explanation: "A construção da estrada de ferro ligou Caxias à Cajazeiras (hoje Timon) e que os trilhos atingiram Caxias na data de sua inauguração em 1895."
    },
    {
      text: "<h3> QUESTÃO 28 </p> A Lei Municipal nº 2.156/2014 estabelece uma obrigação específica para os concursos públicos promovidos pelos Poderes Executivo e Legislativo do Município de Caxias. Qual é o teor dessa obrigação legal?</h3>",
      options: [
        "Obrigar a realização de um curso de conhecimentos locais para os candidatos aprovados na primeira fase, antes da nomeação.",
        "Estabelecer uma cota mínima de 10% das vagas para candidatos residentes no município por mais de 5 anos.",
        "Destinar 2.156 vagas para a área de educação no concurso de 2026, em cumprimento à meta municipal.",
        "Incluir o mínimo de 10% dos quesitos tendo como objeto temas referentes aos aspectos históricos, geográficos, literários, políticos, culturais e sociais do município de Caxias."
      ],
      correct: 3,
      explanation: "O Art. 1º da Lei nº 2.156/2014 estabelece a inclusão de um mínimo de 10% dos quesitos sobre temas referentes ao município, e o Art. 2º especifica a natureza dos temas (históricos, geográficos, etc.)."
    },
    {
      text: "<h3> QUESTÃO 29 </p> O Setor Terciário de Caxias é caracterizado por sua importância como polo regional. Qual dos seguintes aspectos NÃO é parte da importância do Setor Terciário de Caxias?</h3>",
      options: [
        "Ser um polo de saúde com diversas clínicas e de educação superior com quatro instituições presenciais (IFMA, UEMA, FACEMA e FAI).",
        "A presença de diversas instituições federais que prestam serviços à população da região, como a Polícia Federal e a Justiça Federal.",
        "A grande atividade de exportação de grãos e carne bovina para o mercado internacional.",
        "Comércio varejista forte e diversificado, incluindo a presença de um Shopping Center, que abastece cidades vizinhas."
      ],
      correct: 2,
      explanation: "Embora a pecuária bovina de corte e a agricultura mecanizada de soja existam, a grande atividade de exportação direta de grãos e carne não é citada como característica do Setor Terciário (serviços e comércio), mas sim do Setor Primário/Secundário."
    },
    {
      text: "<h3> QUESTÃO 30 </p> De acordo com a classificação climática de Köppen, o clima predominante em Caxias é o Tropical Úmido Aw (Tropical Típico). Uma das características desse clima é:</h3>",
      options: [
        "Clima semiárido com chuvas concentradas no inverno e alta amplitude térmica.",
        "Média pluviométrica acima de 3000 mm/ano e temperaturas médias inferiores a 20ºC.",
        "Presença de quatro estações bem definidas, com baixa amplitude térmica.",
        "Verão e outono chuvosos, com inverno e primavera secos, e média de pluviométrica de 1700 mm/ano."
      ],
      correct: 3,
      explanation: "Uma das principais características do clima Tropical Úmido (Aw), segundo a classificação de Köppen, é a presença de duas estações bem definidas: </p> ► Verão chuvoso, com temperaturas elevadas e alta umidade; </p> ► Inverno seco, com redução significativa das chuvas, embora as temperaturas continuem relativamente altas."
    },
    {
      text: "<h3> QUESTÃO 31 </p> O Arraial de Caxias, que deu origem à cidade, nasce lentamente e sua origem está ligada a um conjunto de fatores. O pesquisador Mílson Coutinho aborda a origem da povoação, afirmando que Caxias 'jamais fora fundada, numa dia e hora certos, senão originada dos pousos e paiós, e do aglomerado de lavradores e criadores da região'. Qual fator, além desses aglomerados, é essencial para a formação inicial do Arraial?</h3>",
      options: [
        "O estabelecimento de uma usina hidrelétrica no Rio Itapecuru para fornecimento de energia.",
        "A construção da Empresa Industrial Caxiense, a primeira indústria têxtil, em 1882.",
        "O estabelecimento da missão jesuítica e a chegada dos mercadores que se dirigiam ao Alto Itapecuru e a Pastos Bons.",
        "A descoberta de gás natural na bacia sedimentar do Parnaíba, no início do século XVIII."
      ],
      correct: 2,
      explanation: "A formação foi iniciada como estabelecimento da missão jesuítica e impulsionada pelo trabalho dos mercadores."
    },

    {       text: "<h3> Questão 32 </p>  Qual data e evento histórico são associados à primeira elevação do antigo Arraial de Caxias das Aldeias Altas, que marcou um momento decisivo em sua trajetória para a autonomia? </h3>",       options: ["6 de julho de 1836, ratificação da elevação a cidade.", "31 de outubro de 1811, elevação à categoria de Vila.", "5 de julho de 1836, emancipação como cidade.", "1º de agosto de 1823, Adesão à Independência do Brasil."],       correct: 1,       explanation: "No BRASÃO, duas datas significativas são destacadas na faixa vermelha:</p> 31 de outubro de 1811, quando o antigo Arraial de Caxias das Aldeias Altas foi elevado à categoria de Vila; e</p> 6 de julho de 1836, data em que foi oficialmente ratificada a elevação da Vila à categoria de cidade, um dia após ter sido emancipada."     },


    {       text: "<h3> Questão 33 </p> Qual objeto, posicionado ao pé da Lira, simboliza o patriotismo, a coragem e a bravura do pacificador da Balaiada, Luís Alves de Lima e Silva? </h3>",       options: ["Um Brasão.", "Um Forte.", "Uma Coroa.", "Uma Espada."],       correct: 3,       explanation: "A Espada, ao pé da Lira, representa o patriotismo, a coragem e a bravura de Luís Alves de Lima e Silva, o Duque de Caxias."     },

    {       text: "<h3> Questão 34 </p> O Livro (em branco e preto) e a Lira dourada, que aparecem na bandeira, simbolizam as produções intelectuais da cidade. A quem é feita a homenagem à filosofia/prosa e à poesia, respectivamente? </h3>",       options: ["Gonçalves Dias / Luís Alves de Lima e Silva.", "Teixeira Mendes / Gonçalves Dias, Vespasiano Ramos, Veras de Holanda e Afonso Cunha.", "Duque de Caxias / Teixeira Mendes.", "Veras de Holanda / Vespasiano Ramos."],       correct: 1,       explanation: "O Livro representa a filosofia e a prosa de Teixeira Mendes, e a Lira dourada simboliza a poesia de figuras literárias como Gonçalves Dias, Vespasiano Ramos, Veras de Holanda e Afonso Cunha."     },

    {       text: "<h3> Questão 35 </p> A faixa diagonal vermelha, no centro da bandeira, contém uma inscrição de data. Qual a data registrada e o evento histórico que ela representa?  </h3>",       options: ["5 de Julho de 1836, celebrando a elevação à categoria de cidade.", "1º de Agosto de 1823, indicando a Adesão de Caxias à Independência do Brasil.", "7 de Setembro de 1822, marcando a Independência do Brasil.", "13 de Dezembro de 1840, representando a pacificação da Balaiada."],       correct: 1,       explanation: "A data da independência de Caxias, MA, é 1º de agosto de 1823 (CONSTA NA BANDEIRA DE CAXIAS), quando a cidade aderiu à independência do Brasil após ser o último foco de resistência ao domínio português. A cidade se tornou uma vila e posteriormente foi elevada à categoria de cidade em 5 de julho de 1836.  "     },



    {       text: "<h3> Questão 36 </p> O triângulo superior (azul celeste) e o triângulo inferior (verde escuro) da bandeira possuem significados distintos. O que essas duas cores e formas representam, respectivamente?  </h3>",       options: ["O fervor religioso e o patriotismo do Duque de Caxias.", "O céu que cobre a terra e o sangue derramado nas lutas pela Independência e Balaiada.", "A prosa de Teixeira Mendes e a poesia de Gonçalves Dias.", "A paz e a esperança por um futuro próspero."],       correct: 1,       explanation: "O triângulo superior azul celeste simboliza o céu e o fervor religioso, e o triângulo inferior verde escuro representa o sangue derramado pelos caxienses nas lutas pela Independência e na Balaiada."     },

    {       text: "<h3> Questão 37 </p> Quais são os seis municípios limítrofes que, por meio de suas interações, contribuem para a diversidade cultural e econômica da cidade de Caxias (MA)? </h3>",       options: ["Bacabal, Teresina (PI), Coelho Neto, Codó, União e Timon.", "Aldeias Altas, Timon, São João do Soter, Codó, Coelho Neto e Teresina (PI).", "São Luís, Timon, Chapadinha, Codó, Aldeias Altas e São João do Soter.", "Itapecuru-Mirim, Parnarama, Codó, Teresina (PI), União e Coelho Neto."],       correct: 1,       explanation: "Os municípios limítrofes citados são Aldeias Altas, Timon, São João do Soter, Codó, Coelho Neto e Teresina (PI)."     },


    {       text: "<h3> Questão 38 </p> Antes de se tornar a 'cidade de Caxias', qual era o nome do povoado que foi elevado a essa categoria?  </h3>",       options: ["Vila do Sertão.", "Povoado de Timon.", "Arraial de Caxias das Aldeias Altas.", "Vila de São João do Soter."],       correct: 2,       explanation: "O evento histórico comemorado é a elevação do antigo 'Arraial de Caxias das Aldeias Altas' à categoria de cidade."     },


    {       text: "<h3> Questão 39 </p>> Qual é o evento histórico e sua respectiva data que marcam o aniversário da cidade de Caxias, celebrando sua identidade e importância na trajetória do Maranhão?  </h3>",       options: ["A proclamação da Independência do Brasil, em 7 de setembro de 1822.", "A elevação do antigo Arraial de Caxias das Aldeias Altas à categoria de cidade, em 5 de julho de 1836.", "A fundação do Arraial de Caxias das Aldeias Altas, em 15 de agosto de 1700.", "O fim da Balaiada e a retomada da cidade, em 13 de dezembro de 1840."],       correct: 1,       explanation: "O aniversário da cidade é comemorado em 5 de julho, data que marca a elevação do antigo Arraial de Caxias das Aldeias Altas à categoria de cidade em 1836."     },


    {       text: "<h3> Questão 40 </p> Quem são o atual prefeito e o vice-prefeito municipal de Caxias (MA)?  </h3>",       options: ["José Gentil Rosa Neto e Eugênio de Sá Coutinho Filho.", "Luís Antônio de Sousa e Maria da Conceição Silva.", "João Paulo Martins e Antônia Ferreira Costa.", "Pedro Henrique Santos e Ana Lúcia Gomes."],       correct: 0,       explanation: "O prefeito atual é José Gentil Rosa Neto e o vice-prefeito municipal é Eugênio de Sá Coutinho Filho."     },




    {       text: "<h3> Questão 41 </p> Qual é o lema que reflete a determinação do povo caxiense e qual é a distância aproximada da cidade em relação à capital do estado, São Luís?  </h3>",       options: ["'O futuro é agora'; 500 km.", "'Trabalho e Progresso'; 120 km.", "'A vida é combate'; 360 km.", "'Terra da Liberdade'; 240 km."],       correct: 2,       explanation: "O lema do município é 'A vida é combate', e a cidade está situada a 360 km da capital do estado (São Luís)."     },


    {       text: "<h3> Questão 42 </p> Caxias é um município estratégico no Maranhão e é integrado a outras regiões por rodovias. Qual é a principal via federal que facilita o fluxo de pessoas e mercadorias, sendo fundamental para a integração regional e o desenvolvimento econômico da cidade?  </h3>",       options: ["A Rodovia Estadual MA-034.", "A BR-316.", "A Rodovia Federal BR-226.", "A Rodovia Transmaranhense."],       correct: 1,       explanation: "A principal rodovia federal citada como acesso e via fundamental para a integração regional de Caxias é a BR-316."     },

    {       text: "<h3> Questão 43 </p> A cidade estabelece sua ligação com as duas capitais mais próximas, Teresina e São Luís, por meio de quais vias terrestres? </h3>",       options: ["Apenas por rodovias pavimentadas.", "Por meio de uma ferrovia e uma rodovia.", "Somente por vias expressas com pedágio.", "Por ferrovias e aeroportos."],       correct: 1,       explanation: "A ligação terrestre de Caxias com as duas capitais mais próximas (Teresina e São Luís) é feita por meio de uma ferrovia e uma rodovia."     },

    {       text: "<h3> Questão 44 </p> O Setor Terciário da cidade é considerado de grande importância. Quais são as três áreas de destaque que o qualificam como um polo regional de serviços?  </h3>",       options: ["Indústria de base, extrativismo mineral e agropecuária.", "Turismo ecológico, transportes e hotelaria de luxo.", "Polo de saúde, educação superior e comércio varejista forte e diversificado.", "Produção de energia, serviços financeiros e exportação de commodities."],       correct: 2,       explanation: "O setor terciário é impulsionado por ser um polo de saúde (com diversas clínicas), educação superior (com quatro instituições) e por possuir um comércio varejista forte e diversificado."     },


    {       text: "<h3> Questão 45 </p> Além da cervejaria, quais outros tipos de fábricas são parte importante do setor secundário da economia local?  </h3>",       options: ["Metalúrgicas e fábricas de alimentos processados.", "Fábricas de papel e celulose.", "Fábricas de produtos de limpeza e cerâmicas (tijolos e telhas).", "Indústrias têxteis e de calçados."],       correct: 2,       explanation: "O setor secundário também é composto por fábricas de produtos de limpeza e cerâmicas (que produzem tijolos e telhas)."     },



    {       text: "<h3> Questão 46 </p> A atividade industrial da cidade tem como um de seus marcos a presença de uma grande cervejaria. Qual é o principal fator geográfico/hídrico que possibilitou a instalação e concretização dessa indústria na região?  </h3>",       options: ["A proximidade com grandes centros consumidores.", "A existência de abundante mão de obra especializada.", "A presença do enorme aquífero “Inhamum” na região.", "A facilidade de acesso a matérias-primas de cevada."],       correct: 2,       explanation: "A instalação da cervejaria é concretizada pela presença do enorme aquífero 'Inhamum', que garante o fornecimento de água necessário para essa indústria."     },


    {       text: "<h3> Questão 47 </p> Qual é a condição geoclimática que favorece a pecuária caprina, permitindo seu destaque no cenário estadual?  </h3>",       options: ["Clima equatorial com chuvas abundantes", "Clima semiúmido a maior parte do ano", "Clima tropical úmido", "Clima frio de montanha"],       correct: 1,       explanation: "O clima semiúmido a maior parte do ano favorece a criação de caprinos. </p> Obs: pecuária caprina é a atividade de criação de cabras para a produção de carne, leite e pele."     },


    {       text: "<h3> Questão 48 </p> Os cultivos da agricultura mecanizada, cana-de-açúcar e soja, que estão surgindo no município, tiveram sua origem em outros municípios. De quais municípios esses cultivos vieram, seguindo a ordem cana-de-açúcar e soja, respectivamente?  </h3>",       options: ["Chapadinha e Aldeias Altas.", "Timon e Caxias.", "Aldeias Altas e Chapadinha.", "Teresina e Parnaíba."],       correct: 2,       explanation: "A agricultura mecanizada de cana-de-açúcar veio do município de Aldeias Altas, e a de soja veio do município de Chapadinha."     },


    {       text: "<h3> Questão 49 </p> No setor primário de Caxias, o extrativismo vegetal e o mineral são importantes atividades econômicas. Quais são, respectivamente, os principais produtos que caracterizam o extrativismo vegetal e quais materiais são predominantes no extrativismo mineral? </h3>",       options: ["Soja e Cana-de-açúcar.", "Babaçu e lenha; Areia de rio, seixo e argila.", "Rebanho bovino e Aves.", "Argila e Água mineral; Babaçu e brita."],       correct: 1,       explanation: "O extrativismo vegetal é prevalecido pelo babaçu e lenha. Já o extrativismo mineral predomina a extração de areia de rio, seixo, brita, água mineral e argila."     },


    {       text: "<h3> Questão 50 </p> A atividade agrícola na região é caracterizada pela predominância de um tipo de produção, ao mesmo tempo em que se observa o surgimento da agricultura mecanizada. Qual é o tipo de agricultura predominante e quais são os dois principais cultivos dessa modalidade mecanizada emergente? </h3>",       options: ["Agricultura comercial; Arroz e Milho.", "Agricultura de subsistência; Cana-de-açúcar e Soja.", "Agricultura orgânica; Babaçu e Lenha.", "Extensiva; Algodão e Feijão."],       correct: 1,       explanation: "A agricultura de subsistência é predominante, e o surgimento da agricultura mecanizada é focado em cana-de-açúcar e soja."
    },
























  ],

  aspectos_arquivos_2: [

  {
    "text": "<h3> QUESTÃO 1 </p> Sobre os municípios limítrofos de Caxias (MA), é correto afirmar que: </h3>",
    "options": [
      "Todos os municípios limítrofos de Caxias estão localizados no estado do Maranhão.",
      "Teresina é um município limítrofe de Caxias, localizado no estado do Maranhão.",
      "Os municípios limítrofos de Caxias incluem Aldeias Altas, Timon, São João do Soter, Codó, Coelho Neto e Teresina, sendo que Teresina está localizada no estado do Piauí.",
      "Coelho Neto e São João do Soter são municípios limítrofos de Caxias, mas não contribuem para a diversidade econômica da região."
    ],
    "correct": 2,
    "explanation": "O município de Caxias faz fronteira com Aldeias Altas, Timon, São João do Soter, Codó e Coelho Neto, todos localizados no Maranhão, e também com Teresina, que está no Piauí."
  },

  {
    "text": "<h3> QUESTÃO 2 </p> Sobre as rodovias que acessam o município de Caxias (MA), é correto afirmar que: </h3>",
    "options": [
      "A BR-316 é uma rodovia estadual que conecta Caxias a outras regiões do país.",
      "A MA-349, MA-034 e MA-127 são rodovias federais que fornecem acesso a Caxias e municípios vizinhos.",
      "A BR-316 é uma rodovia federal que facilita o fluxo de pessoas e mercadorias para Caxias, enquanto as rodovias estaduais MA-349, MA-034 e MA-127 são essenciais para a conexão interna e com municípios vizinhos.",
      "Caxias é acessado exclusivamente por rodovias estaduais, não possuindo conexão com rodovias federais."
    ],
    "correct": 2,
    "explanation": "A BR-316 é uma rodovia federal crucial para a conexão de Caxias com outras regiões do país, e as rodovias estaduais MA-349, MA-034 e MA-127 são vitais para o acesso interno e a ligação com municípios vizinhos."
  },
  {
    "text": "<h3> QUESTÃO 3 </p> Sobre o município de Caxias (MA), é correto afirmar que: </h3>",
    "options": [
      "O lema de Caxias é \"A vida é combate\", e o município é administrado pelo prefeito Fábio José Gentil Pereira Rosa, do partido PSDB, com um mandato de 2021 a 2024.",
      "Caxias está localizado a 360 km da capital do estado e tem uma câmara legislativa composta por 15 vereadores.",
      "O município de Caxias é conhecido por seu lema \"A vida é combate\" e é administrado pelo prefeito Fábio José Gentil Pereira Rosa, do partido PP, com um mandato de 2021 a 2024. A câmara legislativa é composta por 19 vereadores.",
      "O lema de Caxias é \"A vida é combate\", e o município está situado a 360 km da capital do estado, sendo administrado pelo prefeito Fábio José Gentil Pereira Rosa, do partido PP, com uma câmara legislativa composta por 21 vereadores."
    ],
    "correct": 2,
    "explanation": "O lema de Caxias, \"A vida é combate\", reflete a bravura e determinação de seu povo. O município é administrado pelo prefeito Fábio José Gentil Pereira Rosa, do partido PP, com mandato de 2021 a 2024. A câmara legislativa é composta por 19 vereadores. As alternativas A e B contêm informações incorretas sobre o partido e o número de vereadores. A alternativa D está incorreta quanto ao número de vereadores."
  },
  {
    "text": "<h3> QUESTÃO 4 </p> Sobre a história de Caxias (MA), é correto afirmar que: </h3>",
    "options": [
      "O município de Caxias comemora seu aniversário em 1º de julho, data em que foi elevada à categoria de cidade em 1836.",
      "Caxias foi elevada à categoria de cidade em 5 de julho de 1836, data que é comemorada anualmente como seu aniversário.",
      "A elevação de Caxias à categoria de cidade ocorreu em 5 de junho de 1836, e seu aniversário é celebrado no mesmo dia.",
      "O aniversário de Caxias é celebrado em 5 de julho, marcando a data de sua fundação como arraial em 1836."
    ],
    "correct": 1,
    "explanation": "Caxias comemora seu aniversário em 5 de julho, data em que foi oficialmente elevada à categoria de cidade em 1836. Este evento é significativo na história de Caxias e reflete sua importância na trajetória do Maranhão."
  },
  {
    "text": "<h3> QUESTÃO 5 </p> Sobre a Bandeira de Caxias, instituída pela Lei nº 79 de 25 de agosto de 1949, é correto afirmar que: </h3>",
    "options": [
      "A bandeira é composta por formas circulares divididas por uma faixa central vermelha e representa a união entre a cidade e o campo.",
      "A bandeira possui formas retangulares divididas em dois triângulos isósceles por uma faixa central e simboliza a integração cultural e a importância histórica da cidade.",
      "A bandeira é composta por formas retangulares divididas em dois triângulos escalenos por uma faixa central, representando a bravura e a determinação do povo caxiense, com cores que refletem a riqueza da história local.",
      "A bandeira tem uma forma quadrada dividida em quatro quadrantes por linhas diagonais, representando a diversidade econômica de Caxias e sua conexão com o estado do Maranhão."
    ],
    "correct": 2,
    "explanation": "A Bandeira de Caxias é composta por formas retangulares divididas em dois triângulos escalenos por uma faixa central, conforme a Lei nº 79 de 25 de agosto de 1949. Sua composição e cores refletem a história e a bravura do povo caxiense."
  },
  {
    "text": "<h3> QUESTÃO 6 </p> Sobre a Bandeira de Caxias, institucionalizada pela Lei nº 79 de 25 de agosto de 1949, é correto afirmar que: </h3>",
    "options": [
      "A bandeira possui um triângulo superior azul celeste, simbolizando o céu e o fervor religioso, um triângulo inferior verde escuro representando a bravura dos caxienses, e uma faixa diagonal vermelha com a data \"1º de Agosto de 1823\", sobre a qual está um Livro branco com caracteres pretos e uma Lira dourada, com uma Espada ao pé da Lira.",
      "A bandeira é composta por um triângulo superior verde escuro e um triângulo inferior azul celeste, com uma faixa diagonal branca e a data \"5 de Julho de 1836\". No centro, há um Livro dourado e uma Espada dourada.",
      "A bandeira tem um triângulo azul celeste no centro, uma faixa vermelha com a data \"1º de Agosto de 1823\", e uma Lira dourada acima de um Livro verde escuro. Não há elementos adicionais na bandeira.",
      "A bandeira de Caxias possui dois triângulos escalenos em verde e azul, com uma faixa diagonal branca e uma Espada dourada no centro, sem inscrições adicionais."
    ],
    "correct": 0,
    "explanation": "A Bandeira de Caxias é composta por um triângulo superior azul celeste e um triângulo inferior verde escuro, divididos por uma faixa diagonal vermelha. No centro, sobre a faixa, há um Livro branco, uma Lira dourada, uma Espada e a data \"1º de Agosto de 1823\", conforme a Lei nº 79/1949."
  },
  {
    "text": "<h3> QUESTÃO 7 </p> Sobre a Bandeira de Caxias, é correto afirmar que: </h3>",
    "options": [
      "A bandeira inclui uma faixa vermelha com a data \"31 de Outubro de 1811\", comemorando a elevação do antigo Arraial de Caxias das Aldeias Altas à categoria de Vila, e a data \"6 de Julho de 1836\", quando foi ratificada a elevação da Vila à cidade.",
      "A faixa vermelha na bandeira possui as datas \"1º de Agosto de 1823\" e \"5 de Julho de 1836\", marcando eventos relacionados à Independência do Brasil e a elevação da Vila a cidade, respectivamente.",
      "Na bandeira, a faixa vermelha abaixo do verde destaca a data \"5 de Julho de 1836\", a elevação da Vila à cidade, e \"1º de Agosto de 1823\", a data de adesão à Independência.",
      "A faixa vermelha na bandeira apresenta a data \"31 de Outubro de 1811\" e \"1º de Agosto de 1823\", relacionadas à fundação e à Independência do Brasil, respectivamente."
    ],
    "correct": 0,
    "explanation": "A faixa vermelha na bandeira de Caxias contém as datas: \"31 de Outubro de 1811\", que marca a elevação do antigo Arraial à categoria de Vila (Caxias das Aldeias Altas), e \"1º de Agosto de 1823\", que se refere à adesão de Caxias à Independência do Brasil."
  },
  {
    "text": "<h3> QUESTÃO 8 </p> Sobre a área territorial de Caxias, é correto afirmar que: </h3>",
    "options": [
      "Em 2022, Caxias tinha uma área de 5.201,927 km², posicionando-se como o 11º maior município do Maranhão e o 291º maior do Brasil.",
      "O território de Caxias em 2022 era de 5.201,927 km², tornando-o o 11º maior município do Brasil e o 291º maior do Maranhão.",
      "Com uma área de 5.201,927 km², Caxias era o 291º maior município do Maranhão e o 11º maior do Brasil em 2022.",
      "A área territorial de Caxias em 2022 era de 5.201,927 km², colocando-o como o 291º maior entre os municípios do Maranhão e o 11º maior entre os municípios do Brasil."
    ],
    "correct": 0,
    "explanation": "A área territorial de Caxias em 2022 era de 5.201,927 km², o que o posiciona como o 11º maior município do Maranhão e o 291º maior do Brasil, refletindo sua vasta extensão territorial."
  },
  {
    "text": "<h3> QUESTÃO 9 </p> Sobre a densidade demográfica de Caxias em 2022, é correto afirmar que: </h3>",
    "options": [
      "A densidade demográfica de Caxias era de aproximadamente 30,18 habitantes por quilômetro quadrado, indicando uma população relativamente concentrada em comparação com áreas urbanas.",
      "Com uma densidade demográfica de cerca de 30,18 habitantes por quilômetro quadrado, Caxias apresenta uma distribuição populacional mais dispersa, especialmente em comparação com áreas urbanas mais densamente povoadas.",
      "A densidade demográfica de Caxias em 2022 era de aproximadamente 50,18 habitantes por quilômetro quadrado, o que reflete uma alta concentração populacional.",
      "Em 2022, Caxias tinha uma densidade demográfica de aproximadamente 30,18 habitantes por quilômetro quadrado, o que significa que sua população estava altamente concentrada em áreas urbanas."
    ],
    "correct": 1,
    "explanation": "Em 2022, a densidade demográfica de Caxias era de aproximadamente 30,18 habitantes por quilômetro quadrado, o que sugere uma distribuição populacional mais dispersa em relação a áreas urbanas mais densamente povoadas."
  },
  {
    "text": "<h3> QUESTÃO 10 </p> Sobre o Índice de Desenvolvimento Humano Municipal (IDHM) de Caxias em 2010, é correto afirmar que: </h3>",
    "options": [
      "O IDHM de Caxias em 2010 era de 0,624, refletindo uma medida do bem-estar geral da população com base em aspectos como educação, saúde e renda.",
      "Em 2010, o IDHM de Caxias era de 0,724, indicando um desenvolvimento humano relativamente alto em comparação com outras cidades do Maranhão.",
      "O IDHM de Caxias em 2010 foi de 0,524, o que demonstra uma baixa qualidade de vida e desenvolvimento humano na cidade.",
      "O índice de desenvolvimento humano de Caxias em 2010 era de 0,624, mas ele não leva em consideração aspectos de saúde e educação na avaliação do bem-estar da população."
    ],
    "correct": 0,
    "explanation": "Em 2010, o IDHM de Caxias era de 0,624, o que reflete uma medida do bem-estar geral da população, considerando aspectos como educação, saúde e renda."
  },
  {
    "text": "<h3> QUESTÃO 11 </p> Sobre a Região Geográfica Intermediária de Caxias e a Região Geográfica Imediata de Caxias, é correto afirmar que: </h3>",
    "options": [
      "A Região Geográfica Intermediária de Caxias, uma das cinco do Maranhão e 134 do Brasil, abrange 14 municípios e possui uma população estimada em 775.925 habitantes, com Timon sendo o mais populoso. A Região Geográfica Imediata de Caxias inclui 6 municípios e faz parte das 22 regiões do estado.",
      "A Região Geográfica Intermediária de Caxias é uma das 22 do Maranhão e 134 do Brasil, composta por 14 municípios com uma população total de 775.925 habitantes, sendo Timon o menos populoso. A Região Geográfica Imediata de Caxias abrange 14 municípios e está incluída nas 5 regiões do estado.",
      "A Região Geográfica Intermediária de Caxias, uma das cinco do Maranhão e 134 do Brasil, engloba 14 municípios e possui uma área de 27.873,243 km², com Timon destacando-se como o mais populoso. A Região Geográfica Imediata de Caxias é composta por 6 municípios e faz parte das 22 regiões do estado.",
      "A Região Geográfica Intermediária de Caxias possui 6 municípios e uma população estimada em 775.925 habitantes, sendo Timon a cidade menos populosa. A Região Geográfica Imediata de Caxias inclui 14 municípios e está entre as 134 regiões do Brasil."
    ],
    "correct": 2,
    "explanation": "A Região Geográfica Intermediária de Caxias (uma das 5 do Maranhão e 134 do Brasil) engloba 14 municípios, possui uma área de 27.873,243 km², com Timon sendo o mais populoso. A Região Geográfica Imediata de Caxias (uma das 22 do estado) é composta por 6 municípios. O total da população da Região Intermediária é de 775.925 habitantes."
  },
  {
    "text": "<h3> QUESTÃO 12 </p> Sobre o clima de Caxias (MA), é correto afirmar que: </h3>",
    "options": [
      "Durante o verão, Caxias apresenta temperaturas frequentemente acima de 30ºC e máximas que podem chegar a 39.6ºC, com umidade do ar moderada em torno de 59%. No inverno, as temperaturas variam de 19.0ºC a 33.3ºC. Agosto é o melhor mês para visitar devido às temperaturas agradáveis e menor probabilidade de chuvas.",
      "Em Caxias, o verão é caracterizado por temperaturas amenas e umidade alta, com máximas raramente ultrapassando 30ºC. No inverno, as temperaturas são elevadas, variando entre 19.0ºC e 33.3ºC. Julho é considerado o melhor mês para visitar devido à alta umidade e frequência de chuvas.",
      "Caxias apresenta um clima tropical quente e úmido durante todo o ano, com temperaturas geralmente acima de 30ºC e umidade sempre superior a 70%. O melhor mês para visitar é setembro, quando as chuvas são mais frequentes.",
      "O verão em Caxias é moderado, com temperaturas raramente ultrapassando 30ºC e umidade muito baixa. No inverno, as temperaturas caem para abaixo de 19ºC e a sensação térmica é geralmente fria. Janeiro é o mês mais recomendado para visitar devido ao clima fresco e seco."
    ],
    "correct": 0,
    "explanation": "O clima de Caxias é caracterizado por um verão quente com temperaturas frequentemente acima de 30ºC e máximas chegando a 39.6ºC, com umidade moderada (cerca de 59%). O inverno também é quente, variando de 19.0ºC a 33.3ºC. Agosto é um bom mês para visitar, pois oferece temperaturas agradáveis e menor incidência de chuvas."
  },
  {
    "text": "<h3> QUESTÃO 13 </p> Sobre o relevo do leste maranhense, é correto afirmar que: </h3>",
    "options": [
      "O leste maranhense é predominantemente caracterizado por um relevo plano e uniforme, com altitudes entre 0 e 25 metros, e a drenagem ocorre principalmente em áreas com rochas ígneas.",
      "O relevo do leste maranhense é diversificado, composto por planaltos, chapadas, colinas e morros, com altitudes variando de 25 a 400 metros. A drenagem segue zonas de fraqueza nas rochas sedimentares, formando vales pedimentados e relevos residuais. Destacam-se o Planalto Dissecado do Itapecuru e os Tabuleiros do Parnaíba.",
      "A principal característica do relevo do leste maranhense é a presença de montanhas altas e escarpadas com altitudes superiores a 1.000 metros, e a drenagem ocorre em direção nordeste-sudoeste.",
      "O relevo do leste maranhense é composto principalmente por planícies aluviais e deltas com baixa altitude, e a drenagem é predominantemente radial."
    ],
    "correct": 1,
    "explanation": "O leste maranhense possui um relevo diversificado com planaltos, chapadas, colinas e morros, com altitudes entre 25 e 400 metros. A drenagem segue zonas de fraqueza nas rochas sedimentares, com destaque para o Planalto Dissecado do Itapecuru e os Tabuleiros do Parnaíba."
  },
  {
    "text": "<h3> QUESTÃO 14 </p> Sobre a variedade de solos na região do leste maranhense, é correto afirmar que: </h3>",
    "options": [
      "A região do leste maranhense apresenta predominantemente solos ácidos e arenosos, como Areias Quartzosas e Solos Aluviais, que são ideais para a agricultura intensiva e cultivo de grãos.",
      "Os principais tipos de solo no leste maranhense incluem Latossolo Amarelo, Podzólico Vermelho Amarelo, Plintossolos, Gleissolos, Solos Aluviais e Areias Quartzosas, cada um com características que influenciam suas utilizações para atividades agrícolas e pecuárias.",
      "Na região do leste maranhense, os solos são principalmente salinos e alcalinos, como Solos Aluviais e Gleissolos, que são inadequados para a agricultura e recomendados apenas para pastagens.",
      "A diversidade de solos no leste maranhense é limitada a apenas dois tipos principais: Latossolo Vermelho e Podzólico Amarelo, que são adequados principalmente para reflorestamento e cultivo de cana-de-açúcar."
    ],
    "correct": 1,
    "explanation": "O leste maranhense possui uma variedade de solos que inclui: Latossolo Amarelo, Podzólico Vermelho Amarelo, Plintossolos, Gleissolos, Solos Aluviais e Areias Quartzosas, os quais apresentam características distintas para uso agrícola e pecuário."
  },
  {
    "text": "<h3> QUESTÃO 15 </p> Sobre a vegetação do município de Caxias, é correto afirmar que: </h3>",
    "options": [
      "A vegetação de Caxias é predominantemente composta por áreas alagadas e pântanosas, com grande presença de plantas aquáticas e vegetação de várzea.",
      "O município de Caxias apresenta uma vegetação variada, que inclui zonas de cocais, áreas pré-amazônicas e cerrado, com destaque para babaçuais densos, matas de galeria e matas secas conhecidas como \"carrasco\".",
      "Em Caxias, a vegetação é restrita a grandes áreas de floresta tropical densa e monocultura, com predominância de cultivo agrícola e pouca diversidade natural.",
      "A vegetação de Caxias é majoritariamente composta por áreas urbanizadas e parques industriais, com mínima presença de vegetação nativa ou natural."
    ],
    "correct": 1,
    "explanation": "O município de Caxias apresenta uma vegetação diversificada que transita entre zonas de cocais, áreas pré-amazônicas e cerrado. A região é marcada pela presença de babaçuais densos, matas de galeria ou ciliares, e matas secas conhecidas como \"carrasco\"."
  },
  {
    "text": "<h3> QUESTÃO 16 </p> Sobre o cerrado, é correto afirmar que: </h3>",
    "options": [
      "O cerrado é uma formação vegetal de clima temperado, caracterizada por uma vegetação arbórea densa e folhas perenes, com um período de seca curta e chuvoso predominante.",
      "O cerrado é uma formação vegetal típica de clima quente, com um período chuvoso seguido por uma estação seca bem definida. Sua vegetação arbórea é composta por árvores esparsas com copas ramificadas e folhas adaptadas à seca, frequentemente caducifólias.",
      "O cerrado apresenta vegetação arbórea com árvores altas e copas fechadas, adaptadas a um clima frio e úmido com chuvas regulares durante todo o ano.",
      "O cerrado é caracterizado por vegetação arbustiva densa e baixa, predominando em climas frios e secos com períodos prolongados de estiagem."
    ],
    "correct": 1,
    "explanation": "O cerrado é uma formação vegetal de clima quente, com uma estação seca bem definida e um período chuvoso. Sua vegetação é caracterizada por árvores esparsas, copas ramificadas e folhas adaptadas à seca, muitas vezes caducifólias (caem na seca)."
  },
  {
    "text": "<h3> QUESTÃO 17 </p> Sobre o Babaçual, é correto afirmar que: </h3>",
    "options": [
      "O Babaçual é uma formação vegetal típica de áreas áridas, caracterizada pela predominância de arbustos espinhosos e plantas xerófitas, adaptadas à escassez de água.",
      "O Babaçual é uma formação vegetal marcada pela presença predominante da palmeira Babaçu, pertencente à família das palmáceas. É típica de áreas úmidas, onde também é comum encontrar o Buriti em áreas mais baixas.",
      "O Babaçual é uma vegetação típica de áreas costeiras, caracterizada por manguezais e vegetação salina, adaptada às condições de alta salinidade.",
      "O Babaçual é uma formação vegetal associada a áreas de altitude elevada, caracterizada por coníferas e vegetação adaptada a climas frios."
    ],
    "correct": 1,
    "explanation": "O Babaçual é uma formação vegetal dominada pela palmeira Babaçu (Attalea speciosa), da família das palmáceas. É comum em áreas de clima quente e úmido, muitas vezes associada a áreas de ocorrência do Buriti em locais mais baixos e úmidos."
  },
  {
    "text": "<h3> QUESTÃO 18 </p> Sobre as Matas de Galeria ou Matas Ciliares, é correto afirmar que: </h3>",
    "options": [
      "As Matas de Galeria ocorrem principalmente em áreas de alta montanha e são caracterizadas por vegetação herbácea e arbustiva adaptada a climas frios.",
      "As Matas Ciliares são formações vegetais típicas de áreas áridas e semiáridas, com vegetação xerofítica adaptada à baixa disponibilidade de água.",
      "As Matas de Galeria ou Matas Ciliares ocorrem ao longo dos rios e riachos na região do cerrado, sendo formações arbóreas-arbustivas, algumas vezes associadas ao buritizal.",
      "As Matas Ciliares são formadas por vegetação aquática adaptada a ambientes submersos e são comuns em regiões de alta salinidade."
    ],
    "correct": 2,
    "explanation": "As Matas de Galeria ou Matas Ciliares são formações vegetais que ocorrem ao longo dos rios e riachos dentro da região do cerrado. São caracterizadas por vegetação arbórea-arbustiva e frequentemente associadas ao buritizal."
  },
  {
    "text": "<h3> QUESTÃO 19 </p> Sobre a vegetação no município de Caxias, é correto afirmar que: </h3>",
    "options": [
      "No município de Caxias, predominam espécies vegetais aquáticas, como o Vitória-régia e o Lótus, adaptadas a ambientes alagadiços e áreas de inundação.",
      "As espécies vegetais encontradas em Caxias incluem Pau-terra, Murici, Faveira de bolota, Pequi, Bacuri, Angico, Aroeira e Pau d'arco, que desempenham papéis importantes na ecologia local, como fornecimento de habitat para fauna e recursos alimentares e medicinais.",
      "No município de Caxias, a vegetação é predominantemente composta por espécies de coníferas e vegetação de altitude, adaptadas a climas frios e úmidos.",
      "Em Caxias, as principais espécies vegetais são de origem exótica, como o Eucalipto e o Pinus, que substituem a vegetação nativa e dominam a paisagem."
    ],
    "correct": 1,
    "explanation": "O município de Caxias possui uma flora nativa rica, com espécies como Pau-terra, Murici, Faveira de bolota, Pequi, Bacuri, Angico, Aroeira e Pau d'arco. Essas espécies são vitais para a ecologia local, oferecendo habitat, alimentos e recursos medicinais."
  },
  {
    "text": "<h3> QUESTÃO 20 </p> Sobre a geologia do município de Caxias, é correto afirmar que: </h3>",
    "options": [
      "O município de Caxias está situado na Bacia Sedimentar do Amazonas, que se desenvolveu sobre riftes devonianos como o Baixo Tapajós e Alto Tapajós.",
      "O município de Caxias está situado na Bacia Sedimentar do Parnaíba, que se desenvolveu sobre riftes cambro-ordovicianos como Jaibaras, Jaguarapi, Cococi/Rio Jucá, São Julião e São Raimundo Nonato. Esta bacia compreende supersequências do Siluriano (Grupo Serra Grande), Devoniano (Grupo Canindé) e Carbonífero-Triássico (Grupo Balsas), com várias formações geológicas presentes.",
      "O município de Caxias está situado na Bacia Sedimentar do Paraná, que se desenvolveu sobre riftes triássicos como São Joaquim e Curitiba.",
      "O município de Caxias está situado na Bacia Sedimentar do São Francisco, que se desenvolveu sobre riftes permianos como Itapetinga e Guanambi."
    ],
    "correct": 1,
    "explanation": "Caxias está localizado na Bacia Sedimentar do Parnaíba, uma das maiores bacias sedimentares do Brasil. Esta bacia se desenvolveu sobre riftes cambro-ordovicianos e contém supersequências do Siluriano, Devoniano e Carbonífero-Triássico."
  },
  {
    "text": "<h3> QUESTÃO 21 </p> Sobre as formações geológicas presentes no município de Caxias, é correto afirmar que: </h3>",
    "options": [
      "A Formação Piauí é do período Permiano e é composta por arenitos vermelhos com intercalações de sílex, encontrada sobre os basaltos da formação Mosquito.",
      "A Formação Pedra de Fogo é do período Permiano e é caracterizada por siltitos, folhelhos e calcários, com presença marcante de silexito e troncos de Psaronius.",
      "A Formação Motuca é do período Jurássico e apresenta folhelhos vermelho-tijolo intercalados com calcário e anidrita, e arenitos finos a médios.",
      "A Formação Sardinha é do período Carbonífero e composta por basaltos de cor preta e textura amigdaloidal."
    ],
    "correct": 1,
    "explanation": "A Formação Pedra de Fogo, do período Permiano, é composta por siltitos, folhelhos e calcários, com a presença marcante de silexito e troncos de Psaronius. As alternativas A, C e D contêm informações incorretas sobre as formações geológicas. A Formação Piauí é do período Carbonífero, a Formação Motuca é do período Permiano Triássico, e a Formação Sardinha é do período Cretáceo."
  },
  {
    "text": "<h3> QUESTÃO 22 </p> O município de Caxias, no estado do Maranhão, está inserido em duas importantes bacias hidrográficas. Quais são essas bacias, e quais são algumas das características principais de cada uma? </h3>",
    "options": [
      "Bacia do Rio Parnaíba e Bacia do Rio Itapecuru",
      "Bacia do Rio Amazonas e Bacia do Rio São Francisco",
      "Bacia do Rio Tocantins e Bacia do Rio Xingu",
      "Bacia do Rio Paraná e Bacia do Rio Paraguai"
    ],
    "correct": 0,
    "explanation": "O município de Caxias está inserido nas bacias do Rio Parnaíba e do Rio Itapecuru. A Bacia do Parnaíba é uma das mais importantes do Nordeste, e a do Itapecuru é crucial para o abastecimento de água do Maranhão."
  },
  {
    "text": "<h3> QUESTÃO 23 </p> No período de janeiro a abril de 2024, foram registradas 1,1 mil admissões formais e 1,1 mil desligamentos em Caxias. Qual foi o saldo de trabalhadores formais durante esse período e como esse desempenho se compara ao ano anterior? </h3>",
    "options": [
      "Saldo positivo de 0 trabalhadores, continuando o saldo positivo do ano anterior.",
      "Saldo negativo de -23 trabalhadores, igualando o saldo negativo do ano anterior.",
      "Saldo positivo de 23 trabalhadores, revertendo o saldo negativo do ano anterior.",
      "Saldo negativo de -23 trabalhadores, mostrando uma piora em relação ao saldo positivo do ano anterior."
    ],
    "correct": 1,
    "explanation": "No período de janeiro a abril de 2024, Caxias registrou 1.100 admissões e 1.123 desligamentos, resultando em um saldo negativo de -23 trabalhadores formais. Esse resultado é uma piora em comparação com o saldo positivo registrado no mesmo período do ano anterior."
  },
  {
    "text": "<h3> QUESTÃO 24 </p> Apesar de registrar um saldo negativo de -23 trabalhadores no período de janeiro a abril de 2024, como o município de Caxias se posiciona em termos de desempenho na geração de empregos dentro da pequena região local? </h3>",
    "options": [
      "Caxias apresenta o 1º melhor desempenho em termos absolutos na geração de vagas de emprego e se destaca como a cidade que mais cresce em termos de geração de empregos na região.",
      "Caxias apresenta o 3º melhor desempenho em termos absolutos na geração de vagas de emprego e se destaca como a 2ª que mais cresce em termos de geração de empregos, considerando o tamanho da sua população.",
      "Caxias apresenta o 5º melhor desempenho em termos absolutos na geração de vagas de emprego e se destaca como a 4ª que mais cresce em termos de geração de empregos, levando em consideração o tamanho da sua população.",
      "Caxias apresenta o 7º melhor desempenho em termos absolutos na geração de vagas de emprego e se destaca como a 6ª que mais cresce em termos de geração de empregos, levando em consideração o tamanho da sua população."
    ],
    "correct": 2,
    "explanation": "Apesar do saldo negativo no período, Caxias apresenta o 1º melhor desempenho em termos absolutos na geração de vagas de emprego na pequena região local, destacando-se como a cidade com maior crescimento na geração de empregos, considerando o tamanho de sua população. Este dado é fundamental para a análise econômica do município."
  },
  {
    "text": "<h3> QUESTÃO 25 </p> Com base nos dados sobre a abertura de novas empresas em Caxias até maio de 2024, qual das seguintes afirmações é correta? </h3>",
    "options": [
      "Até maio de 2024, Caxias registrou a abertura de 150 novas empresas, das quais 10 operam exclusivamente pela internet. No último mês, 30 novas empresas foram estabelecidas, sendo 5 delas com atuação online.",
      "Até maio de 2024, Caxias registrou a abertura de 122 novas empresas, das quais 8 operam exclusivamente pela internet. No último mês, 23 novas empresas foram estabelecidas, sendo 4 delas com atuação online.",
      "Até maio de 2024, Caxias registrou a abertura de 110 novas empresas, das quais 6 operam exclusivamente pela internet. No último mês, 20 novas empresas foram estabelecidas, sendo 3 delas com atuação online.",
      "Até maio de 2024, Caxias registrou a abertura de 130 novas empresas, das quais 9 operam exclusivamente pela internet. No último mês, 25 novas empresas foram estabelecidas, sendo 4 delas com atuação online."
    ],
    "correct": 1,
    "explanation": "Até maio de 2024, Caxias abriu 122 novas empresas, sendo 8 com operação exclusivamente online. No mês anterior (abril), foram abertas 23 novas empresas, com 4 delas operando exclusivamente online. Estes dados demonstram o dinamismo do setor empresarial local."
  },
  {
    "text": "<h3> QUESTÃO 26 </p> Em relação ao número total de novas empresas abertas em Caxias até maio de 2024, é correto afirmar que: </h3>",
    "options": [
      "O número total de novas empresas abertas em Caxias até maio de 2024 foi de 122, o que representa um aumento de 10% em relação ao mesmo período do ano anterior.",
      "O número total de novas empresas abertas em Caxias até maio de 2024 foi de 122, o que representa uma diminuição de 5% em relação ao mesmo período do ano anterior.",
      "O número total de novas empresas abertas em Caxias até maio de 2024 foi de 150, superando o número de empresas abertas em todo o ano de 2023.",
      "O número total de novas empresas abertas em Caxias até maio de 2024 foi de 122, sendo este um dos menores índices de abertura de empresas nos últimos cinco anos."
    ],
    "correct": 1,
    "explanation": "O número total de novas empresas abertas em Caxias até maio de 2024 foi de 122, o que representa um crescimento de 10% em comparação com o mesmo período de 2023. Este crescimento é um indicador da vitalidade econômica do município."
  },
  {
    "text": "<h3> QUESTÃO 27 </p> Em relação ao PIB per capita de Caxias, qual das seguintes afirmações é correta? </h3>",
    "options": [
      "O PIB per capita de Caxias é de R$ 12,7 mil, superior à média do estado e da grande região de Caxias.",
      "O PIB per capita de Caxias é de R$ 12,7 mil, inferior à média do estado, mas superior à média da grande região e da pequena região de Caxias.",
      "O PIB per capita de Caxias é de R$ 17,5 mil, igual à média do estado, mas inferior à média da grande região e da pequena região de Caxias.",
      "O PIB per capita de Caxias é de R$ 12,7 mil, inferior à média do estado e à média da grande região de Caxias."
    ],
    "correct": 1,
    "explanation": "O PIB per capita de Caxias é de R$ 12,7 mil, um valor que está abaixo tanto da média do estado do Maranhão quanto da média da grande região de Caxias, indicando um desafio econômico em termos de distribuição de riqueza."
  },
  {
    "text": "<h3> QUESTÃO 28 </p> Qual é a principal contribuição para o PIB de Caxias, considerado um polo regional de alta influência, e como se distribuem as outras atividades econômicas? </h3>",
    "options": [
      "A indústria contribui com 49%, seguida pelos serviços com 36,3%, administração pública com 10% e agropecuária com 4,6%.",
      "A administração pública contribui com 49%, seguida pelos serviços com 36,3%, indústria com 10% e agropecuária com 4,6%.",
      "Os serviços contribuem com 49%, seguidos pela administração pública com 36,3%, indústria com 10% e agropecuária com 4,6%.",
      "A agropecuária contribui com 49%, seguida pela indústria com 36,3%, serviços com 10% e administração pública com 4,6%."
    ],
    "correct": 2,
    "explanation": "A maior contribuição para o PIB de Caxias é a Administração Pública (49%), seguida pelo Setor de Serviços (36,3%), Indústria (10%) e Agropecuária (4,6%). A alta participação da administração pública reflete sua importância como polo regional, especialmente na provisão de serviços públicos e emprego."
  },
  {
    "text": "<h3> QUESTÃO 29 </p> Em relação ao PIB de Caxias, é correto afirmar que: </h3>",
    "options": [
      "O PIB de Caxias é de R$ 3,8 bilhões, o que o torna o 5º maior do Maranhão e o 350º do Brasil.",
      "O PIB de Caxias é de R$ 2,8 bilhões, o que o torna o 5º maior do Maranhão e o 350º do Brasil.",
      "O PIB de Caxias é de R$ 3,8 bilhões, o que o torna o 7º maior do Maranhão e o 450º do Brasil.",
      "O PIB de Caxias é de R$ 2,8 bilhões, o que o torna o 7º maior do Maranhão e o 450º do Brasil."
    ],
    "correct": 1,
    "explanation": "O PIB de Caxias é de R$ 2,8 bilhões. Isso o coloca como o 5º maior PIB do estado do Maranhão e o 350º maior do Brasil. Este dado ressalta a importância econômica de Caxias no contexto estadual e nacional."
  },
  {
    "text": "<h3> QUESTÃO 30 </p> Em 2010, qual era a taxa de escolarização de crianças de 6 a 14 anos em Caxias, e como esse índice posicionou o município em comparação com outros municípios do Maranhão e do Brasil? </h3>",
    "options": [
      "A taxa de escolarização em Caxias era de 95,2%, posicionando o município na 172ª colocação entre os 217 municípios do Maranhão e na 4954ª posição entre os 5570 municípios do Brasil.",
      "A taxa de escolarização em Caxias era de 95,2%, posicionando o município na 195ª colocação entre os 217 municípios do Maranhão e na 4954ª posição entre os 5570 municípios do Brasil.",
      "A taxa de escolarização em Caxias era de 90,2%, posicionando o município na 172ª colocação entre os 217 municípios do Maranhão e na 4000ª posição entre os 5570 municípios do Brasil.",
      "A taxa de escolarização em Caxias era de 95,2%, posicionando o município na 172ª colocação entre os 217 municípios do Maranhão e na 3000ª posição entre os 5570 municípios do Brasil."
    ],
    "correct": 0,
    "explanation": "Em 2010, a taxa de escolarização de crianças de 6 a 14 anos em Caxias era de 95,2%. Este índice posicionou o município na 172ª colocação no estado do Maranhão (entre 217 municípios) e na 4954ª posição no Brasil (entre 5570 municípios)."
  },
  {
    "text": "<h3> QUESTÃO 31 </p> De acordo com o Índice de Desenvolvimento da Educação Básica (IDEB) de 2021, quais são os resultados do IDEB para os anos iniciais e finais do ensino fundamental na rede pública municipal de Caxias? </h3>",
    "options": [
      "Anos Iniciais: 4.8; Anos Finais: 4.5.",
      "Anos Iniciais: 5.2; Anos Finais: 4.8.",
      "Anos Iniciais: 4.5; Anos Finais: 4.0.",
      "Anos Iniciais: 5.0; Anos Finais: 4.3."
    ],
    "correct": 0,
    "explanation": "De acordo com o IDEB de 2021, os resultados para a rede pública municipal de Caxias foram: 5.0 para os anos iniciais do ensino fundamental e 4.3 para os anos finais do ensino fundamental."
  },
  {
    "text": "<h3> QUESTÃO 32 </p> Em relação ao saneamento básico em Caxias, qual das seguintes afirmações é correta, segundo dados de 2010? </h3>",
    "options": [
      "15,2% da população morava em domicílios com esgotamento sanitário adequado.",
      "26,5% da população morava em domicílios com esgotamento sanitário adequado.",
      "50% da população morava em domicílios com esgotamento sanitário adequado.",
      "75% da população morava em domicílios com esgotamento sanitário adequado."
    ],
    "correct": 0,
    "explanation": "Em 2010, 26,5% da população de Caxias morava em domicílios com esgotamento sanitário adequado. Este índice demonstra a necessidade de investimentos em infraestrutura de saneamento no município."
  },
  {
    "text": "<h3> QUESTÃO 33 </p> Qual era a porcentagem de domicílios em Caxias (MA) com acesso à rede geral de água em 2010? </h3>",
    "options": [
      "90,7%",
      "85,5%",
      "75,3%",
      "60,1%"
    ],
    "correct": 0,
    "explanation": "Em 2010, Caxias (MA) apresentava uma taxa de 90,7% dos domicílios com acesso à rede geral de água. Este é um indicador positivo de cobertura de distribuição de água."
  },
  {
    "text": "<h3> QUESTÃO 34 </p> Qual é o principal corpo d'água responsável pelo abastecimento de água do município de Caxias (MA)? </h3>",
    "options": [
      "Rio Parnaíba",
      "Rio Itapecuru",
      "Rio Tocantins",
      "Lago de Santo Antônio"
    ],
    "correct": 0,
    "explanation": "O principal corpo d'água responsável pelo abastecimento de água de Caxias é o Rio Itapecuru, vital para o município e para diversas outras cidades do Maranhão."
  },
  {
    "text": "<h3> QUESTÃO 35 </p> Qual era o percentual de domicílios urbanos com coleta de lixo em Caxias em 2010? </h3>",
    "options": [
      "95,0%",
      "87,0%",
      "79,0%",
      "65,0%"
    ],
    "correct": 0,
    "explanation": "Em 2010, 87,0% dos domicílios urbanos em Caxias (MA) tinham coleta de lixo. Este é um indicador importante para a gestão de resíduos e saúde pública."
  },
  {
    "text": "<h3> QUESTÃO 36 </p> Qual era o percentual de domicílios urbanos com iluminação elétrica em Caxias em 2010? </h3>",
    "options": [
      "99,5%",
      "98,8%",
      "95,0%",
      "90,0%"
    ],
    "correct": 0,
    "explanation": "Em 2010, 98,8% dos domicílios urbanos em Caxias (MA) possuíam iluminação elétrica. Este alto percentual reflete um bom nível de acesso à infraestrutura básica."
  },
  {
    "text": "<h3> QUESTÃO 37 </p> Qual era a porcentagem de domicílios com lixo depositado em caçamba de lixo em Caxias em 2010? </h3>",
    "options": [
      "38,9%",
      "25,5%",
      "15,0%",
      "5,2%"
    ],
    "correct": 0,
    "explanation": "Em 2010, 38,9% dos domicílios em Caxias (MA) tinham o lixo depositado em caçamba de lixo. Isso indica que a caçamba era o método mais comum de descarte, seguido pela coleta regular."
  },
  {
    "text": "<h3> QUESTÃO 38 </p> Em 2010, qual era a porcentagem da população de Caxias com acesso a esgotamento sanitário adequado, e como esse índice pode influenciar os indicadores de saúde pública? </h3>",
    "options": [
      "26,5%; Pode levar a um aumento na incidência de doenças relacionadas à falta de saneamento.",
      "50%; Tem impacto neutro sobre os indicadores de saúde pública.",
      "75%; Reduz significativamente a incidência de doenças relacionadas ao saneamento.",
      "10%; Não afeta os indicadores de saúde pública."
    ],
    "correct": 0,
    "explanation": "Em 2010, 26,5% da população de Caxias tinha acesso a esgotamento sanitário adequado. Este baixo índice pode contribuir para um aumento na incidência de doenças de veiculação hídrica e outras enfermidades relacionadas à falta de saneamento básico, afetando negativamente a saúde pública."
  },
  {
    "text": "<h3> QUESTÃO 39 </p> Em 2010, quantas pessoas estavam expostas a riscos ambientais em Caxias, e qual é a importância de políticas públicas voltadas para a mitigação desses riscos? </h3>",
    "options": [
      "1.822; As políticas públicas são pouco importantes, pois o número é baixo.",
      "1.822; As políticas públicas são cruciais para reduzir o impacto das enchentes e deslizamentos, que afetam diretamente a vida dessas pessoas.",
      "5.000; O risco ambiental é principalmente relacionado à poluição do ar e não requer políticas específicas.",
      "10.000; Os riscos são facilmente mitigados pela população, sem a necessidade de intervenção pública."
    ],
    "correct": 2,
    "explanation": "Em 2010, 1.822 pessoas estavam expostas a riscos ambientais em Caxias. As políticas públicas são cruciais para a mitigação desses riscos, especialmente os relacionados a enchentes e deslizamentos, visando proteger a vida e a segurança da população afetada."
  },
  {
    "text": "<h3> QUESTÃO 40 </p> Em relação à arborização das vias públicas em Caxias, qual era a porcentagem de domicílios urbanos em vias arborizadas em 2010, e qual era a posição do município no estado e no Brasil? </h3>",
    "options": [
      "87,7%; 35ª posição no estado e 1719ª no Brasil.",
      "75,0%; 50ª posição no estado e 2500ª no Brasil.",
      "90,0%; 10ª posição no estado e 500ª no Brasil.",
      "80,5%; 60ª posição no estado e 3000ª no Brasil."
    ],
    "correct": 0,
    "explanation": "Em 2010, 87,7% dos domicílios urbanos de Caxias estavam em vias arborizadas. Isso colocou o município na 35ª posição no estado do Maranhão e na 1719ª no Brasil, indicando um bom desempenho em arborização urbana."
  },
  {
    "text": "<h3> QUESTÃO 41 </p> Qual foi o valor aproximado do salário médio mensal dos trabalhadores formais em Caxias em 2021? </h3>",
    "options": [
      "Aproximadamente 1,5 salários mínimos.",
      "Aproximadamente 2,0 salários mínimos.",
      "Aproximadamente 1,0 salário mínimo.",
      "Aproximadamente 2,5 salários mínimos."
    ],
    "correct": 0,
    "explanation": "Em 2021, o salário médio mensal dos trabalhadores formais em Caxias foi de aproximadamente 1,5 salários mínimos. Esse valor fornece uma visão do nível de remuneração na cidade e é um indicador importante para a análise econômica local, refletindo a capacidade de compra e o padrão de vida."
  },
  {
    "text": "<h3> QUESTÃO 42 </p> Qual foi o total de pessoas ocupadas em Caxias em 2021, e qual foi a proporção entre a população ocupada e a população total? </h3>",
    "options": [
      "10.992 pessoas; 8,5% da população total.",
      "15.500 pessoas; 12,0% da população total.",
      "8.500 pessoas; 6,0% da população total.",
      "12.000 pessoas; 9,5% da população total."
    ],
    "correct": 1,
    "explanation": "Em 2021, Caxias contava com 10.992 pessoas ocupadas, representando 8,5% da população total. Esse indicador é fundamental para avaliar o nível de emprego formal e a atividade econômica da cidade."
  },
  {
    "text": "<h3> QUESTÃO 43 </p> Qual era o percentual da população com rendimento nominal mensal per capita de até 1/2 salário mínimo em Caxias em 2010, e o que isso reflete? </h3>",
    "options": [
      "40,5%; Reflete um alto nível de desigualdade e pobreza.",
      "50,5%; Reflete um alto nível de desigualdade e pobreza, indicando que mais da metade da população vivia em situação de vulnerabilidade econômica.",
      "60,5%; Reflete um nível moderado de desigualdade e pobreza.",
      "30,5%; Reflete um baixo nível de desigualdade e pobreza."
    ],
    "correct": 1,
    "explanation": "Em 2010, 50,5% da população de Caxias tinha rendimento nominal mensal per capita de até 1/2 salário mínimo. Este dado reflete um alto nível de desigualdade e pobreza, indicando que mais da metade da população vivia em situação de vulnerabilidade econômica."
  },
  {
    "text": "<h3> QUESTÃO 44 </p> Em 2022, qual foi a produção e o valor de produção do tambaqui em Caxias (MA)? </h3>",
    "options": [
      "500.000 kg, R$ 5.000,00 mil",
      "411.480 kg, R$ 3.909,06 mil",
      "350.000 kg, R$ 3.000,00 mil",
      "600.000 kg, R$ 6.500,00 mil"
    ],
    "correct": 1,
    "explanation": "Em 2022, Caxias produziu 411.480 kg de tambaqui, com um valor de produção de R$ 3.909,06 mil. Esta produção significativa demonstra o potencial da aquicultura local, contribuindo tanto para a economia quanto para a segurança alimentar do município."
  },
  {
    "text": "<h3> QUESTÃO 45 </p> Em 2022, qual foi a produção de mel de abelha em Caxias (MA)? </h3>",
    "options": [
      "5.000 kg",
      "8.000 kg",
      "10.000 kg",
      "12.000 kg"
    ],
    "correct": 1,
    "explanation": "Em 2022, Caxias produziu 10.000 kg de mel de abelha. A apicultura é uma atividade econômica relevante no município, contribuindo para a diversificação da produção agropecuária."
  },
  {
    "text": "<h3> QUESTÃO 46 </p> Quais foram os principais produtos agrícolas permanentes e temporários de Caxias em 2022? </h3>",
    "options": [
      "Permanentes: Coco-da-baía, Manga e Abacaxi. Temporários: Arroz, Mandioca e Milho.",
      "Permanentes: Laranja, Limão e Coco-da-baía. Temporários: Cana-de-açúcar, Soja e Feijão.",
      "Permanentes: Manga, Caju e Abacaxi. Temporários: Arroz, Milho e Soja.",
      "Permanentes: Banana, Coco-da-baía e Manga. Temporários: Arroz, Mandioca e Milho."
    ],
    "correct": 0,
    "explanation": "Em 2022, os principais produtos agrícolas permanentes de Caxias (MA) foram a Banana, o Coco-da-baía e a Manga. Já os produtos temporários de destaque foram o Arroz, a Mandioca e o Milho. Esta diversificação reflete a importância da agricultura para a economia local."
  },
  {
    "text": "<h3> QUESTÃO 47 </p> Em relação à pecuária em Caxias (MA) em 2022, qual foi o número de cabeças de gado bovino e a produção de leite de vaca? </h3>",
    "options": [
      "50.000 cabeças de gado bovino; 10.000 litros de leite de vaca.",
      "70.000 cabeças de gado bovino; 15.000 litros de leite de vaca.",
      "40.000 cabeças de gado bovino; 8.000 litros de leite de vaca.",
      "60.000 cabeças de gado bovino; 12.000 litros de leite de vaca."
    ],
    "correct": 0,
    "explanation": "Em 2022, Caxias registrou 50.000 cabeças de gado bovino, com uma produção de 10.000 litros de leite de vaca. A pecuária é uma atividade econômica importante, complementando a agricultura na região."
  },
  {
    "text": "<h3> QUESTÃO 48 </p> Qual é a importância e a característica do Centro Histórico, Arquitetônico e Área Paisagística de Caxias (MA)? </h3>",
    "options": [
      "É tombado apenas pela sua importância arquitetônica, focando-se em um único estilo do século XIX.",
      "O Centro Histórico é uma área de grande importância histórica e arquitetônica, compreendendo diversos estilos que refletem diferentes períodos da história brasileira e inclui tanto aspectos arquitetônicos quanto paisagísticos.",
      "É tombado apenas pela sua importância paisagística, sem valor arquitetônico significativo.",
      "O tombamento abrange apenas a área de edifícios públicos, excluindo residências privadas e espaços abertos."
    ],
    "correct": 1,
    "explanation": "O Centro Histórico, Arquitetônico e Área Paisagística de Caxias (MA) é um patrimônio tombado que abrange uma vasta área urbana e é significativo por sua diversidade de estilos arquitetônicos que refletem diferentes períodos históricos do Brasil. Além disso, o tombamento protege tanto os aspectos arquitetônicos quanto os paisagísticos da área, assegurando a preservação do patrimônio cultural para as futuras gerações."
  },
  {
    "text": "<h3> QUESTÃO 49 </p> Quais são as características dos casarões e sobrados do Centro Histórico de Caxias (MA)? </h3>",
    "options": [
      "São construções modernas com fachadas de vidro e aço, refletindo a arquitetura contemporânea.",
      "Os casarões e sobrados do Centro Histórico preservam características originais, como elementos arquitetônicos barrocos e neoclássicos, e são importantes para a compreensão da vida social e econômica da cidade nos séculos passados.",
      "São exclusivamente casas térreas com telhados de palha, características da arquitetura colonial rural.",
      "São réplicas de construções europeias, sem valor histórico original."
    ],
    "correct": 1,
    "explanation": "Os casarões e sobrados do Centro Histórico de Caxias preservam características originais, como elementos arquitetônicos barrocos e neoclássicos. Eles são cruciais para entender a vida social e econômica da cidade nos séculos passados, sendo testemunhos vivos de sua história."
  },
  {
    "text": "<h3> QUESTÃO 50 </p> Além da estética arquitetônica, o que as construções do Centro Histórico de Caxias (MA) representam em termos de história e cultura? </h3>",
    "options": [
      "Representam a arquitetura moderna de meados do século XX, sem relação com eventos históricos anteriores.",
      "Além da estética, as construções incluem igrejas dos séculos 18 e 19 e monumentos relacionados a eventos significativos, como a luta pela Independência e a Balaiada, refletindo a diversidade cultural e histórica de Caxias.",
      "As construções representam apenas a cultura indígena, com pouca influência da colonização europeia.",
      "São apenas edifícios administrativos, sem valor para a narrativa histórica ou cultural da cidade."
    ],
    "correct": 1,
    "explanation": "As construções no Centro Histórico de Caxias são mais do que meros exemplos de estética arquitetônica; elas são testemunhos importantes da história local. As igrejas dos séculos 18 e 19 e os monumentos relacionados a eventos como a luta pela Independência e a Balaiada são partes significativas da narrativa histórica e cultural de Caxias. Estas construções, portanto, representam a diversidade cultural e histórica da cidade."
  },
  {
    "text": "<h3> QUESTÃO 51 </p> Qual é a principal característica da Casa de Cultura de Caxias (MA)? </h3>",
    "options": [
      "É um museu de arte contemporânea, focado em exposições de artistas internacionais.",
      "É um espaço dedicado à preservação e exposição do patrimônio cultural e histórico de Caxias, com coleções de documentos, fotografias e objetos antigos.",
      "É um centro de eventos para shows e festas populares, sem função museológica.",
      "É uma biblioteca exclusivamente digital, sem acervo físico."
    ],
    "correct": 1,
    "explanation": "A Casa de Cultura de Caxias (MA) é um espaço vital dedicado à preservação e exposição do patrimônio cultural e histórico da cidade. Seu acervo inclui coleções de documentos, fotografias e objetos antigos, que contam a história de Caxias."
  },
  {
    "text": "<h3> QUESTÃO 52 </p> O que a Casa de Cultura oferece à população de Caxias? </h3>",
    "options": [
      "Apenas cursos de culinária e gastronomia.",
      "Programas educacionais, exposições temáticas, palestras e atividades culturais, promovendo o acesso ao conhecimento e o desenvolvimento cultural da comunidade.",
      "Serviços de consultoria empresarial e financeira.",
      "Exclusivamente serviços de atendimento médico e odontológico."
    ],
    "correct": 1,
    "explanation": "A Casa de Cultura de Caxias (MA) oferece diversos programas educacionais, exposições temáticas, palestras e atividades culturais. Sua função é promover o acesso ao conhecimento e o desenvolvimento cultural da comunidade caxiense."
  },
  {
    "text": "<h3> QUESTÃO 53 </p> Qual é a principal atração do Complexo Turístico da Veneza em Caxias (MA)? </h3>",
    "options": [
      "Uma réplica da cidade de Veneza, na Itália, com gôndolas e canais artificiais.",
      "Beleza natural, incluindo áreas ecológicas e atrações aquáticas.",
      "Uma grande feira de artesanato local e gastronomia típica.",
      "Um centro de convenções e negócios para eventos corporativos."
    ],
    "correct": 1,
    "explanation": "O Complexo Turístico da Veneza é notável por sua beleza natural, que inclui áreas ecológicas e atrações aquáticas. Isso o torna um destino atraente para aqueles interessados em turismo de natureza e lazer aquático."
  },
  {
    "text": "<h3> QUESTÃO 54 </p> Qual é a importância histórica e religiosa da Igreja de São Benedito em Caxias (MA)? </h3>",
    "options": [
      "É uma igreja moderna, construída no século XXI, com arquitetura futurista.",
      "Uma das igrejas mais antigas da cidade, representando a fé e a história religiosa de Caxias.",
      "É um templo de religiões afro-brasileiras, sem relação com o catolicismo.",
      "Um centro de estudos de teologia e filosofia, sem funções de culto."
    ],
    "correct": 1,
    "explanation": "A Igreja de São Benedito é destacada por ser uma das mais antigas da cidade, simbolizando a fé e a história religiosa de Caxias. Sua preservação é vital para o patrimônio cultural e religioso do município."
  },
  {
    "text": "<h3> QUESTÃO 55 </p> Qual é o significado do Complexo Turístico e Cultural Mirante da Balaiada em Caxias (MA)? </h3>",
    "options": [
      "Um parque de diversões temático sobre a cultura maranhense.",
      "Um espaço significativo que oferece vistas panorâmicas e valoriza a história local.",
      "Um centro de pesquisa científica sobre a fauna e flora local.",
      "Um porto fluvial para o transporte de mercadorias."
    ],
    "correct": 1,
    "explanation": "O Complexo Turístico e Cultural Mirante da Balaiada é um local significativo que oferece vistas panorâmicas da cidade e, principalmente, valoriza a história local, especialmente o período da Balaiada, um dos eventos mais importantes na história de Caxias."
  },
  {
    "text": "<h3> QUESTÃO 56 </p> O que o Mirante da Balaiada simboliza para a cidade de Caxias? </h3>",
    "options": [
      "O poder econômico da elite local no século XXI.",
      "A resistência e a luta do povo caxiense por liberdade e justiça durante a Balaiada.",
      "A fundação da cidade por missionários católicos no século XVIII.",
      "A influência da cultura africana na formação da identidade local."
    ],
    "correct": 1,
    "explanation": "O Mirante da Balaiada, juntamente com o Memorial, simboliza a resistência e a luta do povo caxiense por liberdade e justiça durante a Balaiada, um dos maiores conflitos sociais do Maranhão no século XIX."
  },
  {
    "text": "<h3> QUESTÃO 57 </p> Por meio de qual instrumento legal o Memorial da Balaiada foi tombado, e qual foi o ano? </h3>",
    "options": [
      "Lei Estadual de 1990.",
      "Portaria Federal de 2005.",
      "Decreto do Governo Municipal de 2018.",
      "Resolução da Câmara Municipal de 1985."
    ],
    "correct": 2,
    "explanation": "O Memorial da Balaiada foi tombado por meio de um Decreto do Governo Municipal de 2018, o que reconhece sua importância histórica e cultural para a cidade de Caxias."
  },
  {
    "text": "<h3> QUESTÃO 58 </p> Qual evento histórico é o foco principal do Memorial da Balaiada em Caxias (MA)? </h3>",
    "options": [
      "A Guerra do Paraguai.",
      "A Proclamação da República.",
      "A Balaiada, um movimento revolucionário que ocorreu entre 1838 e 1841 no Maranhão.",
      "A Revolução Farroupilha."
    ],
    "correct": 2,
    "explanation": "O Memorial da Balaiada, como o nome sugere, é dedicado a preservar e expor a memória da Balaiada, um importante movimento revolucionário popular que ocorreu no Maranhão entre 1838 e 1841."
  },
  {
    "text": "<h3> QUESTÃO 59 </p> Quais são os nomes dos balaios que lideraram a Balaiada, e qual foi a data de sua eclosão? </h3>",
    "options": [
      "Zeca Balaiada, Manuel Balaiada e Sebastião Balaiada; 1839.",
      "Raimundo Balaiada, Cosme Balaiada e Inácio Balaiada; 1840.",
      "Raimundo Gomes, apelidado de \"Cara Preta\", e Manuel Francisco dos Anjos Ferreira, apelido de \"Balaio\"; 1838.",
      "Antônio Balaiada, Pedro Balaiada e José Balaiada; 1841."
    ],
    "correct": 1,
    "explanation": "A Balaiada foi liderada principalmente por Raimundo Gomes, apelidado de \"Cara Preta\", e Manuel Francisco dos Anjos Ferreira, apelidado de \"Balaio\", além do negro Cosme. O movimento eclodiu em 1838."
  },
  {
    "text": "<h3> QUESTÃO 60 </p> Qual é a importância da Igreja de Nossa Senhora do Rosário em Caxias (MA)? </h3>",
    "options": [
      "É a igreja mais moderna da cidade, com alta tecnologia.",
      "É um símbolo da devoção mariana e da fé católica, e seu estilo arquitetônico reflete a história religiosa da região.",
      "É um centro de estudos bíblicos, sem missas regulares.",
      "É um templo de religiões orientais, sem relação com o catolicismo."
    ],
    "correct": 1,
    "explanation": "A Igreja de Nossa Senhora do Rosário é um símbolo da devoção mariana e da fé católica em Caxias. Sua arquitetura e sua história estão intrinsecamente ligadas à narrativa religiosa da cidade."
  },
  {
    "text": "<h3> QUESTÃO 61 </p> Qual é o papel do Memorial da Balaiada para a comunidade de Caxias, além da preservação histórica? </h3>",
    "options": [
      "É um centro de comércio e negócios, promovendo o desenvolvimento econômico local.",
      "O Memorial da Balaiada é um ponto de orgulho para a comunidade de Caxias, preservando a memória histórica e educando especialmente as gerações mais jovens através de visitas escolares e programas educacionais.",
      "É um espaço de lazer e entretenimento, com shows e eventos.",
      "É um centro de pesquisa científica sobre a geologia do Maranhão."
    ],
    "correct": 1,
    "explanation": "O Memorial da Balaiada desempenha um papel importante na preservação da memória histórica e educacional, sendo um ponto de orgulho para a comunidade caxiense. Ele oferece programas educacionais e visitas escolares que ajudam a educar as gerações mais jovens sobre a história local e nacional."
  },
  {
    "text": "<h3> QUESTÃO 62 </p> Qual evento marcou o início do processo de escravização dos povos indígenas em Caxias (MA) e como as diferentes denominações da localidade refletiram sua evolução histórica? </h3>",
    "options": [
      "A chegada dos portugueses em 1500 e a primeira denominação como \"Arraial do Maranhão\".",
      "A partir de 1615, iniciou-se o processo de escravização dos povos indígenas timbiras e gamelas, e as diferentes denominações da localidade refletiram sua evolução histórica e influências culturais.",
      "A fundação da Missão dos Jesuítas em 1750, com a denominação \"Vila Jesuíta\".",
      "A elevação à categoria de cidade em 1836, com a denominação \"Cidade Moderna\"."
    ],
    "correct": 1,
    "explanation": "Em 1615, a região que hoje é Caxias começou a ser marcada pelo processo de escravização dos povos indígenas timbiras e gamelas. Ao longo do tempo, a localidade teve diferentes denominações, como \"Arraial de Caxias\" e \"Vila de Caxias das Aldeias Altas\", refletindo sua evolução histórica e as influências culturais."
  },
  {
    "text": "<h3> QUESTÃO 63 </p> Qual é o nome atual da cidade de Caxias (MA), e qual foi o nome original dado pelos portugueses? </h3>",
    "options": [
      "Caxias e Aldeias Velhas.",
      "Caxias e Vila da Rainha.",
      "Caxias e Aldeias Altas.",
      "Caxias e São Luís."
    ],
    "correct": 0,
    "explanation": "O nome atual da cidade é Caxias, mas o nome original da localidade era Aldeias Altas, que se tornou Caxias das Aldeias Altas quando elevada à categoria de vila, e depois simplesmente Caxias."
  },
  {
    "text": "<h3> QUESTÃO 64 </p> Por que o nome do povoado foi alterado para \"Vila de Caxias\" em 1836? </h3>",
    "options": [
      "Em homenagem ao Imperador D. Pedro II.",
      "Em homenagem ao poeta Gonçalves Dias.",
      "Em homenagem ao Duque de Caxias, militar brasileiro conhecido por suas ações durante a Guerra do Paraguai.",
      "Em homenagem a um cacique indígena local."
    ],
    "correct": 2,
    "explanation": "A mudança do nome do povoado para \"Vila de Caxias\" em 1836 provavelmente ocorreu em homenagem ao Duque de Caxias, um destacado militar brasileiro conhecido por suas ações durante a Guerra do Paraguai. O Duque de Caxias desempenhou um papel significativo na história do Brasil, e a adoção de seu nome foi uma forma de reconhecer suas contribuições."
  },
  {
    "text": "<h3> QUESTÃO 65 </p> A denominação \"Caxias\" tem origem em qual outro local, e qual o significado disso para a história da cidade? </h3>",
    "options": [
      "Vila de Caxias na Itália; Simboliza a influência italiana.",
      "Cidade de Caxias, na Espanha; Simboliza a influência espanhola.",
      "Quinta Real de Caxias, em Portugal; Simboliza a influência portuguesa e a ligação com a metrópole.",
      "Cidade de Caxias na França; Simboliza a influência francesa."
    ],
    "correct": 2,
    "explanation": "O nome \"Caxias\" nas cidades brasileiras, como a do Maranhão, tem origem na Quinta Real de Caxias, em Portugal. Esta denominação é um reflexo direto da influência e ligação da metrópole portuguesa com o Brasil colonial."
  },
  {
    "text": "<h3> QUESTÃO 66 </p> Qual foi o principal evento que levou à elevação de Caxias à categoria de cidade em 1836? </h3>",
    "options": [
      "A Guerra dos Cem Anos.",
      "O crescimento econômico e a importância política de Caxias na época.",
      "A Revolução Industrial.",
      "O descobrimento do Brasil."
    ],
    "correct": 1,
    "explanation": "A elevação de Caxias à categoria de cidade em 1836 foi o resultado do seu crescente desenvolvimento econômico e da sua importância política no contexto do Maranhão da época. Esse reconhecimento formalizou seu status como um centro urbano relevante."
  },
  {
    "text": "<h3> QUESTÃO 67 </p> Como Caxias e o Maranhão se posicionaram em relação à Independência do Brasil, e qual foi a data de adesão do Maranhão à causa nacional? </h3>",
    "options": [
      "Caxias e o Maranhão aderiram imediatamente à independência em 7 de setembro de 1822.",
      "Caxias e o Maranhão enfrentaram resistência significativa contra a independência, e o Maranhão só aderiu oficialmente à causa nacional em 28 de julho de 1823, quase um ano após a proclamação da independência.",
      "Caxias e o Maranhão permaneceram neutros durante o processo de independência.",
      "O Maranhão se tornou um país independente de Portugal e do Brasil."
    ],
    "correct": 1,
    "explanation": "O Maranhão foi um dos últimos a aderir à independência do Brasil devido a resistências internas, e Caxias foi um dos focos de resistência. A adesão oficial do Maranhão à independência ocorreu em 28 de julho de 1823, quase um ano após a proclamação da independência, refletindo a demora e tumulto que marcaram o processo na província."
  },
  {
    "text": "<h3> QUESTÃO 68 </p> Qual foi o papel de Caxias no contexto da resistência à independência, e o que esse período ilustra? </h3>",
    "options": [
      "Caxias foi a primeira cidade do Maranhão a aderir à independência, servindo de exemplo para as demais.",
      "Caxias foi um dos últimos redutos de resistência à independência, e esse período de resistência ilustra como interesses locais, lealdades divergentes e a estrutura socioeconômica influenciaram o processo de adesão à independência.",
      "Caxias foi o centro do movimento a favor da independência, liderando a luta contra Portugal.",
      "Caxias forneceu apoio logístico e militar aos portugueses durante toda a guerra."
    ],
    "correct": 1,
    "explanation": "Caxias, localizada no Maranhão, foi um dos últimos focos de resistência à independência, ilustrando como fatores como interesses locais, lealdades divergentes e a estrutura socioeconômica da época influenciaram o processo de adesão à causa nacional."
  },
  {
    "text": "<h3> QUESTÃO 69 </p> Qual foi o principal fator que contribuiu para a resistência de Caxias à independência? </h3>",
    "options": [
      "A presença de um forte exército português na cidade.",
      "Os laços econômicos e culturais com Portugal, que eram mais fortes em comparação com as outras províncias do Brasil.",
      "A influência de líderes religiosos locais que se opunham à separação de Portugal.",
      "A falta de comunicação com as outras províncias brasileiras."
    ],
    "correct": 1,
    "explanation": "Os laços econômicos e culturais com Portugal, que eram mais fortes em Caxias e no Maranhão em geral, foram um fator crucial para a resistência à independência. A elite local temia a perda dos privilégios e do mercado português."
  },
  {
    "text": "<h3> QUESTÃO 70 </p> Como a adesão de Caxias à independência foi influenciada por movimentos pró-independência das províncias vizinhas? </h3>",
    "options": [
      "A adesão de Caxias foi um movimento espontâneo e isolado, sem influência externa.",
      "Caxias aderiu à independência após uma invasão militar do exército de Portugal.",
      "A adesão de Caxias à independência foi indiretamente influenciada pelos movimentos pró-independência das províncias vizinhas, especialmente pela atuação de José Pereira Filgueiras e Tristão Gonçalves Pereira Alencar Araripe, enviados pelo governo do Ceará para apoiar o Piauí.",
      "Caxias foi forçada a aderir à independência após um cerco de tropas do Rio de Janeiro."
    ],
    "correct": 2,
    "explanation": "A adesão de Caxias à independência foi indiretamente influenciada pelos movimentos pró-independência nas províncias vizinhas, com a intervenção de José Pereira Filgueiras e Tristão Gonçalves Pereira Alencar Araripe, enviados pelo governo do Ceará para apoiar os esforços de independência no Piauí. Esta influência externa ajudou a quebrar a resistência portuguesa na região."
  },
  {
    "text": "<h3> QUESTÃO 71 </p> Qual foi a data exata da adesão de Caxias à Independência do Brasil? </h3>",
    "options": [
      "7 de Setembro de 1822.",
      "1º de Agosto de 1823.",
      "28 de Julho de 1823.",
      "24 de Dezembro de 1822."
    ],
    "correct": 1,
    "explanation": "A data que marca a adesão de Caxias à Independência do Brasil é 1º de Agosto de 1823. Este evento é celebrado na faixa diagonal da Bandeira de Caxias."
  },
  {
    "text": "<h3> QUESTÃO 72 </p> Quais foram os primeiros habitantes do território de Caxias, e como era o estilo de vida deles? </h3>",
    "options": [
      "Eram colonos portugueses que se dedicavam à agricultura de subsistência.",
      "Eram povos indígenas nômades, sem residência fixa e sem práticas agrícolas.",
      "Eram povos indígenas, principalmente os timbiras e os gamelas, que viviam em aldeamentos e tinham uma cultura rica e adaptada ao ambiente local.",
      "Eram exploradores franceses que se dedicavam à busca por ouro."
    ],
    "correct": 1,
    "explanation": "Os primeiros habitantes do território que viria a ser Caxias foram os povos indígenas, com destaque para os timbiras e os gamelas. Eles viviam em aldeamentos e possuíam uma cultura rica, adaptada ao ambiente local, com práticas agrícolas e sociais bem estabelecidas."
  },
  {
    "text": "<h3> QUESTÃO 73 </p> Quais foram os dois principais eventos que marcaram a história de Caxias durante a colonização, antes do povoamento efetivo? </h3>",
    "options": [
      "A descoberta de ouro e a chegada dos espanhóis.",
      "As Entradas realizadas pelos franceses para reconhecimento das terras e o trabalho catequético dos missionários que integraram os povos indígenas à fé cristã.",
      "A fundação de um forte militar e a guerra contra os holandeses.",
      "O estabelecimento de grandes fazendas de cana-de-açúcar e a importação de escravos africanos."
    ],
    "correct": 1,
    "explanation": "A história de Caxias é marcada pelas Entradas realizadas pelos franceses para reconhecimento das terras e pelo trabalho catequético dos missionários. Esses missionários desempenharam um papel crucial na evangelização da região, estabelecendo relações de confiança com os povos indígenas e promovendo sua integração na fé cristã e na civilização europeia."
  },
  {
    "text": "<h3> QUESTÃO 74 </p> Qual conflito marcou o início do povoamento por Cristóvão da Costa Freire e Bernardo de Carvalho em Aldeias Altas? </h3>",
    "options": [
      "A Guerra dos Mascates.",
      "A Revolta de Beckman.",
      "Os conflitos entre a tribo dos Barbados e os franceses aliados aos Tremembés, levando ao refúgio dos Barbados nas matas e ao início do povoamento por Cristóvão da Costa Freire e Bernardo de Carvalho em Aldeias Altas por volta de 1716.",
      "A expulsão dos jesuítas do Brasil."
    ],
    "correct": 2,
    "explanation": "Os conflitos entre a tribo dos Barbados e os franceses aliados aos Tremembés forçaram o refúgio dos Barbados nas matas. Esse evento, juntamente com a chegada dos colonizadores, marcou o início do povoamento por Cristóvão da Costa Freire e Bernardo de Carvalho em Aldeias Altas, por volta de 1716."
  },
  {
    "text": "<h3> QUESTÃO 75 </p> Qual era a função de Cristóvão da Costa Freire e Bernardo de Carvalho, e como eles contribuíram para a formação de Caxias? </h3>",
    "options": [
      "Eram poetas e artistas, que fundaram uma escola de artes na região.",
      "Eram líderes militares portugueses, que construíram um forte para a defesa da região.",
      "Cristóvão da Costa Freire e Bernardo de Carvalho eram missionários e colonizadores, que fundaram Aldeias Altas e iniciaram o processo de colonização e organização da vida social na região, estabelecendo as bases para o futuro município de Caxias.",
      "Eram comerciantes que fundaram um grande entreposto comercial de escravos."
    ],
    "correct": 0,
    "explanation": "Cristóvão da Costa Freire e Bernardo de Carvalho desempenharam papéis cruciais como missionários e colonizadores. Eles foram os fundadores de Aldeias Altas e iniciaram o processo de colonização e organização social da região, estabelecendo as bases para o futuro município de Caxias."
  },
  {
    "text": "<h3> QUESTÃO 76 </p> Qual a origem do nome \"Caxias\" e por que o nome da cidade permaneceu inalterado, apesar do Decreto-lei n° 311 de 1938? </h3>",
    "options": [
      "O nome \"Caxias\" foi dado às cidades brasileiras por influência direta da denominação portuguesa e, apesar de uma tentativa de mudança de nome devido ao Decreto-lei n° 311 de 1938, o nome de Caxias no Maranhão permaneceu inalterado.",
      "O nome \"Caxias\" foi dado em homenagem a um militar local e foi alterado para \"Duque de Caxias\" após o Decreto-lei.",
      "O nome \"Caxias\" foi dado em homenagem ao Rio Caxias e foi alterado para \"Rio Caxias\" após o Decreto-lei.",
      "O nome \"Caxias\" não tem origem conhecida e foi mantido por decisão federal."
    ],
    "correct": 0,
    "explanation": "O nome \"Caxias\" nas cidades brasileiras tem origem na denominação portuguesa e, apesar do Decreto-lei n° 311 de 1938, que proibia cidades com o mesmo nome, a mudança foi rejeitada pela população e autoridades locais, mantendo o nome \"Caxias\" no Maranhão."
  },
  {
    "text": "<h3> QUESTÃO 77 </p> Qual foi o papel dos missionários jesuítas na organização da vida em Aldeias Altas no início do século XVIII? </h3>",
    "options": [
      "Eles organizaram a economia em torno da exportação de ouro para Portugal.",
      "Eles organizaram o trabalho, promovendo a agricultura e o comércio de produtos locais, e estabeleceram a ordem social e religiosa na aldeia, facilitando a integração dos povos indígenas.",
      "Eles se opuseram à presença portuguesa e foram expulsos da região.",
      "Eles se dedicaram exclusivamente à construção de fortificações militares."
    ],
    "correct": 0,
    "explanation": "Os missionários jesuítas em Aldeias Altas, no início do século XVIII, desempenharam um papel crucial na organização do trabalho, promovendo a agricultura e o comércio, e na ordem social e religiosa. Eles facilitaram a integração dos povos indígenas à civilização europeia e estabeleceram as bases para o desenvolvimento da comunidade."
  },
  {
    "text": "<h3> QUESTÃO 78 </p> Qual foi o impacto da presença dos jesuítas em Aldeias Altas para os povos indígenas locais? </h3>",
    "options": [
      "Aumentou a hostilidade e os conflitos entre os grupos.",
      "Os jesuítas forneceram um meio para que os povos indígenas pudessem se integrar à sociedade colonial, oferecendo proteção e educação, embora também implicasse a perda de parte de sua cultura original.",
      "Os jesuítas os expulsaram do território, forçando-os a migrar para outras regiões.",
      "Os jesuítas os obrigaram a se converter ao protestantismo e a adotar uma nova língua."
    ],
    "correct": 0,
    "explanation": "Os jesuítas forneceram um meio para a integração dos povos indígenas à sociedade colonial em Aldeias Altas, oferecendo proteção contra a escravidão e educação. Contudo, esse processo também resultou na perda de parte de sua cultura original devido à imposição da fé e dos costumes europeus."
  },
  {
    "text": "<h3> QUESTÃO 79 </p> Qual foi o impacto da paz estabelecida em 1727 na região das Aldeias Altas, e o que isso permitiu? </h3>",
    "options": [
      "A paz estabelecida em 1727 permitiu o estabelecimento de presença missionária em Aldeias Altas e trouxe uma estabilidade relativa à região, embora não se tenha certeza sobre a implementação completa do plano de Bernardo de Carvalho devido a guerras contínuas e oposição.",
      "A paz levou à expulsão de todos os colonizadores portugueses da região.",
      "A paz resultou em uma nova guerra entre os indígenas e os franceses.",
      "A paz permitiu a fundação de uma grande cidade industrial na região."
    ],
    "correct": 0,
    "explanation": "Embora não haja registros precisos sobre a implementação completa do plano de Bernardo de Carvalho devido às contínuas guerras e à oposição do governador, a paz estabelecida em 1727 trouxe estabilidade relativa à região das Aldeias Altas e permitiu o estabelecimento de presença missionária."
  },
  {
    "text": "<h3> QUESTÃO 80 </p> Como se deu o processo de aldeamento indígena e o estabelecimento dos colonizadores brancos na formação da cidade de Caxias? </h3>",
    "options": [
      "O processo de aldeamento indígena ocorreu na Trizidela, enquanto os brancos se estabeleciam na margem oposta do rio, dedicando-se à agricultura e à criação de gado, refletindo a coexistência entre indígenas e colonizadores na formação da cidade de Caxias, que foi inicialmente Aldeias Altas.",
      "O aldeamento indígena e o estabelecimento dos brancos ocorreram no mesmo local, sem separação.",
      "Os indígenas e os brancos se estabeleceram em aldeamentos separados por montanhas, sem contato entre si.",
      "O aldeamento indígena foi proibido, e todos os indígenas foram expulsos da região."
    ],
    "correct": 0,
    "explanation": "O processo de aldeamento indígena ocorreu na Trizidela, enquanto os colonizadores brancos se estabeleceram na margem oposta do rio, dedicando-se à agricultura e à criação de gado. Esta divisão geográfica refletiu a coexistência entre indígenas e colonizadores, marcando a formação da cidade de Caxias, que inicialmente se chamava Aldeias Altas."
  },
  {
    "text": "<h3> QUESTÃO 81 </p> Qual foi o principal fator que levou à prosperidade econômica de Aldeias Altas no século XVIII? </h3>",
    "options": [
      "A descoberta de diamantes na região.",
      "O investimento massivo de capital estrangeiro na indústria têxtil.",
      "Sua localização estratégica, que a tornou um centro de rotas comerciais, e o cultivo de produtos como cana-de-açúcar e algodão, que atendiam às demandas do Reino de Portugal.",
      "A produção de vinho e azeite para exportação."
    ],
    "correct": 0,
    "explanation": "A prosperidade econômica de Aldeias Altas no século XVIII foi impulsionada por sua localização estratégica, que a tornou um centro de rotas comerciais importantes, e pelo cultivo de produtos agrícolas valiosos, como cana-de-açúcar e algodão, que atendiam às demandas do Reino de Portugal."
  },
  {
    "text": "<h3> QUESTÃO 82 </p> Qual foi o papel de Caxias (antiga Aldeias Altas) no sistema de freguesias do Maranhão no século XVIII? </h3>",
    "options": [
      "Caxias se tornou a freguesia mais produtiva do Maranhão, voltando sua produção para atender às demandas do Reino de Portugal. A região cultivava cana-de-açúcar, algodão, arroz e cacau, além de criar gado, e servia como uma passagem crucial para o Piauí, Pernambuco, Bahia e Minas Gerais. A maior parte do ouro destinado a São Luís passava pela região.",
      "Caxias foi a freguesia menos produtiva, dedicando-se apenas à pesca e à caça de subsistência.",
      "Caxias foi a freguesia mais isolada, sem contato com outras regiões do Brasil.",
      "Caxias se tornou o centro administrativo do Maranhão, mas não tinha importância econômica."
    ],
    "correct": 0,
    "explanation": "Caxias se destacou como uma freguesia altamente produtiva, atendendo às demandas do Reino de Portugal com uma variedade de produtos agrícolas e pecuários. A região desempenhou um papel crucial no transporte de mercadorias e ouro para São Luís e outras regiões do Brasil."
  },
  {
    "text": "<h3> QUESTÃO 83 </p> Qual era a principal característica da economia de Aldeias Altas no final do século XVIII? </h3>",
    "options": [
      "Monocultura de café para exportação.",
      "Economia diversificada, baseada na agricultura de exportação (algodão e cana-de-açúcar), na criação de gado e no comércio inter-regional, dada a sua localização estratégica.",
      "Exclusivamente pesca e mariscagem.",
      "Produção de tecidos e manufaturas em grande escala."
    ],
    "correct": 0,
    "explanation": "A economia de Aldeias Altas no final do século XVIII era diversificada, baseada na agricultura (algodão e cana-de-açúcar), pecuária e no comércio inter-regional. Sua localização estratégica a tornava um ponto de passagem vital para o fluxo de mercadorias e riqueza na região."
  },
  {
    "text": "<h3> QUESTÃO 84 </p> Qual foi a importância do crescimento populacional de Aldeias Altas no século XVIII para sua elevação à categoria de Vila? </h3>",
    "options": [
      "O crescimento populacional não teve impacto na sua elevação à categoria de Vila.",
      "O crescimento populacional de Aldeias Altas, que se tornou a segunda mais populosa do Maranhão, foi um fator decisivo para sua elevação à categoria de Vila, pois indicava a necessidade de uma organização administrativa mais complexa.",
      "O crescimento populacional levou à sua destruição e ao abandono da região.",
      "O crescimento populacional só foi relevante no século XX."
    ],
    "correct": 0,
    "explanation": "O crescimento populacional de Aldeias Altas, que a tornou a segunda mais populosa do Maranhão, foi um fator decisivo. O aumento da população e da atividade econômica gerou a necessidade de uma organização administrativa e jurídica mais complexa, culminando na elevação à categoria de Vila."
  },
  {
    "text": "<h3> QUESTÃO 85 </p> Qual foi o impacto das visitas dos governadores ao Julgado de Aldeias Altas durante a segunda metade do século XVIII? </h3>",
    "options": [
      "As visitas dos governadores ao Julgado de Aldeias Altas fortaleceram os laços administrativos e políticos entre a região e o governo central, além de reconhecerem a importância da localidade.",
      "As visitas resultaram em conflitos e revoltas contra o governo central.",
      "As visitas não tiveram impacto, pois os governadores não se interessavam pela região.",
      "As visitas levaram à redução da autonomia política de Aldeias Altas."
    ],
    "correct": 0,
    "explanation": "Durante a segunda metade do século XVIII, as visitas dos governadores ao Julgado de Aldeias Altas desempenharam um papel crucial ao fortalecer os laços administrativos e políticos com o governo central, além de reconhecer a importância da região."
  },
  {
    "text": "<h3> QUESTÃO 86 </p> Qual governador foi o responsável por concluir o processo de elevação de Aldeias Altas à categoria de Vila, apesar do interesse de outros governadores? </h3>",
    "options": [
      "Joaquim de Mello e Póvoas.",
      "Fernando António de Noronha.",
      "Manoel da Cunha de Vasconcellos.",
      "Antônio de Vasconcellos."
    ],
    "correct": 1,
    "explanation": "Embora vários governadores, incluindo Joaquim de Mello e Póvoas, tenham demonstrado interesse na elevação de Aldeias Altas a Vila, foi sob o governo de Fernando António de Noronha que o processo de emancipação foi concluído com sucesso."
  },
  {
    "text": "<h3> QUESTÃO 87 </p> Qual foi a data e o nome da Vila após a elevação de Aldeias Altas à categoria de Vila? </h3>",
    "options": [
      "5 de Julho de 1836, Vila de Caxias.",
      "1º de Agosto de 1823, Vila da Independência.",
      "31 de Outubro de 1811, Caxias das Aldeias Altas.",
      "7 de Setembro de 1822, Vila Imperial."
    ],
    "correct": 2,
    "explanation": "A elevação de Aldeias Altas à categoria de Vila ocorreu em 31 de Outubro de 1811, sendo o novo nome oficial Caxias das Aldeias Altas."
  },
  {
    "text": "<h3> QUESTÃO 88 </p> Qual foi o destaque de Aldeias Altas (futura Caxias) no ofício de Fernando António de Noronha em 4 de junho de 1796? </h3>",
    "options": [
      "Joaquim de Mello e Póvoas declarou Aldeias Altas como a melhor povoação do Maranhão e destacou sua importância comercial no contexto do comércio entre Lisboa e os sertões.",
      "Fernando António de Noronha descreveu Aldeias Altas como a segunda melhor povoação do Maranhão e destacou sua importância comercial no contexto do comércio entre Lisboa e os sertões.",
      "O governador descreveu Aldeias Altas como a mais pobre povoação do Maranhão e propôs seu abandono.",
      "O governador destacou apenas a importância religiosa de Aldeias Altas, sem mencionar o comércio."
    ],
    "correct": 1,
    "explanation": "Em seu ofício de 4 de junho de 1796, Fernando António de Noronha destacou Aldeias Altas como a melhor povoação do Maranhão depois da capital e enfatizou sua importância estratégica no comércio, especialmente para mercadorias que vinham de Lisboa e seguiam para os sertões."
  },
  {
    "text": "<h3> QUESTÃO 89 </p> Qual era a principal justificativa para a elevação de Aldeias Altas a Vila, segundo os documentos da época? </h3>",
    "options": [
      "A necessidade de um porto marítimo para a exportação de escravos.",
      "O grande crescimento populacional, o dinamismo econômico e a necessidade de uma estrutura administrativa e judicial mais organizada para gerir a região.",
      "A descoberta de minas de ouro e a necessidade de um centro de controle fiscal.",
      "A pressão de líderes religiosos para a construção de uma catedral."
    ],
    "correct": 3,
    "explanation": "A principal justificativa para a elevação de Aldeias Altas a Vila era o seu grande crescimento populacional e dinamismo econômico, que exigiam uma estrutura administrativa e judicial mais organizada para gerir a região e garantir a ordem e a justiça."
  },
  {
    "text": "<h3> QUESTÃO 90 </p> Quem foi o responsável por assinar o Alvará de elevação de Aldeias Altas à categoria de Vila, e qual era a data? </h3>",
    "options": [
      "D. Pedro I, 7 de setembro de 1822.",
      "Rainha D. Maria I, 28 de julho de 1823.",
      "D. João VI, 31 de outubro de 1811.",
      "Marquês de Pombal, 5 de julho de 1836."
    ],
    "correct": 1,
    "explanation": "O Alvará de elevação de Aldeias Altas à categoria de Vila (Caxias das Aldeias Altas) foi assinado por D. João VI em 31 de outubro de 1811."
  },
  {
    "text": "<h3> QUESTÃO 91 </p> Qual foi a principal disposição estabelecida pelo Alvará de emancipação política da Vila de Caxias das Aldeias Altas? </h3>",
    "options": [
      "A criação de uma universidade para a elite local.",
      "A proibição da escravidão na nova Vila.",
      "O governo municipal da nova Vila e a atribuição de cargos administrativos.",
      "A concessão de títulos de nobreza aos moradores mais ricos."
    ],
    "correct": 2,
    "explanation": "O Alvará de emancipação política assinado por D. João VI em 31 de outubro de 1811 foi um documento crucial que conferiu o status de Vila a Aldeias Altas, renomeando-a para Caxias das Aldeias Altas. Entre suas disposições, estabeleceu-se o governo municipal da nova Vila, com a criação de cargos administrativos e a definição das prerrogativas e responsabilidades dos governantes locais."
  },
  {
    "text": "<h3> QUESTÃO 92 </p> Após ser elevada à categoria de Vila e renomeada para Caxias das Aldeias Altas, qual era a abrangência da sua jurisdição municipal? </h3>",
    "options": [
      "Apenas o território da Vila e seus arredores mais próximos.",
      "Apenas a área que hoje corresponde ao município de Caxias.",
      "Quase todo o território do estado do Maranhão, exceto algumas áreas específicas.",
      "Apenas o território do Piauí e do Ceará."
    ],
    "correct": 2,
    "explanation": "Após ser elevada à categoria de Vila e renomeada para Caxias das Aldeias Altas, a jurisdição municipal cobria praticamente todo o território do estado do Maranhão, com exceção de algumas áreas específicas."
  },
  {
    "text": "<h3> QUESTÃO 93 </p> Qual foi o papel de Manoel Dias de Almeida, o primeiro Juiz de Fora e Provedor da Fazenda Real, na Vila de Caxias das Aldeias Altas? </h3>",
    "options": [
      "Ele se dedicou à produção de cana-de-açúcar, sendo um grande proprietário de terras.",
      "Ele se dedicou à evangelização dos povos indígenas, sendo um missionário jesuíta.",
      "Ele foi o responsável por estruturar e aplicar a justiça na recém-criada Comarca e Provedoria da Fazenda Real, contribuindo para o desenvolvimento institucional e jurídico da Vila até 1819.",
      "Ele foi o líder da Balaiada, um movimento revolucionário contra o governo central."
    ],
    "correct": 3,
    "explanation": "Manoel Dias de Almeida, o primeiro Juiz de Fora e Provedor da Fazenda Real, foi o responsável por estruturar e aplicar a justiça na recém-criada Comarca e Provedoria da Fazenda Real. Em seu mandato, que durou até 1819, Almeida foi fundamental na estruturação e aplicação da justiça na região, contribuindo para o desenvolvimento institucional e jurídico de Caxias das Aldeias Altas dentro do contexto colonial brasileiro."
  },
  {
    "text": "<h3> QUESTÃO 94 </p> Qual era a principal responsabilidade da Câmara Municipal após a instalação da Comarca de Caxias das Aldeias Altas? </h3>",
    "options": [
      "Organizar as tropas militares e defender a Vila contra invasões.",
      "Promover a educação religiosa e a catequese dos povos indígenas.",
      "Gerir os assuntos administrativos e legislativos locais.",
      "Coletar impostos federais e repassá-los para Portugal."
    ],
    "correct": 2,
    "explanation": "Após a instalação da Comarca de Caxias das Aldeias Altas, a Câmara Municipal desempenhava um papel crucial na administração local. Composta por dois portugueses, Mateus Mendes Bittencourt e Jerônimo Rodrigues Guimarães, e um brasileiro, Francisco das Chagas Pereira de Brito, além do procurador Bernardo António da Silveira, a Câmara tinha a responsabilidade de gerir os assuntos administrativos e legislativos da vila. Isso incluía a criação de leis locais, a administração das finanças municipais, a manutenção da ordem pública, entre outras atribuições fundamentais para o funcionamento e o desenvolvimento da comunidade local dentro do sistema colonial português."
  },
  {
    "text": "<h3> QUESTÃO 95 </p> Quais foram os autores da letra e da música do Hino de Caxias, Maranhão? </h3>",
    "options": [
      "Teodoro Ribeiro Júnior (Letra) e Elpídio Ferreira (Música).",
      "Gonçalves Dias (Letra) e Villa-Lobos (Música).",
      "Duque de Caxias (Letra) e D. Pedro I (Música).",
      "João do Vale (Letra) e Zeca Balaiada (Música)."
    ],
    "correct": 0,
    "explanation": "O Hino de Caxias, Maranhão, é uma composição cultural significativa para a cidade. A letra foi escrita por Teodoro Ribeiro Júnior, enquanto a música foi composta por Elpídio Ferreira. Esses nomes são importantes não apenas por sua contribuição artística, mas também por representarem a identidade e história da cidade de Caxias através da música. O hino é uma forma de homenagem e celebração das características locais, culturais e históricas da região."
  },




  ],

  aspectos_arquivos_3: [

{
 text: "<h3> QUESTÃO 1 </p>  Sobre os aspectos históricos da cidade de Caxias no Maranhão, marque os seguintes itens. </p> I) A história de Caxias começa. no século XVII, com o Movimento de Entradas e Bandeiras ao interior maranhense para o reconhecimento e ocupação das terras às margens do Rio Gurupi, durante a invasão holandesa no Maranhão. </p> II) O local onde se acha situada a cidade de Caxias foi, primitivamente, um agregado de grandes aldeias dos índios Xingus e Cumbucas, que conviviam pacificamente com os holandeses.  </p> III) Com a expulsão dos franceses do Maranhão, em 1615, os portugueses subjugaram tais aldeias e venderam os índios como escravos.</h3>",
      options: [
        " VVV ",
        " FFF ",
        " FVF ",
        " FFV "
      ],
      correct: 3,
      explanation: "►  Item I está incorreto, pois o movimento ocorreu às margens do Rio Itapecuru e durante a invasão francesa, não holandesa, no Maranhão. </p> ► Item II está incorreto. O local era, de fato, um agregado de grandes aldeias indígenas, mas as tribos eram os Timbiras e Gamelas, e eles conviviam pacificamente com os franceses, não com os holandeses. </p>  ► Item III está correta. Com a expulsão dos franceses em 1615, os portugueses subjugaram as referidas aldeias e venderam os índios como escravos."
    },



{
      text: "<h3> QUESTÃO 2 </p>  Marque a única alternativa que não está relacionada às ex-denominações que foram impostas à cidade de Caxias no Maranhão: :</h3>",
      options: [
        " Guarané (denominação indígena) ",
        " São José das Aldeias Altas ",
        " Freguesia das Aldeias Altas ",
        " São José das Flores ",
	" Arraial das Aldeias Altas "
      ],
      correct: 3,
      explanation: " A denominação 'São José das Flores' não é reconhecida nos registros históricos como um nome oficial ou popular imposto à cidade de Caxias.</p> A atual cidade de Timon (MA) já foi chamada de Flores. "
    },


{
      text: "<h3> QUESTÃO 3 </p> Marque a única alternativa que corresponde a origem do nome de Caxias:</h3>",
      options: [
        " Em homenagem ao gaúchos viticultores da Serra Gaúcha do Rio Grande do Sul. ",
        " Em deferência ao Duque de Caxias, Sr. Sebastião José de Carvalho e Melo. ",
        " Em homenagem à uma vila entre Oeiras e Lisboa (Portugal). ",
        " Descende de cidadãos de Duque de Caxias, cidade metropolitana do Rio de Janeiro. ",
	" Devido a uma antiga fábrica de caixas e caixotes existentes em seu território na metade da década de 1950."
      ],
      correct: 2,
      explanation: " O nome \"Caxias\" deriva de Cachias (grafia antiga), que era uma Quinta Real (uma espécie de fazenda ou propriedade real) ou uma vila localizada nos arredores de Lisboa, perto de Oeiras, em Portugal."
    },




{
      text: "<h3> QUESTÃO 4 </p> No ano de 1858, o antístite (\"bispo\") da igreja maranhense, Dom Manoel Joaquim da Silveira, numa missa, na igreja de São Benedito, denominou Caxias honrosamente de:  :</h3>",
      options: [
        " Princesa do Sul ",
        " Princesa do Sertão Maranhense ",
        " Princesa do Itapecuru ",
        " Flor de Alecrim ",
	" Triunfo da Balaiada "
      ],
      correct: 1,
      explanation: " Em 1858, na Igreja de São Benedito, o então bispo da Igreja Maranhense, Dom Manoel Joaquim da Silveira, conferiu à cidade de Caxias o título honorífico de \"A Princesa do Sertão Maranhense\" (ou, em algumas citações, \"Princesinha do Sertão\"). "
    },



{
      text: "<h3> QUESTÃO 5 </p>  A cidade de Caxias foi palco da última batalha do movimento revoltoso do período Imperial Brasileiro (1838-1840), que por isso deu notoriedade ao patrono do exército brasileiro, o Sr. Luís Alves de Lima e Silva, sendo a:</h3>",
      options: [
        " Balaiada ",
        " Canudos ",
        " Confederação do Equador ",
        " Conjuração Baiana ",
	"Farropilha"
      ],
      correct: 0,
      explanation: " A cidade de Caxias foi palco da última batalha do movimento revoltoso da Balaiada (1838-1840/1841). A repressão e pacificação bem-sucedidas dessa revolta, lideradas por Luís Alves de Lima e Silva, então Coronel, renderam-lhe o título de Barão de Caxias (e posteriormente Marquês e Duque de Caxias, além de patrono do Exército Brasileiro). "
    },



{
      text: "<h3> QUESTÃO 6 </p>  O município de Caxias sofreu as consequências da Balaiada, revolta que abalou o Maranhão, no período de 1838 a 1840. Na história da pacificação do Estado do Maranhão, teve importante papel o cabo-de-guerra Luís Alves de Lima e Silva. Foi no legendário morro      ____________      que o grande soldado recebeu do Imperador do Brasil e comunicação de que seria agraciado com um título honorífico e de que deveria escolher a designação que desejava. O famoso militar escolheu, então, o título de Barão de Caxias, sendo depois elevado a Marquês e Duque de Caxias. Sobre a localidade de Caxias citada no texto marque a alternativa correta:</h3>",
      options: [
        " do Cruzeiro ",
        " do Urubu ",
        " da Esperança ",
        " da Miminha ",
       " do Alecrim "
      ],
      correct: 4,
      explanation: " O episódio narrado no texto ocorreu no lendário Morro do Alecrim, em Caxias, no Maranhão. Foi neste local, que também foi palco de importantes batalhas e onde se construiu um forte durante o conflito da Balaiada, que Luís Alves de Lima e Silva recebeu a comunicação de que seria agraciado com um título honorífico. Ele escolheu, então, a designação de Barão de Caxias, em referência à cidade que pacificou. "
    },



{
      text: "<h3> QUESTÃO 7 </p>  Segundo alguns, o nome Caxias foi dado ao Município, em razão da existência em Portugal de uma freguesia com idêntica denominação, costume muito comum aos lusitanos da época. Entretanto para o professor Basílio de Magalhães, a grafia correta do topônimo seria \"Cachias\" já que, segundo ele, provém de \"Cachia\", nome dado à: :</h3>",
      options: [
        " pindoba do babaçu, que serve para extrair o palmito, tão comum na zona dos cocais. ",
        " amêndoa do tucum, tão importante para alimentação e artesanato. ",
        " exocarpo do buriti, usado na alimentação e indústria de combustíveis. ",
        " esponja, flor do arbusto chamado \"corona christi\". ",
        " ao fruto do açaí, que no Maranhão é conhecido como juçara. "
      ],
      correct: 2,
      explanation: " De acordo com o professor Basílio de Magalhães, o nome \"Cachias\", grafia que ele considera correta, provém de \"Cachia\", nome dado ao exocarpo do buriti, usado na alimentação e indústria de combustíveis. "
    },



{
      text: "<h3> QUESTÃO 8 </p>  Sobre a cidade de Caxias marque a única alternativa incorreta:</h3>",
      options: [
        " Dos 217 municípios, é um dos poucos municípios do Estado Maranhão com mais de 100 mil habitantes. ",
        " Está entre os cinco municípios mais importantes política e economicamente do Maranhão. ",
        " É o município mais populoso do oeste maranhense e juntamente com Timon e Teresina formam uma metrópole com mais de um milhão de habitantes. ",
        " É uma cidade de boa infraestrutura em educação, desde o nível fundamental ao superior, sendo referência no Estado do Maranhão. ",
	" Tem um grande intercâmbio com a RIDE (Região Integrada de Desenvolvimento) de Teresina, principalmente pela proximidade geográfica. "
      ],
      correct: 2,
      explanation: " Caxias está localizada na região leste do Maranhão, próxima à divisa com o Piauí. "
    },



{
      text: "<h3> QUESTÃO 9 </p>  Sobre a localização geográfica da cidade de Caxias marque a única alternativa incorreta :</h3>",
      options: [
        " Localizada no leste maranhense, na zona de Cocais e sub-região geoeconômica do Meio Norte. ",
        " Por ser menos populosa que Timon, atualmente faz parte da microrregião de Timon. ",
        " É cortada pelo rio Itapecuru, o maior rio do estado do Maranhão, que chega a mais de mil quilômetros de extensão. ",
        " Sua localização e pujança econômica, influenciou o então conselheiro José Antônio Saraiva a escolher o local da segunda capital do Piauí, pois Caxias no século XIX influenciava todo o comércio dessa região. ",
       " Está localizada numa transição de cerrados, mata dos cocais e manchas de floresta pré-amazônica. "

      ],
      correct: 1,
      explanation: " Timon faz parte da microrregião de Caxias, e não o contrário. "
    },



{
      text: "<h3> QUESTÃO 10 </p>  Sobre a infraestrutura de transporte da cidade de Caxias marque a única alternativa incorreta:</h3>",
      options: [
        " Por ser uma cidade de relevo bastante acidentado, não se configura e nem se estimula o uso da bicicleta. ",
        " De acordo com o Instituto Brasileiro de Geografia e Estatística, em 2023 Caxias possuía uma frota de 80.579 veículos, sendo 18.528 automóveis, 1.109 caminhões, 599 ônibus e micro-ônibus, 158 tratores e 48.977 motocicletas. ",
        " O sistema de transporte coletivo de Caxias é realizado por veículos do tipo micro-ônibus, em um sistema de transporte autônomo consorciado, que operam em 5 regiões demarcadas na cidade pela Secretaria Municipal de Trânsito e Transportes (SMTT) de Caxias. ",
        " Há uma contínua migração pendular entre Caxias e Teresina, estimada principalmente pela busca de serviços de saúde e educação entre ambas. ",
        " É cortada por via férrea e por rodovia federal: BR-316. "
      ],
      correct: 0,
      explanation: " O relevo de Caxias não é predominantemente acidentado a ponto de impedir ou desestimular o uso da bicicleta. Na verdade, o Plano Municipal de Mobilidade Urbana (PMMU) de Caxias reconhece a crescente frota de ciclistas e discute a necessidade de um plano cicloviário para incentivar ainda mais esse meio de transporte, o que indica que o uso da bicicleta é viável e crescente na cidade. "
    },



{
      text: "<h3> QUESTÃO 11 </p> Quem nunca leu a Canção do Exílio, deste autor célebre, do Maranhão? `______`, poeta, professor, crítico de história, etnólogo, nasceu em CAXIAS, MA, em 10 de agosto de 1823, e faleceu em naufrágio, no Maixio dos Atins, MA, em 3 de novembro de 1864. É o patrono da cadeira n. 15, por escolha do fundador Olavo Bilac. Pela obra lírica e indianista, é um dos mais típicos representantes do Romantismo brasileiro e forma, com José de Alencar na prosa, a dupla que conferiu caráter nacional à literatura brasileira.  :</h3>",
      options: [
        " Coelho Neto  ",
        " Teófilo Dias  ",
        " Vespasiano Ramos ",
        " Graça Aranha  ",
         "  Gonçalves Dias ",
      ],
      correct: 4,
      explanation: " Todas as informações fornecidas no texto se referem a Antônio Gonçalves Dias (1823–1864). "
    },



{
      text: "<h3> QUESTÃO 12 </p>  É \"a mais linda do mundo!\", exclamou Rui Barbosa ao ver o primeiro exemplar da bandeira da nacionalidade, instituída pelo Governo Provisório da República no dia 19 de novembro de 1889. A expressão não traduziu apenas o estado emocional que lhe despertou a sua estética, mas também o entusiasmo por seu simbolismo como imagem da Pátria. A bandeira do Brasil foi idealizada por uma figura ilustre do Estado do Maranhão, mais especificamente da cidade de Caxias:</h3>",
      options: [
        " Olavo Bilac  ",
        " Francico Braga  ",
        " Joaquim Osório Duque Estrada  ",
        " Raimundo Teixeira Mendes  ",
        " Francisco Manuel da Silva "
      ],
      correct: 3,
      explanation: " Idealizador do Conceito (Filósofo Caxiense): Raimundo Teixeira Mendes foi um filósofo e matemático positivista nascido em Caxias (MA). Ele idealizou o conceito da Bandeira, incluindo a esfera com as estrelas e, principalmente, o lema \"Ordem e Progresso\", que é uma máxima do Positivismo. "
    },



{
      text: "<h3> QUESTÃO 13 </p>  Marque a alternativa que contém poetas caxienses com grande expressão nacional:</h3>",
      options: [
        " Graça Aranha e Aluisio de Azevedo  ",
        " Ferreira Gullar e Nauro Machado ",
        " Gonçalves Dias e Coelho Neto  ",
        " Humberto de Campos e Salgado Maranhão  ",
        " Souzaândrade e João do Vale  ",
      ],
      correct: 2,
      explanation: " ► Gonçalves Dias (1823-1864): É o poeta romântico mais célebre do Maranhão, nascido em Caxias. Sua obra, como a \"Canção do Exílio\" e \"I-Juca-Pirama\", o consagrou como um dos fundadores da literatura nacional. </p> ► Coelho Neto (1881-1934): Embora tenha se mudado cedo para o Rio de Janeiro, nasceu em Caxias. Foi um escritor prolífico (poeta, romancista, contista) e uma das maiores figuras literárias de seu tempo, sendo considerado um expoente do Pré-Modernismo e membro fundador da Academia Brasileira de Letras (ABL). "
    },



{
      text: "<h3> QUESTÃO 14 </p>   Henrique Maximiano `______` (Caxias, 21 de fevereiro de 1864 — Rio de Janeiro, 28 de novembro de 1934) foi um escritor (cronista, folclorista, romancista, crítico e teatrólogo), político e professor brasileiro, membro da Academia Brasileira de Letras onde foi o fundador da Cadeira número 2. Foi considerado o \"Príncipe dos Prosadores Brasileiros\", numa votação realizada em 1928 pela revista O Malho. Apesar disto, foi consideravelmente combatido pelos modernistas, sendo pouco lido desde então, em verdadeiro ostracismo intelectual e literário. Nas palavras de Arnaldo Niskier: \"A vitória do modernismo se fez como se houvesse necessidade de abater um grande inimigo, no caso\":</h3>",
      options: [
        " Teófilo Dias  ",
        " Coelho Neto ",
        " Vespasiano Ramos  ",
        " Gonçalves Dias  ",
	"Graça Aranha"
      ],
      correct: 1,
      explanation: " Henrique Maximiano Coelho Neto. "
    },



{
      text: "<h3> QUESTÃO 15 </p> A cultura de Caxias-MA tem como seus filhos ilustres os poetas:</h3> </p> I- Gonçalves Dias, Coelho Neto, Sotero dos Reis e Ferreira Gulart. </p> II - Maranhão Sobrinho, Maria Firmina dos Reis, Teófilo Dias e Olimpio Cruz.  </p> III - Olimpio Cruz, Sotero dos Reis, Humberto de Campos e Antônio Miranda. </p> IV - Jamil Damous, José Sarney, Carlos Alberto Nunes, Fontoura Chaves e Gonçalves Dias. </p>  V - Gonçalves Dias, Coelho Neto, Teófilo Dias e Vespasiano Ramos.  ",
      options: [
        " V apenas ",
        " Nenhuma ",
        " III apenas ",
        " I e IV apenas ",
	"Todos corretos"
      ],
      correct: 0,
      explanation: " Somente Gonçalves Dias, Coelho Neto, Teófilo Dias e Vespasiano Ramos. "
    },



{
	text: "<h3> QUESTÃO 16 </p> De acordo com a música de João de Vale \"De Teresina a São Luís\" marque a alternativa referente as lacunas: </h3> </p>  Peguei o trem em Teresina </p> Pra São Luiz do Maranhão </p> Atravessei Parnalba </p> Ai, ai que dor no coração </p>  </p> O trem danou-se naquelas brenhas </p> Soltando brasa, comendo lenha </p> Comendo lenha e soltando brasa </p> Tanto queimava como atrasava </p> Tanto queimava como atrasava </p> </p> Bom dia ________ </p> Terra morena de ________ </p> Dona Sinhá avisa pra seu Dá </p> Que eu tô muito avexado </p> Dessa vez não vou ficar... ",
      options: [
        " Codó e do folclore e do catimbó ",
        " Crota e os cearenses acabam de chegar ",
        " Brenhas e comendo lenha ",
        " Cabroxas de bom trato e De comer mostrando o prato ",
	" Bom dia Caxias e Terra morena de Gonçalves Dias "
      ],
      correct: 4,
      explanation: "Bom dia Caxias e Terra morena de Gonçalves Dias. </br></br>  ► Curiosidade: A música continua, citando outra cidade importante: </p> \"Boa tarde Codó, do folclore e do catimbó </p> Gostei de ver cabrochas de bom trato </p> Vendendo aos passageiros  </p>De comer, mostrando o prato\" "
    },




{
	text: "<h3> QUESTÃO 17 </p> São características climáticas de Caxias-Ma, exceto:</h3> ",
      options: [
        " Possui uma pluviosidade anual de razoável a boa, chegando a índices de 1.200mm de chuva. ",
        " É caracterizada por elevadas médias térmicas e higrométricas durante quase todo o ano, devido sua tropicalidade. ",
        " Devido sua tropicalidade, suas chuvas concentram-se no verão e em parte do outono. ",
        " Por fazer parte da Amazônia Legal, possui clima tropical equatorial, com índices pluviométricos que ultrapassam 2.500mm de chuva. ",
	" É caracterizada pelo clima tropical típico ou continental e pelo clima tropical de transição sub-úmido quente. "
      ],
      correct: 3,
      explanation: " Caxias está localizada no leste/sudeste do Maranhão, em uma zona de transição entre o clima Litorâneo Úmido e o Tropical Típico. Embora o Maranhão faça parte da Amazônia Legal, o clima em Caxias não é o tropical equatorial (Af) que clássico da Amazônia Ocidental e Noroeste do Maranhão (que tem altos índices pluviométricos, realmente ultrapassando 2.000mm). </br> O clima predominante nessa região de Caxias é o Tropical Úmido ou Tropical de Transição (Aw'), ou até o Tropical Típico (Aw) semiúmido. "
    },


{
	text: "<h3> QUESTÃO 18 </p> São vegetações encontradas com abundância no município de Caxias: :</h3> ",
      options: [
        " Floresta Amazônica e Mata Atlântica ",
        " Caatinga e Pampa   ",
        " Cerrados e Mata dos Cocais  ",
        " Vegetação halófila e Aciculifoliada  ",
	" Araucária e Estepes "
      ],
      correct: 2,
      explanation: " As vegetações encontradas com abundância no município de Caxias, no Maranhão, são os Cerrados e a Mata dos Cocais. </br> ► Caxias não possui o bioma Mata Atlântica. </p> ► Caxias não possui Pampa. </p> ► Vegetação halófila é típica de solos salinos (manguezais, restingas no litoral), e aciculifoliada (pinheiros) não é típica da região. </p> ► Araucária e Estepes: Estas são vegetações típicas do sul do Brasil e não ocorrem no Maranhão.  "
    },


{
	text: "<h3> QUESTÃO 19 </p> Sobre a hidrografia a cidade de Caxias-Ma, marque a única alternativa incorreta:</h3> ",
      options: [
        " É uma cidade bem servida de água, tanto pela unidades hidrográficas subterrâneas, quanto pelas superficiais. ",
        " Devido a imensidão de seus mananciais, Caxias está fora da lista das cidades com estresse hídrico e não registra problemas ambientais ligados ao seus recursos hídricos. ",
        " Está localizada no Vale do Itapecuru, o maior rio genuinamente maranhense. ",
        " Possui um lençol freático riquíssimo, tanto em quantidade quanto em qualidade. É conhecida como \"terra das águas cristalinas\". ",
	" Além do Itapecuru, possui muitos riachos perenes que servem tanto para a produção agrícola quanto para o turismo. "
      ],
      correct: 1,
      explanation: " Apesar de Caxias ser rica em recursos hídricos (tanto superficiais quanto subterrâneos), a cidade registra, sim, graves problemas ambientais relacionados a esses recursos: o Rio Itapecuru sofre com poluição; a precariedade do saneamento básico é um fator central. "
    },



{
	text: "<h3> QUESTÃO 20 </p> É uma rodovia federal diagonal do Brasil. Seu ponto inicial está localizado na cidade de Belém (Pará), e o final na cidade de Maceió (Alagoas). Esta BR passa pelos os seguintes estados: Pará, Maranhão, Piauí, Pernambuco e Alagoas. No Maranhão passa na cidade de Caxias, ligando esta à Teresina-PI.  :</h3> ",
      options: [
        " BR-316 ",
        " BR-230 ",
        " BR-135 ",
        " BR-116 ",
	" BR-101 "
      ],
      correct: 0,
      explanation: " A BR-316 é uma rodovia federal que começa em Belém (PA), termina em Maceió (AL) e passa pelos estados de Pará, Maranhão, Piauí, Pernambuco e Alagoas. Ela é conhecida por ligar as regiões Norte e Nordeste do Brasil.  "
    },



{
	text: "<h3> QUESTÃO 21 </p> Marque a única alternativa que está relacionada à ex-denominação de origem indígena que fora imposta à cidade de Caxias no Maranhão:</h3> ",
      options: [
        " Guaporé ",
        " Guajará  ",
        " Guarujá   ",
        " Grajaú ",
	" Guanaré "
      ],
      correct: 4,
      explanation: " Guanaré foi uma das primeiras denominações da região, sendo de origem indígena, anterior aos nomes portugueses. "
    },



{
	text: "<h3> QUESTÃO 22 </p> A E. F. São Luiz-Teresina foi aberta em seu primeiro trecho em 1895, ligando Caxias a Cajazeiras (Flores). Em 1919 foi aberto outro trecho, São Luiz-Caximbos, prolongado em 1920 até Caxias. Somente em 1938 os trilhos chegaram a Teresina, com a abertura da ponte sobre o rio Parnaíba. Trens de passageiros rodaram até o ano de 1991 pela linha. Cargueiros trafegam por ela até hoje. A Estrada de Ferro descrita no texto é: :</h3> ",
      options: [
        " E.F dos Carajás ",
        " E.F Norte-Sul  ",
        " E.F Thereza Christina ",
        " E.F do Nordeste  ",
	" E.F Madeira-Mamoré "
      ],
      correct: 3,
      explanation: " O texto descreve a construção da Estrada de Ferro São Luiz-Teresina, que ligou o Maranhão ao Piauí, cuja construção se estendeu até o ano de 1938, quando os trilhos alcançaram Teresina. Essa ferrovia é um trecho da Estrada de Ferro do Nordeste (ou EF-225), um projeto de grande porte para a integração da região. "
    },


{
	text: "<h3> QUESTÃO 23 </p> Caxias é conhecida como uma \"cidade portadora de futuro\" pois destaca-se por possuir:</h3> ",
      options: [
        " Aeroporto internacional ",
        " Industria automobilistica ",
        " Polarizadora e provedora de educação e saúde  ",
        " Fábricas de software e radware ",
	" Parque industrial siderúrgico "
      ],
      correct: 2,
      explanation: " Caxias é conhecida como uma cidade portadora de futuro pois destaca-se por possuir a característica de ser polarizadora e provedora de educação e saúde. <p> Uma cidade polarizadora é aquela que exerce forte influência econômica, social e cultural sobre outras cidades menores e regiões ao redor, atraindo pessoas, empregos, investimentos e serviços "
    },



{
	text: "<h3> QUESTÃO 24 </p> A Associação \"Amigos do Patrimônio Caxiense\" tem a intenção de contribuir na preservação, restauração e valorização do patrimônio histórico, artistico, cultural e paisagistico de nossa cidade. Seja promovendo atividades, elaborando estudos, palestras, intervenções artisticas, etc. Feita a primeira reunião, viemos esclarecer que o Morro do Alecrim é um sitio histórico, e assim sendo, deve ser protegido de acordo com as normas que regem o patrimônio cultural, onde qualquer temática que fuja de sua história militar, irá descaracteriza-lo. Antes da Balaiada o Morro do Alecrim era chamado de:</h3> ",
      options: [
        "  Morro do Mirante  ",
        " Morro das Tabocas ",
        " Morro do Duque ",
        " Morro do Cruzeiro ",
	" Morro do Balaio "
      ],
      correct: 1,
      explanation: " O Morro do Alecrim é um local histórico de grande importância para Caxias, sendo palco de eventos tanto da Independência do Brasil (adesão do Maranhão) quanto da Balaiada. Antes da Balaiada o local era conhecido pelos nomes: Morro da Pedreira e Morro das Tabocas. "
    },

{
	text: "<h3> QUESTÃO 25 </p> São Luís e Imperatriz são respectivamente as mais populosas do Maranhão. Caxias está entre os dez municípios mais populosos, ou seja, mais precisamente na quinta posição. Além das cidades já citadas, marque a alternativa que contém cidades mais populosa que Caxias-MA.</h3> ",
      options: [
        " Codó e Paço do Lumiar  ",
        " Açailândia e Bacabal ",
        " Balsas e Barra do Corda ",
        " São José de Ribamar e Pinheiro ",
	" São José de Ribamar e Timon "
      ],
      correct: 4,
      explanation: " ► São José de Ribamar e Timon. </br> ► Seguindo o modelo e utilizando os dados do Censo 2022 do IBGE: Em primeiro, São Luís (1.037.775 habitantes), em segundo Imperatriz (273.110 habitantes), em terceiro São José de Ribamar (244.579 habitantes), em quarto Timon (174.465 habitantes), em quinto Caxias (156.970 habitantes), em sexto Paço do Lumiar (145.643 habitantes), em sétimo Codó (114.269 habitantes), em oitavo Açailândia (107.263 habitantes), em nono Bacabal (104.352 habitantes), e em décimo Balsas (100.257 habitantes). "
    },


{
	text: "<h3> QUESTÃO 26 </p> Sobre a agricultura de Caxias, marque os seguintes itens:</h3> I) É uma atividade ainda representativa para sua economia, mesmo tendo sido afetada pelo êxodo rural nos últimos anos. </p> II) É baseada na produção de cereais, com destaque para o arroz de sequeiro. </p> III) Por ter solos de baixa fertilidade, tem uma fruticultura desprezível, ou seja, praticamente todos os frutos vem de outros estados e de outras cidades. </p> IV) Foi no vale do Itapecuru que Caxias no século XIX e no início do século XX figurava entre os grandes produtores de cana-de-açúcar e algodão do estado do Maranhão. </p> V) Mesmo provida de uma certa inserção tecnológica, a maior parte da agricultura de Caxias-MA é extensiva e de subsistência. ",
      options: [
        " V-V-V-V-V ",
        " F-F-F-F-F ",
        " F-V-F-V-F ",
        " V-F-F-V-V ",
	" V-F-V-F-V "
      ],
      correct: 3,
      explanation: " A sequência correta de avaliação é: V - F - F - V - V. "
    },

{
	text: "<h3> QUESTÃO 27 </p> Sobre a pecuária de Caxias-MA, marque os seguintes itens:</h3> I) Devido ao recente surto comercial e industrial, deixou de ser uma atividade representativa para sua economia. </p> II) Possui todos os tipos de rebanhos, com destaque para caprinos e ovinos. </p> III) A bovinocultura de caxiense de destaque é a intensiva, com predominância de raças especializadas em ordenha. </p> IV) A criação de gado ajudou na penetração e fixação do colonizador no vale do Itapecuru, como é o caso de Caxias-MA. </p>V) O gado bovino criado no território de Caxias é de alta qualidade e em muitas oportunidades premiado em diversas exposições. ",
      options: [
        " V-V-V-V-V ",
        " F-F-F-F-F ",
        " F-F-F-V-V ",
        " V-F-F-V-V  ",
	" V-F-V-F-V "
      ],
      correct: 2,
      explanation: " A sequência de avaliação dos itens é: F - F - F - V - V. "
    },


{
	text: "<h3> QUESTÃO 28 </p> Sobre a economia de Caxias-MA marque os seguintes itens: </h3> I) Conta com um polo industrial composto de vários setores produtivos, onde se destacam o segmento industrial de produção alimentícia, da construção civil, de bebidas, de minerais não metálicos, do vestuário e de cosméticos. </p> II) O município abriga uma distribuidora de bebidas como refrigerantes e cervejas, fábrica de sabões, de cerâmicas dentre outras. </p> III) Decorrente do recente surto industrial, a maior parte da PLA(População Economicamente Ativa) atualmente está inserida no setor secundário. </p> IV) No setor de terciário destacam as atividades turísticas e o artesanato. </p>V) As atividades económicas mais importantes de Caxias-MA são serviços e comércio este, atual e diversificado. ",
      options: [
        " V-V-V-V-V  ",
        " V-V-F-F-V  ",
        " F-F-F-V-V  ",
        " V-F-F-V-V  ",
	" V-F-V-F-V "
      ],
      correct: 1,
      explanation: " A sequência de avaliação dos itens é: V - V - F - F - V. </br> ► Apesar do crescimento industrial, a maior parte da população economicamente ativa ainda está no setor terciário (comércio e serviços).</p> ► Embora existam atividades turísticas e artesanato, o destaque do setor terciário é o comércio e os serviços, que movimentam a economia local. "
    },


{
	text: "<h3> QUESTÃO 29 </p> Atividades do setor de serviços mais representativas de Caxias-MA, tanto na arrecadação, quanto na absorção de mão-de-obra: :</h3> ",
      options: [
        " serviços públicos, educação e saúde  ",
        " turismo, hotelaria e manufatura ",
        " artesanato, sistema bancário e mineração  ",
        " transportes, telecomunicações e turismo de lazer  ",
	" construção civil, gastronomia e moda "
      ],
      correct: 0,
      explanation: " Serviços públicos, educação e saúde. "
    },


{
	text: "<h3> QUESTÃO 30 </p> Filho do comerciante português Antônio da Fonseca e da índia Ana Sylvestre, __________ deixou o Maranhão com apenas seis anos de idade. Radicou-se no Rio de Janeiro, cidade que amou e definiu para a eternidade como \"Cidade Maravilhosa\". Batizou, também, a cidade de Teresina, alcunhando-a de __________ :</h3> ",
      options: [
        " Teófilo Dias / \"Cidade do Sol e da Luz\"  ",
        " Vespasiano Ramos / \"Princesa do Poti\"   ",
        " Gonçalves Dias/ \"Terra da Cajuína\"  ",
        " Graça Aranha / \"Rainha do Meio Norte\"  ",
	" Coelho Neto / \"Cidade Verde\" "
      ],
      correct: 4,
      explanation: " O escritor Coelho Neto nasceu em Caxias (MA), filho do comerciante português Antônio da Fonseca Coelho e da índia Ana Silvestre. Deixou o Maranhão ainda criança e radicou-se no Rio de Janeiro, cidade que chamou de \“Cidade Maravilhosa\”. Além disso, foi ele quem apelidou Teresina (PI) de “Cidade Verde”, em referência à sua arborização abundante. "
    },


{
	text: "<h3> QUESTÃO 31 </p> HINO de Caxias-MA:</h3> I </p>Clara estrella do ceo maranhense, </p>Lyra flebil de meigo cantor, </p>Tua voz luz outra estrella não vence </p>Nem ha lyra mais cheia d'amor. I</p>Vamos juntos, no albor destes dias </p>Os louvores cantar de Caxias. </p> </br>II </p>Es a virgem toucada de rozas </p>Que te mira nas aguas do rio, </p>De onde as nymphas aubtis, invejosas, </p>Vêm beijar-te o perfil erradio. </p>Vamos juntos, no albor destes dias </p>os louvores cantar de Caxias. </p</br>III </p>Bloqueada na paz tu trabalhas  </p>E na paz confiada - descanças, </p>Mas não temes o fragor de batalhas </p>Quem já trouxe a victoria nas lanças.  </p>Vamos juntos, no albor destes dias </p>Os louvores cantar de Caxias. </p></br>IV </p>Não crearam teus seios - escravos, </p>Bentos seiso do alvôr da camelia:  </p>Que nós somos unidos e bravos, </p>Filhos Grachos de nova Cornelia.  </p></br>V </p>Glória! glória! as façanhas proclamem  </p>Da Princeza do adusto sertão,  </p>Cuja fama e valor se derramem </p>Pelas terras do audaz Maranhão. </p> Vamos juntos, no albor destes dias </p> Os louvores cantar de Caxias.</p> <h3> Marque a alternativa que contém os autores do Hino de Caxias: <h3>",
      options: [
        " partitura do maestro Antônio Carlos dos Reis Rayol e a letra do professor Antônio Batista Barbosa de Godóis, com variações para orquestração e canto do maestro Antônio de Assis Republicano. ",
        " Letra por Bandeira Tribuzzi/Melodia por Bandeira Tribuzzi  ",
        " Composição do poeta Antônio Francisco da Costa e Silva, com música de Firmina Sobreira Cardoso e Leopoldo Damascena Ferreira. ",
        " Letra por Theodoro Ribeiro Junior/Melodia por Elpidio Pereira (01-08-1923). ",
	" Letra: Joaquim Osório Duque Estrada, 1831, durante o Brasil Império e Composição: Francisco Manuel da Silva, 1822. "
      ],
      correct: 3,
      explanation: " O Hino do Município de Caxias-MA é composto por:</p> ► Letra: Theodoro Ribeiro Junior </p>► Melodia (Música): Elpidio Pereira "
    },


{ text: "<h3> QUESTÃO 32 </p> Os personagens seguintes participaram ativamente da Balaiada, exceto: </h3>",
      options: [ " Negro Cosme. ",  " Raimundo Gomes. ", " Luis Alves de Lima e Silva. ", " Raimundo Teixeira. " ],
      correct: 3,  explanation: " Os principais personagens da Balaiada (1838–1841), movimento social e político ocorrido no Maranhão, foram: </p> Raimundo Gomes (“Cara Preta”) – vaqueiro que iniciou a revolta libertando companheiros presos. </p> Manuel Francisco dos Anjos Ferreira – o “Balaio”, artesão que deu nome ao movimento. </p>Negro Cosme – líder quilombola que mobilizou centenas de escravizados na luta. </p> Luís Alves de Lima e Silva – futuro Duque de Caxias, enviado pelo Império para reprimir a revolta. </br></br>  👉 Já Raimundo Teixeira não teve participação na Balaiada. " },


{ text: "<h3> QUESTÃO 33 </p> Uma praça no Município de Caxias (MA) apresenta uma estátua do personagem marco da cultura caxiense que nomeia a praça e que é conhecido como o \"Imperador da Lira Americana\", ou seja, </h3>",
      options: [ " Raimundo Gomes. ",  " Preto Cosme. ", " Gonçalves Dias. ", " Duque de Caxias. " ],
      correct: 2,  explanation: " Em Caxias (MA), há a Praça Gonçalves Dias, que homenageia o poeta maranhense Antônio Gonçalves Dias, um dos maiores nomes da literatura brasileira e figura marcante da cultura caxiense. No centro da praça, há uma estátua do poeta, simbolizando sua importância histórica e cultural para o município. " },

{ text: "<h3> QUESTÃO 34 </p> No século XIX, mais precisamente no seu último quartel, a cidade de Caxias destacou-se no cenário da economia maranhense, por ter sido pioneira na instalação da primeira fábrica de tecido do Maranhão. A fabrica instalada em 1883 chamava-se: </h3>",
      options: [ " Companhia Caxias Maranhense. ",  " Fábrica do Algodão Caxiense. ", " Fábrica Princesa do Sertão ", " Companhia Industrial Caxiense. " ],
      correct: 3,  explanation: " A fábrica instalada em Caxias em 1883, pioneira na indústria têxtil do Maranhão, chamava-se Companhia Industrial Caxiense.  " },


{ text: "<h3> QUESTÃO 35 </p> Essa fotografia ilustra um marco histórico caxiense. </p> <img src=\"imagens/1.JPG\" alt=\" Caxias \" style=\"max-width: 100%; height: auto;\"></p> O marco em questão é:</h3>",
      options: [ " Companhia Industrial Caxiense, fundada em 1883. ",  " Companhia de Fiação e Tecidos União Caxiense, instituída em 1889. ", " Companhia das Aldeias Altas, 1886. ", " Casa do Algodão do Sertão, 1884. " ],
      correct: 1,  explanation: " O prédio ilustrado é a antiga Companhia de Fiação e Tecidos União Caxiense, que foi fundada em 1889 e funcionou como uma das grandes potências do polo têxtil caxiense. " },


{ text: "<h3> QUESTÃO 36 </p> \"Clara estrella do ceo maranhense,</p> Lyra flebil de meigo cantor.\" </p> Esse trecho foi retirado de(o) </h3>",
      options: [ " um poema de Gonçalves Dias.  ",  " Hino caxiense. ", " texto de Raimundo Teixeira. ", " Bandeira caxiense. " ],
      correct: 1,  explanation: " Hino caxiense. </p> Autoria: O hino tem letra de Teodoro Ribeiro Júnior e música de Elpídio Ferreira. " },

{ text: "<h3> QUESTÃO 37 </p> \"A 3a edição do espetáculo, realizada nos dias  13 e 14 de abril de 2019, reuniu milhares de caxienses e turistas que se emocionaram com cada cena apresentada através da música, dança e teatro a céu aberto.\" </p> O texto faz menção ao espetáculo caxiense: </h3>",
      options: [ " Cidade Sacra. ",  " Paixão de Cristo. ", " Vivência em Cristo. ", " Princesa do Sertão. " ],
      correct: 0,  explanation: " \"Cidade Sacra\" em Caxias, MA, é uma representação teatral da Paixão de Cristo, realizada durante a Semana Santa, e um evento que, junto com o Fogaréu, atrai turistas e é um momento de reflexão religiosa para a cidade. " },

{ text: "<h3> QUESTÃO 38 </p> Luis Alves de Lima e Silva recebeu um importante titulo após a vitória sobre os balaios, a saber, </h3>",
      options: [ " Barão de Caxias. ",  " Principe do Sertão. ", " Cidadão Caxiense. ", " Rei das Palmeiras. " ],
      correct: 0,  explanation: " Após a vitória sobre a Balaiada, Luís Alves de Lima e Silva recebeu o título de Barão de Caxias. </p>  Mais tarde: Anos depois, por sua atuação na Guerra do Paraguai, ele receberia um título ainda mais alto, o de Duque de Caxias. " },


{ text: "<h3> QUESTÃO 39 </p> A Lei municipal N° 1.623/2006 caxiense institui: </h3>",
      options: [ " o Licenciamento Ambiental ",  " o Plano Diretor. ", " criação do Museu da Balaiada. ", " Politica Educacional " ],
      correct: 0,  explanation: " Essa lei aprova os critérios e tabelas de valores para a apuração dos custos do Licenciamento Ambiental no município de Caxias, Maranhão, incluindo a análise de Planos de Controle Ambiental e Estudos de Impacto Ambiental, além de listar as atividades consideradas poluidoras sujeitas ao licenciamento. " },

{ text: "<h3> QUESTÃO 40 </p> Um dos principais personagens da Balaiada, que tinha alcunha de \"Balaio\", foi: </h3>",
      options: [ " Negro Cosme ",  " Raimundo Gomes ", " Manoel Francisco dos Anjos Ferreira. ", " Raimundo Teixeira. " ],
      correct: 2,  explanation: " Manoel Francisco dos Anjos Ferreira era um artesão fabricante de cestos (balaios), motivo pelo qual ficou conhecido pela alcunha de \“Balaio\”. Ele foi um dos líderes iniciais da Balaiada, movimento popular ocorrido no Maranhão entre 1838 e 1841, ao lado de Raimundo Gomes e Negro Cosme. " },

{ text: "<h3> QUESTÃO 41 </p> Várias sãos as denominações dadas ao Municipio de Caxias ao longo de sua história, entres encontram-se as seguintes, EXCETO: </h3>",
      options: [ " São José das Aldeias Altas ",  " Arraial das Aldeias Alta  ", " Vila de Caxias ", " Aldeias Altas Sertaneja " ],
      correct: 3,  explanation: " A denominação “Aldeias Altas Sertaneja” nunca foi usada oficialmente para o município " },

{ text: "<h3> QUESTÃO 42 </p> A Lei Provincial, número 24, datada de 05 de julho de 1836, fora elevado à categoria de cidade com a denominação de </h3>",
      options: [ " São José das Aldeias Altas ",  " Arraial das Aldeias Alta ", " Caxias ", " Vila de Caxias " ],
      correct: 2,  explanation: " Por meio da Lei Provincial nº 24, de 5 de julho de 1836, a então Vila de Caxias foi elevada à categoria de cidade, passando oficialmente a se chamar Cidade de Caxias. " },

{ text: "<h3> QUESTÃO 43 </p> Delimita-se com Caxias, os Municipios abaixo com exceção de: </h3>",
      options: [ " Timon ",  " Coelho Neto ", " Peritoró ", " São João do Sóter " ],
      correct: 2,  explanation: " O município de Peritoró não faz limite direto com Caxias. " },

{ text: "<h3> QUESTÃO 44 </p> Entre as causas que levaram a Balaiada, destaca-se: </h3>",
      options: [ " o monopólio político de um grupo de fazendeiros da região. ",  " a busca por segregação de Caxias. ", " morte do negro Cosme. ", " cobranças de impostos excessivas " ],
      correct: 0,  explanation: " A Balaiada (1838-1841) foi uma revolta popular no Maranhão com múltiplas causas, mas a principal raiz do conflito estava ligada à insatisfação com a elite política local. " },

{ text: "<h3> QUESTÃO 45 </p> \"Não chores, meu filho, </br> Não chores, que a vida E luta renhida </br> Viver é lutar A vida é combate, Que os fracos abate, </br> Que os fortes, os bravos </br> Só pode exaltar\" </p> Essa estrofe de um poema intitulado Canção do Tamoio tem como autoria: </h3>",
      options: [ " Gonçalves Dias. ",  " Raimundo Teixeira. ", " Salgado Maranhão. ", " José de Ribamar Cardoso. " ],
      correct: 0,  explanation: " A estrofe apresentada pertence ao poema “Canção do Tamoio”, que é de autoria de Gonçalves Dias, um dos principais poetas do Romantismo brasileiro, conhecido por valorizar a temática indígena e nacionalista. " },


{ text: "<h3> QUESTÃO 46 </p> <img src=\"imagens/2.PNG\" alt=\" Caxias \" style=\"max-width: 45%; height: auto;\"> </br> Essa é a praça Vespasiano Ramos, ao fundo encontra-se a Igreja:  </h3>",
      options: [ " Rosário dos Pretos ",  " Nossa Senhora de Nazaré ", " São Benedito ", " Nossa Senhora dos Remédios " ],
      correct: 3,  explanation: " A igreja branca de arquitetura histórica visível ao fundo da Praça Vespasiano Ramos (também conhecida como Praça da Matriz) é a Igreja de Nossa Senhora dos Remédios, a matriz da cidade. " },



{ text: "<h3> QUESTÃO 47 </p> <img src=\"imagens/3.png\" alt=\" Caxias \" style=\"max-width: 45%; height: auto;\"> </br> Essa é a fotografia corresponde a um importante ponto turístico no Município de Caxias, a saber: </h3>",
      options: [ " Roncador ",  " Balneário da Ponte  ", "Rio Itapecuru  ", " Balneário Veneza  " ],
      correct: 3,  explanation: " O Balneário Veneza em Caxias, Maranhão, é um lago natural considerado um importante atrativo turístico da região, conhecido por suas águas minerais e pela lama com propriedades medicinais, além de ser um local de lazer popular.  " },


{ text: "<h3> QUESTÃO 48 </p> Academia Caxiense de Letras - local denominado, também, A Casa de Coelho Neto. Congrega os literatos da cidade desde a sua fundação, ocorrida em 15 de agosto de 1997. O atual presidente da Academia Caxiense de Letras é:  </h3>",
      options: [ " Raimundo Medeiros  ",  " Wibson Carvalho  ", " Teixeira Mendes  ", " Ezíquio Barros Neto " ],
      correct: 3,  explanation: " O atual presidente da Academia Caxiense de Letras, também conhecida como A Casa de Coelho Neto, é Ezíquio Barros Neto (ou Ezíquio Barros Filho).  Ele foi eleito para a presidência e estava em exercício em agosto e setembro de 2025, durante as celebrações do aniversário da Academia. " },




{ text: "<h3> QUESTÃO 49 </p> <img src=\"imagens/4.JPG\" alt=\" Caxias \" style=\"max-width: 100%; height: auto;\"> </br> Essa igreja localizada na praça Rui Barbosa foi construída no século XVIII (1775) por escravos para seu uso, uma vez que eram proibidos de frequentarem as igrejas brancas. Ela é denominada de: </h3>",
      options: [ " Igreja do Rosário dos Pretos ",  " Nossa Senhora de Nazaré ", " São Benedito ", " Nossa Senhora dos Remédios " ],
      correct: 0,  explanation: " Igreja do Rosário dos Pretos (também conhecida como Igreja de Nossa Senhora do Rosário dos Homens Pretos).  " },


{ text: "<h3> QUESTÃO 50 </p> Geograficamente, o Município de Caxias localiza-se: </h3>",
      options: [ " no Nordeste brasileiro, na sub-região do Meio Norte. ",  " no Nordeste brasileiro, na sub-região do Sertão. ", " na Região Norte, na sub-região do Meio Norte. ", " na Região Norte, na sub-região do Agreste. " ],
      correct: 0,  explanation: " Geograficamente, o município de Caxias (Maranhão) está situado no Nordeste, especificamente na sub-região do Meio Norte, que abrange partes do Maranhão e Piauí.  " },


{ text: "<h3> QUESTÃO 51 </p> Entre aspectos naturais seguintes, há um que não se relaciona ao Município de Caxias, ou seja, </h3>",
      options: [ " Bacia das Alpercates e Espigão Mestre. ",  " Clima Tropical Seco-Úmido. ", " Bacia do Mearim. ", " Mata de cocais. " ],
      correct: 0,  explanation: "► Bacia das Alpercatas = sistema fluvial localizado mais ao sul do Maranhão;</br> ► Espigão Mestre = divisor de águas que separa grandes bacias do estado; </p> Nenhum dos dois é característico de Caxias (MA), por isso essa alternativa está fora da realidade física do município. " },



{ text: "<h3> QUESTÃO 52 </p> O clima caxiense tem como características: </h3>",
      options: [ " elevadas temperaturas e duas estações bem definidas, sendo verão chuvoso e inverno seco. ",  " chuvas escassas e concentradas em três meses, verão seco e inverno chuvoso. ", " elevadas temperaturas e amplitude térmica, chuvas no verão. ", " elevada amplitude térmica e chuvas no inverno. " ],
      correct: 0,  explanation: " Caxias possui um clima Tropical com estação seca (Aw), caracterizado por elevadas temperaturas e duas estações bem definidas: verão chuvoso e inverno seco. " },


{ text: "<h3> QUESTÃO 53 </p> Os seguintes bairros compreendem a cidade de Caxias, exceto: </h3>",
      options: [ " Trizidela. ",  " Pirajá. ", " Volta Redonda. ", " João Teixeira. " ],
      correct: 2,  explanation: " Volta Redonda é um município do estado do Rio de Janeiro. Trizidela, Pirajá e João Teixeira são bairros de Caxias, Maranhão. " },

{ text: "<h3> QUESTÃO 54 </p> A antiga fábrica têxtil Companhia União Caxiense, fundada em 1889, desde 1976 abriga a escola Aluísio Azevedo, localizada no bairro e avenida, respectivamente: </h3>",
      options: [ " Ponte, Vespasiano Ramos. ",  " Mutirão, Alvorada. ", " Cangalheiro, General Sampaio. ", " Bela Vista, Manoel Emídio. " ],
      correct: 0,  explanation: " A antiga Companhia União Caxiense (hoje Centro de Cultura) está localizada no Bairro Ponte. A escola Aluísio Azevedo funcionava no local e a Avenida Vespasiano Ramos é uma das vias importantes da área. " },

{ text: "<h3> QUESTÃO 55 </p> Entre as Fábricas Têxteis fundadas em Caxias, destacam-se: </h3>",
      options: [ " Sanharó. ",  " Trizidela. ", " Companhia Cachias. ", " Fábrica Caxiense de Tecidos. " ],
      correct: 0,  explanation: " A Companhia Têxtil Carneiro, também conhecida como Companhia União Caxiense ou Companhia Manufatora Gonçalves Dias S. A, foi a mais importante fábrica têxtil de Caxias. </p >Entre as fábricas têxteis históricas fundadas em Caxias (MA), destacam-se a Fábrica Sanharó, a Companhia Industrial Caxiense, a Companhia União Caxiense e a Companhia Manufatora Caxiense.  " },

{ text: "<h3> QUESTÃO 56 </p> Os produtos abaixo fazem parte da produção associada ao setor primário caxiense, exceto: </h3>",
      options: [ " Banana. ",  " Coco da baía. ", " Cana de açúcar. ", " Carnaúba. " ],
      correct: 1,  explanation: " Caxias é um município do interior. Banana, Cana de açúcar e Carnaúba são produtos relevantes do setor primário da região. Coco da Baía é mais associado à produção de regiões litorâneas. " },

{ text: "<h3> QUESTÃO 57 </p> Demograficamente, o Município de Caxias caracteriza-se pela: </h3>",
      options: [ " elevada densidade demográfica. ",  " maior expectativa de vida do estado. ", " quinto município mais populoso do estado. ", " elevado número de analfabetos. " ],
      correct: 2,  explanation: " De acordo com o IBGE, Caxias é o quinto município mais populoso do Maranhão. " },

{ text: "<h3> QUESTÃO 58 </p> Segundo regionalização proposta pelo IBGE, Caxias está localizada: </h3>",
      options: [ " nas regiões intermediária e imediata de Caxias. ",  " nas regiões intermediária e imediata de Timon. ", " na região intermediária do Alto Itapecuru e imediata de Caxias. ", " na região intermediária do vale do Parnaíba e imediata de Caxias. " ],
      correct: 0,  explanation: " Caxias está localizada na Região Geográfica Intermediária de Caxias e na Região Geográfica Imediata de Caxias. " },



{ text: "<h3> QUESTÃO 59 </p> Na Igreja de São Benedito, em 1858, Dom Manoel Joaquim da Silveira referiu-se a Caxias como: </h3>",
      options: [ " Vila de Caxias. ",  " Princesa do Sertão Maranhense. ", " Freguesia das Aldeias Altas. ", " Arraial das Aldeias Altas. " ],
      correct: 1,  explanation: " Em visita pastoral em 1858, Dom Manoel Joaquim da Silveira apelidou a cidade de \"Princesa do Sertão Maranhense\". " },

{ text: "<h3> QUESTÃO 60 </p> No Brasão oficial da cidade de Caxias constam duas datas importantes à histórica caxiense: Elevação do município à categoria de Vila e Emancipação. As datas presentes no Brasão são: </h3>",
      options: [ " 1 de agosto de 1823 e 05 de julho de 1836. ",  " 31 de outubro de 1811 e 05 de julho de 1836. ", " 31 de outubro de 1811 e 1 de agosto de 1823. ", " 05 de julho de 1836 e 10 de abril de 1615. " ],
      correct: 1,  explanation: " As datas presentes no Brasão de Caxias são 31 de outubro de 1811 (elevação à categoria de Vila) e 05 de julho de 1836 (emancipação para cidade) " },

{ text: "<h3> QUESTÃO 61 </p> O Lema presente no Brasão caxiense é: </h3>",
      options: [ " Ordem e Progresso. ",  " Luta e Ordem. ", " A vida é combate. ", " Ordem e Combate. " ],
      correct: 2,  explanation: " O lema oficial de Caxias é \"A vida é combate\". " },

{ text: "<h3> QUESTÃO 62 </p> Uma data histórica corresponde ao centro da Bandeira caxiense, a saber, 1 de agosto de 1823. Essa data corresponde à sua: </h3>",
      options: [ " Emancipação política. ",  " Elevação à categoria de vila. ", " Nascimento de Gonçalves Dias. ", " Adesão à Independência do Brasil. " ],
      correct: 3,  explanation: " A data de 1 de agosto de 1823 marca a Adesão de Caxias à Independência do Brasil. " },



{ text: "<h3> QUESTÃO 63 </p> As cores predominantes na Bandeira e Brasão caxiense são: </h3>",
      options: [ " azul, verde e vermelho. ",  " amarelo, verde e vermelho. ", " verde, amarelo e azul. ", " marrom, verde e azul. " ],
      correct: 0,  explanation: " As cores predominantes nos símbolos oficiais de Caxias são azul, verde e vermelho. " },

{ text: "<h3> QUESTÃO 64 </p> Durante o Período Regencial a situação continuou tensa. A política da Província era marcada por disputas entre dois grupos. A Balaiada começou a partir dos choques entre esses dois grupos, mas em pouco tempo ganhou autonomia, tornando-se um movimento das massas sertanejas. Os grupos que o texto faz menção são: </h3>",
      options: [ " Balaios e Bem-te-vi. ",  " Cabanos e Bem-te-vi. ", " Balaios e cabanos. ", " Vaqueiros e balaios. " ],
      correct: 1,  explanation: " Os grupos da elite em disputa que precederam a Balaiada eram os liberais (\"Bem-te-vis\") e os conservadores (\"Cabanos\"). " },

{ text: "<h3> QUESTÃO 65 </p> A liderança passou para as mãos populares, de um pobre fabricante de balaios, do vaqueiro Raimundo Gomes e do negro Cosme Bento das Chagas, os verdadeiros líderes da rebelião. O pobre fabricante de balaios era: </h3>",
      options: [ " Luís Alves de Lima e Silva  ",  " Manuel Francisco dos Anjos Ferreira. ", " Sete estrelas - Vaqueiro. ", " Renato Teixeira Mendes. " ],
      correct: 1,  explanation: " O fabricante de balaios que deu nome ao movimento era Manuel Francisco dos Anjos Ferreira, o \"Balaio\". " },

{ text: "<h3> QUESTÃO 66 </p> Para as eleições de 1965, a classe política caxiense estava dividida entre o grupo vitorinista (apoiava a candidatura de Renato Archer para o governo do estado) e o grupo das Oposições Coligadas (apoiava a candidatura de José Sarney) e o grupo liderado pelo deputado estadual Ademil Silva (do PDC, apoiando a candidatura de Costa Rodrigues). Entre as três chapas, a de maior força rivalizava entre os vitorinistas e os oposicionistas. O primeiro grupo era liderado em Caxias por Eugênio Barros, ex-governador do estado. As Oposições eram comandadas por Alexandre Costa, membro de uma família de grandes recursos no município. Esses três grupos, embora mantivessem essa distinção em torno dos candidatos ao governo do estado, pensaram, no município, apoiar apenas um candidato a prefeito, preferencialmente um candidato que fosse benquisto pelo regime militar, mas mantivessem a rivalidade a nível estadual.  <p> O candidato que recebeu apoio desses três grupos e tornou-se prefeito de Caxias em 1966 foi: </h3>",
      options: [ " Paulo Marinho. ",  " Aluízio Lobo. ", " José Ferreira de Castro. ", " Sebastião Lopes de Sousa. " ],
      correct: 1,  explanation: " Aluízio de Abreu Lobo foi eleito prefeito de Caxias (1966-1970) com o apoio de diferentes grupos políticos locais. " },




{ text: "<h3> QUESTÃO 67 </p> Em meio à campanha eleitoral de 1986, ele teve sua candidatura impugnada pelo Tribunal Superior Eleitoral (TSE). Seus adversários haviam entrado com uma denúncia na Justiça Eleitoral do Maranhão. Não ganharam nessa instância e recorreram da decisão à instância superior, em Brasília, obtendo êxito. O TSE acatou o que fora denunciado: ele não se desincompatibilizara em tempo hábil do cargo de Delegado Regional do Trabalho. </p> A figura política caxiense mencionada no texto é: </h3>",
      options: [ " Paulo Marinho. ",  " José Ferreira de Castro. ", " Frederico Brandão. ", " Ezíquio Barros Filho. " ],
      correct: 0,  explanation: " O texto se refere a Paulo Marinho, que teve sua candidatura em 1986 impugnada por não se desincompatibilizar do cargo de Delegado Regional do Trabalho. " },

{ text: "<h3> QUESTÃO 68 </p> Logo no início da década, a população ficou chocada com o assassinato de um renomado médico, às margens do Rio Itapecuru chamado: </h3>",
      options: [ " Frederico Brandão. ",  " João Viana. ", " Humberto Coutinho. ", " Ezíquio Barros Filho. " ],
      correct: 0,  explanation: " O médico assassinado às margens do Rio Itapecuru em Caxias, no início da década de 1980, foi o Dr. Frederico Brandão. " },

{ text: "<h3> QUESTÃO 69 </p> Em 1985, morreu na capital piauiense o prefeito José Ferreira de Castro vítima de leucemia. Ele foi substituído por seu vice, isto é, </h3>",
      options: [ " Catulé. ",  " Paulo Marinho. ", " Hélio de Queiroz. ", " Francisco Carneiro. " ],
      correct: 2,  explanation: " José Ferreira de Castro foi sucedido por seu vice-prefeito, Hélio de Queiroz. " },

{ text: "<h3> QUESTÃO 70 </p> Composta por 19 membros, a Câmara de Vereadores de Caxias tem atualmente como presidente: </h3>",
      options: [ " Batulê. ",  " Thaís Coutinho. ", " Luís Carlos. ", " Ricardo Rodrigues de Matos. " ],
      correct: 3,  explanation: " A Câmara de Vereadores de Caxias (MA), que é composta por 19 membros, tem atualmente como presidente Ricardo Rodrigues de Matos. Ele preside a mesa diretora para a legislatura de 2025-2028.  " },



{ text: "<h3> QUESTÃO 71 </p> Este caxiense foi poeta, advogado, jornalista, etnólogo e teatrólogo brasileiro. Um grande expoente do romantismo brasileiro e da tradição literária conhecida como indianismo. O autor em questão é: </h3>",
      options: [ " Gonçalves Dias. ",  " Vespasiano Ramos. ", " Firmino Freitas. ", " Coelho Neto. " ],
      correct: 0,  explanation: " Gonçalves Dias, nascido em Caxias, é o maior representante do Indianismo na poesia do Romantismo brasileiro. " },



{ text: "<h3> QUESTÃO 73 </p> Poeta maranhense, nascido em Caxias no dia 13 de agosto de 1884, passou seus últimos dias na então vila de Porto Velho, Comarca de Humaytá, Estado do Amazonas, hoje município de Porto Velho, capital do Estado de Rondônia no início de dezembro de 1916 e faleceu no dia 26 do mesmo mês. Escreveu o livro \"Coisa Alguma\". O texto refere-se ao caxiense: </h3>",
      options: [ " Salgado Maranhão. ",  " Vespasiano Ramos. ", " Firmino Freitas. ", " Coelho Neto. " ],
      correct: 1,  explanation: " A descrição é do poeta Vespasiano Ramos, autor do livro \"Coisa Alguma\". " },


{ text: "<h3> QUESTÃO 74 </p> Esse personagem caxiense foi um escritor de cronistas, folclore, romances, críticas e peças de teatro. Além disso, era político e professor, Membro da Academia Brasileira de Letras, onde foi o fundador e ocupa a Cadeira de número 2. O personagem da cultura caxiense é: </h3>",
      options: [ " Gonçalves Dias. ",  " Vespasiano Ramos. ", " Firmino Freitas. ", " Coelho Neto. " ],
      correct: 3,  explanation: " Coelho Neto foi um dos fundadores da Academia Brasileira de Letras (ABL) e ocupante da Cadeira nº 2. " },

{ text: "<h3> QUESTÃO 75 </p> Não secarás as raízes </br> do teu sopro </br> no abismo da noite púrpura; </br> não seguirás o fantasma </br> que atravessa os trilhos; </br> não cantarás aos muros de arrimo </br> tua fantasia de pássaro. </br> </p> Escarpado é o chão </br> dos teus sapatos; </br> escarpado é o azul </br> rabiscado de estrelas; </br> escarpada é a rima </br> que lateja a alegoria </br> da palavra.   </p> Esse poema tem como o autor o caxiense nascido no povoado de Canabrava das Moças. Alfabetizado aos 15 anos, venceu diversas barreiras sociais e recebeu diversos prêmios de literatura. O autor é: </h3>",
      options: [ " Salgado Maranhão. ",  " Vespasiano Ramos. ", " Firmino Freitas. ", " Coelho Neto. " ],
      correct: 0,  explanation: " O poeta caxiense nascido em Canabrava das Moças é Salgado Maranhão. " },

{ text: "<h3> QUESTÃO 76 </p> Na década de 1990 um grupo de estudantes universitários e historiadores, liderados por um arqueólogo, resolveu recontar a história caxiense. Para isso se instalaram no Morro do Alecrim, palco final da revolta e iniciaram diversas pesquisas arqueológicas. Como resultado dessas pesquisas surgiu em Caxias </h3>",
      options: [ " Memorial da Balaiada. ",  " Praça Duque de Caxias, ao lado do quartel. ", " APA do Inhamum. ", " Museu da Farroupilha. " ],
      correct: 0,  explanation: " O Memorial da Balaiada foi criado no Morro do Alecrim, em Caxias, local do cerco final da revolta, como resultado de pesquisas arqueológicas e históricas. " },

{ text: "<h3> QUESTÃO 77 </p> Em 1730, na atual Caxias viviam três tribos indígenas, ou seja, </h3>",
      options: [ " Gamelas, Tupis-Guaranis e Tapajos. ",  " Guanarés, Xavantes e Tapajos. ", " Timbiras, Gamelas e Guanarés. ", " Caixapós, Timbiras e Gamelas. " ],
      correct: 2,  explanation: " As três principais nações indígenas que habitavam a região da atual Caxias no século XVIII eram os Timbiras, Gamelas e Guanarés. " },

{ text: "<h3> QUESTÃO 78 </p> Corresponde à vegetação típica caxiense </h3>",
      options: [ " Pradarias. ",  " Matas tropicais. ", " Mata de Cocais. ", " Caatinga. " ],
      correct: 2,  explanation: " Caxias está localizada em uma área de transição que tem como vegetação predominante a Mata de Cocais, com a presença de palmeiras como babaçu e carnaúba. " },

{ text: "<h3> QUESTÃO 79 </p> Os produtos agrícolas característicos de Caxias, entre outros, são: </h3>",
      options: [ " Coco da baía, mandioca e açaí. ",  " Feijão, algodão e trigo. ", " Arroz, pimenta do reino e uva. ", " Banana, cana de açúcar e soja. " ],
      correct: 3,  explanation: " A produção agrícola de Caxias é diversificada, com destaque para a banana, cana de açúcar e soja, além de outras culturas como arroz e mandioca. " },

{ text: "<h3> QUESTÃO 80 </p> Entre as bacias hidrográficas maranhenses, há um rio que corta a cidade de Caxias. O rio em questão é </h3>",
      options: [ " Mearim. ",  " Pindaré. ", " Preguiças. ", " Itapecuru. " ],
      correct: 3,  explanation: " O Rio Itapecuru é o principal curso d'água que banha e corta a cidade de Caxias, sendo fundamental para sua história e economia. " },

{ text: "<h3> QUESTÃO 81 </p> Os nomes abaixo tratam-se de bairros da cidade de Caxias, exceto </h3>",
      options: [ " Matadouro Velho. ",  " João Viana. ", " Vila Alecrim. ", " Marcos Pontes. " ],
      correct: 3,  explanation: " Matadouro Velho, João Viana e Vila Alecrim são bairros de Caxias (MA). Marcos Pontes é o nome do primeiro astronauta brasileiro. " },

{ text: "<h3> QUESTÃO 82 </p> A cidade de Caxias forma um importante eixo rodoviário com destaque à BR </h3>",
      options: [ " 343. ",  " 164. ", " 316. ", " 264. " ],
      correct: 2,  explanation: " A BR-316 é uma rodovia federal crucial que atravessa o município de Caxias (MA), conectando-o a Teresina (PI) e ao restante do Maranhão. " },

{ text: "<h3> QUESTÃO 83 </p> O reconhecimento da emancipação política de Caxias ocorreu em </h3>",
      options: [ " 05 de julho de 1836. ",  " 20 de janeiro de 1816. ", " 06 de março de 1822. ", " 04 de julho de 1834. " ],
      correct: 0,  explanation: " Caxias foi elevada à categoria de cidade pela Lei Provincial nº 7, de 5 de julho de 1836. " },

{ text: "<h3> QUESTÃO 84 </p> Foi na Igreja de São Benedito que, em 1858, Dom Manoel Joaquim da Silveira, denominou Caxias com o título: </h3>",
      options: [ " Cidade verde. ",  " Capital Maranhense. ", " Princesa do Sertão maranhense. ", " Maravilhosa capital maranhense. " ],
      correct: 2,  explanation: " Em visita pastoral, em 1858, o Bispo Dom Manoel Joaquim da Silveira concedeu a Caxias o título de 'Princesa do Sertão Maranhense'. " },

{ text: "<h3> QUESTÃO 85 </p> Considerando o último censo realizado, Caxias apresenta </h3>",
      options: [ " a quinta maior população absoluta do estado. ",  " elevada densidade demográfica. ", " baixa taxa de natalidade. ", " PIB per capita elevado. " ],
      correct: 0,  explanation: " De acordo com os dados do último censo do IBGE (2022), Caxias é o quinto município mais populoso do estado do Maranhão. " },

{ text: "<h3> QUESTÃO 86 </p> Utilizando a divisão regional do IBGE, Caxias encontra-se na mesorregião </h3>",
      options: [ " Norte maranhense. ",  " Leste maranhense. ", " Sul maranhense. ", " Centro maranhense. " ],
      correct: 1,  explanation: " Na antiga divisão regional do IBGE (mesorregiões), Caxias pertencia à Mesorregião do Leste Maranhense. " },

{ text: "<h3> QUESTÃO 87 </p> Os seguintes itens são aspectos naturais de Caxias, exceto </h3>",
      options: [ " clima tropical com seis meses secos. ",  " território caatinga, cerrado e floresta amazônica. ", " baixas temperaturas anuais. ", " precipitação acima de 1000mm/ano. " ],
      correct: 2,  explanation: " Caxias possui um clima Tropical com elevadas temperaturas médias anuais, o que torna a característica de 'baixas temperaturas anuais' incorreta. " },

{ text: "<h3> QUESTÃO 88 </p> Na atual classificação do IBGE, o município de Caxias foi considerado </h3>",
      options: [ " Região Imediata. ",  " Região Intermediária. ", " Região Imediata e Intermediária. ", " Mesorregião e Microrregião. " ],
      correct: 2,  explanation: " Na atual divisão regional do IBGE, Caxias é o centro de sua própria Região Geográfica Imediata e também de sua Região Geográfica Intermediária. " },

{ text: "<h3> QUESTÃO 89 </p> Os principais produtos da pecuária caxiense são: </h3>",
      options: [ " Suínos e gado bovino. ",  " Equinos e muares. ", " Caprinos e mulas. ", " Carcinicultura e gado bovino. " ],
      correct: 0,  explanation: " A pecuária caxiense é tradicionalmente baseada na criação de gado bovino e na suinocultura. " },

{ text: "<h3> QUESTÃO 90 </p> O atual prefeito e vice-prefeito caxiense são, respectivamente, </h3>",
      options: [ " José Gentil Rosa Neto e Eugênio de Sá Coutinho Filho ",  " Ximenes e Mário Assunção. ", " Durval Júnior e Edilson Martins. ", " Fábio José Gentil Pereira Rosa e Mario Assunção. " ],
      correct: 0,  explanation: " A Prefeitura de Caxias (MA), iniciou 2025 com uma nova gestão, que tem à frente: Gentil Neto, Prefeito; e Eugênio Coutinho, vice." },

{ text: "<h3> QUESTÃO 91 </p> Filhos de Caxias, esses personagens eternizaram-se na composição de dois símbolos nacionais: o Hino Nacional Brasileiro e a Bandeira Nacional Brasileira. Os personagens são, respectivamente, </h3>",
      options: [ " Antônio Gonçalves Dias e Torquato Neto. ",  " Torquato Neto e Raimundo Teixeira Mendes. ", " Antônio Gonçalves Dias e Raimundo Teixeira Mendes. ", " Mário Andrade e Torquato Neto. " ],
      correct: 2,  explanation: " Raimundo Teixeira Mendes, caxiense, é o autor da divisa 'Ordem e Progresso' na Bandeira Nacional. A referência a Antônio Gonçalves Dias, também caxiense, se deve à sua grande relevância na literatura nacional, frequentemente associado a simbolismos patrióticos. " },











  ],

  // CATEGORIAS DA LEI ORGÂNICA (Chaves inalteradas)



lei_organica_parte_1: [
    {
      text: "<h3> QUESTÃO 1</p> O Art. 1º da Lei Orgânica do Município de Caxias-MA estabelece a natureza e a autonomia do Município. Assinale a alternativa CORRETA: </h3>   ",
      options: ["O Município de Caxias é uma autarquia do Estado do Maranhão, com autonomia apenas administrativa.", "O Município de Caxias é uma unidade do Estado do Maranhão, com personalidade jurídica de Direito Privado.", "O Município de Caxias é uma unidade do Estado do Maranhão, com personalidade jurídica de Direito Público Interno e autonomia política, administrativa e financeira.", "O Município de Caxias possui autonomia política, administrativa e financeira, mas subordina-se diretamente ao Governo Federal."],
      correct: 2,
      explanation: "O Art. 1º define Caxias como uma unidade do Estado do Maranhão com personalidade jurídica de Direito Público Interno e autonomia política, administrativa e financeira.</p> Dica: Lembre-se do \"Tripé da Autonomia Municipal\": Política, Administrativa e Financeira (PAF)."
    },
    {
      text: "<h3> QUESTÃO 2</p> De acordo com a Lei Orgânica, sobre a alteração dos limites territoriais e a criação de Distritos, é correto afirmar: </h3>   ",
      options: ["Os limites do território do Município podem ser alterados mediante Lei Municipal, após consulta plebiscitária.", "A criação, organização e supressão de Distritos compete ao Município, mas a alteração dos limites territoriais somente pode ocorrer na forma estabelecida na Constituição Estadual.", "Tanto a alteração dos limites do território quanto a criação de Distritos são competências privativas da Câmara Municipal, não dependendo de legislação estadual.", "A alteração dos limites territoriais e a criação de Distritos dependem unicamente de Decreto do Prefeito Municipal."],
      correct: 1,
      explanation: "O Art. 2º dispõe que os limites territoriais só podem ser alterados na forma da Constituição Estadual. Seu Parágrafo Único atribui ao Município a competência para criação, organização e supressão de Distritos, observada a Legislação Estadual.</p> Dica: A alteração de limites (fronteiras) depende da Constituição Estadual, enquanto a organização interna (Distritos) é Municipal, mas obedece à lei Estadual."
    },
    {
      text: "<h3> QUESTÃO 3</p> Quais são os símbolos oficiais do Município de Caxias, conforme estipula a Lei Orgânica? </h3>   ",
      options: ["O Mapa, a Bandeira e o Hino, representativos de sua soberania.", "O Brasão de Armas, a Bandeira e o Hino, representativos de sua história e cultura.", "A Bandeira, o Selo e o Lema, representativos de sua autonomia.", "O Brasão de Armas, o Lema e o Hino, representativos de sua identidade."],
      correct: 1,
      explanation: "O Art. 3º estabelece que os símbolos do Município são o Brasão de Armas, a Bandeira e o Hino, que representam sua história e cultura.</p> Dica: Os símbolos municipais são geralmente os mesmos símbolos nacionais/estaduais: Brasão, Bandeira e Hino (BBH)."
    },
    {
      text: "<h3> QUESTÃO 4</p> Assinale a alternativa que apresenta uma competência expressa do Município de Caxias, conforme o Art. 4º da Lei Orgânica: </h3>   ",
      options: ["Legislar sobre Direito Civil, Penal e Processual.", "Instituir o serviço militar obrigatório.", "Elaborar o orçamento, instituir e arrecadar os tributos, e legislar sobre assuntos de interesse local.", "Dispor sobre o regime de porto e navegação fluvial e lacustre."],
      correct: 2,
      explanation: "O Art. 4º, I, II e III estabelecem a competência para legislar sobre assuntos de interesse local, elaborar o orçamento, e instituir e arrecadar tributos e contribuições de sua competência.</p> Dica: As competências essenciais de um Município envolvem a Lei (legislar), o Dinheiro (tributar e orçar) e os Serviços Locais."
    },
    {
      text: "<h3> QUESTÃO 5</p> A respeito dos serviços públicos e da administração de bens municipais, compete ao Município, segundo a Lei Orgânica: </h3>   ",
      options: ["Apenas organizar os seus serviços públicos, sendo a prestação vedada por concessão ou autorização.", "Organizar e prestar seus serviços públicos, diretamente ou sob os regimes de concessão ou autorização, e dispor sobre a administração, utilização e alienação de seus bens.", "Prestar serviços públicos exclusivamente por regime direto, e a alienação de bens depende de lei federal.", "Dispor sobre a utilização de seus bens, mas a administração e alienação são competências do Estado."],
      correct: 1,
      explanation: "O Art. 4º, VI prevê a organização e prestação de serviços públicos, inclusive por concessão ou autorização. O inciso VII atribui a competência para dispor sobre a administração, utilização e alienação de seus bens.</p> Dica: O Município possui autonomia para gerir seus serviços (direta ou indiretamente) e seus próprios bens (administrar, usar, alienar)."
    },
    {
      text: "<h3> QUESTÃO 6</p> No que tange à ordenação territorial e aos logradouros públicos, é competência do Município: </h3>   ",
      options: ["Apenas elaborar o Plano Diretor, sendo a ordenação territorial e regulamentação dos logradouros competência estadual.", "Promover a ordenança territorial, mediante planejamento e controle do uso, do parcelamento e da ocupação do solo urbano, e regulamentar a utilização dos logradouros públicos.", "Regular a utilização dos logradouros públicos, mas a ordenança territorial é privativa da União.", "Promover o parcelamento do solo urbano, mas a ocupação e o uso são regulamentados por lei federal."],
      correct: 1,
      explanation: "O Município é competente para promover a ordenança territorial (planejamento e controle do uso, parcelamento e ocupação do solo urbano - IX) e regulamentar a utilização dos logradouros públicos (X).</p> Dica: O planejamento da cidade (solo urbano) e a organização das ruas (logradouros) são o \"feijão com arroz\" da competência municipal."
    },
    {
      text: "<h3> QUESTÃO 7</p> Sobre o transporte no Município de Caxias, a Lei Orgânica estabelece que compete ao Município: </h3>   ",
      options: ["Fixar e sinalizar apenas os locais de estacionamento de veículos, sendo as tarifas de transporte coletivo definidas pelo Estado.", "Dispor sobre o transporte coletivo e individual de passageiros, fixar tarifas, e estabelecer e sinalizar locais de estacionamento, limites de \"zonas de silêncio\" e trânsito especial.", "Apenas regulamentar o transporte individual, deixando o coletivo para o Estado.", "Fixar e sinalizar apenas os limites de \"zonas de silêncio\", sendo o restante competência federal."],
      correct: 1,
      explanation: "O Art. 4º, XI, trata do transporte coletivo e individual (itinerário, pontos, estacionamento e tarifas). O inciso XII complementa com a fixação e sinalização de locais de estacionamento, \"zonas de silêncio\" e trânsito em condições especiais.</p> Dica: Transporte e Trânsito dentro do município (incluindo onde estacionar e onde fazer silêncio) são responsabilidades locais."
    },
    {
      text: "<h3> QUESTÃO 8</p> No tocante à limpeza pública e serviços funerários, compete ao Município: </h3>   ",
      options: ["Apenas providenciar a limpeza de vias e logradouros, sendo a destinação final dos resíduos de competência da União.", "Disciplinar a execução de serviços por particulares e dar destinação final aos resíduos coletados, mas a administração de cemitérios é privada.", "Provenciar a limpeza de vias e logradouros públicos, dar adequada destinação final aos resíduos, dispor sobre o serviço funerário e fiscalizar cemitérios privados.", "Dispor sobre o serviço funerário, mas a administração dos cemitérios municipais cabe à Câmara Municipal."],
      correct: 2,
      explanation: "O Art. 4º, XIV, trata da limpeza de vias e da destinação final dos resíduos. O inciso XV aborda o serviço funerário, a administração de cemitérios municipais e a fiscalização de cemitérios privados.</p> Dica: Lembre-se que as responsabilidades do Município cobrem \"do lixo ao enterro\" (limpeza e serviço funerário)."
    },
    {
      text: "<h3> QUESTÃO 9</p> Em relação à saúde e educação, assinale a competência expressa do Município: </h3>   ",
      options: ["Manter programas de educação *exclusivamente* em parceria com a iniciativa privada.", "Prestar serviços de atendimento à saúde da população, de acordo com organismos públicos e privados, e manter programas de educação em parceria com o Estado e a União.", "Apenas manter o ensino superior, sendo o fundamental de competência do Estado.", "Prestar serviços de saúde e educação de forma suplementar à União, mas sem possibilidade de parcerias."],
      correct: 1,
      explanation: "O Art. 4º, XVI, prevê a prestação de serviços de saúde em coordenação com organismos públicos e privados. O inciso XVII estabelece a manutenção de programas de educação em parceria com o Estado e a União.</p> Dica: O Município atua diretamente na saúde e educação, mas o faz de forma cooperativa (parceria) com as demais esferas de governo e, na saúde, também com o setor privado."
    },
    {
      text: "<h3> QUESTÃO 10</p> A respeito dos servidores públicos e da segurança, compete ao Município: </h3>   ",
      options: ["Dispor sobre o regime jurídico e plano de carreira dos servidores, mas a criação da Guarda Municipal é competência exclusiva do Estado.", "Dispor sobre o regime jurídico e respectivos planos de carreira para os servidores da administração pública direta e indireta, e constituir, nos termos da Lei, a Guarda Municipal.", "Apenas constituir a Guarda Municipal para atuar como força policial ostensiva.", "Dispor sobre o regime jurídico dos servidores apenas da administração direta."],
      correct: 1,
      explanation: "O Art. 4º, XX, trata do regime jurídico e planos de carreira para os servidores. O inciso XXI trata da constituição da Guarda Municipal.</p> Dica: O Município define as regras para os seus próprios funcionários (Regime Jurídico) e pode ter a sua própria força de segurança (Guarda Municipal)."
    },
    {
      text: "<h3> QUESTÃO 11</p> No que concerne aos estabelecimentos industriais, comerciais e similares, e observada a legislação federal pertinente, compete ao Município: </h3>   ",
      options: ["Apenas conceder licença para funcionamento, sendo a revogação de licença e o fechamento de competência estadual.", "Conceder, renovar e revogar licença para instalação, localização e funcionamento, e promover o fechamento ou interdição dos que estiverem funcionando irregularmente.", "Apenas revogar a licença daqueles prejudiciais à saúde, sendo a concessão competência da União.", "Promover a interdição apenas dos que estiverem em desacordo com a lei federal, não cabendo ao Município a fiscalização local."],
      correct: 1,
      explanation: "O Art. 4º, XXIV, estabelece a competência municipal para o ciclo completo de fiscalização de estabelecimentos: conceder/renovar licença ('a'), revogar a licença ('b') e promover o fechamento/interdição ('c').</p> Dica: A competência de Poder de Polícia do Município abrange o \"controle de vida\" do estabelecimento: Abrir (conceder), Tirar (revogar) e Fechar (interditar)."
    },
    {
      text: "<h3> QUESTÃO 12</p> Dentre as competências residuais e suplementares do Município, estão: </h3>   ",
      options: ["Criar e organizar Distritos com observância apenas da lei federal.", "Estabelecer e impor penalidades por infração das leis e regulamentos municipais, criar, organizar e suprimir Distritos (respeitando a lei estadual) e suplementar as legislações federal e estadual no que couber.", "Apenas suplementar a legislação federal, sendo vedada a suplementação da estadual.", "Impor penalidades, mas a criação de Distritos é competência exclusiva do Estado."],
      correct: 1,
      explanation: "O Art. 4º, XXV, trata de penalidades por infração. O inciso XXVI trata da criação de Distritos (respeito à legislação estadual). O inciso XXVII trata da competência suplementar às leis federal e estadual.</p> Dica: O Município possui autonomia para ter sua própria lei de infrações, organizar seu território interno (Distritos) e complementar as leis maiores (Suplementar)."
    },
    {
      text: "<h3> QUESTÃO 13</p> Compete ao Município, em comum com a União e o Estado: </h3>   ",
      options: ["Promover o registro civil das pessoas naturais.", "Zelar pela guarda da Constituição e leis, e cuidar da saúde e assistência públicas.", "Emitir moeda e fiscalizar as operações de crédito.", "Organizar o Poder Judiciário."],
      correct: 1,
      explanation: "Os incisos XXVIII e XXIX são competências comuns (materiais) com a União e o Estado, como zelar pela Constituição/leis e cuidar da saúde/assistência públicas.</p> Dica: Competências comuns são ações que precisam da colaboração de todos os entes para serem efetivas (ex: saúde, assistência, meio ambiente, patrimônio)."
    },
    {
      text: "<h3> QUESTÃO 14</p> Em relação à cultura, educação, ciência e meio ambiente, é competência do Município: </h3>   ",
      options: ["Proporcionar acesso à cultura, educação e ciência, mas a proteção do meio ambiente cabe exclusivamente à União.", "Apenas proteger o meio ambiente, sendo as ações de cultura e educação exclusivas da União.", "Proporcionar os meios de acesso à cultura, à educação e à ciência, e proteger o meio ambiente, preservando as florestas, a fauna e a flora da poluição.", "Fomentar a produção de alimentos e organizar o abastecimento, mas a ciência e cultura não são prioridades municipais."],
      correct: 2,
      explanation: "O Município deve proporcionar acesso à cultura, educação e ciência (XXXI) e proteger o meio ambiente, abrangendo florestas, fauna, flora e poluição (XXXII).</p> Dica: A cultura/educação/ciência (desenvolvimento humano) e o meio ambiente (sustentabilidade) são áreas de atuação comum e essencial do Município."
    },
    {
      text: "<h3> QUESTÃO 15</p> Sobre a política habitacional e social, é competência do Município: </h3>   ",
      options: ["Promover a construção de moradias populares e melhorar as condições habitacionais e de saneamento básico, e combater as causas da pobreza e fatores de marginalização social.", "Apenas construir moradias, sendo o saneamento básico e o combate à pobreza de responsabilidade do Estado.", "Somente combater a marginalização social, sem intervir na questão habitacional.", "Promover a construção de moradias apenas para servidores públicos municipais."],
      correct: 0,
      explanation: "O Município deve promover moradia, habitação e saneamento básico (XXXIV) e combater a pobreza e a marginalização social (XXXV).</p> Dica: O Município, por ser o ente mais próximo do cidadão, tem a responsabilidade de atuar diretamente nas questões de moradia e inclusão social."
    },
    {
      text: "<h3> QUESTÃO 16</p> Qual a disposição da Lei Orgânica sobre a fiscalização de recursos hídricos/minerais e a possibilidade de parcerias e convênios? </h3>   ",
      options: ["O Município não tem competência para fiscalizar recursos hídricos/minerais, e convênios com outros municípios são vedados.", "Compete ao Município registrar, acompanhar e fiscalizar as concessões de direito de pesquisa e exploração de recursos hídricos e minerais em seus territórios e faculta ao Município estabelecer parcerias e convênios com a União, o Estado e outros municípios.", "A fiscalização de recursos hídricos e minerais é exclusiva da União, e as parcerias são restritas ao Estado.", "O Município pode fiscalizar recursos minerais, mas não hídricos, e parcerias e convênios devem ser aprovados por dois terços dos membros da Câmara."],
      correct: 1,
      explanation: "O Art. 4º, XXXVI, confere a competência para registrar, acompanhar e fiscalizar concessões de recursos hídricos e minerais. O Parágrafo Único faculta o estabelecimento de parcerias e convênios com a União, o Estado e outros municípios.</p> Dica: A fiscalização dos recursos naturais (hídricos/minerais) no território é uma competência comum importante, e a colaboração entre entes (parcerias/convênios) é um instrumento essencial para o Município."
    }
  ],
  lei_organica_parte_2: [
    {
      text: "<h3> QUESTÃO 17</p> Sobre o Poder Legislativo Municipal de Caxias, é INCORRETO afirmar: </h3>   ",
      options: ["É exercido pela Câmara Municipal, composta por Vereadores eleitos pelo voto direto e secreto.", "A Câmara Municipal de Caxias será composta por vinte e um (21) Vereadores.", "O número de Vereadores poderá ser alterado, respeitado o princípio da anterioridade e o limite fixado no art. 29 da CF/1988.", "O número de Vereadores da Câmara Municipal de Caxias é de dezenove (19)."],
      correct: 1,
      explanation: "O Parágrafo Único do Art. 6º estabelece que a Câmara Municipal de Caxias é composta por dezenove (19) Vereadores. A alternativa \"B\" apresenta um número incorreto.</p> Dica: O número de Vereadores é uma informação específica da Lei Orgânica e deve ser memorizado: 19 (dezenove) Vereadores."
    },
    {
      text: "<h3> QUESTÃO 18</p> O Art. 7º da Lei Orgânica assegura ao Poder Legislativo Municipal: </h3>   ",
      options: ["Autonomia hierárquica e financeira.", "Subordinação total ao Poder Executivo.", "Autonomia funcional, administrativa e financeira.", "Autonomia funcional e administrativa, mas a financeira é compartilhada com o Executivo."],
      correct: 2,
      explanation: "O Art. 7º assegura à Câmara Municipal autonomia funcional, administrativa e financeira.</p> Dica: A Câmara, enquanto Poder, deve possuir autonomia total em suas esferas de atuação: Funcional, Administrativa e Financeira (FAF)."
    },
    {
      text: "<h3> QUESTÃO 19</p> Dentre as competências da Câmara Municipal, com a sanção do Prefeito, encontra-se: </h3>   ",
      options: ["Votar o orçamento anual, o plano plurianual de investimento, a lei de diretrizes orçamentárias e deliberar sobre a obtenção e concessão de empréstimos e operações de crédito.", "Julgar as contas do Prefeito e fixar o seu subsídio.", "Elaborar o Plano Diretor, sendo a votação do orçamento competência privativa do Prefeito.", "Autorizar a criação de novos Estados da Federação e deliberar sobre a obtenção de empréstimos pela União."],
      correct: 0,
      explanation: "O Art. 8º, III, trata da votação das leis orçamentárias (PPA, LDO, LOA). O inciso IV trata da autorização para empréstimos e operações de crédito. Ambas requerem a sanção do Prefeito.</p> Dica: As Leis Orçamentárias (PPA, LDO, LOA) e as operações de crédito/empréstimos são temas legislativos que demandam a participação do Executivo (Sanção)."
    },
    {
      text: "<h3> QUESTÃO 20</p> Em relação aos bens municipais, compete à Câmara Municipal, com sanção do Prefeito: </h3>   ",
      options: ["Autorizar a concessão de direito real de uso de bens municipais, e autorizar a alienação de bens imóveis.", "Apenas autorizar a alienação de bens móveis.", "Autorizar a aquisição de bens imóveis em todos os casos.", "Dispor sobre a utilização de bens municipais, sendo a concessão e alienação competência exclusiva do Executivo."],
      correct: 0,
      explanation: "O Art. 8º, VII, exige autorização para concessão de direito real de uso. O inciso IX exige autorização para alienação de bens imóveis.</p> Dica: O uso prolongado ou a perda definitiva de bens imóveis do Município (concessão de direito real de uso, alienação) deve ser autorizada pelo Legislativo."
    },
    {
      text: "<h3> QUESTÃO 21</p> Assinale a alternativa que apresenta duas competências da Câmara Municipal sujeitas à sanção do Prefeito: </h3>   ",
      options: ["Fixar o subsídio dos Vereadores e julgar as contas do Prefeito.", "Autorizar a aquisição de bens imóveis (salvo doação sem encargos) e delimitar o perímetro urbano.", "Elaborar o Regimento Interno e eleger a Mesa Diretora.", "Dar posse ao Prefeito e conceder título de cidadania honorária."],
      correct: 1,
      explanation: "O Art. 8º, X, trata da autorização para aquisição de bens imóveis, exceto doação sem encargos. O inciso XV trata da delimitação do perímetro urbano.</p> Dica: A aquisição e a estrutura urbana (perímetro urbano) são matérias que envolvem planejamento e gasto, demandando a atuação conjunta dos Poderes (Lei)."
    },
    {
      text: "<h3> QUESTÃO 22</p> Sobre a fiscalização e controle, compete à Câmara Municipal, com sanção do Prefeito, dispor sobre: </h3>   ",
      options: ["Requisitar, à rede bancária local, extratos e saldos da movimentação dos recursos financeiros municipais.", "Exercer, com auxílio do Tribunal de Contas do Estado, a fiscalização orçamentária, operacional e patrimonial do Município, e requisitar, à rede bancária local, extratos e saldos da movimentação dos recursos financeiros municipais.", "Apenas a fiscalização operacional, sendo a contábil de competência do Tribunal de Contas.", "Fiscalizar as contas, mas a requisição de extratos bancários é atribuição exclusiva do Ministério Público."],
      correct: 1,
      explanation: "O Art. 8º, XVIII, trata da fiscalização (orçamentária, operacional e patrimonial) com auxílio do TCE. O inciso XIX trata da requisição de extratos e saldos da movimentação de recursos à rede bancária local.</p> Dica: Fiscalização é a função típica do Legislativo. O auxílio do TCE é na técnica, mas o controle final é da Câmara, que possui meios diretos de acesso à informação (requisição de extratos)."
    },
    {
      text: "<h3> QUESTÃO 23</p> Dentre as atribuições que competem *exclusivamente* à Câmara, está: </h3>   ",
      options: ["Autorizar a concessão de direito real de uso de bens municipais.", "Dar posse ao Prefeito Municipal e ao Vice-Prefeito, conhecer de suas renúncias, e conceder licença ao Prefeito, ao Vice-Prefeito e aos Vereadores para afastamento do cargo.", "Legislar sobre tributos e taxas municipais.", "Aprovar o Plano Diretor."],
      correct: 1,
      explanation: "O Art. 9º lista as competências exclusivas. O inciso V inclui a posse, renúncia e cassação do Prefeito/Vice. O inciso VI inclui a licença para afastamento do Prefeito, Vice-Prefeito e Vereadores.</p> Dica: As funções de rito solene/político (posse, renúncia, cassação) e de autorização de afastamento são privativas da Casa Legislativa."
    },
    {
      text: "<h3> QUESTÃO 24</p> É uma competência *exclusiva* da Câmara Municipal, segundo a Lei Orgânica: </h3>   ",
      options: ["Fixar o subsídio dos Vereadores e deliberar sobre o Plano Plurianual.", "Fixar o subsídio do Prefeito, Vice-Prefeito e Secretários Municipais e sustar os atos administrativos do Poder Executivo que exorbitarem do poder regulamentar.", "Elaborar o orçamento anual e autorizar a alienação de bens imóveis.", "Sustar os atos administrativos do Poder Executivo que exorbitarem dos limites da delegação legislativa, e aprovar o Plano Diretor."],
      correct: 1,
      explanation: "O Art. 9º, VIII, trata da fixação do subsídio das autoridades do Executivo. O inciso IX trata da sustação de atos administrativos que exorbitem do poder regulamentar ou dos limites da delegação legislativa.</p> Dica: O Legislativo controla o Executivo (sustação de atos) e define a remuneração das autoridades (subsídio) como competências que não dependem do aval do Prefeito (exclusivas)."
    },
    {
      text: "<h3> QUESTÃO 25</p> Sobre a fiscalização e controle do Poder Executivo, compete *exclusivamente* à Câmara Municipal: </h3>   ",
      options: ["Julgar, anualmente, as contas prestadas pelo Prefeito e proceder à tomada de contas se não apresentadas.", "Fiscalizar e controlar *apenas* os atos do Poder Executivo, sendo a administração indireta de controle do Tribunal de Contas.", "Julgar as contas do Prefeito a cada quatro anos, em sessão solene.", "Proceder à tomada de contas do Prefeito apenas mediante autorização do Tribunal de Contas do Estado."],
      correct: 0,
      explanation: "O Art. 9º, X, trata do julgamento anual das contas do Prefeito. O inciso XI trata da tomada de contas do Prefeito por inércia. O inciso XII trata da fiscalização e controle direto dos atos do Executivo e da administração indireta.</p> Dica: A Fiscalização Financeira (julgar e tomar contas) e o Controle Político (fiscalizar atos) do Executivo são a essência da função exclusiva do Legislativo."
    },
    {
      text: "<h3> QUESTÃO 26</p> A respeito da convocação de Secretários Municipais pela Câmara: </h3>   ",
      options: ["A Câmara Municipal ou suas Comissões podem convocar Secretários para prestarem informações, e a ausência sem justificativa implica em crime de responsabilidade.", "A convocação só pode ser feita pelo Plenário, mediante aprovação de dois terços dos membros.", "Os Secretários podem comparecer por iniciativa própria, mas sem prévio entendimento com a Mesa Diretora.", "A ausência do Secretário convocado sem justificação resulta apenas em multa administrativa."],
      correct: 0,
      explanation: "O Art. 10 autoriza a convocação (Câmara ou Comissões). O § 1º estabelece que a ausência injustificada é crime de responsabilidade. O § 2º permite o comparecimento por iniciativa própria, com prévio entendimento.</p> Dica: A convocação de Secretários é um instrumento de Controle Político. A ausência injustificada tem a penalidade máxima (Crime de Responsabilidade)."
    },
    {
      text: "<h3> QUESTÃO 27</p> Qual é o prazo estabelecido na Lei Orgânica para que o Prefeito e os Secretários prestem as informações e encaminhem os documentos solicitados por escrito pela Câmara, e qual a penalidade por descumprimento? </h3>   ",
      options: ["O prazo é de quinze dias, e a recusa no atendimento implica em infração administrativa.", "O prazo é de trinta dias, e a recusa, o não atendimento ou a prestação de informações falsas implicam em infração político-administrativa do Prefeito.", "O prazo é de dez dias, e o descumprimento implica em crime de responsabilidade do Secretário.", "O prazo é de sessenta dias, e a Câmara pode instaurar Comissão Processante apenas com autorização judicial."],
      correct: 1,
      explanation: "O Art. 11 fixa o prazo de trinta dias e define a recusa, o não atendimento ou a prestação de informações falsas como infração político-administrativa do Prefeito. O Parágrafo Único permite a instauração de Comissão Processante.</p> Dica: Lembre-se do prazo de 30 dias para responder a requerimentos e da grave penalidade: infração político-administrativa (que pode levar à cassação do mandato)."
    },
    {
      text: "<h3> QUESTÃO 28</p> O Vereador que não tomar posse na sessão solene de instalação deverá fazê-lo no prazo de: </h3>   ",
      options: ["Cinco dias.", "Dez dias.", "Quinze dias.", "Trinta dias."],
      correct: 2,
      explanation: "Conforme o Art. 12, § 1º, o Vereador deve tomar posse no prazo de quinze dias após a sessão solene, salvo motivo justificado aceito pela Câmara.</p> Dica: O prazo de 15 dias é o padrão para a posse posterior."
    },
    {
      text: "<h3> QUESTÃO 29</p> No ato da posse e ao término do mandato, o Vereador deverá: </h3>   ",
      options: ["Apenas desincompatibilizar-se.", "Apresentar sua declaração de bens, que será transcrita em livro próprio, resumida em ata e publicada no Diário Oficial.", "Apresentar sua declaração de bens ao Tribunal de Contas, anualmente.", "Prestar contas dos seus subsídios à Mesa Diretora, anualmente."],
      correct: 1,
      explanation: "O Art. 12, §§ 2º e 3º, exigem que o Vereador apresente sua declaração de bens (posse e término), que deve ser transcrita em livro próprio, resumida em ata e publicada no Diário Oficial.</p> Dica: O Vereador deve dar publicidade à sua declaração de bens na Casa Legislativa."
    },
    {
      text: "<h3> QUESTÃO 30</p> A Lei Orgânica de Caxias-MA estabelece que os Vereadores serão ressarcidos: </h3>   ",
      options: ["Pelo Prefeito, mediante decreto.", "Por verbas de representação.", "Apenas de despesas de viagem.", "De despesas de viagem, mediante comprovação e nos termos da lei."],
      correct: 3,
      explanation: "O Art. 12, § 4º, estabelece o ressarcimento de despesas de viagem, desde que comprovadas e nos termos da lei.</p> Dica: O ressarcimento não é um subsídio e deve ter previsão em lei e comprovação (documentos)."
    },
    {
      text: "<h3> QUESTÃO 31</p> Conforme o Art. 13 da Lei Orgânica, o Vereador poderá licenciar-se, exceto para: </h3>   ",
      options: ["Moléstia devidamente comprovada.", "Exercer cargo de Secretário Estadual.", "Tratar de interesses particulares, desde que o afastamento não seja inferior a 30 dias.", "Licença gestante."],
      correct: 1,
      explanation: "O Art. 13, I a IV, lista as hipóteses: moléstia (I), licença gestante (II), missões temporárias (III) e interesses particulares (IV).</p> Dica: O rol de licenças é taxativo, e licença para assumir cargo estadual não está prevista, mas sim a posse em cargo de Secretário Municipal (Art. 17)."
    },
    {
      text: "<h3> QUESTÃO 32</p> A respeito da licença para tratar de interesses particulares e sua remuneração, é correto afirmar: </h3>   ",
      options: ["O prazo não pode ser inferior a sessenta dias, e a licença será remunerada.", "O prazo não pode ser superior a noventa dias, e a licença por moléstia não é remunerada.", "O prazo não pode ser inferior a trinta dias, e a licença para interesses particulares NÃO é remunerada, mas as licenças por moléstia, licença gestante e missões temporárias são remuneradas.", "O prazo é de no máximo sessenta dias, e todas as licenças são sempre remuneradas."],
      correct: 2,
      explanation: "O Art. 13, IV, estabelece que a licença para tratar de interesses particulares não pode ser inferior a trinta dias. O Parágrafo Único indica que só as licenças dos incisos I (moléstia), II (gestante) e III (missões temporárias) são consideradas como exercício para fins de remuneração.</p> Dica: Licença para interesses particulares é o único caso de licença sem remuneração e exige um prazo mínimo de 30 dias."
    },
    {
      text: "<h3> QUESTÃO 33</p> Sobre as imunidades do Vereador no Município de Caxias, é INCORRETO afirmar: </h3>   ",
      options: ["Os Vereadores são invioláveis por suas opiniões, palavras e votos no exercício do mandato e na circunscrição do Município.", "O foro por prerrogativa de função para os Vereadores é o Tribunal de Justiça do Estado do Maranhão.", "Desde a expedição do diploma, os Vereadores não poderão ser presos, salvo em flagrante de crime inafiançável.", "Nos casos de prisão em flagrante de crime inafiançável, o fato deverá ser comunicado ao Juiz no prazo de vinte e quatro horas."],
      correct: 3,
      explanation: "O Art. 14, III, estabelece que, nos casos de prisão em flagrante de crime inafiançável, o fato será comunicado à Câmara Municipal (além do Juiz competente), para deliberação, o que torna a alternativa D incorreta por omissão da Câmara.</p> Dica: Lembre-se que o Vereador tem imunidades (inviolabilidade e prisão), mas a Câmara deve ser comunicada em caso de prisão em flagrante de inafiançável."
    },
    {
      text: "<h3> QUESTÃO 34</p> A perda do mandato de Vereador será declarada pela Mesa Diretora em caso de: </h3>   ",
      options: ["Quebra de decoro parlamentar.", "Descumprimento de um terço do comparecimento às reuniões ordinárias da Câmara.", "Condenação criminal transitada em julgado.", "Utilização de cargo ou função para a prática de ato de improbidade."],
      correct: 1,
      explanation: "O Art. 15, V, estabelece que a Mesa Diretora apenas declara a perda quando há falta de comparecimento a um terço das reuniões ordinárias ou inobservância da posse (casos de ausência). Nos demais casos (incisos I, II, VI - proibição, decoro, condenação), a perda é decidida pela Câmara."
    },
    {
      text: "<h3> QUESTÃO 35</p> Qual o quórum e o tipo de voto exigidos para a cassação do mandato do Vereador, nos casos de quebra de decoro ou utilização do mandato para fins ilícitos? </h3>   ",
      options: ["Maioria simples dos Vereadores e voto secreto.", "Dois terços dos membros da Câmara e voto aberto (nominal).", "Maioria absoluta dos membros da Câmara e voto secreto.", "Dois terços dos membros da Câmara e voto secreto."],
      correct: 1,
      explanation: "O Art. 15, § 1º e § 2º, estabelecem que os casos previstos nos incisos I, II e VI (incluindo quebra de decoro) exigem o quorum qualificado de dois terços e o voto nominal (aberto) da Câmara."
    },
    {
      text: "<h3> QUESTÃO 36</p> NÃO perderá o mandato o Vereador que: </h3>   ",
      options: ["For investido no cargo de Secretário Municipal ou licenciado pela Câmara para tratar de interesse particular por cento e cinquenta dias.", "For investido no cargo de Secretário Municipal ou licenciado pela Câmara por motivo de doença.", "Deixar de comparecer a um terço das reuniões ordinárias, por motivo de licença gestante.", "For investido em função executiva em órgão público municipal e não optar pela remuneração do mandato."],
      correct: 1,
      explanation: "O Art. 17, I, protege o Vereador investido no cargo de Secretário Municipal ou exercente de função executiva em órgão público municipal. O inciso II protege nas licenças por doença ou gestante.</p> Dica: O mandato se suspende (não há perda) nesses casos. A ausência (V) por motivo justificado (doença, gestante) também não gera perda (Art. 15, § 5º)."
    },
    {
      text: "<h3> QUESTÃO 37</p> O suplente de Vereador será convocado nos casos de: </h3>   ",
      options: ["Vaga, investidura no cargo de Secretário Municipal ou licença superior a cento e vinte dias.", "Vaga ou investidura no cargo de Prefeito.", "Apenas em caso de vaga definitiva.", "Licença para tratar de interesses particulares por até trinta dias."],
      correct: 0,
      explanation: "O Art. 18, *caput*, determina a convocação do suplente nos casos de vaga, investidura no cargo de Secretário Municipal ou licença por prazo superior a 120 (cento e vinte) dias.</p> Dica: O prazo de 120 dias é o limite para a licença sem convocação de suplente."
    },
    {
      text: "<h3> QUESTÃO 38</p> O que acontece se a vaga de Vereador ocorrer vacância a menos de quinze meses para o término do mandato? </h3>   ",
      options: ["O Prefeito convoca nova eleição.", "A Câmara nomeia um cidadão para preencher a vaga.", "A vaga não será preenchida, pois o suplente não será convocado.", "O Presidente da Câmara assume o mandato, cumulativamente."],
      correct: 2,
      explanation: "O Art. 18, § 1º, estabelece que, se a vaga ocorrer faltando menos de quinze meses para o término do mandato, o suplente não será convocado. Dessa forma, a vaga permanecerá aberta."
    },
    {
      text: "<h3> QUESTÃO 39</p> A Câmara Municipal reunir-se-á, anualmente, em sessões legislativas ordinárias, no período compreendido entre: </h3>   ",
      options: ["15 de fevereiro a 30 de junho e 1º de agosto a 15 de dezembro.", "1º de fevereiro a 30 de junho e 1º de agosto a 15 de dezembro.", "1º de fevereiro a 17 de julho e 1º de agosto a 15 de dezembro.", "15 de fevereiro a 17 de julho e 1º de agosto a 15 de dezembro."],
      correct: 0,
      explanation: "O Art. 21, *caput*, define o período: 15 de fevereiro a 30 de junho (1º período) e 1º de agosto a 15 de dezembro (2º período).</p> Dica: As datas de 15/02 e 30/06 e de 01/08 e 15/12 devem ser memorizadas."
    },
    {
      text: "<h3> QUESTÃO 40</p> Qual é o quórum mínimo para a Câmara Municipal realizar suas sessões, exceto as solenes? </h3>   ",
      options: ["Um terço dos membros.", "Maioria absoluta dos membros.", "Dois terços dos membros.", "Maioria simples dos membros."],
      correct: 1,
      explanation: "O Art. 24, § 5º, exige a presença da maioria absoluta dos membros para que as sessões sejam abertas, exceto as solenes.</p> Dica: O quórum de abertura (maioria absoluta) é maior que o de votação (maioria simples)."
    },
    {
      text: "<h3> QUESTÃO 41</p> A eleição da Mesa Diretora da Câmara Municipal ocorrerá: </h3>   ",
      options: ["Apenas no último ano de cada legislatura, em 15 de dezembro.", "Em 1º de janeiro de cada legislatura, para mandato de dois anos, permitida a reeleição para o mesmo cargo na eleição imediatamente subsequente.", "No último dia útil do ano anterior, sendo vedada a reeleição para o mesmo cargo na eleição imediatamente subsequente.", "Em 1º de janeiro de cada legislatura, para mandato de um ano, sendo permitida a reeleição para o mesmo cargo."],
      correct: 1,
      explanation: "O Art. 22, § 1º, estabelece a eleição em 1º de janeiro de cada legislatura, para mandato de dois anos, e permite a reeleição para o mesmo cargo na eleição imediatamente subsequente.</p> Dica: Mandato de 2 anos e Permissão de Reeleição."
    },
    {
      text: "<h3> QUESTÃO 42</p> Em relação à publicidade das sessões, é correto afirmar: </h3>   ",
      options: ["As sessões serão sempre secretas, independentemente da matéria.", "As sessões serão públicas, salvo deliberação em contrário da maioria simples dos Vereadores.", "As sessões serão públicas, salvo deliberação em contrário de dois terços dos membros da Câmara, e somente serão abertas com a presença da maioria absoluta.", "As sessões serão secretas, e somente serão abertas com a presença de dois terços dos membros."],
      correct: 2,
      explanation: "O Art. 24, § 4º, estabelece a publicidade (regra), com ressalva de deliberação contrária por dois terços (exceção). O § 5º exige a presença da maioria absoluta (quórum de abertura), exceto as solenes.</p> Dica: A publicidade e o quórum qualificado (maioria absoluta) são regras essenciais da democracia e da LOM."
    },
    {
      text: "<h3> QUESTÃO 43</p> A convocação extraordinária da Câmara, *no recesso*, far-se-á: </h3>   ",
      options: ["Pelo Presidente da Câmara, quando necessário, ou pela maioria simples de seus membros.", "Pelo Prefeito, por três quintos dos Vereadores ou a pedido de um terço dos eleitores.", "Pelo Prefeito ou pela maioria dos membros da Câmara.", "Apenas pelo Presidente da Câmara, em casos de calamidade pública."],
      correct: 2,
      explanation: "O Art. 25 estabelece as hipóteses de convocação extraordinária no recesso: Prefeito (I) ou pela maioria dos membros da Câmara (II).</p> Dica: A convocação extraordinária é feita pelo chefe do Executivo ou pela maioria do Legislativo."
    },
    {
      text: "<h3> QUESTÃO 44</p> As deliberações da Câmara serão tomadas por maioria de votos, presente a maioria absoluta de seus membros, salvo: </h3>   ",
      options: ["Matérias relativas a títulos honoríficos.", "Leis Ordinárias.", "Casos previstos na Lei Orgânica ou no Regimento Interno, que exigem quórum qualificado.", "Votação do Plano Diretor."],
      correct: 2,
      explanation: "O Art. 29 estabelece a regra da maioria de votos (maioria simples) com presença da maioria absoluta (quórum de abertura), salvo disposição em contrário (quórum qualificado) na Lei Orgânica ou Regimento Interno.</p> Dica: A regra é a maioria simples; a exceção (ex: Emenda à LOM, Veto) é o quórum qualificado."
    }
  ],
  lei_organica_parte_3: [
    {
      text: "<h3> QUESTÃO 45</p> Na instalação da primeira sessão de cada legislatura, os Vereadores eleitos prestarão o compromisso de: </h3>   ",
      options: ["Cumprir a Constituição Federal, a Constituição Estadual e a Lei Orgânica, e exercer o mandato em benefício do Município.", "Apenas cumprir a Constituição Federal.", "Cumprir as leis federais e estaduais, e as determinações do Prefeito.", "Cumprir a Constituição Federal e o Regimento Interno da Câmara."],
      correct: 0,
      explanation: "O Art. 12, *caput*, estabelece o compromisso: Constituição Federal, Constituição Estadual, Lei Orgânica e bem do Município.</p> Dica: O compromisso abrange a hierarquia das leis e o fim público."
    },
    {
      text: "<h3> QUESTÃO 46</p> A Lei Orgânica do Município de Caxias-MA é considerada uma: </h3>   ",
      options: ["Lei Ordinária, com rito de aprovação simples.", "Lei Complementar, aprovada por maioria absoluta.", "Lei Fundamental do Município, com rito de emenda mais rigoroso.", "Lei Delegada, de iniciativa do Prefeito."],
      correct: 2,
      explanation: "A Lei Orgânica é a Lei Fundamental do Município, com processo de alteração (Emenda) mais rigoroso (Quórum de 2/3, 2 turnos, 10 dias de interstício - Art. 31)."
    },
    {
      text: "<h3> QUESTÃO 47</p> O projeto de emenda à Lei Orgânica será votado em dois turnos, com interstício mínimo de: </h3>   ",
      options: ["Cinco dias.", "Dez dias.", "Quinze dias.", "Vinte dias."],
      correct: 1,
      explanation: "O Art. 31, § 1º, exige o interstício mínimo de dez dias entre os dois turnos de votação da Emenda à Lei Orgânica.</p> Dica: O prazo de 10 dias é a carência para a reflexão sobre a alteração da lei fundamental."
    },
    {
      text: "<h3> QUESTÃO 48</p> Qual é o quórum exigido para a aprovação de uma Emenda à Lei Orgânica, em cada um dos dois turnos? </h3>   ",
      options: ["Maioria absoluta dos membros da Câmara.", "Maioria simples dos membros da Câmara.", "Três quintos dos membros da Câmara.", "Dois terços dos membros da Câmara."],
      correct: 3,
      explanation: "O Art. 31, § 1º, exige o voto favorável de dois terços dos membros da Câmara em ambos os turnos.</p> Dica: O quórum de 2/3 (o mais alto) é o padrão para emendas constitucionais ou à Lei Orgânica."
    },
    {
      text: "<h3> QUESTÃO 49</p> Quem tem a iniciativa para propor Emendas à Lei Orgânica, conforme o Art. 31? </h3>   ",
      options: ["Apenas o Prefeito Municipal.", "Apenas a Mesa Diretora da Câmara.", "O Prefeito Municipal ou um terço, no mínimo, dos Vereadores.", "Cinco por cento do eleitorado municipal, mediante projeto de lei."],
      correct: 2,
      explanation: "O Art. 31, I e II, estabelece a iniciativa: Prefeito Municipal (I) ou um terço dos Vereadores (II).</p> Dica: A iniciativa de emenda é uma prerrogativa do Executivo ou de um número qualificado de Vereadores (1/3)."
    },
    {
      text: "<h3> QUESTÃO 50</p> Qual o quórum exigido para a aprovação do Regimento Interno da Câmara Municipal? </h3>   ",
      options: ["Maioria simples dos membros da Câmara.", "Dois terços dos membros da Câmara.", "Maioria absoluta dos membros da Câmara.", "Um terço dos membros da Câmara."],
      correct: 2,
      explanation: "O Art. 30 estabelece que o Regimento Interno e as Leis de Organização Municipal (como o Plano Diretor) exigem voto favorável da maioria absoluta dos membros da Câmara.</p> Dica: O Regimento Interno (a Lei da Casa) exige o quórum qualificado de maioria absoluta."
    },
    {
      text: "<h3> QUESTÃO 51</p> A proposta de emenda à Lei Orgânica será discutida e votada, quanto à sua iniciativa e aprovação, da seguinte forma: </h3>   ",
      options: ["De iniciativa da Mesa Diretora ou de dois terços dos membros da Câmara e aprovação em turno único por maioria absoluta.", "Do Prefeito ou de um terço, no mínimo, dos membros da Câmara, e será votada em dois turnos com interstício mínimo de dez dias entre eles, exigindo em ambos o voto favorável de dois terços dos membros.", "Apenas do Prefeito, e aprovada por maioria simples.", "Metade mais um dos membros da Câmara, em turno único."],
      correct: 1,
      explanation: "A iniciativa é do Prefeito (I) ou de um terço dos Vereadores (II). O § 1º exige votação em dois turnos, com interstício mínimo de dez dias e aprovação por dois terços em ambos.</p> Dica: O processo de emenda à Lei Orgânica é o mais rigoroso (Quorum Qualificado 2/3, 2 Turnos, Interstício de 10 dias)."
    },
    {
      text: "<h3> QUESTÃO 52</p> A matéria constante de proposta de emenda à Lei Orgânica rejeitada, ou havida por prejudicada, poderá ser objeto de nova proposta na mesma Sessão Legislativa por: </h3>   ",
      options: ["Votação da maioria absoluta da Câmara.", "Proposta de um terço dos membros da Câmara.", "Iniciativa de qualquer Vereador.", "Somente na Sessão Legislativa seguinte."],
      correct: 3,
      explanation: "O Art. 31, § 3º, proíbe a repetição da matéria rejeitada na mesma Sessão Legislativa. A única exceção não se aplica às Emendas à LOM. A LOM silencia sobre a repetição de Emendas à LOM, aplicando-se a regra geral do Art. 42 da LOM: só poderá constituir objeto de novo projeto na Sessão Legislativa seguinte."
    },
    {
      text: "<h3> QUESTÃO 53</p> Para a aprovação das Leis Complementares, é exigido o voto favorável de: </h3>   ",
      options: ["Dois terços dos membros da Câmara.", "Maioria simples dos membros da Câmara.", "Maioria absoluta dos membros da Câmara.", "Três quintos dos membros da Câmara."],
      correct: 2,
      explanation: "O Art. 32 exige o voto favorável da maioria absoluta dos membros da Câmara.</p> Dica: As Leis Complementares (Plano Diretor, Regimento Interno) exigem Maioria Absoluta."
    },
    {
      text: "<h3> QUESTÃO 54</p> Para sua aprovação, as leis ordinárias exigem o voto favorável de: </h3>   ",
      options: ["Dois terços dos membros da Câmara.", "Maioria absoluta dos membros da Câmara.", "Maioria simples dos membros da Câmara.", "Metade dos membros da Câmara."],
      correct: 2,
      explanation: "O Art. 33 exige o voto favorável da maioria simples dos membros da Câmara.</p> Dica: A Lei Ordinária é a regra e exige o quórum mais fácil: Maioria Simples (maioria dos presentes, observada a presença da maioria absoluta)."
    },
    {
      text: "<h3> QUESTÃO 55</p> Quem propõe as leis delegadas à Câmara e qual matéria NÃO pode ser objeto de delegação? </h3>   ",
      options: ["O Prefeito propõe as leis delegadas à Câmara, e não são objeto de delegação a matéria reservada à lei complementar.", "Qualquer Vereador pode propor, e não são objeto de delegação os atos de competência exclusiva da Câmara.", "Apenas a Mesa da Câmara pode propor, e a legislação sobre orçamento pode ser objeto de delegação.", "O Prefeito propõe, e apenas a criação de Secretarias não pode ser objeto de delegação."],
      correct: 0,
      explanation: "O Art. 34 estabelece que as leis delegadas serão propostas pelo Prefeito. O § 1º exclui de delegação as matérias reservadas à Lei Complementar e as de competência exclusiva da Câmara.</p> Dica: A Lei Delegada é uma transferência de poder de legislar do Legislativo para o Executivo (Prefeito), mas não pode abranger matérias essenciais (Complementar/Exclusiva da Câmara)."
    },
    {
      text: "<h3> QUESTÃO 56</p> O referendo municipal é convocado pela Câmara para deliberar sobre: </h3>   ",
      options: ["Consulta prévia ao eleitorado sobre matéria de interesse específico.", "Ato normativo já aprovado pelo Executivo.", "Ato normativo em tramitação na Câmara.", "Decisão judicial proferida pelo Tribunal Regional Eleitoral, mediante proposta de um terço dos eleitores."],
      correct: 1,
      explanation: "O Art. 35 estabelece que o referendo é convocado pela Câmara, mediante decreto legislativo, para deliberar sobre ato normativo já aprovado (promulgado) pelo Poder Executivo.</p> Dica: O Referendo ocorre depois da aprovação do ato, e a Iniciativa Popular ocorre antes."
    },
    {
      text: "<h3> QUESTÃO 57</p> A iniciativa das leis complementares e ordinárias cabe: </h3>   ",
      options: ["Apenas ao Prefeito Municipal.", "Ao Prefeito, a qualquer membro ou Comissão da Câmara, e aos cidadãos.", "Aos Secretários Municipais e ao Vice-Prefeito.", "Exclusivamente à Câmara Municipal."],
      correct: 1,
      explanation: "O Art. 36 atribui a iniciativa ao Prefeito, a qualquer membro ou Comissão da Câmara, e aos cidadãos (iniciativa popular).</p> Dica: A iniciativa legislativa é concorrente (Executivo, Legislativo) e popular (Cidadãos)."
    },
    {
      text: "<h3> QUESTÃO 58</p> Compete *privativamente* ao Prefeito a iniciativa de projetos de lei que disponham sobre: </h3>   ",
      options: ["Criação de Conselhos Municipais.", "Criação de cargos, funções ou empregos públicos na administração direta ou autárquica e aumento de sua remuneração.", "Regime jurídico dos servidores públicos municipais, quando se tratar da criação de Conselhos Municipais.", "Autorização para aquisição de bens imóveis."],
      correct: 1,
      explanation: "O Art. 37 lista as matérias de iniciativa privativa. O inciso I trata da criação de cargos na administração direta/autárquica e do aumento de remuneração (o que envolve o custo de Pessoal).</p> Dica: As matérias que geram custos ou envolvem a estrutura do Executivo são de iniciativa privativa do Prefeito."
    },
    {
      text: "<h3> QUESTÃO 59</p> NÃO é de iniciativa privativa do Prefeito o projeto de lei que disponha sobre: </h3>   ",
      options: ["Servidores públicos, seu regime jurídico e planos de carreira.", "Organização da administração municipal, criação, fusão ou extinção de Secretarias Municipais.", "Fixação e alteração do subsídio do Prefeito, Vice-Prefeito e Secretários Municipais.", "Matérias tributárias, orçamentárias e de planos de desenvolvimento."],
      correct: 2,
      explanation: "O Art. 37 lista as matérias privativas (I, II, III). A fixação do subsídio das autoridades do Executivo é de competência exclusiva da Câmara (Art. 9º, VIII), não sendo, portanto, de iniciativa privativa do Prefeito.</p> Dica: A Câmara fixa os subsídios; o Prefeito propõe a lei de pessoal e estrutura."
    },
    {
      text: "<h3> QUESTÃO 60</p> A iniciativa popular de projetos de lei será exercida pela apresentação à Câmara de: </h3>   ",
      options: ["Moção subscrita por dez por cento do eleitorado municipal.", "Petição subscrita por cinco por cento do eleitorado municipal.", "Projeto de lei subscrito por cinco por cento do eleitorado municipal.", "Voto de pesar subscrito por um por cento do eleitorado municipal."],
      correct: 2,
      explanation: "O Art. 38 estabelece que a iniciativa popular é exercida pela apresentação de projeto de lei subscrito por, no mínimo, cinco por cento (5%) do eleitorado municipal.</p> Dica: O percentual de 5% e o instrumento (projeto de lei) devem ser memorizados para a iniciativa popular em âmbito municipal."
    }
  ],
  lei_organica_parte_4: [
    {
      text: "<h3> QUESTÃO 61</p> O projeto de lei, aprovado pela Câmara, será enviado ao Prefeito Municipal que, concordando, o sancionará no prazo de: </h3>   ",
      options: ["Trinta dias úteis.", "Quinze dias úteis.", "Dez dias úteis.", "Quarenta e oito horas."],
      correct: 1,
      explanation: "O Art. 39, § 1º, estabelece o prazo de quinze dias úteis para a sanção (concordância) do Prefeito.</p> Dica: O prazo de 15 dias úteis é a regra para a sanção ou veto do Executivo (prazo constitucional)."
    },
    {
      text: "<h3> QUESTÃO 62</p> Decorrido o prazo de sanção, e havendo silêncio do Prefeito, a sanção tácita ocorrerá e caberá ao: </h3>   ",
      options: ["Presidente da Câmara promulgá-lo.", "Vereador mais votado promulgá-lo.", "Vice-Prefeito promulgá-lo.", "Tribunal de Contas do Estado promulgá-lo."],
      correct: 0,
      explanation: "O Art. 39, § 3º, estabelece que, se o Prefeito não se manifestar (silêncio), haverá sanção tácita, e o Presidente da Câmara o promulgará.</p> Dica: Na omissão do Prefeito, o Presidente da Câmara assume o dever de promulgar."
    },
    {
      text: "<h3> QUESTÃO 63</p> Caso o Prefeito Municipal discorde do projeto de lei aprovado pela Câmara, ele deverá: </h3>   ",
      options: ["Vetá-lo, total ou parcialmente, no prazo de quinze dias úteis, comunicando os motivos do veto à Câmara.", "Vetá-lo, apenas parcialmente, no prazo de trinta dias corridos, sem necessidade de comunicação expressa.", "Vetá-lo em sua totalidade, no prazo de cinco dias, comunicando o veto ao Tribunal de Contas.", "Ignorar o projeto, o que implica em sanção tácita."],
      correct: 0,
      explanation: "O Art. 40 estabelece que o Prefeito deve vetá-lo, total ou parcialmente, no prazo de quinze dias úteis, comunicando os motivos do veto à Câmara.</p> Dica: O Veto é a manifestação de discordância (jurídica ou política) e deve ser expresso e motivado (comunicação à Câmara)."
    },
    {
      text: "<h3> QUESTÃO 64</p> O veto será apreciado pela Câmara, em votação única, no prazo de: </h3>   ",
      options: ["Trinta dias a contar do seu recebimento.", "Sessenta dias a contar do seu recebimento.", "Trinta dias, a contar do seu recebimento, podendo ser rejeitado pelo voto da maioria absoluta dos Vereadores.", "Sessenta dias, a contar do seu recebimento, podendo ser rejeitado pelo voto de dois terços dos Vereadores."],
      correct: 2,
      explanation: "O Art. 41, *caput*, estabelece o prazo de trinta dias para apreciação. O Parágrafo Único exige o voto da maioria absoluta dos Vereadores para a rejeição do veto.</p> Dica: O prazo de 30 dias é o limite para a Câmara apreciar o Veto, e o quórum de Maioria Absoluta é a regra."
    },
    {
      text: "<h3> QUESTÃO 65</p> A matéria constante de projeto de lei rejeitado, salvo emenda à Lei Orgânica, somente poderá constituir objeto de novo projeto, na mesma Sessão Legislativa, por proposta da: </h3>   ",
      options: ["Maioria absoluta dos Vereadores.", "Maioria simples dos Vereadores.", "Mesa Diretora.", "Um terço dos Vereadores."],
      correct: 0,
      explanation: "O Art. 42 estabelece a proibição de repetição na mesma Sessão Legislativa, salvo se a proposta for subscrita pela maioria absoluta dos Vereadores.</p> Dica: A repetição de matéria rejeitada exige o quórum qualificado (maioria absoluta) como exceção."
    },
    {
      text: "<h3> QUESTÃO 66</p> A promulgação das leis, que é a declaração formal da sua existência e obrigatoriedade, cabe: </h3>   ",
      options: ["Exclusivamente ao Prefeito Municipal, como chefe do Poder Executivo.", "Ao Presidente da Câmara, apenas em caso de veto parcial do Prefeito.", "Ao Prefeito Municipal e, em caso de sanção tácita ou rejeição de veto, ao Presidente da Câmara.", "Ao Vice-Prefeito, em caso de ausência do Prefeito."],
      correct: 2,
      explanation: "O Art. 39, § 1º, atribui a promulgação ao Prefeito (sanção expressa). O Art. 39, § 3º e Art. 41, § 2º, estabelecem que, em caso de inação (sanção tácita) ou rejeição de veto, a promulgação pelo Presidente da Câmara é a exceção (omissão ou discordância do Executivo)."
    },
    {
      text: "<h3> QUESTÃO 67</p> A Lei Orgânica de Caxias-MA prevê o instituto do *plebiscito* para: </h3>   ",
      options: ["Consulta prévia ao eleitorado sobre matéria de interesse específico do Município, convocada pela Câmara ou pelo Prefeito, com aprovação por maioria absoluta do eleitorado.", "Consulta prévia ao eleitorado sobre ato normativo já aprovado, convocado pelo Prefeito.", "Deliberar sobre ato normativo aprovado, convocado pela Câmara.", "Discussão de projeto de lei subscrito por cinco por cento do eleitorado."],
      correct: 0,
      explanation: "O Art. 45 estabelece o plebiscito como consulta prévia ao eleitorado, sobre matéria de interesse específico, convocado pela Câmara (Decreto Legislativo) ou pelo Prefeito (Decreto), com aprovação da maioria absoluta.</p> Dica: Plebiscito = Prévio (consulta antes da lei); Referendo = Posterior (consulta depois da lei)."
    },
    {
      text: "<h3> QUESTÃO 68</p> A respeito do referendo, é INCORRETO afirmar: </h3>   ",
      options: ["É convocado pela Câmara Municipal, mediante decreto legislativo.", "É convocado pelo Prefeito Municipal, em caso de interesse público urgente e relevante.", "É convocado para deliberar sobre ato normativo aprovado pelo Poder Executivo.", "A convocação depende de aprovação pela maioria absoluta da Câmara."],
      correct: 1,
      explanation: "O Art. 46 estabelece o referendo como convocação pela Câmara, mediante Decreto Legislativo (e não pelo Prefeito).</p> Dica: O Plebiscito pode ser convocado pelo Prefeito ou Câmara. O Referendo é privativo da Câmara."
    },
    {
      text: "<h3> QUESTÃO 69</p> O Decreto Legislativo é a norma que se destina a regular matérias de competência exclusiva da Câmara, como: </h3>   ",
      options: ["Julgamento das contas do Prefeito e sustação de atos do Executivo.", "Lei Ordinária, que dispõe sobre matérias de interesse geral (Ex: julgar contas).", "Lei ordinária de iniciativa do Prefeito.", "Lei complementar de iniciativa da Câmara Municipal."],
      correct: 0,
      explanation: "O Art. 47 define que o Decreto Legislativo se destina a regular matérias de competência exclusiva da Câmara (ex: julgar contas do Prefeito, sustar atos do Executivo)."
    },
    {
      text: "<h3> QUESTÃO 70</p> Para aprovação de leis que disponham sobre o Plano Diretor, Código de Obras ou que criem e regulem Conselhos Municipais, é exigido o voto favorável de: </h3>   ",
      options: ["Maioria simples dos membros da Câmara.", "Maioria absoluta dos membros da Câmara.", "Dois terços dos membros da Câmara.", "Três quintos dos membros da Câmara."],
      correct: 1,
      explanation: "O Art. 48 exige o quórum de maioria absoluta dos membros da Câmara para aprovação de leis que dispõem sobre o Plano Diretor, Código de Obras ou que criem e regulem Conselhos Municipais.</p> Dica: As leis de organização urbana e institucional (Plano Diretor, Código de Obras) exigem Maioria Absoluta (Lei Complementar)."
    },
    {
      text: "<h3> QUESTÃO 71</p> As leis do Município entram em vigor na data de sua publicação, salvo quando: </h3>   ",
      options: ["A lei dispuser de outra forma.", "A lei for de iniciativa popular.", "A lei for aprovada por maioria absoluta.", "A lei for vetada pelo Prefeito."],
      correct: 0,
      explanation: "O Art. 50 estabelece a regra de vigência (data da publicação), salvo quando a própria lei dispuser de outra forma.</p> Dica: A vigência é a regra; a vacatio legis é a exceção (prevista na própria lei)."
    },
    {
      text: "<h3> QUESTÃO 72</p> Os atos e as leis do Município deverão ser publicados no: </h3>   ",
      options: ["Diário Oficial da União.", "Diário Oficial do Estado do Maranhão.", "Quadro de Avisos da Câmara Municipal.", "Órgão oficial do Município ou, não havendo, em órgão de circulação local."],
      correct: 3,
      explanation: "O Art. 51 exige a publicação em órgão oficial do Município ou, na sua falta, em órgão de circulação local e, caso não haja este, no Quadro de Avisos.</p> Dica: A publicidade (órgão oficial/circulação local) é essencial para a eficácia dos atos."
    }
  ],
  lei_organica_parte_5: [
    {
      text: "<h3> QUESTÃO 73</p> A fiscalização contábil, financeira, orçamentária, operacional e patrimonial do Município e da administração direta e indireta será exercida mediante: </h3>   ",
      options: ["Controle externo, a cargo da Câmara Municipal, com auxílio do Tribunal de Contas do Estado.", "Apenas controle interno do Poder Executivo.", "Apenas controle do Tribunal de Contas do Estado.", "Controle externo, a cargo do Ministério Público."],
      correct: 0,
      explanation: "O Art. 93 define que a fiscalização será exercida mediante controle externo a cargo da Câmara Municipal, com auxílio do Tribunal de Contas do Estado.</p> Dica: A Câmara faz o controle político/externo, o TCE dá o suporte técnico."
    },
    {
      text: "<h3> QUESTÃO 74</p> O Município poderá instituir contribuições para custeio de sistema previdenciário e de assistência social próprio: </h3>   ",
      options: ["Apenas se houver autorização do Tribunal de Contas do Estado.", "Nos termos da legislação complementar específica.", "Desde que a contribuição não exceda 10% da remuneração.", "Apenas para o custeio da assistência social."],
      correct: 1,
      explanation: "O Parágrafo Único do Art. 98 permite contribuições para custeio de sistema previdenciário e de assistência social próprio, nos termos da legislação complementar específica.</p> Dica: O Regime Próprio de Previdência (RPPS) depende de Lei Complementar específica."
    },
    {
      text: "<h3> QUESTÃO 75</p> A competência tributária do Município será exercida com rigorosa observância do que a respeito dispõe a Constituição Federal, em seus artigos: </h3>   ",
      options: ["Artigos 150 e 156.", "Artigos 153 e 155.", "Artigos 150 a 152.", "Artigos 156 e 157."],
      correct: 0,
      explanation: "O Art. 99 faz referência expressa aos artigos 150 e 156 da Constituição Federal. O Art. 150 trata das limitações ao poder de tributar (imunidades) e o Art. 156 trata dos impostos de competência municipal.</p> Dica: 150 (Imunidades) e 156 (Impostos Municipais)."
    },
    {
      text: "<h3> QUESTÃO 76</p> A respeito do orçamento municipal, é correto afirmar: </h3>   ",
      options: ["Apenas o Plano Plurianual (PPA) exige lei, sendo a Lei de Diretrizes Orçamentárias (LDO) e a Lei Orçamentária Anual (LOA) regulamentadas por decreto.", "O orçamento municipal deve ser único, anual e deve abranger todas as receitas e despesas, sendo vedada a inclusão de receitas e despesas extraorçamentárias.", "As leis orçamentárias (PPA, LDO, LOA) devem ser de iniciativa privativa do Prefeito e devem ter o voto favorável de dois terços dos Vereadores para sua aprovação.", "O orçamento municipal é regido pelo princípio da unidade, anualidade e universalidade, sendo vedada a inclusão de receitas e despesas extraorçamentárias (princípio da exclusividade)."],
      correct: 3,
      explanation: "O Art. 100 define o orçamento regido pelos princípios da unidade, anualidade e universalidade. O Art. 104 define a exclusividade (vedação de dispositivo estranho à previsão da receita e fixação da despesa, salvo exceções).</p> Dica: O Trio de Princípios (Unidade, Anualidade, Universalidade) e a Exclusividade."
    },
    {
      text: "<h3> QUESTÃO 77</p> O Plano Plurianual (PPA) é a lei que estabelece: </h3>   ",
      options: ["Apenas as prioridades e metas da administração para o ano seguinte.", "A estimativa da receita e despesa do Município.", "As diretrizes, objetivos e metas de administração para o período de quatro anos.", "Apenas as despesas de capital para o exercício."],
      correct: 2,
      explanation: "O Plano Plurianual (PPA) estabelece as diretrizes, objetivos e metas de administração para o período de quatro anos.</p> Dica: PPA = Plano Plurianual = Duração de 4 anos (início no 2º ano do mandato, fim no 1º ano seguinte)."
    },
    {
      text: "<h3> QUESTÃO 78</p> A Lei Orçamentária Anual (LOA) compreenderá: </h3>   ",
      options: ["Apenas o orçamento fiscal e o orçamento da seguridade social.", "O orçamento fiscal, o orçamento de investimento das empresas e o orçamento da seguridade social.", "Apenas o orçamento fiscal e o orçamento de investimento.", "Apenas o orçamento de investimento das empresas em que o Município detenha maioria do capital social com direito a voto."],
      correct: 1,
      explanation: "O Art. 103 lista os três orçamentos: fiscal (I), de investimento (II) e da seguridade social (III).</p> Dica: Lembre-se do Trio Orçamentário: Fiscal, Seguridade Social e Investimento (empresas estatais)."
    },
    {
      text: "<h3> QUESTÃO 79</p> De acordo com o princípio da exclusividade, a Lei Orçamentária Anual (LOA) não conterá dispositivo estranho à previsão da receita e à fixação da despesa, com exceção da autorização para: </h3>   ",
      options: ["Abertura de crédito suplementar e contratação de operações de crédito, inclusive por antecipação de receita.", "Criação de Conselhos Municipais e alteração do Código Tributário.", "Concessão de auxílios e subvenções para entidades privadas.", "Aprovação do Plano Diretor."],
      correct: 0,
      explanation: "O Art. 104, § 1º, estabelece as únicas exceções: abertura de créditos suplementares e contratação de operações de crédito, inclusive por ARO (Antecipação de Receita Orçamentária).</p> Dica: As exceções são matérias financeiras ligadas à execução orçamentária."
    },
    {
      text: "<h3> QUESTÃO 80</p> As emendas individuais ao projeto de lei orçamentária serão aprovadas no limite de: </h3>   ",
      options: ["Um por cento (1%) da receita corrente líquida do exercício anterior.", "Meio por cento (0,5%) da receita corrente líquida do exercício anterior.", "Um por cento (1%) da receita tributária.", "Meio por cento (0,5%) da despesa total."],
      correct: 0,
      explanation: "O Art. 108 A, *caput*, estabelece o limite de um por cento (1%) da Receita Corrente Líquida do exercício anterior.</p> Dica: A emenda individual (impositiva) possui o limite de 1% da RCL."
    }
  ],
  lei_organica_parte_6: [
    {
      text: "<h3> QUESTÃO 81</p> A saúde, direito de todos e dever do Município, é assegurada mediante políticas sociais, econômicas e ambientais, visando: </h3>   ",
      options: ["Apenas o combate a doenças crônicas.", "A redução do risco de doenças e de outros agravos e ao acesso universal e igualitário às ações e serviços para sua promoção, proteção e recuperação.", "Apenas a recuperação dos doentes.", "A promoção da saúde, sendo o risco de doenças de competência estadual."],
      correct: 1,
      explanation: "O Art. 110 visa a redução do risco de doenças e o acesso universal e igualitário às ações e serviços de promoção, proteção e recuperação.</p> Dica: Os objetivos são o Tripé da Saúde (Promoção, Proteção, Recuperação) e a Redução de Risco."
    },
    {
      text: "<h3> QUESTÃO 82</p> O Município de Caxias deverá aplicar, anualmente, em ações e serviços públicos de saúde, o percentual mínimo de: </h3>   ",
      options: ["Quinze por cento (15%) da arrecadação dos impostos municipais.", "Dez por cento (10%) da arrecadação dos impostos municipais.", "Doze por cento (12%) da receita líquida de impostos.", "Dezesseis por cento (16%) da receita líquida de impostos."],
      correct: 0,
      explanation: "O Art. 114 estabelece o percentual mínimo de quinze por cento (15%) da arrecadação dos impostos e das transferências (CF, Art. 198, § 2º).</p> Dica: O percentual constitucional mínimo para o Município na Saúde é 15%."
    },
    {
      text: "<h3> QUESTÃO 83</p> A respeito do ensino municipal, o Município atuará prioritariamente no: </h3>   ",
      options: ["Ensino Superior.", "Ensino Médio e Técnico.", "Ensino Fundamental e Educação Infantil.", "Ensino de Jovens e Adultos (EJA)."],
      correct: 2,
      explanation: "O Art. 119, § 1º, estabelece que o Município atuará prioritariamente no Ensino Fundamental e na Educação Infantil.</p> Dica: A prioridade do Município é o básico (creches e ensino fundamental)."
    },
    {
      text: "<h3> QUESTÃO 84</p> O Município aplicará, anualmente, nunca menos de: </h3>   ",
      options: ["Quinze por cento (15%) da receita resultante de impostos, na manutenção e desenvolvimento do ensino.", "Vinte por cento (20%) da receita resultante de impostos, na manutenção e desenvolvimento do ensino.", "Vinte e cinco por cento (25%) da receita resultante de impostos, na manutenção e desenvolvimento do ensino.", "Trinta por cento (30%) da receita resultante de impostos, na manutenção e desenvolvimento do ensino."],
      correct: 2,
      explanation: "O Art. 121 exige a aplicação de, no mínimo, vinte e cinco por cento (25%) da receita resultante de impostos na manutenção e desenvolvimento do ensino (percentual constitucional).</p> Dica: O percentual constitucional mínimo para o Município na Educação é 25%."
    },
    {
      text: "<h3> QUESTÃO 85</p> Sobre o Plano Diretor Municipal, é INCORRETO afirmar: </h3>   ",
      options: ["É o instrumento básico da política de desenvolvimento e expansão urbana.", "Deverá ser aprovado por maioria absoluta dos Vereadores.", "Deverá ser revisado, pelo menos, a cada dez anos.", "É de iniciativa privativa do Prefeito Municipal."],
      correct: 2,
      explanation: "O Art. 125, § 1º, exige que o Plano Diretor seja revisado, pelo menos, a cada cinco anos. A alternativa C está incorreta.</p> Dica: O prazo de 5 anos é o da revisão do Plano Diretor."
    },
    {
      text: "<h3> QUESTÃO 86</p> A política de desenvolvimento urbano do Município deve ser orientada para: </h3>   ",
      options: ["Garantir a propriedade privada e a livre iniciativa, independentemente da função social da propriedade.", "Promover o pleno desenvolvimento das funções sociais da cidade e garantir o bem-estar de seus habitantes.", "Apenas garantir a função social da propriedade, sem considerar a livre iniciativa.", "Promover o desenvolvimento do turismo e do lazer, exclusivamente."],
      correct: 1,
      explanation: "O Art. 125, *caput*, estabelece a orientação para o pleno desenvolvimento das funções sociais da cidade e para o bem-estar de seus habitantes.</p> Dica: O foco da política urbana é o social e o bem-estar da população."
    },
    {
      text: "<h3> QUESTÃO 87</p> Sobre a propriedade urbana no Município, a Lei Orgânica estabelece que: </h3>   ",
      options: ["Não existe função social da propriedade no Município, apenas na União.", "A propriedade urbana cumpre sua função social quando atende às exigências fundamentais de ordenação da cidade expressas no Plano Diretor.", "A desapropriação é o único instrumento para garantir a função social.", "A função social é cumprida apenas com o pagamento do IPTU."],
      correct: 1,
      explanation: "O Art. 126 define que a propriedade urbana cumpre sua função social quando atende às exigências fundamentais de ordenação da cidade expressas no Plano Diretor.</p> Dica: O Plano Diretor é o documento-chave que define a função social da propriedade."
    },
    {
      text: "<h3> QUESTÃO 88</p> O Município poderá exigir, nos termos da lei federal, do proprietário de solo urbano não edificado, subutilizado ou não utilizado que promova o seu adequado aproveitamento, sob pena de: </h3>   ",
      options: ["Apenas parcelamento ou edificação compulsória.", "Parcelamento ou edificação compulsória, Imposto Predial e Territorial Urbano (IPTU) progressivo no tempo e desapropriação com pagamento mediante títulos da dívida pública.", "Apenas Imposto Predial e Territorial Urbano (IPTU) progressivo no tempo.", "Desapropriação, com pagamento em dinheiro."],
      correct: 1,
      explanation: "O Art. 127 lista os três instrumentos do Estatuto da Cidade (lei federal): parcelamento/edificação compulsória (I), IPTU progressivo (II) e desapropriação com títulos (III).</p> Dica: O Tripé da Sanção (Compulsória, IPTU Progressivo, Desapropriação com Títulos)."
    },
    {
      text: "<h3> QUESTÃO 89</p> Para a proteção do patrimônio cultural, o Município de Caxias garantirá esta proteção por meio de quais instrumentos? </h3>   ",
      options: ["Apenas por meio de Desapropriação e Inventário.", "Registro, Vigilância e Tombamento, sendo o Inventário de competência do Estado.", "Inventário, Registro, Vigilância, Tombamento e Desapropriação.", "O tombamento de bens culturais é de competência privativa do Prefeito Municipal."],
      correct: 2,
      explanation: "O Art. 130 estabelece que o Município garantirá a proteção do patrimônio cultural por meio de inventário, registro, vigilância, tombamento e desapropriação.</p> Dica: Os cinco instrumentos (Inventário, Registro, Vigilância, Tombamento e Desapropriação) são os meios legais de proteção do patrimônio."
    },
    {
      text: "<h3> QUESTÃO 90</p> No que concerne à fauna e flora, o Município NÃO permitirá: </h3>   ",
      options: ["Apenas a devastação da flora nas nascentes e margens de rios e riachos.", "A devastação da flora nas nascentes e margens dos rios e riachos, e a devastação da fauna e práticas que submetam os animais à crueldade.", "A implantação de projetos de ocupação em áreas de pouso de espécies migratórias.", "A apenas devastação da fauna."],
      correct: 1,
      explanation: "O Art. 132, I, veda a devastação da flora em áreas de preservação permanente (nascentes/margens de rios). O inciso II veda a devastação da fauna e práticas de crueldade animal.</p> Dica: As vedações incluem a proteção da água (nascentes/margens) e a proteção dos animais (fauna/crueldade)."
    },
    {
      text: "<h3> QUESTÃO 91</p> Sobre a pesca artesanal no território do Município, além da legislação federal pertinente, será proibida: </h3>   ",
      options: ["Apenas com o uso de eletricidade.", "Com uso de produtos químicos em geral ou de plantas nativas de efeitos danosos à fauna aquática.", "Em qualquer época do ano.", "Apenas nas áreas de nascentes."],
      correct: 1,
      explanation: "O Art. 133 proíbe a pesca artesanal com o uso de produtos químicos em geral ou de plantas nativas de efeitos danosos à fauna aquática.</p> Dica: A proibição visa proteger a fauna aquática de agentes químicos."
    },
    {
      text: "<h3> QUESTÃO 92</p> O Município assegurará os direitos da criança e do adolescente por: </h3>   ",
      options: ["Prioridade absoluta.", "Prioridade relativa.", "Parceria com o Governo Federal.", "Legislação específica, sem prioridade absoluta."],
      correct: 0,
      explanation: "O Art. 138, *caput*, estabelece que o Município assegurará os direitos da criança e do adolescente por prioridade absoluta.</p> Dica: A Prioridade Absoluta é um princípio constitucional fundamental na proteção da criança e do adolescente."
    }
  ],
  lei_organica_parte_7: [
    {
      text: "<h3> QUESTÃO 93</p> O Município fixará seus feriados nos termos: </h3>   ",
      options: ["Do Regimento Interno da Câmara Municipal.", "Da legislação federal pertinente.", "Da legislação vigente sobre a matéria.", "Decreto do Prefeito Municipal."],
      correct: 2,
      explanation: "O Art. 143 define que o Município fixará seus feriados nos termos da legislação vigente sobre a matéria.</p> Dica: A legislação deve ser observada (geralmente lei municipal ordinária)."
    },
    {
      text: "<h3> QUESTÃO 94</p> A respeito do Dia do Município, é INCORRETO afirmar: </h3>   ",
      options: ["É feriado civil no Município.", "É comemorado no dia 6 de julho.", "É feriado religioso no Município.", "É determinado pelo Prefeito, mediante decreto."],
      correct: 2,
      explanation: "O Art. 144 define o Dia do Município (06 de julho) como feriado civil. A alternativa C está incorreta.</p> Dica: O Dia do Município (06/07) é civil e não religioso."
    },
    {
      text: "<h3> QUESTÃO 95</p> Qual a data estabelecida na Lei Orgânica para a comemoração do Dia do Evangélico? </h3>   ",
      options: ["31 de outubro.", "06 de julho.", "20 de novembro.", "A data é variável, definida anualmente por decreto."],
      correct: 0,
      explanation: "O Art. 145 estabelece que o dia 31 de outubro é o Dia do Evangélico.</p> Dica: O feriado religioso (Dia do Evangélico) é o 31/10."
    },
    {
      text: "<h3> QUESTÃO 96</p> Os atos e procedimentos do Município de Caxias terão a seguinte forma: </h3>   ",
      options: ["Serão escritos ou reduzidos a termo, e serão públicos, salvo quando a lei exigir o sigilo.", "Serão apenas eletrônicos, sendo vedada a forma escrita.", "Serão sempre verbais, reduzidos a termo apenas em caso de urgência.", "Serão escritos e sempre públicos, vedado o sigilo."],
      correct: 0,
      explanation: "O Art. 159 exige a forma escrita ou a termo e a regra da publicidade, exceto nos casos de sigilo exigido por lei.</p> Dica: A Escrita e a Publicidade são os pilares da validade dos atos públicos."
    },
    {
      text: "<h3> QUESTÃO 97</p> A respeito dos contratos municipais, é correto afirmar: </h3>   ",
      options: ["O Município só poderá contratar por meio de licitação.", "Todos os contratos serão precedidos de licitação, salvo nos casos previstos na legislação federal, e o contrato será reduzido a termo.", "O contrato será escrito, mas a redução a termo é facultativa.", "Os contratos de pequeno valor estão dispensados de licitação, independentemente da legislação federal."],
      correct: 1,
      explanation: "O Art. 160 exige que os contratos sejam precedidos de licitação, ressalvados os casos da legislação federal (I), e que sejam reduzidos a termo (II).</p> Dica: Licitação (regra) e Termo (formalidade)."
    },
    {
      text: "<h3> QUESTÃO 98</p> Qual o prazo máximo de validade dos contratos do Município? </h3>   ",
      options: ["Um ano.", "Três anos.", "Cinco anos.", "O prazo varia de acordo com a natureza do contrato."],
      correct: 0,
      explanation: "O Art. 161 estabelece que o prazo de validade não pode ultrapassar um ano, salvo nos casos previstos em lei federal.</p> Dica: O prazo padrão para contratos administrativos (recursos ordinários) é de 1 ano."
    },
    {
      text: "<h3> QUESTÃO 99</p> A respeito do uso e da ocupação do solo, é correto afirmar: </h3> ",
      options: ["O Município pode restringir o uso de vias e logradouros para atividades que prejudiquem a saúde, segurança ou sossego público.", "As restrições ao uso e à ocupação do solo devem ser estabelecidas em lei, com a aprovação da maioria simples dos Vereadores.", "O Município pode restringir o uso de vias e logradouros, mas apenas em casos de calamidade pública.", "As restrições ao uso e à ocupação do solo são determinadas exclusivamente pelo Plano Diretor."],
      correct: 0,
      explanation: "O Art. 162 confere ao Município a competência para restringir o uso de vias e logradouros para atividades que prejudiquem a saúde, segurança ou sossego público."
    },
    {
      text: "<h3> QUESTÃO 100</p> Os atos de permissão e autorização para uso de vias e logradouros públicos para atividades temporárias, como feiras e eventos, serão concedidos por: </h3>   ",
      options: ["Decreto do Prefeito Municipal.", "Licitação pública.", "Alvará da Secretaria Municipal competente.", "Autorização do Presidente da Câmara."],
      correct: 2,
      explanation: "O Art. 163 estabelece que a permissão e a autorização serão concedidas por alvará da Secretaria Municipal competente.</p> Dica: O instrumento de Alvará é o padrão para atos administrativos precários e discricionários."
    },
    {
      text: "<h3> QUESTÃO 101</p> A respeito das obras e edificações no Município, a Lei Orgânica exige que: </h3>   ",
      options: ["Toda obra deve ser precedida de projeto aprovado pela Câmara Municipal.", "Toda obra ou edificação deverá ser precedida de licença da Prefeitura.", "Apenas as obras públicas exigem licença da Prefeitura.", "As edificações rurais estão isentas da licença da Prefeitura."],
      correct: 1,
      explanation: "O Art. 164 exige que toda obra ou edificação deverá ser precedida de licença da Prefeitura (licença de construção).</p> Dica: A licença de construção é essencial para o controle urbano e a segurança."
    },
    {
      text: "<h3> QUESTÃO 102</p> As obras e serviços municipais serão executados mediante projeto: </h3>   ",
      options: ["Aprovado pela Secretaria Municipal competente.", "Aprovado pela Câmara Municipal.", "Aprovado pelo Prefeito Municipal, em regime de urgência.", "Aprovado pelo Tribunal de Contas do Estado."],
      correct: 0,
      explanation: "O Art. 167 estabelece que as obras e serviços serão executados mediante projeto aprovado pela Secretaria Municipal competente.</p> Dica: A aprovação técnica é de competência do órgão executivo (Secretaria)."
    },
    {
      text: "<h3> QUESTÃO 103</p> As leis do Município que alterarem o Código Tributário ou o Código de Obras só entrarão em vigor após: </h3>   ",
      options: ["Sessenta dias da sua publicação.", "Um ano da sua publicação.", "Noventa dias da sua publicação.", "Trinta dias da sua publicação."],
      correct: 2,
      explanation: "O Art. 168 estabelece que as leis que alterarem o Código Tributário ou o Código de Obras só entrarão em vigor após noventa dias da sua publicação (princípio da anterioridade nonagesimal para tributos, estendido para o Código de Obras na LOM Caxias).</p> Dica: A Noventena (90 dias) é o prazo para que o cidadão se prepare para as alterações."
    },
    {
      text: "<h3> QUESTÃO 104</p> A respeito do Código de Posturas, é correto afirmar que: </h3>   ",
      options: ["Regula apenas o funcionamento de bares e restaurantes.", "Estabelece as normas de convivência social e de proteção ao meio ambiente.", "Estabelece as medidas de polícia administrativa, como as relativas a higiene, ordem pública e funcionamento de estabelecimentos.", "Regula apenas o funcionamento das repartições públicas."],
      correct: 2,
      explanation: "O Art. 169 define o Código de Posturas como o que estabelece as medidas de polícia administrativa, como higiene, ordem pública, e funcionamento de estabelecimentos.</p> Dica: O Código de Posturas é a lei que estabelece as regras de convivência urbana (o que pode e o que não pode fazer na cidade)."
    },
    {
      text: "<h3> QUESTÃO 105</p> (ADT) A respeito da estabilidade do servidor público, o Ato das Disposições Transitórias (ADT) da Lei Orgânica estabelece: </h3>   ",
      options: ["A estabilidade dos servidores em exercício na data da promulgação da Lei Orgânica (1990) que contassem com cinco anos de exercício continuado em suas funções.", "A estabilidade de todos os servidores contratados em 1990.", "A estabilidade apenas dos servidores concursados.", "A estabilidade dos servidores em exercício que contassem com dois anos de exercício continuado em suas funções."],
      correct: 0,
      explanation: "O Art. 3º do ADT trata da estabilidade excepcional (Art. 19 do ADT da CF): cinco anos de exercício continuado em 05/10/1988.</p> Dica: Lembre-se do prazo de 5 anos e da data da CF/88 (estabilidade excepcional)."
    },
    {
      text: "<h3> QUESTÃO 106</p> (ADT) A lei poderá criar subprefeituras ou administrações regionais ou setoriais como forma de: </h3>   ",
      options: ["Concentração administrativa.", "Centralização política.", "Descentralização administrativa.", "Obrigação legal da Câmara Municipal."],
      correct: 2,
      explanation: "O Art. 4º do ADT permite que a lei crie subprefeituras ou administrações regionais/setoriais como forma de descentralização administrativa.</p> Dica: As subprefeituras visam levar a administração para mais perto do cidadão (descentralização)."
    },
    {
      text: "<h3> QUESTÃO 107</p> (ADT) Qual a competência do Município na área de Previdência e Assistência Social, conforme o ADT? </h3>   ",
      options: ["Instituir Regime Próprio de Previdência Social, no prazo de noventa dias.", "Continuar aplicando a legislação federal sobre previdência até a aprovação de legislação complementar específica.", "Instituir Regime Próprio de Previdência Social no prazo de um ano.", "Não instituir Regime Próprio, utilizando apenas o Regime Geral."],
      correct: 1,
      explanation: "O Art. 5º do ADT estabelece que, até a aprovação da legislação complementar, o Município continuará aplicando a legislação federal sobre previdência e assistência social.</p> Dica: Enquanto não há lei própria, usa-se a lei federal."
    },
    {
      text: "<h3> QUESTÃO 108</p> (ADT) Os Vereadores da primeira Legislatura, a contar da promulgação da Lei Orgânica (1990), exercerão o mandato pelo prazo de: </h3>   ",
      options: ["Quatro anos.", "Dois anos.", "Três anos.", "Cinco anos."],
      correct: 2,
      explanation: "O Art. 6º do ADT estabelece que os Vereadores da primeira legislatura (1990) exercerão o mandato pelo prazo de três anos.</p> Dica: Essa é uma regra transitória, com prazo reduzido de 3 anos."
    },
    {
      text: "<h3> QUESTÃO 109</p> (Disposições Gerais) O Município poderá instituir sistema próprio de previdência e assistência social: </h3>   ",
      options: ["Apenas para os servidores da Câmara Municipal.", "Para os servidores da administração direta e indireta.", "Apenas para os servidores da administração direta.", "Apenas por meio de lei ordinária."],
      correct: 1,
      explanation: "O Art. 98 permite a instituição do sistema próprio para os servidores da administração direta e indireta.</p> Dica: O sistema próprio abrange todas as esferas da administração municipal (direta e indireta)."
    },
    {
      text: "<h3> QUESTÃO 110</p> (Disposições Gerais) Os Secretários Municipais e o Prefeito, quando convocados pela Câmara, devem comparecer e prestar as informações solicitadas. A ausência do Prefeito, sem justificação, implica em: </h3>   ",
      options: ["Crime de responsabilidade.", "Infração político-administrativa.", "Multa administrativa.", "Apenas advertência da Mesa Diretora."],
      correct: 1,
      explanation: "O Art. 11, *caput*, estabelece que a recusa, o não atendimento ou a prestação de informações falsas implicam em infração político-administrativa do Prefeito.</p> Dica: A sanção para o Prefeito é a infração político-administrativa (que pode levar à cassação)."
    },
    {
      text: "<h3> QUESTÃO 111</p> (Disposições Gerais) O recesso parlamentar da Câmara Municipal ocorre nos períodos de: </h3>   ",
      options: ["1º de julho a 31 de julho e 16 de dezembro a 14 de fevereiro.", "1º de janeiro a 31 de janeiro e 1º de julho a 31 de julho.", "1º de janeiro a 15 de fevereiro e 1º de agosto a 15 de dezembro.", "16 de dezembro a 15 de fevereiro e 1º de julho a 31 de julho."],
      correct: 0,
      explanation: "O Art. 21, § 1º, define o recesso: 1º de julho a 31 de julho (meio do ano) e 16 de dezembro a 14 de fevereiro (final/início do ano).</p> Dica: O recesso é o período em que a Câmara não está em Sessão Legislativa Ordinária."
    },
    {
      text: "<h3> QUESTÃO 112</p> (Disposições Gerais) Se a data da reunião da Câmara Municipal recair em um sábado, domingo ou feriado, ela será: </h3>   ",
      options: ["Transferida para o primeiro dia útil subsequente.", "Cancelada, devendo ser remarcada.", "Realizada na data, independentemente de ser feriado.", "Transferida para o dia anterior."],
      correct: 0,
      explanation: "O Art. 26, § 1º, estabelece que as reuniões em sábados, domingos ou feriados serão transferidas para o primeiro dia útil subsequente.</p> Dica: A regra é sempre a transferência para o próximo dia útil."
    },
    {
      text: "<h3> QUESTÃO 113</p> No exercício do cargo de Secretário Municipal ou de função executiva em órgão público municipal, o Vereador: </h3>   ",
      options: ["Perde a remuneração do mandato legislativo.", "Poderá optar pela remuneração do mandato legislativo.", "Receberá a remuneração do cargo que assumiu, obrigatoriamente.", "Receberá remuneração cumulativa dos dois cargos."],
      correct: 1,
      explanation: "O Art. 17, § 4º, permite que o Vereador, investido no Executivo, opte pela remuneração do mandato legislativo.</p> Dica: A opção é a regra constitucional para evitar o acúmulo de remunerações e garantir a autonomia do Vereador."
    },
    {
      text: "<h3> QUESTÃO 114</p> É competência do Presidente da Câmara: </h3>   ",
      options: ["Declarar a extinção do mandato eletivo municipal.", "Manter a ordem no recinto da Câmara, podendo solicitar a força policial.", "Rejeitar os projetos de lei que não forem de iniciativa do Prefeito.", "Sancionar as leis aprovadas pela Câmara."],
      correct: 1,
      explanation: "O Art. 23, IX, confere ao Presidente a competência para manter a ordem no recinto da Câmara, podendo solicitar a força policial.</p> Dica: A manutenção da ordem é essencialmente uma atribuição do Presidente (Poder de Polícia da Casa)."
    }
  ]
};

function checkIfAnyAnswered() {
    return Object.keys(answered).length > 0;
}

function checkAnyUnanswered() {
    let totalAnswered = Object.keys(answered).filter(key => answered[key].correct).length;
    let totalQuestions = 0;

    for (const cat in questions) {
        totalQuestions += questions[cat].length;
    }

    const isAllAnsweredCorrectly = totalAnswered === totalQuestions && totalQuestions > 0;
    
    return !isAllAnsweredCorrectly;
}

function updateFinalizeButtonVisibility() {
    const btn = document.getElementById("btnFinalizar");
    if (btn) {
        if (checkIfAnyAnswered() && checkAnyUnanswered()) {
            btn.style.display = 'inline-block'; 
        } else {
            btn.style.display = 'none';
        }
    }
}


function showPartialResults() {
    window.scrollTo(0, 0);
    const content = document.getElementById("content");

    const isAllComplete = Object.keys(questions).every(catKey => isCategoryCompleted(catKey));
    const title = isAllComplete ? 
        `🎉 Parabéns! Você concluiu todas as categorias!` : 
        `✅ Parabéns! Você concluiu parcialmente as categorias!`;
    
    const totalPossible = Object.values(questions).reduce(
        (sum, arr) => sum + arr.length * 5,
        0
    );
    
    document.getElementById("btnFinalizar").style.display = 'none';
    document.getElementById("aspectosOptions").style.display = "none";
    document.getElementById("leiOrganicaOptions").style.display = "none";
    
    const totalAnswered = Object.keys(answered).length;
    let firstAttemptCorrect = 0;
    
    for (const key in answered) {
        if (answered[key].correct && answered[key].attempts === 1) { 
            firstAttemptCorrect++;
        }
    }

    const globalPercent = totalPossible > 0 ? ((score / totalPossible) * 100).toFixed(1) : (0).toFixed(1);

    let html = `<h2>${title}</h2>`;
    
    html += `<p><strong>Pontuação total atingida:</strong> ${score} / ${totalPossible} pontos possíveis</p>`;
    const percentColor = isAllComplete ? '#155b94' : '#cc6600';
    html += `<p><strong>Porcentagem Global de Acerto (baseado no total):</strong> <span style="font-size: 1.2em; color: ${percentColor};">${globalPercent}%</span></p>`;
    
    html += `<p><strong>Total de questões respondidas (pelo menos uma tentativa):</strong> ${totalAnswered}</p>`;
    html += `<p><strong>Acertos na primeira tentativa:</strong> ${firstAttemptCorrect}</p>`;
    
    html += `<h3>Desempenho por categoria:</h3><ul>`;
    
    const categoryNames = {
        lei_municipal: "Lei Municipal nº 2.156 2014",
        aspectos_arquivos_1: "Aspectos: Arquivos 1",
        aspectos_arquivos_2: "Aspectos: Arquivos 2",
        aspectos_arquivos_3: "Aspectos: Arquivos 3",
        lei_organica_parte_1: "Lei Orgânica: TÍTULO I - Das Disposições Preliminares",
        lei_organica_parte_2: "Lei Orgânica: TÍTULO II - Do Poder Legislativo",
        lei_organica_parte_3: "Lei Orgânica: TÍTULO III - Do Poder Executivo",
        lei_organica_parte_4: "Lei Orgânica: TÍTULO IV - Da Organização do Governo Municipal",
        lei_organica_parte_5: "Lei Orgânica: TÍTULO V - Da Administração Financeira",
        lei_organica_parte_6: "Lei Orgânica: TÍTULO VI - Da Ordem Econômica e Social",
        lei_organica_parte_7: "Lei Orgânica: TÍTULO VII - Das Disposições Gerais e Finais – artigos 148 a 155",
    };
    
    for (const cat in questions) {
        const totalQuestions = questions[cat].length;
        const maxScoreCategory = totalQuestions * 5;
        const currentScore = categoryScores[cat] || 0;
        
        const status = isCategoryCompleted(cat) ? " (Concluído)" : " (Não Concluído)";

        const percent = maxScoreCategory > 0 ? ((currentScore / maxScoreCategory) * 100).toFixed(1) : (0).toFixed(1);
        
        const catName = categoryNames[cat] || cat;
        
        html += `<li><strong>${catName}:</strong> ${currentScore}/${maxScoreCategory} pontos (${percent}%) ${status}</li>`;
    }
    html += `</ul>`;

    html += `<div class="result-actions">`;
    html += `<button onclick="backToMenu()">Voltar ao Menu Principal</button>`;
    html += `<button onclick="restartAll()">Reiniciar Tudo</button>`;
    html += `</div>`;
    
    content.innerHTML = html;
}

function showAspectosOptions() {
    window.scrollTo(0, 0);
    const content = document.getElementById("content");
    const aspectosOptions = document.getElementById("aspectosOptions");
    document.getElementById("leiOrganicaOptions").style.display = "none";
    
    const btnAspectos1 = document.getElementById('btnAspectos1');
    const btnAspectos2 = document.getElementById('btnAspectos2');
    const btnAspectos3 = document.getElementById('btnAspectos3'); 
    const originalText1 = "Arquivos 1";
    const originalText2 = "Arquivos 2";
    const originalText3 = "Arquivos 3"; 
    const completedLabel = " <span class='completion-label'>Concluído</span>";

    aspectosOptions.style.display = "flex"; 
    
    if (isCategoryCompleted('aspectos_arquivos_1')) {
        btnAspectos1.classList.add('completed');
        btnAspectos1.innerHTML = originalText1 + completedLabel;
    } else {
        btnAspectos1.classList.remove('completed');
        btnAspectos1.innerHTML = originalText1;
    }
    
    if (isCategoryCompleted('aspectos_arquivos_2')) {
        btnAspectos2.classList.add('completed');
        btnAspectos2.innerHTML = originalText2 + completedLabel;
    } else {
        btnAspectos2.classList.remove('completed');
        btnAspectos2.innerHTML = originalText2;
    }

    if (btnAspectos3) { 
        if (isCategoryCompleted('aspectos_arquivos_3')) {
            btnAspectos3.classList.add('completed');
            btnAspectos3.innerHTML = originalText3 + completedLabel;
        } else {
            btnAspectos3.classList.remove('completed');
            btnAspectos3.innerHTML = originalText3;
        }
    }
    
    content.innerHTML = `<h3>Escolha uma das subcategorias acima para iniciar.</h3><h3>Ao finalizar todas as questões de uma subcategoria, ela ficará verde, pode clicar na próxima.</h3>`;
    
    checkAspectosCompleted();

    updateFinalizeButtonVisibility();
}


function showLeiOrganicaOptions() {
    window.scrollTo(0, 0);
    const content = document.getElementById("content");
    const leiOrganicaOptions = document.getElementById("leiOrganicaOptions");
    document.getElementById("aspectosOptions").style.display = "none";

    const completedLabel = " <span class='completion-label'>Concluído</span>";
    
    const lomTitles = {
        1: "TÍTULO I - Das Disposições Preliminares",
        2: "TÍTULO II - Do Poder Legislativo",
        3: "TÍTULO III - Do Poder Executivo",
        4: "TÍTULO IV - Da Organização do Governo Municipal",
        5: "TÍTULO V - Da Administração Financeira",
        6: "TÍTULO VI - Da Ordem Econômica e Social",
        7: "TÍTULO VII - Das Disposições Gerais e Finais – artigos 148 a 155"
    };

    const parts = [1, 2, 3, 4, 5, 6, 7];

    leiOrganicaOptions.style.display = "flex";

    parts.forEach(p => {
        const catKey = `lei_organica_parte_${p}`;
        const btnId = `btnLOMParte${p}`;
        const originalText = lomTitles[p];
        const btn = document.getElementById(btnId);

        if (btn) {
            if (isCategoryCompleted(catKey)) {
                btn.classList.add('completed');
                btn.innerHTML = originalText + completedLabel;
            } else {
                btn.classList.remove('completed');
                btn.innerHTML = originalText;
            }
        }
    });

    content.innerHTML = `<h3>Escolha uma das partes da Lei Orgânica para iniciar.</h3><h3>Ao finalizar todas as questões de uma parte, ela ficará verde, pode clicar na próxima.</h3>`;

    checkLeiOrganicaCompleted();
    
    updateFinalizeButtonVisibility();
}


function loadCategory(cat) {
    window.scrollTo(0, 0);
  document.getElementById("aspectosOptions").style.display = "none";
  document.getElementById("leiOrganicaOptions").style.display = "none"; 
    
  currentCategory = cat;
  currentQuestion = 0;
  attempts = 0;

  document.getElementById("btnFinalizar").style.display = 'none';

  const key = `${currentCategory}_${currentQuestion}`;
  attempts = answered[key] ? answered[key].attempts : 0;

  showQuestion();
}

function showQuestion() {
  const q = questions[currentCategory][currentQuestion];
  const content = document.getElementById("content");
  
  document.getElementById("btnFinalizar").style.display = 'none';

  if (!q) {
    checkAllCompleted();
    return;
  }

  const key = `${currentCategory}_${currentQuestion}`;
  const savedAnswer = answered[key];
  const order = shuffle([...Array(q.options.length).keys()]);

  let html = `<h2 class="question-title">${q.text}</h2><div class="options">`;

  order.forEach(i => {
    let classes = "";
    let feedback = "";
    
    if (savedAnswer) {
        if (savedAnswer.correct) {
            classes = "disabled";
            if (i === q.correct) {
                classes += " correct";
                feedback = '<span class="feedback correct">Correto!</span>';
            } else {
                classes += " incorrect";
                feedback = '<span class="feedback incorrect">Incorreto</span>';
            }
        }
        else {
            const incorrectsClicked = savedAnswer.incorrectIndexes || [];
            
            if (incorrectsClicked.includes(i)) {
                classes = "incorrect disabled"; 
                feedback = '<span class="feedback incorrect">Incorreto</span>';
            }
        }
    }
    
    html += `<button class="${classes}" onclick="checkAnswer(this, ${i})">${q.options[i]} ${feedback}</button>`;
  });

  html += `</div>`;
  
  html += `<div id="explanation-box" class="explanation-style"></div>`; 
  
  html += `<div class="nav-buttons">`;
  
  if (savedAnswer && savedAnswer.correct) {
      
      if (q.explanation) {
          setTimeout(() => { 
              const explanationBox = document.getElementById("explanation-box");
              if (explanationBox) {
                  explanationBox.innerHTML = `<h4>💡 Explicação:</h4><p>${q.explanation}</p>`;
              }
          }, 0);
      }
      
      if (currentQuestion > 0) {
        html += `<button id="prevBtn" onclick="goPrevQuestion()">Questão anterior</button>`;
      }
      
      const nextText = (currentQuestion + 1 < questions[currentCategory].length)
          ? "Próxima questão" : "Assunto concluído";
      html += `<button id="nextBtn" onclick="goNextQuestion()">${nextText}</button>`;
  }

  html += `</div>`;
  content.innerHTML = html;
}

function checkAnswer(btn, index) {
  const q = questions[currentCategory][currentQuestion];
  const key = `${currentCategory}_${currentQuestion}`;
  const options = document.querySelectorAll(".options button");

  if (answered[key] && answered[key].correct) return;
  if (btn.classList.contains("disabled")) return;

  if (index === q.correct) {
    btn.classList.add("correct");
    btn.innerHTML += ' <span class="feedback correct">Correto!</span>';
    
    attempts++; 
    
    const gained = Math.max(1, 5 - (attempts - 1)); 
    score += gained;
    categoryScores[currentCategory] = (categoryScores[currentCategory] || 0) + gained;
    updateScore();
    
    const incorrectsBeforeAcerto = answered[key] && answered[key].incorrectIndexes ? answered[key].incorrectIndexes : [];
    answered[key] = { correct: true, index, attempts, incorrectIndexes: incorrectsBeforeAcerto }; 
    
    lockOptions(options);
    
    if (currentQuestion + 1 === questions[currentCategory].length) {
        markCompleted(); 
    }

    const explanationBox = document.getElementById("explanation-box");
    if (q.explanation && explanationBox) {
        explanationBox.innerHTML = `<h4>💡 Explicação:</h4><p>${q.explanation}</p>`;
    }


    const navButtons = document.querySelector(".nav-buttons");
    
    if (navButtons) {
        const nextText = (currentQuestion + 1 < questions[currentCategory].length)
          ? "Próxima questão" : "Assunto concluído";

        navButtons.innerHTML = '';
        if (currentQuestion > 0) {
            navButtons.innerHTML += `<button id="prevBtn" onclick="goPrevQuestion()">Questão anterior</button>`;
        }
        navButtons.innerHTML += `<button id="nextBtn" onclick="goNextQuestion()">${nextText}</button>`;
    }

  } else {
    
    attempts++; 
    
    const incorrects = answered[key] && answered[key].incorrectIndexes ? answered[key].incorrectIndexes : [];
    
    if (!incorrects.includes(index)) {
         incorrects.push(index); 
    }
    
    answered[key] = { correct: false, index, attempts, incorrectIndexes: incorrects };
    
    btn.classList.add("incorrect");
    btn.classList.add("disabled"); 

    if (!btn.innerHTML.includes("Incorreto")) {
        btn.innerHTML += ' <span class="feedback incorrect">Incorreto</span>';
    }
  }
}
function lockOptions(options) {
  options.forEach(opt => {
    opt.classList.add("disabled");
    
    if (!opt.classList.contains("correct") && !opt.classList.contains("incorrect")) {
        opt.classList.add("incorrect");
    }
    
    if (opt.classList.contains("incorrect") && !opt.innerHTML.includes("Incorreto")) {
        opt.innerHTML += ' <span class="feedback incorrect">Incorreto</span>';
    }
  });
}
function goNextQuestion() {
  currentQuestion++;
  attempts = 0;
  const key = `${currentCategory}_${currentQuestion}`;
  if(questions[currentCategory] && currentQuestion < questions[currentCategory].length){
      attempts = answered[key] ? answered[key].attempts : 0;
window.scrollTo(0, 0)
  }
  showQuestion();
}
function goPrevQuestion() {
  currentQuestion--;
  if (currentQuestion < 0) currentQuestion = 0;
  const key = `${currentCategory}_${currentQuestion}`;
  attempts = answered[key] ? answered[key].attempts : 0;
window.scrollTo(0, 0)
  showQuestion();
}
function updateScore() {
  document.getElementById("score").textContent = `${score} pontos`;
}
function isCategoryCompleted(catKey) {
    const totalQuestions = questions[catKey] ? questions[catKey].length : 0;
    let answeredCount = 0;
    for (let i = 0; i < totalQuestions; i++) {
        if (answered[`${catKey}_${i}`] && answered[`${catKey}_${i}`].correct) {
            answeredCount++;
        }
    }
    return answeredCount === totalQuestions && totalQuestions > 0;
}

function markCompleted() {
  const map = {
    lei_municipal: "btnLei",
    aspectos_arquivos_1: "btnAspectos1",
    aspectos_arquivos_2: "btnAspectos2",
    aspectos_arquivos_3: "btnAspectos3",
    lei_organica_parte_1: "btnLOMParte1", 
    lei_organica_parte_2: "btnLOMParte2", 
    lei_organica_parte_3: "btnLOMParte3",
    lei_organica_parte_4: "btnLOMParte4",
    lei_organica_parte_5: "btnLOMParte5",
    lei_organica_parte_6: "btnLOMParte6",
    lei_organica_parte_7: "btnLOMParte7",
  };
  
  const btnId = map[currentCategory];
  if (btnId) {
      const btn = document.getElementById(btnId);
      if (btn) {
         btn.classList.add("completed");
      }
  }
  
  if (currentCategory.startsWith('aspectos_arquivos_')) {
      checkAspectosCompleted();
  }
  if (currentCategory.startsWith('lei_organica_parte_')) {
      checkLeiOrganicaCompleted();
  }
}

function checkAspectosCompleted() {
    const completed1 = isCategoryCompleted('aspectos_arquivos_1');
    const completed2 = isCategoryCompleted('aspectos_arquivos_2');
    const completed3 = isCategoryCompleted('aspectos_arquivos_3'); 
    
    const btnAspectos = document.getElementById("btnAspectos");
    
    if (completed1 && completed2 && completed3) { 
        btnAspectos.classList.add("completed");
    } else {
        btnAspectos.classList.remove("completed");
    }
}

function checkLeiOrganicaCompleted() {
    const parts = [1, 2, 3, 4, 5, 6, 7];
    const allLOMDone = parts.every(p => isCategoryCompleted(`lei_organica_parte_${p}`));
    
    const btnLeiOrganica = document.getElementById("btnLeiOrganica");
    
    if (allLOMDone) {
        btnLeiOrganica.classList.add("completed");
    } else {
        btnLeiOrganica.classList.remove("completed");
    }
}


function checkAllCompleted() {
    const allDone = Object.keys(questions).every(catKey => isCategoryCompleted(catKey));

    if (allDone) {
        showPartialResults();
    } else {
        backToMenu();
    }
}

function restartAll() {
  score = 0;
  answered = {};
  categoryScores = {};
  updateScore();

  document
    .querySelectorAll(".completed")
    .forEach(btn => btn.classList.remove("completed"));
    
  document.getElementById("aspectosOptions").style.display = "none";
  document.getElementById("leiOrganicaOptions").style.display = "none";
  
  document.getElementById('btnAspectos1').innerHTML = "Arquivos 1";
  document.getElementById('btnAspectos2').innerHTML = "Arquivos 2";
  const btnAspectos3 = document.getElementById('btnAspectos3');
  if (btnAspectos3) {
      btnAspectos3.innerHTML = "Arquivos 3";
  }

  const lomTitles = {
        1: "TÍTULO I - Das Disposições Preliminares",
        2: "TÍTULO II - Do Poder Legislativo",
        3: "TÍTULO III - Do Poder Executivo",
        4: "TÍTULO IV - Da Organização do Governo Municipal",
        5: "TÍTULO V - Da Administração Financeira",
        6: "TÍTULO VI - Da Ordem Econômica e Social",
        7: "TÍTULO VII - Das Disposições Gerais e Finais – artigos 148 a 155"
    };
  const parts = [1, 2, 3, 4, 5, 6, 7];
  parts.forEach(p => {
    const btn = document.getElementById(`btnLOMParte${p}`);
    if (btn) {
        btn.innerHTML = lomTitles[p];
    }
  });

  backToMenu();
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function backToMenu() {
  currentCategory = null;
  currentQuestion = 0;
  document.getElementById("content").innerHTML =
    "<h3>Escolha uma das categorias acima para iniciar.</h3><h3>Ao finalizar todas as questões de uma categoria, ela ficará verde, pode clicar na próxima. </h3><h3><h3>PONTUAÇÃO: </br>Acertando na primeira tentativa - 5 pontos. </br> Acertando na segunda tentativa  - 4 pontos. </br> Acertando na terceira tentativa  - 3 pontos. </br> Acertando na quarta tentativa  - 2 pontos. </br> Acertando na quinta tentativa  - 2 pontos.</h3>";

  updateFinalizeButtonVisibility();
}

document.addEventListener('DOMContentLoaded', updateFinalizeButtonVisibility);