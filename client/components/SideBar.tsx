import Image from "next/image";
import Link from "next/link";
import Logout from "./Logout";

const SideBar = ({}) => {
  return (
    <aside
      className={`bg-red-1 w-[20%] absolute h-screen right-0 left-0 ease-in-out duration-300 
      }`}>
      <div className='flex flex-col justify-between h-screen py-10 '>
        <div className='flex items-center justify-center w-full px-4 h-[10vh]'>
          <Link href='/'>
            <Image
              src='/assets/logo.svg'
              alt='Oreen logo'
              width={93.6}
              height={25}
            />
          </Link>
        </div>
        <div className='flex flex-col px-4'>
          <Link
            href='/dashboard/cars'
            className='my-3 font-semibold hover:text-red-4'>
            Manage Cars
          </Link>
          <Link
            href='/dashboard/requests'
            className='my-3 font-semibold hover:text-red-4'>
            Booking Request
          </Link>
          <Link
            href='/dashboard/stats'
            className='my-3 font-semibold hover:text-red-4'>
            Stats
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
