import Image from "next/image";
import Link from "next/link";

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex justify-center w-full items-center my-20 flex-col md:flex-row gap-y-10 md:gap-y-0'>
      <div className='flex flex-col'>
        <div className=''>
          <div className='font-lato'>
            <h4 className='text-red-3 text-xl font-bold '>GET IN TOUCH</h4>
            <h2 className='text-5xl text-netral-7 font-bold font-lato p-2.5'>
              Contact Us
            </h2>
            <p className='text-netral-5 py-2.5 w-fit md:w-[465px]'>
              if you need consultation with us, you can write a message or call
              us, we will respond as quickly as possible
            </p>
          </div>
        </div>
        <div className='mt-6'>
          <ul>
            <li className='flex items-center gap-5 p-2.5'>
              <span>
                <Image
                  src='/assets/mail.svg'
                  alt='our mail: lorenna@gmail.com'
                  width={30}
                  height={30}
                />
              </span>
              <span className='text-neutral-500 font-montserrat font-medium leading-[18px]'>
                lorenna@gmail.com
              </span>
            </li>
            <li className='flex items-center gap-5 p-2.5'>
              <span>
                <Image
                  src='/assets/phone.svg'
                  alt='our phone number: lorenna@gmail.com'
                  width={30}
                  height={30}
                />
              </span>
              <span className='text-neutral-500 font-montserrat font-medium leading-[18px]'>
                +62 8221 1222 0001
              </span>
            </li>
            <li className='flex items-center gap-5 p-2.5'>
              <span>
                <Image
                  src='/assets/clock.svg'
                  alt='working time: Everyday : 08.00-21.00'
                  width={30}
                  height={30}
                />
              </span>
              <span className='text-neutral-500 font-montserrat font-medium leading-[18px]'>
                Everyday : 08.00-21.00
              </span>
            </li>
            <li className='flex items-center gap-5 p-2.5'>
              <span>
                <Image
                  src='/assets/local.svg'
                  alt='Location: Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222'
                  width={30}
                  height={30}
                />
              </span>
              <span className='text-neutral-500 font-montserrat font-medium leading-[18px]'>
                Jl. Raya Cihaluan No.112 Tangerang Selatan, Indonesia 41222
              </span>
            </li>
          </ul>
        </div>
        <div className='flex items-center gap-4 mt-16'>
          <Image
            src='/assets/linkedin.png'
            width={30}
            height={30}
            alt='LinkedIn'
            className='cursor-pointer'
          />
          <Image
            src='/assets/twitter.png'
            width={30}
            height={30}
            alt='Twitter'
            className='cursor-pointer'
          />
          <Image
            src='/assets/facebook.png'
            width={30}
            height={30}
            alt='Facebook'
            className='cursor-pointer'
          />
          <Image
            src='/assets/instagram.png'
            width={30}
            height={30}
            alt='Instagram'
            className='cursor-pointer'
          />
        </div>
      </div>
      <div className='gap-12'>
        <Image
          src='/assets/google-map.png'
          alt='Google map'
          width={610}
          height={447}
        />
        <div className='mt-16'>
          <Link
            href='https://www.google.com/maps'
            target='_blank'
            className='py-2.5 px-6 bg-red-5 text-netral-1 shadow-softRed'>
            <span className='p-2.5'>Office Center Map</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
