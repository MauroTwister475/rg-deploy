import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryItem } from "../view_relatories/RelatoryItem";
import { File } from "lucide-react";
import { DashMap } from "./DashItem/DashMap";
import { api } from "@/app/api/axios/api";
import { RelatoryProps } from "@/app/@types/Types";
import { AuthStore } from "@/app/hooks/useAuth";

export default async function Dashboard() {
  // const userToken = AuthStore.getState().user.token
  // const reports = (await api.get("/report/view-recents", {
  //   headers: {
  //     Authorization: `Bearer ${userToken}`
  //   }
  // })).data as RelatoryProps[];

  return (
    <PageRoot classeName="w-full px-0"> {/* px-16 */}
      <TitleSection title="Dashboard" />
      <div className="w-full h-full flex flex-col gap-8 pt-6">
        <DashMap />
        <div className="w-full">
          <TitleSection title="Relatórios Recentes" />
          <div className="w-full flex flex-col gap-2 mt-6">
            {/* { reports?.map(relatory => (
              <RelatoryItem
                key={relatory.id}
                id={relatory.id}
                Icon={<File className="text-gray-500" />}
                title={relatory.title}
                created_at={new Date(relatory.created_at).toLocaleString("pt-BR", {
                  dateStyle: "medium",
                })} */}
              {/* /> */}
            {/* ))}  */}
          </div>
        </div>
      </div>
    </PageRoot>
  );
}