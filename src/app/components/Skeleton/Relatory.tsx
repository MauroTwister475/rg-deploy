
export function SkeletonRelatory() {
  // const res = await prisma.report.findMany();
  // const reportsLength = res.length;
  return (
    <>
      {Array.from({ length: 5 }).map((skeleton, index) => (
        <div key={index} className="w-full shadow-sm h-14 rounded-lg bg-white border px-6 flex items-center justify-between animate-pulse">
          <div className="text-gray-500 flex items-center gap-2">
            <div className="bg-gray-300 rounded-md w-6 h-6 animate-pulse" />
            <div className="bg-gray-300 rounded-sm w-40 h-4 animate-pulse" />
          </div>
          <div className="text-gray-500">
            <div className="bg-gray-300  rounded-sm w-40 h-4 animate-pulse" />
          </div>
          <div className="w-max flex items-center gap-2 text-gray-500">
            <div className="bg-gray-300 rounded-sm w-4 h-4 animate-pulse" />
            <div className="bg-gray-300 rounded-sm  w-4 h-4 animate-pulse" />
          </div>
        </div>
      ))}
    </>
  )
}
