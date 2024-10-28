import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  
  import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet";
  import { Button } from "../button/button";
  import {
    ArrowLeft,
    ArrowRight,
    Bell,
    Bolt,
    BookOpenText,
    User,
    Users,
  } from "lucide-react";
  import { Link } from "react-router-dom";
  
  export default function SideMenu() {
    return (
      <aside className="bg-[#130633] w-[55px] h-screen gap-2 fixed z-50 ">
        <nav className="flex flex-col items-start">
          <Sheet>
            <SheetTrigger className="m-3 text-white hover:scale-125 duration-700">
              <ArrowRight />
            </SheetTrigger>
            <SheetContent
              side={"left"}
              className="bg-[#130633] w-[220px] gap-4 flex flex-col items-center"
            >
              <SheetFooter>
                <SheetClose>
                  <div className="w-8 h-8 bg-[#130633] absolute right-3 top-3 hover:scale-125 duration-700">
                    <Button className="w-6 h-6 text-white  ">
                      <ArrowLeft />
                    </Button>
                  </div>
                </SheetClose>
              </SheetFooter>
              <SheetHeader className="space-y-8 mt-10">
                <Link to={"/HomeEmpresa"}>
                  <div className="flex flex-row cursor-pointer p-2 rounded hover:scale-125 duration-700">
                    <SheetTitle className="text-white mr-1">
                      <BookOpenText />
                    </SheetTitle>
                    <SheetDescription className="text-white">
                      Inicio
                    </SheetDescription>
                  </div>
                </Link>
  
                {/* <div className="flex flex-row cursor-pointer p-2 rounded hover:scale-125 duration-700">
                          <SheetTitle className="text-white"><Bell/></SheetTitle>
                          <SheetDescription className="text-white">
                          Notificação
                          </SheetDescription>
                      </div> */}
                <Link to={"/GerenciamentoVagas"}>
                  <div className="flex flex-row cursor-pointer p-2 rounded hover:scale-125 duration-700">
                    <SheetTitle className="text-white mr-1">
                      <Users />
                    </SheetTitle>
                    <SheetDescription className="text-white">
                      Match
                    </SheetDescription>
                  </div>
                </Link>
  
                <Link to={"/PerfilE"}>
                  <div className="flex flex-row cursor-pointer p-2 rounded hover:scale-125 duration-700">
                    <SheetTitle className="text-white">
                      <User />
                    </SheetTitle>
                    <SheetDescription className="text-white">
                      Perfil
                    </SheetDescription>
                  </div>
                </Link>
                <Link to={"/ConfiguracoesC"}>
                  <div className="flex flex-row cursor-pointer p-2 rounded hover:scale-125 duration-700">
                    <SheetTitle className="text-white">
                      <Bolt />
                    </SheetTitle>
                    <SheetDescription className="text-white">
                      Configuração
                    </SheetDescription>
                  </div>
                </Link>
              </SheetHeader>
            </SheetContent>
          </Sheet>
  
          <TooltipProvider>
            <Link to={"/HomeEmpresa"}>
              <Tooltip>
                <TooltipTrigger className="m-3 text-white hover:scale-125 duration-700">
                  <BookOpenText />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Inicio</p>
                </TooltipContent>
              </Tooltip>
            </Link>
  
            {/* <Tooltip>
                  <TooltipTrigger className="m-3 text-white hover:scale-125 duration-700"><Bell/></TooltipTrigger>
                  <TooltipContent>
                  <p>Notificações</p>
                  </TooltipContent>
              </Tooltip> */}
            <Link to={"/GerenciamentoVagas"}>
              <Tooltip>
                <TooltipTrigger className="m-3 text-white hover:scale-125 duration-700">
                  <Users />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Match</p>
                </TooltipContent>
              </Tooltip>
            </Link>
  
            <Link to={"/PerfilE"}>
              <Tooltip>
                <TooltipTrigger className="m-3 text-white hover:scale-125 duration-700 ">
                  <User />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Perfil</p>
                </TooltipContent>
              </Tooltip>
            </Link>
  
            <Link to={"/ConfiguracoesC"}>
              <Tooltip>
                <TooltipTrigger className="m-3 text-white hover:scale-125 duration-700">
                  <Bolt />
                </TooltipTrigger>
                <TooltipContent>
                  <p>Configurações</p>
                </TooltipContent>
              </Tooltip>
            </Link>
          </TooltipProvider>
        </nav>
      </aside>
    );
  }
  