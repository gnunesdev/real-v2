import { format, isSameMonth, isToday } from "date-fns";

type DayProps = {
  day: Date;
  currentDate: Date;
};

const gastos = [
  {
    id: 1,
    name: "Aluguel",
    value: 1000,
  },
];

export const Day = ({ day, currentDate }: DayProps) => {
  return (
    <div
      className={`
      min-h-[80px] p-1 border rounded-md
      ${
        isSameMonth(day, currentDate)
          ? "bg-background"
          : "bg-muted/30 text-muted-foreground"
      }
      ${isToday(day) ? "border-primary" : "border-border"}
    `}
    >
      <div
        className={`
      text-sm font-medium p-1 rounded-full w-7 h-7 flex items-center justify-center
      ${isToday(day) ? "bg-primary text-primary-foreground" : ""}
    `}
      >
        {format(day, "d")}
      </div>
      {gastos.map((gasto) => {
        return (
          <div
            key={gasto.id}
            className="text-sm font-medium text-muted-foreground"
          >
            {gasto.name}
          </div>
        );
      })}
    </div>
  );
};
