"use client"
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";

export default function Loading() {
    const [progress, setProgress] = useState(13);

    useEffect(() => {
      const timer66 = setTimeout(() => setProgress(66), 500);
      const timer99 = setTimeout(() => setProgress(99), 500);
      return () => {
        clearTimeout(timer66);
        clearTimeout(timer99);
      };
    }, []);

    return (
      <div className="w-screen h-screen flex justify-center items-center">
          <Progress value={progress} />
      </div>
    );
  }