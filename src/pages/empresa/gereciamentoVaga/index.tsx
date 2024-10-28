import SideMenu from "@/assets/components/sideMenuEmpresa";
import { Vaga, columns } from "./columns";
import { DataTable } from "./data-table";
import PreloadingE from "@/assets/components/preloadingE";

function getData(): Vaga[] {
    return [
        {
            id: "1",
            tipo: "CLT",
            Vaga: "Estoquista",
            Candidatos: "5"
        },
        {
            id: "2",
            tipo: "Jovem-Aprendiz",
            Vaga: "Atendimento ao Publico",
            Candidatos: "2"
        },
        {
            id:"3",
            tipo: "CLT",
            Vaga: "Gerente de Estoque",
            Candidatos: "3"
        },


    ];
}

export default function GereciamentoVagaE() {
    const data = getData(); // Agora é síncrono
    return (
        <main>
            <PreloadingE/>
            <SideMenu />
            <div className="w-full flex flex-1 justify-center items-center flex-col p-11 gap-8">
                <h1 className="font-poppins text-[#130633] font-normal text-5xl">Gerenciamento de Vagas</h1>
                <h2 className="font-poppins font-normal text-2xl">
                    Vagas
                </h2>
                 <DataTable columns={columns} data={data} />
            </div>
           
        </main>
    );
}
