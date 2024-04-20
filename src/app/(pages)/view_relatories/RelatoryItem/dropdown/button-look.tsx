import { Eye } from "lucide-react";
import Link from "next/link";

export function ButtonLook({ id }: { id: number }) {
  return (
    <Link href={`/print/${id}`} className="flex items-center justify-center">
      <Eye className="mr-2 h-4 w-4" />
      <span>Visualizar</span>
    </Link>
  );
}