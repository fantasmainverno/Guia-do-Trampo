const STORAGE_KEYS = {
  gamification: 'guia_do_trampo_gamification_v1',
  offlineAppeals: 'guia_do_trampo_offline_appeals_v1'
};

const AVATAR_RULES = {
  allowedTypes: ['image/jpeg', 'image/png', 'image/webp'],
  maxBytes: 5 * 1024 * 1024
};

const ICONS = {
  back: '<path d="M19 12H5M11 6l-6 6 6 6"/>',
  chev: '<path d="M9 6l6 6-6 6"/>',
  eye: '<path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
  home: '<path d="M3 11l9-8 9 8v10h-6v-6H9v6H3z"/>',
  sun: '<circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2"/>',
  rain: '<path d="M16 13v8M8 13v8M12 15v8M20 16.58A5 5 0 0 0 18 7h-1.26A8 8 0 1 0 4 15.25"/>',
  wind: '<path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2"/>',
  droplet: '<path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>',
  briefcase: '<rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>',
  calculator: '<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="8" y1="6" x2="16" y2="6"/><line x1="8" y1="10" x2="8.01" y2="10"/><line x1="12" y1="10" x2="12.01" y2="10"/><line x1="16" y1="10" x2="16.01" y2="10"/><line x1="8" y1="14" x2="8.01" y2="14"/><line x1="12" y1="14" x2="12.01" y2="14"/><line x1="16" y1="14" x2="16.01" y2="14"/><line x1="8" y1="18" x2="12" y2="18"/><line x1="16" y1="18" x2="16.01" y2="18"/>',
  handHeart: '<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>',
  share: '<circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/>',
  book: '<path d="M4 4h6a2 2 0 0 1 2 2v14a2 2 0 0 0-2-2H4zM20 4h-6a2 2 0 0 0-2 2v14a2 2 0 0 1 2-2h6z"/>',
  star: '<path d="M12 3l3 6.5 7 .8-5 4.7 1.3 7L12 18.6 5.7 22 7 15 2 10.3l7-.8z"/>',
  menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
  check: '<circle cx="12" cy="12" r="9"/><path d="M8 12l3 3 5-6"/>',
  checkSimple: '<polyline points="20 6 9 17 4 12"/>',
  lock: '<rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>',
  flame: '<path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/>',
  heart: '<path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>',
  alert: '<path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>',
  phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>',
  pin: '<path d="M12 21s7-6 7-11a7 7 0 0 0-14 0c0 5 7 11 7 11z"/><circle cx="12" cy="10" r="2.5"/>',
  camera: '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>',
  paperclip: '<path d="M21.44 11.05l-9.19 9.19a6 6 0 0 1-8.49-8.49l9.19-9.19a4 4 0 0 1 5.66 5.66l-9.2 9.19a2 2 0 0 1-2.83-2.83l8.49-8.48"/>',
  wifiOff: '<line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.58 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/>',
  loader: '<path d="M21 12a9 9 0 1 1-6.219-8.56"/>',
  x: '<path d="M6 6l12 12M18 6L6 18"/>'
};

const GUIAS_DESCUBRA = [
  {
    id: 'abrir-mei',
    categoria: 'Direitos',
    icone: 'briefcase',
    corFundo: '#B7EBC0',
    titulo: 'Como abrir ou regularizar seu MEI',
    resumo: 'Passo a passo gratuito, valor do DAS e benefícios do INSS.',
    fonte: 'Portal do Empreendedor (Gov.br)',
    passos: [
      'Abertura 100% gratuita: acesse o site oficial gov.br/mei com sua conta Gov.br. Nunca pague taxas em sites particulares para abrir o CNPJ.',
      'Valor mensal fixo (DAS): vence todo dia 20 e fica em torno de R$ 75 a R$ 81 por mês (5% do salário mínimo + R$ 1 de ICMS ou R$ 5 de ISS).',
      'Direitos garantidos: mantendo o boleto em dia, você garante aposentadoria por idade, auxílio-doença e salário-maternidade pelo INSS.',
      'Como regularizar atrasos: no próprio portal Gov.br ou app MEI, você emite os boletos atrasados ou faz parcelamento em poucos cliques.'
    ],
    textoAcao: 'Praticar no Quiz de Direitos MEI',
    telaDestino: 'trilha'
  },
  {
    id: 'auxilios-sociais',
    categoria: 'Direitos',
    icone: 'shield',
    corFundo: '#DCEBFF',
    titulo: 'Direitos e Auxílios Sociais',
    resumo: 'CadÚnico, Bolsa Família, Tarifa Social de Energia e CRAS.',
    fonte: 'Ministério do Desenvolvimento Social',
    passos: [
      'Cadastro Único (CadÚnico): é a porta de entrada para benefícios sociais de famílias com renda mensal de até meio salário mínimo por pessoa.',
      'Tarifa Social de Energia: garante descontos de 10% a 65% na conta de luz para famílias inscritas no CadÚnico ou que recebem o BPC.',
      'Bolsa Família e Auxílio Gás: trabalhadores informais e MEIs podem receber caso a renda familiar por pessoa esteja dentro das regras do programa.',
      'Onde ir: procure o CRAS (Centro de Referência de Assistência Social) mais próximo do seu bairro levando RG, CPF e comprovante de residência.'
    ],
    textoAcao: 'Ver locais de atendimento perto',
    telaDestino: 'apoio'
  },
  {
    id: 'pontos-apoio',
    categoria: 'Serviços',
    icone: 'pin',
    corFundo: '#BFD9FF',
    titulo: 'Pontos de Apoio e Descanso na Cidade',
    resumo: 'Locais gratuitos para beber água, usar banheiro e carregar o celular.',
    fonte: 'Rede de Apoio ao Trabalhador',
    passos: [
      'Hidratação e higiene: postos de saúde (UBS), terminais de ônibus, mercados municipais e pontos parceiros oferecem água potável e sanitários.',
      'Recarga de bateria: shoppings populares, estações de metrô e espaços de convivência possuem tomadas gratuitas para recarregar seu aparelho.',
      'Pausa segura na sombra: aproveite os horários de sol extremo (10h às 16h) para descansar 15 minutos em áreas ventiladas.',
      'Veja no mapa do app: toque no botão abaixo para conferir os endereços mais próximos do seu bairro.'
    ],
    textoAcao: 'Abrir lista de pontos de apoio',
    telaDestino: 'apoio'
  },
  {
    id: 'calculadora-ganhos',
    categoria: 'Finanças',
    icone: 'calculator',
    corFundo: '#D9CBEA',
    titulo: 'Calculadora de Ganhos Reais',
    resumo: 'Desconte combustível, taxas e manutenção para ver seu lucro líquido.',
    fonte: 'Educação Financeira Guia do Trampo',
    passos: [
      'Faturamento não é lucro: se você fez R$ 200 no dia, mas gastou R$ 55 de combustível e R$ 20 de lanche, seu ganho real foi R$ 125.',
      'Reserve para manutenção: separe R$ 0,15 a R$ 0,25 por quilômetro rodado para troca de óleo, pneus, revisão ou conserto da bike/moto.',
      'Desconte taxas e internet: inclua o pacote de dados do celular e eventuais taxas de maquininha ou saque no cálculo semanal.',
      'Regra simples do dia: anote tudo que entrou e saiu antes de dormir. Separe pelo menos 10% do lucro líquido para sua reserva de emergência.'
    ],
    textoAcao: 'Praticar Organização Financeira',
    telaDestino: 'trilha'
  },
  {
    id: 'saude-gratuita',
    categoria: 'Saúde',
    icone: 'handHeart',
    corFundo: '#F4B5D0',
    titulo: 'Saúde e Atendimento Gratuito',
    resumo: 'Consultas no SUS, vacinação e apoio emocional (CAPS / CVV 188).',
    fonte: 'Ministério da Saúde · SUS',
    passos: [
      'Consultas e vacinas (UBS): qualquer cidadão pode ser atendido gratuitamente no posto de saúde do bairro apenas com CPF ou Cartão do SUS.',
      'App Meu SUS Digital: acompanhe exames, carteira de vacinação e agendamentos direto pelo celular sem enfrentar filas.',
      'Saúde mental nos CAPS: os Centros de Atenção Psicossocial oferecem acolhimento psicológico gratuito sem precisar de encaminhamento.',
      'Apoio 24 horas (CVV 188): passando por um momento difícil ou ansiedade forte? Ligue 188 gratuitamente a qualquer hora, com sigilo total.'
    ],
    textoAcao: 'Ver guia de Saúde Mental',
    telaDestino: 'content',
    topicoDestino: 'saude'
  }
];

const CATEGORIAS_DESCUBRA = ['Todos', 'Direitos', 'Finanças', 'Saúde', 'Serviços'];

const CENARIOS_CLIMA = {
  calor: {
    id: 'calor',
    rotulo: 'Calor forte',
    temp: 38,
    sensacao: 41,
    condicao: 'sun',
    descricao: 'Sol extremo',
    uv: 11,
    umidade: 54,
    ventoKmh: 16,
    atualizadoEm: 'hoje às 10:30'
  },
  chuva: {
    id: 'chuva',
    rotulo: 'Chuva / Tempestade',
    temp: 23,
    sensacao: 22,
    condicao: 'storm',
    descricao: 'Chuva forte e trovoadas',
    uv: 2,
    umidade: 91,
    ventoKmh: 38,
    atualizadoEm: 'agora mesmo'
  },
  frio: {
    id: 'frio',
    rotulo: 'Frio / Vento',
    temp: 15,
    sensacao: 12,
    condicao: 'wind',
    descricao: 'Frio com rajadas de vento',
    uv: 3,
    umidade: 68,
    ventoKmh: 42,
    atualizadoEm: 'agora mesmo'
  },
  seco: {
    id: 'seco',
    rotulo: 'Tempo seco',
    temp: 31,
    sensacao: 30,
    condicao: 'dry',
    descricao: 'Ar muito seco',
    uv: 8,
    umidade: 24,
    ventoKmh: 14,
    atualizadoEm: 'agora mesmo'
  },
  agradavel: {
    id: 'agradavel',
    rotulo: 'Agradável / Nublado',
    temp: 25,
    sensacao: 25,
    condicao: 'cloudy',
    descricao: 'Nublado e agradável',
    uv: 4,
    umidade: 62,
    ventoKmh: 12,
    atualizadoEm: 'agora mesmo'
  }
};

const MODULOS_TRILHA = [
  {
    id: 'mei',
    numero: 1,
    titulo: 'Direitos MEI e Proteção Social',
    subtitulo: 'DAS mensal, benefícios do INSS e nota fiscal',
    xpBonus: 60,
    perguntas: [
      {
        enunciado: 'Para manter seus direitos ativos no MEI, o que você precisa fazer todo mês?',
        opcoes: [
          'Pagar o boleto mensal (DAS) em dia, mesmo nos meses em que faturar pouco',
          'Pagar o boleto apenas nos meses em que trabalhar todos os dias',
          'Ir presencialmente à prefeitura para carimbar o cadastro'
        ],
        correta: 0,
        dica: 'O boleto DAS do MEI vence todo dia 20 e tem valor fixo baixo. Pagando em dia, seu tempo de contribuição conta para o INSS.'
      },
      {
        enunciado: 'Quais benefícios do INSS o MEI passa a ter direito após cumprir o tempo mínimo de contribuição (carência)?',
        opcoes: [
          'Apenas desconto em passagens de ônibus interestaduais',
          'Aposentadoria por idade, auxílio-doença e salário-maternidade',
          'Seguro-desemprego pago por 12 meses seguidos'
        ],
        correta: 1,
        dica: 'Com os boletos em dia, você e sua família ficam protegidos em caso de doença, acidente, maternidade ou aposentadoria.'
      },
      {
        enunciado: 'Sobre a emissão de Nota Fiscal pelo MEI, qual afirmação é verdadeira?',
        opcoes: [
          'É obrigatória quando você presta serviço ou vende para outra empresa (CNPJ)',
          'O MEI é proibido por lei de emitir qualquer tipo de nota fiscal',
          'Só pode emitir nota fiscal quem tem loja física com placa na rua'
        ],
        correta: 0,
        dica: 'Para pessoa física (CPF), a nota é opcional (exceto se o cliente pedir). Para empresas (CNPJ), emitir a NFS-e pelo portal nacional é obrigatório.'
      }
    ]
  },
  {
    id: 'fin',
    numero: 2,
    titulo: 'Organização Financeira na Prática',
    subtitulo: 'Separar caixa, reserva de emergência e controle de gastos',
    xpBonus: 60,
    perguntas: [
      {
        enunciado: 'Qual é o primeiro passo para saber se o seu trabalho por conta própria está realmente dando lucro?',
        opcoes: [
          'Juntar todo o dinheiro na mesma conta e pagar tudo o que aparecer',
          'Separar o dinheiro do trabalho (caixa) do dinheiro das contas de casa',
          'Anotar apenas o valor total que entrou no mês, sem descontar combustível ou materiais'
        ],
        correta: 1,
        dica: 'Quando você separa as contas, consegue definir um "salário" semanal para casa sem quebrar o caixa do seu trabalho.'
      },
      {
        enunciado: 'Por que a reserva de emergência é essencial para quem trabalha sem carteira assinada?',
        opcoes: [
          'Para poder gastar em promoções de fim de semana sem culpa',
          'Para cobrir dias parados por chuva, doença ou manutenção da ferramenta de trabalho',
          'Porque o banco exige saldo parado para liberar Pix'
        ],
        correta: 1,
        dica: 'Guardar nem que seja R$ 5 ou R$ 10 por dia trabalhado cria um colchão de segurança para imprevistos.'
      },
      {
        enunciado: 'No dia a dia de trabalho, qual é a diferença entre gasto fixo e gasto variável?',
        opcoes: [
          'Fixo é o que muda todo dia; variável é o que tem o mesmo valor todo mês',
          'Fixo é o boleto mensal do MEI ou internet; variável é combustível, alimentação na rua ou embalagem',
          'Não existe diferença prática entre eles para quem trabalha sozinho'
        ],
        correta: 1,
        dica: 'Conhecer seus gastos variáveis ajuda a calcular quanto você precisa faturar no dia antes de começar a ter lucro líquido.'
      }
    ]
  },
  {
    id: 'saude',
    numero: 3,
    titulo: 'Saúde Mental e Bem-Estar no Trabalho',
    subtitulo: 'Sinais de esgotamento, pausas e rede gratuita de apoio',
    xpBonus: 60,
    perguntas: [
      {
        enunciado: 'Qual conjunto de sinais indica alerta de esgotamento físico e mental (burnout)?',
        opcoes: [
          'Cansaço que não passa nem dormindo, irritação constante, insônia e falta de ânimo',
          'Sentir fome na hora do almoço e vontade de descansar no domingo',
          'Ficar animado ao bater a meta de entregas da semana'
        ],
        correta: 0,
        dica: 'Reconhecer os sinais cedo evita que o estresse vire uma crise grave de saúde física ou emocional.'
      },
      {
        enunciado: 'Trabalhando por conta própria, fazer pequenas pausas ao longo do turno:',
        opcoes: [
          'É perda de tempo e atrapalha o rendimento no fim do dia',
          'Ajuda a manter a atenção, previne acidentes e reduz a ansiedade no trânsito ou na rua',
          'Só deve ser feito se chover forte'
        ],
        correta: 1,
        dica: 'Parar 10 minutos a cada 2 ou 3 horas para beber água, alongar e respirar fundo protege sua saúde e sua segurança.'
      },
      {
        enunciado: 'Onde qualquer trabalhador pode buscar apoio psicológico ou emocional gratuito no Brasil?',
        opcoes: [
          'Apenas em clínicas particulares com plano de saúde empresarial',
          'Nos postos de saúde (UBS/CAPS) pelo SUS e ligando 188 (CVV) 24 horas por dia',
          'Somente com encaminhamento de advogado trabalhista'
        ],
        correta: 1,
        dica: 'O SUS oferece atendimento gratuito nas UBS e CAPS, e o CVV atende pelo telefone 188 com sigilo total e ligação gratuita.'
      }
    ]
  }
];

