interface ButtonProps {
  name: string;
  className?: string;
  type: "submit" | "reset" | "button" | undefined;
}

function Button({ name, className, type, ...props }: ButtonProps) {
  return (
    <button
      className={`text-nowrap py-2.5 w-full font-normal text-center border border-black rounded-lg ${className}`}
      {...props}
      type={type}
      onClick={() => {}}
    >
      {name}
    </button>
  );
}

export default Button;
