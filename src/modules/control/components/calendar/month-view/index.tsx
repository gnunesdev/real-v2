"use client";

import { useMemo } from "react";
import {
  startOfMonth,
  endOfMonth,
  startOfWeek,
  endOfWeek,
  addDays,
} from "date-fns";
import { Day } from "./day";
import { useGetMonthTransactions } from "~/modules/control/hooks/services/use-get-month-transactions";
import { Loading } from "~/shared/components/ui/loading";
import { getMonthTransactionsViewModel } from "~/modules/control/utils/month-transactions-view-model";

interface MonthViewProps {
  date: Date;
}

export const MonthView = ({ date }: MonthViewProps) => {
  const { data, isLoading } = useGetMonthTransactions();

  const daysOfMonth = useMemo(() => {
    const monthStart = startOfMonth(date);
    const monthEnd = endOfMonth(date);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const daysArray = [];
    let currentDate = startDate;

    while (currentDate <= endDate) {
      daysArray.push(currentDate);
      currentDate = addDays(currentDate, 1);
    }

    return daysArray;
  }, [date]);

  const weekDays = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

  if (isLoading) {
    return (
      <Loading className="flex items-center justify-center w-full h-[28.75rem]" />
    );
  }

  const hashMap = getMonthTransactionsViewModel({
    days: daysOfMonth,
    transactions: data,
  });

  console.log({ hashMap, data });

  return (
    <div className="w-full">
      <div className="grid grid-cols-7 mb-2">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center py-2 text-sm font-medium text-muted-foreground"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {daysOfMonth.map((day, index) => (
          <Day key={index} day={day} currentDate={date} />
        ))}
      </div>
    </div>
  );
};
