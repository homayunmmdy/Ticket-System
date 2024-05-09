import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/(components)/Nav"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ticket System",
  description: "Ticket Managment system that you cna manage your tickets",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        <div className="flex flex-col h-screen max-h-screen">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
