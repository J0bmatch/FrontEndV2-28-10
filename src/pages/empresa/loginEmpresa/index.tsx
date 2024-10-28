import { Link, useNavigate } from "react-router-dom";
import { Button } from "../../../assets/components/button/button";
import Input from "../../../assets/components/input/input";
import { useState } from "react";
import { toast, Toaster } from "sonner";

export function LoginE() {
  const [cnpj, setCNPJ] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setTimeout(() => navigate("/HomeEmpresa"), 2000); 
    toast.success('Seja Bem Vindo de Volta!', {
      description: "Você será redirecionado em instantes...",
    });// Redireciona para a página de cadastro
  };

  return (
    <div className="flex justify-center items-center h-screen min-w-full w-full bg-[#ecf0f1]">
      <div className="flex absolute justify-between items-center w-[1060px] h-[85%] border-2 border-white rounded bg-white">
        <div className="w-[60%] flex flex-col items-center">
          <h2 className="text-6xl font-normal capitalize text-[#000000]">Entrar</h2>
          <form onSubmit={handleSubmit} className="flex flex-col w-[55%] justify-center items-center">
            <Input
              className="inputForm"
              type="text"
              id="cnpjInput"
              maxLength={14}
              value={cnpj}
              onChange={(e) => setCNPJ(e.target.value)}
              placeholder="Digite seu CNPJ..."
              label="CNPJ:"
            />
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu Email..."
              label="Email:"
            />
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua Senha:"
              label="Senha:"
            />
            <Button className="btn btnSecondE w-[300px]" type="submit">Entrar</Button>
          </form>
        </div>
        <div className="bg-[#130633] w-[40%] h-full flex justify-center items-center flex-col">
          <h2 className="text-white mt-1 font-poppins font-normal text-5xl">JobMatch!</h2>
          <h3 className='text-white mt-1 font-poppins font-normal text-lg'>
            Não possui uma conta?
          </h3>
          <Link to={"/CadastroEmpresa"}>
            <h3 className='text-white mt-1 font-poppins font-normal underline hover:scale-105 duration-500'>
              Crie uma clicando aqui!
            </h3>
          </Link>
        </div>
      </div>

      <Toaster/>

    </div>
  );
}

export default LoginE;
