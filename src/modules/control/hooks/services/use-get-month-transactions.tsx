import { useQuery } from "@tanstack/react-query";

export const useGetMonthTransactions = () => {
  const props = useQuery({
    queryKey: ["use-get-month-transactions"],
    queryFn: () =>
      fetch("/api/transactions").then((response) => response.json()),
  });

  return props;
};
