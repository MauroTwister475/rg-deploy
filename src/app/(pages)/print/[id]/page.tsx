"use client"
import Image from "next/image";
import { DataContent } from "../DataContent";
import { Report } from "@/app/@types/Types";
import { useEffect, useRef, useState } from "react";
import unesco from "@/app/assets/unescoInsignia.jpg"
import insignia from "@/app/assets/insignia.jpg"
import { useReactToPrint } from "react-to-print";
import axios from "axios";
import { URLBACK } from "@/app/constants/URL";
import { ScrollArea } from "@radix-ui/themes";

interface PrintProps {
  params: {
    id: string,
  }
}

type ReportContries = {
  votoscontra: {
    id: number,
    status: string,
    members: [
      {
        id: number,
        name: string,
      },
    ]
  },
  votosfavor: {
    id: number,
    status: string,
    members: [
      {
        id: number,
        name: string,
      },
    ]
  },
  votosemabstencao: {
    id: number,
    status: string,
    members: [
      {
        id: number,
        name: string,
      },
    ]
  },
}

export default function Print({ params: { id } }: PrintProps) {
  const [report, setReport] = useState<Report>();
  const [date, setDate] = useState("");
  const [contriesVote, setContriesVote] = useState<ReportContries>();
  const relatoryRef = useRef<HTMLDivElement | null>(null);

  const onPrintReport = useReactToPrint({
    content: () => relatoryRef?.current,
    pageStyle: "@page { size: A4 portrait; margin: 0cm; } @media print { body { -webkit-print-color-adjust: exact; } }"
  });

  useEffect(() => {
    async function getReports() {
      const res = await axios.get<Report>(`${URLBACK}/report/view-report/${id}`);
      setReport(res.data);
      setDate(res.data?.create_at)
    }

    async function getReportById() {
      const res = await axios.get<ReportContries>(`${URLBACK}/report/view-report/${id}`);
      setContriesVote(res?.data);
    }
    getReports();
    getReportById();
  }, []);

  return (
    <ScrollArea className="flex gap-4 items-center justify-center">
      <div ref={relatoryRef} className="w-[793px] h-max pb-2 px-4 bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2">
        <div className="w-full flex items-center justify-between">
          <div className="w-max flex flex-col text-center items-center justify-center uppercase">
            <Image className="w-24" src={insignia} alt="logo" />
            <h1 className="text-sm">
              República de angola <br />
              <span>Ministério da educação</span>
            </h1>
          </div>
          <Image src={unesco} alt="unesco" className="w-76 " />
        </div>
        <section className="w-full h-full flex gap-2 flex-col mt-6">
          <DataContent content="" className="text-center">
            <h1 className="text-xl font-bold">
              {report?.theme}
            </h1>
          </DataContent>
          <DataContent content="" className="text-center">
            <h1 className="text-xl font-bold">{report?.title}</h1>
          </DataContent>
          <DataContent className="mt-4 ml-5" content="Ponto:">
            {report?.point}
          </DataContent>
        </section>
        <div className="w-full flex items-end flex-col justify-between px-6">
          <h2 className="font-bold text-md">{report?.cod_document} EX/4.I.E</h2>
          <h1>
            <span className="font-bold text-end">Conselho Executivo</span> <br />
            <span className="mr-auto">{report?.meeting_number}ª reunião</span>
          </h1>
          <span className="">
            {new Date(report!?.create_at).toLocaleString("pt", {
              dateStyle: "full",
            }).replace(/\b([a-z])/g, function (match) { return match.toUpperCase(); }).replace(/\bDe\b/g, "de").replace(/\bO\b/g, "o").replace(/\bA\b/g, "a")}
          </span>
        </div>
        <h1>Resumo</h1>
        <textarea
          className="w-[95%] text-justify border bg-white max-h-max border-black  p-4"
          disabled
          value={report?.summary}
        ></textarea>
        <div className="w-full flex flex-col gap-4 mt-4 px-6">
          <DataContent content="Comentário:">
            <span>
              {report?.comment}
            </span>
          </DataContent>
          <DataContent content="Referência:">
            {report?.reference}
          </DataContent>
          <DataContent content="Documento:">
            {report?.cod_document}
          </DataContent>
          <DataContent content="Participação de Angola:">
            {report?.Angola_participation}
          </DataContent>
          <DataContent content="Países e organizações favor:">
            {contriesVote?.votosfavor?.members.map((contry: any, index: number) => (
              <span>
                {contry.name}
                {index === contriesVote.votosfavor.members.length - 1 ? '.' : ','}&nbsp;
              </span>
            ))}
          </DataContent>
          <DataContent content="Países e organizações contra:">
            {contriesVote?.votoscontra?.members.map((contry: any, index: number) => (
              <span>
                {contry.name}
                {index === contriesVote.votoscontra.members.length - 1 ? '.' : ','}&nbsp;
              </span>
            ))}
          </DataContent>
          <DataContent content="Países e organizações que se abstiveram:">
            {contriesVote?.votosemabstencao?.members.map((contry: any, index: number) => (
              <span>
                {contry.name}
                {index === contriesVote.votosemabstencao.members.length - 1 ? '.' : ','}&nbsp;
              </span>
            ))}
          </DataContent>
          <DataContent content="Decisão:">
            {report?.decision}
          </DataContent>
        </div>
      </div>

      <button
        onClick={onPrintReport}
        className="w-max bg-main-500 rounded-md text-white p-2 absolute top-0 right-5"
      >
        Imprimir
      </button>
    </ScrollArea>
  );
}
