import type { Metadata } from "next";
import { Inter } from "next/font/google";
import './css/card.scss';
import './css/globals.scss';
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: 'Masum Billah - Web Developer',
    description:
        'A fullstack web developer from Bangladesh. I love to learn new things and I am always open to collaborating with others. I am a quick learner and I am always looking for new challenges.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
          <body className={inter.className}>
              <main className="min-h-screen relative mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem] text-white">
                  <Navbar />
                  {children}
              </main>
              <Footer />
          </body>
      </html>
  );
}
