"use client"
import { useSession } from "next-auth/react";
import WholeProductPage from "./components/productPage";

export default function ProductPage() {
  const { data: session } = useSession();
    if(session) {
        return <WholeProductPage></WholeProductPage>
    }
}