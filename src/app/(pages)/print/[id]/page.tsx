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
      const res = await api.get<Report>(`/view-report/${id}`);
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
    <div ref={relatoryRef} className="w-[90rem] max-w-[700px] bg-white flex flex-col items-center justify-between px-6 mb-2 mx-auto gap-2">

      <div className="w-full flex items-center justify-between">
        <Image src={unesco} alt="unesco" className="w-76"/>
        <Image src={insignia} alt="unesco" className="w-32" />
      </div>
        <div className="w-full flex items-end flex-col justify-between gap-3">
          <h2 className="font-bold text-md">{report?.cod_document} EX/4.I.E</h2>
          <h1>
            <span className="font-bold">Conselho executivo</span> <br />
            {report?.cod_document}ª reunião
          </h1>
          <div className="flex items-center justify-end text-black text-md">
            <span>
              {new Date(report?.data).toLocaleString("pt-BR", {
                dateStyle: "full",
              }).replace(new Date(report?.data).toLocaleString("pt-BR", {
                dateStyle: "full",
              })[0], new Date(report?.data).toLocaleString("pt-BR", {
                dateStyle: "full",
              })[0].toLocaleUpperCase())}
            </span>
          </div>
      </div>

      <section className="w-full h-full flex gap-2 flex-col mt-6">
        <DataContent className="" content="Ponto">
          {report?.point}
        </DataContent>
        <DataContent content="Tema" className="text-center">
          {report?.theme}
        </DataContent>
        <DataContent content="Título" className="text-center">
          {report?.title}
        </DataContent>
      </section>
      <div className="w-full border flex flex-col gap-2 border-black py-4 text-center">
        <h1>Resumo</h1>
        <textarea
          className="resize-none h-32 w-full outline-none text-sm p-4 text-black"
          disabled
          value={report?.resume}
        >
        </textarea>
      </div>
      <div className="w-full flex flex-col gap-4 mt-4">
        <DataContent content="Referência">
          {report?.reference}
        </DataContent>
        <DataContent content="Documento">
          {report?.cod_document}
        </DataContent>
        <DataContent content="Participação de angola">
          {report?.participation_of_angola}
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