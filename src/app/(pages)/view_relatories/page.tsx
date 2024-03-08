import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryList } from "./RelatoryList";

export default function ViewRelatories() {
  return (
    <PageRoot classeName="w-full">
      <div className="w-full h-full flex flex-col gap-10 mt-20">
        <div className="w-full flex justify-between items-center text-gray-500 px-6">
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
        <div className="w-full flex flex-col gap-2">
          <RelatoryList />
        </div>
      </div>
    </PageRoot>
  );
}