const NIVEIS_CONHECIMENTO = ['Não sei nada', 'Sei quase nada', 'Sei um pouco', 'Sei bem'];

const PERGUNTAS_ONBOARDING = [
  ['Em que você trabalha hoje?', ['Entrega por aplicativo', 'Motorista de aplicativo', 'Outro trabalho por conta própria']],
  ['Há quanto tempo você trabalha por conta própria?', ['Menos de 1 ano', 'De 1 a 3 anos', 'Mais de 3 anos']],
  ['Você costuma anotar quanto ganha e quanto gasta?', ['Não', 'Às vezes', 'Sim, sempre']],
  ['O quanto você sabe sobre cuidar da saúde mental?', NIVEIS_CONHECIMENTO],
  ['O quanto você sabe sobre seus direitos no trabalho?', NIVEIS_CONHECIMENTO],
  ['Você conhece o MEI (cadastro de trabalhador por conta própria)?', ['Não conheço', 'Conheço um pouco', 'Conheço bem']]
];

const GUIAS_RAPIDOS = {
  mei: [
    'MEI e seus direitos',
    [
      ['Aposentadoria', 'Pagando o boleto mensal do MEI em dia, você pode se aposentar por idade.'],
      ['Auxílio se ficar doente', 'Se precisar parar de trabalhar por doença ou acidente, pode pedir auxílio ao INSS.'],
      ['Salário-maternidade', 'Quem paga o MEI em dia tem direito ao pagamento durante a licença-maternidade.']
    ],
    'Governo Federal e Sebrae'
  ],
  fin: [
    'Organizar o dinheiro',
    [
      ['Separe as contas', 'Não misture o dinheiro de pagar as contas de casa com o dinheiro do trabalho.'],
      ['Guarde um pouco por semana', 'Separe um valor toda semana para emergências, mesmo que seja pouco.'],
      ['Cuidado com empréstimos', 'Antes de pegar dinheiro emprestado, veja quanto vai pagar no final com os juros.']
    ],
    'Serasa'
  ],
  saude: [
    'Cuidar da mente',
    [
      ['Sinais de cansaço extremo', 'Dormir mal, sentir muita irritação e cansaço que não passa são sinais de alerta.'],
      ['Respiração rápida em 1 minuto', 'Puxe o ar pelo nariz contando até 4 e solte pela boca contando até 6.'],
      ['Onde pedir ajuda de graça', 'Procure o posto de saúde (UBS) mais perto da sua casa.']
    ],
    'Ministério da Saúde'
  ]
};

const ABAS_NAVEGACAO = [
  ['home', 'Início', 'home'],
  ['clima', 'Clima', 'sun'],
  ['trilha', 'Aprender', 'book'],
  ['ranking', 'Pontos', 'star'],
  ['menu', 'Menu', 'menu']
];

const RANKING_SEMANAL = [
  ['@estradaleve', 4, 820],
  ['@motoforte', 4, 760],
  ['@corredodia', 3, 640],
  ['@aguaboa', 3, 590],
  ['@trampofirme', 3, 560]
];

const LOCAIS_APOIO = [
  ['Posto de Saúde (SUS)', '600 metros de distância · água, banheiro e atendimento'],
  ['Local Parceiro (Água e banheiro)', '1,2 km de distância · ponto de descanso e tomada'],
  ['CRAS / Atendimento Comunitário', '2 km de distância · CadÚnico e orientação social']
];

const CATEGORIAS_CONTESTACAO = [
  'Meus pontos foram pausados por engano',
  'Aviso de tempo ou sol errado',
  'O aplicativo travou ou deu erro'
];

const PERGUNTAS_FAQ = [
  ['Preciso criar conta para usar?', 'Não. Você pode ver o tempo, os locais de apoio e os guias sem criar conta. A conta serve só para guardar seus pontos.'],
  ['Como funcionam os avisos de calor?', 'Avisamos no seu celular quando a previsão mostra sol muito forte ou calor perigoso.'],
  ['O que acontece se meus pontos forem pausados?', 'Mostramos o motivo exato sem "caixa-preta". Enquanto você contesta com provas, sua conta segue ativa pela Presunção de Boa-Fé e um humano revisa em até 48h.'],
  ['Como pedir revisão de um bloqueio?', 'Abra o Menu, toque em "Contestar penalidade ou avisar erro", anexe prints ou GPS e envie mesmo se estiver offline.']
];

const $ = (seletor) => document.querySelector(seletor);

function lerStorage(chave, padrao) {
  try {
    const bruto = localStorage.getItem(chave);
    return bruto ? JSON.parse(bruto) : padrao;
  } catch {
    return padrao;
  }
}

function gravarStorage(chave, valor) {
  try {
    localStorage.setItem(chave, JSON.stringify(valor));
  } catch {}
}

const progressoSalvo = lerStorage(STORAGE_KEYS.gamification, null);

const estado = {
  tela: 'welcome',
  historico: [],
  indicePerguntaOnboarding: 0,
  topicoAtivo: 'mei',
  offline: !navigator.onLine,
  abaRanking: 0,
  categoriaDescubra: 'Todos',
  itemDescubraSelecionado: null,
  clima: { ...CENARIOS_CLIMA.calor },

  penalidade: {
    ativa: false,
    status: 'none',
    protocolo: 'GT-260426-0123',
    aplicadaEm: '24/04/2026 às 09:15',
    ateData: '24/08/2026',
    xpRetido: 80,
    parametroRegra: 'Taxa de recusa consecutiva > 60% em horário de chuva sem justificativa registrada',
    motivoSimples: 'O sistema automático detectou 4 recusas seguidas de corridas durante chuva forte e pausou 80 XP preventivamente.',
    parecerModerador: '',
    logAuditoria: []
  },

  rascunhoContestacao: {
    categoria: CATEGORIAS_CONTESTACAO[0],
    descricao: '',
    provas: []
  },
  filaContestacoesOffline: lerStorage(STORAGE_KEYS.offlineAppeals, []),

  gamificacao: {
    xp: progressoSalvo?.xp ?? 140,
    ofensivaDias: progressoSalvo?.ofensivaDias ?? progressoSalvo?.streakDays ?? 3,
    ultimaDataConcluida: progressoSalvo?.ultimaDataConcluida ?? progressoSalvo?.lastCompletedDate ?? null,
    modulosConcluidos: Array.isArray(progressoSalvo?.modulosConcluidos ?? progressoSalvo?.completedModules)
      ? (progressoSalvo.modulosConcluidos ?? progressoSalvo.completedModules)
      : [],
    progressoPorModulo: progressoSalvo?.progressoPorModulo ?? progressoSalvo?.moduleProgress ?? { mei: 0, fin: 0, saude: 0 }
  },

  licao: {
    indiceModulo: 0,
    indicePergunta: 0,
    vidas: 3,
    opcaoSelecionada: null,
    respondida: false,
    acertos: 0,
    xpGanho: 0
  },

  perfil: {
    nome: 'João Silva',
    usuario: 'joaosilva',
    bairro: 'Pituba',
    email: 'joao.silva@email.com',
    telefone: '(71) 99999-0000',
    fotoUrl: null,
    fotoRascunhoUrl: null,
    salvando: false
  },

  sos: {
    contagem: 5,
    timerId: null,
    statusLocalizacao: 'idle',
    coordenadas: null,
    enderecoTexto: 'Bairro Pituba, Salvador (aproximado)',
    contatoConfianca: { nome: 'Contato de Confiança', telefone: '5571999990000' }
  }
};

const escaparHtml = (texto = '') =>
  String(texto)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const emailValido = (email) => /\S+@\S+\.\S+/.test(email);
const valorCampo = (id) => $('#' + id)?.value || '';

function obterIniciais(nome = '') {
  const partes = nome.trim().split(/\s+/).filter(Boolean);
  if (!partes.length) return 'GT';
  if (partes.length === 1) return partes[0].slice(0, 2).toUpperCase();
  return (partes[0][0] + partes[partes.length - 1][0]).toUpperCase();
}

function normalizarUsuario(bruto = '') {
  return bruto
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/^@+/, '')
    .replace(/[^a-z0-9._]/g, '');
}

let timerToast;
function notificar(mensagem) {
  const el = $('#toast');
  el.textContent = mensagem;
  el.classList.add('on');
  clearTimeout(timerToast);
  timerToast = setTimeout(() => el.classList.remove('on'), 3400);
}

function sincronizarContestacoesPendentes() {
  if (estado.offline || estado.filaContestacoesOffline.length === 0) return;
  const total = estado.filaContestacoesOffline.length;
  estado.filaContestacoesOffline = [];
  gravarStorage(STORAGE_KEYS.offlineAppeals, []);
  notificar(`${total} ${total === 1 ? 'contestação salva offline foi sincronizada' : 'contestações salvas offline foram sincronizadas'} com sucesso!`);
}

function avaliarClimaEDicas(clima) {
  const dicas = [];
  let classeTema = 'pleasant';
  let alerta = null;

  const temTempestade = clima.condicao === 'storm' || clima.condicao === 'rain';
  const temCalor = clima.temp >= 29 || clima.uv >= 7;
  const temFrioOuVento = clima.temp <= 18 || clima.ventoKmh >= 35;
  const tempoSeco = clima.umidade <= 35;

  if (temTempestade) {
    classeTema = 'rain';
    alerta = {
      nivel: 'danger',
      titulo: 'ALERTA DE CHUVA FORTE E PISTA ESCORREGADIA',
      texto: 'Reduza a velocidade, evite áreas com histórico de alagamento e aguarde em local coberto.'
    };
    dicas.push(
      {
        categoria: 'seguranca',
        rotuloCategoria: 'Segurança na Rua',
        icone: 'shield',
        extremo: true,
        titulo: 'Pista escorregadia e distância de frenagem',
        texto: 'Dobre a distância do veículo da frente e evite frear bruscamente sobre faixas pintadas ou poças.'
      },
      {
        categoria: 'trabalho',
        rotuloCategoria: 'Equipamentos & Trabalho',
        icone: 'briefcase',
        extremo: true,
        titulo: 'Proteja celular, maquininha e mercadorias',
        texto: 'Use capa impermeável na mochila e guarde celular e documentos em saco plástico vedado.'
      }
    );
  }

  if (temCalor) {
    if (!temTempestade) {
      classeTema = clima.temp >= 34 || clima.uv >= 9 ? 'extreme-heat' : 'dry';
      if (clima.temp >= 34 || clima.uv >= 9) {
        alerta = {
          nivel: 'warning',
          titulo: `CALOR EXTREMO (${clima.temp} °C · UV ${clima.uv})`,
          texto: 'Evite exposição direta ao sol entre 10h e 16h e faça pausas na sombra a cada hora.'
        };
      }
    }
    dicas.push(
      {
        categoria: 'saude',
        rotuloCategoria: 'Saúde & Hidratação',
        icone: 'droplet',
        extremo: clima.temp >= 34,
        titulo: 'Beba 1 copo de água a cada 1 hora',
        texto: 'Não espere sentir sede. Leve garrafa térmica com água fresca e reabasteça nos locais de apoio.'
      },
      {
        categoria: 'saude',
        rotuloCategoria: 'Saúde & Hidratação',
        icone: 'sun',
        extremo: clima.uv >= 8,
        titulo: 'Protetor solar, boné e sombra entre 10h e 16h',
        texto: 'Reaplique o protetor solar a cada 2 horas no rosto, braços e pescoço e use camisa leve.'
      }
    );
  }

  if (tempoSeco) {
    if (!temTempestade && !temCalor) {
      classeTema = 'dry';
      alerta = {
        nivel: 'warning',
        titulo: `AR MUITO SECO · UMIDADE EM ${clima.umidade}%`,
        texto: 'Hidrate-se com frequência e evite esforço físico pesado nos horários mais secos da tarde.'
      };
    }
    dicas.push(
      {
        categoria: 'saude',
        rotuloCategoria: 'Saúde & Hidratação',
        icone: 'droplet',
        extremo: clima.umidade <= 25,
        titulo: 'Cuidados extras com garganta, nariz e olhos',
        texto: 'Beba água em pequenos goles o dia todo e use soro fisiológico para umedecer o nariz.'
      },
      {
        categoria: 'trabalho',
        rotuloCategoria: 'Equipamentos & Trabalho',
        icone: 'briefcase',
        extremo: false,
        titulo: 'Diminua o ritmo nas horas mais secas',
        texto: 'Entre 13h e 16h o ar fica mais seco e cansativo. Concentre tarefas pesadas no início da manhã.'
      }
    );
  }

  if (temFrioOuVento) {
    if (!temTempestade && !temCalor) {
      classeTema = 'cold';
      if (clima.ventoKmh >= 35 || clima.temp <= 14) {
        alerta = {
          nivel: 'warning',
          titulo: `FRIO E VENTO FORTE (${clima.temp} °C · Ventos de ${clima.ventoKmh} km/h)`,
          texto: 'Proteja o peito e as mãos contra o vento gelado e redobre a atenção com rajadas laterais.'
        };
      }
    }
    dicas.push(
      {
        categoria: 'saude',
        rotuloCategoria: 'Saúde & Hidratação',
        icone: 'shield',
        extremo: clima.temp <= 15,
        titulo: 'Vista-se em camadas e evite choque térmico',
        texto: 'Use blusa corta-vento por cima de roupas leves para adaptar ao entrar e sair de locais fechados.'
      },
      {
        categoria: 'seguranca',
        rotuloCategoria: 'Segurança na Rua',
        icone: 'wind',
        extremo: clima.ventoKmh >= 35,
        titulo: 'Atenção redobrada com rajadas de vento',
        texto: 'Segure firme o guidão ou volante em pontes, viadutos e avenidas abertas.'
      }
    );
  }

  if (dicas.length === 0) {
    classeTema = 'pleasant';
    dicas.push(
      {
        categoria: 'trabalho',
        rotuloCategoria: 'Equipamentos & Trabalho',
        icone: 'briefcase',
        extremo: false,
        titulo: 'Ótimo clima para adiantar entregas e serviços',
        texto: 'Com temperatura amena, o desgaste físico é menor. Aproveite para cumprir metas externas.'
      },
      {
        categoria: 'saude',
        rotuloCategoria: 'Saúde & Hidratação',
        icone: 'sun',
        extremo: false,
        titulo: 'Use protetor solar e mantenha a hidratação',
        texto: 'Os raios UV atravessam o céu nublado. Mantenha o protetor e a garrafa de água na rotina.'
      }
    );
  }

  const dicasUnicas = dicas
    .filter((item, idx, lista) => lista.findIndex((t) => t.titulo === item.titulo) === idx)
    .slice(0, 2);

  return { classeTema, alerta, dicas: dicasUnicas };
}

