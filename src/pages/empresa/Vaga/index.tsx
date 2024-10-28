import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "../../../components/ui/card"; // Import Card components
import { Button } from "../../../assets/components/button/button";
import Input from "../../../assets/components/input/input";
import SideMenu from "@/assets/components/sideMenuEmpresa";
import { Textarea } from "@/components/ui/textarea";

interface FormData {
  titulo: string;
  funcao: string;
  descricao: string;
  faixaSalarial: string;
  riscos: string;
  googleFormLink: string;
}

const CriarVaga: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    titulo: "",
    funcao: "",
    descricao: "",
    faixaSalarial: "",
    riscos: "",
    googleFormLink: "",
  });

  const [errors, setErrors] = useState<string | null>(null);
  const navigate = useNavigate();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (
      !formData.titulo ||
      !formData.funcao ||
      !formData.descricao ||
      !formData.faixaSalarial
    ) {
      setErrors("Por favor, preencha todos os campos obrigatórios.");
      return;
    }

    console.log("Dados enviados:", formData);
    // Add logic to save data here

    navigate("/continuar");
  };

  return (
    <div>
      <SideMenu />
      <div className="container w-fit mx-auto p-6  flex items-center justify-center ">
        <Card className="bg-white shadow-lg rounded-lg flex flex-col items-center justify-center mt-8">
          <CardHeader>
            <h1 className="text-5xl font-normal font-poppins text-center text-[#130633] flex items-center">
              Criação de vagas
            </h1>
          </CardHeader>
          <CardContent className="flex items-center">
            {errors && <p className="text-red-500 text-center">{errors}</p>}
            <form
              id="formVaga"
              onSubmit={handleSubmit}
              className="flex flex-col   items-center"
            >
              <div className="flex flex-1 flex-row justify-center items-center w-full mb-4">
              <div >
                <Input
                  id="titulo"
                  label="Digite o Titulo da Vaga:"
                  type="text"
                  name="titulo"
                  value={formData.titulo}
                  onChange={handleChange}
                  placeholder="Digite o título"
                  required
                  className="max-w-[250px]"                />
              </div>
              <div>
                <Input
                  id="funcao"
                  label="Função a exercer:"
                  type="text"
                  name="funcao"
                  value={formData.funcao}
                  onChange={handleChange}
                  placeholder="Digite o função"
                  required
                  className="max-w-[250px]"
                />
              </div>
              </div>
              <div className="w-fit flex flex-1 flex-row justify-center items-center mb-4">
              <div>
                <Input
                  id="riscos"
                  label="Riscos"
                  type="text"
                  name="riscos"
                  value={formData.riscos}
                  onChange={handleChange}
                  placeholder="Digite os riscos"
                  className="max-w-[250px]"
                />
              </div>
              <div >
                <Input
                  label="Faixa Salarial:"
                  id="faixaSalarial"
                  type="text"
                  name="faixaSalarial"
                  value={formData.faixaSalarial}
                  onChange={handleChange}
                  placeholder="Digite o número"
                  required
                  className="max-w-[250px]"
                />
              </div>
              </div>

              <div className="mb-4 w-full ml-5 ">
                <label htmlFor="descricao" className="block mb-2">Descrição da vaga:</label>
                <Textarea
                  id="descricao"
                  name="descricao"
                  value={formData.descricao}
                  onChange={handleChange}
                  placeholder="Descreva a vaga"
                  required
                  className="max-w-[510px] border border-gray-300 p-2 rounded"
                />
              </div>
              
              <div className="mb-4 mt-2">
                
                <Input
                  label="Adicionar Formulario do Google Forms(Opcional)"
                  type="text"
                  name="googleFormLink"
                  value={formData.googleFormLink}
                  onChange={handleChange}
                  placeholder="Link do formulário"
                  className="max-w-[510px] min-w-[510px]"
                />
              </div>
              <CardFooter className="flex justify-between items-center w-full">
                <Button
                  className="btn btnSecondE w-[300px]"
                  type="button"
                  onClick={() => navigate(-1)}
                >
                  Voltar
                </Button>
                <Link to="/ContinuacaoVaga">
                <Button className="btn btnSecondE w-[300px]" type="submit">
                  Cadastrar
                </Button>
                </Link>
                
              </CardFooter>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CriarVaga;
