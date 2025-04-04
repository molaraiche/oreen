"use client";
import { CiLogout } from "react-icons/ci";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
const Logout = () => {
  const router = useRouter();
  const handleLogout = () => {
    Cookies.remove("token");
    router.push("/admin");
  };
  return (
    <div className='text-netral-1 w-full flex items-center justify-center'>
      <button
        onClick={handleLogout}
        className=' bg-red-5 text-netral-1 py-2 px-2 md:px-6 rounded-[10px] z-50 flex items-center justify-center gap-2 font-semibold'>
        <CiLogout className='w-6 h-6' />
        <span className='hidden md:flex'>Logout</span>
      </button>
    </div>
  );
};

export default Logout;
