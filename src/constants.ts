import { Product } from "./types";
import { translations } from "./contexts/LanguageContext";

export interface Category {
  id: string;
  name: string;
  description: string;
}

// Helper function to get translated categories
export const getCategories = (lang: 'pt' | 'en'): Category[] => {
  if (lang === 'en') {
    return [
      { id: "hologramas", name: "Holograms", description: "3D projection technology that creates high-impact floating images." },
      { id: "ecras-displays", name: "Screens & Displays", description: "Transparent, flexible, and high-definition visualization solutions." },
      { id: "interatividade-vr", name: "Interactivity & VR", description: "Immersive experiences that allow users to interact with content." },
      { id: "solucoes-especiais", name: "Special Solutions", description: "Unique equipment and services for memorable brand activations." }
    ];
  }
  return CATEGORIES;
};

// Keep original for fallback/initial state
export const CATEGORIES: Category[] = [
  { id: "hologramas", name: "Hologramas", description: "Tecnologia de projeção 3D que cria imagens flutuantes de alto impacto." },
  { id: "ecras-displays", name: "Ecrãs e Displays", description: "Soluções de visualização transparentes, flexíveis e de alta definição." },
  { id: "interatividade-vr", name: "Interatividade e VR", description: "Experiências imersivas que permitem ao utilizador interagir com o conteúdo." },
  { id: "solucoes-especiais", name: "Soluções Especiais", description: "Equipamentos e serviços únicos para ativações de marca memoráveis." }
];

// Helper function to get translated products
export const getProducts = (lang: 'pt' | 'en'): (Product & { categoryId: string })[] => {
  if (lang === 'en') {
    return PRODUCTS_EN;
  }
  return PRODUCTS;
};

