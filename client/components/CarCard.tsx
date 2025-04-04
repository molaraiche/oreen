"use client";
import { BsTelephone } from "react-icons/bs";
import { carCardType } from "@/types/types";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalTrigger,
} from "./ui/animated-modal";
import Image from "next/image";
import { Button } from "./ui/button";
import FormGrp from "./FormGrp";
import { useState } from "react";
import axios from "axios";
import { Bounce, toast } from "react-toastify";
import Link from "next/link";
const CarCard = ({ image, name, price, _id, hot }: carCardType) => {
  const [form, setForm] = useState({
    carName: name,
    name: "",
    phone: "",
    from: "",
    to: "",
    message: "",
  });

  const onChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, value } = e.target;

    setForm((prevForm) => {
      const updatedForm = { ...prevForm, [name]: value };

      const today = new Date().toISOString().split("T")[0];
      if (name === "from" && value < today) {
        alert("The 'From' date cannot be in the past.");
        return prevForm;
      }
      if (name === "from" && updatedForm.to && value > updatedForm.to) {
        alert("The 'From' date must be before the 'To' date.");
        return prevForm;
      }
      if (name === "to" && updatedForm.from && updatedForm.from > value) {
        alert("The 'To' date must be after the 'From' date.");
        return prevForm;
      }
      return updatedForm;
    });
  };
  const bookHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.from || !form.to) {
      toast.error("Please Fill All Fields", {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
    await axios.post(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_BOOKING_DEMAND}`,
      form
    );
    toast.success("the Demand has been sent !", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
    setForm({
      carName: "",
      name: "",
      phone: "",
      from: "",
      to: "",
      message: "",
    });
  };
  return (
    <Modal>
      <div className='shadow-carCardShadow my-4 md:my-0'>
        <div className='bg-netral-2 md:w-[400px] md:h-[280px] flex items-center justify-center'>
          <Image
            src={image}
            alt='Marcedes Benz'
            width={335}
            height={165}
            className='bg-cover cursor-pointer w-full h-auto md:w-[335px] md:h-[165px] flex items-center justify-center'
          />
        </div>
        <div className='p-4'>
          <p className='font-lato font-bold text-netral-7 text-2xl '>{name}</p>
          <div className='flex items-center justify-between'>
            <p className='text-netral-5'>
              <span className='text-3xl font-black font-lato text-netral-9'>
                ${price}
              </span>
              /Day
            </p>
          </div>
        </div>
        {!hot && (
          <div className='px-4'>
            <Link href={`cars/${_id}`}>
              Explore the <span className='text-red-4'>{name}</span>
            </Link>
          </div>
        )}
        <div className='flex items-center justify-center p-4 gap-3'>
          <a
            href='tel:+212663733223'
            className='border-2 border-netral-7 flex items-center justify-center gap-2 py-2 rounded text-netral-7 hover:border-red-5 hover:text-red-5 ease-in duration-300 w-9 h-9 md:w-[40%]'
            onClick={(e) => {
              if (!navigator.userAgent.match(/Mobi/)) {
                e.preventDefault();
                alert("You can dial this number manually: +212 663 733 223");
              }
            }}>
            <BsTelephone />
            <span className='hidden md:block'>Call Us</span>
          </a>

          <ModalTrigger className='bg-red-5 dark:bg-white dark:text-black text-white flex justify-center group/modal-btn w-full md:w-[60%]'>
            <span className='group-hover/modal-btn:translate-x-40 text-center transition duration-500'>
              Book Now
            </span>
            <div className='-translate-x-40 group-hover/modal-btn:translate-x-0 flex items-center justify-center absolute inset-0 transition duration-500 text-white z-20'>
              🚘
            </div>
          </ModalTrigger>
        </div>
      </div>
      <ModalBody>
        <ModalContent>
          <input
            type='text'
            name='carName'
            value={`You Have pick the car ${name}`}
            className='text-center text-lg bg-transparent invisible'
            disabled
          />
          <h4 className='text-center font-medium font-montserrat'>
            You pick the car{" "}
            <span className='text-red-5 font-bold'>{name}</span>
          </h4>
          <form onSubmit={bookHandler}>
            <FormGrp
              label='Full Name'
              name='name'
              placeholder='Ex: John Doe'
              onChange={onChangeHandler}
              value={form.name}
            />
            <FormGrp
              label='Phone Number'
              name='phone'
              placeholder='Ex: +212666666666'
              onChange={onChangeHandler}
              value={form.phone}
            />
            <FormGrp
              label='From'
              type='date'
              name='from'
              onChange={onChangeHandler}
              max={form.to}
              value={form.from}
            />

            <FormGrp
              label='To'
              type='date'
              name='to'
              onChange={onChangeHandler}
              min={form.from}
              value={form.to}
            />
            <div className='flex flex-col font-montserrat my-5 w-full'>
              <label className='font-medium w-full' htmlFor='message'>
                Message
              </label>
              <textarea
                id='message'
                name='message'
                onChange={onChangeHandler}
                value={form.message}
                placeholder='Drop the message if anything to tell'
                className='outline-none border-2 border-netral-3 rounded h-12 pl-2 focus:border-red-5 w-full mt-1 resize-x-none max-h-[150px]'></textarea>
            </div>
            <div className='flex items-center justify-center'>
              <Button className='bg-red-5 text-netral-1 py-2.5 px-14 rounded'>
                Book the Car
              </Button>
            </div>
            <p className='text-sm text-center text-netral-7 mt-2'>
              All The requests will be treated in timeframe of 6 hours
            </p>
          </form>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
};

export default CarCard;
