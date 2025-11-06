import mongoose, { Schema } from "mongoose";

mongoose.connect(process.env.MONGODB_URI);
mongoose.Promise = global.Promise;

const ticketSchema = new Schema(
  {
    title: String,
    description: String,
    body: String,
    category: String,
    priority: Number,
    progress: Number,
    status: String,
    startTime: Date,
    endTime: Date, 
    active: Boolean,
  },
  {
    timestamps: true,
  }
);

const TicketModel = mongoose.models.Ticket || mongoose.model("Ticket", ticketSchema);

export default TicketModel;
