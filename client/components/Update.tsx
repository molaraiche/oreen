"use client";
import FormGrp from "@/components/FormGrp";
import MediaInput from "@/components/MediaInput";
import { CarType } from "@/types/types";
import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
const Update = ({ car }: { car: CarType }) => {
  const [form, setForm] = useState<CarType>({
    name: "",
    mainImage: "",
    secondaryImages: [],
    description: "",
    video: "",
    brand: "",
    model: "",
    type: "",
    condition: "",
    price: 0,
    hot: true,
  });
  const route = useRouter();

  const changeHandler = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    e.preventDefault();
    const { name, files, value } = e.target as HTMLInputElement &
      HTMLTextAreaElement;

    if (files && files.length > 0) {
      const paths = Array.from(files).map((file) => URL.createObjectURL(file));

      setForm((prevForm) => ({
        ...prevForm,
        [name]: paths.length === 1 ? paths[0] : paths,
      }));
    } else {
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    }
  };
  const handleHotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      hot: e.target.value === "true" ? true : false,
    }));
  };
  const uploadToCloudinary = async (
    file: File,
    folder: string
  ): Promise<string | null> => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "upload_preset",
      process.env.NEXT_PUBLIC_CLOUDINARY_PRESET ||
        `${process.env.NEXT_PUBLIC_CLOUDINARY_PRESET}`
    );
    formData.append("folder", folder);

    try {
      const response = await axios.post(url, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data.secure_url;
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
      return null;
    }
  };
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const mainImageInput =
      event.currentTarget.querySelector<HTMLInputElement>('[name="mainImage"]');
    const secondaryImagesInput =
      event.currentTarget.querySelector<HTMLInputElement>(
        '[name="secondaryImages"]'
      );
    const videoInput =
      event.currentTarget.querySelector<HTMLInputElement>('[name="video"]');
    const mainImage = mainImageInput?.files?.[0] || null;
    const secondaryImages = secondaryImagesInput?.files
      ? Array.from(secondaryImagesInput.files)
      : [];
    const video = videoInput?.files?.[0] || null;
    const mainImageUrl = mainImage
      ? await uploadToCloudinary(mainImage, "main_images")
      : null;

    const secondaryImagesUrls = await Promise.all(
      secondaryImages.map((file) =>
        uploadToCloudinary(file, "secondary_images")
      )
    );

    const videoUrl = video ? await uploadToCloudinary(video, "videos") : null;

    const updatedCarData = {
      ...form,
      mainImage: mainImageUrl || "",
      secondaryImages: secondaryImagesUrls.filter(Boolean),
      video: videoUrl || "",
    };

    await axios.put(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_CARS_ENDPOINT}/${car._id}`,
      updatedCarData
    );

    route.push("/dashboard/cars");
  };
  return (
    <div className='font-montserrat container mx-auto px-4'>
      <div className='h-[20vh] flex flex-col items-start justify-center my-10 md:my-0'>
        <h1 className='text-red-5 text-5xl font-bold'>Update existant Car</h1>
        <p className='font-medium my-5'>
          here you will update the car with the name: {car.name}
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className='flex gap-3 flex-col md:flex-row'>
          <FormGrp
            label='Name'
            placeholder={car.name}
            name='name'
            id='name'
            onChange={changeHandler}
          />
          <FormGrp
            label='Brand'
            placeholder={car.brand}
            name='brand'
            id='brand'
            onChange={changeHandler}
          />
          <FormGrp
            label='Model'
            placeholder={car.model}
            name='model'
            id='model'
            onChange={changeHandler}
          />
        </div>
        <div className='flex gap-3 flex-col md:flex-row'>
          <FormGrp
            label='Type'
            placeholder={car.type}
            name='type'
            id='type'
            onChange={changeHandler}
          />
          <FormGrp
            label='Condition'
            placeholder={car.condition}
            name='condition'
            id='condition'
            onChange={changeHandler}
          />
          <FormGrp
            label='Price'
            placeholder={`${car.price}`}
            type='number'
            name='price'
            id='price'
            onChange={changeHandler}
          />
          <div className='flex flex-col font-montserrat my-5 w-full'>
            <label htmlFor='hot' className='font-medium w-full'>
              Hot
            </label>
            <select
              name='hot'
              id='hot'
              onChange={handleHotChange}
              className='outline-none border-2 border-netral-3 rounded h-12 pl-2 focus:border-red-5 w-full mt-1'>
              <option value='true'>True</option>
              <option value='false'>False</option>
            </select>
          </div>
        </div>
        <div className='flex flex-col font-montserrat my-5 w-full'>
          <label htmlFor='description' className='font-medium w-full'>
            Description
          </label>
          <textarea
            placeholder={car.description}
            id='description'
            name='description'
            className='outline-none border-2 border-netral-3 rounded pl-2 focus:border-red-5 w-full mt-1 h-36 resize-none'
            onChange={changeHandler}
          />
        </div>
        <div className='flex gap-3 flex-col md:flex-row'>
          <MediaInput
            img='img'
            title='Upload Main Image'
            name='mainImage'
            id='mainImage'
            multiple={false}
            onChange={changeHandler}
          />
          <MediaInput
            img='img'
            title='Upload Secondary Images'
            name='secondaryImages'
            id='secondaryImages'
            multiple={true}
            onChange={changeHandler}
          />
          <MediaInput
            img='video'
            title='Upload Video'
            name='video'
            id='video'
            multiple={false}
            onChange={changeHandler}
          />
        </div>
        <div className='flex items-center gap-10 justify-center h-[20vh]'>
          <Link
            className='py-2 px-6 border-2 border-netral-7 bg-netral-7 text-netral-1 rounded font-medium'
            href={"/dashboard/cars"}>
            Cancel
          </Link>
          <button
            className='py-2 px-6 border-2 border-red-5 bg-red-5 text-netral-1 rounded font-medium'
            type='submit'>
            {`Update ${car.name}`}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Update;
