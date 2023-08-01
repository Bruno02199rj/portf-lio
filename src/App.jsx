import { useState, useEffect } from "react";

import "./App.css";
import * as React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header";
import Habilidades from "./components/Hability";
import Projects from "./components/Projects";

import minhaImagem from "../src/assets/image 1.png"
import Tailwind from "../src/assets/tailwindcss.svg"



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
        "Netflix clone é uma pequena aplicação criada no intuito de praticar meus conhecimentos nas tecnologias abordadas. ",
      email: "brunodim1@hotmail.com",
      stack: [
       ,Tailwind,
        "src/assets/javascript.svg",
        "src/assets/react.svg",
        "src/assets/figma.svg",
      ],
      stackName:['• REACT JS','• TAILWINDCSS','• FIGMA','• TMDB API ( The Movie Database O Banco de Dados de Filmes, mais conhecido pela sigla TMDb, é uma base de dados grátis e de código aberto, sobre filmes e seriados)' ],
      image: "src/assets/Capturar best21.PNG",
      url: "src/assets/rec-tab.webm",
      repo: "https://github.com/Bruno02199rj/GetRep",
      project: "https://netflix-clone-d07bc.web.app/",
    },
    {
      name: "WheatherWeb",
      fullDescription:" WeatherWeb é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo. Obtendo tanto os dados da temperatura atual, quanto de todo dia, além da velocidade do vento, nível de umidade, data/hora e temperatura máxima e mínima. ",
      description: "WeatherWeb é uma aplicação web que exibe a condição climática de todas as cidades, bairros, estados ou países do mundo",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
        "src/assets/tailwindcss.svg",
        "src/assets/javascript.svg",
        "src/assets/react.svg",
        "src/assets/figma.svg",
      ],
      stackName:['• REACT JS','• TAILWINDCSS','• FIGMA',' • WHEATHERAPI ( Acesso a estações meteorológicas globais em tempo real e milhões de pontos meteorológicos de alta resolução)' ],
      image: "src/assets/app-clima-img.PNG",
      url: "src/assets/rec-tab-f.mp4",
      repo: "https://github.com/Bruno02199rj/App-de-Clima",
      project: "https://app-clima-c469d.web.app/",
    },
    {
      name: "Loja",
      fullDescription: "Loja é uma aplicação full-stack que consiste em uma apiREST(criada com node) que cadastra produtos os produtos e sua informações no banco de dados. já no lado do cliente fazemos uma requisição http a essa api que nos retorna tais produtos e suas informações pertinentes   ",
      description: "Loja é uma aplicação full-stack que consiste em uma apiREST que cadastra os produtos e do lado do cliente através de requisições http os exibimos",
      email: "bssssssssrunodim1@hotmail.com",
      stack: [
        "src/assets/tailwindcss.svg",
        "src/assets/javascript.svg",
        "src/assets/react.svg",
        "src/assets/figma.svg",
        "src/assets/node.svg",
      ],
      stackName:['• REACT JS',' • TAILWINDCSS',' • FIGMA','• NODEJS', ],
      image: "src/assets/CAP-loja.PNG",
      url: "src/assets/lotus-rec.mp4",
      repo: "https://github.com/Bruno02199rj/GetRep",
      project: "https://netflix-clone-d07bc.web.app/",
    },
  ];

  return (
    <>
      <Header />

      <section className=" h-96  flex flex-wrap   ">
        <div className="h-max min-[300px]:w-full   ">
          <div
            data-aos="fade-right"
            className="h-12  w-full ml-42 flex justify-center"
          >
            <div className="h-48   grid justify-center 	mt-24  w-48 rounded-full bg-gradient-to-l from-violet-900 to-fuchsia-800 from-transparent	 ">
              <img className="h-36    m-0 " src={minhaImagem}></img>
            </div>
          </div>
          <div className="md:break h-52 w-72 px-4  radius-xl  mt-80 lg:mt-12 ">
            <span className="text-white">Olá me chamo</span>{" "}
            <span className="text-[#7127BA]">Bruno Henrique</span>
            <h1
              data-aos="fade-up"
              className="text-purple-700 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 font-bold sm:flex	 mt-12 text-4xl lg:text-5xl"
            >
              Desenvolvedor Front-End
            </h1>
          </div>
          <div className="h-max w-max flex pl-4">
            <img className=" h-8 pr-2" src="src/assets\linkedin.svg"></img>
            <img className="h-8 pr-2" src="src/assets\github.svg"></img>
            <img className="h-8 pr-2" src="src/assets\mail.svg"></img>
            <img className="h-8 pr-2" src="src/assets\phone.svg"></img>
          </div>

          <div className="  h-0.5    w-full bg-gradient-to-l from-violet-900 to-fuchsia-800  mt-12">
            {" "}
          </div>

          <div className="h-max  w-full flex text-center  justify-center lg:mt-52  ">
            <div
              data-aos="fade-right"
              className=" aling-center  px-4 sm:w-full lg:w-1/2   "
            >
              <h1 className="text-white text-3xl mb-12 mt-20  font-bold">
                Sobre mim
              </h1>

              <span className="text-[#828282] leading-4  text-center text-1xl pt-12  ">
                Meu name é Bruno Henrique sou desenvolvedor Front-end. com
                experiência em React.js, JavaScript, Tailwind, Figma e consumo
                de APIs REST. Também possuo experiência em desenvolvimento
                back-end com NodeJs, Express, WebSockets e Banco de dados (MongoDB)
                Cursando Ciencia da computação. Me preocupo muito em desenvolver
                meus projetos seguindo as boas praticas ultilizadas no
                desenvolvimento de software e estou sempre em busca de aprimorar
                ainda mais meus conhecimentos . atualmente ando estudando
                typeScript, testes unitarios, testes end-to-end,testes de
                integração, hooks como useRef,UseMemo,etc .
              </span>
            </div>
          </div>

          <div></div>

          <Habilidades />
          <Projects data={data} />
          <div className="h-full w-full  ">
            <div className="w-full h-12 mt-48 min-[320px]:grid-cols-2 aling-center    grid  sm:grid-cols-4   justify-items-center  items-center">
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src="src/assets\mail.svg"></img>
                <p className="text-white font-bold text-md">E-mail</p>
                <p className="text-white  text-sm text-slate-400">
                  brunodim1@hotmail.com
                </p>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src="src/assets\phone.svg"></img>
                <p className="text-white font-bold text-md">Telefone</p>
                <p className="text-white  text-sm text-slate-400">
                  (021) 99402-7664
                </p>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src="src/assets\github.svg"></img>
                <p className="text-white font-bold text-md">Github</p>
                <a
                  href="https://github.com/Bruno02199rj"
                  className="text-white  text-sm text-slate-400"
                >
                  @Bruno02199rj
                </a>
              </div>
              <div className="h-24 w-max   mt-2 grid 	justify-items-center  items-center ">
                <img className="h-8" src="src/assets\linkedin.svg"></img>
                <p className="text-white font-bold text-md">Linkedin</p>
                <p className="text-white  text-sm text-slate-400">
                  brunodim1@hotmail.com
                </p>
              </div>
              <div></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
