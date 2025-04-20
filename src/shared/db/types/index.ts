import { InferSelectModel } from "drizzle-orm";
import { transactions } from "../schema";

export type TransactionsType = InferSelectModel<typeof transactions>;
