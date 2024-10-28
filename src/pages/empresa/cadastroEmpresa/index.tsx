import { Button } from "../../../assets/components/button/button";
import Input from "../../../assets/components/input/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { maskCNPJ, validateCNPJ, validateEmail } from "./data";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";

export function CadastroE() {
  const [CNPJ, setCNPJ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedCNPJ = maskCNPJ(e.target.value);
    setCNPJ(maskedCNPJ);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateCNPJ(CNPJ)) {
      toast.error('CNPJ inválido!');
      return;
    }
    if (!validateEmail(email)) {
      toast.error('Email inválido!');
      return;
    }
    if (password !== confirmPassword) {
      toast.error('As senhas não coincidem!');
      return;
    }

    // Aqui você pode adicionar a lógica para enviar os dados de cadastro

    toast.success('Cadastro realizado com sucesso!');
    // Redirecionar ou realizar outra ação após o cadastro
  };

  return (
    <div className="flex justify-center items-center h-screen min-w-full w-full bg-[#ecf0f1]">
      <div className="flex absolute justify-between items-center w-[1060px] h-[85%] border-2 border-white rounded bg-white">
        <div className="bg-[#130633] w-[40%] h-full flex justify-center items-center flex-col">
          <h2 className="text-white mt-1 font-poppins font-normal text-5xl">JobMatch!</h2>
          <h3 className='text-white mt-1 font-poppins font-normal text-lg'>Já possui uma conta?</h3>
          <Link to={"/LoginEmpresa"}>
            <h3 className='text-white mt-1 font-poppins font-normal underline hover:scale-105 duration-500'>Clique aqui!</h3>
          </Link>
        </div>
        <div className="w-[60%] flex flex-col items-center">
          <h2 className="text-6xl font-normal capitalize text-[#000000]">Cadastro</h2>
          <form className="flex flex-col w-[55%] justify-center items-center" onSubmit={handleSubmit}>
            <Input
              className="inputForm"
              type="text"
              id="cnpjInput"
              maxLength={18}
              placeholder="Digite seu CNPJ..."
              label="CNPJ:"
              onChange={handleCNPJChange}
            />
            <Input
              type="email"
              id="emailInput"
              placeholder="Digite seu Email..."
              label="Email do Administrador:"
              onChange={handleEmailChange}
            />
            <Input
              type='password'
              id="senhaInput"
              placeholder='Digite sua Senha:'
              label='Senha'
              onChange={(e) => setPassword(e.target.value)}
            />
            <Input
              type='password'
              id="senhaConfirmInput"
              placeholder='Confirme sua Senha:'
              label='Confirme a Senha'
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button className="btn btnSecondE w-[300px]" type="submit">
              Cadastrar
            </Button>
          </form>
        </div>
      </div>
      <Toaster />
    </div>
  );
}

export default CadastroE;
