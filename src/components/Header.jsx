import { useState } from "react";
import minhaImagem from "/src/assets/image 1.png"

const Header = () => {
  const [navModal, setNavModal] = useState();
  

  return (  
    <>
      <nav class=" border-gray-200  border-gray-200   bg-[#11071f] text-sm w-full fixed z-50">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
        <div className="h-24 w-24   grid  justify-center 	   rounded-full bg-gradient-to-l from-violet-900 to-fuchsia-800 from-transparent	 ">
              <img className=" h-12     mt-4 " src={minhaImagem}></img>
            </div>
          
          
          <button
            onClick={() => setNavModal(!navModal)}
            data-collapse-toggle="navbar-default"
            type="button"
            class=" inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden     "
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul class=" sm:hidden hidden font-medium md:flex flex-col p-4 md:p-0  mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0   :border-gray-700">
            <li>
              <a 
                
             
                href="#home"
                class=" py-2  pl-2 pr-2 text-white  rounded md:bg-transparent  hover:text-[#8257e6] md:p-0 :text-white  "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a
             
                href="#sobre"
                class="block py-2 pl-2 pr-2 text-white rounded  hover:text-[#8257e6] md:border-0 md:p-0 "
              >
                Sobre
              </a>
            </li>
            <li>
              <a
             href="#habilidades"
                class="block  pl-2 pr-2 text-white rounded  hover:text-[#8257e6] "
              >
                Habilidades
              </a>
            </li>
            <li>
              <a
                href="#projetos"
                
                class="block  pl-2 pr-2 text-white rounded  hover:text-[#8257e6] "
              >
                Projetos
              </a>
            </li>
            <li>
              <a
                href="#contatos"
                 
                class="block  pl-2 pr-2 text-white rounded  hover:text-[#8257e6] "
              >
                Contato
              </a>
            </li>
          </ul>
          {navModal ? (
            <div class="  w-full md:block md:w-auto" id="navbar-default">
              <ul class=" font-medium flex flex-col p-4 md:p-0  mt-4 border border-gray-100 rounded-lg bg-[#13131f] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white  :border-gray-700">
                <li>
                  <a
                    onClick={() => setNavModal(!navModal)}
                    href="#home"
                    class="block py-2 pl-3 pr-4 text-white    hover:bg-[#231536] rounded " 
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                   onClick={() => setNavModal(!navModal)}
                   href="#sobre"
                   class="block py-2 pl-3 pr-4 text-white    hover:bg-[#231536] rounded " 
                  >
                    Sobre
                  </a>
                </li>
                <li>
                  <a
                    href="#habilidades"
                     onClick={() => setNavModal(!navModal)}
                     class="block py-2 pl-3 pr-4 text-white    hover:bg-[#231536] rounded " 
                  >
                    Habilidades
                  </a>
                </li>
                <li>
                  <a
                    href="#projetos"
                     onClick={() => setNavModal(!navModal)}
                     class="block py-2 pl-3 pr-4 text-white    hover:bg-[#231536] rounded " 
                  >
                    Projetos
                  </a>
                </li>
                <li>
                  <a
                  href="#contatos"
                   onClick={() => setNavModal(!navModal)}
                   class="block py-2 pl-3 pr-4 text-white    hover:bg-[#231536] rounded " 
                  >
                    Contatos
                  </a>
                </li>
              </ul>
            </div>
          ) : (
            <p className="hidden">disable</p>
          )}
        </div>
      </nav>
    </>
  );
};

export default Header;
