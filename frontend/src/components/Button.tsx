interface ButtonProps {
  name: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
}

function Button({ name, className, type, ...props }: ButtonProps) {
  return (
    <button
      className={`bg-black text-white px-4 py-2 w-fit font-normal text-center border border-black rounded-3xl ${className}`}
      {...props}
      type={type}
    >
      {name}
    </button>
  );
}

export default Button;
