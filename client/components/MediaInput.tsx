import { formType } from "@/types/types";
import { CiImageOn, CiVideoOn } from "react-icons/ci";

const MediaInput = ({ label, name, id, img, title }: formType) => {
  return (
    <div className=' flex flex-col font-montserrat my-5 w-full'>
      <label
        htmlFor={id}
        className='font-medium w-full flex items-center justify-center gap-2'>
        {label}
        <span>
          {img == "img" ? (
            <CiImageOn id={img} className='h-8 w-8 text-red-5' />
          ) : (
            <CiVideoOn id={img} className='h-8 w-8 text-red-5' />
          )}
        </span>
      </label>
      <input
        type='file'
        id={id}
        name={name}
        title={title}
        className='outline-none border-2 border-netral-7 rounded h-12 pl-2 focus:border-red-5 w-full mt-1 hidden'
      />
    </div>
  );
};

export default MediaInput;
