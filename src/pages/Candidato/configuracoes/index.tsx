import Input from "@/assets/components/input/input";
import SideMenu from "@/assets/components/sideMenu";
import React, { FunctionComponent, useState } from "react";
import InputMask from "react-input-mask";
import { Button } from "@/assets/components/button/button";
import api from "@/services/api";
import { toast } from "sonner";


const ConfiguracoesC: FunctionComponent = () => {
  
  const [telefone, setTelefone] = useState("");
  const rm = localStorage.getItem("rm");
  const [email, setEmail] = useState("");
  const [endereco, setEndereco] = useState({
    cep: "",
    logradouro: "",
    numero: "",
    bairro: "",
    cidade: "",
    estado: "",
    pais: "",
    complemento: "",
  });
  const [fileName, setFileName] = useState("");


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    } else {
      setFileName(""); // Caso o usuário cancele a seleção do arquivo
    }
  };

  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    // Montando os dados a serem enviados
    const data = {
      telefone,
      email,
      endereco,
      rm, // Recuperado do localStorage
    };
  
    try {
      // Envio dos dados para a API
      await api.put("/login/atualizar", data);
  
      // Exibindo notificação de sucesso
      toast.success("Informações salvas com sucesso!");
    } catch (error) {
      console.error(error);
  
      // Exibindo notificação de erro
      toast.error("Erro ao salvar as informações. Tente novamente.");
    }
  };
  

  

  return (
    <div>
      <SideMenu />
      <div className="flex flex-1 justify-center items-center w-screen h-screen">
        <form
          onSubmit={handleSubmit}
          className="p-5 shadow-xl w-[75%] rounded border h-[75%] "
        >
          <h1 className="mb-5 font-poppins font-normal text-3xl text-center">
            Editar informações pessoais
          </h1>

          <main className="w-full flex flex-1 flex-row gap-3">
            <div className="w-[75%] m-2 mr-6">
              <div className="mb-2 max-w-[400px] flex flex-1 justify-between items-center flex-row ml-3">
                <div className="flex flex-1 flex-col max-w-[200px] ml-[10px]">
                  <label
                    htmlFor="cep"
                    className="block text-sm font-normal font-poppins mb-2 ml-1"
                  >
                    CEP:
                  </label>
                  <InputMask
                    placeholder="CEP"
                    mask="99999-999"
                    id="cep"
                    value={endereco.cep}
                    onChange={(e) =>
                      setEndereco({ ...endereco, cep: e.target.value })
                    }
                    className={`w-full p-2 border-2 min-h-[45px] rounded`}
                  />
                </div>
                <div className="flex flex-1 fleex-col max-w-[200px] mt-1">
                  <Input
                    label="Numero:"
                    placeholder="Numero"
                    required
                    id="Numero"
                    maxLength={4}
                    value={endereco.numero}
                    onChange={(e) =>
                      setEndereco({ ...endereco, numero: e.target.value })
                    }
                    className="w-full p-2 border-2 min-h-[45px]"
                  />
                </div>
              </div>
              <div className="mb-2 max-w-[400px] ml-3">
                <div className="flex flex-1 flex-col max-w-[400px] mr-">
                  <Input
                    label="Estado:"
                    placeholder="Estado"
                    required
                    id="Estado"
                    value={endereco.estado}
                    onChange={(e) =>
                      setEndereco({ ...endereco, estado: e.target.value })
                    }
                    className="w-full p-2 border-2 min-h-[45px]"
                  />
                </div>
              </div>
              <div className="mb-2 max-w-[400px]  ml-3">
                <div className="flex flex-1 flex-col max-w-[400px] mr-">
                  <Input
                    label="Cidade:"
                    placeholder="Cidade"
                    required
                    id="Cidade"
                    value={endereco.cidade}
                    onChange={(e) =>
                      setEndereco({ ...endereco, cidade: e.target.value })
                    }
                    className="w-full p-2 border-2 min-h-[45px]"
                  />
                </div>
              </div>

              <div className="mb-2 max-w-[400px] flex flex-1 justify-between items-center flex-row ml-3">
                <div className="flex flex-1 flex-col max-w-[200px] mr-">
                  <Input
                    label="Logradouro:"
                    placeholder="Logradouro"
                    required
                    id="Logradouro"
                    value={endereco.logradouro}
                    onChange={(e) =>
                      setEndereco({ ...endereco, logradouro: e.target.value })
                    }
                    className="w-full p-2 border-2 min-h-[45px]"
                  />
                </div>
                <div className="flex flex-1 fleex-col max-w-[200px] ml-2">
                  <Input
                    label="país:"
                    placeholder="país"
                    required
                    id="país"
                    value={endereco.pais}
                    onChange={(e) =>
                      setEndereco({ ...endereco, pais: e.target.value })
                    }
                    className="w-full p-2 border-2 min-h-[45px] "
                  />
                </div>
              </div>
            </div>
            <div className="w-[75%] ml-6">
              <div className="mb-2 max-w-[400px]  ml-2">
                <div className="flex flex-1 flex-col max-w-[400px] ">
                
              <label
                htmlFor="telefone"
                className="block text-sm font-[500] font-poppins ml-1 mb-3"
              >
                Telefone:
              </label>
              <InputMask
                required
                mask="(99) 99999-9999"
                id="telefone"
                type="tel"
                placeholder="Digite seu número de telefone:"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                  
                }}
                className={`w-full p-2 border-2 
                 
                 rounded`}
              />
              
                </div>
              </div>
              <div className="mb-2 max-w-[400px] ">
                <div className="flex flex-1 flex-col max-w-[400px] mr-">
                  <Input
                    label="Email:"
                    placeholder="Email"
                    required
                    id="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 border-2 min-h-[45px]"
                  />
                </div>
              </div>
              <div className="mb-5 flex flex-1 flex-col w-fit justify-center items-center ml-4">
                <label htmlFor="curriculo">Upload de currículo:</label>
                <label
                  htmlFor="curriculo"
                  className="btn btnPrimaryC text-center "
                >
                  {" "}
                  Arquivo
                </label>

                <input
                  type="file"
                  name="curriculo"
                  id="curriculo"
                  className="hidden"
                  onChange={handleFileChange}
                />
                 {fileName && <p className="mt-2 max-w-[200px] truncate">{fileName}</p>}
              </div>
            </div>
          </main>

          <div className="w-full flex justify-center items-center">
            <Button type="submit" className="btn btnPrimaryC ">
              Salvar novas informações
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ConfiguracoesC;
