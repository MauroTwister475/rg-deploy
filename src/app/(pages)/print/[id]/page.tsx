"use client"
import Image from "next/image";
import { api } from "@/app/api/axios/api";
import { DataContent } from "../DataContent";
import { Contries } from "../contries";
import { Report } from "@/app/@types/Types";
import { useEffect, useRef, useState } from "react";
import unesco from "@/app/assets/unescoInsignia.jpg"
import insignia from "@/app/assets/insignia.jpg"
import { useReactToPrint } from "react-to-print";
import { usePrintStore } from "@/app/hooks/usePrint";

interface PrintProps {
  params: {
    id: string,
  }
}

export default function Print({ params: { id } }: PrintProps) {
  const [report, setReport] = useState<Report>();
  const relatoryRef = useRef<HTMLDivElement | null>(null);
  const { isPrinting } = usePrintStore()

  const onPrintReport = useReactToPrint({
    content: () => relatoryRef?.current,
    pageStyle: "@page { size: A4 portrait; margin: 0cm; } @media print { body { --webkit-print-color-adjust: exact; } }"
  });

  useEffect(() => {
    async function getReports() {
      const res = await api.get<Report>(`/report/view-report/${id}`);
      setReport(res.data);
    }

    function verifyPrinter() {
      if (isPrinting) {
        onPrintReport()
      }
    }
    getReports();
    // verifyPrinter();
  }, []);

  return (
    <div ref={relatoryRef} className="w-[793px] h-[1123px] bg-white flex flex-col items-center justify-between mb-2 mx-auto gap-2">
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
        <DataContent content="Tema" className="text-center">
          {report?.theme}
        </DataContent>
        <DataContent content="Título" className="text-center">
          {report?.title}
        </DataContent>
        <DataContent className="mt-4 ml-5" content="Ponto">
          {report?.point}
        </DataContent>
      </section>
      <div className="w-full flex items-end flex-col justify-between px-6">
        <h2 className="font-bold text-md">{report?.cod_document} EX/4.I.E</h2>
        <h1>
          <span className="font-bold">Conselho executivo</span> <br />
          {report?.meeting_number}ª reunião
        </h1>
        <div className="flex items-center justify-end text-black text-md px-6">
          <span>
            {report?.create_at}
          </span>
        </div>
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
        <Contries />
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


/*
  separar a data da tempo...
  spaco emtre as imagens.. 
  das logos.
  tirar
*/