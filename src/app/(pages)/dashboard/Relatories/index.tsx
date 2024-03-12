"use client"
import { File } from "lucide-react";
import { URLBACK } from "@/app/constants/URL";
import { useEffect, useState } from "react";
import { RelatoryProps } from "@/app/@types/Types";
import { SkeletonRelatory } from "@/app/components/Skeleton/Relatory";
import axios from "axios";
import { RelatoryItem } from "../../view_relatories/RelatoryItem";

export function Relatories() {
  const [recentsReports, setRecentsReports] = useState<RelatoryProps[]>([]);

  useEffect(() => {
    async function getRecentsReport() {
      const res = await axios.get(`${URLBACK}/report/view-recents`);
      setRecentsReports(res.data);
    }
    getRecentsReport()
  }, [])


  return (
    <div className="w-full flex flex-col gap-2 scroll h-[26rem] py-4 px-3 overflow-auto">
      {recentsReports?.length === 0 ? <SkeletonRelatory /> :
        recentsReports.map(relatory => (
          <RelatoryItem
            key={relatory?.id}
            id={relatory?.id}
            Icon={<File className="text-gray-500" />}
            theme={relatory?.theme}
            create_at={relatory?.create_at}
          />
        ))}
    </div>
  );
}