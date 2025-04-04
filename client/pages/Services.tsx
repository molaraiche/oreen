import ServiceCard from "@/components/ServiceCard";
import { services } from "@/constants/services";
import { serviceCardType } from "@/types/types";

const Services = () => {
  return (
    <div id='services' className='my-20'>
      <div className='text-center py-10'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>SERVICES</h4>
          <h2 className='text-4xl text-netral-7 font-bold font-lato text-center py-2.5'>
            Our Services
          </h2>
          <p className='text-netral-5 p-2.5'>
            Our service is not only renting a car, but we also provide a private
            chauffeur service that can guide you on your trip and also longtrip
            packages to support your travel needs.
          </p>
        </div>
      </div>
      <div className='flex items-center justify-center md:justify-between my-12 gap-5 flex-wrap md:flex-nowrap'>
        {services.map((service: serviceCardType) => (
          <ServiceCard
            key={service.type}
            type={service.type}
            image={service.image}
            name={service.name}
            width={service.width}
            height={service.height}
            description={service.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
