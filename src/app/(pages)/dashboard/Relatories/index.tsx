"use client"
import { File } from "lucide-react";
import { URLBACK } from "@/app/constants/URL";
import { useEffect, useState } from "react";
import { SkeletonRelatory } from "@/app/components/Skeleton/Relatory";
import axios from "axios";
import { RelatoryItem } from "../../view_relatories/RelatoryItem";

type ReportRecentsProps = {
  Report_id: number,
  Report_theme: string,
  Report_create_at: any,
}
export function Relatories() {
  const [recentsReports, setRecentsReports] = useState<ReportRecentsProps[]>([]);

  useEffect(() => {
    async function getRecentsReport() {
      const res = await axios.get(`${URLBACK}/report/recents`);
      setRecentsReports(res.data);
    }
    getRecentsReport()
  }, [])

  return (
    <div className="w-full flex flex-col gap-2 scroll h-[26rem] py-4 px-3 overflow-auto">
      {recentsReports?.length === 0 ? <SkeletonRelatory /> :
        recentsReports.map(relatory => (
          <RelatoryItem
            key={relatory?.Report_id}
            id={relatory?.Report_id}
            Icon={<File className="text-gray-500" />}
            theme={relatory?.Report_theme}
            create_at={relatory?.Report_create_at}
          />
        ))}
    </div>
  );
}