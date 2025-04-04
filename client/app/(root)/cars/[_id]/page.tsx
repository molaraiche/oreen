import { getCarById } from "@/api/api";
import { CarType } from "@/types/types";
import { Metadata } from "next";
import Image from "next/image";

type Params = {
  _id: string;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Car Details | Oreen`,
    description: `Car Details | Oreen`,
  };
}

export default async function CarDetails(props: { params: Params }) {
  const { params } = props;
  const car: CarType = await getCarById(params._id);

  return (
    <div className='container mx-auto px-4 flex items-center justify-between font-montserrat '>
      <div className='w-1/2 flex items-center justify-center'>
        <div className=''>
          {car.mainImage && (
            <Image
              src={car.mainImage}
              width={400}
              height={400}
              alt={car.description || ""}
            />
          )}
        </div>
        <div className=''>
          {car.secondaryImages &&
            car.secondaryImages?.map((img) => (
              <Image src={img} alt={img} width={100} height={100} key={img} />
            ))}
        </div>
      </div>
      <div className=' flex flex-col w-1/2'>
        <h1 className='text-4xl  font-bold'>{car.name} </h1>
        <div className='prose mt-5 font-montserrat'>{car.description}</div>
        <div className='mt-5'>
          <p className='font-semibold text-green-500 text-2xl'>
            {" "}
            Price: ${car.price}{" "}
          </p>
        </div>
        <p
          className='flex items-center gap-2 font-bold font-montserrat mt-5'
          title={`this car has ${car.review} rates from the drivers who take it before`}>
          <Image
            src={"/assets/star.svg"}
            alt='review star'
            width={24}
            height={24}
          />
          {car.review || 0}/5
        </p>
        <div className='flex jbustify-between items-center mt-5 w-full gap-5'>
          <p className='bg-netral-4 py-2.5 px-6 rounded font-medium'>
            {" "}
            {car.model}{" "}
          </p>
          <p className='bg-netral-4 py-2.5 px-6 rounded font-medium'>
            {" "}
            {car.condition}{" "}
          </p>
          <p className='bg-netral-4 py-2.5 px-6 rounded font-medium'>
            {" "}
            {car.type}{" "}
          </p>
          <p className='bg-netral-4 py-2.5 px-6 rounded font-medium'>
            {" "}
            {car.brand}{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
