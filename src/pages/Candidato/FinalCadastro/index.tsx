import { Button } from '@/assets/components/button/button';
import Input from '@/assets/components/input/input';
import Preloader from '@/assets/components/preloading';
import { Textarea } from '@/components/ui/textarea';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface UserProfile {
  name: string;
  description: string;
  image: string | null; // Permite que image seja string ou null
}

const FinalCadastro: React.FC = () => {
  const rm = 12345; // Recupera o RM do localStorage

  const [profile, setProfile] = useState<UserProfile>({
    name: '',
    description: '',
    image: null,
  });

  useEffect(() => {
    const fetchCandidatoData = async () => {
      try {
        const response = await fetch(`http://localhost:3000/login/candidato/${rm}`);
        if (!response.ok) {
          throw new Error(`Erro: ${response.status} - ${response.statusText}`);
        }
        const candidato = await response.json();
        
        console.log('Candidato encontrado:', candidato.nome);
        // Atualiza o perfil com o nome do candidato
        setProfile((prevProfile) => ({
          ...prevProfile,
          name: candidato.name, // Adiciona o nome do candidato ao perfil
        }));
      } catch (error) {
        console.error('Erro ao buscar os dados do candidato:', error);
      }
    };

    if (rm) {
      fetchCandidatoData();
    }
  }, [rm]);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = () => {
        setProfile((prevProfile) => ({
          ...prevProfile,
          image: reader.result as string, // Pode ser uma string aqui
        }));
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Preloader />
      <h1 className="text-4xl font-normal text-[#351AA0]">Boa! Agora vamos criar seu perfil</h1>
      <div className="border rounded-lg p-6 mt-6 w-96 shadow-md flex flex-1 flex-row max-h-[50%] min-w-[50%]">
        <div className='min-w-[30%] mt-12'>
          <div className="flex flex-col items-center">
            {profile.image ? (
              <img src={profile.image} alt="Profile" className="w-24 h-24 rounded-full mb-4" />
            ) : (
              <div className="w-24 h-24 bg-gray-300 rounded-full mb-4 flex items-center justify-center">
                <span className="text-gray-500">Sem imagem</span>
              </div>
            )}
            <label htmlFor="upload-photo" className="py-2 px-4 btnPrimaryC rounded text-white">
              Adicionar foto
            </label>
            <Input
              type="file"
              id="upload-photo"
              className="hidden"
              accept="image/*"
              onChange={handleImageUpload}
            />
          </div>
        </div>
        <div className='min-w-[65%]'>
          <div className="mt-4">
            <h1 className="block text-xl font-medium text-gray-700 ">{profile.name}</h1> {/* Usa o nome do perfil */}
          </div>
          <div className="mt-4">
            <label className="block text-sm font-medium text-gray-700">Adicionar Descrição</label>
            <Textarea
              name="description"
              value={profile.description}
              onChange={(e) => setProfile((prevProfile) => ({
                ...prevProfile,
                description: e.target.value,
              }))}
              className="mt-1 max-h-[250px] block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-purple-500 focus:border-purple-500 sm:text-sm"
              placeholder="Adicionar Descrição"
            />
          </div>
        </div>
      </div>
      <div className="mt-6 flex justify-between min-w-[500px]">
        <Link to={'/interesses'}>
          <Button className="btn btnPrimaryC max-w-[100px]">Voltar</Button>
        </Link>
        <Link to={'/homeCandidato'}>
          <Button className="btn btnPrimaryC max-w-[150px]">Ir pro site</Button>
        </Link>
      </div>
    </div>
  );
};

export default FinalCadastro;
