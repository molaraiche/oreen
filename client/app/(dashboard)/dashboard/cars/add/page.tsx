import FormGrp from "@/components/FormGrp";
import MediaInput from "@/components/MediaInput";
import Link from "next/link";

const AddCar = () => {
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='flex items-center justify-center flex-col h-[20vh]  text-center'>
        <h1 className='text-4xl font-bold text-red-5'>Add New Car</h1>
        <p className='mt-3 text-netral-7'>
          Here you can add new car to the collection you own.
        </p>
      </div>
      <form className='h-[80vh] flex w-full flex-col'>
        <div className='flex items-center justify-between w-full gap-5'>
          <FormGrp
            type={"text"}
            name={"name"}
            label={"Name"}
            placeholder={"Car Name ex: Audi Q5"}
          />
          <FormGrp
            type={"text"}
            name={"model"}
            label={"Model"}
            placeholder={" Model ex: Quattro"}
          />
          <FormGrp
            type={"text"}
            name={"brand"}
            label={"Brand"}
            placeholder={"Brand ex: Audi"}
          />
        </div>
        <div className='flex items-center justify-center w-full'>
          <div className='flex flex-col w-full'>
            <label htmlFor='description' className='font-medium w-full'>
              Description
            </label>
            <textarea
              name='description'
              placeholder="Car's description"
              id='description'
              className='resize-y-none outline-none border-2 border-netral-3 rounded h-[200px] pl-2 focus:border-red-5 w-full mt-1 max-h-[400px]'></textarea>
          </div>
        </div>
        <div className=''>
          <FormGrp
            type={"text"}
            name={"type"}
            label={"Type"}
            placeholder={"Type ex: sidan"}
          />
          <FormGrp
            type={"text"}
            name={"condition"}
            label={"Condition"}
            placeholder={"Condition ex: New"}
          />
        </div>
        <div className='flex items-center justify-between w-full gap-0 my-5 md:my-0 md:gap-5 flex-col md:flex-row'>
          <MediaInput
            name={"mainImage"}
            label={"Main Image"}
            id={"mainImage"}
            img={"img"}
            title='Select a single image'
          />
          <MediaInput
            name={"secondaryImages"}
            label={"Secondary Images"}
            id={"secondaryImages"}
            img={"img"}
            title='Select multiple images'
          />
          <MediaInput
            name={"video"}
            label={"Video"}
            id={"video"}
            img={""}
            title='Select Video'
          />
        </div>
        <div className='flex items-center justify-center w-full px-5 gap-10 h-[10vh] flex-col-reverse md:flex-row'>
          <Link
            href='/dashboard/cars'
            className=' w-[90%] md:w-[300px] flex items-center justify-center font-semibold py-2.5 bg-netral-5 text-netral-1 hover:bg-red-4'>
            Back
          </Link>
          <button className=' w-[90%] md:w-[300px] flex items-center justify-center font-semibold py-2.5 bg-red-5 text-netral-1 hover:bg-red-4'>
            Create
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCar;
