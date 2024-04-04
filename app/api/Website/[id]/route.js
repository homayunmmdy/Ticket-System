import Website from "@/app/models/Website";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Website.findByIdAndDelete(id);
    return NextResponse.json({ message: "وبسایت از لیست حذف شد" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
