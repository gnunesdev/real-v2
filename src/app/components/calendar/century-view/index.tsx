"use client";

import { addYears, getYear, isSameYear } from "date-fns";

interface CenturyViewProps {
  date: Date;
  onSelectYear: (date: Date) => void;
}

// Helper function to get the start of century
function getStartOfCentury(date: Date): Date {
  const year = getYear(date);
  const centuryStartYear = Math.floor(year / 100) * 100;
  return new Date(centuryStartYear, 0, 1);
}

export function CenturyView({ date, onSelectYear }: CenturyViewProps) {
  const centuryStart = getStartOfCentury(date);
  const years = Array.from({ length: 100 }, (_, i) =>
    addYears(centuryStart, i)
  );
  const currentYear = new Date();

  return (
    <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-2 p-2">
      {years.map((year, index) => (
        <button
          key={index}
          onClick={() => onSelectYear(year)}
          className={`
            p-2 rounded-md border text-center hover:bg-accent
            ${
              isSameYear(year, currentYear) ? "border-primary" : "border-border"
            }
          `}
        >
          <div className="text-sm font-medium">{getYear(year)}</div>
        </button>
      ))}
    </div>
  );
}
