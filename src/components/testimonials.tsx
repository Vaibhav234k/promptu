"use client";
import { InfiniteMovingCards } from "@/components/ui/testimonialSection";

export function Testimonials() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <p className="text-4xl font-semibold mb-10">What our customer says</p>
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos itaque odit rem necessitatibus ratione fuga?",
    name: "Charles Dickens",
    title: "SWE at google",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit minus placeat quaerat ratione molestiae, earum incidunt iste pariatur quisquam saepe?",
    name: "William Shakespeare",
    title: "Data Analyst at microsoft",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "SDE at amazon",
  },
  {
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, autem.",
    name: "Jane Austen",
    title: "Tech lead at zerodha",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Web dev at flipkart",
  },
];
