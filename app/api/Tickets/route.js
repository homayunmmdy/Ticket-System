import { TicketCash } from "@/app/cash/TicketCash";
import TicketModel from "@/app/models/Ticket";
import RequestHandler from "@/app/util/RequestHandler";
import { NextResponse } from "next/server";


export async function GET() {
  const handler = new RequestHandler(TicketModel, TicketCash);
   return handler.GetAll();
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;


    await TicketModel.create(ticketData);

    return NextResponse.json({ message: "Your Ticket Created Successfully" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}