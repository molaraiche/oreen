"use client";
import axios from "axios";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
const DelBtn = ({
  id,
  name,
  type,
}: {
  id: number | string | undefined;
  name?: string;
  type: string;
}) => {
  const route = useRouter();
  const handleDelete = async () => {
    const result = await Swal.fire({
      title: `<strong>you about to delete ${name}</strong>`,
      icon: "info",
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: true,
      confirmButtonText: `
      <i class="fa fa-thumbs-up"></i> Delete!
    `,
      cancelButtonAriaLabel: "Cancel",
    });

    if (result.isConfirmed) {
      await axios.delete(`https://api.oreen.molaraiche.com/api/${type}/${id}`);
      Swal.fire({
        title: `The Request has been delete`,
        icon: "success",
      });
      route.refresh();
    } else {
      Swal.fire({
        icon: "error",
        title: "You Canceled the car deletion",
      });
    }
  };
  return (
    <button
      className='font-medium flex items-center justify-center px-6 py-2.5 w-full md:w-fit bg-red-500 text-netral-1 '
      onClick={handleDelete}
      title='Delete the car'>
      <span>
        <MdDelete className='w-4 h-4' />
      </span>
      <span>Delete</span>
    </button>
  );
};

export default DelBtn;
