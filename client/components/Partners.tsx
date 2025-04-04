import { partnersList } from "@/constants/partners";

import Image from "next/image";

const Partners = () => {
  return (
    <div className='my-24' id='partners'>
      <div className=''>
        <h1 className='text-4xl text-netral-7 font-bold font-lato text-center'>
          Our Partners
        </h1>
      </div>
      <div className='flex items-center justify-center gap-20  flex-wrap mt-10'>
        {partnersList.map((partner) => (
          <div className='' key={partner.id}>
            <Image
              src={partner.image}
              title={partner.name}
              width={partner.width}
              height={partner.height}
              alt={partner.name}
              className='cursor-pointer hover:scale-125 ease-in duration-300'
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Partners;
