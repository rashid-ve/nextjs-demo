import { cookies } from "next/headers";
import Link from "next/link";

export default async function NewsArticles({
  params,
  searchParams,
}: {
  params: Promise<{ articleId: string }>;
  searchParams: Promise<{ lang?: "en" | "fr" }>;
}) {
  const cookieStore = await cookies();
  const { articleId } = await params;
  const { lang = "en" } = await searchParams;
  console.log(cookieStore.get("resultsperpage"));
  return (
    <div>
      <h1>News article {articleId}</h1>
      <p>Reading in {lang}</p>

      <div>
        <Link href={`/articles/${articleId}?lang=en`}>English</Link>
        <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
      </div>
    </div>
  );
}
