import LinkDropdown from '@/components/LinkDropdown';
import ToggleTheme from '@/components/ToggleTheme';
import { UserButton } from '@clerk/nextjs';

export default function Navbar() {
  return (
    <nav className=' py-4  px-4 sm:px-16 lg:px-24  flex items-center justify-between bg-muted '>
      <div>
        <LinkDropdown />
      </div>

      <div className=' flex items-center gap-x-4 '>
        <ToggleTheme />
        <UserButton afterSignOutUrl='/' />
      </div>
    </nav>
  );
}
