"use client"
import Image from "next/image";
import { DataContent } from "../DataContent";
import { Report } from "@/app/@types/Types";
import { useEffect, useRef, useState } from "react";
import unesco from "@/app/assets/unescoInsignia.jpg"
import insignia from "@/app/assets/insignia.jpg"
import { useReactToPrint } from "react-to-print";
import { usePrintStore } from "@/app/hooks/usePrint";
import axios from "axios";
import { URLBACK } from "@/app/constants/URL";

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
  const [contriesVote, setContriesVote] = useState<ReportContries>();
  const relatoryRef = useRef<HTMLDivElement | null>(null);
  const { isPrinting } = usePrintStore()


  useEffect(() => {
    async function getReports() {
      const res = await axios.get<Report>(`${URLBACK}/report/view-report/${id}`);
      setReport(res.data);
    }

    async function getReportById() {
      const res = await axios.get<ReportContries>(`${URLBACK}/report/view-report/${id}`);
      setContriesVote(res?.data);
    }

    getReports();
    getReportById();
    // verifyPrinter();
  }, []);

  return (
    <div ref={relatoryRef} className="w-[793px] h-max pb-2 bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2">
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
        <DataContent className="mt-4 ml-5" content="Ponto">
          {report?.point}
        </DataContent>
      </section>
      <div className="w-full flex items-end flex-col justify-between px-6">
        <h2 className="font-bold text-md">{report?.cod_document} EX/4.I.E</h2>
        <h1>
          <span className="font-bold text-end ">Conselho executivo</span> <br />
          <span className="mr-auto">{report?.meeting_number}ª reunião</span>
        </h1>
        <span>
          {new Date(report!?.create_at).toLocaleString("BR", {
            dateStyle: "full",
          })}
        </span>
      </div>
      <div className="w-[95%] border flex flex-col border-black mt-2 text-center">
        <h1>Resumo</h1>
        <textarea
          className="resize-none h-32 w-full bg-white outline-none text-sm p-4 text-black"
          disabled
          value={report?.summary}
        >
        </textarea>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4 px-6">
        <DataContent content="Referência">
          {report?.reference}
        </DataContent>
        <DataContent content="Documento">
          {report?.cod_document}
        </DataContent>
        <DataContent content="Participação de angola">
          {report?.Angola_participation}
        </DataContent>
        <DataContent content="Países A favor">
          {contriesVote?.votosfavor?.members.map((contry: any) => <span>{contry.name}, </span>)}
        </DataContent>
        <DataContent content="Países contra">
          {contriesVote?.votoscontra?.members.map((contry: any) => <span>{contry.name}, </span>)}
        </DataContent>
        <DataContent content="Países em abstenção">
          {contriesVote?.votosemabstencao?.members.map((contry: any) => <span>{contry.name}, </span>)}
        </DataContent>
        <DataContent content="Decisão">
          {report?.decision}
        </DataContent>
        <div className="w-full overflow-hidden text-justify">
          <span>
            {report?.comment}
          </span>
        </div>
      </div>
    </div>
  );
}
