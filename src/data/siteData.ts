import { Treatment, Differential, ServiceStep, Testimonial, CaseStudy, Pillar } from '../types';

export const PHONE_NUMBER_WHATSAPP = '5511998795833'; // Direct WhatsApp number (11) 99879-5833
export const WHATSAPP_LINK = `https://wa.me/${PHONE_NUMBER_WHATSAPP}?text=${encodeURIComponent('Olá! Gostaria de agendar uma avaliação personalizada no Studio Amarante.')}`;

export const INSTAGRAM_HANDLE = '@studioamarante';
export const INSTAGRAM_URL = 'https://instagram.com/studioamarante';

export const PILLARS_DATA: Pillar[] = [
  {
    id: 'individualidade',
    title: 'Individualidade',
    subtitle: 'Análise Única',
    description: 'Nenhum rosto ou corpo possui a mesma estrutura. Mapeamos proporções, anatomia e histórico para desenhar o plano ideal.',
    icon: 'UserCheck',
  },
  {
    id: 'naturalidade',
    title: 'Naturalidade',
    subtitle: 'Sem Exageros',
    description: 'O objetivo da estética avançada é realçar contornos e revitalizar a pele, mantendo a autenticidade das suas expressões.',
    icon: 'Feather',
  },
  {
    id: 'precisao',
    title: 'Precisão',
    subtitle: 'Técnica Apurada',
    description: 'Dois decênios de prática clínica e monitoria de injetáveis garantem dosagem exata e aplicação de máxima maestria.',
    icon: 'Sparkles',
  },
  {
    id: 'seguranca',
    title: 'Segurança',
    subtitle: 'Nível Médico',
    description: 'Utilizamos apenas produtos regulamentados de alta pureza e biotecnologia certificada para total tranquilidade do paciente.',
    icon: 'ShieldCheck',
  },
];

