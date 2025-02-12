import { testimonialCardType } from "@/types/types";
import Image from "next/image";

const TesteminialCard = ({
  image,
  name,
  location,
  review,
}: testimonialCardType) => {
  return (
    <div className='w-[80%] lg:w-[382px]  px-1.5 py-11 shadow-softRed'>
      <div className='flex justify-between items-center'>
        <Image
          src='/assets/quote.svg'
          alt='Quote icon'
          width={39}
          height={20}
        />
        <Image
          src={`/assets/${review}.svg`}
          alt='Rates'
          width={123}
          height={20}
        />
      </div>
      <p className='text-netral-5 text-lg p-2.5'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque nam
        suscipit amet nec eget fermentum, elementum purus aliquet. Porttitor
        elementum a felis, tempus erat orci.
      </p>
      <div className='flex items-center gap-5 mt-6 p-2.5'>
        <div className=''>
          <Image src={image} alt='' width={75} height={75} />
        </div>
        <div className=''>
          <h6 className='text-netral-7 text-2xl leading-[31px]'>{name} </h6>
          <p className='text-netral-4 text-xl leading-6'> {location} </p>
        </div>
      </div>
    </div>
  );
};

export default TesteminialCard;
