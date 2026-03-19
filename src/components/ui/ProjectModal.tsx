"use client";
import { ProjectFieldTypes } from "@/constants/enums";
import Header from "./Header";
import Image from "next/image";
import DummyImage from "@/assets/dummyImage.png";
import BackArrow from "@/assets/BackArrow.svg";
import ConnectArrow from "@/assets/ConnectArrow.svg";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import { deleteProject } from "@/utils/serverAction.ut";
import MobileHeader from "./MobileHeader";

const ProjectModal = ({
  id,
  name,
  heroImage,
  challenges,
  details,
  overview,
  photos,
  url,
}: ProjectFieldTypes) => {
  const { isAdmin = false } = useAuth();

  const handleDelete = async () => {
    const response = await deleteProject(id);
    if (response === true) {
      window.location.reload();
    } else {
      alert("Error deleting project");
    }
  };

  return (
    <div className="flex flex-col w-full gap-11 bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] lg:bg-none lg:bg-brand-200 p-10 relative rounded-[20px] h-fit">
      <Image
        src={BackArrow}
        className="absolute top-12 left-6 hover:cursor-pointer"
        width={35}
        onClick={() => window.history.back()}
        alt="Back Arrow"
      />
      <div className="flex gap-10 items-center">
        <h1 className="text-[30px] md:text-[32px] font-extrabold ml-7 lg:hidden">
          {name}
        </h1>
        <Header text={name} containerClassName="pb-0 pl-8" />
        {isAdmin && (
          <div className="flex gap-4">
            <Link
              href={`/project/edit/${id}`}
              className=" flex px-6 py-1 justify-center rounded-xl bg-secondary-100 hover:cursor-pointer hover:bg-secondary-100/80"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className=" flex px-6 py-1 justify-center rounded-xl bg-red-600 hover:cursor-pointer hover:bg-red-700"
            >
              Delete
            </button>
          </div>
        )}
      </div>

      <Image
        src={heroImage || DummyImage}
        alt={name}
        className="h-[220px] lg:h-[440px] w-full object-cover rounded-4xl"
        width={1200}
        height={440}
        objectFit="cover"
      />

      <div>
        <MobileHeader title="Overview" />
        <Header text="Overview" textClassName="!text-2xl" />
        <p>{overview}</p>
      </div>
      <div>
        <MobileHeader title="Challenges & Solutions" />
        <Header text="Challenges & Solutions" textClassName="!text-2xl" />
        <ul className="list-disc pl-5">
          {challenges.map((data, index) => (
            <li key={index}>
              {data.challenge}
              {data.solution && ` → ${data.solution}`}
            </li>
          ))}
        </ul>{" "}
      </div>
      <div
        className={`grid 
    ${
      photos && photos.length > 2
        ? "grid-cols-2 grid-rows-2 auto-rows-fr"
        : photos?.length === 2
          ? "grid-cols-2"
          : "grid-cols-1 auto-rows-fr"
    }
    gap-4 
    h-[200px] lg:h-[300px]
  `}
      >
        {photos && photos.length > 0 ? (
          photos.slice(0, 3).map((photo, index) => (
            <div
              key={index}
              className={index === 0 ? "row-span-2 h-full" : "h-full"}
            >
              <Image
                src={photo || DummyImage}
                alt={`${name} photo ${index + 1}`}
                className="h-full w-full object-cover rounded-4xl"
                width={720}
                height={440}
              />
            </div>
          ))
        ) : (
          <div className="col-span-2 h-full">
            <Image
              src={DummyImage}
              alt="No photos available"
              className="h-full w-full object-cover rounded-4xl"
              width={720}
              height={440}
            />
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4">
        <MobileHeader title="Project Details" />
        <Header text="Project Details" textClassName="!text-2xl" />
        <ul className="list-disc pl-5">
          {details?.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        <MobileHeader title="Checkout Project" />
        <Header text={`Checkout Project`} textClassName="!text-2xl" />
        <Link
          href={url || "#"}
          target="_blank"
          className="text-secondary-100 hover:underline truncate"
        >
          {url}
        </Link>
      </div>

      <div className="flex flex-col gap-5 lg:gap-10">
        <span className="flex justify-center w-full font-extrabold">
          Need to Know More about the Projects?
        </span>
        <div className="flex w-full items-center justify-center lg:justify-normal">
          <div className="hidden lg:block h-px bg-linear-to-r from-brand-200 to-white/50 w-1/2" />
          <Link
            href={"/contact"}
            className="flex gap-1 py-3 justify-center lg:w-1/6 w-2/3 bg-linear-to-r from-[#ed935d] via-[#d72961] to-[#d42780] rounded-2xl border-2 lg:bg-none lg:bg-secondary-100 lg:border lg:rounded-xl hover:cursor-pointer"
          >
            <span className="font-bold">Let&apos;s Connect</span>
            <Image src={ConnectArrow} alt="Arrow" />
          </Link>
          <div className="hidden lg:block h-px bg-linear-to-l from-brand-200 to-white/50 w-1/2" />
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
