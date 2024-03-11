import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryForm } from "./RelatoryForm/RelatoryForm";

export default function NewRelatories() { 
  return (
    <PageRoot classeName="w-full flex items-center justify-center flex-col px-6">
      <RelatoryForm  />
    </PageRoot>
  )
}
