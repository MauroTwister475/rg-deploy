import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryItem } from "../view_relatories/RelatoryItem";
import { File } from "lucide-react";
import { DashMap } from "./DashItem/DashMap";
import { URLBACK } from "@/app/constants/URL";
import axios from "axios";

export default async function Dashboard() {
  // const reports = (await axios.get(`${URLBACK}/report/view-recents`)).data;

  return (
    <PageRoot classeName="w-full">
      <TitleSection title="Dashboard" />
      <div className="w-full h-full flex flex-col gap-8 pt-6">
        <DashMap />
        <div className="w-full">
          <TitleSection title="Relatórios Recentes" />
          <div className="w-full flex flex-col gap-2 mt-6">
            {/* {reports?.map((relatory: any) => (
              <RelatoryItem
                key={relatory?.id}
                id={relatory?.id}
                Icon={<File className="text-gray-500" />}
                title={relatory?.title}
                create_at={new Date(relatory?.create_at).toLocaleString("pt-BR", {
                  dateStyle: "long",
                })}
              />
            ))} */}
          </div>
        </div>
      </div>
    </PageRoot>
  );
}