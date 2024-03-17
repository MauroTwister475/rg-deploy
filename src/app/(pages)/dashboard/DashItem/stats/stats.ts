import { URLBACK } from "@/app/constants/URL";
import { revalidateTag } from "next/cache";

export async function getStatsReport() {
  try {
    const TotRelatory = (await fetch(`${URLBACK}/report/quantity`, {
      next: {
        tags: ['totRel'],
      }
    })).json();

    const TotViewRelatory = (await fetch("http://localhost:3333/reports", {
      next: {
        tags: ['totView'],
      }
    })).json();

    const [totRelatory, totViewRelatory] = await Promise.all([TotRelatory, TotViewRelatory]);

    revalidateTag('totRel');
    revalidateTag('totoView');

    return { totRelatory, totViewRelatory };
  } catch (error) {
    console.log("Erro: "+error)
  }
}