import { Balance } from "./components/balance";
import { Calendar } from "./components/calendar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-8">
      <div className="w-full max-w-7xl">
        <h1 className="text-2xl font-bold mb-6">
          Controle mensal: Keith e Gui ♥️
        </h1>
        <Balance />
        <Calendar classname="mt-8" />
      </div>
    </main>
  );
}
