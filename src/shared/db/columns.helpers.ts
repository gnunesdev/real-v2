import { timestamp } from "drizzle-orm/pg-core";

export const timestamps = {
  updated_at: timestamp().notNull(),
  created_at: timestamp().defaultNow().notNull(),
};