export const TREATMENTS_DATA: Treatment[] = [
  {
    id: 'harmonizacao-facial',
    name: 'Harmonização Facial',
    category: 'Facial',
    shortDescription: 'Equilíbrio e proporção sutil das estruturas faciais com foco em valorizar os traços originais.',
    fullDescription: 'Procedimento estruturado que analisa as proporções áureas da face para preencher perdas volumétricas com ácido hialurônico de alta biocompatibilidade. Não busca alterar fisionomias, mas sim devolver sustentação, contorno e harmonia aos traços naturais.',
    benefits: [
      'Devolução de volume em áreas estratégicas (massa óssea/gordura)',
      'Definição sutil de mandíbula, queixo e maçãs do rosto',
      'Suavização de sulcos faciais mantendo expressões livres',
      'Melhoria do contorno e simetria sem efeito "engessado"',
    ],
    indications: 'Pacientes que desejam recuperar sustentação perdida com o tempo ou equilibrar proporções faciais mantendo total naturalidade.',
    iconName: 'Sparkles',
    popular: true,
  },
  {
    id: 'bioestimuladores-colageno',
    name: 'Bioestimuladores de Colágeno',
    category: 'Facial & Corporal',
    shortDescription: 'Estímulo biológico profundo para firmeza, densidade e rejuvenescimento gradual da pele.',
    fullDescription: 'Substâncias injetáveis biocompatíveis (como ácido poli-L-láctico e hidroxiapatita de cálcio) que reativam a produção natural de colágeno pelo próprio organismo. Proporciona um efeito firmeza progressivo e duradouro, restaurando a textura e o viço cutâneo.',
    benefits: [
      'Estímulo contínuo de colágeno tipo I e III por até 24 meses',
      'Efeito firmeza progressivo e extremamente natural',
      'Combate à flacidez facial, pescoço, colo e áreas corporais',
      'Melhoria visível da densidade e qualidade da pele',
    ],
    indications: 'Flacidez tissular facial e corporal, perda de firmeza e prevenção do envelhecimento biológico.',
    iconName: 'Activity',
    popular: true,
  },
  {
    id: 'injetaveis',
    name: 'Injetáveis Avançados',
    category: 'Facial',
    shortDescription: 'Aplicação milimétrica para prevenção e suavização de rugas dinâmicas e rejuvenescimento.',
    fullDescription: 'Técnicas refinadas de modulação muscular e hidratação profunda (Skinbooster / Exossomas). A aplicação é planejada por quem possui 20 anos de vivência clínica e atua como monitora de injetáveis, priorizando dinamismo facial e naturalidade.',
    benefits: [
      'Prevenção e suavização de rugas de expressão na testa e olhos',
      'Preservação da mobilidade e expressividade natural',
      'Hidratação injetável profunda para viço radiante',
      'Prevenção do envelhecimento estrutural precoce',
    ],
    indications: 'Prevenção e suavização de linhas de expressão, além de hidratação celular profunda.',
    iconName: 'Stethoscope',
    popular: true,
  },
  {
    id: 'rejuvenescimento-facial',
    name: 'Rejuvenescimento Facial Integral',
    category: 'Facial',
    shortDescription: 'Protocolo multidisciplinar que combina tecnologia, ativos de alta pureza e restauração tecidual.',
    fullDescription: 'Combinação sinérgica de tecnologias e técnicas dermatofuncionais para atuar em todas as camadas da pele: epiderme, derme e matriz extracelular. Trata manchas, poros, textura e perda de firmeza em um plano global integrado.',
    benefits: [
      'Renovação celular profunda e uniforme',
      'Uniformização do tom da pele e diminuição de hiperpigmentações',
      'Refinamento de poros dilatados e textura irregular',
      'Restauração do brilho e vitalidade da pele madura',
    ],
    indications: 'Pele desvitalizada, com rugas finas, manchas de sol, perda de viço e textura irregular.',
    iconName: 'Award',
  },
  {
    id: 'tratamentos-corporais',
    name: 'Tratamentos Corporais',
    category: 'Corporal',
    shortDescription: 'Escultura e firmeza corporal personalizada para contornos definidos e saúde tissular.',
    fullDescription: 'Protocolos corporais avançados focados em remodelação de contorno, combate à gordura localizada e tratamento da flacidez. Unimos bioestimulação, terapias manuais de alta precisão e ativos específicos.',
    benefits: [
      'Tratamento focado da gordura localizada e celulite',
      'Bioestimulação de colágeno para áreas de flacidez (abdômen, braços, coxas)',
      'Melhora da microcirculação e drenagem de retenção hídrica',
      'Remodelação progressiva do silhueta corporal',
    ],
    indications: 'Flacidez corporal, gordura localizada, celulite e busca por melhor definição do contorno físico.',
    iconName: 'Heart',
  },
  {
    id: 'pos-operatorio',
    name: 'Pós-operatório Especializado',
    category: 'Reabilitação',
    shortDescription: 'Acompanhamento minucioso de cirurgias plásticas para recuperação rápida e prevenção de fibroses.',
    fullDescription: 'Com respaldo em Fisioterapia Dermato-Funcional e Ortopedia, este protocolo acelera a reabsorção de edemas, previne a formação de fibroses e cicatrizes hipertróficas, proporcionando ao paciente conforto e máxima eficiência no resultado final da cirurgia.',
    benefits: [
      'Drenagem linfática cirúrgica especializada',
      'Prevenção e tratamento de fibroses e aderências teciduais',
      'Alívio de dores, rigidez e desconfortos pós-cirúrgicos',
      'Otimização do resultado estético final da cirurgia plástica',
    ],
    indications: 'Pacientes em pós-operatório de lipoaspiração, abdominoplastia, mamoplastia, rinoplastia e facelift.',
    iconName: 'ShieldCheck',
  },
  {
    id: 'fisioterapia-dermato-funcional',
    name: 'Fisioterapia Dermato-Funcional',
    category: 'Saúde & Estética',
    shortDescription: 'Ciência aplicada à restauração da função e saúde dos tecidos cutâneos e subcutâneos.',
    fullDescription: 'Atuação especializada baseada em avaliação funcional rigorosa do sistema tegumentar. Focada no tratamento de disfunções estéticas e dermatológicas com embasamento científico de nível pós-graduado.',
    benefits: [
      'Tratamento profundo de patologias teciduais e circulatórias',
      'Recuperação da elasticidade e integridade da pele',
      'Abordagem preventiva e terapêutica personalizada',
      'Equilíbrio entre fisiologia, beleza e saúde do corpo',
    ],
    indications: 'Pacientes buscando tratamento científico respaldado para disfunções cutâneas e corporais complexas.',
    iconName: 'Microscope',
  },
  {
    id: 'protocolos-personalizados',
    name: 'Protocolos Personalizados Studio Amarante',
    category: 'Exclusivo',
    shortDescription: 'Jornadas estéticas exclusivas criadas sob medida após rigoroso diagnóstico presencial.',
    fullDescription: 'O grande diferencial do Studio Amarante: uma combinação personalizada de tratamentos criada única e exclusivamente para as suas necessidades específicas. Unimos o melhor da tecnologia, injetáveis e cuidados continuados.',
    benefits: [
      'Diagnóstico completo em consulta de avaliação detalhada',
      'Sequência de procedimentos estruturada por etapas e prioridades',
      'Acompanhamento contínuo e ajustes em tempo real durante o plano',
      'Experiência exclusiva de acolhimento e resultados maximizados',
    ],
    indications: 'Qualquer pessoa que busca um plano estético completo, seguro, exclusivo e verdadeiramente sob medida.',
    iconName: 'UserCheck',
    popular: true,
  },
];

