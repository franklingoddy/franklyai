import type { Metadata } from "next";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";

 
export const metadata: Metadata = {
  title: "FranklyAi",
  description: "Frankly Ai helps you solve your daily task",
  icons:{
    icon: "/images/Franklyai.png.webp"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   <ClerkProvider>
     <html lang="en">
      <body className="min-h-screen"
      >
        {children}
        {/* taoaster */}
      </body>
    </html>
   </ClerkProvider>
  );
}