export const PRODUCTS: (Product & { categoryId: string })[] = [
  {
    id: "holograma-suspenso",
    number: "01",
    categoryId: "hologramas",
    title: "Holograma Suspenso",
    description: "Solução com tecnologia de ventoinha LED de holograma capaz de projetar imagens, vídeos, textos e logótipos animados a flutuar no ar, criando uma experiência visual imersiva de alta definição.",
    features: ["Diâmetro: 70cm, 85cm ou 115cm", "Brilho: 1800 cd/m²", "Ângulo de visão: 160º", "Ativação via App"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/656704815?h=3beeace4e7",
      "https://player.vimeo.com/video/918374058?h=9ed7cc8d63",
      "https://player.vimeo.com/video/809870702?h=604862fb81",
      "https://player.vimeo.com/video/753049331?h=511f70b7c5",
      "https://player.vimeo.com/video/1009133423?h=558fee89ab",
      "https://player.vimeo.com/video/993997653?h=d5e5f8560d",
      "https://player.vimeo.com/video/647270771?h=83f1152421",
      "https://player.vimeo.com/video/647270559?h=b6bbd11d60",
      "https://player.vimeo.com/video/455642273?h=ec210af553",
      "https://player.vimeo.com/video/455642119?h=3a922fc110",
      "https://player.vimeo.com/video/224867194?h=195709ba6a"
    ]
  },
  {
    id: "holograma-suspenso-portatil",
    number: "02",
    categoryId: "hologramas",
    title: "Holograma Suspenso Portátil",
    description: "Versão portátil do holograma suspenso com proteção acrílica para maior segurança e mobilidade.",
    features: ["Diâmetro: 40cm", "Proteção acrílica transparente", "Fácil transporte", "Alto brilho e nitidez"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/676310916?h=7128d6b30f", "https://player.vimeo.com/video/515775039?h=9cd9a920eb", "https://player.vimeo.com/video/410830984?h=adfab068d3"]
  },
  {
    id: "mochila-holograma",
    number: "03",
    categoryId: "hologramas",
    title: "Mochila Holograma Suspenso",
    description: "Combine a tecnologia de hologramas 3D com a portabilidade de uma mochila prática e resistente.",
    features: ["Diâmetro: 50cm", "Bateria interna de longa duração", "Mobilidade total", "Impacto imediato em movimento"],
    image: "https://images.unsplash.com/photo-1555680202-c86f0e12f086?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/1171617026?h=166f56b49b",
      "https://player.vimeo.com/video/993999763?h=bdcb402bc9",
      "https://player.vimeo.com/video/386205310?h=8672056006"
    ]
  },
  {
    id: "holobox",
    number: "04",
    categoryId: "hologramas",
    title: "Holobox",
    description: "Display LED Transparente que oferece uma experiência holográfica única, onde a pessoa ou o objeto aparece dentro da caixa.",
    features: ["Qualidade 4K", "Ecrã Touchscreen", "Profundidade tridimensional", "Transmissões ao vivo"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/816637083?h=fc374e5504",
      "https://player.vimeo.com/video/902216819?h=d59105cc98",
      "https://player.vimeo.com/video/901112764?h=94d1741bd3",
      "https://player.vimeo.com/video/1171595373?h=9764a2ca77",
      "https://player.vimeo.com/video/994015037?h=0366b6ae5c",
      "https://player.vimeo.com/video/1076438359?h=47bc0e50d2",
      "https://player.vimeo.com/video/1171594777?h=a9c3a458de",
      "https://player.vimeo.com/video/902770712?h=4b76478adc"
    ]
  },
  {
    id: "vapor-agua",
    number: "05",
    categoryId: "hologramas",
    title: "Ecrã Holograma Vapor de Água",
    description: "Combina a projeção de vídeo com uma fina cortina de vapor, criando um efeito visual surpreendente.",
    features: ["Vapor seco (não molha)", "Interação tátil", "Efeito imersivo", "Área: 2.20m x 2m"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/1130985278?h=014f464404",
      "https://player.vimeo.com/video/781903412?h=7e25ef5793",
      "https://player.vimeo.com/video/994004899?h=0786877c67",
      "https://player.vimeo.com/video/1171600293?h=ae02e448c4",
      "https://player.vimeo.com/video/243154646?h=eaab361562",
      "https://player.vimeo.com/video/367096413?h=b956b4961f",
      "https://player.vimeo.com/video/768058522?h=88f4647e36",
      "https://player.vimeo.com/video/808380973?h=0c91625482"
    ]
  },
  {
    id: "balcao-vapor",
    number: "06",
    categoryId: "hologramas",
    title: "Balcão Ecrã Vapor de Água",
    description: "Versão compacta da tecnologia de vapor de água, ideal para destacar objetos menores.",
    features: ["Área: 80cm x 60cm", "Qualidade nítida", "Efeito diferenciador", "Proximidade com o público"],
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/387484523?h=33eb2a0768"]
  },
  {
    id: "ecra-transparente",
    number: "07",
    categoryId: "ecras-displays",
    title: "Ecrã Transparente",
    description: "Display que permite visualizar o produto real através do ecrã digital interativo.",
    features: ["32 ou 49 Polegadas", "Multitouch", "Fusão real/virtual", "Design versátil"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/160545248?h=f72b5c8ec0",
      "https://player.vimeo.com/video/223765968?h=9fb63c96e6",
      "https://player.vimeo.com/video/781557630?h=8daec6cca2"
    ]
  },
  {
    id: "led-wall-transparente",
    number: "08",
    categoryId: "hologramas",
    title: "LED Wall Transparente",
    description: "Solução ideal para montras e eventos sem bloquear a visibilidade do espaço.",
    features: ["3m x 2m ou 4m x 2m", "Estrutura translúcida", "Animações dinâmicas", "Não bloqueia luz"],
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/366654693?h=87bafcc827",
      "https://player.vimeo.com/video/941972515?h=25e4703c11",
      "https://player.vimeo.com/video/809812557?h=9a7b1b2ee8",
      "https://player.vimeo.com/video/994007395?h=381ca5213a",
      "https://player.vimeo.com/video/224902240?h=58a26367bd",
      "https://player.vimeo.com/video/901908668?h=ab3c731c80",
      "https://player.vimeo.com/video/1021749800?h=b713a547ea",
      "https://player.vimeo.com/video/752160572?h=99ef28c06d"
    ]
  },
  {
    id: "led-wall-flexivel",
    number: "09",
    categoryId: "hologramas",
    title: "LED Wall Flexível 3D",
    description: "LED Wall de alta qualidade disponível em versões retangular, curva ou flexível 3D.",
    features: ["Resolução P 2.6mm", "Imagens vibrantes", "Versátil e impactante", "Qualquer contexto"],
    image: "https://images.unsplash.com/photo-1540575861501-7cf05a4b125a?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/224903352?h=c803b8a735"]
  },
  {
    id: "cortina-holografica",
    number: "10",
    categoryId: "hologramas",
    title: "Cortina Holográfica & XL",
    description: "Holograma em grande escala para palcos, permitindo efeitos que interagem com elementos reais.",
    features: ["Até 10m x 5m", "Transparência total", "Toque futurista", "Integração com live performance"],
    image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/376968297?h=702a524a22",
      "https://player.vimeo.com/video/913683007?h=230bd2f371",
      "https://player.vimeo.com/video/345493893?h=da8d2e7e41",
      "https://player.vimeo.com/video/595441155?h=3732a1f8de",
      "https://player.vimeo.com/video/350881506?h=56e2f8c5ae",
      "https://player.vimeo.com/video/345493869?h=045651e874",
      "https://player.vimeo.com/video/812420618?h=b0918b1eff",
      "https://player.vimeo.com/video/410826093?h=24036511ac"
    ]
  },
  {
    id: "vitrina-holografica",
    number: "11",
    categoryId: "hologramas",
    title: "Vitrina Holográfica",
    description: "Exposição que combina o impacto emocional do holograma com a presença física do produto.",
    features: ["22'' (três faces)", "Integração de objetos reais", "Reforço de identidade", "Design elegante"],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/160530712?h=45b9aee5ce",
      "https://player.vimeo.com/video/808376740?h=4bb6816672",
      "https://player.vimeo.com/video/323262046?h=4080aadec3",
      "https://player.vimeo.com/video/701204142?h=02194eca55"
    ]
  },
  {
    id: "promotor-virtual",
    number: "12",
    categoryId: "hologramas",
    title: "Promotor(a) Virtual",
    description: "Solução inovadora que permite a comunicação constante com o público através de silhueta interativa.",
    features: ["Apresentação dinâmica", "Animações personalizadas", "Interação contínua", "Memorável"],
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/162118788?h=79b18d6299",
      "https://player.vimeo.com/video/641466646?h=fda1345aac"
    ]
  },
  {
    id: "ecra-holograma-3d",
    number: "13",
    categoryId: "hologramas",
    title: "Ecrã Holograma 3D",
    description: "Experiências tridimensionais cativantes sem necessidade de óculos 3D.",
    features: ["8 e 16 polegadas", "Estereoscopia sem óculos", "Fusão virtual/real", "Impacto visual imediato"],
    image: "https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/684489018?h=e99f56e265",
      "https://player.vimeo.com/video/682961080?h=437c4c44f7"
    ]
  },
  {
    id: "oculos-360-vr",
    number: "14",
    categoryId: "interatividade-vr",
    title: "Óculos 360º VR",
    description: "Visualização interativa e imersiva de conteúdos e filmes em 360º.",
    features: ["Conteúdos personalizados", "Imersão total", "Exploração detalhada", "Experiência única"],
    image: "https://rsb.pt/wp-content/uploads/2024/07/MysticInvest_QSP_RSB_5.jpg",
    videoUrls: ["https://player.vimeo.com/video/223765452?h=25a99d96c7"]
  },
  {
    id: "realidade-aumentada",
    number: "15",
    categoryId: "interatividade-vr",
    title: "Realidade Aumentada",
    description: "Experiências interativas que sobrepõem elementos virtuais ao mundo real.",
    features: ["Brochuras interativas", "Mapas interativos", "Ativação em papel/chão", "Personalizado"],
    image: "https://images.unsplash.com/photo-1592477387300-70b449f27862?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/438400617?h=3608134343",
      "https://player.vimeo.com/video/395750842?h=fd379be915",
      "https://player.vimeo.com/video/323239550?h=d8c23bc1f4"
    ]
  },
  {
    id: "modulo-levitacao",
    number: "16",
    categoryId: "solucoes-especiais",
    title: "Módulo de Levitação",
    description: "Utiliza forças magnéticas para levitar uma plataforma estável exibindo artigos.",
    features: ["Até 1kg", "Design clean e futurista", "Levitação até 6cm", "Sofisticação"],
    image: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/160676085?h=2d5fc42b15"]
  },
  {
    id: "video-brochuras",
    number: "17",
    categoryId: "solucoes-especiais",
    title: "Vídeo Brochuras",
    description: "Campanhas de marketing onde o filme é reproduzido automaticamente ao abrir a brochura.",
    features: ["Normal / Caixa / Holograma", "Controlo de volume", "Recarregável USB", "Design personalizado"],
    image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/474144524?h=f90cb01f3f",
      "https://player.vimeo.com/video/470705112?h=787afd6806",
      "https://player.vimeo.com/video/223766660?h=2dbb88471d"
    ]
  },
  {
    id: "mupi-digital",
    number: "18",
    categoryId: "ecras-displays",
    title: "Mupi Digital Interativo",
    description: "Experiência interativa de grande impacto com acesso a software e internet.",
    features: ["55 Polegadas", "Totalmente personalizável", "Ponto de contacto único", "Multitouch"],
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/957127710?h=256f0b7bb2",
      "https://player.vimeo.com/video/943612973?h=d69f0ac069"
    ]
  },
  {
    id: "mesa-digital",
    number: "19",
    categoryId: "ecras-displays",
    title: "Mesa Digital Multitouch",
    description: "Transforma qualquer apresentação numa experiência digital colaborativa.",
    features: ["50 Polegadas", "Multitouch alta precisão", "Design moderno", "Colaborativo"],
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/938157676?h=336f1bfef6"]
  },
  {
    id: "pelicula-alta-reflexao",
    number: "20",
    categoryId: "hologramas",
    title: "Película Holográfica Alta Reflexão",
    description: "Transforma qualquer apresentação numa experiência visual imersiva através de reflexão.",
    features: ["Reflexão estratégica", "Ilusão de flutuação", "Transmissões em direto", "Surpreendente"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/243569021?h=8cacab57c2"]
  },
  {
    id: "pelicula-retroprojectada",
    number: "21",
    categoryId: "hologramas",
    title: "Película Holográfica Retroprojectada",
    description: "Permite projetar qualquer imagem em vidro ou acrílico transformando-os em ecrãs dinâmicos.",
    features: ["Alta definição", "Flexível e cativante", "Imagens nítidas", "Efeito inovador"],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/320279778?h=1f5fdb5d6e"]
  },
  {
    id: "piramide-holograma",
    number: "22",
    categoryId: "hologramas",
    title: "Pirâmide Holográfica",
    description: "Transforma qualquer smartphone ou tablet numa janela para o futuro.",
    features: ["Quatro faces transparentes", "Compacta e impactante", "Efeito 3D fascinante", "Cativante"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/403711067?h=a92abe16b2"]
  },
  {
    id: "ecra-prateleira",
    number: "23",
    categoryId: "ecras-displays",
    title: "Ecrã Prateleira Retail",
    description: "Transforma prateleiras comuns em poderosos pontos de comunicação digital.",
    features: ["Design discreto", "Wi-Fi embutido", "Atualização em tempo real", "Impactante"],
    image: "https://images.unsplash.com/photo-1534452203293-494d7ddbf7e0?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/400837255?h=f43b613ea9",
      "https://player.vimeo.com/video/515775039?h=9cd9a920eb"
    ]
  },
  {
    id: "ecra-gama-profissional",
    number: "24",
    categoryId: "ecras-displays",
    title: "Ecrã Gama Profissional 24/7",
    description: "Ecrãs de alta qualidade concebidos para desempenho contínuo.",
    features: ["Full HD ou UHD", "Com/Sem Touchscreen", "Wi-Fi integrado", "Versátil"],
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/353710284?h=2b94462acf"]
  },
  {
    id: "video-mapping",
    number: "25",
    categoryId: "hologramas",
    title: "Video Mapping",
    description: "Transforma qualquer superfície num espetáculo visual mapeado em 3D.",
    features: ["Sem distorções", "Narrativas imersivas", "Ilusões óticas", "Qualquer superfície"],
    image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=800",
    videoUrls: [
      "https://player.vimeo.com/video/1171333364?h=c64f99b584",
      "https://player.vimeo.com/video/543776898?h=c1f7554827",
      "https://player.vimeo.com/video/410826093?h=24036511ac",
      "https://player.vimeo.com/video/160554058?h=530131ad72",
      "https://player.vimeo.com/video/261856446?h=2c425360cf",
      "https://player.vimeo.com/video/423034331?h=39231a540f",
      "https://player.vimeo.com/video/577981127?h=3f3deac494",
      "https://player.vimeo.com/video/994012091?h=8a1d78fc24",
      "https://player.vimeo.com/video/543776849?h=c18ece24c6",
      "https://player.vimeo.com/video/913683007?h=230bd2f371"
    ]
  },
  {
    id: "scan-3d-360",
    number: "26",
    categoryId: "interatividade-vr",
    title: "Scan 3D 360º",
    description: "Viagem virtual imersiva realista que permite explorar ambientes em 4K.",
    features: ["Navegação virtual", "Integrado em web", "Conteúdos interativos", "Realismo 4K"],
    image: "https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&q=80&w=800",
    videoUrls: ["https://player.vimeo.com/video/412431159?h=65b18e8029"]
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

export const PRODUCTS_EN: (Product & { categoryId: string })[] = [
  {
    ...PRODUCTS[0],
    title: "Suspended Hologram",
    description: "Solution with LED fan hologram technology capable of projecting animated images, videos, texts, and logos floating in the air, creating an immersive high-definition visual experience.",
    features: ["Diameter: 70cm, 85cm or 115cm", "Brightness: 1800 cd/m²", "Viewing angle: 160º", "App activation"]
  },
  {
    ...PRODUCTS[1],
    title: "Portable Suspended Hologram",
    description: "Portable version of the suspended hologram with acrylic protection for greater safety and mobility.",
    features: ["Diameter: 40cm", "Transparent acrylic protection", "Easy transport", "High brightness and sharpness"]
  },
  {
    ...PRODUCTS[2],
    title: "Suspended Hologram Backpack",
    description: "Combine 3D hologram technology with the portability of a practical and resistant backpack.",
    features: ["Diameter: 50cm", "Long-lasting internal battery", "Total mobility", "Immediate impact on the move"]
  },
  {
    ...PRODUCTS[3],
    title: "Holobox",
    description: "Transparent LED Display that offers a unique holographic experience, where the person or object appears inside the box.",
    features: ["4K Quality", "Touchscreen Display", "Three-dimensional depth", "Live broadcasts"]
  },
  {
    ...PRODUCTS[4],
    title: "Water Vapor Hologram Screen",
    description: "Combines video projection with a fine curtain of vapor, creating a surprising visual effect.",
    features: ["Dry vapor (does not wet)", "Tactile interaction", "Immersive effect", "Area: 2.20m x 2m"]
  },
  {
    ...PRODUCTS[5],
    title: "Water Vapor Screen Counter",
    description: "Compact version of the water vapor technology, ideal for highlighting smaller objects.",
    features: ["Area: 80cm x 60cm", "Sharp quality", "Differentiating effect", "Proximity to the public"]
  },
  {
    ...PRODUCTS[6],
    title: "Transparent Screen",
    description: "Display that allows viewing the real product through the interactive digital screen.",
    features: ["32 or 49 Inches", "Multitouch", "Real/virtual fusion", "Versatile design"]
  },
  {
    ...PRODUCTS[7],
    title: "Transparent LED Wall",
    description: "Ideal solution for storefronts and events without blocking the visibility of the space.",
    features: ["3m x 2m or 4m x 2m", "Translucent structure", "Dynamic animations", "Does not block light"]
  },
  {
    ...PRODUCTS[8],
    title: "3D Flexible LED Wall",
    description: "High-quality LED Wall available in rectangular, curved, or 3D flexible versions.",
    features: ["P 2.6mm Resolution", "Vibrant images", "Versatile and impactful", "Any context"]
  },
  {
    ...PRODUCTS[9],
    title: "Holographic Curtain & XL",
    description: "Large-scale hologram for stages, allowing effects that interact with real elements.",
    features: ["Up to 10m x 5m", "Total transparency", "Futuristic touch", "Integration with live performance"]
  },
  {
    ...PRODUCTS[10],
    title: "Holographic Showcase",
    description: "Exhibition that combines the emotional impact of the hologram with the physical presence of the product.",
    features: ["22'' (three faces)", "Integration of real objects", "Identity reinforcement", "Elegant design"]
  },
  {
    ...PRODUCTS[11],
    title: "Virtual Promoter",
    description: "Innovative solution that allows constant communication with the public through an interactive silhouette.",
    features: ["Dynamic presentation", "Custom animations", "Continuous interaction", "Memorable"]
  },
  {
    ...PRODUCTS[12],
    title: "3D Hologram Screen",
    description: "Captivating three-dimensional experiences without the need for 3D glasses.",
    features: ["8 and 16 inches", "Glasses-free stereoscopy", "Virtual/real fusion", "Immediate visual impact"]
  },
  {
    ...PRODUCTS[13],
    title: "360º VR Glasses",
    description: "Interactive and immersive viewing of 360º content and films.",
    features: ["Custom content", "Total immersion", "Detailed exploration", "Unique experience"]
  },
  {
    ...PRODUCTS[14],
    title: "Augmented Reality",
    description: "Interactive experiences that overlay virtual elements on the real world.",
    features: ["Interactive brochures", "Interactive maps", "Paper/floor activation", "Customized"]
  },
  {
    ...PRODUCTS[15],
    title: "Levitation Module",
    description: "Uses magnetic forces to levitate a stable platform displaying items.",
    features: ["Up to 1kg", "Clean and futuristic design", "Levitation up to 6cm", "Sophistication"]
  },
  {
    ...PRODUCTS[16],
    title: "Video Brochures",
    description: "Marketing campaigns where the film plays automatically when opening the brochure.",
    features: ["Normal / Box / Hologram", "Volume control", "USB rechargeable", "Custom design"]
  },
  {
    ...PRODUCTS[17],
    title: "Interactive Digital Mupi",
    description: "High-impact interactive experience with access to software and the internet.",
    features: ["55 Inches", "Fully customizable", "Single point of contact", "Multitouch"]
  },
  {
    ...PRODUCTS[18],
    title: "Multitouch Digital Table",
    description: "Transforms any presentation into a collaborative digital experience.",
    features: ["50 Inches", "High precision multitouch", "Modern design", "Collaborative"]
  },
  {
    ...PRODUCTS[19],
    title: "High Reflection Holographic Film",
    description: "Transforms any presentation into an immersive visual experience through reflection.",
    features: ["Strategic reflection", "Illusion of floating", "Live broadcasts", "Surprising"]
  },
  {
    ...PRODUCTS[20],
    title: "Rear-Projected Holographic Film",
    description: "Allows projecting any image onto glass or acrylic, transforming them into dynamic screens.",
    features: ["High definition", "Flexible and captivating", "Sharp images", "Innovative effect"]
  },
  {
    ...PRODUCTS[21],
    title: "Holographic Pyramid",
    description: "Transforms any smartphone or tablet into a window to the future.",
    features: ["Four transparent faces", "Compact and impactful", "Fascinating 3D effect", "Captivating"]
  },
  {
    ...PRODUCTS[22],
    title: "Retail Shelf Screen",
    description: "Transforms ordinary shelves into powerful digital communication points.",
    features: ["Discreet design", "Built-in Wi-Fi", "Real-time update", "Impactful"]
  },
  {
    ...PRODUCTS[23],
    title: "24/7 Professional Range Screen",
    description: "High-quality screens designed for continuous performance.",
    features: ["Full HD or UHD", "With/Without Touchscreen", "Integrated Wi-Fi", "Versatile"]
  },
  {
    ...PRODUCTS[24],
    title: "Video Mapping",
    description: "Transforms any surface into a 3D mapped visual spectacle.",
    features: ["No distortions", "Immersive narratives", "Optical illusions", "Any surface"]
  },
  {
    ...PRODUCTS[25],
    title: "3D 360º Scan",
    description: "Realistic immersive virtual journey that allows exploring environments in 4K.",
    features: ["Virtual navigation", "Web integrated", "Interactive content", "4K Realism"]
  },
  {
    ...PRODUCTS[26],
    title: "Content Production",
    description: "Multidisciplinary team for creating videos, audio, holograms, and animations.",
    features: ["2D/3D/360ºVR", "Custom software", "Appealing language", "Total creativity"]
  }
];

export const CLIENTS = [
  { name: "JCDecaux", logo: "https://d3k1k88y44k0jy.cloudfront.net/wwwjcdecauxpt/s3fs-public/assets/themes/custom/jcd/html/generic/images/logo.png?VersionId=JHdbpkBj7rz5hvKRqCdH6tkepaQ69Q4E" },
  { name: "Jeep", logo: "https://www.jeep.pt/content/dam/jeep/crossmarket/logo/logo-jeep.png" },
  { name: "Coca-Cola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Coca-Cola_logo.svg" },
  { name: "Auchan", logo: "https://cdn.worldvectorlogo.com/logos/auchan-2.svg" },
  { name: "Vodafone", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Vodafone_Logo.svg" },
  { name: "MC Sonae", logo: "https://mc.sonae.pt/wp-content/uploads/2022/02/MC_Logo_POS_RGB-2-e1644941497514.png" },
  { name: "Mercedes-Benz", logo: "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg" },
  { name: "Sanofi", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Sanofi_logo.svg/960px-Sanofi_logo.svg.png" },
  { name: "Amorim", logo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Corticeira_Amorim_SGPS_Corporate_Logotype.png" },
  { name: "Mylan", logo: "https://logowik.com/content/uploads/images/mylan1950.logowik.com.webp" },
  { name: "Virgin", logo: "https://logos-world.net/wp-content/uploads/2023/02/Virgin-Logo.png" },
  { name: "PepsiCo", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/PepsiCo_logo.svg/960px-PepsiCo_logo.svg.png" },
  { name: "Bayer", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Logo_Bayer.svg/960px-Logo_Bayer.svg.png" },
  { name: "Suavecel", logo: "https://pbs.twimg.com/profile_images/600344225469886464/hyMuCDBn_400x400.png" },
  { name: "Nestlé", logo: "https://empresa.nestle.pt/themes/custom/da_vinci_code/logo.svg" },
  { name: "MSD", logo: "https://msd.pt/wp-content/themes/cex-wpvip-mhh-mhh2-mcc-theme/images/msd-logo.svg" },
  { name: "Essilor", logo: "https://upload.wikimedia.org/wikipedia/en/2/2a/Essilor_eye_logo.png" },
  { name: "Zurich", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Zurich_Insurance_Group_logo.svg" },
  { name: "Expo 2020 Dubai", logo: "https://res.cloudinary.com/dbe6ruqre/image/upload/v1774727274/d743fc44-7cd3-4045-9ef1-9727975064f1.png" },
  { name: "NAU Hotels & Resorts", logo: "https://scontent.fopo3-1.fna.fbcdn.net/v/t39.30808-6/352763885_811046690588375_3579190837519065811_n.png?_nc_cat=110&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=ZyFDhbCWDWsQ7kNvwGNT2JM&_nc_oc=Adr8ERbsQBfJx3koToEuJ1LsfokioMod6NsVffdHl4P8xeqU-c9lN83SdGgQvbiTr66KGPlWkf4jrGcKuTvVk-_a&_nc_zt=23&_nc_ht=scontent.fopo3-1.fna&_nc_gid=kvaipEkIb_7_R4Xy1b-eFQ&_nc_ss=7a32e&oh=00_AfzdVBSrkwo3cf99TrnTzoTH2BcfilJGqovw7ms9pS224w&oe=69CAFFE0" },
  { name: "BPI", logo: "https://upload.wikimedia.org/wikipedia/pt/c/c2/BPI.png" },
  { name: "Turismo de Portugal", logo: "https://www.turismodeportugal.pt/SiteCollectionImages/Logotipos/turismo-de-portugal-16x9.jpg" },
  { name: "Lay's", logo: "https://upload.wikimedia.org/wikipedia/commons/7/73/Lays_brand_logo.png" },
  { name: "Natus", logo: "https://d17eythm3w95tp.cloudfront.net/media/24616/conversions/img-0258-small.jpg" },
  { name: "Merck", logo: "https://logos-world.net/wp-content/uploads/2022/09/Merck-Logo.png" },
  { name: "Astellas", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Astellas_logo.svg" },
  { name: "Outsystems", logo: "https://blog.speak.social/wp-content/uploads/2021/07/outsystems-vector-logo-1.png" },
  { name: "Mind Source", logo: "https://res.cloudinary.com/dbe6ruqre/image/upload/v1774727138/ca02f05e-5947-4242-b166-5fca67fa44bb.png" },
  { name: "Teka", logo: "https://logos-world.net/wp-content/uploads/2023/01/Teka-Logo.png" },
  { name: "Salvador Caetano", logo: "https://upload.wikimedia.org/wikipedia/en/d/d4/Salvador_Caetano_Logo.svg" },
  { name: "CGI", logo: "https://h2cluster.fi/wp-content/uploads/2024/06/CGI_Logo2012_color.png" },
  { name: "FirstPharma", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOYDiaMKH2q40eX8NIQKKUMqPqI3wiwM6uLw&s" },
  { name: "Wicanders", logo: "https://sebara.com.tr/wp-content/uploads/2023/03/w.jpg" },
  { name: "Douro Azul", logo: "https://scontent.fopo3-2.fna.fbcdn.net/v/t39.30808-6/475623659_1041819817979015_1690684358748796277_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=1d70fc&_nc_ohc=l0M_80KhsRAQ7kNvwGH3fnJ&_nc_oc=Adrj-xbKqImpiY6k9K-TOzGHOESPq1vEgr0XWdZ4zqq8dkCmQro797gRrpfZEg9gsYmxY47tN69TnOyLcCqfOiyd&_nc_zt=23&_nc_ht=scontent.fopo3-2.fna&_nc_gid=vLVvbOJY97NN14OW_IPApw&_nc_ss=7a32e&oh=00_AfwEgbXuU9T2ve55WgpUJsxLhOtvkP2uAs862295SebaBQ&oe=69CB2232" },
  { name: "Lipor", logo: "https://www.lipor.pt/fotos/destaques/logoversoessassrgb_01_13122308285df3748f10af8.jpg" },
  { name: "Takeda", logo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Takeda_Pharmaceutical_Company_logo.svg" },
  { name: "Critical Software", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Critical_Software_Main_Logo.jpg" },
  { name: "Foquim Dental", logo: "https://foquimdental.com/wp-content/uploads/2019/04/FoquimDental-logo.png" },
  { name: "Pinopine", logo: "https://pinopine.com/wp-content/uploads/2025/12/pinopine-logo-1000x319.webp" },
  { name: "Danosa", logo: "https://www.ambienteportugal.pt/sites/default/files/styles/canvas_380x380/public/logo/danosa_logo_blue.png?itok=u2rwCJ7d" },
  { name: "Century 21", logo: "https://logos-world.net/wp-content/uploads/2023/06/Century-21-real-estate-Logo-500x281.png" },
  { name: "Victoria SMA", logo: "https://media.create.pt/media/assets/victoria_2_7a219297db.webp" },
  { name: "Panike", logo: "https://panike.pt/public/imgs/id/panike_negativo_V1.png" },
  { name: "Continente", logo: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Logo_Continente.svg" },
  { name: "Ruffles", logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Ruffles_brand_logo.png" },
  { name: "MCoutinho", logo: "https://www.sogilub.pt/wp-content/uploads/2023/02/MCOUTINHO_-1-1024x249.png" },
  { name: "Ariete", logo: "https://logos-world.net/wp-content/uploads/2023/01/Ariete-Logo-500x281.png" },
  { name: "Lemon Jelly", logo: "https://1971747289.rsc.cdn77.org/images/pre-header-image.png" }
];