const icone = (nome, tamanho = 26, classe = '', preenchimento = 'none') =>
  `<svg class="${classe}" width="${tamanho}" height="${tamanho}" viewBox="0 0 24 24" fill="${preenchimento}" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[nome]}</svg>`;

const logotipo = (classe = '') =>
  `<div class="logo ${classe}" role="banner" lang="pt-BR" tabindex="-1">GUIA DO<br>TRAMPO</div>`;
const tituloTela = (texto) => `<h1 class="h1" tabindex="-1">${texto}</h1>`;
const botaoVoltar = `<button type="button" class="bb" data-back aria-label="Voltar para a tela anterior">${icone('back', 26)}<span>Voltar</span></button>`;

const campoTexto = (id, rotulo, valor = '', tipo = 'text', atributos = '') => `
  <div class="rel">
    <label class="lb" for="${id}">${rotulo}</label>
    <input id="${id}" class="in" type="${tipo}" value="${escaparHtml(valor)}" ${atributos}>
    ${tipo === 'password' ? `<button class="eye" data-eye aria-label="Mostrar senha digitada" aria-pressed="false" type="button">${icone('eye', 24)}</button>` : ''}
  </div>`;

const barraNavegacao = (abaAtiva) =>
  '<nav class="tb" aria-label="Menu principal do aplicativo">' +
  ABAS_NAVEGACAO.map(([destino, rotulo, ic]) =>
    `<button type="button" class="t${destino === abaAtiva ? ' on' : ''}" data-go="${destino}" data-tab ${destino === abaAtiva ? 'aria-current="page"' : ''}>${icone(ic)}<span>${rotulo}</span></button>`
  ).join('') +
  '</nav>';

const cartaoAtalho = (titulo, subtitulo, cor, destino, atributos = '') => `
  <button type="button" class="cd" data-go="${destino}" ${atributos}>
    <span class="sq" style="background:${cor}" aria-hidden="true"></span>
    <span style="flex:1"><b>${titulo}</b>${subtitulo ? `<br><span class="ms">${subtitulo}</span>` : ''}</span>
    ${icone('chev')}
  </button>`;

const interruptor = (ativo = true, rotulo = '') =>
  `<button type="button" class="tg" role="switch" aria-checked="${ativo}" aria-label="${rotulo}" data-tg><i></i></button>`;

const linhaConfig = (titulo, subtitulo, ativo = true) => `
  <div class="cd" style="justify-content:space-between">
    <span><b>${titulo}</b><br><span class="ms">${subtitulo}</span></span>
    ${interruptor(ativo, titulo)}
  </div>`;

const telaFeedback = (ic, titulo, texto, conteudo, aba) => `
  <section class="scr" id="conteudo-principal">
    <div class="mn">
      <div class="sp"></div>
      <div class="ei">${icone(ic, 44)}</div>
      ${tituloTela(`<span class="ct" style="display:block">${titulo}</span>`)}
      <p class="ms ct">${texto}</p>
      <div class="sp"></div>
      ${conteudo}
    </div>
    ${aba ? barraNavegacao(aba) : ''}
  </section>`;

function faixaOffline() {
  if (!estado.offline) return '';
  const pendentes = estado.filaContestacoesOffline.length;
  return `
    <div class="offline-pill" role="status" aria-live="polite">
      ${icone('wifiOff', 20)}
      <span>
        Modo sem internet ativo · Telas e guias funcionando offline${pendentes > 0 ? ` (${pendentes} pedido aguardando rede)` : ''}.
      </span>
    </div>`;
}

function controleAvatar(urlFoto, nome, bordaAlternativa = false) {
  const iniciais = escaparHtml(obterIniciais(nome));
  return `
    <div class="avatar-wrap">
      <button type="button" class="avatar-btn${bordaAlternativa ? ' alt-border' : ''}" data-act="escolherFoto" aria-label="Alterar foto de perfil. Formatos aceitos: JPG, PNG ou WEBP até 5MB.">
        ${
          urlFoto
            ? `<img src="${urlFoto}" alt="Foto de perfil de ${escaparHtml(nome)}" class="avatar-img">`
            : `<span class="avatar-initials" aria-hidden="true">${iniciais}</span>`
        }
      </button>
      <span class="avatar-badge" aria-hidden="true">${icone('camera', 18)}</span>
      <input type="file" id="avatar-input" accept="image/jpeg,image/png,image/webp" hidden>
    </div>`;
}

function cabecalhoGamificacao(vidas = 3) {
  const { xp, ofensivaDias } = estado.gamificacao;
  return `
    <div class="gamify-bar" role="region" aria-label="Seu progresso na trilha">
      <span class="gamify-pill pill-xp" aria-label="${xp} pontos de experiência">
        ${icone('star', 20, '', 'currentColor')}
        <span>${xp} XP</span>
      </span>
      <span class="gamify-pill pill-streak" aria-label="${ofensivaDias} dias seguidos de ofensiva">
        ${icone('flame', 20, '', 'currentColor')}
        <span>${ofensivaDias} ${ofensivaDias === 1 ? 'dia' : 'dias'}</span>
      </span>
      <span class="gamify-pill pill-hearts" aria-label="${vidas} de 3 vidas restantes">
        ${icone('heart', 20, '', 'currentColor')}
        <span>${vidas}/3</span>
      </span>
    </div>`;
}

function cardPenalidadeHome() {
  const { penalidade } = estado;
  if (!penalidade.ativa) return '';

  const rotuloBotao = penalidade.status === 'under_review'
    ? 'Acompanhar contestação em análise'
    : 'Solicitar Revisão Humana';

  return `
    <article class="penalty-box" role="alert">
      <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem">
        <span style="display:inline-flex;align-items:center;gap:0.4rem;font-weight:700">
          ${icone('alert', 22)}
          <span>Restrição temporária nos pontos</span>
        </span>
        <span class="good-faith-badge">Presunção de Boa-Fé ativa</span>
      </div>
      <p style="margin:0;font-size:0.95rem">${penalidade.motivoSimples}</p>
      <div class="penalty-param">
        <b>Parâmetro exato registrado:</b> ${penalidade.parametroRegra} (${penalidade.aplicadaEm}).
      </div>
      <button type="button" class="pb" data-go="contestar">${rotuloBotao}</button>
    </article>`;
}

function secaoDescubraMais() {
  const itensFiltrados = estado.categoriaDescubra === 'Todos'
    ? GUIAS_DESCUBRA
    : GUIAS_DESCUBRA.filter((item) => item.categoria === estado.categoriaDescubra);

  return `
    <section class="discover-section" aria-labelledby="titulo-descubra-mais">
      <div>
        <h2 id="titulo-descubra-mais" class="h2">Descubra mais</h2>
        <p class="ms" style="font-size:0.9375rem">Dicas, direitos e serviços úteis para o seu dia</p>
      </div>

      <div class="discover-filters" role="group" aria-label="Filtrar dicas por categoria">
        ${CATEGORIAS_DESCUBRA.map(
          (cat) => `
            <button
              type="button"
              class="sim-chip ${estado.categoriaDescubra === cat ? 'on' : ''}"
              data-discover-cat="${cat}"
              aria-pressed="${estado.categoriaDescubra === cat}"
            >
              ${cat}
            </button>`
        ).join('')}
      </div>

      <div class="discover-carousel" role="region" aria-label="Lista de guias e serviços rápidos">
        ${itensFiltrados
          .map(
            (item) => `
              <button
                type="button"
                class="discover-card"
                data-discover-open="${item.id}"
                aria-label="${item.categoria}: ${item.titulo}. ${item.resumo}. Toque para ler."
              >
                <div class="discover-card-top">
                  <span class="discover-icon-box" style="background:${item.corFundo}" aria-hidden="true">
                    ${icone(item.icone, 22)}
                  </span>
                  <span class="discover-tag">${item.categoria}</span>
                </div>
                <span class="discover-title">${item.titulo}</span>
                <span class="discover-summary">${item.resumo}</span>
                <span class="discover-cta">Ler guia rápido ${icone('chev', 18)}</span>
              </button>`
          )
          .join('')}
      </div>
    </section>`;
}

