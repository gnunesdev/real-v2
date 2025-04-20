import { format, isSameMonth, isToday } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/components/ui/dialog";
import { TransactionForm } from "~/shared/features/transaction-form";

type DayProps = {
  day: Date;
  currentDate: Date;
};

export const Day = ({ day, currentDate }: DayProps) => {
  return (
    <Dialog modal={true}>
      <DialogTrigger className="cursor-pointer">
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
          {/* {gastos.map((gasto) => {
        return (
          <div
            key={gasto.id}
            className="text-sm font-medium text-muted-foreground"
          >
            {gasto.name}
          </div>
        );
      })} */}
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Adicionar transação</DialogTitle>
          <TransactionForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};
