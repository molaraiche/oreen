"use client";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { navlinks } from "@/constants/navlinks";
import { linksType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const menuHandler = () => setMenu(!menu);
  return (
    <nav className='flex h-[10vh] items-center justify-between'>
      <div className=''>
        <Image
          src='/assets/logo.svg'
          alt='Oreen logo'
          width={93.6}
          height={25}
        />
      </div>
      <div
        className={`absolute right-0 flex flex-col top-[10vh] items-center gap-10 h-[80vh] bg-red-3 justify-center w-full md:static md:flex-row md:bg-transparent md:gap-8 md:justify-start md:w-fit -translate-x-[200%] md:translate-x-[0%] ease-in-out duration-300 ${
          menu ? "translate-x-[0]" : "-translate-x-[200%]"
        } `}>
        {navlinks.map((link: linksType) => (
          <Link
            href={link.path}
            key={link.id}
            className='text-netral-9  font-bold font-lato leading-[18px] text-4xl md:text-[15px] hover:text-red-4 ease-in duration-200'>
            {link.label}
          </Link>
        ))}
      </div>
      <div className='block md:hidden'>
        {menu ? (
          <IoMdClose
            className='w-8 h-8 text-red-5 cursor-pointer'
            onClick={menuHandler}
          />
        ) : (
          <HiOutlineMenuAlt2
            className='w-8 h-8 text-red-5 cursor-pointer'
            onClick={menuHandler}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