export const DIFFERENTIALS_DATA: Differential[] = [
  {
    number: '01',
    title: '20 anos de experiência',
    description: 'Uma trajetória sólida construída com conhecimento prático, especialização contínua e a realização de milhares de procedimentos com excelência.',
  },
  {
    number: '02',
    title: 'Abordagem personalizada',
    description: 'Cada paciente é único. Não trabalhamos com pacotes prontos, e sim com protocolos desenhados exclusivamente para a sua fisionomia e objetivos.',
  },
  {
    number: '03',
    title: 'Conhecimento técnico e científico',
    description: 'Formação sólida com pós-graduações em Fisioterapia Dermato-Funcional, Ortopedia e Injetáveis, aliada à atuação contínua como monitora de injetáveis.',
  },
  {
    number: '04',
    title: 'Foco em resultados naturais',
    description: 'Nossa filosofia central é valorizar e rejuvenescera sua beleza sem alterar suas feições ou apagar a sua identidade individual.',
  },
  {
    number: '05',
    title: 'Acolhimento e segurança',
    description: 'Ambiente exclusivo de alto padrão, atendimento transparente, biosegurança rigorosa e acompanhamento dedicado do início ao pós-procedimento.',
  },
];

export const SERVICE_STEPS_DATA: ServiceStep[] = [
  {
    number: '01',
    title: 'Avaliação Detalhada',
    description: 'Um olhar atento para compreender suas necessidades, fisionomia e objetivos de vida.',
    details: 'Análise minuciosa da estrutura facial/corporal, histórico de saúde e expectativas do paciente.',
  },
  {
    number: '02',
    title: 'Planejamento Estratégico',
    description: 'Definição de uma estratégia precisa e personalizada para o seu caso.',
    details: 'Mapeamento das intervenções prioritárias e escolha dos produtos/técnicas ideais.',
  },
  {
    number: '03',
    title: 'Protocolo Individualizado',
    description: 'Tratamentos executados com técnica apurada, segurança médica e máximo conforto.',
    details: 'Aplicação segura, gradual e confortável, garantindo precisão técnica em cada detalhe.',
  },
  {
    number: '04',
    title: 'Acompanhamento Próximo',
    description: 'Uma jornada de cuidado continuado, acompanhamento de evolução e retornos.',
    details: 'Avaliação dos resultados consolidados e orientações de manutenção para durabilidade.',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    name: 'Carolina M.',
    procedure: 'Harmonização Facial Sutil',
    comment: 'Eu tinha muito receio de fazer procedimentos e ficar "modificada". A Katia ouviu exatamente o que eu queria e fez um trabalho impecável! Amigos me elogiam dizendo que pareço descansada e radiante, sem saberem o que fiz. Isso é perfeição.',
    rating: 5,
    date: 'Há 2 semanas',
    avatarInitials: 'CM',
  },
  {
    id: '2',
    name: 'Luciana R.',
    procedure: 'Bioestimulador de Colágeno',
    comment: 'A experiência e a autoridade da Katia trazem uma paz gigantesca. Com 20 anos de área e como monitora de injetáveis, ela sabe exatamente onde aplicar. Minha pele ganhou um viço e uma firmeza incríveis!',
    rating: 5,
    date: 'Há 1 mês',
    avatarInitials: 'LR',
  },
  {
    id: '3',
    name: 'Patrícia S.',
    procedure: 'Pós-operatório & Dermato-Funcional',
    comment: 'Fiz lipo e mamoplastia e o atendimento pós-operatório com a Katia foi decisivo para minha recuperação rápida. Zero fibroses, sem dores e com um cuidado humano indescritível no Studio Amarante.',
    rating: 5,
    date: 'Há 3 semanas',
    avatarInitials: 'PS',
  },
  {
    id: '4',
    name: 'Renata B.',
    procedure: 'Protocolo Exclusivo Studio Amarante',
    comment: 'Lugar acolhedor, ambiente sofisticado e atendimento que faz a gente se sentir única. O Studio Amarante é um refúgio de beleza e cuidado de verdade.',
    rating: 5,
    date: 'Há 2 meses',
    avatarInitials: 'RB',
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Restauração de Sustentação Terço Médio',
    category: 'Harmonização Sutil',
    description: 'Tratamento focado na perda volumétrica e cansaço ao redor dos olhos e sulco nasogeniano.',
    protocolUsed: 'Aplicação estratégica de Ácido Hialurônico + Bioestimulador',
    focusArea: 'Maçãs do Rosto & Região Malar',
    timeframe: 'Efeito imediato + evolução em 30 dias',
    highlights: ['Resultado elegante sem volume excessivo', 'Suavização do aspecto cansado', 'Manutenção da expressividade do sorriso'],
  },
  {
    id: 'case-2',
    title: 'Recuperação de Densidade e Firmeza',
    category: 'Bioestimulação de Colágeno',
    description: 'Paciente de 45 anos apresentando leve flacidez no contorno mandibular e pescoço.',
    protocolUsed: 'Protocolo de Hidroxiapatita de Cálcio + Fotobiomodulação',
    focusArea: 'Contorno Mandibular & Cervical',
    timeframe: 'Evolução progressiva ao longo de 90 dias',
    highlights: ['Redefinição do contorno sem peso', 'Pele mais densa e elástica', 'Efeito duradouro de até 2 anos'],
  },
  {
    id: 'case-3',
    title: 'Rejuvenescimento Global do Olhar',
    category: 'Injetáveis Avançados',
    description: 'Suavização de rugas dinâmicas periorbitais e elevação leve da cauda da sobrancelha.',
    protocolUsed: 'Modulação Muscular Milimétrica + Skinbooster',
    focusArea: 'Terço Superior & Região Periocular',
    timeframe: '14 dias para resultado final',
    highlights: ['Olhar descansado e aberto', 'Sem paralisia artificial', 'Hidratação profunda da pele fina ocular'],
  },
];
