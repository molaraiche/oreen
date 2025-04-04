"use client";
import { useState } from "react";
import { Button } from "./ui/button";
import axios from "axios";
import { toast } from "react-toastify";
import DelBtn from "./DelBtn";

const HotManage = ({
  _id,
  exHot,
}: {
  _id: string | number | undefined;
  exHot: boolean;
}) => {
  const [hot, setHot] = useState(exHot);

  const handleHotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    e.preventDefault();
    setHot(!hot);
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await axios.put(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_COMMENTS_ENDPOINT}/${_id}`,
      {
        hot,
      }
    );
    toast.info("Comment updated successfully");
  };

  return (
    <form
      className='flex font-montserrat items-center gap-3 my-5 w-full px-2 flex-col lg:flex-row'
      onSubmit={handleSubmit}>
      <select
        name='hot'
        defaultValue={`${hot}`}
        id='hot'
        onChange={handleHotChange}
        className='outline-none border-2 border-netral-3 rounded h-12 pl-2 focus:border-red-5 w-full mt-1'>
        <option value='true'>True</option>
        <option value='false'>False</option>
      </select>
      <Button
        type='submit'
        className='h-10 px-4 bg-netral-8 text-netral-1 rounded font-semibold w-full'>
        Done
      </Button>
      <DelBtn type='comments' id={_id} />
    </form>
  );
};

export default HotManage;
