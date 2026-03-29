import React from "react";
import { motion } from "motion/react";
import { useLanguage } from "../contexts/LanguageContext";
import { Helmet } from "react-helmet-async";

export default function PrivacyPolicy() {
  const { language } = useLanguage();

  return (
    <div className="pt-32 pb-24 min-h-screen bg-black text-white">
      <Helmet>
        <title>{language === 'pt' ? 'Política de Privacidade | LUNA by RSB' : 'Privacy Policy | LUNA by RSB'}</title>
        <meta name="description" content="Política de Privacidade da LUNA by RSB. Saiba como tratamos os seus dados no âmbito das nossas Soluções de Visualização Tridimensional." />
        <meta name="keywords" content="Política de Privacidade, RGPD, LUNA by RSB, Soluções de Visualização Tridimensional, Ativações de Marca Tecnológicas" />
      </Helmet>
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tighter uppercase">
              {language === 'pt' ? 'Política de Privacidade' : 'Privacy Policy'}
            </h1>
            <div className="h-1 w-20 bg-brand" />
          </div>

          <div className="prose prose-invert max-w-none space-y-8 text-white/70 leading-relaxed">
            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">1. Política de Privacidade</h2>
              <p>
                A utilização deste website está sujeita à presente Política de Privacidade, devendo o Utilizador reler os respetivos termos em cada nova utilização a fim de verificar se concorda com a mesma.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">2. Dados Pessoais</h2>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM ,LDA garante o respeito pela privacidade dos Utilizadores.
              </p>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM ,LDA recolhe os seus dados por telefone, por escrito ou através do seu website, mediante o seu consentimento expresso. Por regra, os dados pessoais são recolhidos quando o Utilizador subscreve um dos nossos produtos ou serviços.
              </p>
              <p>
                Alguns dados pessoais são de fornecimento obrigatório e, em caso de falta ou insuficiência desses dados, a RSB – COMUNICAÇÃO E IMAGEM ,LDA não poderá disponibilizar o produto ou serviço em causa pelo que a RSB – COMUNICAÇÃO E IMAGEM ,LDA informará os Utilizadores da natureza obrigatória do fornecimento de dados.
              </p>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM ,LDA procede à recolha e ao tratamento dos dados pessoais necessários à prestação de serviços e/ou fornecimento de produtos, tratando nesse âmbito de dados como o nome, a morada, o número de telefone ou telemóvel e o endereço de correio eletrónico.
              </p>
              <p>
                Nos termos da legislação em vigor em matéria de proteção de dados pessoais, os dados recolhidos pela RSB – COMUNICAÇÃO E IMAGEM ,LDA serão processados e armazenados informaticamente.
              </p>
              <p>
                Os dados pessoais que nos proporcionar serão mantidos em ficheiro pela RSB – COMUNICAÇÃO E IMAGEM ,LDA, empresa responsável pelo tratamento dos mesmos, tratamento esse que tem em vista as seguintes finalidades:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>a. Celebração e execução do contrato relativo aos produtos selecionados pelo utilizador;</li>
                <li>b. Satisfazer pedidos dos utilizadores;</li>
                <li>c. Fornecer ao utilizador informação sobre os produtos da RSB – COMUNICAÇÃO E IMAGEM ,LDA, o envio de mensagens comerciais por correio eletrónico ou qualquer outro meio eletrónico automático equivalente (tais como SMS, MMS ou qualquer outro serviço de comunicações eletrónicas), assim como através de contacto telefónico, salvo se o Utilizador se tiver oposto aquando da recolha dos dados;</li>
                <li>d. Ações de informação e marketing.</li>
              </ul>
              <p>
                O utilizador poderá modificar as suas preferências relativamente ao envio de tais comunicações comerciais enviando um e-mail para geral@rsb.pt assim como indicar a sua oposição.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">3. Utilizador</h2>
              <p>
                O Utilizador garante que os dados pessoais fornecidos são verdadeiros e exatos, e compromete-se a notificar qualquer alteração dos mesmos. Quaisquer perdas ou danos causados a este sítio web ou à pessoa responsável pelo sítio web ou a terceiros resultantes de informação errada, inexata ou incompleta dos formulários de registo será da exclusiva responsabilidade do Utilizador.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">4. Confidencialidade</h2>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM ,LDA, com sede na rua do Covelo, n.232. 4200-238 Porto, empresa responsável pelo ficheiro, compromete-se a manter a confidencialidade dos dados pessoais do utilizador e a assegurar o exercício do direito de acesso, retificação, cancelamento e oposição através do envio de carta para a morada acima indicada.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">5. Subcontratados e Transferência de Dados Pessoais</h2>
              <p>
                Os dados pessoais, incluindo os dados de tráfego, as bases de dados e outras operações, poderão ser alojados, partilhados e comunicados a outras empresas do Grupo RSB – COMUNICAÇÃO E IMAGEM ,LDA nos termos e condições legalmente definidos.
              </p>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM, pode ainda recorrer a entidades subcontratante para a totalidade ou parte das finalidades indicados em cima, bem como para manutenção, alojamento e gestão dos seus sistemas e equipamentos informáticos, nos termos permitidos pela legislação que regula o tratamento de dados pessoais, ficando estas entidades obrigadas a guardar sigilo e a garantir a segurança relativamente aos dados dos Clientes da RSB – COMUNICAÇÃO E IMAGEM ,LDA a que, para o efeito, tenham acesso, não devendo utilizar esses dados para quaisquer outros fins, ou em benefício próprio, nem relacioná-los com outros dados que possuam.
              </p>
              <p>
                Nos casos em que os dados dos Utilizadores sejam transferidos ou alojados noutras empresas do Grupo RSB – COMUNICAÇÃO E IMAGEM ,LDA, os níveis de segurança e proteção não serão inferiores aos prestados pela RSB – COMUNICAÇÃO E IMAGEM ,LDA.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">6. Comunicações de Dados Pessoais</h2>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM, LDA compromete-se a não ceder a entidades externas a informação pessoal dos Utilizadores. A RSB – COMUNICAÇÃO E IMAGEM, LDA apenas partilhará os seus dados pessoais com o consentimento ou se exigido por lei, nos seguintes casos:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Com os parceiros para que possam atribuir as vantagens e benefícios associados às respetivas campanhas e promoções;</li>
                <li>Quando exigido por lei, às entidades judiciárias competentes. Todo e qualquer tratamento de dados pessoais será feito em conformidade com a legislação aplicável.</li>
              </ul>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">7. Conservação dos Dados</h2>
              <p>
                Os seus dados pessoais serão armazenados e conservados apenas pelo período mínimo necessário para as finalidades que motivaram a sua recolha ou o seu posterior tratamento ou, pelo período de tempo autorizado pela Comissão Nacional de Proteção de Dados, findo o qual os mesmos serão eliminados.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">8. Direito de Acesso, Correção, Oposição e Eliminação</h2>
              <p>
                Nos termos da legislação portuguesa aplicável, o Utilizador tem o direito de acesso aos seus dados pessoais, podendo solicitar a sua correção ou aditamento, mediante carta para a rua do Covelo, n.232. 4200-238 Porto ou através do endereço de correio eletrónico geral@rsb.pt.
              </p>
              <p>
                O Utilizador pode, ainda, a qualquer momento, opor -se ao tratamento dos dados, com exceção dos dados estritamente necessários à prestação de serviço, e/ou requerer a eliminação dos seus dados para fins de marketing, devendo para o efeito contactar RSB – COMUNICAÇÃO E IMAGEM ,LDA, por escrito para a rua do Covelo, n.232. 4200-238 Porto ou através do endereço de correio eletrónico geral@rsb.pt.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">9. Direito à Portabilidade dos Dados</h2>
              <p>
                O Utilizador tem o direito de receber os dados pessoais que lhe digam respeito e que tenha fornecido a um responsável pelo tratamento, num formato estruturado, de uso corrente e de leitura automática, e o direito de transmitir esses dados a outro responsável pelo tratamento, nos termos da legislação em vigor em matéria de proteção de dados pessoais.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">10. Cookies</h2>
              <p>
                Cookies são pequenas etiquetas de software que são armazenadas no seu computador através do navegador (browser), retendo apenas informação relacionada com as suas preferências, não incluindo, como tal, os seus dados pessoais.
              </p>
              <p>
                Neste website utilizamos cookies, que são pequenos ficheiros de texto com informação sobre a sua navegação neste site e cujo principal objetivo é melhorar a sua experiência na web. Pode encontrar mais informações sobre os cookies que utilizamos, a sua finalidade e outras informações de interesse na seguinte ligação: Política de Cookies.
              </p>
              <p>
                Ao aceitar esta Política de Privacidade está a concordar com o uso de cookies existentes neste site e descrito na página indicada acima.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">11. Medidas de Segurança para Proteção dos Dados Pessoais</h2>
              <p>
                A proteção e salvaguarda dos dados pessoais dos Utilizadores são um elemento basilar na forma como a RSB – COMUNICAÇÃO E IMAGEM ,LDA presta os seus serviços. Deste modo, foram adotadas diversas medidas de segurança, de carácter técnico e organizativo, de forma a proteger os dados pessoais que nos são disponibilizados contra a sua difusão, perda, uso indevido, alteração, tratamento ou acesso não autorizado, bem como, contra qualquer outra forma de tratamento ilícito.
              </p>
            </section>

            <section className="space-y-4">
              <h2 className="text-2xl font-bold text-white uppercase tracking-tight">12. Disposições Finais</h2>
              <p>
                A RSB – COMUNICAÇÃO E IMAGEM ,LDA reserva-se no direito de, a qualquer momento, alterar ou reajustar esta Política de Privacidade, sendo essas alterações devidamente publicitadas no nosso website.
              </p>
              <p>
                Caso tenha alguma dúvida ou questão sobre a Política de privacidade ou sobre a forma como são recolhidos e tratados os seus dados pessoais poderá entrar em contacto connosco através do email geral@rsb.pt ou através de carta registada para a seguinte morada: Rua do Covelo, nº232, 4200-238 Porto.
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
