"use client"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import WholeProductPage from "./components/productPage";

export default function ProductPage() {
  const router = useRouter();
  const { data: session } = useSession();
    if(session) {
        return <WholeProductPage></WholeProductPage>
    }
}