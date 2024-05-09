import Category from "@/app/models/Category";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const categories = await Category.find();

    return NextResponse.json({ categories }, { status: 200 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;

    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return NextResponse.json(
        { message: "This name exict try another" },
        { status: 400 }
      );
    }

    // Create new subscription
    await Category.create({ name });

    return NextResponse.json({ message: "Category Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
