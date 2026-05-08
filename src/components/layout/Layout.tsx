import Footer from "@/components/layout/Footer";
import Nav from "@/components/layout/nav/Nav";
import { ReactNode } from "react";

export default function Layout({ 
  children,
 }: { 
  children: ReactNode 
}) {
  return (
    <>
      <Nav />

      {children}

      <Footer />
    </>
  );
}