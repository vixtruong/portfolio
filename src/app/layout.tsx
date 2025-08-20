import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata = {
  title: "Portfolio - Ibrahim",
  description: "Personal portfolio built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0f0c29] text-white">
        <Header />
        <main className="container mx-auto px-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
