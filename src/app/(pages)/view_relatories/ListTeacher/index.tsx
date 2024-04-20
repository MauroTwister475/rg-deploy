import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RelatoryProps } from "@/app/@types/Types";
import { NotFoundReport } from "./NotFoundTeacher/index";
import {
  TableBody,
  TableHead,
  Table,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ListLackTeachesSkeleton } from "./ListTeacherSkeleton";
import { Button } from "@radix-ui/themes";
import { ChevronLeft, ChevronRight } from "lucide-react";
import axios from "axios";
import { URLBACK } from "@/app/constants/URL";
import { RelatoryItem } from "../RelatoryItem";
import { File } from "lucide-react";

const PAGE_SIZE = 6;

const headingItems = [
  { text: "Ficheiro" },
  { text: "Data" },
  { text: "Acção" },
];

export function ListReports() {
  const [searchText, setSearchText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [reports, setReports] = useState<RelatoryProps[]>([]);

  const { isLoading } = useQuery({
    queryKey: ["relatory"],
    queryFn: async () => {
      const res = await axios.get<RelatoryProps[]>(
        `${URLBACK}/report/view-recents`
      );
      setReports(res.data);
      return res.data;
    },
  });

  const filteredReports = reports
    ?.filter((report) =>
      report.theme.toLowerCase().includes(searchText.toLowerCase())
    )
    .slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const totalPages = Math.ceil((reports?.length || 0) / PAGE_SIZE);

  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));

  return (
    <div
      className="w-full mx-auto px-6 pt-6 mb-4 pb-4 rounded-lg bg-white "
      suppressHydrationWarning={false}
    >
      <div className="flex justify-between">
        <h1 className="font-bold text-lg">Lista de Relatórios</h1>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Pesquisar por um relatório..."
          className="w-[40%] px-3 py-2 border text-black outline-none rounded-md mb-4 bg-white"
        />
      </div>

      <Table className="relative overflow-y-auto border-separate">
        <TableHeader className="hover:bg-white text-black font-semibold">
          <TableRow className="border-none outline-none">
            {headingItems.map((item) => (
              <TableHead key={item.text} className={`${item.text === "Acção" && "text-end"} font-semibold` }>
                {item.text}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody className="w-full space-y-6 py-2">
          {isLoading ? (
            <ListLackTeachesSkeleton items={4} />
          ) : filteredReports?.length !== 0 ? (
            filteredReports?.map((report) => (
              <RelatoryItem
                key={report.id}
                id={report.id}
                Icon={<File className="text-gray-500" />}
                theme={report.theme}
                create_at={report.create_at}
              />
            ))
          ) : (
            <NotFoundReport />
          )}
        </TableBody>
      </Table>
      <div className="flex justify-center py-2 space-x-3 items-center w-max ml-auto">
        <Button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="w-max px-2 cursor-pointer"
        >
          <ChevronLeft size={20} />
        </Button>
        <span>
          {currentPage} de {totalPages}
        </span>
        <Button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="w-max px-2 cursor-pointer"
        >
          <ChevronRight size={24} />
        </Button>
      </div>
    </div>
  );
}
