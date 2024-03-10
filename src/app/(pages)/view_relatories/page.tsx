import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryList } from "./RelatoryList";

export default function ViewRelatories() {
  return (
    <PageRoot classeName="w-full">
      <div className="w-full h-full flex flex-col gap-4">
        <div className="w-full flex justify-between items-center text-gray-500 px-10">
          <h1 className="font-semibold">
            Ficheiro
          </h1>
          <h1 className="font-semibold">
            Data
          </h1>
          <h1 className="font-semibold">
            Acção
          </h1>
        </div>
        <div className="w-full h-auto flex flex-col gap-2 py-2 px-4">
          <RelatoryList />
        </div>
      </div>
    </PageRoot>
  );
}