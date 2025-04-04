import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { links } from '@/utils/links';
import { AlignLeft } from 'lucide-react';
import Link from 'next/link';

export default function LinkDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className='lg:hidden '>
        <Button variant='outline' size='icon'>
          <AlignLeft />
          <span className=' sr-only'>Toggle links</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className=' lg:hidden w-52'
        align='start'
        sideOffset={25}
      >
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className=' flex items-center gap-x-2'>
                {link.icon} <span className=' capitalize '>{link.label}</span>
              </Link>
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
