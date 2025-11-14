import Nav from "@/app/components/Nav";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Dock from "./components/Dock";
import Footer from "./components/Footer";
import SiteConfig from "./config/site";
import "./globals.css";
import FAB from "./components/FAB";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: SiteConfig.name,
  description: SiteConfig.description,
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang={SiteConfig.lang} dir={SiteConfig.dir} data-theme="cupcake">
        <body className={inter.className}>
          <div className="flex flex-col pb-20 md:pb-0">
            <Nav />
            <div className="grow overflow-y-auto bg-page text-default-text">
              {children}
            </div>
            <FAB />
            <Dock />
            <Footer />
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
