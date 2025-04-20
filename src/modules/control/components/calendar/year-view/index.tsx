"use client";

import { format, addMonths, startOfYear, isSameMonth } from "date-fns";

interface YearViewProps {
  date: Date;
  onSelectMonth: (date: Date) => void;
}

export function YearView({ date, onSelectMonth }: YearViewProps) {
  const yearStart = startOfYear(date);
  const months = Array.from({ length: 12 }, (_, i) => addMonths(yearStart, i));
  const currentMonth = new Date();

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 gap-4 p-2">
      {months.map((month, index) => (
        <button
          key={index}
          onClick={() => onSelectMonth(month)}
          className={`
            p-4 rounded-md border text-center hover:bg-accent
            ${
              isSameMonth(month, currentMonth)
                ? "border-primary"
                : "border-border"
            }
          `}
        >
          <div className="text-sm font-medium">{format(month, "MMM")}</div>
        </button>
      ))}
    </div>
  );
}
