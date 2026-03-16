interface InputProps {
  label: string;
  id: string;
  name: string;
  value: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  required?: boolean;
  type?: string;
  as?: "input" | "textarea";
}

export default function Input({
  label,
  id,
  name,
  value,
  onChange,
  required = false,
  type = "text",
  as = "input",
  ...props
}: InputProps) {
  const Component = as;

  return (
    <div className="floating-label w-full">
      {/* Desktop Label */}
      <label
        htmlFor={id}
        className="hidden lg:block text-xl font-medium mb-2 ml-1"
      >
        {label} {!required && <span>(optional)</span>}
      </label>

      {/* Dynamic Input / Textarea */}
      <input
        className={`floating-label__input border border-light-400 rounded-xl peer w-full outline-none text-base bg-transparent ${as === "textarea" ? "p-4 min-h-[120px] resize-none" : "p-4"}`}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        {...(as === "input" ? { type } : {})}
        autoComplete="off"
        required
        placeholder=" "
         {...props}
      />
      <div className="floating-label__outline lg:hidden">
        <div className="floating-label__leading"></div>
        <div className="floating-label__notch">
          <label className="floating-label__label" htmlFor="firstName">
            {label}
          </label>
        </div>
        <div className="floating-label__trailing"></div>
      </div>
    </div>
  );
}

// <input
//   id={id}
//   name={name}
//   value={value}
//   onChange={onChange}
//   placeholder=" "
//   {...(as === "input" ? { type } : {})}
//   className={`floating-label__input
//     border border-light-400 rounded-xl peer w-full bg-transparent
//     outline-none text-base
//     ${as === "textarea" ? "p-4 min-h-[120px] resize-none" : "p-4"}
//   `}
//   {...props}
// />
