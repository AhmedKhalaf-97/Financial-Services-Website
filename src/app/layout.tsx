import type { Metadata } from "next";
import {Header} from "@/app/ui/header";

import "./global.scss";

import React from "react";

export const metadata: Metadata = {
  title: "Financial Advising Site",
  description: "Created for CSC 131",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-bs-theme={"light"}>
      <body>
        <div className={"container"}>
          <Header/>
          <main className={"d-flex flex-nowrap"}>
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
