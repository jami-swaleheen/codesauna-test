import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geisthanken = localFont({
  src: "../fonts/HankenGrotesk-VariableFont_wght.ttf",
  variable: "--font-hanken-grotesk",
  weight: "500 700 900",
});

export const metadata: Metadata = {
  title: "codesauna-test",
  description: "upwork assignment",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geisthanken.variable} antialiased bg-white `}>
        <div className="md:flex justify-center md:h-[100vh] h-full">{children}</div>
      </body>
    </html>
  );
}
