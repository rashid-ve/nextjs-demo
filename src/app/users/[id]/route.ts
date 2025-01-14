import { users } from "../route";

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const user = users.find((user) => user.id === parseInt(id));
  return Response.json(user);
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const body = await request.json();
  const { name } = body;

  const index = users.findIndex((user) => user.id === parseInt(id));
  users[index].name = name;

  return Response.json(users[index]);
}

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const index = users.findIndex((user) => user.id === parseInt(id));
  const deletedUser = users[index];
  users.splice(index, 1);

  return Response.json(deletedUser);
}
