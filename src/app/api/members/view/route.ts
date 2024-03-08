import { NextResponse } from "next/server";
import { api } from "../../axios/api";

export async function GET() {
  try {
    const members = await api.get("/view-members");
    return NextResponse.json(members.data);
    
  } catch (err) {
    console.log("Erro grave: " + err);
  }
}