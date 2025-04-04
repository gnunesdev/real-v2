import { pgTable, text, numeric, uuid, pgEnum } from "drizzle-orm/pg-core";
import { timestamps } from "./columns.helpers";

export const transactionsTypeEnum = pgEnum("types", ["credit", "debit"]);

export const transactions = pgTable("transactions", {
  id: uuid("id").primaryKey(),
  description: text().notNull(),
  amount: numeric().notNull(),
  type: transactionsTypeEnum().notNull(),
  category: text("category"),
  ...timestamps,
});
