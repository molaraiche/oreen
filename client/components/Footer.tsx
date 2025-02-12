import Image from "next/image";
import Link from "next/link";
import BackTop from "./BackTop";

const Footer = () => {
  return (
    <div className='flex items-center justify-between font-montserrat my-32 relative flex-col-reverse gap-y-10 md:flex-row  md:gap-10'>
      <div className='flex flex-col'>
        <Image
          src='/assets/logo.svg'
          alt='Oreen Logo'
          width={93.3}
          height={25}
        />
        <p className='md:w-[400px] mt-5'>
          We are a well-known car rental service that has many partners in each
          region to connect with you to assist in your trip in meetings, events,
          holidays or long trips.
        </p>
        <div className='flex items-center gap-4 mt-16'>
          <Image
            src='/assets/linkedin.png'
            width={30}
            height={30}
            alt='LinkedIn'
            className='cursor-pointer'
          />
          <Image
            src='/assets/twitter.png'
            width={30}
            height={30}
            alt='Twitter'
            className='cursor-pointer'
          />
          <Image
            src='/assets/facebook.png'
            width={30}
            height={30}
            alt='Facebook'
            className='cursor-pointer'
          />
          <Image
            src='/assets/instagram.png'
            width={30}
            height={30}
            alt='Instagram'
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='flex md:hidden justify-between items-center w-full gap-2'>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Company </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              About US
            </Link>
            <Link
              href='#services'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Services
            </Link>
            <Link
              href='#cars'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Cars
            </Link>
            <Link
              href='#partners'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Our Partners
            </Link>
          </div>
        </div>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Services </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Instant Rent
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Private Driver
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Long Trip
            </Link>
            <Link
              href='/admin'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Admin
            </Link>
          </div>
        </div>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Support </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Blog
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              FAQ
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Call Center
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Partner With Us
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
      <div className='hidden md:flex justify-between w-full'>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Company </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              About US
            </Link>
            <Link
              href='#services'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Services
            </Link>
            <Link
              href='#cars'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Cars
            </Link>
            <Link
              href='#partners'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Our Partners
            </Link>
          </div>
        </div>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Services </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Instant Rent
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Private Driver
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Long Trip
            </Link>
            <Link
              href='/admin'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Admin
            </Link>
          </div>
        </div>
        <div className='flex flex-col h-[260px]'>
          <h4 className='text-2xl text-netral-7 font-bold'> Support </h4>
          <div className='flex flex-col mt-5'>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Blog
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              FAQ
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Call Center
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Partner With Us
            </Link>
            <Link
              href='#'
              className='p-2.5 hover:text-red-5 ease-in duration-200'>
              Terms & Condition
            </Link>
          </div>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <BackTop path='#about' />
      </div>
    </div>
  );
};

export default Footer;
