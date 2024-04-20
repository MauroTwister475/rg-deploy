import Image from "next/image"
import unesco from "@/app/assets/unescoInsignia.jpg"
import insignia from "@/app/assets/insignia.jpg"

export default function HeaderReport() {
  return (
    <div className="w-full flex items-center justify-between ">
      <div className="w-max flex flex-col text-center items-center justify-center">
        <Image className="w-24" src={insignia} alt="logo" />
        <h1 className="text-sm -mt-2 font-semibold">
          República de Angola <br />
          <span>Ministério da Educação</span>
        </h1>
      </div>
      <Image src={unesco} alt="unesco" className="w-96" />
    </div>
  )
}
