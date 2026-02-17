import React from "react";

type HeaderProps = {
  text: string;
  containerClassName?: string;
  textClassName?: string;
};

const Header = ({ text, containerClassName, textClassName }: HeaderProps) => {
  return (
    <div className={`hidden lg:flex flex-col gap-2 pb-4 ${containerClassName}`}>
      <h2 className={`font-bold text-[32px] text-light-200 ${textClassName}`}>
        {text}
      </h2>
      <div className="border-2 w-[77px] rounded-[10px] border-secondary-100" />
    </div>
  );
};

export default Header;
