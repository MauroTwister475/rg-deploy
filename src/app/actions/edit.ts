import { revalidatePath } from "next/cache";
import { apiFake } from "../api";

export async function EditArea(id: string, name: string) {
  try {
    await apiFake.put(`/edit_area/${id}`, {
      name,
    });
    revalidatePath("/categories/areas");
  } catch (error) {
    if(error) {
      console.log("Erro ao apagar a area!");
      throw error;
    }
  }
}
