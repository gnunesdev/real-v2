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

interface MonthViewProps {
  date: Date;
}

export const MonthView = ({ date }: MonthViewProps) => {
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
