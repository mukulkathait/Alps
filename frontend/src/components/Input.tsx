import { ChangeEvent, useId } from "react";

interface InputComponentsType {
  label: string;
  placeholder: string;
  type?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  [key: string]: any;
}

export const Input = ({
  label,
  placeholder,
  type,
  ...props
}: InputComponentsType) => {
  const id = useId();
  return (
    <div className="w-1/2 flex flex-col gap-2 mt-2">
      <label htmlFor={id} className="font-semibold text-lg">
        {label}
      </label>
      <input
        id={id}
        placeholder={placeholder}
        type={type ? type : "text"}
        className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 font-semibold"
        {...props}
      />
    </div>
  );
};
