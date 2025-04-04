import { getAllComments } from "@/api/api";
import Reviews from "@/components/Reviews";
import TesteminialCard from "@/components/TesteminialCard";
import { testimonialCardType } from "@/types/types";

const Testimonials = async () => {
  const mainTestimonials = await getAllComments();
  return (
    <>
      <div>
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
          <div className='flex gap-5 flex-wrap items-center justify-center my-5'>
            {mainTestimonials.map((testimonial: testimonialCardType) => (
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
        </div>
      </div>

      <Reviews />
    </>
  );
};

export default Testimonials;
