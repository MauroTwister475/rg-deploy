import { PageRoot } from "@/app/components/PageRoot";
import { RelatoryForm } from "./RelatoryForm/RelatoryForm";

export default function NewRelatories() { 
  return (
    <PageRoot classeName="w-full mb-20 overflow-auto h-full">
      <RelatoryForm  />
    </PageRoot>
  )
}
