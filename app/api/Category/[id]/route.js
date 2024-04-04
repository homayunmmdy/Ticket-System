import Category from "@/app/models/Category";

import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Category.findByIdAndDelete(id);
    return NextResponse.json({ message: "Category Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
