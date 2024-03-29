import { useState, useEffect } from "react";

import "./App.css";
import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Habilidades from "./components/Hability";
import Projects from "./components/Projects";

import Type from "./components/Type";

import minhaImagem from "../src/assets/image 1.png"
import Tailwind from "../src/assets/tailwindcss.svg"
import Javascript from "../src/assets/javascript.svg"
import ReactI from "../src/assets/react.svg"
import Figma from "../src/assets/figma.svg"
import Node from "../src/assets/node.svg"
import  Netflix from "../src/assets/netflix.png"
import NetflixDemo from "../src/assets/rec-tab.webm"
import Clima from "../src/assets/app-clima.png"
import ClimaDemo from "../src/assets/rec-tab-f.mp4"
import Loja from "../src/assets/cap.png"
import LojaDemo from "../src/assets/lotus-rec.mp4"
import PostmanDemo from "../src/assets/recpostman.mp4"
import CapturePost from "../src/assets/capturarapi.png"

import Linkedin from "../src/assets/linkedin.svg"
import Git from "../src/assets/github.svg"
import Mail from "../src/assets/mail.svg"

import Phone from "../src/assets/phone.svg"
import Portifolio from "../src/assets/portifolio.png"
import PortifolioDemo from "../src/assets/portifolioG.mp4"
import { Analytics } from '@vercel/analytics/react';


