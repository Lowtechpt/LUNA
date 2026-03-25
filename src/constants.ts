import { Product } from "./types";

export interface Category {
  id: string;
  name: string;
  description: string;
}

export const CATEGORIES: Category[] = [
  { id: "hologramas", name: "Hologramas", description: "Tecnologia de projeção 3D que cria imagens flutuantes de alto impacto." },
  { id: "ecras-displays", name: "Ecrãs e Displays", description: "Soluções de visualização transparentes, flexíveis e de alta definição." },
  { id: "interatividade-vr", name: "Interatividade e VR", description: "Experiências imersivas que permitem ao utilizador interagir com o conteúdo." },
  { id: "solucoes-especiais", name: "Soluções Especiais", description: "Equipamentos e serviços únicos para ativações de marca memoráveis." }
];

export const PRODUCTS: (Product & { categoryId: string })[] = [
  {
    id: "holograma-suspenso",
    number: "01",
    categoryId: "hologramas",
    title: "Holograma Suspenso",
    description: "Solução com tecnologia de ventoinha LED de holograma capaz de projetar imagens, vídeos, textos e logótipos animados a flutuar no ar, criando uma experiência visual imersiva de alta definição.",
    features: ["Diâmetro: 70cm, 85cm ou 115cm", "Brilho: 1800 cd/m²", "Ângulo de visão: 160º", "Ativação via App"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/918374058?h=9ed7cc8d63"
  },
  {
    id: "holograma-suspenso-portatil",
    number: "02",
    categoryId: "hologramas",
    title: "Holograma Suspenso Portátil",
    description: "Versão portátil do holograma suspenso com proteção acrílica para maior segurança e mobilidade.",
    features: ["Diâmetro: 40cm", "Proteção acrílica transparente", "Fácil transporte", "Alto brilho e nitidez"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/676310916?h=7128d6b30f"
  },
  {
    id: "mochila-holograma",
    number: "03",
    categoryId: "hologramas",
    title: "Mochila Holograma Suspenso",
    description: "Combine a tecnologia de hologramas 3D com a portabilidade de uma mochila prática e resistente.",
    features: ["Diâmetro: 50cm", "Bateria interna de longa duração", "Mobilidade total", "Impacto imediato em movimento"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/1171617026?h=166f56b49b"
  },
  {
    id: "holobox",
    number: "04",
    categoryId: "ecras-displays",
    title: "Holobox",
    description: "Display LED Transparente que oferece uma experiência holográfica única, onde a pessoa ou o objeto aparece dentro da caixa.",
    features: ["Qualidade 4K", "Ecrã Touchscreen", "Profundidade tridimensional", "Transmissões ao vivo"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/816637083?h=fc374e5504"
  },
  {
    id: "vapor-agua",
    number: "05",
    categoryId: "ecras-displays",
    title: "Ecrã Holograma Vapor de Água",
    description: "Combina a projeção de vídeo com uma fina cortina de vapor, criando um efeito visual surpreendente.",
    features: ["Vapor seco (não molha)", "Interação tátil", "Efeito imersivo", "Área: 2.20m x 2m"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/781903412?h=7e25ef5793"
  },
  {
    id: "balcao-vapor",
    number: "06",
    categoryId: "ecras-displays",
    title: "Balcão Ecrã Vapor de Água",
    description: "Versão compacta da tecnologia de vapor de água, ideal para destacar objetos menores.",
    features: ["Área: 80cm x 60cm", "Qualidade nítida", "Efeito diferenciador", "Proximidade com o público"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/387484523?h=33eb2a0768"
  },
  {
    id: "ecra-transparente",
    number: "07",
    categoryId: "ecras-displays",
    title: "Ecrã Transparente",
    description: "Display que permite visualizar o produto real através do ecrã digital interativo.",
    features: ["32 ou 49 Polegadas", "Multitouch", "Fusão real/virtual", "Design versátil"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/160545248?h=f72b5c8ec0"
  },
  {
    id: "led-wall-transparente",
    number: "08",
    categoryId: "ecras-displays",
    title: "LED Wall Transparente",
    description: "Solução ideal para montras e eventos sem bloquear a visibilidade do espaço.",
    features: ["3m x 2m ou 4m x 2m", "Estrutura translúcida", "Animações dinâmicas", "Não bloqueia luz"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/366654693?h=87bafcc827"
  },
  {
    id: "led-wall-flexivel",
    number: "09",
    categoryId: "ecras-displays",
    title: "LED Wall Flexível 3D",
    description: "LED Wall de alta qualidade disponível em versões retangular, curva ou flexível 3D.",
    features: ["Resolução P 2.6mm", "Imagens vibrantes", "Versátil e impactante", "Qualquer contexto"],
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/224903352?h=c803b8a735"
  },
  {
    id: "cortina-holografica",
    number: "10",
    categoryId: "hologramas",
    title: "Cortina Holográfica & XL",
    description: "Holograma em grande escala para palcos, permitindo efeitos que interagem com elementos reais.",
    features: ["Até 10m x 5m", "Transparência total", "Toque futurista", "Integração com live performance"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/913683007?h=230bd2f371"
  },
  {
    id: "vitrina-holografica",
    number: "11",
    categoryId: "hologramas",
    title: "Vitrina Holográfica",
    description: "Exposição que combina o impacto emocional do holograma com a presença física do produto.",
    features: ["22'' (três faces)", "Integração de objetos reais", "Reforço de identidade", "Design elegante"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/160530712?h=45b9aee5ce"
  },
  {
    id: "promotor-virtual",
    number: "12",
    categoryId: "interatividade-vr",
    title: "Promotor(a) Virtual",
    description: "Solução inovadora que permite a comunicação constante com o público através de silhueta interativa.",
    features: ["Apresentação dinâmica", "Animações personalizadas", "Interação contínua", "Memorável"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/162118788?h=79b18d6299"
  },
  {
    id: "ecra-holograma-3d",
    number: "13",
    categoryId: "hologramas",
    title: "Ecrã Holograma 3D",
    description: "Experiências tridimensionais cativantes sem necessidade de óculos 3D.",
    features: ["8 e 16 polegadas", "Estereoscopia sem óculos", "Fusão virtual/real", "Impacto visual imediato"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/684489018?h=e99f56e265"
  },
  {
    id: "oculos-360-vr",
    number: "14",
    categoryId: "interatividade-vr",
    title: "Óculos 360º VR",
    description: "Visualização interativa e imersiva de conteúdos e filmes em 360º.",
    features: ["Conteúdos personalizados", "Imersão total", "Exploração detalhada", "Experiência única"],
    image: "https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/223765452?h=25a99d96c7"
  },
  {
    id: "realidade-aumentada",
    number: "15",
    categoryId: "interatividade-vr",
    title: "Realidade Aumentada",
    description: "Experiências interativas que sobrepõem elementos virtuais ao mundo real.",
    features: ["Brochuras interativas", "Mapas interativos", "Ativação em papel/chão", "Personalizado"],
    image: "https://images.unsplash.com/photo-1592477387300-70b449f27862?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/438400617?h=3608134343"
  },
  {
    id: "modulo-levitacao",
    number: "16",
    categoryId: "solucoes-especiais",
    title: "Módulo de Levitação",
    description: "Utiliza forças magnéticas para levitar uma plataforma estável exibindo artigos.",
    features: ["Até 1kg", "Design clean e futurista", "Levitação até 6cm", "Sofisticação"],
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/160676085?h=2d5fc42b15"
  },
  {
    id: "video-brochuras",
    number: "17",
    categoryId: "solucoes-especiais",
    title: "Vídeo Brochuras",
    description: "Campanhas de marketing onde o filme é reproduzido automaticamente ao abrir a brochura.",
    features: ["Normal / Caixa / Holograma", "Controlo de volume", "Recarregável USB", "Design personalizado"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/474144524?h=f90cb01f3f"
  },
  {
    id: "mupi-digital",
    number: "18",
    categoryId: "interatividade-vr",
    title: "Mupi Digital Interativo",
    description: "Experiência interativa de grande impacto com acesso a software e internet.",
    features: ["55 Polegadas", "Totalmente personalizável", "Ponto de contacto único", "Multitouch"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/957127710?h=256f0b7bb2"
  },
  {
    id: "mesa-digital",
    number: "19",
    categoryId: "interatividade-vr",
    title: "Mesa Digital Multitouch",
    description: "Transforma qualquer apresentação numa experiência digital colaborativa.",
    features: ["50 Polegadas", "Multitouch alta precisão", "Design moderno", "Colaborativo"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/938157676?h=336f1bfef6"
  },
  {
    id: "pelicula-alta-reflexao",
    number: "20",
    categoryId: "hologramas",
    title: "Película Holográfica Alta Reflexão",
    description: "Transforma qualquer apresentação numa experiência visual imersiva através de reflexão.",
    features: ["Reflexão estratégica", "Ilusão de flutuação", "Transmissões em direto", "Surpreendente"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/243569021?h=8cacab57c2"
  },
  {
    id: "pelicula-retroprojectada",
    number: "21",
    categoryId: "hologramas",
    title: "Película Holográfica Retroprojectada",
    description: "Permite projetar qualquer imagem em vidro ou acrílico transformando-os em ecrãs dinâmicos.",
    features: ["Alta definição", "Flexível e cativante", "Imagens nítidas", "Efeito inovador"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/320279778?h=1f5fdb5d6e"
  },
  {
    id: "piramide-holograma",
    number: "22",
    categoryId: "hologramas",
    title: "Pirâmide Holográfica",
    description: "Transforma qualquer smartphone ou tablet numa janela para o futuro.",
    features: ["Quatro faces transparentes", "Compacta e impactante", "Efeito 3D fascinante", "Cativante"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/403711067?h=a92abe16b2"
  },
  {
    id: "ecra-prateleira",
    number: "23",
    categoryId: "ecras-displays",
    title: "Ecrã Prateleira Retail",
    description: "Transforma prateleiras comuns em poderosos pontos de comunicação digital.",
    features: ["Design discreto", "Wi-Fi embutido", "Atualização em tempo real", "Impactante"],
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/400837255?h=f43b613ea9"
  },
  {
    id: "ecra-gama-profissional",
    number: "24",
    categoryId: "ecras-displays",
    title: "Ecrã Gama Profissional 24/7",
    description: "Ecrãs de alta qualidade concebidos para desempenho contínuo.",
    features: ["Full HD ou UHD", "Com/Sem Touchscreen", "Wi-Fi integrado", "Versátil"],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/353710284?h=2b94462acf"
  },
  {
    id: "video-mapping",
    number: "25",
    categoryId: "solucoes-especiais",
    title: "Video Mapping",
    description: "Transforma qualquer superfície num espetáculo visual mapeado em 3D.",
    features: ["Sem distorções", "Narrativas imersivas", "Ilusões óticas", "Qualquer superfície"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/543776898?h=c1f7554827"
  },
  {
    id: "scan-3d-360",
    number: "26",
    categoryId: "interatividade-vr",
    title: "Scan 3D 360º",
    description: "Viagem virtual imersiva realista que permite explorar ambientes em 4K.",
    features: ["Navegação virtual", "Integrado em web", "Conteúdos interativos", "Realismo 4K"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    videoUrl: "https://player.vimeo.com/video/412431159?h=65b18e8029"
  },
  {
    id: "producao-conteudos",
    number: "27",
    categoryId: "solucoes-especiais",
    title: "Produção de Conteúdos",
    description: "Equipa multidisciplinar para criação de vídeos, áudio, hologramas e animações.",
    features: ["2D/3D/360ºVR", "Software à medida", "Linguagem apelativa", "Criatividade total"],
    image: "https://rsb.pt/wp-content/uploads/2025/04/Captura-de-ecra-2025-04-10-181250.png"
  }
];

export const CLIENTS = [
  "JCDecaux", "Jeep", "Coca-Cola", "Auchan", "Vodafone", "MC Sonae", "Mercedes-Benz", "Sanofi", "Amorim", "Mylan", 
  "Virgin", "PepsiCo", "Bayer", "Suavecel", "Nestlé", "MSD", "Essilor", "Zurich", "Expo 2020 Dubai", "NAU", 
  "BPI", "Turismo de Portugal", "Lay's", "Natus", "Merck", "Astellas", "Outsystems", "Mind Source", "Teka", 
  "Salvador Caetano", "CGI", "FirstPharma", "Heritage Mill", "Wicanders", "Douro Azul", "Lipor", "Takeda", 
  "Critical Software", "Foquim Dental", "Pinopine", "Danosa", "Century 21", "Victoria", "Panike", "Continente", 
  "Ruffles", "MCoutinho", "Ariete", "Lemon Jelly"
];
