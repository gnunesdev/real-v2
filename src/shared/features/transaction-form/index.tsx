"use client";
import { zodResolver } from "@hookform/resolvers/zod";

import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "~/shared/components/ui/form";
import { Input } from "~/shared/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/shared/components/ui/select";
import { createTransaction } from "./action-create-transaction";
import { useMutation } from "@tanstack/react-query";
import { Button } from "~/shared/components/ui/button";
import { toast } from "sonner";

const formSchema = z.object({
  type: z.enum(["credit", "debit"]),
  category: z.string(),
  amount: z.string(),
  description: z.string(),
});

export type FormSchema = z.infer<typeof formSchema>;

export const TransactionForm = () => {
  const createTransactionMutation = useMutation({
    mutationFn: (newTransaction: FormSchema) => {
      return createTransaction(newTransaction);
    },
    onSuccess: () => {
      toast.success("Adicionado com sucesso!");
    },
    onError: (error) => {
      console.log({ error });
      toast.error("Houve um erro ao adicionar a transação!");
    },
  });

  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "credit",
      category: "",
      amount: "",
      description: "",
    },
  });

  const onSubmit = async (transaction: FormSchema) => {
    createTransactionMutation.mutate(transaction);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mt-4">
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição</FormLabel>
              <FormControl>
                <Input placeholder="Ex: pedido ifood" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="amount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor</FormLabel>
              <FormControl>
                <Input placeholder="Ex: 10,95" {...field} type="number" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="category"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Categoria</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione a categoria dessa transação" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="delivery">Delivery</SelectItem>
                  <SelectItem value="uber">Uber</SelectItem>
                  <SelectItem value="clothes">Roupas</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="type"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Tipo</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione o tipo dessa transação:" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="credit">Entrada</SelectItem>
                  <SelectItem value="debit">Saída</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex items-center justify-end">
          <Button
            type="submit"
            className="bg-green-900 hover:bg-green-950 text-white cursor-pointer"
          >
            {createTransactionMutation.isPending
              ? "Carregando..."
              : "Registrar"}
          </Button>
        </div>
      </form>
    </Form>
  );
};
