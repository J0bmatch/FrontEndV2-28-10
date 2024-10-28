import Preloader from "@/assets/components/preloading";
import { UserGroupIcon, UserIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

export function EscolhaPerfil() {
  return (
    <main className="font-poppins w-full h-full flex justify-center items-center">
      <Preloader/>
      <div className="w-[1024px] h-[720px] flex justify-between items-center flex-col gap-16 border-l-[#a19f9f] p-16 shadow-xl">
        <div className="flex flex-col gap-3">
          <h1 className="text-[#351AA0] text-8xl font-poppins font-bold mt-1">
            JobMatch
          </h1>
          <p className="text-[#351AA0] text-base font-poppins font-normal text-center">
            Conectando talentos à oportunidades
          </p>
        </div>

        <h2 className="text-[#351AA0] text-4xl font-poppins font-normal">
          Antes de darmos continuade, você é:
        </h2>

        <div className="escolha flex gap-16">
          <Link to={"/LoginC"}>
            <div className="w-[328px] h-[250px] group flex items-center justify-center flex-col cursor-pointer bg-[#351AA0] rounded-xl border-2 border-transparent hover:border-[#351AA0] transition-all duration-300">
              <UserIcon className="size-36 text-white transition-transform duration-300 group-hover:scale-125" />
              <span className="w-fit h-6 text-white text-3xl mt-2 font-poppins font-normal transition-transform duration-300 group-hover:scale-110">
                candidato
              </span>
            </div>
          </Link>
          <Link to={"/LoginE"}>
            <div className="w-[328px] h-[250px] group flex items-center justify-center flex-col cursor-pointer bg-[#351AA0] rounded-xl border-2 border-transparent hover:border-[#351AA0] transition-all duration-300">
              <UserGroupIcon className="size-36 text-white transition-transform duration-300 group-hover:scale-125" />
              <span className="w-fit h-6 text-white text-3xl font-poppins font-normal transition-transform duration-300 group-hover:scale-110">
                empresa
              </span>
            </div>
          </Link>
        </div>
      </div>
    </main>
  );
}

export default EscolhaPerfil;
