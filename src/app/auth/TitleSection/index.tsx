import { twM } from "@/app/utils/twMerge";

interface TitleSectionPros {
    title: string,
    className?: string,
}

export function TitleSection({ title, className }: TitleSectionPros) {
    return (
        <div className={twM('w-full flex items-center justify-center mb-6', className)}>
            <h1 className="text-3xl text-gray-600 font-semibold">
                {title}
            </h1>
        </div>
    )
}