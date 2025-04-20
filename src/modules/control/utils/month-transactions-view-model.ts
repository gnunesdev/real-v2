import { startOfDay } from "date-fns";
import { TransactionsType } from "~/shared/db/types";

type Props = {
  days: Date[];
  transactions: TransactionsType[];
};

export const getMonthTransactionsViewModel = ({
  days,
  transactions,
}: Props) => {
  const hashMapDays: Record<string, typeof transactions> = {};

  days.forEach((day) => {
    const dayIso = day.toISOString();
    hashMapDays[dayIso] = [];
  });

  transactions.forEach((transaction) => {
    const firstTimeInDate = startOfDay(transaction.created_at).toISOString();

    hashMapDays[firstTimeInDate] = {
      ...hashMapDays[firstTimeInDate],
      ...transaction,
    };
  });

  return hashMapDays;
};
