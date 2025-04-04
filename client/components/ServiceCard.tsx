"use client";
import { useEffect } from "react";
import { serviceCardType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";

const ServiceCard = ({
  type,
  image,
  name,
  width,
  height,
  description,
}: serviceCardType) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init();
    }
  }, []);
  return (
    <div
      id={type}
      className={`w-[400px] h-[501px] flex flex-col items-center justify-center border-b-[5px] hover:border-red-5 border-netral-7 ease-in-out duration-300 cursor-pointer hover:scale-110 my-5 lg:my-0`}
      data-aos='flip-down'>
      <div className='flex items-center justify-center flex-col gap-3'>
        <Image
          src={image}
          alt={name}
          width={width}
          height={height}
          className='fgrayscale'
        />
        <h5 className='text-netral-2 text-2xl font-lato font-bold'>{name}</h5>
      </div>
      <p className='text-netral-3 text-center mt-2.5'>{description}</p>
      <div className='flex items-center justify-center mt-6'>
        <Link
          href='/#readmore'
          className='px-6 py-2.5 bg-netral-1 border-2 border-netral-7 text-netral-7 font-bold font-lato text-center hover:bg-red-5 hover:border-red-5 hover:text-netral-1 ease-in duration-300'>
          Read More
        </Link>
      </div>
    </div>
  );
};

export default ServiceCard;
