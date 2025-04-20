import { db } from "../config";
import { transactions } from "../schema";

export const selectFromTransactions = async () => {
  const response = await db.select().from(transactions);

  return response;
};
