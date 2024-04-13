import { DashItem } from "../DashItem";
import { getStatsReport } from "./stats/stats";
import { BookOpenTextIcon, Eye, FileStack } from "lucide-react";

export async function DashMap() {
  const stats: any = await getStatsReport();

  return (
    <div className="w-full grid grid-cols-3 gap-6">
      <DashItem
        title="Relatórios vistos"
        icon={<Eye className="text-main-500"/>}
        totalStats={stats?.TotRelatory as number}
      />
      <DashItem
        title="MED"
        icon={<BookOpenTextIcon className="text-main-500"/>}
        totalStats={"27"}
      />
      <DashItem
        title="Total de Relatórios"
        icon={<FileStack className="text-main-500"/>}
        totalStats={stats?.TotRelatory as number}
      />
    </div>
  )
}