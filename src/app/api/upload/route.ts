import { v2 as cloudinary } from "cloudinary";
import { Readable } from "stream";
import { verifyAdmin } from "@/utils/auth.ut";
import { NextRequest } from "next/server";

// Cloudinary config
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME!,
  api_key: process.env.CLOUDINARY_API_KEY!,
  api_secret: process.env.CLOUDINARY_API_SECRET!,
});

export const POST = async (req: NextRequest) => {
  const authHeader = req.headers.get("authorization");
  const token = authHeader?.split(" ")[1];
  await verifyAdmin(token);

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return new Response(JSON.stringify({ error: "No file uploaded" }), {
      status: 400,
    });
  }

  const buffer = Buffer.from(await file.arrayBuffer());

  const stream = Readable.from(buffer);

  const result = await new Promise((resolve, reject) => {
    const upload = cloudinary.uploader.upload_stream(
      { folder: "projects" },
      (err, result) => {
        if (err) reject(err);
        else resolve(result);
      }
    );

    stream.pipe(upload);
  });

  return Response.json(result);
};
