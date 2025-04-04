import { getAllComments } from "@/api/api";
import TesteminialCard from "@/components/TesteminialCard";
import { testimonialCardType } from "@/types/types";
import Link from "next/link";

const Testimonials = async () => {
  const testimonials = await getAllComments();
  console.log(testimonials);
  return (
    <>
      {testimonials.filter(
        (testimonial: testimonialCardType) => testimonial.hot
      ).length > 0 ? (
        <div id='testimonials' className='my-20'>
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
            {testimonials
              .filter((testimonial: testimonialCardType) => testimonial.hot)
              .map((testimonial: testimonialCardType) => (
                <TesteminialCard
                  comment={testimonial.comment}
                  key={testimonial._id}
                  profile={testimonial.profile}
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
      ) : (
        <div id='testimonials' className='my-20'>
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

          <div className='mt-20 flex items-center justify-center'>
            <Link
              href='/testimonials'
              className='px-6 py-2.5 bg-red-5 text-netral-1 font-medium font-montserrat'>
              Add A Review
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Testimonials;
