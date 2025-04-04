import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";
import { IoCarSportOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { FaRegStar } from "react-icons/fa";

const SideBar = ({}) => {
  return (
    <aside
      className={`bg-red-1 w-[20%] ease-in-out duration-300 
      }`}>
      <div className='flex flex-col justify-between h-screen py-10 '>
        <div className='flex items-center justify-center w-full px-4 h-[10vh]'>
          <Link href='/dashboard'>
            <Image
              src='/assets/logo.svg'
              alt='Oreen logo'
              width={93.6}
              height={25}
            />
          </Link>
        </div>
        <div className='flex flex-col items-center md:items-start px-4'>
          <Link
            href='/dashboard/cars'
            className='my-3 font-semibold hover:text-red-4 flex items-center gap-2 '>
            <span className=''>
              <IoCarSportOutline className='w-6 h-6' />
            </span>{" "}
            <span className='hidden md:flex'>Manage Cars</span>
          </Link>
          <Link
            href='/dashboard/requests'
            className='my-3 font-semibold hover:text-red-4 flex items-center gap-2 '>
            <span className=''>
              <CiBookmark className='w-6 h-6' />
            </span>
            <span className='hidden md:flex'> Booking Request</span>
          </Link>
          <Link
            href='/dashboard/comments'
            className='my-3 font-semibold hover:text-red-4 flex items-center gap-2 '>
            <span className=''>
              <FaRegStar className='w-6 h-6' />
            </span>
            <span className='hidden md:flex'> Rank Comments</span>
          </Link>
        </div>
        <div className='flex items-center justify-center w-full'>
          <Logout />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
