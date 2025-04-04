import { dashCardType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({ image, name, path }: dashCardType) => {
  return (
    <Link
      href={`/dashboard/${path}`}
      className='relative shadow-softRed w-full md:w-1/2 group rounded text-center'
      title={`This card takes you directly to the ${name} management system`}>
      <Image
        src={image}
        alt={name}
        width={600}
        height={200}
        className='w-full h-[400px] object-cover rounded'
      />
      <p className='absolute top-0 left-0 right-0 w-full h-full flex items-center justify-center text-netral-1 font-bold text-2xl bgDash p-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
        {name}
      </p>
    </Link>
  );
};

export default DashboardCard;
