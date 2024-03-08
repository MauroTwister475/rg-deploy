import { NextRequest, NextResponse } from "next/server"
import { reportFormSchema, } from "@/app/Schemas/reportSchema";
import { prisma } from "@/app/@lib/db/prisma"

export async function POST(req: NextRequest, res: NextResponse) {
  try {
    const data = await req.json()
    const finalData = reportFormSchema.parse(data);

    const report = await prisma.report.create({
      data: finalData,
    });

    return NextResponse.json(report);

  } catch(error) {
    console.log("Erro grave: "+error)
  }
}
