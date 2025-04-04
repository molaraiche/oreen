import { getBookById } from "@/api/api";
import Actions from "@/components/Actions";

import { bookType } from "@/types/types";
import moment from "moment";

const ManageRequests = async ({
  params,
}: {
  params: { _id?: string | number };
}) => {
  if (!params._id) {
    throw new Error("ID parameter is missing");
  }
  const book: bookType = await getBookById(params._id);
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='flex flex-col items-center justify-center h-[20vh]'>
        <h1 className='text-4xl font-bold'>Request Details</h1>
        <p className='mt-5'>
          Here is the booking request coming from{" "}
          <span className='text-red-5 font-bold'> {book.name} </span>
        </p>
      </div>
      <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
        <thead className='text-xs text-gray-700 uppercase bg-red-1 dark:bg-gray-700 dark:text-gray-400'>
          <tr>
            <th scope='col' className='px-6 py-3'>
              Element
            </th>
            <th scope='col' className='px-6 py-3'>
              Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">Full Name</td>
            <td className="">{book.name}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">Phone Number</td>
            <td className="">{book.phone}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">From</td>
            <td className="">{moment(book.to).format("LL")}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">To</td>
            <td className="">{moment(book.to).format("LL")}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">Message</td>
            <td className="">{book.message}</td>
          </tr>
          <tr className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600 h-14 font-bold text-lg'>
            <td className="">Status</td>
            <td className="">{book.status}</td>
          </tr>
        </tbody>
      </table>

      <Actions _id={book._id} />
    </div>
  );
};

export default ManageRequests;