const TELAS = {
  welcome: () => `
    <section class="scr dk" id="conteudo-principal">
      ${logotipo()}
      <p style="font-size:1.25rem;line-height:1.6;margin:0">Conheça seus direitos<br>Cuide da sua saúde<br>Organize seu dinheiro</p>
      <div class="sp"></div>
      <button type="button" class="pb" data-act="entrarConvidado">Entrar sem cadastro</button>
      <button type="button" class="sb" data-go="login">Já tenho conta</button>
      <button type="button" class="lk" data-go="qintro" style="justify-content:center">Criar conta grátis</button>
      <button type="button" class="lk" data-go="privacidade" style="justify-content:center">Como usamos seus dados</button>
    </section>`,

  loading: () => `
    <section class="scr dk" id="conteudo-principal" aria-busy="true">
      ${logotipo()}
      <div class="sp"></div>
      <svg class="spin" width="52" height="52" viewBox="0 0 48 48" fill="none" stroke="#fff" stroke-width="5" role="img" aria-label="Carregando informações">
        <circle cx="24" cy="24" r="19" stroke-opacity=".3"/>
        <path d="M24 5a19 19 0 0 1 19 19" stroke-linecap="round"/>
      </svg>
      <p class="ms ct">Abrindo o aplicativo, aguarde…</p>
      <div class="sp"></div>
    </section>`,

  login: () => `
    <section class="scr dk" id="conteudo-principal">
      ${logotipo('lg')}
      ${tituloTela('Entrar na sua conta')}
      ${campoTexto('e', 'Seu e-mail', '', 'email', 'placeholder="exemplo@email.com" autocomplete="email" inputmode="email"')}
      ${campoTexto('p', 'Sua senha', '', 'password', 'placeholder="Digite sua senha" autocomplete="current-password"')}
      <p class="er" id="err" role="alert"></p>
      <button type="button" class="lk" style="align-self:flex-start" data-go="forgot">Esqueci minha senha</button>
      <button type="button" class="pb" data-act="fazerLogin">Entrar</button>
      <button type="button" class="sb" data-act="entrarConvidado">Entrar sem cadastro</button>
      <p class="ms">Sem cadastro, seus pontos não ficam salvos se você trocar de celular.</p>
      <button type="button" class="lk" data-go="qintro" style="justify-content:center">Criar conta grátis</button>
    </section>`,

  forgot: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      ${logotipo('lg')}
      ${tituloTela('Criar nova senha')}
      <fieldset class="grp">
        <legend class="lb">Onde você quer receber o código de 6 números?</legend>
        <div style="display:flex;gap:0.75rem">
          <button type="button" class="op on" data-sel="rc" aria-pressed="true" style="text-align:center">Por e-mail</button>
          <button type="button" class="op" data-sel="rc" aria-pressed="false" style="text-align:center">Por SMS no celular</button>
        </div>
      </fieldset>
      ${campoTexto('c', 'Digite seu e-mail ou número de celular', '', 'text', 'placeholder="exemplo@email.com ou (71) 90000-0000"')}
      <p class="er" id="err" role="alert"></p>
      <button type="button" class="pb" data-act="enviarCodigo">Enviar código</button>
    </section>`,

  code: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      ${logotipo('lg')}
      ${tituloTela('Digite o código')}
      <p class="ms">Enviamos 6 números para você. Para testar agora, digite <b>123456</b>.</p>
      ${campoTexto('c', 'Código de 6 números', '', 'text', 'inputmode="numeric" pattern="[0-9]*" autocomplete="one-time-code" maxlength="6" placeholder="000000"')}
      <p class="er" id="err" role="alert"></p>
      <button type="button" class="pb" data-act="validarCodigo">Confirmar código</button>
      <button type="button" class="lk" style="align-self:flex-start" data-act="reenviarCodigo">Enviar código de novo</button>
    </section>`,

  newpass: () => `
    <section class="scr dk" id="conteudo-principal">
      ${logotipo('lg')}
      ${tituloTela('Escolha uma nova senha')}
      ${campoTexto('n', 'Nova senha', '', 'password', 'placeholder="Pelo menos 8 letras ou números" autocomplete="new-password"')}
      ${campoTexto('m', 'Digite a nova senha de novo', '', 'password', 'placeholder="Repita a senha igual acima" autocomplete="new-password"')}
      <p class="ms">Use pelo menos 8 letras ou números.</p>
      <p class="er" id="err" role="alert"></p>
      <button type="button" class="pb" data-act="salvarNovaSenha">Salvar nova senha</button>
    </section>`,

  done: () => `
    <section class="scr dk" id="conteudo-principal">
      <div class="sp"></div>
      <div class="ei" style="background:#fff">${icone('check', 44)}</div>
      ${tituloTela('<span class="ct" style="display:block">Senha trocada com sucesso!</span>')}
      <p class="ms ct">Agora você já pode entrar usando sua nova senha.</p>
      <div class="sp"></div>
      <button type="button" class="pb" data-go="login">Ir para o início</button>
    </section>`,

  qintro: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      <div class="sp"></div>
      ${tituloTela('Vamos conhecer você em 6 perguntas rápidas.')}
      <p class="ms">Leva menos de 1 minuto. Se não quiser responder alguma, é só pular.</p>
      <div class="sp"></div>
      <button type="button" class="pb" data-act="iniciarOnboarding">Começar perguntas</button>
      <button type="button" class="lk" data-go="permn" style="justify-content:center">Pular todas as perguntas</button>
    </section>`,

  q: () => {
    const [pergunta, opcoes] = PERGUNTAS_ONBOARDING[estado.indicePerguntaOnboarding];
    const passo = estado.indicePerguntaOnboarding + 1;
    return `
      <section class="scr dk" id="conteudo-principal">
        <button type="button" class="bb" data-act="voltarOnboarding" aria-label="Voltar para a pergunta anterior">${icone('back', 26)}<span>Voltar</span></button>
        <p class="ms">Pergunta ${passo} de 6</p>
        <div class="pg" role="progressbar" aria-valuenow="${passo}" aria-valuemin="1" aria-valuemax="6" aria-label="Progresso: pergunta ${passo} de 6">
          <div style="width:${(passo * 100) / 6}%"></div>
        </div>
        <h1 class="h1" tabindex="-1">${pergunta}</h1>
        <div class="mn grid-cards" role="group" aria-label="Opções de resposta">
          ${opcoes.map((opcao) => `<button type="button" class="op" data-sel="q" aria-pressed="false">${opcao}</button>`).join('')}
        </div>
        <button type="button" class="lk" style="align-self:center" data-act="avancarOnboarding">Pular esta pergunta</button>
        <button type="button" class="pb" data-act="avancarOnboarding">Continuar</button>
      </section>`;
  },

  permn: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      <div class="sp"></div>
      ${tituloTela('Quer receber avisos para beber água e se proteger do sol?')}
      <p class="ms">Mandamos apenas avisos úteis no horário em que você está na rua trabalhando.</p>
      ${campoTexto('a', 'Começar avisos às', '07:00', 'time')}
      ${campoTexto('b', 'Parar avisos às', '18:00', 'time')}
      <div class="sp"></div>
      <button type="button" class="pb" data-go="perml">Sim, quero receber avisos</button>
      <button type="button" class="sb" data-go="perml">Agora não</button>
    </section>`,

  perml: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      <div class="sp"></div>
      ${tituloTela('Ver o clima e locais de apoio no seu bairro')}
      <p class="ms">Usamos sua localização só para mostrar onde beber água, ir ao banheiro e ver a previsão do tempo.</p>
      <div class="sp"></div>
      <button type="button" class="pb" data-go="signup">Permitir localização</button>
      <button type="button" class="sb" data-go="signup">Agora não</button>
      <button type="button" class="lk" data-go="signup" style="align-self:center">Digitar meu bairro manualmente</button>
    </section>`,

  signup: () => `
    <section class="scr dk" id="conteudo-principal">
      ${botaoVoltar}
      ${tituloTela('Guarde seus pontos')}
      <div class="mn">
        ${campoTexto('n', 'Seu nome', '', 'text', 'placeholder="Ex: João Silva" autocomplete="name"')}
        ${campoTexto('u', 'Nome de usuário (sem espaços)', '', 'text', 'placeholder="Ex: joaosilva" autocomplete="username" autocapitalize="none"')}
        ${campoTexto('e', 'Seu e-mail', '', 'email', 'placeholder="exemplo@email.com" autocomplete="email" inputmode="email"')}
        ${campoTexto('t', 'Celular com DDD', '', 'tel', 'placeholder="(71) 90000-0000" autocomplete="tel" inputmode="tel"')}
        ${campoTexto('p', 'Crie uma senha', '', 'password', 'placeholder="Pelo menos 8 letras ou números" autocomplete="new-password"')}
        <label class="ck">
          <input type="checkbox" id="ck">
          <span>Concordo em guardar meu e-mail, bairro e pontos neste aplicativo (LGPD art. 6°). Posso apagar tudo quando quiser.</span>
        </label>
        <p class="er" id="err" role="alert"></p>
      </div>
      <button type="button" class="pb" data-act="criarConta">Criar conta grátis</button>
      <button type="button" class="sb" data-act="entrarConvidado">Continuar sem conta</button>
      <p class="ms ct">Sem conta, seus pontos não ficam salvos.</p>
    </section>`,

  home: () => {
    const concluidos = estado.gamificacao.modulosConcluidos.length;
    const { clima } = estado;

    return `
      <section class="scr" id="conteudo-principal">
        <div class="mn">
          ${faixaOffline()}

          <header>
            <h1 class="h1" tabindex="-1">Tenha um<br><span class="pp">ótimo dia de trabalho</span>!</h1>
          </header>

          ${cardPenalidadeHome()}

          <button type="button" class="sos-btn" data-act="abrirSos" aria-label="Botão de Emergência SOS. Pedir ajuda urgente em caso de acidente, risco ou ameaça.">
            <span class="sos-badge" aria-hidden="true">
              ${icone('alert', 22)}
              <span>SOS</span>
            </span>
            <span style="flex:1">
              <b style="font-size:1.125rem;display:block">Pedir Ajuda Urgente (SOS)</b>
              <span style="font-size:0.9375rem;opacity:0.95">Acidente, ameaça, mal-estar ou perigo</span>
            </span>
            ${icone('chev')}
          </button>

          <button type="button" class="cd trail-home-card" data-go="trilha">
            <span class="sq" style="background:var(--primary);color:#fff" aria-hidden="true">${icone('star', 22, '', 'currentColor')}</span>
            <span class="trail-home-body">
              <b class="trail-home-title">Trilha de aprendizado · ${estado.gamificacao.xp} XP</b>
              <span class="ms trail-home-sub">${concluidos} de ${MODULOS_TRILHA.length} módulos concluídos · Ofensiva de ${estado.gamificacao.ofensivaDias} dias</span>
            </span>
            ${icone('chev')}
          </button>

          <button type="button" class="cd wn" data-go="clima" aria-label="Ver clima e dicas para ${clima.descricao}">
            <span style="display:flex;align-items:center;gap:0.4rem;font-weight:700">
              ${icone('sun', 20)}
              <span>${clima.descricao.toUpperCase()} · ${clima.temp} °C (UV ${clima.uv})</span>
            </span>
            Toque para ver dicas de proteção e rotina para hoje.
          </button>

          ${secaoDescubraMais()}

          <h2 class="h2">Guias rápidos para você</h2>
          <div class="grid-cards">
            ${cartaoAtalho('MEI e seus direitos', 'Aposentadoria e auxílio-doença', '#B7EBC0', 'content', 'data-topic="mei"')}
            ${cartaoAtalho('Organizar o dinheiro', 'Dicas para sobrar mais no mês', '#D9CBEA', 'content', 'data-topic="fin"')}
            ${cartaoAtalho('Cuidar da mente', 'Alívio do estresse no dia a dia', '#F4B5D0', 'content', 'data-topic="saude"')}
            ${cartaoAtalho('Locais de apoio perto de você', 'Água, banheiro e descanso', '#BFD9FF', 'apoio')}
          </div>
          <button type="button" class="lk" data-go="contestar" style="align-self:flex-start">Contestar penalidade ou avisar erro</button>
        </div>
        ${barraNavegacao('home')}
      </section>`;
  },

  discover_detail: () => {
    const item = GUIAS_DESCUBRA.find((guia) => guia.id === estado.itemDescubraSelecionado) || GUIAS_DESCUBRA[0];

    return `
      <section class="scr" id="conteudo-principal" style="padding-bottom:0;justify-content:flex-end">
        <button type="button" class="ov" data-back aria-label="Fechar guia rápido"></button>
        <div class="sh" role="dialog" aria-modal="true" aria-labelledby="titulo-discover-sheet">
          <div style="display:flex;align-items:center;justify-content:space-between;gap:0.5rem;margin-bottom:0.5rem">
            <span class="discover-tag">${item.categoria}</span>
            <button type="button" class="bb" style="margin:0" data-back aria-label="Fechar janela">${icone('x')}<span>Fechar</span></button>
          </div>

          <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:0.35rem">
            <span class="discover-icon-box" style="background:${item.corFundo};width:3rem;height:3rem" aria-hidden="true">
              ${icone(item.icone, 24)}
            </span>
            <h1 id="titulo-discover-sheet" class="h1" tabindex="-1" style="font-size:1.35rem">${item.titulo}</h1>
          </div>

          <p class="ms">${item.resumo}</p>

          <ul class="discover-bullets">
            ${item.passos
              .map(
                (passo, idx) => `
                  <li class="discover-bullet-item">
                    <span class="discover-bullet-dot" aria-hidden="true">${idx + 1}</span>
                    <span>${passo}</span>
                  </li>`
              )
              .join('')}
          </ul>

          <p class="ms" style="font-size:0.875rem;margin-top:0.75rem">Fonte: ${item.fonte}</p>

          <div style="display:flex;flex-direction:column;gap:0.625rem;margin-top:0.875rem">
            ${
              item.telaDestino
                ? `<button type="button" class="pb" data-discover-action="${item.id}">
                     <span>${item.textoAcao}</span>
                     ${icone('chev', 20)}
                   </button>`
                : ''
            }
            <div style="display:flex;gap:0.625rem">
              <button type="button" class="sb" style="flex:1" data-act="compartilharGuia">
                ${icone('share', 20)}
                <span>Compartilhar</span>
              </button>
              <button type="button" class="sb" style="flex:1;background:var(--surface-alt)" data-back>
                Entendi
              </button>
            </div>
          </div>
        </div>
      </section>`;
  },

  sos_confirm: () => `
    <section class="scr" id="conteudo-principal" style="background:rgba(18,10,66,.82);justify-content:center">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="titulo-sos-confirm">
        <div class="sos-timer" id="sos-count" aria-live="assertive" aria-atomic="true">${estado.sos.contagem}</div>
        <h1 id="titulo-sos-confirm" class="h1 ct" tabindex="-1" style="color:var(--danger)">Confirmar Pedido de Ajuda?</h1>
        <p class="ms ct">
          O painel de emergência será aberto em <b><span id="sos-sec-txt">${estado.sos.contagem}</span> segundos</b>. Se tocou sem querer, cancele agora.
        </p>
        <button type="button" class="pb dg" data-act="dispararSosAgora">
          ${icone('alert', 22)}
          <span>Enviar Agora</span>
        </button>
        <button type="button" class="sb" data-act="cancelarSos">Cancelar (foi sem querer)</button>
      </div>
    </section>`,

  sos_active: () => {
    const { statusLocalizacao, coordenadas, enderecoTexto, contatoConfianca } = estado.sos;

    const textoLocal = statusLocalizacao === 'loading'
      ? 'Buscando sua localização exata pelo GPS…'
      : statusLocalizacao === 'ready'
      ? `GPS ativo: ${coordenadas.lat.toFixed(5)}, ${coordenadas.lng.toFixed(5)}`
      : enderecoTexto;

    const linkMapa = coordenadas
      ? `https://maps.google.com/?q=${coordenadas.lat},${coordenadas.lng}`
      : 'https://maps.google.com/?q=Pituba,Salvador';

    const mensagemWhatsapp = encodeURIComponent(
      `EMERGÊNCIA! Preciso de ajuda urgente. Minha localização atual: ${linkMapa}`
    );

    return `
      <section class="scr" id="conteudo-principal">
        ${botaoVoltar}
        <div class="mn">
          <div class="cd" style="background:var(--danger-bg);border-color:var(--danger);border-left:6px solid var(--danger)">
            <span style="color:var(--danger)">${icone('pin', 28)}</span>
            <span style="flex:1">
              <b style="color:var(--danger-dark)">Sua localização atual</b><br>
              <span class="ms" id="sos-loc-text">${textoLocal}</span>
            </span>
          </div>

          ${tituloTela('Escolha como pedir ajuda')}

          <h2 class="h2">1. Ligar direto (ligação gratuita)</h2>
          <div class="sos-call-grid">
            <a href="tel:190" class="btn-link sos-call" aria-label="Ligar para Polícia Militar, número 190">
              <b>190</b>
              <span>Polícia</span>
            </a>
            <a href="tel:192" class="btn-link sos-call" aria-label="Ligar para Ambulância SAMU, número 192">
              <b>192</b>
              <span>SAMU</span>
            </a>
            <a href="tel:193" class="btn-link sos-call" aria-label="Ligar para Bombeiros, número 193">
              <b>193</b>
              <span>Bombeiros</span>
            </a>
          </div>

          <h2 class="h2">2. Avisar pessoa de confiança</h2>
          <a href="https://wa.me/${contatoConfianca.telefone}?text=${mensagemWhatsapp}" target="_blank" rel="noopener noreferrer" class="btn-link pb" style="background:#135930;border-color:#135930" data-act="avisarContatoSos">
            ${icone('phone', 22)}
            <span>Enviar localização no WhatsApp</span>
          </a>

          <h2 class="h2">3. Apoio ao trabalhador</h2>
          <button type="button" class="sb" style="border-color:var(--danger);color:var(--danger-dark)" data-act="acionarCentralSos">
            Acionar central de apoio da categoria
          </button>
        </div>
      </section>`;
  },

  clima: () => {
    const { clima } = estado;
    const { classeTema, alerta, dicas } = avaliarClimaEDicas(clima);

    return `
      <section class="scr scr-clima" id="conteudo-principal">
        <div class="mn-clima-static">
          <div>
            ${tituloTela('Tempo e cuidados')}
            <p class="ms" style="font-size:0.9rem">Bairro: ${escaparHtml(estado.perfil.bairro)}, Salvador · Atualizado ${clima.atualizadoEm}</p>
          </div>

          <div class="weather-hero ${classeTema} ct">
            <div style="font-size:clamp(2.2rem, 9vw, 2.75rem);font-weight:700;line-height:1.05">${clima.temp} °C</div>
            <div style="font-size:0.95rem"><b>${clima.descricao}</b> · Sensação de ${clima.sensacao} °C</div>

            <div class="weather-metrics" role="group" aria-label="Detalhes do clima atual">
              <div class="weather-metric-pill">
                <span>Índice UV</span>
                <b>${clima.uv}</b>
              </div>
              <div class="weather-metric-pill">
                <span>Umidade</span>
                <b>${clima.umidade}%</b>
              </div>
              <div class="weather-metric-pill">
                <span>Vento</span>
                <b>${clima.ventoKmh} km/h</b>
              </div>
            </div>
          </div>

          ${
            alerta
              ? `<article class="weather-alert-banner ${alerta.nivel === 'danger' ? 'danger' : ''}" role="alert">
                   <span style="flex-shrink:0;margin-top:0.1rem">${icone('alert', 20)}</span>
                   <div>
                     <b style="display:block">${alerta.titulo}</b>
                     <span>${alerta.texto}</span>
                   </div>
                 </article>`
              : ''
          }

          <div class="weather-guidance-list" role="region" aria-label="Orientações para trabalhar agora">
            ${dicas
              .map(
                (dica) => `
                <article class="tip-card-static ${dica.extremo ? 'extreme' : ''}">
                  <span class="tip-cat ${dica.categoria}">
                    ${icone(dica.icone, 14)}
                    <span>${dica.rotuloCategoria}</span>
                  </span>
                  <b style="font-size:0.95rem">${dica.titulo}</b>
                  <p class="ms" style="font-size:0.875rem;line-height:1.35">${dica.texto}</p>
                </article>`
              )
              .join('')}
          </div>

          <div class="sim-box" role="group" aria-labelledby="titulo-simular-condicao">
            <p id="titulo-simular-condicao" class="sim-box-title">Simular outra condição</p>
            <div class="sim-chips-grid">
              ${Object.values(CENARIOS_CLIMA)
                .map(
                  (cenario) => `
                  <button
                    type="button"
                    class="sim-chip ${clima.id === cenario.id ? 'on' : ''}"
                    data-weather-preset="${cenario.id}"
                    aria-pressed="${clima.id === cenario.id}"
                  >
                    ${cenario.rotulo}
                  </button>`
                )
                .join('')}
            </div>
          </div>
        </div>
        ${barraNavegacao('clima')}
      </section>`;
  },

  apoio: () => `
    <section class="scr" id="conteudo-principal">
      ${botaoVoltar}
      <div class="mn">
        ${tituloTela('Locais de apoio')}
        <p class="ms">Perto do bairro: ${escaparHtml(estado.perfil.bairro)}</p>
        <ul class="list-clean grid-cards">
          ${LOCAIS_APOIO
            .map(([tipo, distancia], i) => `<li class="cd blk"><b>Local ${i + 1}: ${tipo}</b><br><span class="ms">${distancia} · aberto hoje</span></li>`)
            .join('')}
        </ul>
        <a href="tel:135" class="btn-link sb" aria-label="Ligar para a Central de Atendimento Social e Previdência, número 135">
          ${icone('phone', 20)}
          <span>Ligar para pedir ajuda (Central 135)</span>
        </a>
      </div>
    </section>`,

  content: () => {
    const [titulo, itens, fonte] = GUIAS_RAPIDOS[estado.topicoAtivo];
    return `
      <section class="scr" id="conteudo-principal">
        ${botaoVoltar}
        <div class="mn">
          ${faixaOffline()}
          ${tituloTela(titulo)}
          <p class="ms">Toque em cada assunto abaixo para ler a explicação:</p>
          ${itens
            .map(([pergunta, resposta], i) => `
              <button type="button" class="cd blk" data-faq="${i}" aria-expanded="false">
                <b>${pergunta} (toque para ler)</b>
                <span class="ms" style="display:none;margin-top:0.5rem"><br>${resposta}</span>
              </button>`)
            .join('')}
          ${estado.topicoAtivo === 'saude' ? '<article class="cd wn"><b>Precisa desabafar agora?</b><br>Ligue <b>188</b> (Centro de Valorização da Vida). A ligação é de graça e funciona dia e noite.</article>' : ''}
          <div class="sp"></div>
          <p class="ms">Fonte: ${fonte}. Funciona mesmo sem internet.</p>
        </div>
        ${barraNavegacao('home')}
      </section>`;
  },

  trilha: () => {
    const concluidos = estado.gamificacao.modulosConcluidos;
    const totalModulos = MODULOS_TRILHA.length;
    const percentualGeral = Math.round((concluidos.length / totalModulos) * 100);

    const cartoesModulos = MODULOS_TRILHA.map((mod, idx) => {
      const concluido = concluidos.includes(mod.id);
      const desbloqueado = idx === 0 || concluidos.includes(MODULOS_TRILHA[idx - 1].id);
      const classeStatus = concluido ? 'done' : desbloqueado ? 'current' : 'locked';
      const rotuloStatus = concluido ? 'Concluído' : desbloqueado ? 'Disponível agora' : 'Bloqueado';
      const progressoModulo = concluido ? 100 : (estado.gamificacao.progressoPorModulo[mod.id] || 0);

      const iconeNo = concluido
        ? icone('checkSimple', 26)
        : desbloqueado
        ? `<span>${mod.numero}</span>`
        : icone('lock', 22);

      const conector = idx > 0
        ? `<div class="trail-connector ${concluidos.includes(MODULOS_TRILHA[idx - 1].id) ? 'done' : ''}" aria-hidden="true"></div>`
        : '';

      return `
        ${conector}
        <button
          type="button"
          class="trail-card ${classeStatus}"
          data-start-module="${idx}"
          ${!desbloqueado ? 'aria-disabled="true"' : ''}
          aria-label="Módulo ${mod.numero}: ${mod.titulo}. Status: ${rotuloStatus}."
        >
          <span class="trail-node" aria-hidden="true">${iconeNo}</span>
          <span style="flex:1">
            <span class="trail-badge">${rotuloStatus} · +${mod.xpBonus} XP</span>
            <b style="display:block;font-size:1.08rem">Módulo ${mod.numero}: ${mod.titulo}</b>
            <span class="ms" style="font-size:0.9375rem">${mod.subtitulo}</span>
            <div class="pg" style="margin-top:0.5rem;height:0.5rem" role="progressbar" aria-valuenow="${progressoModulo}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso do módulo: ${progressoModulo}%">
              <div style="width:${progressoModulo}%;background:${concluido ? 'var(--success)' : 'var(--primary)'}"></div>
            </div>
          </span>
          ${desbloqueado ? icone('chev') : ''}
        </button>`;
    }).join('');

    return `
      <section class="scr" id="conteudo-principal">
        ${cabecalhoGamificacao(3)}
        <div class="mn">
          ${tituloTela('Trilha de Aprendizado')}
          <div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:0.35rem">
              <span class="ms"><b>Progresso geral:</b> ${concluidos.length} de ${totalModulos} módulos</span>
              <b class="pp">${percentualGeral}%</b>
            </div>
            <div class="pg" role="progressbar" aria-valuenow="${percentualGeral}" aria-valuemin="0" aria-valuemax="100" aria-label="Progresso geral da trilha: ${percentualGeral}%">
              <div style="width:${percentualGeral}%"></div>
            </div>
          </div>

          <div class="trail-path">${cartoesModulos}</div>

          ${
            concluidos.length > 0
              ? `<button type="button" class="dmo" data-act="reiniciarTrilha">Reiniciar progresso da trilha (teste)</button>`
              : ''
          }
        </div>
        ${barraNavegacao('trilha')}
      </section>`;
  },

  quiz: () => {
    const modulo = MODULOS_TRILHA[estado.licao.indiceModulo];
    const totalPerguntas = modulo.perguntas.length;
    const perguntaAtual = modulo.perguntas[estado.licao.indicePergunta];
    const passo = estado.licao.indicePergunta + 1;
    const percentual = Math.round(((estado.licao.indicePergunta + (estado.licao.respondida ? 1 : 0.35)) / totalPerguntas) * 100);
    const acertou = estado.licao.opcaoSelecionada === perguntaAtual.correta;

    return `
      <section class="scr" id="conteudo-principal" style="padding-bottom:0">
        <div class="quiz-top">
          <button type="button" class="bb" data-act="sairLicao" aria-label="Sair da lição e voltar para a trilha">${icone('x', 24)}</button>
          <div class="pg" style="flex:1" role="progressbar" aria-valuenow="${passo}" aria-valuemin="1" aria-valuemax="${totalPerguntas}" aria-label="Pergunta ${passo} de ${totalPerguntas}">
            <div style="width:${percentual}%"></div>
          </div>
          <div class="quiz-hearts" aria-label="${estado.licao.vidas} de 3 vidas restantes">
            ${[1, 2, 3].map((v) => icone('heart', 22, '', v <= estado.licao.vidas ? 'currentColor' : 'none')).join('')}
          </div>
        </div>

        <p class="ms" style="margin:0"><b>Módulo ${modulo.numero}:</b> ${modulo.titulo} · Pergunta ${passo} de ${totalPerguntas}</p>

        <div class="cd blk" style="font-size:1.125rem;font-weight:700">
          <span tabindex="-1" id="qt">${perguntaAtual.enunciado}</span>
        </div>

        <div class="mn">
          <div class="grid-cards" role="radiogroup" aria-label="Escolha uma alternativa">
            ${perguntaAtual.opcoes
              .map((opcao, idx) => {
                const selecionada = estado.licao.opcaoSelecionada === idx;
                let classeOpcao = 'op';

                if (!estado.licao.respondida && selecionada) {
                  classeOpcao += ' on';
                } else if (estado.licao.respondida) {
                  if (idx === perguntaAtual.correta) classeOpcao += ' ok';
                  else if (selecionada) classeOpcao += ' bad';
                }

                return `
                  <button
                    type="button"
                    class="${classeOpcao}"
                    role="radio"
                    aria-checked="${selecionada}"
                    data-select-opt="${idx}"
                    ${estado.licao.respondida ? 'disabled' : ''}
                  >
                    ${opcao}
                  </button>`;
              })
              .join('')}
          </div>
        </div>

        ${
          !estado.licao.respondida
            ? `<div class="quiz-footer">
                 <button type="button" class="pb" data-act="verificarResposta" ${estado.licao.opcaoSelecionada === null ? 'disabled' : ''}>
                   Verificar resposta
                 </button>
               </div>`
            : `<div class="quiz-footer ${acertou ? 'ok' : 'bad'}" role="status" aria-live="polite">
                 <div>
                   <b style="font-size:1.1rem;display:flex;align-items:center;gap:0.4rem">
                     ${icone(acertou ? 'check' : 'alert', 20)}
                     <span>${acertou ? 'Excelente! Resposta certa (+20 XP)' : 'Ops! Resposta incorreta (-1 vida)'}</span>
                   </b>
                   ${
                     !acertou
                       ? `<span style="display:block;margin-top:0.25rem"><b>Resposta certa:</b> ${perguntaAtual.opcoes[perguntaAtual.correta]}</span>`
                       : ''
                   }
                   <span style="display:block;margin-top:0.35rem;font-size:0.95rem"><b>Dica rápida:</b> ${perguntaAtual.dica}</span>
                 </div>
                 <button type="button" class="pb ${acertou ? 'ok-btn' : 'dg'}" data-act="avancarLicao">
                   Continuar
                 </button>
               </div>`
        }
      </section>`;
  },

  result: () => {
    const modulo = MODULOS_TRILHA[estado.licao.indiceModulo];
    const proximoModulo = MODULOS_TRILHA[estado.licao.indiceModulo + 1];

    return `
      <section class="scr" id="conteudo-principal">
        <div class="mn">
          <div class="sp"></div>
          <div class="ei" style="background:#E4F5EA;color:var(--success)">${icone('check', 48)}</div>
          ${tituloTela('<span class="pp ct" style="display:block">Módulo Concluído!</span>')}
          <p class="ms ct">Você completou <b>${modulo.titulo}</b> e fortaleceu seu conhecimento na prática.</p>

          <div class="cd blk ct" style="font-size:1.15rem;border-color:var(--success);background:#F1FAF4">
            <b style="font-size:clamp(2rem, 8vw, 2.5rem);color:var(--success)">+${estado.licao.xpGanho} XP</b><br>
            <span>Acertos: <b>${estado.licao.acertos} de ${modulo.perguntas.length}</b> · Ofensiva: <b>${estado.gamificacao.ofensivaDias} dias</b></span>
          </div>

          ${
            proximoModulo
              ? `<article class="cd" style="border-color:var(--primary)">
                   <span class="sq" style="background:var(--primary);color:#fff" aria-hidden="true">${icone('star', 22, '', 'currentColor')}</span>
                   <span><b>Próximo módulo desbloqueado!</b><br><span class="ms">Módulo ${proximoModulo.numero}: ${proximoModulo.titulo}</span></span>
                 </article>`
              : `<article class="cd" style="border-color:var(--success);background:#F1FAF4">
                   <span class="sq" style="background:var(--success);color:#fff" aria-hidden="true">${icone('checkSimple', 22)}</span>
                   <span><b>Trilha 100% completa!</b><br><span class="ms">Você concluiu todos os módulos disponíveis.</span></span>
                 </article>`
          }
          <div class="sp"></div>
          <button type="button" class="pb" data-go="trilha">Continuar na trilha</button>
        </div>
        ${barraNavegacao('trilha')}
      </section>`;
  },

  gameover: () => {
    const modulo = MODULOS_TRILHA[estado.licao.indiceModulo];
    return `
      <section class="scr" id="conteudo-principal">
        <div class="mn">
          <div class="sp"></div>
          <div class="ei" style="background:var(--danger-bg);color:var(--danger)">${icone('heart', 44)}</div>
          ${tituloTela('<span class="ct" style="display:block">Suas vidas acabaram</span>')}
          <p class="ms ct">Não desanime! Errar faz parte do aprendizado. Suas 3 vidas já foram recarregadas para você tentar de novo.</p>
          <div class="sp"></div>
          <button type="button" class="pb" data-start-module="${estado.licao.indiceModulo}">Tentar Módulo ${modulo.numero} novamente</button>
          <button type="button" class="sb" data-go="trilha">Voltar para a trilha</button>
        </div>
      </section>`;
  },

  ranking: () => {
    const { abaRanking, gamificacao, perfil } = estado;
    const temModuloConcluido = gamificacao.modulosConcluidos.length > 0;

    return `
      <section class="scr" id="conteudo-principal">
        <div class="mn">
          <div class="sg" role="tablist" aria-label="Escolha entre Pontuação ou Desafios">
            <button type="button" role="tab" aria-selected="${!abaRanking}" class="${abaRanking ? '' : 'on'}" data-rk="0">Classificação</button>
            <button type="button" role="tab" aria-selected="${!!abaRanking}" class="${abaRanking ? 'on' : ''}" data-rk="1">Desafios do dia</button>
          </div>
          ${
            abaRanking
              ? `${tituloTela('Desafios do dia')}
                 <p class="ms">Complete as tarefas para ganhar mais XP e manter sua ofensiva.</p>
                 <article class="cd blk">
                   <b>Desafio de hoje</b><br>
                   Conclua 1 módulo da trilha para manter sua ofensiva de ${gamificacao.ofensivaDias} dias
                   <div class="pg" style="margin-top:0.75rem" role="progressbar" aria-valuenow="${temModuloConcluido ? 1 : 0}" aria-valuemin="0" aria-valuemax="1" aria-label="Progresso do desafio">
                     <div style="width:${temModuloConcluido ? 100 : 0}%"></div>
                   </div>
                   <span class="ms">${temModuloConcluido ? '1 de 1 concluído!' : '0 de 1 feita'}</span>
                 </article>`
              : `${tituloTela('Quem mais aprendeu na semana')}
                 <ol class="list-clean">
                   ${RANKING_SEMANAL.map(([usuario, nivel, xp], i) => `<li class="rk"><b>${i + 1}º</b><span>${usuario} · Nível ${nivel}</span><b>${xp} XP</b></li>`).join('')}
                   <li class="rk" style="background:var(--primary);color:#fff"><b>12º</b><span>@${escaparHtml(perfil.usuario)} · ${gamificacao.ofensivaDias}d ofensiva</span><b>${gamificacao.xp} XP</b></li>
                 </ol>
                 <p class="ms">Crie uma conta grátis para guardar sua posição.</p>`
          }
        </div>
        ${barraNavegacao('ranking')}
      </section>`;
  },

  menu: () => `
    <section class="scr" id="conteudo-principal" style="padding-bottom:0;justify-content:flex-end">
      <button type="button" class="ov" data-back aria-label="Fechar menu"></button>
      <div class="sh" role="dialog" aria-modal="true" aria-labelledby="titulo-menu">
        <div style="display:flex;align-items:center;justify-content:space-between">
          <h1 id="titulo-menu" class="h1" tabindex="-1">Menu</h1>
          <button type="button" class="bb" style="margin:0" data-back aria-label="Fechar menu">${icone('x')}<span>Fechar</span></button>
        </div>
        ${[
          ['Meu perfil', 'perfil'],
          ['Perguntas frequentes', 'duvidas'],
          ['Contestar penalidade ou avisar erro', 'contestar'],
          ['Horário dos avisos de água', 'lembretes'],
          ['Como usamos seus dados', 'privacidade']
        ]
          .map(([rotulo, destino]) => `<button type="button" class="rw" data-go="${destino}">${rotulo}${icone('chev')}</button>`)
          .join('')}
        <button type="button" class="rw" style="color:var(--danger)" data-go="excluir">Apagar minha conta${icone('chev')}</button>
        <button type="button" class="rw" data-go="sair">Sair da conta${icone('chev')}</button>
      </div>
    </section>`,

  perfil: () => {
    const { perfil, gamificacao, penalidade } = estado;

    return `
      <section class="scr" id="conteudo-principal">
        <div class="mn">
          <header class="hd">
            ${tituloTela('Meu perfil')}
            ${controleAvatar(perfil.fotoUrl, perfil.nome, false)}
            <b style="font-size:1.35rem;margin-top:0.25rem;text-align:center">${escaparHtml(perfil.nome)}</b>
            <span class="user-handle">@${escaparHtml(perfil.usuario)}</span>
            <span style="font-size:0.95rem;opacity:0.92">${gamificacao.xp} XP · Ofensiva de ${gamificacao.ofensivaDias} dias</span>
            <button type="button" class="hb" data-act="abrirEdicaoPerfil">Editar perfil</button>
          </header>

          ${
            penalidade.ativa
              ? `<article class="penalty-box" role="alert">
                   <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:0.4rem">
                     <b>${penalidade.xpRetido} XP pausados até ${penalidade.ateData}</b>
                     <span class="good-faith-badge">Presunção de Boa-Fé: Conta ativa</span>
                   </div>
                   <p style="margin:0;font-size:0.95rem">${penalidade.motivoSimples}</p>
                   <div class="penalty-param">
                     <b>Parâmetros exatos (sem caixa-preta):</b><br>
                     • Critério: ${penalidade.parametroRegra}<br>
                     • Registro: ${penalidade.aplicadaEm} · Protocolo: ${penalidade.protocolo}
                   </div>
                   <p class="ms" style="font-size:0.9rem;color:#1F1300">
                     Os avisos de clima, pontos de apoio e guias continuam liberados. Nenhuma suspensão definitiva ocorre sem revisão humana em até 48h.
                   </p>
                   <button type="button" class="pb" data-go="contestar">Solicitar Revisão Humana</button>
                 </article>`
              : ''
          }

          ${
            penalidade.status === 'upheld' && penalidade.parecerModerador
              ? `<article class="cd wn">
                   <b>Parecer final do moderador (${penalidade.protocolo}):</b><br>
                   ${escaparHtml(penalidade.parecerModerador)}
                 </article>`
              : ''
          }

          <h2 class="h2">Progresso nos módulos</h2>
          <div class="grid-cards">
            ${MODULOS_TRILHA.map((mod) => {
              const concluido = gamificacao.modulosConcluidos.includes(mod.id);
              const pct = concluido ? 100 : (gamificacao.progressoPorModulo[mod.id] || 0);
              return `
                <div class="cd blk">
                  <b>${mod.titulo}</b> · ${pct}% concluído
                  <div class="pg" style="margin-top:0.5rem" role="progressbar" aria-valuenow="${pct}" aria-valuemin="0" aria-valuemax="100" aria-label="${mod.titulo}: ${pct}% concluído">
                    <div style="width:${pct}%"></div>
                  </div>
                </div>`;
            }).join('')}
          </div>
          <p class="ms">Última atualização: hoje às 10:30</p>
          <button type="button" class="dmo" data-act="alternarPenalidade">
            Simular DEDT: ${penalidade.ativa ? 'encerrar restrição de teste' : 'aplicar restrição algorítmica (80 XP)'}
          </button>
        </div>
        ${barraNavegacao('menu')}
      </section>`;
  },

  editar: () => {
    const { perfil } = estado;
    const fotoExibida = perfil.fotoRascunhoUrl !== null ? perfil.fotoRascunhoUrl : perfil.fotoUrl;

    return `
      <section class="scr" id="conteudo-principal">
        ${botaoVoltar}
        <div class="mn">
          ${tituloTela('Editar perfil')}

          <div style="display:flex;flex-direction:column;align-items:center;gap:0.35rem;margin:0.25rem 0">
            ${controleAvatar(fotoExibida, perfil.nome, true)}
            <span class="ms" style="font-size:0.875rem">Toque na foto para alterar (JPG, PNG ou WEBP · máx. 5MB)</span>
          </div>

          ${campoTexto('n', 'Nome', perfil.nome, 'text', 'placeholder="Digite seu nome completo" autocomplete="name"')}

          <div class="rel">
            <label class="lb" for="u">Usuário</label>
            <div class="prefix-wrap">
              <span class="prefix-at" aria-hidden="true">@</span>
              <input id="u" class="in" type="text" value="${escaparHtml(perfil.usuario)}" placeholder="ex: joaosilva" autocomplete="username" autocapitalize="none" spellcheck="false">
            </div>
            <span class="ms" style="font-size:0.875rem;display:block;margin-top:0.25rem">Apenas letras minúsculas, números, ponto ou sublinhado (_), sem espaços.</span>
          </div>

          ${campoTexto('b', 'Seu bairro', perfil.bairro, 'text', 'autocomplete="address-level2"')}
          ${campoTexto('e', 'Seu e-mail', perfil.email, 'email', 'placeholder="exemplo@email.com" autocomplete="email" inputmode="email"')}
          ${campoTexto('t', 'Celular com DDD', perfil.telefone, 'tel', 'placeholder="(71) 90000-0000" autocomplete="tel" inputmode="tel"')}

          <p class="er" id="err" role="alert"></p>

          <button type="button" class="lk" style="align-self:flex-start" data-go="newpass">Trocar minha senha</button>
          <div class="sp"></div>

          <button type="button" class="pb" data-act="salvarPerfil" ${perfil.salvando ? 'disabled aria-busy="true"' : ''}>
            ${
              perfil.salvando
                ? `${icone('loader', 22, 'spin-inline')}<span>Salvando alterações…</span>`
                : '<span>Salvar alterações</span>'
            }
          </button>

          <button type="button" class="lk" style="color:var(--danger);align-self:center" data-go="excluir">Apagar minha conta</button>
        </div>
      </section>`;
  },

  excluir: () => `
    <section class="scr" id="conteudo-principal">
      ${botaoVoltar}
      <div class="mn">
        ${tituloTela('Apagar minha conta')}
        <article class="cd wn"><b>Atenção: você vai perder seus pontos.</b><br>Seus níveis e conquistas serão apagados para sempre.</article>
        <p class="ms">Seus dados serão excluídos em até 15 dias.</p>
        ${campoTexto('s', 'Digite sua senha para confirmar', '', 'password', 'autocomplete="current-password"')}
        <p class="er" id="err" role="alert"></p>
        <div class="sp"></div>
        <button type="button" class="pb dg" data-act="apagarConta">Confirmar e apagar conta</button>
        <button type="button" class="sb" data-back>Cancelar e manter conta</button>
      </div>
    </section>`,

  sair: () => `
    <section class="scr" id="conteudo-principal" style="background:rgba(18,10,66,.7);justify-content:center">
      <div class="modal-box" role="dialog" aria-modal="true" aria-labelledby="titulo-sair">
        <h1 id="titulo-sair" class="h1" tabindex="-1">Quer sair da sua conta?</h1>
        <p class="ms">Seus pontos ficam guardados. Você pode entrar de novo quando quiser.</p>
        <button type="button" class="pb" data-act="sairConta">Sim, sair agora</button>
        <button type="button" class="sb" data-back>Cancelar</button>
      </div>
    </section>`,

  contestar: () => {
    const { rascunhoContestacao, offline } = estado;

    return `
      <section class="scr" id="conteudo-principal">
        ${botaoVoltar}
        <div class="mn">
          ${faixaOffline()}
          ${tituloTela('Contestar penalidade ou avisar erro')}
          <p class="ms">Envie sua justificativa e anexe provas de defesa. Aplicamos a <b>Presunção de Boa-Fé</b> enquanto um moderador humano analisa seu caso.</p>

          <fieldset class="grp">
            <legend class="lb">1. Qual é o problema?</legend>
            ${CATEGORIAS_CONTESTACAO.map((cat) => {
              const selecionada = rascunhoContestacao.categoria === cat;
              return `<button type="button" class="op ${selecionada ? 'on' : ''}" data-appeal-cat="${escaparHtml(cat)}" aria-pressed="${selecionada}">${cat}</button>`;
            }).join('')}
          </fieldset>

          <div>
            <label class="lb" for="d">2. Descreva o ocorrido (máximo 280 caracteres)</label>
            <textarea id="d" class="in" maxlength="280" aria-describedby="cnt" placeholder="Ex: Estava em área alagada sem segurança para seguir viagem…">${escaparHtml(rascunhoContestacao.descricao)}</textarea>
            <span class="ms" id="cnt">${rascunhoContestacao.descricao.length} de 280 letras digitadas</span>
          </div>

          <div>
            <span class="lb">3. Anexar provas de defesa (prints, fotos, áudios ou GPS)</span>
            <div class="proof-grid">
              <button type="button" class="proof-btn" data-act="escolherProva">
                ${icone('paperclip', 18)}
                <span>Anexar print/áudio</span>
              </button>
              <button type="button" class="proof-btn" data-act="anexarGpsProva">
                ${icone('pin', 18)}
                <span>Anexar GPS atual</span>
              </button>
            </div>
            <input type="file" id="appeal-proof-input" accept="image/*,audio/*" hidden>

            ${
              rascunhoContestacao.provas.length > 0
                ? `<ul class="proof-list" aria-label="Provas anexadas">
                     ${rascunhoContestacao.provas
                       .map(
                         (prova, idx) => `
                           <li class="proof-item">
                             <span><b>${prova.tipo === 'gps' ? 'GPS:' : 'Arquivo:'}</b> ${escaparHtml(prova.rotulo)}</span>
                             <button type="button" class="lk" style="min-height:2.2rem;padding:0 0.4rem;color:var(--danger)" data-remove-proof="${idx}" aria-label="Remover prova ${escaparHtml(prova.rotulo)}">Remover</button>
                           </li>`
                       )
                       .join('')}
                   </ul>`
                : '<p class="ms" style="font-size:0.875rem;margin-top:0.35rem">Nenhuma prova anexada ainda (opcional, mas agiliza a revisão humana).</p>'
            }
          </div>

          <p class="ms" style="font-size:0.9rem">
            ${
              offline
                ? '<b>Modo Offline-First:</b> seu pedido e provas serão salvos no aparelho e enviados assim que houver internet.'
                : 'Com internet ativa: transmissão imediata com protocolo.'
            }
          </p>

          <button type="button" class="pb" data-act="enviarContestacao">
            ${offline ? 'Salvar rascunho offline com protocolo' : 'Transmitir contestação agora'}
          </button>
        </div>
      </section>`;
  },

  protocolo: () => {
    const salvoOffline = estado.offline;
    return telaFeedback(
      'check',
      salvoOffline ? 'Salvo no aparelho (Offline-First)!' : 'Contestação protocolada!',
      salvoOffline
        ? 'Seu rascunho e provas foram guardados localmente e serão sincronizados automaticamente assim que a internet voltar.'
        : 'Recebemos sua justificativa e provas. Sua conta segue ativa pela regra de Presunção de Boa-Fé.',
      `<div class="cd blk ct">
         <span class="ms">Número do protocolo</span><br>
         <b style="font-size:1.375rem">${estado.penalidade.protocolo}</b>
         <p class="ms" style="margin-top:0.5rem;font-size:0.9375rem">
           <b>Prazos garantidos:</b> reavaliação preventiva em <b>até 1 hora</b> · revisão humana definitiva em <b>até 48 horas</b>.
         </p>
       </div>
       <button type="button" class="pb" data-go="home" data-reset>Voltar para o início</button>
       <button type="button" class="dmo" data-act="simularFalsoPositivo">Simular Moderador: Falso Positivo (devolver XP)</button>
       <button type="button" class="dmo" data-act="simularFalsoNegado">Simular Moderador: Falso Negado (parecer técnico)</button>`
    );
  },

  revertida: () =>
    telaFeedback(
      'check',
      'Penalidade anulada · Pontos devolvidos!',
      `O moderador confirmou falso positivo (${estado.penalidade.protocolo}). Seu histórico punitivo foi limpo, ${estado.penalidade.xpRetido} XP foram devolvidos e o caso foi enviado ao Auditor para calibrar o sistema.`,
      `<article class="cd blk" style="border-color:var(--success);background:#F1FAF4">
         <b>Resumo da reparação (DEDT E1–E4):</b><br>
         <span class="ms">
           • Registro punitivo removido do seu perfil.<br>
           • +${estado.penalidade.xpRetido} XP devolvidos automaticamente ao seu saldo.<br>
           • Caso encaminhado à Trilha de Auditoria de Equidade.
         </span>
       </article>
       <button type="button" class="pb" data-act="concluirReversao">Ver meu perfil atualizado</button>`,
      'menu'
    ),

  lembretes: () => `
    <section class="scr" id="conteudo-principal">
      ${botaoVoltar}
      <div class="mn">
        ${tituloTela('Horário dos avisos')}
        ${linhaConfig('Lembretes para beber água', 'Avisos em dias quentes e de sol forte.')}
        ${linhaConfig('Avisos de chuva e calor', 'Alertas para proteger seu dia de trabalho.')}
        <p class="lb" style="margin:0">Quero receber avisos entre:</p>
        ${campoTexto('a', 'Das', '07:00', 'time')}
        ${campoTexto('b', 'Até', '18:00', 'time')}
        <p class="ms">Quando estiver muito quente, avisamos a cada 1 hora.</p>
        <div class="sp"></div>
        <button type="button" class="pb" data-act="salvarConfig">Salvar horários</button>
      </div>
    </section>`,

  privacidade: () => `
    <section class="scr" id="conteudo-principal">
      ${botaoVoltar}
      <div class="mn">
        ${tituloTela('Como usamos seus dados')}
        <p class="ms">Seguimos a Minimização de Dados (LGPD art. 6°): guardamos apenas seu e-mail (se criar conta), seu bairro e seus pontos. Não pedimos nem guardamos dados médicos.</p>
        ${linhaConfig('Guardar meus pontos', 'Você pode desligar quando quiser.')}
        <button type="button" class="rw" data-act="infoPrivacidade">Ler regras completas de privacidade${icone('chev')}</button>
        <button type="button" class="rw" data-act="infoTermos">Regras de uso do aplicativo${icone('chev')}</button>
        <button type="button" class="rw" data-go="contestar">Falar com a equipe sobre meus dados${icone('chev')}</button>
        <div class="sp"></div>
        <button type="button" class="sb dg" style="background:#fff;color:var(--danger)" data-go="excluir">Apagar todos os meus dados</button>
      </div>
    </section>`,

  duvidas: () => `
    <section class="scr" id="conteudo-principal">
      ${botaoVoltar}
      <div class="mn">
        ${tituloTela('Perguntas frequentes')}
        <p class="ms">Toque na pergunta para ver a resposta:</p>
        ${PERGUNTAS_FAQ
          .map(([pergunta, resposta]) => `
            <button type="button" class="cd blk" data-faq aria-expanded="false">
              <b>${pergunta}</b>
              <span class="ms" style="display:none;margin-top:0.5rem"><br>${resposta}</span>
            </button>`)
          .join('')}
        <div class="sp"></div>
        <button type="button" class="sb" data-go="contestar">Falar com a equipe de ajuda</button>
      </div>
    </section>`
};

