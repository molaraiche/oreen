import CarCard from "@/components/CarCard";
import Partners from "@/components/Partners";
import { cars } from "@/constants/cars";
import { carCardType } from "@/types/types";
import Link from "next/link";

const Cars = () => {
  return (
    <div
      id='cars'
      className=' flex flex-col items-center justify-center w-full'>
      <Partners />
      <div className='text-center'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>POPULAR CAR</h4>
          <h2 className='text-4xl text-netral-7 font-bold font-lato text-center py-2.5'>
            Choose Your Suitable Car
          </h2>
          <p className='text-netral-5 p-2.5'>
            We present popular cars that are rented by customers to maximize
            your comfort on long trips.
          </p>
        </div>
      </div>
      <div className='flex gap-5 w-full justify-center lg:justify-between flex-wrap my-12'>
        {cars.map((car: carCardType) => (
          <CarCard
            key={car.id}
            image={car.image}
            name={car.name}
            price={car.price}
            review={car.review}
          />
        ))}
      </div>
      <div className='mb-20'>
        <Link
          href='/cars'
          className='px-6 py-2.5 bg-red-5 text-netral-1 font-medium font-montserrat'>
          See All
        </Link>
      </div>
    </div>
  );
};

export default Cars;
