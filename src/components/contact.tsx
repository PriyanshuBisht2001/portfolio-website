"use client";
import React, { useState } from "react";
import Header from "./ui/Header";
import ConnectArrow from "@/assets/ConnectArrow.svg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { submitContactForm } from "@/utils/serverAction.ut";
import Input from "./ui/Input";
import Cross from "@/assets/CrossIcon.svg";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState(() => ({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  }));
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      console.log(formData, "formData");
      const response = await submitContactForm(formData);
      console.log(response, "response");
      if (response?.success === true) {
        await emailjs.send(
          process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
          process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
          formData,
          { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! },
        );
      } else {
        alert(response.message);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        console.error(err.message);
      } else {
        console.error("Unknown error:", err);
      }
    } finally {
      setLoading(false);
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });
    }
  };

  return (
    <section className="flex flex-col p-10 gap-7 w-full h-full absolute lg:static top-0 z-20 bg-[linear-gradient(235deg,#1b1f2e,#2c133d,#301541,#101435)] lg:bg-none">
      <Header text="Let's have a talk" />
      <div className="flex justify-between mb-5 lg:hidden">
        <h1 className="text-[28px] md:text-[32px] font-extrabold">
          Contact Me
        </h1>
        <Link href="/" className="lg:hidden">
          <Image src={Cross} alt="cross" width={40} height={40} />
        </Link>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex flex-col lg:flex-row gap-5">
          <Input
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
          <Input
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <Input
            label="Email"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Input
            label="Phone"
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div>
        <Input
          as="textarea"
          label="Message"
          type="text"
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          className="flex gap-1 justify-center bg-linear-to-r from-[#ed935d] via-[#d72961] to-[#d42780] lg:bg-none lg:bg-secondary-100 rounded-xl hover:cursor-pointer py-4"
          disabled={loading}
        >
          <span className="font-bold">Let&apos;s Connect</span>
          <Image src={ConnectArrow} alt="Arrow" />
        </button>
      </form>
    </section>
  );
};

export default Contact;
