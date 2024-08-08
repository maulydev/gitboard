import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import TanstackProvider from "./TanstackProvider";
import WebHits2 from "@/components/WebHits2";

const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "800"] });

export const metadata: Metadata = {
  title: "GitBoard",
  description: "GitHub Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${poppins.className} bg-gray-100`}>
        <TanstackProvider>
          <Navbar />
          <div className="container mx-auto p-2 md:p-4">
            {children}
            <footer className="flex justify-cente mt-4">
              <WebHits2 />
            </footer>
          </div>
        </TanstackProvider>
      </body>
    </html>
  );
}
