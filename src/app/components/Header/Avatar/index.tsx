"use client"
import Link from 'next/link';
import { Avatar as RadixAVatar, DropdownMenu, Button } from "@radix-ui/themes"
import { useSession } from "next-auth/react"

export function Avatar() {
  // const username = "Mauro"[0];
  const { data: session } = useSession();
  console.log("[TOKEN]: ",session?.user?.token);

  return (
    // <DropdownMenu.Root>
    //   <DropdownMenu.Trigger>
    //     <Button variant="soft" radius='full' className='border-none outline-none'>
    //       <RadixAVatar 
    //         radius="full" 
    //         fallback={<p>{session?.user.email[0]}</p>}
    //         variant="solid" 
    //         className='border border-gray-400 cursor-pointer'
    //       />
    //     </Button>
    //   </DropdownMenu.Trigger>
    //   <DropdownMenu.Content className='w-36'>
    //     <DropdownMenu.Item>
    //       Perfil
    //     </DropdownMenu.Item>
    //     <DropdownMenu.Item>Configurações</DropdownMenu.Item>
    //     <DropdownMenu.Separator />

    //     <DropdownMenu.Sub>
    //       <DropdownMenu.SubTrigger>Mais</DropdownMenu.SubTrigger>
    //       <DropdownMenu.SubContent>
    //         <DropdownMenu.Item>Adicionar projecto</DropdownMenu.Item>
    //         <DropdownMenu.Item>Mover projecto</DropdownMenu.Item>
    //       </DropdownMenu.SubContent>
    //     </DropdownMenu.Sub>

    //     <DropdownMenu.Separator />
    //     <DropdownMenu.Item color="red">
    //       <Link href='/'>Terminar sessão</Link>
    //     </DropdownMenu.Item>
    //   </DropdownMenu.Content>
    // </DropdownMenu.Root>
    <div className='rounded-full w-8 h-8 bg-blue-500 flex items-center justify-center'>
      <p>{session?.user.email[0]}</p>     
    </div>
  )
}