import { TableCell, TableRow } from "@/components/ui/table";

export function ListLackTeachesSkeleton({ items }: { items: number }) {
  return (
    <>
      {Array.from({ length: items }).map((_, index) => (
        <TableRow key={index} className="bg-white shadow-sm h-14 border rounded-lg px-2 animate-pulse">
          <TableCell className="text-gray-500 items-center gap-2">
            <div className="flex items-center gap-3">
              <div className="bg-gray-300 rounded-sm w-28 h-4 animate-pulse" />
            </div>
          </TableCell>
          <TableCell className="text-gray-500">
            <div className="bg-gray-300 rounded-sm w-36 h-4 animate-pulse" />
          </TableCell>
          <TableCell className="w-max text-end text-gray-500">
            <div className="bg-gray-300 ml-auto rounded-sm w-20 h-4 animate-pulse" />
          </TableCell>
        </TableRow>
      ))}
    </>
  );
}
