import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  display: "swap",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hefestos Boilerplate",
  description:
    "A boilerplate with build-in components and custom design builded with Next.js and TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistMono.className}`}>
        <div className="max-w-5xl m-auto border-x border-zinc-900 flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