function renderizar() {
  const app = $('#app');
  app.innerHTML = TELAS[estado.tela]();
  const alvoFoco = app.querySelector('h1, #qt');
  alvoFoco?.focus({ preventScroll: true });
}

function navegarPara(proximaTela, substituir = false) {
  if (!substituir) estado.historico.push(estado.tela);
  estado.tela = proximaTela;
  renderizar();
}

function voltarTela() {
  if (estado.sos.timerId) {
    clearInterval(estado.sos.timerId);
    estado.sos.timerId = null;
  }
  if (estado.tela === 'editar') {
    estado.perfil.fotoRascunhoUrl = null;
    estado.perfil.salvando = false;
  }
  estado.tela = estado.historico.pop() || 'welcome';
  renderizar();
}

function carregarTela(destino) {
  estado.tela = 'loading';
  renderizar();
  setTimeout(() => {
    estado.historico = [];
    estado.tela = destino;
    renderizar();
  }, 950);
}

function exibirErroCampo(mensagem, idCampo) {
  document.querySelectorAll('.in[aria-invalid]').forEach((el) => {
    el.removeAttribute('aria-invalid');
    el.removeAttribute('aria-describedby');
  });

  const caixaErro = $('#err');
  if (caixaErro) caixaErro.textContent = mensagem;

  if (!idCampo) return;
  const campo = $('#' + idCampo);
  if (!campo) return;

  campo.setAttribute('aria-invalid', 'true');
  campo.setAttribute('aria-describedby', 'err');
  campo.focus();
}

