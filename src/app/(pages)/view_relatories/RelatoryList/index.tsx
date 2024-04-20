"use client";
import { useState } from "react";
import { RelatoryItem } from "../RelatoryItem";
import { RelatoryProps } from "@/app/@types/Types";
import { SkeletonRelatory } from "@/app/components/Skeleton/Relatory";
import { File } from "lucide-react";
import { URLBACK } from "@/app/constants/URL";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useRelatoryDataStore } from "@/app/stores/relatoryDataStore";
import { DeleteModal } from "../RelatoryItem/dropdown/DeleteModal/delete-modal";
import { useDeleteModalStore } from "@/app/stores/useDeleteModalStore";

export function RelatoryList() {
  const [reports, setReports] = useState<RelatoryProps[]>([]);
  const { isOpen, onSetIsOpen } = useDeleteModalStore();

  useQuery({
    queryKey: ["relatory"],
    queryFn: async () => {
      const res = await axios.get(`${URLBACK}/report/view-recents`);
      setReports(res.data);
      return res.data;
    },
  });

  return (
    <>
      <div className="w-full scroll h-[26rem] py-4 overflow-auto flex flex-col gap-2 px-3 items-center">
        {reports.length === 0 ? (
          <SkeletonRelatory />
        ) : (
          reports.map((report) => (
            <RelatoryItem
              key={report.id}
              id={report.id}
              Icon={<File className="text-gray-500" />}
              theme={report.theme}
              create_at={report.create_at}
            />
          ))
        )}
      </div>
      <DeleteModal 
        isOpen={isOpen} 
        setIsOpen={onSetIsOpen} 
      />
    </>
  );
}
