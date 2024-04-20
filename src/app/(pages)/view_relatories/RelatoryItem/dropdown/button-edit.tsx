import Link from "next/link";
import { PenSquare } from "lucide-react";

export function ButtonEdit({ id }: { id: number }) {
  return (
    <Link href={`/edit/${id}`} className="flex items-center justify-center">
      <PenSquare className="mr-2 h-4 w-4" />
      <span>Editar</span>
    </Link>
  );
}