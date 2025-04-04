import { formType } from "@/types/types";
import { CiImageOn, CiVideoOn } from "react-icons/ci";

const MediaInput = ({ name, id, img, title, onChange, multiple }: formType) => {
  return (
    <div className=' flex flex-col font-montserrat my-5 w-full'>
      <label
        htmlFor={id}
        className='font-medium w-full flex items-center justify-center gap-2'>
        {title}
        <span>
          {img == "img" ? (
            <CiImageOn className='h-8 w-8 text-red-5' />
          ) : (
            <CiVideoOn className='h-8 w-8 text-red-5' />
          )}
        </span>
      </label>
      <input
        type='file'
        id={id}
        multiple={multiple}
        name={name}
        title={title}
        onChange={onChange}
        className='outline-none border-2 border-netral-7 rounded h-12 pl-2 focus:border-red-5 w-fit mt-1 hidden'
      />
    </div>
  );
};

export default MediaInput;
