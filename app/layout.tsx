"use client";
import Navbar from "@/components/layout/Navbar";
import type { Metadata } from "next";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/store";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

const metadata: Metadata = {
  title: "A2SV",
  description: "Africa To Silicon Valley",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-{poppins}">
        <Provider store={store}>
          <ToastContainer />
          <Navbar />
          <main className="p-10 md:p-20">{children}</main>
          <Footer />
        </Provider>
      </body>
    </html>
  );
}
