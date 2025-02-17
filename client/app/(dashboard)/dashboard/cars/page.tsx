import { getAllCars } from "@/api/api";
import { carType } from "@/types/types";

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
                  <td className='px-6 py-4'> ${car.price ? car.price : 100}</td>
                  <td className='px-6 py-4 text-right'>
                    <a
                      href='#'
                      className='font-medium text-blue-600 dark:text-blue-500 hover:underline'>
                      Edit
                    </a>
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
