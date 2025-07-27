'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { auth } from '@/app/firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

const NavLink = ({ href, children, onClick }) => {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`hover:text-cyan-800 ${
        isActive ? 'font-bold underline text-orange-600' : ''
      }`}
    >
      {children}
    </Link>
  );
};

function UserMenu({ user, onSignOut, onClick }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  function getInitials(user) {
    if (!user) return '';
    if (user.displayName) {
      return user.displayName
        .split(' ')
        .map((n) => n[0])
        .join('')
        .toUpperCase();
    }
    if (user.email) {
      return user.email[0].toUpperCase();
    }
    return '?';
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center font-bold text-lg hover:bg-orange-600 focus:outline-none"
        onClick={() => setDropdownOpen((open) => !open)}
        aria-label="User menu"
        type="button"
      >
        {getInitials(user)}
      </button>
      {dropdownOpen && (
        <div className="absolute right-0 mt-2 w-40 bg-white rounded shadow-lg z-20 text-black">
          <div className="px-4 py-2 border-b">Signed in as<br /><span className="font-semibold">{user.displayName || user.email}</span></div>
          <button
            className="w-full text-left px-4 py-2 hover:bg-orange-100 text-red-600"
            onClick={() => { onSignOut(); setDropdownOpen(false); if (onClick) onClick(); }}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleMenuToggle = () => setMenuOpen((open) => !open);
  const handleLinkClick = () => setMenuOpen(false);
  const handleSignOut = async () => {
    await signOut(auth);
    setMenuOpen(false);
  };

  return (
    <nav>
      <div className="bg-yellow-400 text-black p-4 flex text-sm justify-between items-center relative">
        <Link href="/" className="font-extrabold text-2xl font-serif">
          BiteBuzz
        </Link>
        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <div className="flex gap-10 ">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/Services">Services</NavLink>
            <NavLink href="/About">About</NavLink>
            <NavLink href="/ContactUs">Contact Us</NavLink>
          </div>
          <div className="text-lg">|</div>
          <div className="flex gap-5 text-white">
            {user ? (
              <UserMenu user={user} onSignOut={handleSignOut} />
            ) : (
              <>
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
              </>
            )}
          </div>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-10 h-10 focus:outline-none"
          onClick={handleMenuToggle}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black mb-1 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block w-6 h-0.5 bg-black transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="absolute top-full right-4 mt-2 w-56 bg-yellow-400 rounded-lg shadow-lg flex flex-col gap-4 p-4 z-50 md:hidden animate-fade-in">
            <NavLink href="/" onClick={handleLinkClick}>Home</NavLink>
            <NavLink href="/Services" onClick={handleLinkClick}>Services</NavLink>
            <NavLink href="/About" onClick={handleLinkClick}>About</NavLink>
            <NavLink href="/ContactUs" onClick={handleLinkClick}>Contact Us</NavLink>
            <div className="border-t border-black my-2"></div>
            {user ? (
              <UserMenu user={user} onSignOut={handleSignOut} onClick={handleLinkClick} />
            ) : (
              <>
                <Link href="/sign-up" onClick={handleLinkClick}>
                  <Button className="bg-orange-500 font-semibold text-sm hover:bg-orange-600 w-full">
                    Register
                  </Button>
                </Link>
                <Link href="/login" onClick={handleLinkClick}>
                  <Button className="bg-orange-500 font-semibold text-sm hover:bg-orange-600 w-full">
                    Login
                  </Button>
                </Link>
              </>
            )}
          </div>
        )}
      </div>
    </nav>
  );
}