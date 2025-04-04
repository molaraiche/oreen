import { Dashboard } from "@/constants/dashboard";
import { dashCardType } from "@/types/types";
import DashboardCard from "@/components/DashboardCard";

const page = () => {
  return (
    <div className='font-montserrat'>
      <div className='flex flex-col h-[30vh] justify-center pl-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-nteral-9'>
          Welcome to the Admin Dashboard
        </h1>
        <p className='text-netral-7 mt-3'>
          Here you can freely manage all your web application with a dynamic way
        </p>
      </div>

      <div className='flex gap-5 px-5 flex-wrap md:flex-nowrap justify-center w-full'>
        {Dashboard.map((dash: dashCardType) => (
          <DashboardCard
            key={dash.id}
            image={dash.image}
            name={dash.name}
            path={dash.path}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
