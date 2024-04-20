"use client";
import { File } from "lucide-react";
import { URLBACK } from "@/app/constants/URL";
import { useState } from "react";
import { RelatoryItem } from "../../view_relatories/RelatoryItem";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { DeleteModal } from "../../view_relatories/RelatoryItem/dropdown/DeleteModal/delete-modal";
import { useDeleteModalStore } from "@/app/stores/useDeleteModalStore";
import { Table, TableBody } from "@/components/ui/table";
import { ListLackTeachesSkeleton } from "../../view_relatories/ListTeacher/ListTeacherSkeleton";

type ReportRecentsProps = {
  Report_id: number;
  Report_theme: string;
  Report_create_at: any;
};

export function Relatories() {
  const [recentsReports, setRecentsReports] = useState<ReportRecentsProps[]>(
    []
  );
  const { onSetIsOpen, isOpen } = useDeleteModalStore();

  useQuery({
    queryKey: ["relatory"],
    queryFn: async () => {
      const res = await axios.get(`${URLBACK}/report/recents`);
      setRecentsReports(res.data);
      return res.data;
    },
  });

  return (
    <>
      <div className="w-full bg-white rounded-md mt-6">
      <Table className="relative overflow-y-auto border-separate">
        <TableBody className="w-full space-y-6 py-2">
          {recentsReports?.length === 0 ? (
            <ListLackTeachesSkeleton items={5} />
          ) : (
            recentsReports.map((relatory) => (
              <RelatoryItem
                key={relatory?.Report_id}
                id={relatory?.Report_id}
                Icon={<File className="text-gray-500" />}
                theme={relatory?.Report_theme}
                create_at={relatory?.Report_create_at}
              />
            ))
          )}
        </TableBody>
      </Table>
      </div>
      <DeleteModal isOpen={isOpen} setIsOpen={onSetIsOpen} />
    </>
  );
}
