import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryList } from "./RelatoryList";

export const ActionsLabel = [
  { label: "Ficheiro" },
  { label: "Data" },
  { label: "Acção" },
];

export default function ViewRelatories() {
  return (
    <PageRoot classeName="w-full">
      <div className="w-full h-full flex flex-col gap-10 mt-20">
        <div className="w-full flex justify-between items-center text-gray-500 px-6">
          {ActionsLabel.map((action: any) => (
            <h1 key={action.label} className="font-semibold">
              {action.label}
            </h1>
          ))}
        </div>
        <div className="w-full flex flex-col gap-2">
          <RelatoryList />
        </div>
      </div>
    </PageRoot>
  );
}