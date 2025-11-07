import { TicketCash } from "@/app/cash/TicketCash";
import TicketModel from "@/app/models/Ticket";
import Ticket from "@/app/models/Ticket";
import RequestHandler from "@/app/util/RequestHandler";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;

   const handler = new RequestHandler(TicketModel, TicketCash);
   return handler.Get(id);
}

export async function PUT(req, { params }) {
  try {
    const { id } = params;

    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await Ticket.findByIdAndUpdate(id, {
      ...ticketData,
    });

    return NextResponse.json({ message: "Your Ticket updated Successfully" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    const { id } = params;

    await Ticket.findByIdAndDelete(id);
    return NextResponse.json({ message: "Ticket Deleted" }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
}
