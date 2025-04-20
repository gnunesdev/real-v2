import { selectFromTransactions } from "~/shared/db/queries";

export async function GET() {
  const response = await selectFromTransactions();

  return Response.json(response);
}
