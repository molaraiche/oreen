import { getAllCars } from "@/api/api";
import DelBtn from "@/components/DelBtn";
import { CarType } from "@/types/types";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

const Cars = async () => {
  const cars = await getAllCars();
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='h-[20vh] flex flex-col items-start justify-center'>
        <h1 className='text-red-5 text-6xl font-bold'>Cars List</h1>
        <p className='font-medium mt-5'>
          Here you can freely manage all disponible cars you have in your agency
        </p>
      </div>

      <div className='flex items-center justify-end h-[10vh] pr-16 my-10 md:my-0'>
        <Link
          href='/dashboard/cars/add'
          className='px-6 py-2 bg-red-6 hover:bg-red-5 text-netral-1 '>
          Add Car
        </Link>
      </div>
      {cars.length > 0 ? (
        <div className='min-h-[30vh] flex items-center justify-center w-full'>
          <div className='relative overflow-x-auto shadow-md sm:rounded-lg w-[90%] '>
            <table className='w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400'>
              <thead className='text-xs text-gray-700 uppercase bg-red-1 dark:bg-gray-700 dark:text-gray-400'>
                <tr>
                  <th scope='col' className='px-6 py-3'>
                    Name
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Brand
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Model
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    Price
                  </th>
                  <th scope='col' className='px-6 py-3'>
                    <span className='sr-only'>Manage</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {cars.map((car: CarType) => (
                  <tr
                    key={car._id}
                    className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                    <th
                      scope='row'
                      className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                      {car.name}
                    </th>
                    <td className='px-6 py-4'>{car.brand}</td>
                    <td className='px-6 py-4'>{car.model} </td>

                    <td className='px-6 py-4'>
                      ${car.price ? car.price : 100}
                    </td>
                    <td className='px-6 py-4 flex items-center justify-center gap-2'>
                      <Link
                        href={`/dashboard/cars/edit/${car._id}`}
                        className='font-medium px-6 py-2.5 bg-blue-500 text-netral-1 flex items-center justify-center'>
                        <span>
                          <MdEdit className='w-4 h-4' />
                        </span>
                        <span>Edit</span>
                      </Link>
                      <DelBtn name={car.name} id={car._id ?? 0} type='cars' />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className='flex items-center justify-center min-h-[60vh] flex-col'>
          <h1 className='font-bold font-montserrat'>There is no Cars yet</h1>
          <div className='flex items-center justify-center h-[10vh]'>
            <Link
              href='/dashboard/cars/add'
              className='px-6 py-2 bg-red-6 hover:bg-red-5 text-netral-1 '>
              Add Car
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cars;
