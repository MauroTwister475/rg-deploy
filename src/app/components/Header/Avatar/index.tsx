"use client"
import { Avatar as RadixAVatar, DropdownMenu, Button } from "@radix-ui/themes"
import { getUserFromCookies } from '@/app/hooks/useAuth';

export function Avatar() {
  const { user } = getUserFromCookies();
  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger>
        <Button variant="soft" radius='full' className='border-none outline-none'>
          <RadixAVatar 
            radius="full" 
            fallback={<p>{user.email[0].toUpperCase()}</p>}
            variant="solid" 
            className='border border-gray-400 cursor-pointer'
          />
        </Button>
      </DropdownMenu.Trigger>
    </DropdownMenu.Root>
  )
}