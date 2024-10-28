import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/assets/components/button/button';
import { skillsCol } from './data'; 
import SideMenu from '@/assets/components/sideMenuEmpresa';
import PreloadingE from '@/assets/components/preloadingE';

const ContinuarCriacao: React.FC = () => {
  return (
    <div>
       <SideMenu/>
      <div className="w-full h-full p-5 flex justify-center items-center" >
       
         <PreloadingE />
        <form className='flex justify-center items-center flex-1 flex-col p-6'>
          <h1 className="text-center text-[#130633] font-poppins font-normal text-3xl ">Candidato requisitos</h1>

          <div className="flex items-center flex-col flex-wrap justify-between bg-white p-4 mb-5 rounded-lg">
            <div className="flex flex-wrap justify-center items-center gap-4">
              <div className="flex flex-row justify-center items-center">
                {skillsCol.map((item) => (
                  <div className="flex flex-col gap-2 w-[380px] h-[468px] justify-center items-start ml-10" key={item.title}>
                    <h3 className="font-poppins font-normal text-lg text-[#130633]">{item.title}</h3>
                    {item.data.map((data) => (
                      <div className="flex gap-2 items-center" key={data.text}>
                        <input id={data.text} type="checkbox" className="w-5 h-5" />
                        <label htmlFor={data.text} className="block mb-2 text-[#555] font-poppins font-normal">{data.text}</label>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between mb-4">
              <Link to={'/CriarVaga'}>
                <Button className="btn btnSecondE max-w-fit mt-4" >Voltar</Button>
              </Link>

              <Link to={"/HomeEmpresa"}>
                <Button className="btn btnSecondE max-w-fit mt-4">Adicionar Vaga</Button>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContinuarCriacao;