function iniciarModuloTrilha(indiceModulo) {
  const desbloqueado = indiceModulo === 0 || estado.gamificacao.modulosConcluidos.includes(MODULOS_TRILHA[indiceModulo - 1].id);
  if (!desbloqueado) {
    notificar('Conclua o módulo anterior primeiro para desbloquear este!');
    return;
  }

  estado.licao = {
    indiceModulo,
    indicePergunta: 0,
    vidas: 3,
    opcaoSelecionada: null,
    respondida: false,
    acertos: 0,
    xpGanho: 0
  };
  navegarPara('quiz');
}

function verificarRespostaQuiz() {
  if (estado.licao.opcaoSelecionada === null || estado.licao.respondida) return;

  const modulo = MODULOS_TRILHA[estado.licao.indiceModulo];
  const pergunta = modulo.perguntas[estado.licao.indicePergunta];
  const acertou = estado.licao.opcaoSelecionada === pergunta.correta;

  estado.licao.respondida = true;

  if (acertou) {
    estado.licao.acertos += 1;
    estado.licao.xpGanho += 20;
  } else {
    estado.licao.vidas = Math.max(0, estado.licao.vidas - 1);
  }

  const pct = Math.round(((estado.licao.indicePergunta + 1) / modulo.perguntas.length) * 100);
  estado.gamificacao.progressoPorModulo[modulo.id] = Math.max(
    estado.gamificacao.progressoPorModulo[modulo.id] || 0,
    pct
  );

  renderizar();
}

