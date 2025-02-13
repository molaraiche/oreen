import Link from "next/link";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";

const ScrollTo = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      className='w-12 h-12 bg-netral-3 flex items-center justify-center absolute bottom-10 md:bottom-28 rounded-full text-netral-1 cursor-pointer animate__animated animate__heartBeat animate__infinite	animate__delay-4s animate__slower '>
      <MdKeyboardDoubleArrowDown className='w-6 h-6' />
    </Link>
  );
};

export default ScrollTo;
