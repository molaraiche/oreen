import ScrollTo from "@/components/ScrollTo";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const Home = () => {
  return (
    <div
      id='about'
      className=' flex items-center justify-center h-[80vh] flex-col md:flex-row gap-10 md:gap-0 my-[6rem] md:my-0'>
      <div className=' w-full md:w-1/2'>
        <h1 className='text-[56px] font-lato font-bold text-netral-8 leading-[67px] my-2.5'>
          We Have Prepared a Car For Your Trip
        </h1>
        <p className='text-xl font-lato font-light text-netral-7 leading-6 mt-2.5'>
          We have many types of cars that are ready for you to travel anywhere
          and anytime.
        </p>
        <div className='mt-12 flex gap-2.5'>
          <Button className='py-2.5 px-6 bg-red-5 text-netral-1  text-xl'>
            Get In Touch
          </Button>
          <Button className='py-2.5 px-6 border-red-5 text-red-5  bg-transparent border-2 text-xl'>
            Our Car
          </Button>
        </div>
      </div>
      <div className=' w-full md:w-1/2 flex items-center justify-center'>
        <Image
          src='/assets/toyota_camary.png'
          alt='TOYOTA'
          width={803}
          height={545}
          className='w-full h-auto'
        />
      </div>
      <ScrollTo path='#cars' />
    </div>
  );
};

export default Home;
