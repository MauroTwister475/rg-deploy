import { TableRow } from "@/components/ui/table";
import { TableCell } from "@radix-ui/themes";

export function NotFoundReport() {
  return (
    <TableRow className="outline-none bg-white py-2 px-4">
      <TableCell>
        <h1 className="text-gray-400 text-lg">
          Nenhum relatório encontrado...
        </h1>
      </TableCell>
    </TableRow>
  );
}
