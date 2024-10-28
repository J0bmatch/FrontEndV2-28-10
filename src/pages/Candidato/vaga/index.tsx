import { Button } from "@/assets/components/button/button"
import SideMenu from "@/assets/components/sideMenu"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { avatarPerfil } from "./data"


export default function Vaga (){
    return(
        <main>
            <SideMenu />
            <div className="flex justify-center items-center flex-col">
                <div className="mt-4">
                    <h1 className="text-4xl font-poppins font-medium text-[#351AA0]">Sobre a Vaga</h1>
                </div>
            <Card className="hover:scale-100 w-[600px] cursor-default m-4 border-2 shadow-md border-[#351AA0]">
                <CardContent>
                    <CardHeader>

                    
                        <CardTitle className="text-3xl font-medium flex flex-row items-center">
                            <Avatar className="m-2 shadow-xl h-12 w-12 border">
                                <AvatarImage src={avatarPerfil} />
                                <AvatarFallback>Coca-Cola</AvatarFallback>
                            </Avatar>
                            Coca-Cola</CardTitle>
                        <CardDescription className="text-lg font-medium">
                            Menor Aprendiz
                        </CardDescription>
                        <CardDescription>
                            Vendedor:
                        </CardDescription>
                    </CardHeader>
                    <CardFooter className="flex flex-col">

                        <CardDescription>
                       <p className="mb-3"> Procuramos um aprendiz entusiasmado e motivado para se juntar à nossa equipe de vendas em uma loja de departamento. O candidato ideal terá a oportunidade de aprender sobre uma variedade de produtos e serviços enquanto adquire habilidades práticas em vendas e atendimento ao cliente.</p>

                        <p className="mb-3"><b>Carga horária:</b> 07:00 ás 11:00</p>

                        <p className="mb-3"><b>Salário:</b> R$ 800,00 / Mês</p>

                        <p className="mb-3"><b>Local:</b> Praça Anchieta, 159 - Centro, Itapeva - SP, 18400-450</p>

                        <p className="mb-4"><b>Riscos da vaga:</b> exposição, adequação das ferramentas e recursos, acessibilidade física incompatível</p> 
                        </CardDescription>
                        <div className="flex justify-between">
                        <Button className="btn btnPrimaryC max-w-fit">
                            Nao Interessado
                        </Button>
                        <Button className="btn btnPrimaryC max-w-fit">
                            Candidatar-se
                        </Button >
                        </div>
                    </CardFooter>
                </CardContent>
            </Card>
            </div>
           
        </main>
    )
}