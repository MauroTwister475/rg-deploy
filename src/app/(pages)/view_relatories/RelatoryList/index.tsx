"use client";
import { useEffect, useState } from "react";
import { RelatoryItem } from "../RelatoryItem";
import { RelatoryProps } from "@/app/@types/Types"
import { SkeletonRelatory } from "@/app/components/Skeleton/Relatory";
import { File } from "lucide-react";
import axios from "axios";
import { URLBACK } from "@/app/constants/URL";

export function RelatoryList() {
  const [reports, setReports] = useState<RelatoryProps[]>([]);

  useEffect(() => {
    async function getRelatoriesData() {
      const res = await axios.get(`${URLBACK}/report/view-recents`);
      const reports = res.data;
      setReports(reports);
    }
    getRelatoriesData();
  }, []);

  return (
      <div className="w-full scroll h-[26rem] py-4 overflow-auto flex flex-col gap-2 px-3 items-center justify-">
        {reports.length === 0 ? <SkeletonRelatory />
          : reports.map(report => (
            <RelatoryItem
              key={report.id}
              id={report.id}
              Icon={<File className="text-gray-500" />}
              title={report.title}
              create_at={report.create_at}
            />
          ))
        }
    </div>
  );
}