"use client";
import { useState } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";
import { TbCopy } from "react-icons/tb";
import { TbCopyCheck } from "react-icons/tb";

const Support = () => {
  const [modal, setModal] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [passwordCopied, setPasswordCopied] = useState(false);
  const fakeEmail = "admin@oreen.com";
  const fakePassword = "oreenAdmin@123";

  const modalToggle = () => setModal(!modal);
  const handleCopy = async (copiedElement: string) => {
    if (copiedElement === fakeEmail)
      try {
        await navigator.clipboard.writeText(copiedElement);
        setEmailCopied(true);
        setModal(false);
        setTimeout(() => setEmailCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }

    if (copiedElement === fakePassword)
      try {
        await navigator.clipboard.writeText(copiedElement);
        setPasswordCopied(true);
        setModal(false);
        setTimeout(() => setPasswordCopied(false), 2000);
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
  };

  return (
    <>
      <div className='absolute right-20 bottom-20'>
        <button
          className='w-12 h-12 rounded-full bg-red-5 hover:bg-red-3 hover:text-netral-7 text-netral-1 p-0 flex items-center justify-center animate__animated animate__pulse animate__delay-2s animate__infinite'
          onClick={modalToggle}>
          <FaRegCircleQuestion className='w-6 h-6' />
        </button>
      </div>
      <div
        className={`absolute top-0 left-0 items-center justify-center h-screen w-full ease-in-out duration-300 ${
          modal ? "flex" : "hidden"
        }`}>
        <div
          onKeyDown={(event) => {
            if (event.key === "Escape") {
              setModal(false);
            }
          }}
          className='bg-red-4 h-[350px] md:h-[400px] w-full md:w-[450px] mx-14 md:mx-0'>
          <div className='h-[50px] flex items-center justify-end px-4'>
            <IoMdClose
              className='w-6 h-6 cursor-pointer'
              onClick={modalToggle}
            />
          </div>
          <div className='flex flex-col items-center h-[300px] justify-center px-4 w-full'>
            <div className='flex items-center gap-1 w-full'>
              <input
                type='text'
                className='w-full my-2 px-2 h-10 bg-red-1 outline-none cursor-pointer'
                value={fakeEmail}
                readOnly
                onClick={() => handleCopy(fakeEmail)}
              />
              {emailCopied ? (
                <TbCopyCheck className='w-6 h-6 text-netral-3' />
              ) : (
                <TbCopy className='w-6 h-6' />
              )}
            </div>
            <div className='flex items-center gap-1 w-full'>
              <input
                type='text'
                className='w-full my-2 px-2 h-10 bg-red-1 outline-none cursor-pointer'
                readOnly
                value={fakePassword}
                onClick={() => handleCopy(fakePassword)}
              />
              {passwordCopied ? (
                <TbCopyCheck className='w-6 h-6 text-netral-3' />
              ) : (
                <TbCopy className='w-6 h-6' />
              )}
            </div>
            <textarea
              className='w-full my-2 px-2 h-20 bg-red-1 outline-none resize-none '
              readOnly
              value={"This is just a test login."}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Support;
