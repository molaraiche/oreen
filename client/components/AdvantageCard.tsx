import { advantageCardType } from "@/types/types";
import Image from "next/image";

const AdvantageCard = ({ image, name, description }: advantageCardType) => {
  return (
    <div className='flex items-center gap-4 w-full lg:w-1/3 my-8 h-[105px] '>
      <div className='w-[20%]'>
        <Image src={image} alt={name} width={75} height={75} />
      </div>
      <div className=' w-[80%]'>
        <h6 className='text-netral-7 text-2xl font-lato font-bold p-2.5'>
          {name}
        </h6>
        <p className='text-netral-5 p-2.5'>{description}</p>
      </div>
    </div>
  );
};

export default AdvantageCard;
