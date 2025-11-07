import EditTicketForm from "@/app/components/EditTicketForm";
import { FetchDataForEditPage } from "@/app/util/ServerUtil";


const TicketPage = async ({ params }) => {
     const updateData = await FetchDataForEditPage('api/Tickets/', params.id);

   return <EditTicketForm ticket={updateData} />;
};

export default TicketPage;