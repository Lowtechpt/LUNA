import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'pt' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const translations = {
  pt: {
    // Navbar
    'nav.home': 'Início',
    'nav.solutions': 'Soluções',
    'nav.technology': 'Tecnologia',
    'nav.contact': 'Contactos',
    'nav.cart': 'Cesto',
    
    // Home
    'home.hero.subtitle': 'BEM-VINDO À LUNA BY RSB',
    'home.hero.title1': 'É científica,',
    'home.hero.title2': 'mas já não é ficção.',
    'home.hero.desc1': 'é uma linha de equipamentos idealizada e comercializada exclusivamente pela RSB.',
    'home.hero.desc2': 'Tecnologia multimédia, holográfica e tridimensional de forte impacto visual.',
    'home.hero.cta': 'Explorar Soluções',
    'home.features.f1.title': 'Impacto Imediato',
    'home.features.f1.desc': 'Soluções desenhadas para captar a atenção em segundos, transformando espaços comuns em palcos de inovação.',
    'home.features.f2.title': 'Multidimensional',
    'home.features.f2.desc': 'Hologramas e projeções que desafiam a perceção física, quebrando a barreira entre o digital e o real.',
    'home.features.f3.title': 'Vanguarda Tecnológica',
    'home.features.f3.desc': 'Equipamentos exclusivos com as mais recentes inovações em ótica e engenharia de software.',
    'home.stats.projects': 'Projetos Entregues',
    'home.stats.clients': 'Clientes Satisfeitos',
    'home.stats.years': 'Anos de Experiência',
    'home.clients.title': 'CLIENTES',
    'home.clients.subtitle': 'MARCAS QUE CONFIAM EM NÓS',
    'home.clients.btn.less': 'Reduzir Lista',
    'home.clients.btn.more': 'Ver Todas as Marcas',
    'home.cta.subtitle': 'INICIAR',
    'home.cta.title1': 'Dê vida à sua marca',
    'home.cta.title2': 'com a LUNA.',
    'home.cta.desc1': 'Estamos prontos para transformar a sua visão em realidade tecnológica.',
    'home.cta.desc2': 'O futuro não espera.',
    'home.cta.btn': 'Fale Connosco',
    
    // Solutions
    'solutions.subtitle': '01 // EQUIPAMENTOS',
    'solutions.title1': 'SOLUÇÕES',
    'solutions.title2': 'DIGITAIS',
    'solutions.desc': 'Explore a nossa gama completa de equipamentos inovadores. Desde hologramas suspensos a ecrãs de vapor, temos a solução ideal para o seu projeto.',
    'solutions.filter.all': 'Todos',
    'solutions.card.request_info': 'Pedir Informações',
    'solutions.card.added': 'No Cesto de Informações',
    'solutions.card.videos': 'Vídeos',
    'solutions.toast.title': 'ADICIONADO AO CESTO',
    'solutions.toast.desc': 'O produto foi adicionado à sua lista de pedidos de informação.',
    
    // Technology
    'tech.subtitle': '02 // INOVAÇÃO',
    'tech.title1': 'A NOSSA',
    'tech.title2': 'TECNOLOGIA',
    'tech.desc': 'Descubra a tecnologia por trás das nossas soluções holográficas e como criamos experiências visuais inesquecíveis.',
    'tech.hologram.title': 'Sistemas Holográficos',
    'tech.hologram.desc': 'Os nossos sistemas holográficos utilizam tecnologias avançadas para criar a ilusão de imagens 3D suspensas no espaço, com elevado impacto visual. São soluções versáteis e envolventes, ideais para captar a atenção do público e valorizar qualquer ambiente.',
    'tech.hologram.f1': 'Alta Resolução 4K',
    'tech.hologram.f2': 'Sincronização Multi-Ecrã',
    'tech.hologram.f3': 'Controlo via Cloud',
    'tech.interactive.title': 'Sistemas Interativos',
    'tech.interactive.desc': 'Integramos sensores de movimento e toque para transformar visualizações passivas em experiências interativas e envolventes.',
    'tech.interactive.f1': 'Reconhecimento Gestual',
    'tech.interactive.f2': 'Ecrãs Multitouch',
    'tech.interactive.f3': 'Realidade Aumentada',
    'tech.method.subtitle': '02 // METODOLOGIA',
    'tech.method.title1': 'Do Conceito à',
    'tech.method.title2': 'Realidade',
    'tech.method.step1.title': 'Análise',
    'tech.method.step1.desc': 'Estudamos o espaço e os objetivos da sua marca.',
    'tech.method.step2.title': 'Design',
    'tech.method.step2.desc': 'Criamos o conceito visual e a solução técnica ideal.',
    'tech.method.step3.title': 'Produção',
    'tech.method.step3.desc': 'Desenvolvemos os conteúdos personalizados.',
    'tech.method.step4.title': 'Ativação',
    'tech.method.step4.desc': 'Instalação e suporte para um impacto memorável.',
    
    // Contact
    'contact.subtitle': '01 // CONTACTO',
    'contact.title1': 'VENHA DIZER',
    'contact.title2': 'OLÁ!',
    'contact.desc1': 'Estamos prontos para elevar a sua marca ao próximo nível.',
    'contact.desc2': 'Visite-nos ou entre em contacto para uma demonstração.',
    'contact.info.title': 'Informações de Contacto',
    'contact.info.phone': 'Telefone',
    'contact.info.phone_desc': '(Chamada para a rede fixa nacional)',
    'contact.info.email': 'Email',
    'contact.info.website': 'Website',
    'contact.hq.title': 'As Nossas Sedes',
    'contact.hq.porto': 'Porto',
    'contact.hq.lisbon': 'Lisboa',
    'contact.hq.australia': 'Austrália',
    'contact.form.title': 'Envie-nos uma Mensagem',
    'contact.form.name': 'Nome',
    'contact.form.company': 'Empresa',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Telefone',
    'contact.form.message': 'Mensagem',
    'contact.form.submit': 'Enviar Mensagem',
    'contact.form.default_msg': 'Olá, gostaria de solicitar mais informações sobre o produto:',
    
    // Footer
    'footer.desc': 'Especialistas em soluções holográficas e digitais de alto impacto.',
    'footer.locations': 'Localizações',
    'footer.porto': 'Porto: Rua do Covelo nº232, 4200-238',
    'footer.lisbon': 'Lisboa: Av. Gago Coutinho, N.77-2B, 2700-405',
    'footer.australia': 'Austrália: Scarborough, 6019',
    'footer.contacts': 'Contactos',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter_desc': 'Subscreva para receber as nossas últimas novidades e projetos.',
    'footer.email_placeholder': 'O seu email',
    'footer.rights': '© 2026 LUNA by RSB. Todos os direitos reservados.',
    'footer.privacy': 'Privacidade',
    'footer.cookies': 'Cookies',

    // Cart
    'cart.title': 'O seu Cesto de Pedidos',
    'cart.empty': 'O seu cesto está vazio.',
    'cart.back': 'Voltar às Soluções',
    'cart.remove': 'Remover',
    'cart.form.title': 'Solicitar Informação',
    'cart.form.desc': 'Preencha o formulário abaixo para receber informações sobre todos os produtos selecionados.',
    'cart.form.name': 'Nome',
    'cart.form.email': 'Email',
    'cart.form.phone': 'Telefone',
    'cart.form.message': 'Mensagem',
    'cart.form.submit': 'Enviar Pedido do Cesto',
    'cart.success.title': 'Pedido Enviado!',
    'cart.success.desc': 'Obrigado pelo seu interesse. Entraremos em contacto brevemente.'
  },
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.solutions': 'Solutions',
    'nav.technology': 'Technology',
    'nav.contact': 'Contact',
    'nav.cart': 'Request',
    
    // Home
    'home.hero.subtitle': 'WELCOME TO LUNA BY RSB',
    'home.hero.title1': 'It\'s scientific,',
    'home.hero.title2': 'but no longer fiction.',
    'home.hero.desc1': 'is a line of equipment idealized and commercialized exclusively by RSB.',
    'home.hero.desc2': 'Multimedia, holographic and three-dimensional technology with strong visual impact.',
    'home.hero.cta': 'Explore Solutions',
    'home.features.f1.title': 'Immediate Impact',
    'home.features.f1.desc': 'Solutions designed to capture attention in seconds, transforming common spaces into stages of innovation.',
    'home.features.f2.title': 'Multidimensional',
    'home.features.f2.desc': 'Holograms and projections that challenge physical perception, breaking the barrier between digital and real.',
    'home.features.f3.title': 'Technological Vanguard',
    'home.features.f3.desc': 'Exclusive equipment with the latest innovations in optics and software engineering.',
    'home.stats.projects': 'Projects Delivered',
    'home.stats.clients': 'Happy Clients',
    'home.stats.years': 'Years of Experience',
    'home.clients.title': 'CLIENTS',
    'home.clients.subtitle': 'BRANDS THAT TRUST US',
    'home.clients.btn.less': 'Show Less',
    'home.clients.btn.more': 'View All Brands',
    'home.cta.subtitle': 'START',
    'home.cta.title1': 'Bring your brand to life',
    'home.cta.title2': 'with LUNA.',
    'home.cta.desc1': 'We are ready to turn your vision into technological reality.',
    'home.cta.desc2': 'The future does not wait.',
    'home.cta.btn': 'Talk to Us',
    
    // Solutions
    'solutions.subtitle': '01 // EQUIPMENT',
    'solutions.title1': 'DIGITAL',
    'solutions.title2': 'SOLUTIONS',
    'solutions.desc': 'Explore our complete range of innovative equipment. From suspended holograms to water vapor screens, we have the ideal solution for your project.',
    'solutions.filter.all': 'All',
    'solutions.card.request_info': 'Request Information',
    'solutions.card.added': 'In Info Basket',
    'solutions.card.videos': 'Videos',
    'solutions.toast.title': 'ADDED TO LIST',
    'solutions.toast.desc': 'The product has been added to your information request list.',
    
    // Technology
    'tech.subtitle': '02 // INNOVATION',
    'tech.title1': 'OUR',
    'tech.title2': 'TECHNOLOGY',
    'tech.desc': 'Discover the technology behind our holographic solutions and how we create unforgettable visual experiences.',
    'tech.hologram.title': 'Holographic Systems',
    'tech.hologram.desc': 'Our holographic systems use advanced technologies to create the illusion of 3D images suspended in space, with high visual impact. They are versatile and engaging solutions, ideal for capturing the public\'s attention and enhancing any environment.',
    'tech.hologram.f1': '4K High Resolution',
    'tech.hologram.f2': 'Multi-Screen Sync',
    'tech.hologram.f3': 'Cloud Control',
    'tech.interactive.title': 'Interactive Systems',
    'tech.interactive.desc': 'We integrate motion and touch sensors to transform passive viewings into interactive and engaging experiences.',
    'tech.interactive.f1': 'Gesture Recognition',
    'tech.interactive.f2': 'Multitouch Screens',
    'tech.interactive.f3': 'Augmented Reality',
    'tech.method.subtitle': '02 // METHODOLOGY',
    'tech.method.title1': 'From Concept to',
    'tech.method.title2': 'Reality',
    'tech.method.step1.title': 'Analysis',
    'tech.method.step1.desc': 'We study the space and your brand\'s objectives.',
    'tech.method.step2.title': 'Design',
    'tech.method.step2.desc': 'We create the visual concept and the ideal technical solution.',
    'tech.method.step3.title': 'Production',
    'tech.method.step3.desc': 'We develop custom content.',
    'tech.method.step4.title': 'Activation',
    'tech.method.step4.desc': 'Installation and support for a memorable impact.',
    
    // Contact
    'contact.subtitle': '01 // CONTACT',
    'contact.title1': 'COME SAY',
    'contact.title2': 'HELLO!',
    'contact.desc1': 'We are ready to take your brand to the next level.',
    'contact.desc2': 'Visit us or get in touch for a demonstration.',
    'contact.info.title': 'Contact Information',
    'contact.info.phone': 'Phone',
    'contact.info.phone_desc': '(Call to national landline network)',
    'contact.info.email': 'Email',
    'contact.info.website': 'Website',
    'contact.hq.title': 'Our Headquarters',
    'contact.hq.porto': 'Porto',
    'contact.hq.lisbon': 'Lisbon',
    'contact.hq.australia': 'Australia',
    'contact.form.title': 'Send us a Message',
    'contact.form.name': 'Name',
    'contact.form.company': 'Company',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send Message',
    'contact.form.default_msg': 'Hello, I would like to request more information about the product:',
    
    // Footer
    'footer.desc': 'Experts in high-impact holographic and digital solutions.',
    'footer.locations': 'Locations',
    'footer.porto': 'Porto: Rua do Covelo nº232, 4200-238',
    'footer.lisbon': 'Lisbon: Av. Gago Coutinho, N.77-2B, 2700-405',
    'footer.australia': 'Australia: Scarborough, 6019',
    'footer.contacts': 'Contacts',
    'footer.newsletter': 'Newsletter',
    'footer.newsletter_desc': 'Subscribe to receive our latest news and projects.',
    'footer.email_placeholder': 'Your email',
    'footer.rights': '© 2026 LUNA by RSB. All rights reserved.',
    'footer.privacy': 'Privacy',
    'footer.cookies': 'Cookies',

    // Cart
    'cart.title': 'Your Request',
    'cart.empty': 'Your request is empty.',
    'cart.back': 'Back to Solutions',
    'cart.remove': 'Remove',
    'cart.form.title': 'Request Information',
    'cart.form.desc': 'Fill out the form below to receive information about all selected products.',
    'cart.form.name': 'Name',
    'cart.form.email': 'Email',
    'cart.form.phone': 'Phone',
    'cart.form.message': 'Message',
    'cart.form.submit': 'Send Request',
    'cart.success.title': 'Request Sent!',
    'cart.success.desc': 'Thank you for your interest. We will contact you shortly.'
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('pt');

  useEffect(() => {
    const savedLang = localStorage.getItem('luna_lang') as Language;
    if (savedLang && (savedLang === 'pt' || savedLang === 'en')) {
      setLanguage(savedLang);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('luna_lang', lang);
    document.documentElement.lang = lang;
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['pt']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
