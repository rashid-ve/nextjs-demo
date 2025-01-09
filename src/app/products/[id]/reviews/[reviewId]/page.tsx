import { notFound, redirect } from "next/navigation";
import { Metadata } from "next";

type Props = {
  params: Promise<{ id: string; reviewId: string }>;
};

export const generateMetadata = async ({
  params,
}: Props): Promise<Metadata> => {
  const id = (await params).id;
  const title = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(`iPhone ${id}`);
    }, 100);
  });
  return {
    title: `Product ${title}`,
  };
};

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default async function ReviewPage({ params }: Props) {
  const random = getRandomInt(2);
  if (random === 1) {
    throw new Error("Error loading review!");
  }
  const { id, reviewId } = await params;
  if (parseInt(reviewId) > 1000) {
    // notFound();
    redirect("/products/1");
  }
  return (
    <h1>
      Review: {reviewId} for product {id}
    </h1>
  );
}
