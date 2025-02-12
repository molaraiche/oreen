import { Button } from "@/components/ui/button";
import { CiMail } from "react-icons/ci";

const Newsletter = () => {
  return (
    <div className='my-20  py-[50px]'>
      <div className='text-center'>
        <div className='font-lato'>
          <h2 className='text-4xl text-netral-7 font-bold font-lato p-2.5'>
            SUBSCRIBE OUR NEWS
          </h2>
          <p className='text-netral-5 py-2.5'>
            We can help you provide the latest news whenever and wherever you
            are via email
          </p>
        </div>
      </div>
      <div className='flex justify-center gap-3 items-center mt-7 '>
        <div className='relative flex items-center justify-center'>
          <input
            type='email'
            placeholder='example@gmail.com'
            required
            className='pl-10 pr-4 py-2 border h-14 rounded-md w-full md:w-[460px] text-netral-9 focus:outline-none placeholder:text-netral-3'
          />
          <div className='absolute inset-y-0 left-0 flex items-center pl-3 text-netral-3'>
            <CiMail className='w-5 h-5' />
          </div>
        </div>
        <Button className='bg-red-5 shadow-softRed text-netral-1 px-4 py-1.5'>
          {" "}
          <span className='p-2.5'>Subscribe</span>
        </Button>
      </div>
    </div>
  );
};

export default Newsletter;
