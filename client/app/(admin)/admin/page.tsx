"use client";
import Support from "@/components/PopUp";
import { Button } from "@/components/ui/button";
import axios from "axios";
import Image from "next/image";
import { useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const Admin = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginHandler = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://oreenapi.molaraiche.com/api/admin/login",
        { email, password }
      );
      const { token } = await response.data;
      Cookies.set("token", token, {
        expires: 30,
        secure: true,
        sameSite: "Strict",
      });
      router.push("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <section className=' font-montserrat flex items-center justify-between relative flex-col md:flex-row '>
      <div className='adminbg w-full md:w-[45%] h-[20vh] md:h-[100vh]'></div>
      <div className='w-full md:w-[55%] flex items-center justify-center h-[80vh] md:h-[100vh] flex-col'>
        <div className='text-center h-[20vh]'>
          <div className='flex items-center justify-center h-[10vh]'>
            <Image
              src='./assets/logo.svg'
              alt='OREEN LOGO'
              width={200}
              height={40}
            />
          </div>
          <div className=''>
            <h2 className='text-4xl text-netral-7 font-bold font-lato text-center py-2.5'>
              Admin Dashboard
            </h2>
          </div>
        </div>
        <div className='h-[40vh]'>
          <form className=' flex gap-y-4 flex-col' onSubmit={loginHandler}>
            <div className='flex flex-col'>
              <label
                htmlFor='email'
                className='text-netral-9 font-semibold mb-2'>
                Email
              </label>
              <input
                type='text'
                className='py-2.5 w-full md:w-[400px] pl-2 placeholder:text-netral-3 ring-1 ring-netral-7 outline-none focus:ring-red-7 focus:ring-2'
                placeholder='admin@example.com'
                id='email'
                name='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className='flex flex-col'>
              <label
                htmlFor='password'
                className='text-netral-9 font-semibold mb-2'>
                Password
              </label>
              <input
                type='password'
                className='py-2.5 w-full md:w-[400px] pl-2 placeholder:text-netral-3 ring-1 ring-netral-7 outline-none focus:ring-red-7 focus:ring-2'
                placeholder='Password'
                id='password'
                name='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className='flex items-center justify-center'>
              <Button className='bg-red-5 px-8 py-3 text-netral-1 hover:bg-red-4'>
                Login
              </Button>
            </div>
          </form>
        </div>
        <div className=''>
          © {new Date().getFullYear()}{" "}
          <a
            href='https://molaraiche.com/'
            target='_blank'
            className='font-semibold text-red-5'>
            molaraiche
          </a>
          . All rights reserved.
        </div>
      </div>
      <Support />
    </section>
  );
};

export default Admin;

{
}
