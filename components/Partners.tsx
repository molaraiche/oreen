import { partnersList } from "@/constants/partners";

import Image from "next/image";

const Partners = () => {
  return (
    <div className='flex items-center justify-center gap-20 h-[20vh] my-10 flex-wrap'>
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
  );
};

export default Partners;
