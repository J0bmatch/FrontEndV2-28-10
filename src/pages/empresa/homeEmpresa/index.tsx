// App.tsx
import { Button } from "@/assets/components/button/button";
import React, { useRef } from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis } from "recharts";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import SideMenu from "@/assets/components/sideMenuEmpresa";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar } from "@radix-ui/react-avatar";
import { AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { CirclePlus } from 'lucide-react';
import { Link } from "react-router-dom";
import PreloadingE from "@/assets/components/preloadingE";


interface vaga {
  empresa: string;
  tipo: string;
  localizacao: string;
}

const vagas: vaga[] = [
  { empresa: "Coca-cola", tipo: "Jovem Aprendiz", localizacao: "Itapeva-SP" },
  { empresa: "Coca-cola", tipo: "Estagiario", localizacao: "Itapeva-SP" },
  { empresa: "Coca-cola", tipo: "CLT", localizacao: "Sorocaba-SP" },
];

const chartData = [
  { mes: "Janeiro", VagasPublicadas: 125, Candidatos: 300 },
  { mes: "Fevereiro", VagasPublicadas: 96, Candidatos: 186 },
  { mes: "Marçpo", VagasPublicadas: 47, Candidatos: 149 },
  { mes: "Abril", VagasPublicadas: 97, Candidatos: 282, contratados: 325 },
  { mes: "Maio" },
  { mes: "Junho" },
  { mes: "Julho" },
  { mes: "Agosto" },
  { mes: "setembro" },
  { mes: "Outubro" },
  { mes: "Novembro" },
  { mes: "Dezembro" },
];
const chartConfig = {
  VagasPublicadas: {
    label: "Vagas Publicadas",
    color: "#130633",
  },
  Candidatos: {
    label: "Candidatos",
    color: "#786D94",
  },
  contratados: {
    label: "Contratados",
    color: "#FFFFFF",
  },
} satisfies ChartConfig;

const HomeEmpresa: React.FC = () => {
  const chartRef = useRef<HTMLDivElement>(null);

  const ExportarPDF = async () => {
    if (chartRef.current) {
      const canvas = await html2canvas(chartRef.current);
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF("landscape"); // Define a orientação como paisagem
      pdf.addImage(imgData, "PNG", 7.5, 7.5, 210, 112.5); // Adiciona a imagem no PDF
      pdf.save("chart.pdf"); // Salva o PDF
    }
  };

  return (
    <div>
      <PreloadingE/>
      <SideMenu />
      <div className="w-screen h-screen flex flex-1 flex-col justify-start items-center">
        <div className="w-[75%] flex justify-start font-poppins font-normal text-3xl mb-3">
          <h1 className="text-[#130633] mt-24">Inicio</h1>
        </div>
        <div className="w-[75%]">
          <h2 className="font-poppins font-normal text-xl text-[#130633]">
            Ultimas Vagas Publicadas:
          </h2>
          <div className="flex flex-1 flex-row min-w-[75%] max-h-[120px] ">
            {vagas.map((vaga) => (
              <Card className="m-4 min-w-[30%] hover:bg-gray-200 duration-700 cursor-pointer hover:scale-95">
                <CardHeader className="flex flex-1 flex-row justify-center items-center">
                  <Avatar className="w-12 h-12 mb-4">
                    <AvatarImage
                      className="rounded-full"
                      src="data:image/png;base64,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"
                    />
                    <AvatarFallback>{vaga.empresa}</AvatarFallback>
                  </Avatar>
                  <CardContent className="flex flex-1 flex-col justify-center items-center">
                    <CardTitle>{vaga.empresa}</CardTitle>
                    <CardDescription>{vaga.tipo} - {vaga.localizacao}</CardDescription>
                  </CardContent>
                </CardHeader>
              </Card>
            ))}
          </div>
          <Separator />
          <div className="w-fit h-[45px] p-6">
            <Link to={'/CriarVaga'} className="flex flex-1 rounded p-2 flex-row hover:scale-105 duration-700 hover:bg-gray-200">
                 <CirclePlus className="mr-4"/>
                    <p>Criar Nova Vaga</p>
            </Link>
          </div>
          
        </div>

        <div className="w-[75%]">
          <Drawer>
            <DrawerTrigger className="btn btnSecondE absolute bottom-[5%]">
              Gerar Grafico
            </DrawerTrigger>
            <DrawerContent>
              <DrawerHeader className="flex flex-1 flex-col justify-center items-center">
                <DrawerTitle className="font-poppins font-normal text-2xl text-[#130633]">
                  Contratados pelo Jobmatch
                </DrawerTitle>
                <DrawerDescription
                  ref={chartRef}
                  className="font-poppins flex flex-1 flex-row  items-center relative right-20"
                >
                  <div className="flex flex-1 flex-col">
                    <p className="flex flex-1 flex-row p-2">
                      <div className="w-4 h-4 bg-[#FFFFFF] shadow-lg border border-[#000000] rounded-full mr-4"></div>
                      Contratados{" "}
                    </p>
                    <p className="flex flex-1 flex-row p-2">
                      <div className="w-4 h-4 bg-[#130633] shadow-lg border border-[#000000] rounded-full mr-4"></div>
                      Vagas Publicadas{" "}
                    </p>
                    <p className="flex flex-1 flex-row p-2">
                      <div className="w-4 h-4 bg-[#786D94] shadow-lg border border-[#000000] rounded-full mr-4"></div>
                      Candidatos{" "}
                    </p>
                  </div>

                  <div className="bg-[#786d9468] p-4 w-[650px] h-[410px]">
                    <div className="chart-placeholder">
                      <ChartContainer
                        config={chartConfig}
                        className="min-h-[350px] max-h-[350px] w-full "
                      >
                        <BarChart accessibilityLayer data={chartData}>
                          <CartesianGrid vertical={false} stroke="#000" />
                          <XAxis
                            dataKey="mes"
                            tickLine={false}
                            tickMargin={10}
                            axisLine={false}
                            tickFormatter={(value) => value.slice(0, 3)}
                          />
                          <YAxis
                            label={{ angle: -90, position: "insideLeft" }}
                            domain={[0, "auto"]}
                            tickFormatter={(value) => `${value}`}
                          />
                          <ChartTooltip content={<ChartTooltipContent />} />
                          <Bar
                            dataKey="VagasPublicadas"
                            fill="var(--color-VagasPublicadas)"
                            radius={4}
                          />
                          <Bar
                            dataKey="Candidatos"
                            fill="var(--color-Candidatos)"
                            radius={4}
                          />
                          <Bar
                            dataKey="contratados"
                            fill="var(--color-contratados)"
                            radius={4}
                          />
                        </BarChart>
                      </ChartContainer>
                    </div>
                  </div>
                </DrawerDescription>
              </DrawerHeader>

              <DrawerFooter className="flex flex-1 flex-row justify-between">
                <Button
                  className="btn btnSecondE max-w-fit"
                  onClick={ExportarPDF}
                >
                  Exportar Grafico
                </Button>
                <DrawerClose>
                  <Button className="btn max-w-fit border bg-red-500 hover:bg-white hover:border hover:border-red-500 hover:text-red-500 duration-700">
                    Fechar
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </DrawerContent>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default HomeEmpresa;
