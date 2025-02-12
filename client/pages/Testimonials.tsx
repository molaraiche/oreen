import TesteminialCard from "@/components/TesteminialCard";
import { testimonials } from "@/constants/testimonials";
import { testimonialCardType } from "@/types/types";
import Link from "next/link";

const Testimonials = () => {
  return (
    <div id='testimonials' className='my-20'>
      {" "}
      <div className='text-center'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>OUR REVIEW</h4>
          <h2 className='text-5xl text-netral-7 font-bold font-lato p-2.5'>
            What They Say ?
          </h2>
          <p className='text-netral-5 py-2.5'>
            Here are some comments from our customers, be one of them
          </p>
        </div>
      </div>
      <div className='flex gap-5 justify-center mt-12 flex-wrap lg:flex-nowrap'>
        {testimonials.map((testimonial: testimonialCardType) => (
          <TesteminialCard
            key={testimonial.id}
            image={testimonial.image}
            name={testimonial.name}
            location={testimonial.location}
            review={testimonial.review}
          />
        ))}
      </div>
      <div className='mt-20 flex items-center justify-center'>
        <Link
          href='/testimonials'
          className='px-6 py-2.5 bg-red-5 text-netral-1 font-medium font-montserrat'>
          See All
        </Link>
      </div>
    </div>
  );
};

export default Testimonials;
