import { useState, ChangeEvent } from "react";
import { Button } from "../../../assets/components/button/button";
import Input from "../../../assets/components/input/input";
import Preloader from "@/assets/components/preloading";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import { useNavigate } from 'react-router-dom'; 
import api from "@/services/api"; // Importando o Axios


export function LoginC() {
  
  const [dtNasc, setDtNasc] = useState<string>('');
  const [rm, setRm] = useState<string>('');
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleRmChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Permitir apenas números
    const numericValue = value.replace(/\D/g, '');
    setRm(numericValue);
  };

  const handleDtNascChange = (e: ChangeEvent<HTMLInputElement>) => {
    setDtNasc(e.target.value);
  };

  const handleRMdtNascVerification = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault(); // Previne a atualização da página

    try {
      // Chamada ao back-end passando RM e data de nascimento
      const response = await api.post('/login/verificar', { rm, dataNascimento: dtNasc });
      const { mensagem } = response.data;

      if (mensagem === 'Candidato não registrado.') {
        toast.error('Candidato não registrado.');
      } else if (mensagem === 'Primeiro acesso') {
        localStorage.setItem ("rm", rm);
        toast.success('Bem-vindo ao seu primeiro acesso!', {
          description: "Você será redirecionado em instantes...",
        });
        setTimeout(() => navigate("/Cadastro"), 2000); // Redireciona para a página de cadastro
      } else {
        toast.success('Acesso já realizado anteriormente.', {
          description: "Você será redirecionado em instantes...",
        });
        setTimeout(() => navigate("/Home"), 2000); // Redireciona para a home
      }
    } catch (error) {
      toast.error('Erro ao verificar login. Tente novamente.');
      console.error("Erro ao fazer a requisição", error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen min-w-full w-full bg-[#ecf0f1]">
      <Preloader />
    
      <div className="flex absolute justify-between items-center w-[1060px] h-[85%] border-2 border-white rounded bg-white">
        <div className="w-[60%] flex flex-col items-center">
          <h2 className="text-3xl font-bold capitalize text-[#351AA0]">Entrar</h2>
          <form className="flex flex-col w-[55%] justify-center items-center">
            <Input
              className="inputForm"
              type="text"
              id="RMInput"
              maxLength={5}
              value={rm}
              onChange={handleRmChange}
              placeholder="Digite seu RM..."
              label="RM:"
            />
            <Input
              type="date"
              placeholder="Digite sua data de nascimento..."
              id='dateInput'
              value={dtNasc}
              onChange={handleDtNascChange}
              label="Data de nascimento:"
            />
            
              <Button className="btn btnPrimaryC" onClick={handleRMdtNascVerification}>Entrar</Button>
           
          </form>
        </div>
        <div className="bg-[#351AA0] w-[40%] h-full flex justify-center items-center">
          <h2 className="text-white mt-1 font-poppins font-normal text-5xl">JobMatch!</h2>
        </div>
      </div>
      <Toaster/>
    </div>
  );
}

export default LoginC;
