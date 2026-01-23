"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  addProject,
  updateProject,
  uploadImage,
} from "@/utils/serverAction.ut";
import Header from "./ui/Header";
import { ProjectTypeValues } from "@/constants/defaultState";
import Image from "next/image";
import { ProjectType } from "@/constants/enums";

const isDataURI = (str: string | null) =>
  typeof str === "string" && str.startsWith("data:image");

const AddProjectPageComponent = ({
  existingProject,
  type = ProjectType.PROJECT,
}: {
  existingProject?: any;
  type?: ProjectType;
}) => {
  const [formData, setFormData] = useState({
    type: type,
    name: "",
    heroImage: null,
    overview: "",
    challenge: "",
    photos: [],
    details: [],
    url: "",
    category: "",
  });

  const [loading, setLoading] = useState(false);

  const { itemType, headerText, buttonText } = useMemo(() => {
    const action = existingProject ? "Update" : "Add";
    const itemType = type === ProjectType.PROJECT ? "Project" : "Case Study";
    return {
      itemType,
      headerText: `${action} ${itemType}`,
      buttonText: `${action} ${itemType}`,
    };
  }, [existingProject, type]);

  useEffect(() => {
    if (existingProject) {
      setFormData({
        ...existingProject,
        heroImage: existingProject.heroImage || null,
        photos: existingProject.photos || [],
        details: existingProject.details || [],
      });
    }
  }, [existingProject]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files) {
      setFormData((prev: any) => ({
        ...prev,
        [name]: name === "heroImage" ? files[0] : Array.from(files),
      }));
    }
  };

  const uploadIfNeeded = async (img: any) =>
    img instanceof File || isDataURI(img) ? await uploadImage(img) : img;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const heroImageUrl = await uploadIfNeeded(formData.heroImage);
      const photoUrls = await Promise.all(formData.photos.map(uploadIfNeeded));

      const payload = {
        ...formData,
        heroImage: heroImageUrl,
        photos: photoUrls,
      };
      const response = existingProject
        ? await updateProject({ id: existingProject.id, ...payload })
        : await addProject(payload);

      if (response) {
        alert(
          existingProject
            ? `${itemType} updated successfully!`
            : `${itemType} added successfully!`
        );
        if (!existingProject) {
          setFormData({
            type: ProjectType.PROJECT,
            name: "",
            heroImage: null,
            overview: "",
            challenge: "",
            photos: [],
            details: [],
            url: "",
            category: "",
          });
          window.location.href =
            type === ProjectType.PROJECT ? "/projects" : "/case-study";
        }
      } else {
        alert(`Failed to save ${itemType}.`);
      }
    } catch (error) {
      console.error("Error submitting project:", error);
      alert("An error occurred while submitting the project.");
    } finally {
      setLoading(false);
    }
  };

  const updateDetails = (index: number, value: string) => {
    setFormData((prev: any) => {
      const updatedDetails = [...prev.details];
      updatedDetails[index] = value;
      return { ...prev, details: updatedDetails };
    });
  };

  const removeDetail = (index: number) => {
    setFormData((prev: any) => ({
      ...prev,
      details: prev.details.filter((_: any, i: any) => i !== index),
    }));
  };

  const addDetail = () => {
    setFormData((prev: any) => ({
      ...prev,
      details: [...prev.details, ""],
    }));
  };

  return (
    <div className="flex flex-col p-10 gap-8 w-full min-h-screen">
      <Header text={headerText} />

      <form
        className="flex flex-col gap-6 w-full p-6 justify-center"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col gap-3">
          <label className="font-medium text-xl" htmlFor="type">
            {itemType} Type:
          </label>
          <select
            className="border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80 flex hover:cursor-pointer"
            id="type"
            name="type"
            value={formData.type}
            onChange={handleChange}
            required
          >
            <option value="" disabled className="bg-brand-300">
              Select a {itemType} type
            </option>
            {ProjectTypeValues.map(({ label, value }) => (
              <option
                key={value}
                value={value}
                className="hover:cursor-pointer bg-brand-300 hover:bg-secondary-100/80"
              >
                {label}
              </option>
            ))}
          </select>
        </div>
        {[
          {
            label: "Name:",
            type: "text",
            id: "name",
            value: formData.name,
            onChange: handleChange,
            required: true,
          },
          {
            label: "Overview:",
            type: "textarea",
            id: "overview",
            value: formData.overview,
            onChange: handleChange,
          },
          {
            label: "Challenge:",
            type: "textarea",
            id: "challenge",
            value: formData.challenge,
            onChange: handleChange,
          },
          {
            label: "URL:",
            type: "url",
            id: "url",
            value: formData.url,
            onChange: handleChange,
          },
        ].map(({ label, type, id, value, onChange, required }) => (
          <div key={id} className="flex flex-col gap-3">
            <label className="font-medium text-xl" htmlFor={id}>
              {label}
            </label>
            {type === "textarea" ? (
              <textarea
                className="border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80"
                id={id}
                name={id}
                value={value}
                onChange={onChange}
              />
            ) : (
              <input
                className="border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80"
                type={type}
                id={id}
                name={id}
                value={value}
                onChange={onChange}
                required={required}
              />
            )}
          </div>
        ))}

        <div className="flex flex-col gap-3">
          <label className="font-medium text-xl" htmlFor="heroImage">
            Hero Image:
          </label>
          <input
            className="border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80"
            type="file"
            id="heroImage"
            name="heroImage"
            onChange={handleFileChange}
            accept="image/*"
          />
          {formData.heroImage && (
            <Image
              src={
                typeof formData.heroImage === "string"
                  ? formData.heroImage
                  : URL.createObjectURL(formData.heroImage)
              }
              alt="Hero Preview"
              className="w-full max-w-xs rounded-md"
              width={100}
              height={100}
            />
          )}
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-medium text-xl" htmlFor="photos">
            Photos (Max 3):
          </label>
          <input
            className="border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80"
            type="file"
            id="photos"
            name="photos"
            multiple
            onChange={(e) => {
              if (e.target.files && e.target.files.length > 3) {
                alert("You can only upload up to 3 photos.");
                e.target.value = ""; // Reset the input
              } else {
                handleFileChange(e);
              }
            }}
            accept="image/*"
          />
          <div className="flex flex-wrap gap-4 mt-2">
            {formData.photos.map((photo: any, index: number) => (
              <div key={index} className="relative group w-32 h-32">
                <Image
                  width={100}
                  height={100}
                  src={
                    typeof photo === "string"
                      ? photo
                      : URL.createObjectURL(photo)
                  }
                  alt={`Photo ${index + 1}`}
                  className="w-full h-full object-cover rounded"
                />
                <button
                  type="button"
                  onClick={() =>
                    setFormData((prev) => ({
                      ...prev,
                      photos: prev.photos.filter((_, i) => i !== index),
                    }))
                  }
                  className="absolute inset-0 bg-black/50 bg-opacity-50 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded hover:cursor-pointer duration-200"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <label className="font-medium text-xl">Project Details:</label>
          {formData.details.map((detail, index) => (
            <div key={index} className="flex items-center gap-3">
              <input
                className="flex-1 border border-light-400 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-secondary-100/80"
                type="text"
                value={detail}
                onChange={(e) => updateDetails(index, e.target.value)}
              />
              <button
                type="button"
                onClick={() => removeDetail(index)}
                className="text-light-300 border-light-300 border rounded-full h-8 w-8 justify-center items-center flex hover:cursor-pointer hover:border-secondary-200 hover:text-secondary-200 transition-all duration-200"
              >
                -
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addDetail}
            className="mt-2 px-4 py-1 bg-secondary-200 text-white rounded hover:bg-secondary-200/80 transition-all w-fit hover:cursor-pointer"
          >
            + Add Detail
          </button>
        </div>

        <button
          disabled={loading}
          className="bg-secondary-100 py-2 px-4 rounded-md hover:bg-secondary-100/80 flex justify-center hover:cursor-pointer"
          type="submit"
        >
          {loading ? <span className="loader"></span> : buttonText}
        </button>
      </form>
    </div>
  );
};

export default AddProjectPageComponent;
