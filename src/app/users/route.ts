import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Doe" },
];

export async function GET(request: NextRequest) {
  const cookieStore = await cookies();
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get("query");
  const filteredUsers = query
    ? users.filter((users) => users.name.includes(query))
    : users;
  cookieStore.set("resultsPerPage", "10");
  const theme = request.cookies.get("theme");
  console.log(theme);
  return Response.json(filteredUsers);
}

export async function POST(request: Request) {
  const user = await request.json();
  const newUser = {
    id: users.length + 1,
    name: user.name,
  };
  users.push(newUser);
  return new Response(JSON.stringify(newUser), {
    headers: {
      "Content-Type": "application/json",
      "Set-Cookie": "theme=dark",
    },
    status: 201,
  });
}
