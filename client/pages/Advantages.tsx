import AdvantageCard from "@/components/AdvantageCard";
import { advantages } from "@/constants/advantages";
import { advantageCardType } from "@/types/types";

const Advantages = () => {
  return (
    <div className='my-20'>
      {" "}
      <div className='text-center'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>ADVANTAGES</h4>
          <h2 className='text-4xl text-netral-7 font-bold font-lato text-center p-2.5'>
            Why Choose Us ?{" "}
          </h2>
          <p className='text-netral-5 py-2.5'>
            We present many guarantees and advantages when you rent a car with
            us for your trip. Here are some of the advantages that you will get
          </p>
        </div>
      </div>
      <div className='flex flex-wrap gap-y-12 flex-1 items-center justify-center my-12'>
        {advantages.map((advantage: advantageCardType) => (
          <AdvantageCard
            key={advantage.id}
            image={advantage.image}
            name={advantage.name}
            description={advantage.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Advantages;
