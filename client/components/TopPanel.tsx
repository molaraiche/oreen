import Link from "next/link";

export default async function TopPanel() {
  return (
    <div className=' h-[8vh] flex items-center justify-between w-full bg-red-5 text-white px-4 text-center font-montserrat'>
      <p className=''>Welcome to the best rental car website</p>
      <Link href='/dashboard' className='cursor-pointer font-medium'>
        Admin Dashboard
      </Link>
    </div>
  );
}
