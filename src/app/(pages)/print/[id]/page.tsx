"use client";
import { DataContent } from "../DataContent";
import { Report, ReportContries } from "@/app/@types/Types";
import { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import { URLBACK } from "@/app/constants/URL";
import { ScrollArea } from "@radix-ui/themes";
import { SkeletonRelatoryPage } from "@/app/components/Skeleton/SkeletonRelatoryPage";
import HeaderReport from "../HeaderReport";
import axios from "axios";

interface PrintProps {
  params: {
    id: string;
  };
}

export default function Print({ params: { id } }: PrintProps) {
  const [report, setReport] = useState<Report>();
  const [contriesVote, setContriesVote] = useState<ReportContries>();
  const relatoryRef = useRef<HTMLDivElement | null>(null);

  const onPrintReport = useReactToPrint({
    content: () => relatoryRef?.current,
    bodyClass: "bodyPrint",
    pageStyle:
      "@page { size: A4 portrait; margin-top: 10cm; } @media print { body { -webkit-print-color-adjust: exact; } }",
  });

  useEffect(() => {
    async function getReports() {
      const res = await axios.get<Report>(
        `${URLBACK}/report/view-report/${id}`
      );
      setReport(res.data);
    }

    async function getReportById() {
      const res = await axios.get<ReportContries>(
        `${URLBACK}/report/view-report/${id}`
      );
      setContriesVote(res?.data);
    }
    getReports();
    getReportById();
  }, []);

  return (
    <ScrollArea className="flex gap-4 items-center justify-center">
      {report !== undefined ? (
        <div
          ref={relatoryRef}
          className="w-[793px] relative h-max pb-8 px-4 bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2"
        >
          <HeaderReport />
          <section className="w-full h-full flex gap-2 flex-col mt-6">
            {report.theme && (
              <DataContent content="" className="text-center">
                <h1 className="text-xl font-bold">{report.theme}</h1>
              </DataContent>
            )}
            {report.title && (
              <DataContent content="" className="text-center">
                <h1 className="text-xl font-bold">{report.title}</h1>
              </DataContent>
            )}
            {report.point && (
              <DataContent className="mt-4 ml-5" content="Ponto da reunião:">
                {report.point}
              </DataContent>
            )}
          </section>
          <div className="w-full flex items-end flex-col justify-between px-6">
            {report.cod_document && (
              <h2 className="font-bold text-md">
                {report.cod_document} EX/4.I.E
              </h2>
            )}
            <h1>
              <span className="font-bold text-end">Conselho Executivo</span>{" "}
              <br />
              {report.meeting_number && (
                <span className="mr-auto">
                  {report.meeting_number}ª reunião
                </span>
              )}
            </h1>
            <span className="">
              {report.create_at && (
                <>
                  {new Date(report.create_at)
                    .toLocaleString("pt", {
                      dateStyle: "full",
                    })
                    .replace(/\b([a-z])/g, function (match) {
                      return match.toUpperCase();
                    })
                    .replace(/\bDe\b/g, "de")
                    .replace(/\bO\b/g, "o")
                    .replace(/\bA\b/g, "a")}
                </>
              )}
            </span>
          </div>
          <h1>Resumo</h1>
          {report.summary && (
            <div className="w-[95%] text-justify border bg-white max-h-max h-auto border-black p-4">
              {report.summary}
            </div>
          )}
          <div className="w-full flex flex-col gap-4 mt-4 px-6">
            {report.comment && (
              <DataContent content="Comentário:">
                <span>{report.comment}</span>
              </DataContent>
            )}
            {report.reference && (
              <DataContent content="Referência:">
                {report.reference}
              </DataContent>
            )}
            {report.cod_document && (
              <DataContent content="Documento:">
                {report.cod_document}
              </DataContent>
            )}
            {report.Angola_participation && (
              <DataContent content="Participação de Angola:">
                {report.Angola_participation}
              </DataContent>
            )}
            {contriesVote?.votosfavor.members[0] !== undefined && (
              <DataContent content="Países a favor:">
                {contriesVote.votosfavor.members.map(
                  (contry: any, index: number) => (
                    <span>
                      {contry.name}
                      {index === contriesVote.votosfavor.members.length - 1
                        ? "."
                        : ","}
                      &nbsp;
                    </span>
                  )
                )}
              </DataContent>
            )}
            {contriesVote?.votoscontra.members[0] !== undefined && (
              <DataContent content="Países a contra:">
                {contriesVote.votoscontra.members.map(
                  (contry: any, index: number) => (
                    <span>
                      {contry.name}
                      {index === contriesVote.votoscontra.members.length - 1
                        ? "."
                        : ","}
                      &nbsp;
                    </span>
                  )
                )}
              </DataContent>
            )}
            {contriesVote?.votosemabstencao.members[0] !== undefined && (
              <DataContent content="Países que se abstiveram:">
                {contriesVote.votosemabstencao.members.map(
                  (contry: any, index: number) => (
                    <span>
                      {contry.name}
                      {index ===
                      contriesVote.votosemabstencao.members.length - 1
                        ? "."
                        : ","}
                      &nbsp;
                    </span>
                  )
                )}
              </DataContent>
            )}
            {report.tendencies && (
              <DataContent content="Tendências:">
                {report.tendencies}
              </DataContent>
            )}
            {report.decision && (
              <DataContent content="Decisão:" className="print:mt-32 pt-10">
                {report.decision}
              </DataContent>
            )}
            {report.author && (
              <DataContent content="Autor/a:">{report.author}</DataContent>
            )}
            <DataContent className="mt-6 page-footer">
              <p className="text-black text-[6.5px]">
                Construção do modelo: IPIL - Afonso da Silva, Mauro Raimundo,
                João Simão e Miguel Manuel
                <br />
                Coordenação: Paula Henriques
              </p>
            </DataContent>
          </div>
        </div>
      ) : (
        <SkeletonRelatoryPage />
      )}
      <button
        onClick={onPrintReport}
        className="w-max bg-main-500 rounded-md text-white p-2 absolute top-0 right-5"
      >
        Imprimir
      </button>
    </ScrollArea>
  );
}
