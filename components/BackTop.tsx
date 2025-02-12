import Link from "next/link";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const BackTop = ({ path }: { path: string }) => {
  return (
    <Link
      href={path}
      className='w-12 h-12 bg-netral-3 flex items-center justify-center absolute -bottom-20 rounded-full text-netral-1 cursor-pointer animate__animated animate__heartBeat animate__infinite	animate__delay-4s animate__slower '>
      <MdKeyboardDoubleArrowUp className='w-6 h-6' />
    </Link>
  );
};

export default BackTop;
