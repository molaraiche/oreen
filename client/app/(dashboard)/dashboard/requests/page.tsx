import { getAllBookings } from "@/api/api";
import DelBtn from "@/components/DelBtn";
import { bookType } from "@/types/types";
import { MdDone, MdEdit } from "react-icons/md";
import moment from "moment";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Requests = async () => {
  const booking = await getAllBookings();

  return (
    <>
      <div className='font-montserrat container mx-auto px-4'>
        <div className='h-[20vh] flex flex-col items-start justify-center'>
          <h1 className='text-red-5 text-4xl md:text-6xl font-bold'>
            Booking List
          </h1>
          <p className='font-medium mt-5 text-sm md:text-base'>
            Here you can freely manage all requests sent by clients
          </p>
        </div>

        {booking.length > 0 ? (
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
                      Message
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      From
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      To
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      Status
                    </th>
                    <th scope='col' className='px-6 py-3'>
                      <span className='sr-only'>Manage</span>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {booking.map((book: bookType) => (
                    <tr
                      key={book._id}
                      className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                      <th
                        scope='row'
                        className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                        {book.name}
                      </th>
                      <td className='px-6 py-4'>{book.phone} </td>

                      <td className='px-6 py-4'> {book.message}</td>
                      <td className='px-6 py-4' title='M/D/Y'>
                        {moment(book.from).format("l")}
                      </td>
                      <td className='px-6 py-4' title='M/D/Y'>
                        {moment(book.to).format("l")}
                      </td>
                      <td className='px-6 py-4'>
                        {book.status === "pending" && (
                          <span className='bg-gray-500 px-4 py-2 rounded text-netral-1'>
                            {book.status}
                          </span>
                        )}
                        {book.status === "rejected" && (
                          <span className='bg-red-500 px-4 py-2 rounded text-netral-1'>
                            {book.status}
                          </span>
                        )}
                        {book.status === "approved" && (
                          <span className='bg-green-500 px-4 py-2 rounded text-netral-1'>
                            {book.status}
                          </span>
                        )}
                      </td>
                      <td className='px-6 py-4 flex items-center justify-center gap-2'>
                        {book.status === "approved" ||
                        book.status === "rejected" ? (
                          <p className='font-medium px-4 py-2.5 rounded bg-gray-500 text-netral-1 flex items-center justify-center'>
                            <span>
                              <MdDone className='w-4 h-4' />
                            </span>
                            <span>Manage</span>
                          </p>
                        ) : (
                          <Link
                            href={`/dashboard/requests/${book._id}`}
                            className=''>
                            <Button className='font-medium px-4 py-2.5 rounded bg-yellow-500 text-netral-1 flex items-center justify-center'>
                              <span>
                                <MdEdit className='w-4 h-4' />
                              </span>
                              <span>Manage</span>
                            </Button>
                          </Link>
                        )}

                        <DelBtn name={book.name} id={book._id} type='booking' />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className='flex items-center justify-center min-h-[60vh]'>
            <h1 className='font-bold font-montserrat'>
              There is no requests yet
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default Requests;
