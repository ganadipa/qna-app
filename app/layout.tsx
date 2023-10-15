import { ClerkProvider } from "@clerk/nextjs";
import React from "react";
/* eslint-disable-next-line */
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "@/context/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Boxes",
  description:
    "The Q&A App is a user-friendly and interactive platform designed for knowledge sharing and collaborative learning. Users can ask questions, provide answers, and engage in discussions on a wide range of topics. The app facilitates the exchange of information and expertise, making it a valuable resource for both individuals seeking answers and those willing to share their knowledge. Whether you're a student looking for homework help, a professional seeking industry insights, or a curious mind exploring new subjects, the Q&A App connects you with a diverse community of users eager to assist and enlighten. Join the conversation, expand your knowledge, and contribute to the collective wisdom of the online community with the Q&A App.",
  icons: {
    icon: "assets/images/site-logo.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider
          appearance={{
            elements: {
              formButtonPrimary: "primary-gradient",
              footerActionLink: "primary-text-gradient hover:text-primary-500",
            },
          }}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}
