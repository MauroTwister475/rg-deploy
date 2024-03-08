import { PageRoot } from "@/app/components/PageRoot";
import { ContryItem } from "./ContryItem";

export default function ListContry() {
  return (
    <PageRoot classeName="w-full">
      <div className="w-full flex flex-col gap-2 mt-2">
        <div className="w-full h-60 overflow-auto flex flex-col gap-2 py-2 px-3">
          <ContryItem />
        </div>
      </div>
    </PageRoot>
  );
}