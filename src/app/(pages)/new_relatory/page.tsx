import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryForm } from "./RelatoryForm/RelatoryForm";

export default function NewRelatories() { 
  return (
    <PageRoot classeName="w-full h-full pt-48 pb-14 lg:mt-0 flex items-center justify-center scrool flex-col px-6">
      <RelatoryForm  />
    </PageRoot>
  )
}
