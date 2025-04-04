import { testimonialCardType } from "@/types/types";
import Image from "next/image";

const TesteminialCard = ({
  profile,
  name,
  comment,
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
        {review === 0 && (
          <Image src={`/assets/0.svg`} alt='Rates' width={123} height={20} />
        )}
        {review === 1 && (
          <Image src={`/assets/1.svg`} alt='Rates' width={123} height={20} />
        )}
        {review === 2 && (
          <Image src={`/assets/2.svg`} alt='Rates' width={123} height={20} />
        )}
        {review === 3 && (
          <Image src={`/assets/3.svg`} alt='Rates' width={123} height={20} />
        )}
        {review === 4 && (
          <Image src={`/assets/4.svg`} alt='Rates' width={123} height={20} />
        )}
        {review === 5 && (
          <Image src={`/assets/5.svg`} alt='Rates' width={123} height={20} />
        )}
      </div>
      <p className='text-netral-5 text-lg p-2.5'>{comment}</p>
      <div className='flex items-center gap-5 mt-6 p-2.5'>
        <div className=''>
          {profile ? (
            <Image src={profile} alt={name} width={75} height={75} />
          ) : (
            <Image
              src='/assets/profile.jpg'
              alt={name}
              width={75}
              height={75}
              className='rounded-full'
            />
          )}
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
