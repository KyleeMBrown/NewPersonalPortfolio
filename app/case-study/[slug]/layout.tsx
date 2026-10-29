import type { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = {
  title: "",
  description: "",
};

export default function RootLayout({ children }:{children:ReactNode}) {
  return (
      <div className="min-h-full flex flex-col">
        {children}
      </div>
  );
}
