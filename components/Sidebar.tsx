'use client';
import Image from 'next/image';
import logo from '../assets/logo.svg';
import { links } from '@/utils/links';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
export default function Sidebar() {
  const pathname = usePathname();
  console.log(pathname, 'pathname');
  return (
    <aside className=' px-8 py-4 h-full bg-muted'>
      <Image src={logo} alt='logo' className=' mx-auto' />
      <div className='flex flex-col gap-y-4 mt-20'>
        {links.map((link) => {
          const { href, icon, label } = link;
          return (
            <Button
              asChild
              key={href}
              variant={pathname === href ? 'default' : 'link'}
            >
              <Link href={href} className=' flex items-center gap-x-2'>
                {icon} <span className=' capitalize'>{label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
}
