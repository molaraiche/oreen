import CarCard from "@/components/CarCard";
import Partners from "@/components/Partners";

const Cars = () => {
  return (
    <div id='cars' className=' flex flex-col items-center justify-center'>
      <Partners />
      <div className='h-[80vh]'>
        <CarCard />
      </div>
    </div>
  );
};

export default Cars;
