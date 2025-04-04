import { getAllComments } from "@/api/api";
import HotManage from "@/components/HotManage";
import { testimonialCardType } from "@/types/types";
import Link from "next/link";

const Comments = async () => {
  const testimonials = await getAllComments();
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='h-[20vh] flex flex-col items-start justify-center'>
        <h1 className='text-red-5 text-4xl md:text-6xl font-bold'>
          Comments List
        </h1>
        <p className='font-medium mt-5 text-sm md:text-base'>
          Here you can freely chose if you want the comments to appear in the
          marketing page or no
        </p>
      </div>

      {testimonials.length > 0 ? (
        <div className='min-h-[30vh] flex items-center justify-center w-full my-10 md:my-5'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] '>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-red-1 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Phone
                  </th>

                  <th scope='col' className='px-6 py-3'>
                    Rate
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Comment
                  </th>

                  <th scope='col' className='px-6 py-3'>
                    Show
                  </th>
                </tr>
              </thead>
              <tbody>
                {testimonials.map((testimonial: testimonialCardType) => (
                  <tr
                    key={testimonial._id}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {testimonial.name}
                    </th>
                    <td className='px-6 py-4'>{testimonial.phone} </td>

                    <td className='px-6 py-4'> {testimonial.review}</td>
                    <td
                      className='px-6 py-4 max-w-[200px]'
                      title={testimonial.comment}>
                      {testimonial.comment.length > 50
                        ? `${testimonial.comment.substring(0, 50)}...`
                        : testimonial.comment}
                    </td>
                    <td>
                      <HotManage
                        _id={testimonial._id}
                        exHot={testimonial.hot as boolean}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[60vh] flex-col'>
          <h1 className='font-bold text-4xl text-center font-montserrat'>
            There is no Reviews yet
          </h1>
        </div>
      )}

      <div className='flex items-center justify-center mt-5'>
        <Link
          href='/#testimonials'
          className='py-2.5 px-8 bg-red-5 text-netral-1 rounded text-center'>
          See the Hot Testimonials
        </Link>
      </div>
    </div>
  );
};

export default Comments;
