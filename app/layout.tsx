"use client";
import Header from "@/components/Header";
import { store } from "@/redux/store";
import { Provider } from "react-redux";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <Provider store={store}>
        <Header />
        {children}
    </Provider>
      </body>
    </html>
  );
}
