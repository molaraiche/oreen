import Image from "next/image";
import { Button } from "./ui/button";
import { BsTelephone } from "react-icons/bs";

export interface carCardType {
  id: number;
  image: string;
  name: string;
  price: number;
  review: number;
}
const CarCard = ({ image, name, price, review }: carCardType) => {
  return (
    <div className='shadow-carCardShadow '>
      <div className='bg-netral-2 md:w-[400px] md:h-[280px] flex items-center justify-center'>
        <Image
          src={image || "/assets/Marcedes Benz.png"}
          alt='Marcedes Benz'
          width={335}
          height={165}
          className='bg-cover cursor-pointer w-full h-auto md:w-[335px] md:h-[165px] flex items-center justify-center'
        />
      </div>
      <div className='p-4'>
        <p className='font-lato font-bold text-netral-7 text-2xl '>
          {name || "Marcedes Benz"}
        </p>
        <div className='flex items-center justify-between'>
          <p className='text-netral-5'>
            <span className='text-3xl font-black font-lato text-netral-9'>
              ${price || 132}
            </span>
            /Day
          </p>
          <p
            className='flex items-center gap-2'
            title={`this car has ${review} rates from the drivers who take it before`}>
            <Image
              src={"/assets/star.svg"}
              alt='review star'
              width={24}
              height={24}
            />
            {review || 5}/5
          </p>
        </div>
      </div>
      <div className='p-4'>
        <Button className='border-2 border-netral-7 px-6 py-2.5 w-full flex justify-between hover:bg-red-5  text-netral-7 hover:text-netral-1 hover:border-red-5'>
          <span className='w-[10%]'>
            <BsTelephone className='font-bold ' />
          </span>
          <span className='w-[90%] text-xl'>Book Now</span>
        </Button>
      </div>
    </div>
  );
};

export default CarCard;
