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
      <section className='max-w-6xl mx-auto px-4 mt-20  sm:px-8 grid lg:grid-cols-[1fr,400px]  '>
        <div>
          <h1 className=' font-bold text-4xl md:text-7xl capitalize'>
            {' '}
            Job <span className=' text-primary'>tracking </span> app
          </h1>
          <p className=' leading-loose max-w-md mt-4'>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed,
            reprehenderit! Perferendis sit error asperiores doloremque! Fugit
            quia iusto laborum ea distinctio repellat quae, soluta voluptatem
            magnam error. Nulla, facilis dolorem?
          </p>
          <Button asChild className='mt-4'>
            <Link href='/add-job'>Get Started </Link>
          </Button>
        </div>
        <Image src={hero} alt='' />
      </section>
    </main>
  );
};
export default HomePage;
