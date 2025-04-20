import { Balance } from "./components/balance";
import { Calendar } from "./components/calendar";

export const ControlDashboard = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <Balance />
        <Calendar classname="mt-8" />
      </div>
    </main>
  );
};
