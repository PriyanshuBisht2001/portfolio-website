import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { RevalidateTags } from "@/constants/enums";

export async function GET() {
  try {
    revalidateTag(RevalidateTags.PROJECTS, "default");
    revalidateTag(RevalidateTags.SINGLEPROJECTS, "default");
    return NextResponse.json({ revalidated: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Revalidation failed", details: String(error) },
      { status: 500 }
    );
  }
}
