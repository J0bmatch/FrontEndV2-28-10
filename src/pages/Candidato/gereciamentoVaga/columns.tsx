import { ColumnDef } from "@tanstack/react-table"
import { ReactNode } from "react"
import { BadgeCheck,BadgeX, BadgeHelp  } from 'lucide-react';


export type Vaga = {
    id: string,
    tipo: string,
    empresa: string,
    status: "Pendente" | "Contatado" | "Desistencia" | "Reprovado"
}

const mapStatus: {[key: string]: string} = {
    Pendente: 'text-[16px] font-medium flex flex-row items-center',
    Contatado: 'text-[#11D219] text-[16px] flex flex-row items-center',
    Desistencia: 'text-[#AEAEAE] text-[16px] font-medium ',
    Reprovado: 'text-[#D23411] text-[16px] font-medium flex flex-row items-center'
}
const iconStatus: {[key: string]: ReactNode} = {
    Pendente: <BadgeHelp className="w-5 h-5 pt-1"/>,
    Contatado: <BadgeCheck className="text-[#11D219] w-5 h-5 pt-1"/> ,
    Reprovado: <BadgeX className="text-[#D23411] w-5 h-5 pt-1"/>

}

export const columns: ColumnDef<Vaga>[] = [
    {
        accessorKey: "tipo",
        header: "Vaga"
    },
    {
        accessorKey: "empresa",
        header: "Empresa" 
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({row})=> {
            return(
                
                    <span className={mapStatus[row.original.status]}>{row.original.status}{iconStatus[row.original.status]}   </span>
                
               
            )
        }
    }
]