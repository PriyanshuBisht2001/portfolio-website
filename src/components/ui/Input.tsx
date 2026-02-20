interface InputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  type?: string;
}

export default function Input({
  label,
  id,
  name,
  value,
  onChange,
  ...props
}: InputProps) {
  return (
    <div className="flex gap-5">
      <div className="relative flex-1 group">
        <fieldset className="absolute lg:hidden inset-0 bg-[#3b294a] lg:bg-none border border-light-400 rounded-xl pointer-events-none group-focus-within:-mt-1.5 ">
          <legend className="ml-3 px-1 text-sm hidden lg:opacity-100 lg:text-xl group-focus-within:block">
            {label}
          </legend>
        </fieldset>

        {/* 2. Unified Label (Desktop style everywhere) */}
        <label
          htmlFor={id}
          className="hidden lg:block text-xl font-medium mb-2 ml-1"
        >
          {label}
        </label>

        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder=" "
          className="border border-light-400 rounded-xl peer w-full bg-transparent p-4 outline-none lg:outline-1 text-base"
          {...props}
        />

        <label
          htmlFor={id}
          className="
        absolute left-4 top-4
        text-base text-light-300
        transition-all duration-300 ease-linear
        origin-left pointer-events-none

        peer-focus:-translate-y-5
        peer-focus:scale-90
        peer-focus:opacity-0

        peer-[:not(:placeholder-shown)]:-translate-y-5
        peer-[:not(:placeholder-shown)]:scale-90
        peer-[:not(:placeholder-shown)]:opacity-0

        lg:hidden
      "
        >
          {label}
        </label>
      </div>
    </div>
  );
}
