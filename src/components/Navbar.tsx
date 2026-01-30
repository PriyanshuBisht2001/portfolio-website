"use client";
import { navbarPaths } from "@/constants/defaultState";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <section className="flex bg-brand-600 px-10 py-6 gap-8 rounded-tr-[20px] rounded-bl-4xl">
      {navbarPaths.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.id}
            href={item.href}
            className={` rounded-lg transition text-xl font-medium ${
              isActive ? "text-secondary-100" : ""
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </section>
  );
};

export default Navbar;
