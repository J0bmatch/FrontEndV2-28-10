import { ColumnDef } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from 'lucide-react';


export type Vaga = {
  id: string;
  tipo: string;
  Vaga: string;
  Candidatos: string;
};

export const columns: ColumnDef<Vaga>[] = [
  {
    accessorKey: "tipo",
    header: "Vaga",
  },
  {
    accessorKey: "Vaga",
    header: "Função",
  },
  {
    accessorKey: "Candidatos",
    header: "Candidatos",
    cell: ({ row }) => {
      return (
        <div className="flex flex-1 flex-row justify-between items-center pr-8">
            <div>
            <span className="ml-6">{row.original.Candidatos} </span>
            </div>
          <div>
          <DropdownMenu>
            <DropdownMenuTrigger><Ellipsis/></DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>Minha Vaga</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Visualizar</DropdownMenuItem>
              <DropdownMenuItem className="text-red-500">Deletar Vaga</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          </div>
      
        </div>
      );
    },
  },
];
