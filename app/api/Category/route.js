import { CategoryCash } from "@/app/cash/CategoryCash";
import CategoryModel from "@/app/models/Category";
import RequestHandler from "@/app/util/RequestHandler";
import { NextResponse } from "next/server";


export async function GET() {
  const handler = new RequestHandler(CategoryModel, CategoryCash);
   return handler.GetAll();
}


export async function POST(req) {
  try {
    const body = await req.json();
    const { name } = body;

    const existingCategory = await CategoryModel.findOne({ name });
    if (existingCategory) {
      return NextResponse.json(
        { message: "Try Another name this name is exist" },
        { status: 400 }
      );
    }

    // Create new subscription
    await CategoryModel.create({ name });

    return NextResponse.json({ message: "Category Successfully Added" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}
