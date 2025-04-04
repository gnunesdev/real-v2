"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addMonths, addYears, getYear } from "date-fns";
import { Button } from "~/components/ui/button";
import { CenturyView } from "./century-view";
import { YearView } from "./year-view";
import { MonthView } from "./month-view";
import { cn } from "~/lib/utils";

type ViewMode = "month" | "year" | "century";

function getStartOfCentury(date: Date): Date {
  const year = getYear(date);
  const centuryStartYear = Math.floor(year / 100) * 100;
  return new Date(centuryStartYear, 0, 1);
}

type CalendarProps = {
  classname?: string;
};

export function Calendar({ classname }: CalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [viewMode, setViewMode] = useState<ViewMode>("month");

  const handlePrevious = () => {
    if (viewMode === "month") {
      setCurrentDate(addMonths(currentDate, -1));
    } else if (viewMode === "year") {
      setCurrentDate(addYears(currentDate, -1));
    } else {
      const centuryStart = getStartOfCentury(currentDate);
      setCurrentDate(new Date(getYear(centuryStart) - 100, 0, 1));
    }
  };

  const handleNext = () => {
    if (viewMode === "month") {
      setCurrentDate(addMonths(currentDate, 1));
    } else if (viewMode === "year") {
      setCurrentDate(addYears(currentDate, 1));
    } else {
      const centuryStart = getStartOfCentury(currentDate);
      setCurrentDate(new Date(getYear(centuryStart) + 100, 0, 1));
    }
  };

  const handleTitleClick = () => {
    if (viewMode === "month") {
      setViewMode("year");
    } else if (viewMode === "year") {
      setViewMode("century");
    }
  };

  const handleViewSelect = (date: Date, newViewMode: ViewMode) => {
    setCurrentDate(date);
    setViewMode(newViewMode);
  };

  const renderTitle = () => {
    if (viewMode === "month") {
      return format(currentDate, "MMMM yyyy");
    } else if (viewMode === "year") {
      return format(currentDate, "yyyy");
    } else {
      const centuryStart = getStartOfCentury(currentDate);
      const centuryStartYear = getYear(centuryStart);
      return `${centuryStartYear} - ${centuryStartYear + 99}`;
    }
  };

  return (
    <div className={cn("border rounded-lg shadow bg-card", classname)}>
      <div className="flex items-center justify-between p-4 border-b">
        <Button variant="outline" size="icon" onClick={handlePrevious}>
          <ChevronLeft className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          onClick={handleTitleClick}
          className="text-lg font-medium"
        >
          {renderTitle()}
        </Button>
        <Button variant="outline" size="icon" onClick={handleNext}>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
      <div className="p-2">
        {viewMode === "month" && <MonthView date={currentDate} />}
        {viewMode === "year" && (
          <YearView
            date={currentDate}
            onSelectMonth={(date) => handleViewSelect(date, "month")}
          />
        )}
        {viewMode === "century" && (
          <CenturyView
            date={currentDate}
            onSelectYear={(date) => handleViewSelect(date, "year")}
          />
        )}
      </div>
    </div>
  );
}
