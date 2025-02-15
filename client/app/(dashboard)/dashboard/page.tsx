import { Dashboard } from "@/constants/dashboard";
import { dashCardType } from "@/types/types";
import DashboardCard from "@/components/DashboardCard";

const page = () => {
  return (
    <div className='font-montserrat'>
      <div className='flex flex-col h-[20vh] justify-center pl-4'>
        <h1 className='text-3xl md:text-4xl font-bold text-nteral-9'>
          Welcome to the Admin Dashboard
        </h1>
        <p className='text-netral-7 mt-3'>
          Here you can freely manage all your web application with a dynamic way
        </p>
      </div>

      <div className='flex items-center justify-center gap-4 h-[80vh] flex-wrap my-20 md:my-0 px-5'>
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
