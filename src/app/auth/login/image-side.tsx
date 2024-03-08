import Image from "next/image"

export function ImageRight() {
  return (
    <div className="w-full h-full bg-main-500 p-20 hidden lg:flex items-center justify-center">
      <Image
        src="/sign.svg"
        width={100}
        height={100}
        alt="login image"
        className="w-full h-full"
        priority={true}
      />
    </div>
  )
}