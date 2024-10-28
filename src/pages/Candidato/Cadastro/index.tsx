import FileUpload from "@/assets/components/upload";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem } from "@/components/ui/select";
import Input from "@/assets/components/input/input";
import { Button } from "@/assets/components/button/button";
import { SelectTrigger, SelectValue } from "@radix-ui/react-select";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import InputMask from "react-input-mask";
import Preloader from "@/assets/components/preloading";
import { toast } from "sonner"; // Para exibir mensagens
import api from "@/services/api";

const Cadastro: React.FC = () => {
  const idiomas = ["Português", "Inglês", "Espanhol", "Francês"];
  const niveisFluencia = ["Básico", "Intermediário", "Avançado", "Fluente"];

  const [telefone, setTelefone] = useState("");
  const [selectedIdioma, setSelectedIdioma] = useState("");
  const [selectedFluencia, setSelectedFluencia] = useState("");
  const [experiencia, setExperiencia] = useState("");
  const rm =  localStorage.getItem("rm")
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
  const [errors, setErrors] = useState({
    telefone: false,
    idioma: false,
    fluencia: false,
    experiencia: false,
    cep: false,
    logradouro: false,
    numero: false,
    bairro: false,
    cidade: false,
    estado: false,
    pais: false,
  });

  const navigate = useNavigate();

  // Função de validação e submissão do formulário
  const validarFormulario = async (e: React.FormEvent) => {
    e.preventDefault(); // Evita o comportamento padrão do formulário

    // Validação dos campos
    const novoErro = {
      telefone: !telefone,
      idioma: !selectedIdioma,
      fluencia: !selectedFluencia,
      experiencia: !experiencia,
      cep: !endereco.cep,
      logradouro: !endereco.logradouro,
      numero: !endereco.numero,
      bairro: !endereco.bairro,
      cidade: !endereco.cidade,
      estado: !endereco.estado,
      pais: !endereco.pais,
    };

    setErrors(novoErro);

    // Verifica se há algum erro
    if (Object.values(novoErro).some((error) => error)) {
      toast.error("Preencha todos os campos obrigatórios.");
      return; // Se houver erros, interrompe a submissão
    }
    
    // Dados de cadastro a serem enviados
    const dadosCadastro = {
      rm: rm,
      telefone: telefone,
      idiomas: selectedIdioma,
      fluencia: selectedFluencia,
      experiencia: experiencia,
        cep: endereco.cep,
        logradouro: endereco.logradouro,
        numero: endereco.numero,
        bairro: endereco.bairro,
        cidade: endereco.cidade,
        estado: endereco.estado,
        pais: endereco.pais,
        complemento: endereco.complemento,
      
    };

    try {
      // Envia os dados para o backend com axios
      const response = await api.post("/login/atualizar", dadosCadastro);
      const { mensagem } = response.data;


      if (mensagem === 'Dados atualizados com sucesso.') {
        toast.success("Cadastro atualizado com sucesso!");
        navigate("/habilidades");
      } else {
        toast.error(response.data.mensagem || "Erro ao atualizar cadastro.");
      }
    } catch (error) {
      toast.error("Ocorreu um erro ao enviar os dados. Tente novamente.");
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <Preloader />
      <form
        id="formCadastro"
        className="bg-white p-8 rounded min-w-[75%] min-h-[86%] max-w-lg"
        onSubmit={validarFormulario}
      >
        <h1 className="text-5xl font-normal font-poppins mb-4 text-center text-[#351AA0]">
          Formulário de Cadastro
        </h1>

        <main className="w-full flex flex-1 flex-row gap-3">
          <div className="w-[75%] m-2 mr-6">
            {/* Campo de telefone */}
            <div className="mb-4 max-w-[410px] ml-3">
              <label
                htmlFor="telefone"
                className="block text-sm font-normal font-poppins ml-1 mb-3"
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
                  setErrors({ ...errors, telefone: false });
                }}
                className={`w-full p-2 border-2 ${
                  errors.telefone ? "border-red-500" : "border-[#e1e0e0]"
                } rounded`}
              />
              {errors.telefone && (
                <p className="text-red-500 text-sm">Telefone é obrigatório.</p>
              )}
            </div>

            {/* CEP */}
            <div className="mb-2 max-w-[400px] flex flex-1 justify-between items-center flex-row ml-3">
              <div className="flex flex-1 flex-col max-w-[200px]">
                <label
                  htmlFor="cep"
                  className="block text-sm font-normal font-poppins mb-2"
                >
                  CEP:
                </label>
                <InputMask
                  mask="99999-999"
                  id="cep"
                  value={endereco.cep}
                  onChange={(e) =>
                    setEndereco({ ...endereco, cep: e.target.value })
                  }
                  className={`w-full p-2 border-2 min-h-[45px] ${
                    errors.cep ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>
              <div className="flex flex-1 flex-col max-w-[200px]">
                <label
                  htmlFor="numero"
                  className="block text-sm font-normal font-poppins mb-2 ml-3"
                >
                  Número:
                </label>
                <Input
                  required
                  id="numero"
                  maxLength={4}
                  value={endereco.numero}
                  onChange={(e) =>
                    setEndereco({ ...endereco, numero: e.target.value })
                  }
                  className={`w-full p-2 border-2 min-h-[45px] ${
                    errors.numero ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>
            </div>

            {/* Campos de Endereço */}
            <div className="flex flex-1 flex-row items-center">
              <div className="mb-4 max-w-[200px] mr-2">
                <label
                  htmlFor="logradouro"
                  className="block text-sm font-normal font-poppins mb-1 ml-3"
                >
                  Logradouro:
                </label>
                <Input
                  required
                  id="logradouro"
                  value={endereco.logradouro}
                  onChange={(e) =>
                    setEndereco({ ...endereco, logradouro: e.target.value })
                  }
                  className={`w-full p-2 border-2 ${
                    errors.logradouro ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>

              <div className="mb-4 max-w-[200px]">
                <label
                  htmlFor="bairro"
                  className="block text-sm font-normal font-poppins mb-2 ml-3"
                >
                  Bairro:
                </label>
                <Input
                  required
                  id="bairro"
                  value={endereco.bairro}
                  onChange={(e) =>
                    setEndereco({ ...endereco, bairro: e.target.value })
                  }
                  className={`w-full p-2 border-2 ${
                    errors.bairro ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>
            </div>

            <div className="mb-4 max-w-[410px]">
              <label
                htmlFor="cidade"
                className="block text-sm font-normal font-poppins mb-2 ml-3"
              >
                Cidade:
              </label>
              <Input
                required
                id="cidade"
                value={endereco.cidade}
                onChange={(e) =>
                  setEndereco({ ...endereco, cidade: e.target.value })
                }
                className={`w-full p-2 border-2 ${
                  errors.cidade ? "border-red-500" : "border-[#e1e0e0]"
                } rounded`}
              />
            </div>
          </div>

          <div className="w-[75%] ml-6">
            <div className="flex flex-1 flex-row items-center max-w-[510px]">
              <div className="mb-4 max-w-[250px] min-w-[250px] mr-2">
                <label
                  htmlFor="estado"
                  className="block text-sm font-normal font-poppins mb-2 ml-3"
                >
                  Estado:
                </label>
                <Input
                  required
                  id="estado"
                  value={endereco.estado}
                  onChange={(e) =>
                    setEndereco({ ...endereco, estado: e.target.value })
                  }
                  className={`w-full p-2 border-2 ${
                    errors.estado ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>

              <div className="mb-4 max-w-[250px] min-w-[250px]">
                <label
                  htmlFor="pais"
                  className="block text-sm font-normal font-poppins mb-2 ml-3"
                >
                  País:
                </label>
                <Input
                  required
                  id="pais"
                  value={endereco.pais}
                  onChange={(e) =>
                    setEndereco({ ...endereco, pais: e.target.value })
                  }
                  className={`w-full p-2 border-2 ${
                    errors.pais ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                />
              </div>
            </div>

            {/* Idioma */}
            <div className="mb-4 max-w-[400px]">
              <label
                htmlFor="idioma"
                className="block text-sm font-normal font-poppins ml-3 mb-3"
              >
                Idioma:
              </label>
              <Select
                value={selectedIdioma}
                onValueChange={(value) => {
                  setSelectedIdioma(value);
                  setErrors({ ...errors, idioma: false });
                }}
              >
                <SelectTrigger
                  className={`w-full p-2 border-2 ${
                    errors.idioma ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                >
                  <SelectValue placeholder="Selecione um idioma" />
                </SelectTrigger>
                <SelectContent>
                  {idiomas.map((idioma) => (
                    <SelectItem key={idioma} value={idioma}>
                      {idioma}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.idioma && (
                <p className="text-red-500 text-sm">Idioma é obrigatório.</p>
              )}
            </div>

            {/* Nível de Fluência */}
            <div className="mb-4 max-w-[400px]">
              <label
                htmlFor="fluencia"
                className="block text-sm font-normal font-poppins ml-3 mb-3"
              >
                Fluência:
              </label>
              <Select
                value={selectedFluencia}
                onValueChange={(value) => {
                  setSelectedFluencia(value);
                  setErrors({ ...errors, fluencia: false });
                }}
              >
                <SelectTrigger
                  className={`w-full p-2 border-2 ${
                    errors.fluencia ? "border-red-500" : "border-[#e1e0e0]"
                  } rounded`}
                >
                  <SelectValue placeholder="Selecione seu nível de fluência" />
                </SelectTrigger>
                <SelectContent>
                  {niveisFluencia.map((nivel) => (
                    <SelectItem key={nivel} value={nivel} id={nivel}>
                      {nivel}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.fluencia && (
                <p className="text-red-500 text-sm">Fluência é obrigatória.</p>
              )}
            </div>

            {/* Experiência */}
            <div className="mb-4 max-w-[400px]">
              <label
                htmlFor="experiencia"
                className="block text-sm font-normal font-poppins ml-3 mb-3"
              >
                Experiência:
              </label>
              <Textarea
                id="experiencia"
                placeholder="Descreva sua experiência"
                value={experiencia}
                onChange={(e) => {
                  setExperiencia(e.target.value);
                  setErrors({ ...errors, experiencia: false });
                }}
                className={`w-full p-2 border-2 ${
                  errors.experiencia ? "border-red-500" : "border-[#e1e0e0]"
                } rounded`}
              />
              {errors.experiencia && (
                <p className="text-red-500 text-sm">
                  Experiência é obrigatória.
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Botão de envio */}
        <div className="flex justify-center">
          <Button
            type="submit"
            className="bg-[#351AA0] hover:bg-[#4A24CC] text-white rounded py-2 px-8"
          >
            Atualizar Cadastro
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Cadastro;
