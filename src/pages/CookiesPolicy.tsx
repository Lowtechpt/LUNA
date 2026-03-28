import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";

export default function CookiesPolicy() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              {language === 'pt' ? 'Política de Cookies' : 'Cookies Policy'}
            </h1>
            <div className="h-1 w-20 bg-brand" />
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
            <p className="text-xl text-white">
              Este website utiliza cookies para melhorar o seu serviço.
            </p>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. O que são cookies?</h2>
              <p>
                Os cookies são pequenos ficheiros de texto armazenados no computador do utilizador quando visita determinados websites. Em alguns casos, são eliminados após essa visita. Noutros casos são mantidos para visitas posteriores. O uso de cookies no acesso a websites é uma prática usual e os vários navegadores (browsers) permitem que cada utilizador possa recusar a sua utilização, bem como eliminar os que foram já criados.
              </p>
              <p className="font-bold text-white">
                Não deverá continuar a aceder ao nosso website após o alerta sobre os cookies, se não concordar com a sua utilização.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Qual é o interesse em aceitar cookies?</h2>
              <p>
                Quando visita este website, registamos determinadas informações que armazenamos no seu dispositivo. Alguns cookies podem ser essenciais para garantir as funcionalidades disponibilizadas, enquanto outros são destinadas a melhorar o desempenho e a experiência do utilizador.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Aceitar/Recusar cookies</h2>
              <p>
                Pode a qualquer momento optar por aceitar ou recusar a instalação de cookies no seu dispositivo, configurando o software de navegação.
              </p>
              
              <div className="space-y-4 pl-4 border-l border-brand/30">
                <h3 className="text-xl font-bold text-white">3.1 Se aceitar cookies</h3>
                <p>
                  O registo de um cookie no seu dispositivo depende da sua vontade. Em qualquer momento, pode modificar a sua escolha através das opções disponibilizadas pelo seu software de navegação.
                </p>
                <p>
                  Se no software de navegação que utiliza tiver aceitado a gravação de cookies no seu dispositivo, os cookies integradas nas páginas e conteúdos que tiver consultado poderão ficar temporariamente armazenadas num espaço específico do seu dispositivo.
                </p>

                <h3 className="text-xl font-bold text-white mt-6">3.2 Se recusar cookies</h3>
                <p>
                  Quando recusa cookies, apenas depositamos um cookie de “recusa”. Este cookie permite-nos memorizar a sua escolha, de modo a evitar perguntar-lhe a cada visita se deseja aceitar ou recusar cookies.
                </p>
              </div>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Gerir cookies nos vários browsers</h2>
              <p>
                Para desativar os cookies no seu browser pode consultar os links abaixo. Considerando o elevado número de browsers e respetivas versões, estas instruções não são exaustivas.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>
                  <a href="https://support.mozilla.org/pt-PT/kb/protecao-contra-monitorizacao-melhorada-no-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Firefox: Proteção Contra Monitorização Melhorada
                  </a>
                </li>
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Chrome: Limpar, ativar e gerir cookies no Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/pt-pt/topic/eliminar-e-gerir-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline">
                    Internet explorer: Eliminar e gerir cookies
                  </a>
                </li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Atualização da Notificação Legal</h2>
              <p>
                Reservamos o direito de fazer quaisquer alterações ou correções a esta notificação de cookies. Por favor consulte esta página regularmente de modo a rever a informação e verificar se existe alguma atualização.
              </p>
              <p className="text-sm italic opacity-60">
                Esta notificação foi atualizada em 1 de Julho de 2020
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
