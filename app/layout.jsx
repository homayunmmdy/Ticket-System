import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "@/app/(components)/Nav"
import SiteConfig from "./config/site";
import Footer from "./(components)/Footer";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="dark">
      <body className={inter.className}>
        <div className="flex flex-col ">
          <Nav />
          <div className="flex-grow overflow-y-auto bg-page text-default-text">
            {children}
          </div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
