"use server";

import { FormSchema } from ".";
import { randomUUID } from "node:crypto";
import { db } from "~/shared/db/config";
import { transactions } from "~/shared/db/schema";

export const createTransaction = async (transaction: FormSchema) => {
  return db.insert(transactions).values({
    id: randomUUID(),
    type: transaction.type,
    amount: transaction.amount,
    description: transaction.description,
    category: transaction.category,
    updated_at: new Date(),
  });
};
