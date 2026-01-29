"use server";

import {
  ADD_PROJECT,
  DELETE_PROJECT,
  LOGIN,
  SUBMIT_CONTACT_FORM,
  UPDATE_PROJECT,
} from "@/utils/mutation";
import { cookies } from "next/headers";
import { GET_ALL_PROJECTS, GET_PROJECT_BY_ID } from "./queries.ut";
import { RevalidateTags } from "@/constants/enums";

export const submitContactForm = async (props: {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}) => {
  const { firstName, lastName, email, phone, message } = props;
  const payload = {
    query: SUBMIT_CONTACT_FORM,
    variables: {
      input: { firstName, lastName, email, phone, message },
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  return {
    ...result.data.submitContactForm,
    success: true,
  };
};

export const handleLogin = async (username: string, password: string) => {
  try {
    const payload = {
      query: LOGIN,
      variables: {
        username,
        password,
      },
    };
    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
        cache: "no-cache",
        credentials: "include",
      },
    );

    const result = await response.json();

    if (result.errors?.length) {
      throw new Error(result.errors[0].message);
    }
    if (result?.data?.login) {
      const cookieStore = await cookies();
      cookieStore.set("token", result?.data?.login?.token, { path: "/" });
    }
    return result.data;
  } catch (error) {
    console.error("Error during login:", error);
    return { success: false, message: error };
  }
};

export async function uploadImage(file: File): Promise<string> {
  try {
    const formData = new FormData();
    formData.append("file", file);
    const cookieStore = await cookies();
    const authHeader = cookieStore.get("token")?.value;
    const res = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/upload`,
      {
        method: "POST",
        body: formData,
        headers: {
          Authorization: `Bearer ${authHeader}`,
        },
      },
    );

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Upload failed:", errorText);
      throw new Error("Upload failed");
    }

    const json = await res.json();
    return json.secure_url;
  } catch (error) {
    console.error("Error during image upload:", error);
    throw error;
  }
}

export const fetchAllProjects = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: GET_ALL_PROJECTS,
      }),
      cache: "force-cache",
      next: {
        tags: [RevalidateTags.PROJECTS],
      },
    },
  );

  const json = await response.json();

  if (json.errors) {
    console.error("GraphQL Error:", json.errors);
    throw new Error("Failed to fetch projects");
  }

  return json.data.projects;
};

export const fetchProjectByID = async (id: string) => {
  const payload = {
    query: GET_PROJECT_BY_ID,
    variables: { projectID: id },
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "force-cache",
      next: {
        tags: [RevalidateTags.SINGLEPROJECTS],
      },
    },
  );

  const json = await response.json();

  if (json.errors?.length) {
    console.error("GraphQL Error:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data.project;
};

export const addProject = async (props: {
  name: string;
  heroImage: string;
  overview: string;
  challenge: string;
  photos: string[];
  details: string[];
  url: string;
}) => {
  const { name, heroImage, overview, challenge, photos, details, url } = props;
  const cookieStore = await cookies();
  const authHeader = cookieStore.get("token")?.value;

  if (!authHeader) {
    throw new Error("Authorization token missing");
  }

  const payload = {
    query: ADD_PROJECT,
    variables: {
      input: { name, heroImage, overview, challenge, photos, details, url },
    },
  };
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const result = await response.json();

  if (result.errors?.length) {
    throw new Error(result.errors[0].message);
  }

  return {
    ...result.data.addProject,
    success: true,
  };
};

export async function updateProject(data: any): Promise<any> {
  const cookieStore = await cookies();
  const authHeader = cookieStore.get("token")?.value;
  const payload = {
    query: UPDATE_PROJECT,
    variables: {
      input: { ...data },
    },
  };

  if (!authHeader) {
    throw new Error("Authorization token missing");
  }

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"}/api/graphql`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authHeader}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
      cache: "no-store",
    },
  );

  const json = await res.json();

  if (json.errors?.length) {
    console.error("GraphQL Error:", json.errors);
    throw new Error(json.errors[0].message);
  }

  return json.data.updateProject;
}

export async function deleteProject(id: string): Promise<boolean> {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("token")?.value;
    const payload = {
      query: DELETE_PROJECT,
      variables: { id },
    };

    if (!token) {
      throw new Error("Authorization token is missing.");
    }

    const response = await fetch(
      `${
        process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000"
      }/api/graphql`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      },
    );

    if (!response.ok) {
      throw new Error(`Network error: ${response.statusText}`);
    }

    const json = await response.json();

    if (json.errors?.length) {
      console.error("GraphQL Error:", json.errors);
      throw new Error(json.errors[0].message);
    }

    return json.data?.deleteProject ?? false;
  } catch (err: any) {
    console.error("Failed to delete project:", err.message);
    throw new Error(err.message || "Failed to delete project.");
  }
}
