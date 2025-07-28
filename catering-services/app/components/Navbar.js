'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

const NavLink = ({ href, children }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`hover:text-cyan-800 ${
        isActive ? 'font-bold underline text-orange-600' : ''
      }`}
    >
      {children}
    </Link>
  );
};

export default function Navbar() {
  return (
    <nav>
      <div className="bg-yellow-400 text-black p-4 flex text-sm justify-around  items-center">
        <Link href="/" className="font-extrabold text-2xl font-serif">
          BiteBuzz
        </Link>
        <div className="flex gap-10 items-center">
          <div className="flex gap-10 ">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Services">Services</NavLink>
            <NavLink href="/About">About</NavLink>
            <NavLink href="/ContactUs">Contact Us</NavLink>
          </div>
          <div className="text-lg">|</div>
          <div className="flex gap-5 text-white">
            <Link href="/sign-up">
              <Button className="bg-orange-500 font-semibold text-sm hover:bg-orange-600">
                Register
              </Button>
            </Link>
            <Link href="/login">
              <Button className="bg-orange-500 font-semibold text-sm hover:bg-orange-600">
                Login
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}