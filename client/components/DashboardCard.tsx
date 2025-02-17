import { dashCardType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";

const DashboardCard = ({ image, name, path }: dashCardType) => {
  return (
    <Link
      href={`/dashboard/${path}`}
      className='relative shadow-softRed'
      title={`this card take you directly to the ${name} management system`}>
      <Image
        src={image}
        alt={name}
        width={600}
        height={200}
        className='bg-cover w-full h-[300px]'
      />
      <p className='absolute top-0 left-0 right-0 w-full h-full text-netral-1 font-bold text-2xl bgDash p-2.5'>
        {name}
      </p>
    </Link>
  );
};

export default DashboardCard;
