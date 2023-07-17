import { useState } from "react";
import React from "react";
import ReactPlayer from "react-player";

const Projects = ({ data }) => {
  const [repository, setRepository] = useState(false);
  const [modalData, setModalData] = useState([]);

  const modal = (e) => {
    setRepository(true);
    setModalData(e);
  };

  return (
    <>
      <div data-aos="fade-right" className="h-max w-full">
        <h1 className="mt-72 text-white text-2xl font-bold text-center">
          PROJETOS
        </h1>
        <div></div>
        <h1
          data-aos="fade-right"
          className="text-white font-bold text-xl mt-32 px-4 "
        >
          Destaques
        </h1>
        <div className="h-0.5  px-4 w-20 bg-gradient-to-l from-violet-900 to-fuchsia-800 "></div>
      </div>

      <div className="h-max  mt-32 w-full  grid   lg:grid-cols-3 md:grid-cols-2 justify-items-center  items-center content-center">
        {data.map((item) => {
  
          return (
            <>
              <div
                onClick={() => modal(item)}
                className=" h-[20rem]  w-64 sm:h-96 lg:h-[22rem] lg:w-72  sm:w-96 hover:mix-blend-normal  hover:scale-[1.1] transition duration-150 ease-out hover:ease-in bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4"
              >
                <div className="w-full h-52 ">
                  <img src={item.image}></img>
                  <div className="h-12 px-4 w-full mt-8 ">
                    <span className="text-white text-1xl font-bold">
                      {item.name}
                    </span>
                    <br />
                    <span className="text-[#828282] text-sm">{item.description}</span>
                    <div className="flex  mt-2 text-sm">
                      

                   
                      {item.stack.map((item) => {
              

                        return (
                          <>
                            <img className="h-6 mt-2 mx-1.5 w-6" src={item}></img>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div data-aos="fade-right" className="h-max w-full">
        <div></div>
        <h1
          data-aos="fade-right"
          className="text-white font-bold text-xl mt-32 px-4 "
        >
          Todos Os Projetos
        </h1>
        <div className="h-0.5  px-4 w-20 bg-gradient-to-l from-violet-900 to-fuchsia-800 "></div>
      </div>

      <div className="h-max  mt-32 w-full   grid   lg:grid-cols-3 md:grid-cols-2 justify-items-center  items-center content-center">
        <div className="h-96 w-64 sm:h-96   lg:h-96 lg:w-72 sm:w-96 hover:mix-blend-normal  hover:scale-[1.1] transition duration-150 ease-out hover:ease-in sm:w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4">
          <div className="w-full h-52 ">
            <img src="src\assets\Capturar.PNG"></img>
            <div className="h-32 px-4 w-full mt-8 ">
              <span className="text-white text-2xl font-bold">E-commmerce</span>
              <br />
              <span className=" text-[#828282] ">
                Projeto desenvolvido com a MERN stack para atender e genrenciar
                processos de vendas online
              </span>
              <div className="flex mt-8 text-sm">
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem] 	 font-bold	">
                    REACT JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#55C921] text-[0.6rem]	 font-bold	">
                    NODE JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem]	 font-bold	">
                    TAILWIND
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-green-400 text-[0.6rem]	 font-bold	">
                    REACT JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 w-64 sm:h-96 lg:h-96 lg:w-72   sm:w-96 hover:mix-blend-normal  hover:scale-[1.1] transition duration-150 ease-out hover:ease-in sm:w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4">
          <div className="w-full h-52 ">
            <img src="src\assets\Capturar.PNG"></img>
            <div className="h-32 px-4 w-full mt-8 ">
              <span className="text-white text-2xl font-bold">E-commmerce</span>
              <br />
              <span className=" text-[#828282] ">
                Projeto desenvolvido com a MERN stack para atender e genrenciar
                processos de vendas online
              </span>
              <div className="flex mt-8 text-sm">
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem] 	 font-bold	">
                    REACT JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#55C921] text-[0.6rem]	 font-bold	">
                    NODE JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem]	 font-bold	">
                    TAILWIND
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-green-400 text-[0.6rem]	 font-bold	">
                    REACT JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-96 w-64 sm:h-96 lg:h-96 lg:w-72   sm:w-96 hover:mix-blend-normal  hover:scale-[1.1] transition duration-150 ease-out hover:ease-in sm:w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4">
          <div className="w-full h-52 ">
            <img src="src\assets\Capturar.PNG"></img>
            <div className="h-32 px-4 w-full mt-8 ">
              <span className="text-white text-2xl font-bold">E-commmerce</span>
              <br />
              <span className=" text-[#828282] ">
                Projeto desenvolvido com a MERN stack para atender e genrenciar
                processos de vendas online
              </span>
              <div className="flex mt-8 text-sm">
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem] 	 font-bold	">
                    REACT JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#55C921] text-[0.6rem]	 font-bold	">
                    NODE JS
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-[#38BDF8] text-[0.6rem]	 font-bold	">
                    TAILWIND
                  </p>
                </div>
                <div className="h-6 w-32 bg-slate-950	 text-center rounded mr-2 ">
                  <p className="text-green-400 text-[0.6rem]	 font-bold	">
                    REACT JS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {repository ? (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class=" backdrop-blur-sm mt-4  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-full justify-center items-center"
        >
          <div class="relative z-40  p-0 scale-100  mt-12  ">
            <div class="relative bg-white rounded-lg shadow dark:bg-[#13131F]">
              <div class="flex justify-between items-start p-5 dark:border-gray-600">
                <h3 class="text-xl font-semibold dark:text-[#8257E6] lg:text-2xl text-white">
                  {modalData.name}
                </h3>
                <button
                  type="button"
                  class=" rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white"
                  data-modal-toggle="defaultModal"
                >
                  <p
                    onClick={() => setRepository(false)}
                    className="text-lg text-[#8257E6]"
                  >
                    X
                  </p>
                </button>
              </div>

              <div class="px-6  h-full w-full  mb-4">
                <div className="h-full w-full lg:flex     ">
                  <div className="h-max w-full lg:w-full mb-2">
                      
                  
                    <ReactPlayer
                      loop={true}
                      playing={true}
                      url={modalData.url}
                      width="100%"
                      height="100%"
                    />
                  </div>
                
          
                  <p class="text-base md:w-full sm:w-full lg:ml-6  leading-relaxed text-gray-600 dark:text-gray-400">
                  
                    {modalData.fullDescription}
         
                    <p className="mt-4 text-sm">Tecnologias usadas nesse  projeto:</p>
                    {modalData.stackName.map((e)=><p className="h-max  mr-2 w-full" >{e}</p>)}

                  </p>
                </div>
              </div>

              <div className="h-max ml-6   w-24  flex ">
             {modalData.stack.map((e)=><img className="h-6 mr-2 w-6" src={e}></img>)}

             </div>
              <div class="flex items-center  py-4 pl-6 space-x-2 rounded-b dark:border-gray-600">
              
                <a
                  target="_blank"
                  href={modalData.project}
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="text-white bg-gradient-to-l from-violet-900 to-fuchsia-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center  hover:scale-[1.02] transition-transform"
                >
                  Projeto
                </a>
              
                <a
                  href={modalData.repo}
                  target="_blank"
                  data-modal-toggle="defaultModal"
                  type="button"
                  class="text-white bg-gradient-to-l from-violet-900 to-fuchsia-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center  hover:scale-[1.02] transition-transform"
                >
                  Repositório
                </a>
              
              </div>
              
            
            </div>
          </div>
        </div>
      ) : (
        <p className="hidden">disable</p>
      )}
    </>
  );
};

export default Projects;
