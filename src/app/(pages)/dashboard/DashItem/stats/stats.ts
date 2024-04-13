import { URLBACK } from "@/app/constants/URL";
import { revalidateTag } from "next/cache";

export async function getStatsReport() {
  try {
    const TotRelatory = (await fetch(`${URLBACK}/report/countreports`, {
      next: {
        tags: ['totRel'],
      }
    })).json();

    revalidateTag('totRel');
    revalidateTag('totoView');

    return { TotRelatory };
  } catch (error) {
    console.log("Erro: "+error)
  }
}