import { NextRequest, NextResponse } from "next/server";
import { api } from "../../axios/api";
// import { RelatoryProps } from "@/app/@types/Types";

export async function GET(req: NextRequest) {
    try {
        const reports = await api.get("/view-reports");
        return NextResponse.json(reports.data);
    } catch (error) {
        console.log("Erro: ", error)
    }
}