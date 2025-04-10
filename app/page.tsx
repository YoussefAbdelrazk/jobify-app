import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../assets/logo.svg';
import hero from '../assets/main.svg';

const HomePage = () => {
  return (
    <main>
      <header className=' max-w-6xl mx-auto px-4 sm:px-8 py-6 '>
        <Image src={logo} alt='logo' />
      </header>
      <section className='max-w-6xl mx-auto px-4 place-items-center h-screen -mt-20 sm:px-8 grid lg:grid-cols-[1fr,400px]  '>
        <div>
          <h1 className=' font-bold text-4xl md:text-7xl capitalize'>
            {' '}
            Job <span className=' text-primary'>tracking </span> app
          </h1>
          <p className=' leading-loose max-w-md mt-4'>
            Jobify is a powerful and intuitive platform designed to streamline
            your job search and application process. Whether you&#39;re actively
            job hunting, keeping track of applications, or organizing
            opportunities, Jobify helps you stay on top of your career journey
            with ease
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started </Link>
          </Button>
        </div>
        <Image className=' hidden lg:block object-cover' src={hero} alt='' />
      </section>
    </main>
  );
};
export default HomePage;
