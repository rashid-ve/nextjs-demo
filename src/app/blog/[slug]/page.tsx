import { notFound } from "next/navigation";

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (slug === "not-found") {
    notFound();
  }
  return (
    <div>
      <h1>{slug}</h1>
    </div>
  );
}
