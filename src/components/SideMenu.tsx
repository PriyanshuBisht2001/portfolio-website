"use client";

import Image from "next/image";
import { sideMenuOptions } from "@/constants/defaultState";
import Link from "next/link";
import { useState } from "react";
import Menu from "@/assets/Menu.svg";
import Cross from "@/assets/CrossIcon.svg";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const toggleMenu = () => {
    if (isAnimating) return; // Prevent toggling while animation is in progress
    setIsAnimating(true);
    setIsOpen((prev) => !prev);
    setTimeout(() => {
      setIsAnimating(false);
    }, 300); // Duration of the animation
  };

  return (
    <>
      <Image
        src={Menu}
        alt="Menu"
        height={44}
        width={44}
        className="absolute top-8 right-2 lg:hidden cursor-pointer"
        onClick={toggleMenu}
      />
      <div
        className={`fixed left-0 top-0 z-40 h-screen w-full bg-black/70 flex justify-end ${isOpen ? "visible" : "invisible"} ${isAnimating ? "animate-fadeIn" : "animate-fadeOut"}`}
      >
        <div
          className="flex flex-col gap-4 bg-background/95 w-full lg:w-1/4 p-5"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            className="flex w-full justify-end hover:cursor-pointer"
            onClick={toggleMenu}
          >
            <Image src={Cross} height={32} width={32} alt="Close" />
          </button>

          <div className="flex flex-col gap-5 items-center md:gap-10 md:text-2xl">
            {sideMenuOptions.map((option) => (
              <Link key={option.label} href={option.href} onClick={toggleMenu}>
                {option.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideMenu;
