import { Button } from "@/assets/components/button/button";
import { twMerge } from "tailwind-merge";
import { skillsCol1, skillsCol2 } from "./data";
import { Link } from "react-router-dom";
import Preloader from "@/assets/components/preloading";

export default function Habilidades(){

    return(
        
        <div className="w-full h-full p-5 flex justify-center items-center" >
            <Preloader/>
            <form>
            <h1 className="text-center text-[#4A3B8B] font-poppins font-normal text-3xl">Habilidades</h1>

                <div className="flex  items-center flex-col flex-wrap justify-between  bg-white p-4 mb-5 rounded-lg ">
                        <div className=" flex flex-wrap justify-center items-center gap-4">
                            <div className="flex flex-row justify-center items-center">
                                {skillsCol1.map((item) => (
                                    <div className="flex flex-col gap-2 w-[380px] h-[468px] justify-center items-start ml-10">
                                    <h3 className="font-poppins font-normal text-lg text-[#4A3B8B]">{item.title}</h3>
                                    {item.data.map((skill) => (
                                        <div className="flex gap-2 items-center" key={skill.text}>
                                            <input id={skill.text} type="checkbox" className="w-5 h-5"/> 
                                            <label htmlFor={skill.text} className="block mb-2 text-[#555] font-poppins font-normal">{skill.text}</label>
                                        </div>
                                    ))}
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-row justify-center items-center">
                                {skillsCol2.map((item) => (
                                    <div className="flex flex-col gap-2 w-[380px] h-[468px] justify-center items-start ml-10">
                                        <h3 className="font-poppins font-normal text-lg text-[#4A3B8B]">{item.title}</h3>
                                        {item.data.map((skill) => (
                                            <div className="flex gap-2 items-center" key={skill.text}>
                                                <input id={skill.text} type="checkbox" className="w-5 h-5"/>
                                                <label htmlFor={skill.text} className="block mb-2 text-[#555] font-poppins font-normal">{skill.text}</label>
                                            </div>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="flex justify-between mb-4 ">
                            <Link to={'/cadastro'}>
                                <Button className="btn btnPrimaryC absolute left-[5%] mt-3">Voltar</Button>
                            </Link>
                           
                            <Link to={"/interesses"}>
                                <Button className="btn btnPrimaryC absolute right-[5%]">Continuar</Button>
                            </Link>
                            
                        </div>
                </div>
            </form>
        </div>
    )
}