import { TitleSection } from "@/app/components/TitleSection";
import { PageRoot } from "@/app/components/PageRoot";
import { DashMap } from "./DashItem/DashMap";
import { Relatories } from "./Relatories";

export default function Dashboard() {
  return (
    <PageRoot classeName="w-full mt-40">
      <TitleSection title="Dashboard" />
      <div className="w-full h-full flex flex-col gap-8 pt-6">
        <DashMap />
        <div className="w-full">
          <TitleSection title="Relatórios Recentes" />
          <Relatories />
        </div>
      </div>
    </PageRoot>
  );
}