function avancarQuiz() {
  if (!estado.licao.respondida) return;

  if (estado.licao.vidas <= 0) {
    navegarPara('gameover', true);
    return;
  }

  const modulo = MODULOS_TRILHA[estado.licao.indiceModulo];

  if (estado.licao.indicePergunta < modulo.perguntas.length - 1) {
    estado.licao.indicePergunta += 1;
    estado.licao.opcaoSelecionada = null;
    estado.licao.respondida = false;
    renderizar();
    return;
  }

  estado.licao.xpGanho += modulo.xpBonus;
  estado.gamificacao.xp += estado.licao.xpGanho;

  if (!estado.gamificacao.modulosConcluidos.includes(modulo.id)) {
    estado.gamificacao.modulosConcluidos.push(modulo.id);
  }
  estado.gamificacao.progressoPorModulo[modulo.id] = 100;

  const hoje = new Date().toISOString().slice(0, 10);
  if (estado.gamificacao.ultimaDataConcluida !== hoje) {
    estado.gamificacao.ofensivaDias += 1;
    estado.gamificacao.ultimaDataConcluida = hoje;
  }

  gravarStorage(STORAGE_KEYS.gamification, estado.gamificacao);
  navegarPara('result', true);
}

function processarFotoPerfil(arquivo) {
  if (!arquivo) return;

  if (!AVATAR_RULES.allowedTypes.includes(arquivo.type)) {
    const msg = 'Formato inválido. Escolha uma imagem JPG, PNG ou WEBP.';
    exibirErroCampo(msg);
    notificar(msg);
    return;
  }

  if (arquivo.size > AVATAR_RULES.maxBytes) {
    const msg = 'A imagem é muito grande. O tamanho máximo permitido é 5MB.';
    exibirErroCampo(msg);
    notificar(msg);
    return;
  }

  const leitor = new FileReader();
  leitor.onload = (evento) => {
    const urlBase64 = evento.target.result;

    if (estado.tela === 'perfil') {
      estado.perfil.fotoUrl = urlBase64;
      notificar('Foto de perfil atualizada!');
      renderizar();
      return;
    }

    estado.perfil.fotoRascunhoUrl = urlBase64;
    renderizar();
    notificar('Foto selecionada! Toque em "Salvar alterações" para confirmar.');
  };
  leitor.readAsDataURL(arquivo);
}

async function salvarPerfil() {
  if (estado.perfil.salvando) return;

  const nome = valorCampo('n').trim();
  const usuarioBruto = valorCampo('u').trim();
  const usuarioLimpo = normalizarUsuario(usuarioBruto);
  const bairro = valorCampo('b').trim();
  const email = valorCampo('e').trim();
  const telefone = valorCampo('t').trim();

  if (nome.length < 2) {
    return exibirErroCampo('Digite seu Nome com pelo menos 2 letras.', 'n');
  }
  if (usuarioLimpo.length < 3) {
    return exibirErroCampo('O Usuário precisa ter pelo menos 3 caracteres (letras ou números).', 'u');
  }
  if (usuarioBruto.toLowerCase() !== usuarioLimpo) {
    return exibirErroCampo('O Usuário não pode ter espaços ou símbolos especiais. Use apenas letras, números, ponto ou _.', 'u');
  }
  if (email && !emailValido(email)) {
    return exibirErroCampo('Digite um e-mail válido. Exemplo: nome@email.com', 'e');
  }

  estado.perfil.salvando = true;
  renderizar();

  try {
    await new Promise((resolve) => setTimeout(resolve, 750));

    estado.perfil.nome = nome;
    estado.perfil.usuario = usuarioLimpo;
    if (bairro) estado.perfil.bairro = bairro;
    if (email) estado.perfil.email = email;
    estado.perfil.telefone = telefone;

    if (estado.perfil.fotoRascunhoUrl !== null) {
      estado.perfil.fotoUrl = estado.perfil.fotoRascunhoUrl;
      estado.perfil.fotoRascunhoUrl = null;
    }

    estado.perfil.salvando = false;
    notificar('Perfil atualizado com sucesso!');
    voltarTela();
  } catch {
    estado.perfil.salvando = false;
    renderizar();
    exibirErroCampo('Não foi possível salvar agora. Verifique sua conexão e tente novamente.');
  }
}

function obterCoordenadasGps() {
  return new Promise((resolve) => {
    if (!('geolocation' in navigator)) {
      resolve(null);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (pos) => resolve({ lat: pos.coords.latitude, lng: pos.coords.longitude }),
      () => resolve(null),
      { enableHighAccuracy: true, timeout: 6000, maximumAge: 15000 }
    );
  });
}

async function acionarPainelEmergencia() {
  clearInterval(estado.sos.timerId);
  estado.sos.timerId = null;
  estado.sos.statusLocalizacao = 'loading';

  navegarPara('sos_active', true);

  const coords = await obterCoordenadasGps();
  estado.sos.coordenadas = coords;
  estado.sos.statusLocalizacao = coords ? 'ready' : 'error';

  if (estado.tela === 'sos_active') {
    renderizar();
  }
}

function iniciarContagemSos() {
  clearInterval(estado.sos.timerId);
  estado.sos.contagem = 5;
  navegarPara('sos_confirm');

  estado.sos.timerId = setInterval(() => {
    estado.sos.contagem -= 1;

    if (estado.sos.contagem <= 0) {
      acionarPainelEmergencia();
      return;
    }

    const elNumero = $('#sos-count');
    const elTexto = $('#sos-sec-txt');
    if (elNumero) elNumero.textContent = String(estado.sos.contagem);
    if (elTexto) elTexto.textContent = String(estado.sos.contagem);
  }, 1000);
}

function cancelarContagemSos() {
  clearInterval(estado.sos.timerId);
  estado.sos.timerId = null;
  notificar('Pedido de ajuda cancelado.');
  voltarTela();
}

