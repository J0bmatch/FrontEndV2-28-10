import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Para obter o id da URL
import { Card, CardContent, CardHeader } from "@/components/ui/card"; // Exemplo de componente Card do shadcn
import { Button } from "@/assets/components/button/button";
import SideMenu from "@/assets/components/sideMenuEmpresa";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Ellipsis } from "lucide-react";

// Tipos para os dados
type Empresa = {
  id: number;
  nome: string;
  areaAtuacao: string;
  cidade: string;
  estado: string;
};

type Vaga = {
  id: number;
  titulo: string;
  descricao: string;
  cargaHoraria: string;
  salario: string;
  local: string;
};

const PerfilE: React.FC = () => {
  const { id_empresa } = useParams<{ id_empresa: string }>(); // Obtém o id da empresa a partir da URL
  const [empresa, setEmpresa] = useState<Empresa | null>(null);
  const [vagas, setVagas] = useState<Vaga[]>([]);
  const [loading, setLoading] = useState(true);

  // Função para buscar dados da empresa e das vagas
  useEffect(() => {
    const fetchEmpresaData = async () => {
      try {
        // Busca dados da empresa
        const empresaResponse = await fetch(`/api/empresa/${id_empresa}`);
        const empresaData = await empresaResponse.json();
        setEmpresa(empresaData);

        // Busca postagens de vagas da empresa
        const vagasResponse = await fetch(`/api/empresa/${id_empresa}/vagas`);
        const vagasData = await vagasResponse.json();
        setVagas(vagasData);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchEmpresaData();
  }, [id_empresa]);

  if (loading) {
    return <div>Carregando...</div>;
  }

  return (
    <main>
      <SideMenu />
      <div className=" flex flex-1 justify-center items-center flex-col">
        <div className="header bg-[#130633] p-4 min-w-[80%] rounded-b-3xl min-h-36 flex flex-1 flex-row justify-between items-center">
          <div className="flex flex-1 justify-start">
            <h1 className="text-white">Menu perfil</h1>
          </div>

          <div className="flex flex-1 justify-end">
            <Button className="btn btnPrimaryE max-w-fit ">
              Editar perfil
            </Button>
          </div>
        </div>

        <div className="empresa-info w-screen flex flex-1 justify-center items-center z-10 relative bottom-12">
          <Card className="p-4 mt-4 flex flex-1 flex-row justify-start items-center min-w-[60%] max-w-[60%]">
            <CardHeader>
              <Avatar className=" bg-dark rounded-full w-16 h-16 mb-4">
                <AvatarImage></AvatarImage>
                <AvatarFallback>{empresa?.nome}</AvatarFallback>
              </Avatar>
            </CardHeader>
            <CardContent>
              <h2>{empresa?.nome}Nome da Empresa</h2>
              <p>{empresa?.areaAtuacao}Areas de Atuaçao </p>
              <p>
                {empresa?.cidade} {empresa?.estado} cidade-estado
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="min-w-[50%]">
          <h2>Postagens</h2>

          <Card className="h-full w-full rounded-2xl border-none shadow-none">
            <CardHeader className="bg-[#130633] w-full rounded-2xl z-0 pb-10 relative top-6 flex flex-1 flex-row items-center">
              <Avatar className=" bg-dark rounded-full w-16 h-16 ">
                <AvatarImage></AvatarImage>
                <AvatarFallback>{empresa?.nome}</AvatarFallback>
              </Avatar>
              <div className="ml-6 flex flex-1  flex-col justify-start">
                <h3 className="text-white">Título da Postagem</h3>
                <p className="text-white">Descrição da postagem</p>
              </div>
            </CardHeader>
            <CardContent className="z-50 border-2 rounded-2xl relative  bg-white pt-7">
              <p>Carga Horária: 40h</p>

              <p>Salário: R$ 1000</p>

              <p>Local: Cidade-estado</p>

              <p>outros dados da vaga</p>
            </CardContent>
            <div className="flex flex-1 flex-row justify-start items-center p-4 bg-[#130633] rounded-2xl z-0 relative bottom-6 pt-8">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <Ellipsis className="text-white" />
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Minha Vaga</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>Editar Vaga</DropdownMenuItem>
                  <DropdownMenuItem className="text-red-500 hover:text-red-700">
                    Deletar Vaga
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </Card>
         
        </div>
      </div>
    </main>
  );
};

export default PerfilE;
