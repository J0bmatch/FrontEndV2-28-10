import SideMenu from "@/assets/components/sideMenu";
import { Vaga, columns } from "./columns";
import { DataTable } from "./data-table";
import Preloader from "@/assets/components/preloading";

function getData(): Vaga[] {
    return [
        {
            id: "1",
            tipo: "estagiario",
            empresa: "Coca-cola",
            status: "Pendente"
        },
        {
            id: "2",
            tipo: "Vendedor",
            empresa: "Coca-cola",
            status: "Desistencia"
        },
        {
            id: "3",
            tipo: "Jovem Aprendiz",
            empresa: "Americanas",
            status: "Contatado"
        },
        {
            id: "4",
            tipo: "estoquista",
            empresa: "Americanas",
            status: "Reprovado"
        },
        {
            id:"5",
            tipo:"caixa de supermercado",
            empresa:"Mercadão",
            status:"Reprovado"
        }
    ];
}

export default function GereciamentoVaga() {
    const data = getData(); // Agora é síncrono
    return (
        <main>
            <Preloader/>
            <SideMenu />
            <div className="w-full flex flex-1 justify-center items-center flex-col p-11 gap-8">
                <h1 className="font-poppins text-[#351AA0] font-normal text-5xl">Gerenciamento de Vagas</h1>
                <h2 className="font-poppins font-normal text-2xl">
                    Vagas
                </h2>
                 <DataTable columns={columns} data={data} />
            </div>
           
        </main>
    );
}
