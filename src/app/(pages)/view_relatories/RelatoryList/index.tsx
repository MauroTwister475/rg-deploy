"use client";
import { useEffect, useState } from "react";
import { RelatoryItem } from "../RelatoryItem";
import { RelatoryProps } from "@/app/@types/Types"
import { SkeletonRelatory } from "@/app/components/Skeleton/Relatory";
import { File } from "lucide-react";
import { api } from "@/app/api/axios/api";

export function RelatoryList() {
  const [reports, setReports] = useState<RelatoryProps[]>([]);

  useEffect(() => {
    async function getRelatoriesData() {
      const res = await api.get("/view-reports");
      const reports = res.data;  
      setReports(reports?.reports);
    }
    getRelatoriesData();
  }, []);

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="w-full scroll h-80 overflow-auto flex flex-col gap-2 items-center justify-">
        {reports.length > 0 ?
          reports.map(report => (
            <RelatoryItem
              key={report.id}
              id={report.id}
              Icon={<File className="text-gray-500" />}
              title={report.title}
              created_at={new Date(report.created_at).toLocaleString("pt-BR", {
                dateStyle: "medium",
              })}
            />
          )) :
          reports.length === 0  && <SkeletonRelatory /> 
        }
      </div>
    </div>
  );
}