import Image from "next/image";

const Admin = () => {
  return (
    <section className='font-montserrat'>
      <div className='text-center'>
        <div className='flex items-center justify-center h-[10vh]'>
          <Image
            src='./assets/logo.svg'
            alt='OREEN LOGO'
            width={200}
            height={40}
          />
        </div>
        <div className='font-lato'>
          <h2 className='text-4xl text-netral-7 font-bold font-lato text-center py-2.5'>
            Admin Dashboard Login
          </h2>
        </div>
      </div>
    </section>
  );
};

export default Admin;
