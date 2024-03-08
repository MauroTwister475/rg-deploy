import { ElementType, ReactNode } from 'react';

interface DashItemProps {
  title: string,
  icon: ReactNode,
  totalStats: string | number,
}

export function DashItem({ icon: Icon, title, totalStats }: DashItemProps) {

  return (
    <div className={`w-full h-32 bg-white flex  items-center px-4 py-4 justify-between shadow rounded-lg`}>
      <div className="w-32 h-full flex items-center justify-center bg-blue-500/10 p-1 rounded-lg">
        {Icon}
      </div>
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 text-gray-500">
        <span className='font-bold text-zinc-500'>{totalStats}</span>
        <h1 className="text-md">
          {title}
        </h1>
      </div>
    </div>
  )
}
