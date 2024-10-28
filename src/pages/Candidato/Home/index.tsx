
  import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
  import { avatarPerfil } from "./data.ts"
  import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

  import "./data.ts"
import { Button } from "@/assets/components/button/button";
import { Vaga} from "./data.ts";

import SideMenu from "@/assets/components/sideMenu/index.tsx";
import Preloader from "@/assets/components/preloading.tsx"



export default function HomeCandidato(){
    
    return(
        <main className="flex flex-row">
            <Preloader/>
            <SideMenu />
          
            
            <div className="flex flex-1 flex-col justify-center  ml-14 max-w-[1460px]">
                <div className="mt-6 ml-6 flex flex-1 items-center">
                    <div className="min-w-[480px]">
                   <div className="flex flex-1 flex-row items-center">
                        <div className="mb-2 min-w-[530px] ml-11 max-h-[45px]">
                            <h1 className="text-3xl font-poppins font-normal text-[#351AA0]">
                                Vagas que podem te interessar
                            </h1>
                        </div>
                        
                   </div>
                    
                </div>
            
            </div>
            <div className="flex flex-row flex-1 ml-1">
                <div className="flex-1 flex-col mt-2 ml-6">
              
                  {Vaga.map((item) => (
                    <Card className="h-fit m-6  border-[#351AA0] max-w-[1100px]">
                        <CardHeader>
                            <div className="flex flex-1 flex-row  items-center">
                                <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                    <AvatarImage src={avatarPerfil} />
                                    <AvatarFallback>Coca-Cola</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-3xl ">{item.title}</CardTitle>
                            </div> 
                            
                                <CardDescription>{item.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{item.description}</p>
                        </CardContent>
                        <CardFooter className=" text-xs ">
                            <p>{item.about}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.value}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.hour}</p>
                        </CardFooter>
                        <Dialog>
                            <DialogTrigger className="btn btnPrimaryC max-w-fit relative left-[2%] bottom-[4%] "> Candidatar-se</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <div className="flex flex-1 flex-row  items-center">
                                        <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                        <AvatarImage src={avatarPerfil} />
                                        <AvatarFallback>Coca-Cola</AvatarFallback>
                                        </Avatar>
                                        <DialogTitle>Coca-Cola</DialogTitle>
                                    </div> 
                                <DialogDescription>
                                    Menor Aprendiz
                                </DialogDescription>
                                <DialogDescription>
                                    Vendedor:
                                </DialogDescription>
                                </DialogHeader>
                                <DialogFooter >
                                    <DialogDescription>
                                        <p className="mb-3"> Procuramos um aprendiz entusiasmado e motivado para se juntar à nossa equipe de vendas em uma loja de departamento. O candidato ideal terá a oportunidade de aprender sobre uma variedade de produtos e serviços enquanto adquire habilidades práticas em vendas e atendimento ao cliente.</p>
                                        <p className="mb-3"><b>Carga horária:</b> 07:00 ás 11:00</p>
                                        <p className="mb-3"><b>Salário:</b> R$ 800,00 / Mês</p>
                                        <p className="mb-3"><b>Local:</b> Praça Anchieta, 159 - Centro, Itapeva - SP, 18400-450</p>
                                        <p className="mb-4"><b>Riscos da vaga:</b> exposição, adequação das ferramentas e recursos, acessibilidade física incompatível</p> 
                                        <div className="flex flex-1 flex-row justify-between">
                                            <DialogClose className="btn btnPrimaryC max-w-fit">
                                                Nao Interessado
                                            </DialogClose>
                                            <Button className="btn btnPrimaryC max-w-fit">
                                                Candidatar-se
                                            </Button >
                                        </div>
                                    </DialogDescription>
                                        
                                    
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </Card>
                ))}
                 {Vaga.map((item) => (
                    <Card className="h-fit m-6  border-[#351AA0] max-w-[1100px]">
                        <CardHeader>
                            <div className="flex flex-1 flex-row  items-center">
                                <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                    <AvatarImage src={avatarPerfil} />
                                    <AvatarFallback>Coca-Cola</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-3xl ">{item.title}</CardTitle>
                            </div> 
                            
                                <CardDescription>{item.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{item.description}</p>
                        </CardContent>
                        <CardFooter className=" text-xs ">
                            <p>{item.about}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.value}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.hour}</p>
                        </CardFooter>
                        <Dialog>
                            <DialogTrigger className="btn btnPrimaryC max-w-fit relative left-[2%] bottom-[3%] "> Candidatar-se</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <div className="flex flex-1 flex-row  items-center">
                                        <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                        <AvatarImage src={avatarPerfil} />
                                        <AvatarFallback>Coca-Cola</AvatarFallback>
                                        </Avatar>
                                        <DialogTitle>Coca-Cola</DialogTitle>
                                    </div> 
                                <DialogDescription>
                                    Menor Aprendiz
                                </DialogDescription>
                                <DialogDescription>
                                    Vendedor:
                                </DialogDescription>
                                </DialogHeader>
                                <DialogFooter >
                                    <DialogDescription>
                                        <p className="mb-3"> Procuramos um aprendiz entusiasmado e motivado para se juntar à nossa equipe de vendas em uma loja de departamento. O candidato ideal terá a oportunidade de aprender sobre uma variedade de produtos e serviços enquanto adquire habilidades práticas em vendas e atendimento ao cliente.</p>
                                        <p className="mb-3"><b>Carga horária:</b> 07:00 ás 11:00</p>
                                        <p className="mb-3"><b>Salário:</b> R$ 800,00 / Mês</p>
                                        <p className="mb-3"><b>Local:</b> Praça Anchieta, 159 - Centro, Itapeva - SP, 18400-450</p>
                                        <p className="mb-4"><b>Riscos da vaga:</b> exposição, adequação das ferramentas e recursos, acessibilidade física incompatível</p> 
                                        <div className="flex flex-1 flex-row justify-between">
                                            <DialogClose className="btn btnPrimaryC max-w-fit">
                                                Nao Interessado
                                            </DialogClose>
                                            <Button className="btn btnPrimaryC max-w-fit">
                                                Candidatar-se
                                            </Button >
                                        </div>
                                    </DialogDescription>
                                        
                                    
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </Card>
                ))}
                 {Vaga.map((item) => (
                    <Card className="h-fit m-6  border-[#351AA0] max-w-[1100px]">
                        <CardHeader>
                            <div className="flex flex-1 flex-row  items-center">
                                <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                    <AvatarImage src={avatarPerfil} />
                                    <AvatarFallback>Coca-Cola</AvatarFallback>
                                </Avatar>
                                <CardTitle className="text-3xl ">{item.title}</CardTitle>
                            </div> 
                                
                                <CardDescription>{item.subtitle}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p>{item.description}</p>
                        </CardContent>
                        <CardFooter className=" text-xs ">
                            <p>{item.about}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.value}</p>
                        </CardFooter>
                        <CardFooter>
                            <p>{item.hour}</p>
                        </CardFooter>
                        <Dialog>
                            <DialogTrigger className="btn btnPrimaryC max-w-fit relative left-[2%] bottom-[3%] "> Candidatar-se</DialogTrigger>
                            <DialogContent>
                                <DialogHeader>
                                    <div className="flex flex-1 flex-row  items-center">
                                        <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                        <AvatarImage src={avatarPerfil} />
                                        <AvatarFallback>Coca-Cola</AvatarFallback>
                                        </Avatar>
                                        <DialogTitle>Coca-Cola</DialogTitle>
                                    </div> 
                                <DialogDescription>
                                    Menor Aprendiz
                                </DialogDescription>
                                <DialogDescription>
                                    Vendedor:
                                </DialogDescription>
                                </DialogHeader>
                                <DialogFooter >
                                    <DialogDescription>
                                        <p className="mb-3"> Procuramos um aprendiz entusiasmado e motivado para se juntar à nossa equipe de vendas em uma loja de departamento. O candidato ideal terá a oportunidade de aprender sobre uma variedade de produtos e serviços enquanto adquire habilidades práticas em vendas e atendimento ao cliente.</p>
                                        <p className="mb-3"><b>Carga horária:</b> 07:00 ás 11:00</p>
                                        <p className="mb-3"><b>Salário:</b> R$ 800,00 / Mês</p>
                                        <p className="mb-3"><b>Local:</b> Praça Anchieta, 159 - Centro, Itapeva - SP, 18400-450</p>
                                        <p className="mb-4"><b>Riscos da vaga:</b> exposição, adequação das ferramentas e recursos, acessibilidade física incompatível</p> 
                                        <div className="flex flex-1 flex-row justify-between">
                                            <DialogClose className="btn btnPrimaryC max-w-fit">
                                                Nao Interessado
                                            </DialogClose>
                                            <Button className="btn btnPrimaryC max-w-fit">
                                                Candidatar-se
                                            </Button >
                                        </div>
                                    </DialogDescription>
                                        
                                    
                                </DialogFooter>
                            </DialogContent>
                        </Dialog>

                    </Card>
                ))}
                </div>
                    <div className=" mt-6 mr-6">
                        <h2 className="text-[#351AA0] mt-8 text-lg font-medium">
                            Top Empresas
                        </h2>
                        {["Coca-cola", "Empresa B", "Empresa C"].map((empresa) => (
                            <Card
                                key={empresa}
                                className="border-[#351AA0] mr-6 mb-4 cursor-pointer"
                            >
                                <CardContent className="flex flex-1 flex-col justify-center items-center p-3">
                                <div className="flex flex-1 flex-row  items-center">
                                    <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                        <AvatarImage src={avatarPerfil} />
                                        <AvatarFallback>Coca-Cola</AvatarFallback>
                                    </Avatar>
                                    <CardTitle className="text-2xl items-center flex font-medium justify-center">{empresa}
                                        <Button className="bg-transparent font-normal p-1 w-fit h-fit text-base ml-36">
                                                Ver mais...
                                            </Button>
                                    </CardTitle>
                                </div> 
                                    </CardContent>
                                </Card>
                            ))}
                    </div>
                </div>
            </div>
        </main>            
    )
}