const ACOES = {
  escolherProva: () => $('#appeal-proof-input')?.click(),

  anexarGpsProva: async () => {
    const coords = await obterCoordenadasGps();
    const rotulo = coords
      ? `${coords.lat.toFixed(5)}, ${coords.lng.toFixed(5)}`
      : `${estado.perfil.bairro}, Salvador (aproximado)`;
    estado.rascunhoContestacao.provas.push({ tipo: 'gps', rotulo });
    notificar('Geolocalização anexada como prova de defesa!');
    renderizar();
  },

  enviarContestacao: () => {
    const protocolo = `GT-${new Date().toISOString().slice(2, 10).replace(/-/g, '')}-0123`;
    estado.penalidade.protocolo = protocolo;

    if (estado.penalidade.ativa) {
      estado.penalidade.status = 'under_review';
    }

    if (estado.offline) {
      estado.filaContestacoesOffline.push({
        protocolo,
        categoria: estado.rascunhoContestacao.categoria,
        descricao: estado.rascunhoContestacao.descricao,
        provas: [...estado.rascunhoContestacao.provas],
        criadoEm: new Date().toISOString()
      });
      gravarStorage(STORAGE_KEYS.offlineAppeals, estado.filaContestacoesOffline);
    }

    estado.rascunhoContestacao.descricao = '';
    estado.rascunhoContestacao.provas = [];
    navegarPara('protocolo');
  },

  simularFalsoPositivo: () => {
    if (estado.penalidade.ativa) {
      estado.gamificacao.xp += estado.penalidade.xpRetido;
      gravarStorage(STORAGE_KEYS.gamification, estado.gamificacao);
    }
    estado.penalidade.ativa = false;
    estado.penalidade.status = 'reverted';
    estado.penalidade.logAuditoria.push({
      protocolo: estado.penalidade.protocolo,
      resultado: 'FALSO_POSITIVO_REVERTIDO',
      data: new Date().toISOString()
    });
    navegarPara('revertida');
  },

  simularFalsoNegado: () => {
    estado.penalidade.status = 'upheld';
    estado.penalidade.parecerModerador =
      'Após análise humana das provas e logs de telemetria, a restrição temporária foi mantida conforme os termos de uso até a data prevista.';
    estado.historico = ['home'];
    estado.tela = 'perfil';
    notificar('Parecer técnico do moderador registrado no seu perfil.');
    renderizar();
  },

  compartilharGuia: async () => {
    const item = GUIAS_DESCUBRA.find((guia) => guia.id === estado.itemDescubraSelecionado) || GUIAS_DESCUBRA[0];
    const texto = `${item.titulo} — ${item.resumo} (Guia do Trampo)`;

    if (navigator.share) {
      try {
        await navigator.share({ title: item.titulo, text: texto });
        return;
      } catch {}
    }

    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(texto);
        notificar('Dica copiada! Agora é só colar e enviar no WhatsApp.');
        return;
      } catch {}
    }

    notificar('Dica pronta para compartilhar com seus colegas!');
  },

  verificarResposta: verificarRespostaQuiz,
  avancarLicao: avancarQuiz,
  sairLicao: () => {
    estado.tela = 'trilha';
    renderizar();
  },
  reiniciarTrilha: () => {
    estado.gamificacao.modulosConcluidos = [];
    estado.gamificacao.progressoPorModulo = { mei: 0, fin: 0, saude: 0 };
    gravarStorage(STORAGE_KEYS.gamification, estado.gamificacao);
    notificar('Trilha reiniciada para testar novamente!');
    renderizar();
  },

  escolherFoto: () => $('#avatar-input')?.click(),
  abrirEdicaoPerfil: () => {
    estado.perfil.fotoRascunhoUrl = null;
    estado.perfil.salvando = false;
    navegarPara('editar');
  },
  salvarPerfil,

  abrirSos: iniciarContagemSos,
  dispararSosAgora: acionarPainelEmergencia,
  cancelarSos: cancelarContagemSos,
  avisarContatoSos: () => notificar('Abrindo mensagem de emergência com sua localização…'),
  acionarCentralSos: () => notificar('Central de apoio acionada! Nossa equipe recebeu sua localização.'),

  entrarConvidado: () => carregarTela('home'),
  fazerLogin: () =>
    emailValido(valorCampo('e'))
      ? carregarTela('home')
      : exibirErroCampo('Falta o @ ou o ponto no e-mail. Exemplo: nome@email.com', 'e'),

  enviarCodigo: () =>
    valorCampo('c').trim()
      ? navegarPara('code')
      : exibirErroCampo('Digite seu e-mail ou número de celular para receber o código.', 'c'),

  reenviarCodigo: () => notificar('Novo código enviado! Use 123456 para testar.'),

  validarCodigo: () =>
    valorCampo('c') === '123456'
      ? navegarPara('newpass')
      : exibirErroCampo('Esse código não confere. Digite os 6 números enviados (ou 123456 para testar).', 'c'),

  salvarNovaSenha: () => {
    const senha = valorCampo('n');
    if (senha.length < 8) return exibirErroCampo('A senha está curta. Digite pelo menos 8 letras ou números.', 'n');
    if (senha !== valorCampo('m')) return exibirErroCampo('As duas senhas estão diferentes. Digite a mesma senha nos dois campos.', 'm');
    estado.historico = [];
    navegarPara('done', true);
  },

  iniciarOnboarding: () => {
    estado.indicePerguntaOnboarding = 0;
    navegarPara('q');
  },

  avancarOnboarding: () => {
    if (estado.indicePerguntaOnboarding < PERGUNTAS_ONBOARDING.length - 1) {
      estado.indicePerguntaOnboarding += 1;
      renderizar();
      return;
    }
    navegarPara('permn');
  },

  voltarOnboarding: () => {
    if (estado.indicePerguntaOnboarding > 0) {
      estado.indicePerguntaOnboarding -= 1;
      renderizar();
      return;
    }
    voltarTela();
  },

  criarConta: () => {
    const nome = valorCampo('n').trim();
    const usuarioLimpo = normalizarUsuario(valorCampo('u'));
    if (!nome) return exibirErroCampo('Digite seu Nome para continuar.', 'n');
    if (usuarioLimpo.length < 3) return exibirErroCampo('Digite um Usuário válido (mínimo 3 letras ou números, sem espaços).', 'u');
    if (!emailValido(valorCampo('e'))) return exibirErroCampo('Digite um e-mail válido. Exemplo: nome@email.com', 'e');
    if (valorCampo('p').length < 8) return exibirErroCampo('A senha precisa ter pelo menos 8 letras ou números.', 'p');
    if (!$('#ck').checked) return exibirErroCampo('Marque a caixinha acima concordando em guardar seus dados.', 'ck');

    estado.perfil.nome = nome;
    estado.perfil.usuario = usuarioLimpo;
    estado.perfil.email = valorCampo('e').trim();
    estado.perfil.telefone = valorCampo('t').trim();

    notificar('Conta criada com sucesso!');
    carregarTela('home');
  },

  alternarOffline: () => {
    estado.offline = !estado.offline;
    if (!estado.offline) {
      sincronizarContestacoesPendentes();
    }
    renderizar();
  },

  alternarPenalidade: () => {
    estado.penalidade.ativa = !estado.penalidade.ativa;
    estado.penalidade.status = estado.penalidade.ativa ? 'restricted' : 'none';
    estado.penalidade.parecerModerador = '';
    renderizar();
  },

  concluirReversao: () => {
    estado.penalidade.ativa = false;
    estado.penalidade.status = 'reverted';
    estado.historico = ['home'];
    estado.tela = 'perfil';
    renderizar();
  },

  salvarConfig: () => {
    notificar('Alterações salvas!');
    voltarTela();
  },

  infoPrivacidade: () => notificar('Política LGPD: nenhum dado sensível ou médico é armazenado.'),
  infoTermos: () => notificar('Termos de Uso v1.0 · Uso gratuito para trabalhadores.'),

  apagarConta: () => {
    if (!valorCampo('s')) return exibirErroCampo('Digite sua senha acima para confirmar que quer apagar a conta.', 's');
    notificar('Pedido enviado. Sua conta será apagada.');
    estado.historico = [];
    estado.tela = 'welcome';
    renderizar();
  },

  sairConta: () => {
    estado.historico = [];
    estado.tela = 'welcome';
    renderizar();
  }
};

document.addEventListener('click', (e) => {
  const alvo = e.target;

  const btnCategoriaContestacao = alvo.closest('[data-appeal-cat]');
  if (btnCategoriaContestacao) {
    estado.rascunhoContestacao.categoria = btnCategoriaContestacao.dataset.appealCat;
    renderizar();
    return;
  }

  const btnRemoverProva = alvo.closest('[data-remove-proof]');
  if (btnRemoverProva) {
    estado.rascunhoContestacao.provas.splice(Number(btnRemoverProva.dataset.removeProof), 1);
    renderizar();
    return;
  }

  const btnFiltroDescubra = alvo.closest('[data-discover-cat]');
  if (btnFiltroDescubra) {
    estado.categoriaDescubra = btnFiltroDescubra.dataset.discoverCat;
    renderizar();
    return;
  }

  const btnAbrirDescubra = alvo.closest('[data-discover-open]');
  if (btnAbrirDescubra) {
    estado.itemDescubraSelecionado = btnAbrirDescubra.dataset.discoverOpen;
    navegarPara('discover_detail');
    return;
  }

  const btnAcaoDescubra = alvo.closest('[data-discover-action]');
  if (btnAcaoDescubra) {
    const item = GUIAS_DESCUBRA.find((guia) => guia.id === btnAcaoDescubra.dataset.discoverAction);
    if (item?.telaDestino) {
      if (item.topicoDestino) estado.topicoAtivo = item.topicoDestino;
      estado.historico = ['home'];
      estado.tela = item.telaDestino;
      renderizar();
    }
    return;
  }

  const btnCenarioClima = alvo.closest('[data-weather-preset]');
  if (btnCenarioClima) {
    const cenario = CENARIOS_CLIMA[btnCenarioClima.dataset.weatherPreset];
    if (cenario) {
      estado.clima = { ...cenario };
      renderizar();
    }
    return;
  }

  const btnModulo = alvo.closest('[data-start-module]');
  if (btnModulo) {
    iniciarModuloTrilha(Number(btnModulo.dataset.startModule));
    return;
  }

  const btnOpcaoQuiz = alvo.closest('[data-select-opt]');
  if (btnOpcaoQuiz) {
    if (estado.licao.respondida) return;
    estado.licao.opcaoSelecionada = Number(btnOpcaoQuiz.dataset.selectOpt);
    renderizar();
    return;
  }

  const btnAcao = alvo.closest('[data-act]');
  if (btnAcao) {
    ACOES[btnAcao.dataset.act]?.();
    return;
  }

  const btnSelecao = alvo.closest('[data-sel]');
  if (btnSelecao) {
    const grupo = btnSelecao.dataset.sel;
    document.querySelectorAll(`[data-sel="${grupo}"]`).forEach((btn) => {
      btn.classList.remove('on');
      btn.setAttribute('aria-pressed', 'false');
    });
    btnSelecao.classList.add('on');
    btnSelecao.setAttribute('aria-pressed', 'true');
    return;
  }

  const btnInterruptor = alvo.closest('[data-tg]');
  if (btnInterruptor) {
    const proximoEstado = btnInterruptor.getAttribute('aria-checked') !== 'true';
    btnInterruptor.setAttribute('aria-checked', String(proximoEstado));
    return;
  }

  const btnOlhoSenha = alvo.closest('[data-eye]');
  if (btnOlhoSenha) {
    const input = btnOlhoSenha.previousElementSibling;
    const oculta = input.type === 'password';
    input.type = oculta ? 'text' : 'password';
    btnOlhoSenha.setAttribute('aria-label', oculta ? 'Esconder senha digitada' : 'Mostrar senha digitada');
    btnOlhoSenha.setAttribute('aria-pressed', String(oculta));
    return;
  }

  const btnFaq = alvo.closest('[data-faq]');
  if (btnFaq) {
    const detalhe = btnFaq.querySelector('.ms');
    const aberto = btnFaq.getAttribute('aria-expanded') === 'true';
    btnFaq.setAttribute('aria-expanded', String(!aberto));
    detalhe.style.display = aberto ? 'none' : 'block';
    return;
  }

  const btnAbaRanking = alvo.closest('[data-rk]');
  if (btnAbaRanking) {
    estado.abaRanking = Number(btnAbaRanking.dataset.rk);
    renderizar();
    return;
  }

  if (alvo.closest('[data-back]')) {
    voltarTela();
    return;
  }

  const btnNavegacao = alvo.closest('[data-go]');
  if (btnNavegacao) {
    if (btnNavegacao.dataset.topic) estado.topicoAtivo = btnNavegacao.dataset.topic;

    if (btnNavegacao.dataset.tab !== undefined) {
      estado.historico = [];
      if (btnNavegacao.dataset.go === 'menu') {
        navegarPara('menu');
      } else {
        estado.tela = btnNavegacao.dataset.go;
        renderizar();
      }
      return;
    }

    navegarPara(btnNavegacao.dataset.go);
  }
});

document.addEventListener('change', (e) => {
  if (e.target.id === 'avatar-input') {
    processarFotoPerfil(e.target.files?.[0]);
    e.target.value = '';
    return;
  }

  if (e.target.id === 'appeal-proof-input') {
    const arquivo = e.target.files?.[0];
    if (arquivo) {
      estado.rascunhoContestacao.provas.push({ tipo: 'arquivo', rotulo: arquivo.name });
      notificar(`Prova "${arquivo.name}" anexada!`);
      renderizar();
    }
    e.target.value = '';
  }
});

document.addEventListener('input', (e) => {
  if (e.target.id === 'd') {
    estado.rascunhoContestacao.descricao = e.target.value;
    $('#cnt').textContent = `${e.target.value.length} de 280 letras digitadas`;
  }

  if (e.target.id === 'u') {
    const limpo = normalizarUsuario(e.target.value);
    if (e.target.value !== limpo) e.target.value = limpo;
  }
});

window.addEventListener('online', () => {
  estado.offline = false;
  sincronizarContestacoesPendentes();
  renderizar();
});

window.addEventListener('offline', () => {
  estado.offline = true;
  renderizar();
});

document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;

  if (estado.tela === 'sos_confirm') cancelarContagemSos();
  else if (['menu', 'sair', 'discover_detail'].includes(estado.tela)) voltarTela();
});

renderizar();