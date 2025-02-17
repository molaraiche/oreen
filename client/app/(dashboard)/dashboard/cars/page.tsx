const Cars = () => {
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
            <tbody>{/* fetch data here */}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cars;
