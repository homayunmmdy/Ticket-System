import Ticket from "@/app/models/Ticket";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const tickets = await Ticket.find();

    return NextResponse.json({ tickets }, { status: 200 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    const body = await req.json();
    const ticketData = body.formData;

    // Ensure startTime and endTime are properly parsed to Date objects
    if (ticketData.startTime) {
      ticketData.startTime = new Date(ticketData.startTime);
    }
    if (ticketData.endTime) {
      ticketData.endTime = new Date(ticketData.endTime);
    }

    await Ticket.create(ticketData);

    return NextResponse.json({ message: "Your Ticket Created Successfully" }, { status: 201 });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ message: "Error", err }, { status: 500 });
  }
}