"use client";
import React from "react";
import printJS from "print-js";

export default function MyComponent() {
  const handlePrint = () => {
    printJS({
      printable: "contentToPrint", // ID do elemento HTML que deseja imprimir
      type: "html", // Tipo de conteúdo a ser impresso
      targetStyles: ["*"], // Estilos CSS a serem aplicados ao conteúdo impresso
      style: `
      "@page { size: A4 portrait; margin: 20mm; } @media print { body { -webkit-print-color-adjust: exact; } }",
   
      @media print {
        .no-page-break {
          page-break-after: auto;
        }
      }
      `,
    });
  };
  const test = "O mauro é bem";

  return (
    <div
    >
      <div id="contentToPrint"
        className="w-[793px] no-page-break relative h-max pb-8 pt-4 px-4 pl-12 bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2"
      >
        {/* Conteúdo que você deseja imprimir */}
        <h1>Conteúdo para impressão</h1>
        <p>
          Este é um exemplo de conteúdo para impressão. ODS4: Educação 2030
          Coordenação, acompanhamento e apoio global e regional Ponto da
          reunião: 6 219 EX/6 EX/4.I.E Conselho Executivo 219.ª reunião
          Quarta-feira, 20 de Março de 2024 Resumo A Directora-Geral submeteu ao
          Conselho Executivo da UNESCO na coordenação e no apoio aos Estados
          membros para a concretização do ODS4 até 2030. Comentário: Os Estados
          membros apresentaram o balanço das actividades referentes ao ODS4,
          tendo todos reconhecido que a COVID19 constituiu um entrave no
          progresso das actividades. O Comité Executivo felicitou a
          Directora-Geral pela sua dedicação na criação do Comité Director de
          alto nível para o acompanhamento das questões ligadas à educação.
          Neste sentido, a Directora-Geral manifestou total satisfação pelo
          facto de a União Africana-UA ser membro da UNESCO e ter eleito o ano
          de 2024 como o ano da educação em África. A delegação angolana
          apresentou o desenvolvimento das suas actividades que, actualmente, se
          centram na revisão curricular para poder dar cumprimento ao ODS4. Por
          fim, a delegação solicitou a promoção de cursos de formação de
          formadores para a garantia dos resultados nos prazos previstos, de
          acordo com a Agenda Africana 2063. Referência: Comissão do programa
          das relações exteriores Documento: 219 EX/6 Participação de Angola:
          Com pronunciamento Decisão: Os Estados membros manifestaram satisfação
          pelo facto de a UNESCO ter colocado a Educação no topo da sua agenda
          política, visando apoiar os Estados Membros nos seus esforços em
          direcção ao desenvolvimento sustentável. Foi salientado que a educação
          inclusiva e quantitativa de qualidade desempenha um papel essencial no
          combate às desigualdades. Assim, o Conselho Executivo decidiu apelar
          aos Estados membros para reforçarem o seu apoio às actividades de
          coordenação e de acompanhamento do ODS4, levados a cabo pela UNESCO a
          nível mundial e regional, através de contribuições voluntárias e
          através do apoio aos trabalhos do secretariado interinstituições do
          Comité director de alto nível para o ODS 4 – Education 2030. Neste
          sentido, o Comité Executivo solicita à Directora-Geral a apresentação
          de um relatório na 220.ª session, referente à coordenação, ao
          seguimento e ao apoio ao ODS4. Este é um exemplo de conteúdo para
          impressão. ODS4: Educação 2030 Coordenação, acompanhamento e apoio
          global e regional Ponto da reunião: 6 219 EX/6 EX/4.I.E Conselho
          Executivo 219.ª reunião Quarta-feira, 20 de Março de 2024 Resumo A
          Directora-Geral submeteu ao Conselho Executivo da UNESCO na
          coordenação e no apoio aos Estados membros para a concretização do
          ODS4 até 2030. Comentário: Os Estados membros apresentaram o balanço
          das actividades referentes ao ODS4, tendo todos reconhecido que a
          COVID19 constituiu um entrave no progresso das actividades. O Comité
          Executivo felicitou a Directora-Geral pela sua dedicação na criação do
          Comité Director de alto nível para o acompanhamento das questões
          ligadas à educação. Neste sentido, a Directora-Geral manifestou total
          satisfação pelo facto de a União Africana-UA ser membro da UNESCO e
          ter eleito o ano de 2024 como o ano da educação em África. A delegação
          angolana apresentou o desenvolvimento das suas actividades que,
          actualmente, se centram na revisão curricular para poder dar
          cumprimento ao ODS4. Por fim, a delegação solicitou a promoção de
          cursos de formação de formadores para a garantia dos resultados nos
          prazos previstos, de acordo com a Agenda Africana 2063. Referência:
          Comissão do programa das relações exteriores Documento: 219 EX/6
          Participação de Angola: Com pronunciamento Decisão: Os Estados membros
          manifestaram satisfação pelo facto de a UNESCO ter colocado a Educação
          no topo da sua agenda política, visando apoiar os Estados Membros nos
          seus esforços em direcção ao desenvolvimento sustentável. Foi
          salientado que a educação inclusiva e quantitativa de qualidade
          desempenha um papel essencial no combate às desigualdades. Assim, o
          Conselho Executivo decidiu apelar aos Estados membros para reforçarem
          o seu apoio às actividades de coordenação e de acompanhamento do ODS4,
          levados a cabo pela UNESCO a nível mundial e regional, através de
          contribuições voluntárias e através do apoio aos trabalhos do
          secretariado interinstituições do Comité director de alto nível para o
          ODS 4 – Education 2030. Neste sentido, o Comité Executivo solicita à
          Directora-Geral a apresentação de um relatório na 220.ª session,
          referente à coordenação, ao seguimento e ao apoio ao ODS4. Este é um
          exemplo de conteúdo para impressão. ODS4: Educação 2030 Coordenação,
          acompanhamento e apoio global e regional Ponto da reunião: 6 219 EX/6
          EX/4.I.E Conselho Executivo 219.ª reunião Quarta-feira, 20 de Março de
          2024 Resumo A Directora-Geral submeteu ao Conselho Executivo da UNESCO
          na coordenação e no apoio aos Estados membros para a concretização do
          ODS4 até 2030. Comentário: Os Estados membros apresentaram o balanço
          das actividades referentes ao ODS4, tendo todos reconhecido que a
          COVID19 constituiu um entrave no progresso das actividades. O Comité
          Executivo felicitou a Directora-Geral pela sua dedicação na criação do
          Comité Director de alto nível para o acompanhamento das questões
          ligadas à educação. Neste sentido, a Directora-Geral manifestou total
          satisfação pelo facto de a União Africana-UA ser membro da UNESCO e
          ter eleito o ano de 2024 como o ano da educação em África. A delegação
          angolana apresentou o desenvolvimento das suas actividades que,
          actualmente, se centram na revisão curricular para poder dar
          cumprimento ao ODS4. Por fim, a delegação solicitou a promoção de
          cursos de formação de formadores para a garantia dos resultados nos
          prazos previstos, de acordo com a Agenda Africana 2063. Referência:
          Comissão do programa das relações exteriores Documento: 219 EX/6
          Participação de Angola: Com pronunciamento Decisão: Os Estados membros
          manifestaram satisfação pelo facto de a UNESCO ter colocado a Educação
          no topo da sua agenda política, visando apoiar os Estados Membros nos
          seus esforços em direcção ao desenvolvimento sustentável. Foi
          salientado que a educação inclusiva e quantitativa de qualidade
          desempenha um papel essencial no combate às desigualdades. Assim, o
          Conselho Executivo decidiu apelar aos Estados membros para reforçarem
          o seu apoio às actividades de coordenação e de acompanhamento do ODS4,
          levados a cabo pela UNESCO a nível mundial e regional, através de
          contribuições voluntárias e através do apoio aos trabalhos do
          secretariado interinstituições do Comité director de alto nível para o
          ODS 4 – Education 2030. Neste sentido, o Comité Executivo solicita à
          Directora-Geral a apresentação de um relatório na 220.ª session,
          referente à coordenação, ao seguimento e ao apoio ao ODS4. Este é um
          exemplo de conteúdo para impressão. ODS4: Educação 2030 Coordenação,
          acompanhamento e apoio global e regional Ponto da reunião: 6 219 EX/6
          EX/4.I.E Conselho Executivo 219.ª reunião Quarta-feira, 20 de Março de
          2024 Resumo A Directora-Geral submeteu ao Conselho Executivo da UNESCO
          na coordenação e no apoio aos Estados membros para a concretização do
          ODS4 até 2030. Comentário: Os Estados membros apresentaram o balanço
          das actividades referentes ao ODS4, tendo todos reconhecido que a
          COVID19 constituiu um entrave no progresso das actividades. O Comité
          Executivo felicitou a Directora-Geral pela sua dedicação na criação do
          Comité Director de alto nível para o acompanhamento das questões
          ligadas à educação. Neste sentido, a Directora-Geral manifestou total
          satisfação pelo facto de a União Africana-UA ser membro da UNESCO e
          ter eleito o ano de 2024 como o ano da educação em África. A delegação
          angolana apresentou o desenvolvimento das suas actividades que,
          actualmente, se centram na revisão curricular para poder dar
          cumprimento ao ODS4. Por fim, a delegação solicitou a promoção de
          cursos de formação de formadores para a garantia dos resultados nos
          prazos previstos, de acordo com a Agenda Africana 2063. Referência:
          Comissão do programa das relações exteriores Documento: 219 EX/6
          Participação de Angola: Com pronunciamento Decisão: Os Estados membros
          manifestaram satisfação pelo facto de a UNESCO ter colocado a Educação
          no topo da sua agenda política, visando apoiar os Estados Membros nos
          seus esforços em direcção ao desenvolvimento sustentável. Foi
          salientado que a educação inclusiva e quantitativa de qualidade
          desempenha um papel essencial no combate às desigualdades. Assim, o
          Conselho Executivo decidiu apelar aos Estados membros para reforçarem
          o seu apoio às actividades de coordenação e de acompanhamento do ODS4,
          levados a cabo pela UNESCO a nível mundial e regional, através de
          contribuições voluntárias e através do apoio aos trabalhos do
          secretariado interinstituições do Comité director de alto nível para o
          ODS 4 – Education 2030. Neste sentido, o Comité Executivo solicita à
          Directora-Geral a apresentação de um relatório na 220.ª session,
          referente à coordenação, ao seguimento e ao apoio ao ODS4. Este é um
          exemplo de conteúdo para impressão. ODS4: Educação 2030 Coordenação,
          acompanhamento e apoio global e regional Ponto da reunião: 6 219 EX/6
          EX/4.I.E Conselho Executivo 219.ª reunião Quarta-feira, 20 de Março de
          2024 Resumo A Directora-Geral submeteu ao Conselho Executivo da UNESCO
          na coordenação e no apoio aos Estados membros para a concretização do
          ODS4 até 2030. Comentário: Os Estados membros apresentaram o balanço
          das actividades referentes ao ODS4, tendo todos reconhecido que a
          COVID19 constituiu um entrave no progresso das actividades. O Comité
          Executivo felicitou a Directora-Geral pela sua dedicação na criação do
          Comité Director de alto nível para o acompanhamento das questões
          ligadas à educação. Neste sentido, a Directora-Geral manifestou total
          satisfação pelo facto de a União Africana-UA ser membro da UNESCO e
          ter eleito o ano de 2024 como o ano da educação em África. A delegação
          angolana apresentou o desenvolvimento das suas actividades que,
          actualmente, se centram na revisão curricular para poder dar
          cumprimento ao ODS4. Por fim, a delegação solicitou a promoção de
          cursos de formação de formadores para a garantia dos resultados nos
          prazos previstos, de acordo com a Agenda Africana 2063. Referência:
          Comissão do programa das relações exteriores Documento: 219 EX/6
          Participação de Angola: Com pronunciamento Decisão: Os Estados membros
          manifestaram satisfação pelo facto de a UNESCO ter colocado a Educação
          no topo da sua agenda política, visando apoiar os Estados Membros nos
          seus esforços em direcção ao desenvolvimento sustentável. Foi
          salientado que a educação inclusiva e quantitativa de qualidade
          desempenha um papel essencial no combate às desigualdades. Assim, o
          Conselho Executivo decidiu apelar aos Estados membros para reforçarem
          o seu apoio às actividades de coordenação e de acompanhamento do ODS4,
          levados a cabo pela UNESCO a nível mundial e regional, através de
          contribuições voluntárias e através do apoio aos trabalhos do
          secretariado interinstituições do Comité director de alto nível para o
          ODS 4 – Education 2030. Neste sentido, o Comité Executivo solicita à
          Directora-Geral a apresentação de um relatório na 220.ª session,
          referente à coordenação, ao seguimento e ao apoio ao ODS4.
        </p>
      </div>
      <button onClick={handlePrint}>Imprimir</button>
    </div>
  );
}
