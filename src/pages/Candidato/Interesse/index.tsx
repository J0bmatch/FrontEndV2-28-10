import { Button } from "@/assets/components/button/button";
import { InteresseCol1, InteresseCol2 } from "./data";
import { Link } from "react-router-dom";
import Preloader from "@/assets/components/preloading";

export default function Interesses(){

    return(
        
        <div className="w-full h-full p-5 flex justify-center items-center overflow-x-hidden" >
            <Preloader />
            <form>
            <h1 className="text-center text-[#4A3B8B] font-poppins font-normal text-3xl">Interesses</h1>

                <div className="flex  items-center flex-col flex-wrap justify-between  bg-white p-4 mb-5 rounded-lg ">
                        <div className=" flex flex-wrap justify-center items-center gap-4">
                            <div className="flex flex-row justify-center items-center">
                                {InteresseCol1.map((item) => (
                                    <div className="flex flex-col gap-2 w-[267px] h-[300px] justify-center items-start ml-10">
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
                                {InteresseCol2.map((item) => (
                                    <div className="flex flex-col gap-2 w-[267px] h-[300px] justify-center items-start ml-10">
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
                            <Link to={'/habilidades'}>
                                <Button className="btn btnPrimaryC absolute left-[5%] mt-3">Voltar</Button>
                            </Link>
                           
                            <Link to={"/finalCadastro"}>
                                <Button className="btn btnPrimaryC absolute right-[5%]">Continuar</Button>
                            </Link>
                            
                        </div>
                </div>
            </form>
        </div>
    )
}