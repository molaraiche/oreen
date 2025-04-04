import { getAllCars } from "@/api/api";
import CarCard from "@/components/CarCard";
import { CarType } from "@/types/types";

const Cars = async () => {
  const cars = await getAllCars();

  return (
    <div className=''>
      <div className='text-center'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>OUR CARS</h4>
          <h2 className='text-4xl text-netral-7 font-bold font-lato text-center py-2.5'>
            Choose Your Suitable Car
          </h2>
          <p className='text-netral-5 p-2.5'>
            Here is our full list of cars that available in our agency
          </p>
        </div>
      </div>

      {cars.length > 0 ? (
        <div className='flex gap-5 w-full justify-center lg:justify-between flex-wrap my-12 container mx-auto px-4 gap-y-10 '>
          {cars.map((car: CarType) => (
            <CarCard
              key={car._id}
              image={car.mainImage || ""}
              name={car.name}
              price={car.price}
              review={car.review || 0}
              _id={car._id}
              hot={false}
            />
          ))}
        </div>
      ) : (
        <div className='min-h-[10.7vh] flex items-center justify-center'>
          <div className='loader'></div>
        </div>
      )}
    </div>
  );
};

export default Cars;