function App() {
  const [modal, setModal] = useState();

  useEffect(() => {
    Aos.init({ duration: 3000 });
  }, []);

  const data = [
    {
      name: "Netflix Clone",
      fullDescription:
        "Netflix clone é uma pequena aplicação criada no intuito de praticar meus conhecimentos nas tecnologias abordadas. Basicamente fazemos uma requisição via uma API que retorna informações de cada filme ela também retorna o trailer do filme. Os Filmes ficam separados por categoria.",
      description:
        "Netflix clon e é uma pequena aplicação criada no intuito de praticar meus conhecimentos nas tecnologias abordadas. ",
      email: "brunodim1@hotmail.com",
      stack: [
       ,Tailwind,
        Javascript,
        ReactI,
       Figma,
      ],
      stackName:['• REACT JS','• TAILWINDCSS','• FIGMA','• TMDB API ( The Movie Database O Banco de Dados de Filmes, mais conhecido pela sigla TMDb, é uma base de dados grátis e de código aberto, sobre filmes e seriados)' ],
      image: Netflix,
      url: NetflixDemo,
      repo: "https://github.com/Bruno02199rj/GetRep",
      project: "https://netflix-clone-d07bc.web.app/",
    },
    {
      name: "WheatherWeb",
      fullDescription:" WeatherWeb é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto de todo dia, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. ",
      description: "WeatherWeb é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
        ,Tailwind,
        Javascript,
        ReactI,
       Figma,
      ],
      stackName:['• REACT JS','• TAILWINDCSS','• FIGMA',' • WHEATHERAPI ( Acesso a estações meteorológicas globais em tempo real e milhões de pontos meteorológicos de alta resolução)' ],
      image: Clima,
      url: ClimaDemo,
      repo: "https://github.com/Bruno02199rj/App-de-Clima",
      project: "https://wheatherweb.vercel.app/",
    },
    {
      name: "Loja",
      fullDescription: "Loja é uma aplicação full-stack que consiste em uma apiREST(criada com node) que cadastra produtos os produtos e sua informações no banco de dados. já no lado do cliente fazemos uma requisição http a essa api que nos retorna tais produtos e suas informações pertinentes   ",
      description: "Loja é uma aplicação full-stack que consiste em uma apiREST que cadastra os produtos e do lado do cliente através de requisições http os exibimos",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
        ,Tailwind,
        Javascript,
        ReactI,
       Figma,
        Node,
      ],
      stackName:['• REACT JS',' • TAILWINDCSS',' • FIGMA','• NODEJS', ],
      image: Loja,
      url: LojaDemo,
      repo: "https://github.com/Bruno02199rj/Loja",
      project: "https://netflix-clone-d07bc.web.app/",
    },
    {
      name: "Loja Api",
      fullDescription: "Realiza o cadastro e o controle dos produtos e faz integração com getway de pagamentos pagseguro ",
      description: "Api desenvolvida em nodejs",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
  
        Node,
      ],
      stackName:['• NODEJS','• MONGODB', '• POSTMAN','• PAGSEGURO'],
      image: CapturePost,
      url: PostmanDemo,
      repo: "https://github.com/Bruno02199rj/Server",
    
    },
    {
      name: "Portifólio",
      fullDescription: "Loja é uma aplicação full-stack que consiste em uma apiREST(criada com node) que cadastra produtos os produtos e sua informações no banco de dados. já no lado do cliente fazemos uma requisição http a essa api que nos retorna tais produtos e suas informações pertinentes   ",
      description: "Loja é uma aplicação full-stack que consiste em uma apiREST que cadastra os produtos e do lado do cliente através de requisições http os exibimos",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
        ,Tailwind,
        Javascript,
        ReactI,
       Figma,
        Node,
      ],
      stackName:['• REACT JS',' • TAILWINDCSS',' • FIGMA','• NODEJS', ],
      image: Portifolio,
      url: PortifolioDemo,
      repo: "https://github.com/Brun  o02199rj/GetRep", 
      project: "brunohenrique.vercel.app",
    }
  ];

  return (
    <>
      <Header />

      <section id="home" className=" h-96  flex flex-wrap   ">
        <div className="h-max min-[300px]:w-full   ">
          <div
            data-aos="fade-right"
            className="h-12  w-full ml-42 flex justify-center"
          >
            <div className="h-48   hidden sm:block    sm:grid justify-center 	mt-36  w-48 rounded-full bg-gradient-to-l from-violet-900 to-fuchsia-800 from-transparent	 ">
              <img className=" h-36      m-0 " src={minhaImagem}></img>
            </div>
            <div className="md:break sm:h-52 sm:w-72 px-4   radius-xl  mt-52 sm:mt-32 lg:mt-32">
            <span className="text-white">Olá me chamo</span>{" "}
            <span className="text-[#7127BA]">Bruno Henrique</span>
            <h1
              data-aos="fade-up"
              className="text-purple-700 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 font-bold sm:flex	 mt-12 text-4xl lg:text-5xl"
            >
             
             <Type/>
             
            </h1>
            <div className="h-max w-max flex my-2">
           <a target="blank" href="https://www.linkedin.com/in/bruno-henrique-8ab67721a/"><img className=" h-8 pr-2"  src={Linkedin}></img></a> 
            <a target="blank" href="https://github.com/Bruno02199rj"><img className="h-8 pr-2" src={Git}></img></a>
            <a><img className="h-8 pr-2" src={Mail}></img></a>
            
            <a  target="blank" href="https://wa.me/5521979186859"><img   className="h-8 cursor-pointer pr-2" src={Phone}></img></a>
          </div>
          </div>
          </div>
          
          

     

          <div className="  h-0.5    w-full bg-gradient-to-l from-violet-900 to-fuchsia-800  mt-12">
            {" "}
          </div>

          <div id="sobre" className="h-max  mt-[22rem]   w-full flex text-center  justify-center lg:mt-64   ">
            <div  
              data-aos="fade-right"
              className=" aling-center  px-4 sm:w-full lg:w-1/2   "
            >
              <h1  className="text-white text-3xl mb-12 mt-20  font-bold">
                Sobre mim
              </h1>

              <span  className="text-[#828288] leading-4  text-center text-lg pt-12  ">
Meu nome é Bruno Henrique, sou entusiasta da tecnologia e desenvolvedor Full Stack, tenho 24 anos e estou graduando em ciência da computação pela universidade Estácio do Rio de Janeiro. Possuo conhecimento em algumas linguagens e tecnologias modernas como:
C#, .Net Core,  .Net Framework, TypeScript, ReactJs, TailwindCss, NodeJs, Php, Sql Server, Mongo Db e Swagger. Possuo uma base sólida em desenvolvimento e consumo de APIs REST e Padrões de projetos como: Microsserviços, MVC e Cliente Servidor. Possuo também conhecimento em cloud utilizando Azure e AWS.
Entendo a importância da implementação de boas práticas no desenvolvimento de software e por isso procuro escrever código limpo e testável seguindo conceitos como: SOLID, Clean Code, Test Driven Development, atualmente estou estudando teste unitários, Docker, KISS, CI/CD entre outros.
Estou preparado para contribuir com o time, absorver conhecimento, me desenvolver como profissional.
               
              </span>
            </div>
          </div>

          <div></div>

          <Habilidades   />
          <Projects data={data} />
          <div id="contatos" className="h-full w-full  ">
            <div className="w-full h-12 mt-48 min-[320px]:grid-cols-2 aling-center    grid  sm:grid-cols-4   justify-items-center  items-center">
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src={Mail}></img>
                <p className="text-white font-bold text-md">E-mail</p>
                <p className="text-white  text-sm text-slate-400">
                  brunodim1@hotmail.com
                </p>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src={Phone}></img>
                <p className="text-white font-bold text-md">Telefone</p>
                <p className="text-white  text-sm text-slate-400">
                  (021) 99402-7664
                </p>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src={Git}></img>
                <p className="text-white font-bold text-md">Github</p>
                <a
                  href="https://github.com/Bruno02199rj"
                  className="text-white  text-sm text-slate-400"
                >
                  @Bruno02199rj
                </a>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img  className="h-8" src={Linkedin}></img>
                <p className="text-white font-bold text-md">Linkedin</p>
                <p className="text-white  text-sm text-slate-400">
                  brunodim1@hotmail.com
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
        <Analytics/>
      </section>
    </>
  );
}

export default App;
