import { Routes, Route } from "react-router-dom";
import HomeCandidato from "./Candidato/Home";
import GereciamentoVaga from "./Candidato/gereciamentoVaga";
import { Home } from '../pages/Home/index'
import {EscolhaPerfil} from '../pages/CadidatoEmpresa/index'
import { LoginC } from "./Candidato/Login";
import Habilidades from "./Candidato/habilidades";
import Interesses from "./Candidato/Interesse";
import Cadastro from "./Candidato/Cadastro";
import FinalCadastro from "./Candidato/FinalCadastro";
import PerfilCandidato from "./Candidato/perfil";
import ConfiguracoesC from "./Candidato/configuracoes";
import HomeEmpresa from "./empresa/homeEmpresa/index"
import LoginE from "./empresa/loginEmpresa";
import CadastroE from "./empresa/cadastroEmpresa";
import CriarVaga from "./empresa/Vaga";
import ContinuarCriacao from "./empresa/Vaga/ContinueForm";
import GereciamentoVagaE from "./empresa/gereciamentoVaga";
import PerfilE from "./empresa/perfil/Index";


export function RoutesPage(){
    return(
        <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/EscolhaPerfil" element={<EscolhaPerfil />}/>
            <Route path="/LoginE" element={<LoginE/>}/>
            <Route path="/CadastroE" element={<CadastroE/>}/>
            <Route path="/LoginC" element={<LoginC />}/>
            <Route path="/habilidades" element={<Habilidades />}/>
            <Route path="/interesses" element={<Interesses />}/>
            <Route path="/Cadastro" element={<Cadastro />}/>
            <Route path="/HomeCandidato" element={<HomeCandidato />}/>
            <Route path="/gereciamentoVaga" element={<GereciamentoVaga />}/>
            <Route path="/FinalCadastro" element={<FinalCadastro />}/>
            <Route path="/PerfilCandidato" element={<PerfilCandidato />}/>
            <Route path="/ConfiguracoesC" element={<ConfiguracoesC />} />
            <Route path="/homeEmpresa" element={<HomeEmpresa />}/>
            <Route path="/CriarVaga" element={<CriarVaga />}/>
            <Route path="/ContinuacaoVaga" element={<ContinuarCriacao />}/>
            <Route path="/GerenciamentoVagas" element={<GereciamentoVagaE />}/>
            <Route path="/PerfilE" element={<PerfilE />}/>

        </Routes>
    )
}

export default RoutesPage;