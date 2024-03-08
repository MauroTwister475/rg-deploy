import { NextResponse } from "next/server";
import { api } from "../axios/api";

export async function getStatsReport() {
  try {
    const totRelatory = await api.get("http://localhost:3333/reports");
    return NextResponse.json(totRelatory.data)
  } catch (error) {
    console.log("Erro: "+error)
  }
}