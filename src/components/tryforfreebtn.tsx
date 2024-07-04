"use client";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function TryForFreeButton() {
  const { data: session } = useSession();
  const router = useRouter();

  function TryForFreeHandle() {
    if (session) {
      router.push("/product");
    } else {
      signIn("google");
    }
  }
  function HandleContactUs() {
    router.push("/contact");
  }
  return (
    <div className="flex gap-7 justify-center items-center">
      <Button className="bg-secondary text-primary border-0 hover:bg-slate-200" onClick={() => HandleContactUs()}>Contact Us</Button>
      <Button onClick={() => TryForFreeHandle()}>Try Product</Button>
    </div>
  );
}
