
interface TitleProps {
  title: string,
}

export function TitleSection({ title }:TitleProps) {
  return (
    <h1 className="text-xl font-semibold text-gray-500">
      {title}
    </h1>
  )
}
