"use client";

import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathaname = usePathname();
  const productId = pathaname.split("/")[2];
  const reviewId = pathaname.split("/")[4];
  return (
    <div>
      <h2>
        Review {reviewId} not Found for Product {productId}!
      </h2>
    </div>
  );
}
