import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import Reveal from "@/app/components/Reveal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Portfolio - Vixtruong",
  description: "Personal portfolio",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-gradient-to-b from-[#0a192f] via-[#0f2747] to-[#112240] text-white font-sans">
        <Header />
        <Reveal>
          <main className="container mx-auto px-6">{children}</main>
        </Reveal>
        <Footer />
      </body>
    </html>
  );
}
