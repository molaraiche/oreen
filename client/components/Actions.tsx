"use client";
import axios from "axios";
import { Button } from "./ui/button";
import { toast } from "react-toastify";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Actions = ({ _id }: { _id: string | number | undefined }) => {
  const router = useRouter();
  const acceptHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.put(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_BOOKING_ENDPOINT}/${_id}`,
      {
        status: "approved",
      }
    );
    toast.success("Booking Accepted");
    router.push("/dashboard/requests");
  };
  const rejectHandler = async (e: React.MouseEvent) => {
    e.preventDefault();
    await axios.put(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_BOOKING_ENDPOINT}/${_id}`,
      {
        status: "rejected",
      }
    );
    toast.error("Booking Rejected");
    router.push("/dashboard/requests");
  };
  return (
    <div className='h-[20vh] flex items-center justify-center gap-3 flex-col md:flex-row'>
      <Button
        className='px-10 py-2.5 bg-green-500 text-netral-1 font-medium rounded'
        onClick={acceptHandler}>
        Accept
      </Button>
      <Button
        className='px-10 py-2.5 bg-red-500 text-netral-1 font-medium rounded'
        onClick={rejectHandler}>
        Reject
      </Button>
      <Link
        href='/dashboard/requests'
        className='px-10 py-2 bg-gray-500 text-netral-1 font-medium rounded'>
        Cancel
      </Link>
    </div>
  );
};

export default Actions;
