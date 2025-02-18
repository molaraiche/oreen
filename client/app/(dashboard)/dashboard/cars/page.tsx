import { getAllCars } from "@/api/api";
import { carType } from "@/types/types";
import Link from "next/link";

const Cars = async () => {
  const cars = await getAllCars();
  console.log(cars);
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='h-[20vh] flex flex-col items-start justify-center'>
        <h1 className='text-red-5 text-6xl font-bold'>Cars List</h1>
        <p className='font-medium mt-5'>
          Here you can freely manage all disponible cars you have in your agency
        </p>
      </div>

      <div className='flex items-center justify-end h-[10vh] pr-16'>
        <Link
          href='/dashboard/cars/add'
          className='px-6 py-2 bg-red-6 hover:bg-red-5 text-netral-1 '>
          Add Car
        </Link>
      </div>

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
                  Situation
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
              {cars.map((car: carType) => (
                <tr
                  key={car.id}
                  className='bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600'>
                  <th
                    scope='row'
                    className='px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white'>
                    {car.name}
                  </th>
                  <td className='px-6 py-4'>{car.brand}</td>
                  <td className='px-6 py-4'>{car.model} </td>
                  <td className='px-6 py-4'>
                    {car.status === "free" && (
                      <span className='px-6 py-2.5 bg-gray-400 font-semibold uppercase text-netral-1'>
                        {car.status}
                      </span>
                    )}
                    {car.status === "pending" && (
                      <span className='px-6 py-2.5 bg-gray-500 font-semibold uppercase'>
                        {car.status}
                      </span>
                    )}
                    {car.status === "approved" && (
                      <span className='px-6 py-2.5 bg-green-500  font-semibold uppercase'>
                        {car.status}
                      </span>
                    )}
                    {car.status === "rejected" && (
                      <span className='px-6 py-2.5 bg-red-500  font-semibold uppercase'>
                        {car.status}
                      </span>
                    )}
                  </td>
                  <td className='px-6 py-4'> ${car.price ? car.price : 100}</td>
                  <td className='px-6 py-4 text-right'>
                    <Link
                      href='/dashboard/cars/edit'
                      className='font-medium  px-6 py-2.5 bg-blue-500 text-netral-1 mr-2'>
                      Edit
                    </Link>
                    <Link
                      href='/dashboard/cars/edit'
                      className='font-medium px-6 py-2.5 bg-red-500 text-netral-1 ml-2'>
                      Delete
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cars;
