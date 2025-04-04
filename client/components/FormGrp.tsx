import { formType } from "@/types/types";

const FormGrp = ({
  label,
  type,
  name,
  placeholder,
  onChange,
  min,
  max,
  value,
}: formType) => {
  return (
    <div className='flex flex-col font-montserrat my-5 w-full'>
      <label htmlFor={name} className='font-medium w-full'>
        {label}
      </label>
      <input
        type={type ? type : "text"}
        placeholder={placeholder ? placeholder : ""}
        id={name}
        name={name}
        value={value}
        className='outline-none border-2 border-netral-3 rounded h-12 pl-2 focus:border-red-5 w-full mt-1'
        onChange={onChange}
        min={name === "from" ? new Date().toISOString().split("T")[0] : min}
        max={max}
      />
    </div>
  );
};

export default FormGrp;
