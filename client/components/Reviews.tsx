"use client";
import { useState } from "react";
import FormGrp from "./FormGrp";
import MediaInput from "./MediaInput";
import { Button } from "./ui/button";
import { testimonialCardType } from "@/types/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import StarReview from "./StarReview";

const Reviews = () => {
  const [form, setForm] = useState<testimonialCardType>({
    profile: "",
    name: "",
    location: "",
    comment: "",
    review: 0,
    phone: "",
  });
  const route = useRouter();

  const changeHandler = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
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

  const uploadToCloudinary = async (
    file: File,
    folder: string
  ): Promise<string | null> => {
    const url = `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_ID}/upload`;
    const formData = new FormData();

    formData.append("file", file);
    formData.append(
      "upload_preset",
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
  const setReview = (review: number) => {
    setForm((prevForm) => ({
      ...prevForm,
      review,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const profileIamgeInput =
      event.currentTarget.querySelector<HTMLInputElement>('[name="profile"]');
    const profile = profileIamgeInput?.files?.[0] || null;
    const profileUrl = profile
      ? await uploadToCloudinary(profile, "profile")
      : null;

    const newCommentData = {
      ...form,
      profile: profileUrl || "",
    };
    await axios.post(
      `https://api.oreen.molaraiche.com/${process.env.NEXT_PUBLIC_GET_COMMENTS_ENDPOINT}/addComment`,
      newCommentData
    );
    setForm({
      profile: "",
      name: "",
      location: "",
      comment: "",
      review: 0,
      phone: "",
    });
    route.push("/testimonials");
  };
  return (
    <div className='container mx-auto px-4'>
      <div className='text-center'>
        <div className='font-lato'>
          <h4 className='text-red-3 text-xl font-bold '>Drop us a Review</h4>
          <p className='text-netral-5 py-2.5'>
            Only Verified Reviews will be appeared
          </p>
        </div>
      </div>
      <form onSubmit={handleSubmit}>
        <MediaInput
          label='Profile Picture'
          img='img'
          title='Upload Your Profile Picture'
          id='profile'
          name='profile'
          value={form.profile}
          onChange={changeHandler}
        />
        <FormGrp
          name='name'
          placeholder='Ex: Jhon Doe'
          label='Full Name'
          value={form.name}
          onChange={changeHandler}
        />

        <FormGrp
          name='phone'
          placeholder='Phone Number'
          label='Phone Number'
          value={form.phone}
          onChange={changeHandler}
        />
        <FormGrp
          name='location'
          placeholder='Location'
          label='Location'
          value={form.location}
          onChange={changeHandler}
        />

        <div className='py-4'>
          <label className='font-medium w-full font-montserrat'>Review</label>
          <StarReview onChange={setReview} />
        </div>
        <div className=''>
          <label
            htmlFor='comment'
            className='font-medium w-full font-montserrat'>
            Comment
          </label>
          <textarea
            name='comment'
            id='comment'
            value={form.comment}
            placeholder='Drop Your Review Here'
            className='outline-none border-2 border-netral-3 rounded pl-2 focus:border-red-5 w-full mt-1 h-36 resize-none'
            onChange={changeHandler}></textarea>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <Button
            type='submit'
            className='py-2.5 px-6 bg-red-5 text-netral-1 rounded'>
            Add Your Testimonial
          </Button>
        </div>
        <div className='flex items-center justify-center mt-5'>
          <p className='text-netral-7'>
            The phone number is necessary to make the review appeared in the
            testimonials board{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Reviews;
