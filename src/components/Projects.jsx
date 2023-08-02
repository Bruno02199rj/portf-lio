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
 
        <h1
         id="projetos"
          data-aos="fade-right"
          className="text-white font-bold text-xl mt-32 px-4 "
        >
          Projetos
        </h1>
        <div className="h-0.5  px-4 w-20 bg-gradient-to-l from-violet-900 to-fuchsia-800 "></div>
     

      <div className="h-max  mt-32 w-full  grid   lg:grid-cols-3 md:grid-cols-2 justify-items-center  items-center content-center">
        {data.map((item) => {
  
          return (
            <>
              <div
                onClick={() => modal(item)}
                className=" h-[24rem]  w-full mb-8 sm:h-96 lg:h-[22rem] lg:w-72  sm:w-96 hover:mix-blend-normal  md:hover:scale-[1.1] transition duration-150 ease-out hover:ease-in bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4"
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



      {repository ? (
        <div
          id="defaultModal"
          tabindex="-1"
          aria-hidden="true"
          class=" backdrop-blur-sm mt-4  overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-full justify-center items-center"
        >
          <div class="relative z-40  p-0 scale-100  mt-12  ">
            <div class="relative  rounded-lg shadow bg-[#13131F]">
              <div class="flex justify-between items-start p-5 :border-gray-600">
                <h3 class="text-xl font-semibold text-[#8257E6] lg:text-2xl ">
                  {modalData.name}
                </h3>
                <button
                  type="button"
                  class=" rounded-lg text-sm p-1.5 ml-auto inline-flex items-center :hover:text-white"
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
                
          
                  <p class="text-base md:w-full text-[#828282] text-sm sm:w-full lg:ml-6  leading-relaxed ">
                  
                    {modalData.fullDescription}
         
                    <p className="mt-4 text-sm">Tecnologias usadas nesse  projeto:</p>
                    {modalData.stackName.map((e)=><p className="h-max  mr-2 w-full" >{e}</p>)}

                  </p>
                </div>
              </div>

              <div className="h-max ml-6   w-24  flex ">
             {modalData.stack.map((e)=><img className="h-6 mr-2 w-6" src={e}></img>)}

             </div>
              <div class="flex items-center  py-4 pl-6 space-x-2 rounded-b :border-gray-600">
              
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
