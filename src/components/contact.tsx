"use client";
import React, { useState } from "react";
import Header from "./ui/Header";
import ConnectArrow from "@/assets/ConnectArrow.svg";
import Image from "next/image";
import emailjs from "@emailjs/browser";
import { submitContactForm } from "@/utils/serverAction.ut";

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
      // setFormData({
      //   firstName: "",
      //   lastName: "",
      //   email: "",
      //   phone: "",
      //   message: "",
      // });
    }
  };

  return (
    <section className="flex flex-col p-10 gap-7 w-full ">
      <Header text="Let's have a talk" />
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="flex gap-5">
          <div className="flex flex-col flex-1 gap-3">
            <label htmlFor="firstName" className="text-xl font-medium">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="border border-light-400 rounded-xl p-4"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <label htmlFor="lastName" className="text-xl font-medium">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="border border-light-400 rounded-xl p-4"
            />
          </div>
        </div>
        <div className="flex gap-5">
          <div className="flex flex-col flex-1 gap-3">
            <label htmlFor="email" className="text-xl font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="border border-light-400 rounded-xl p-4"
            />
          </div>
          <div className="flex flex-col flex-1 gap-3">
            <label htmlFor="phone" className="text-xl font-medium">
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="border border-light-400 rounded-xl p-4"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="message" className="text-xl font-medium">
            Message (optional)
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="border border-light-400 rounded-xl p-4"
          />
        </div>
        <button
          type="submit"
          className="flex gap-1 justify-center bg-secondary-100 rounded-xl hover:cursor-pointer py-4"
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
