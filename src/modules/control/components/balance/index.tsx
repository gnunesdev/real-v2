import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/shared/components/ui/card";

export const Balance = () => {
  return (
    <div className="flex gap-2">
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Valor à gastar</CardTitle>
          <CardDescription>
            Valor estipulado à ser gasto durante todo o mês
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(3150)}
          </p>
        </CardContent>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Gastos do mês</CardTitle>
          <CardDescription>Total de valor gasto nesse mês</CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(500)}
          </p>
        </CardContent>
      </Card>
      <Card className="w-1/3">
        <CardHeader>
          <CardTitle>Balanço</CardTitle>
          <CardDescription>
            Valor ainda disponível para gastar até o fim do mês
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>
            {new Intl.NumberFormat("pt-BR", {
              style: "currency",
              currency: "BRL",
            }).format(2650)}
          </p>
        </CardContent>
      </Card>
    </div>
  );
};
