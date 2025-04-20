"use client";

import { SquareMousePointer } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/shared/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "~/shared/components/ui/dialog";
import { TransactionForm } from "~/shared/features/transaction-form";

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold bg-gradient-to-b from-green-400 to-green-600 text-transparent bg-clip-text">
          $Real
        </h1>
        <ul className="flex ml-12">
          <li>
            <Link href="/">Dashboard</Link>
          </li>
          <li className="ml-4">
            <Link href="/control">Controle</Link>
          </li>
        </ul>
      </div>

      <Dialog>
        <DropdownMenu>
          <DropdownMenuTrigger>
            <SquareMousePointer className="h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Ações</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DialogTrigger>
              <DropdownMenuItem>Adicionar transação</DropdownMenuItem>
            </DialogTrigger>
          </DropdownMenuContent>
        </DropdownMenu>

        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar transação</DialogTitle>
            <TransactionForm />
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </header>
  );
};
