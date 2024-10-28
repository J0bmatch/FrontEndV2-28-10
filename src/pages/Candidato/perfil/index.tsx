import { Button } from "@/assets/components/button/button";
import Input from "@/assets/components/input/input";
import Preloader from "@/assets/components/preloading";
import SideMenu from "@/assets/components/sideMenu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import React, { useState } from "react";

const PerfilCandidato: React.FC = () => {
  const [Pronome, setPronome] = useState("");
  const [Descricao, setDescricao] = useState("");
  const [avatar, setAvatar] = useState<string | null>(null);

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setAvatar(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex flex-col  justify-center min-h-screen bg-gray-100">
      <Preloader />
      <SideMenu />
        
      <div className="flex flex-1 flex-col  items-center p-12 ">
      <div className="w-[80%] bg-[#351AA0] h-[250px] rounded-xl p-6">
            <h1 className="text-white font-poppins font-normal">Meu Perfil</h1>
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm justify-center items-center flex flex-1 flex-col z-50 absolute top-[25%]">
          <div className="flex flex-1 justify-between items-center w-full">
            <div className="flex justify-center mb-4">
              <Avatar className="w-24 h-24">
                <AvatarImage
                  src={avatar || "https://via.placeholder.com/150"}
                />
                <AvatarFallback>avatar</AvatarFallback>
              </Avatar>
            </div>

            <div className="mb-4">
              <label
                htmlFor="upload-photo"
                className="  py-2 px-4 btnPrimaryC rounded text-white cursor-pointer"
              >
                Upload foto
              </label>
              <Input
                type="file"
                id="upload-photo"
                className="hidden"
                accept="image/*"
                onChange={handleAvatarChange}
              />
            </div>
          </div>

          <div className="mb-4">
            <Input
            label="Pronome"
              type="text"
              value={Pronome}
              onChange={(e) => setPronome(e.target.value)}
              placeholder="Novo pronome"
            />
          </div>

          <div className="mb-6">
            <Input
            label="Descriçao"
              type="text"
              value={Descricao}
              onChange={(e) => setDescricao(e.target.value)}
              placeholder="Nova descrição"
            />
          </div>

          <Button className="btn btnPrimaryC">Salvar alterações</Button>
        </div>
      </div>
    </div>
  );
};

export default PerfilCandidato;
