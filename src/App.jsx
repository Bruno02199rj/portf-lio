import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   
<nav class="bg-white border-gray-200 dark:bg-[#1A0B2E]">
    <div class="flex flex-wrap justify-between items-center mx-52  max-w-screen-xl p-4">
        <a href="https://flowbite.com" class="flex items-center">
       
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
        </a>
        <div class="flex items-center">
        <nav class="bg-gray-50 dark:bg-[#1A0B2E]">
    <div class="max-w-screen-xl px-0 py-3 ">
        <div class="flex items-center">
            <ul class="flex flex-row font-medium mt-0 mr-6 space-x-8 text-sm">
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                </li>
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Company</a>
                </li>
               
                <li>
                    <a href="#" class="text-gray-900 dark:text-white hover:underline">Features</a>
                </li>
            </ul>
        </div>
    </div>
</nav>

        </div>
    </div>
</nav>

<main className='h-screen bg-[#11071F]  '>
<section className='w mx-52  h-96   flex flex-wrap   '>
    
    <div className='h-56  mt-20  w-56 rounded-full bg-gradient-to-r from-[#763CAC]  to-[#320F85] to-50%  grid justify-items-center items-center	'>
    <div className='h-48  grid justify-items-center items-center content-center	  w-48 rounded-full bg-gradient-to-l from-violet-900 to-fuchsia-800 from-transparent	 '>
        <img className='h-36  justify-items-center  m-0 ' src='https://s3-alpha-sig.figma.com/img/2639/7e0a/83350afda4621f18d18025b6ec5e07dc?Expires=1684108800&Signature=KNWOs4R-hzWpTTkuhlwEQV5PKmBvuzoNth6Z9vEEzMdIKoz8sI2QzwFhoSQ--5fC2KVARvenPb1n-kpSuSN90nePEGnlYkQxG1npu-NLCTBEzdv1duOuf-q1n1Yow5mZ6~~MX7XinMtYZ2fkfa7fVb0vor5uZ~zeDJB2648YoHuHIVGoS-UalxVEcwml4eSyfpb1kQta0nGhoMarkOsSucKBktjinr3sptGauwi8ZjQYNea9IzBuj0-vAbPNLsfPZ~yLWeNXMy9M730pMZsMBr-dDTlpoFdoFcA0jogGjPNZH0tlrvLPncpbFwR3Y-2jI53zgbmGDYdryWdgOSnwDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
        
        </div>
   
    </div>

<div className='h-52 w-80 radius-xl  mt-20 ml-20  '>
   <span className='text-white'>Olá me chamo</span> <span className='text-[#7127BA]'>Bruno Henrique</span>
    <h1 className='text-purple-700 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 font-bold	 mt-12 text-6xl'>Desenvolvedor Front-End</h1>
</div>
 
<div className='h-52 w-full '>
   
    <h1 className='text-white text-4xl mt-20'>I'm a Software Engineer.</h1>
    
    <span className='text-white pt-12 max'>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goals</span>
<div className='h-0.5 w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 mt-12'> </div>
</div>
<h1 className='mt-24 text-white text-4xl font-bold'>Habilidades</h1>
<div className='h-52 w-full grid grid  grid-cols-5 justify-items-center  items-center    mt-24'>
    
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>TAILWIND</p>
    <img src='src/assets\tailwindcss.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>JAVASCRIPT</p>
    <img src='src/assets\javascript.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>REACT</p>
    <img src='src/assets\react.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>FIGMA</p>
    <img src='src/assets\figma.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28 bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-28bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='text-[#8257E6] text-center font-bold'>HTML 5</p>
    <img src='src/assets\html.svg'></img>
    <div className='w-full h-0.5  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>





</div>
<h1 className='mt-52 text-white text-4xl font-bold'>Projetos</h1>
<div className='h-screen  mt-32 w-full   grid  grid-cols-2 justify-items-center  items-center content-center'>  
<div className='h-96   hover:mix-blend-normal mix-blend-overlay hover:scale-[1.1] transition duration-150 ease-out hover:ease-in w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4'>
    <div className='w-full h-52 '>
        <img src='src\assets\Capturar.PNG' ></img>
        <div className='h-32 px-4 w-full '><span className='text-white text-2xl font-bold '>E-commmerce</span>
    <br/>
    <span className=' text-white '>Projeto desenvolvido com a MERN stack para atender e genrenciar processos de vendas online</span>
    <div className='flex mt-2 text-sm'>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  
  </div>
    </div>
    </div>
    </div>
    <div className='h-96   hover:mix-blend-normal mix-blend-overlay hover:scale-[1.1] transition duration-150 ease-out hover:ease-in w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4'>
    <div className='w-full h-52 '>
        <img src='src\assets\Capturar.PNG' ></img>
        <div className='h-32 px-4 w-full '><span className='text-white text-2xl font-bold '>E-commmerce</span>
    <br/>
    <span className=' text-white '>Projeto desenvolvido com a MERN stack para atender e genrenciar processos de vendas online</span>
    <div className='flex mt-2 text-sm'>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  
  </div>
    </div>
    </div>
    </div>
    <div className='h-96   hover:mix-blend-normal mix-blend-overlay hover:scale-[1.1] transition duration-150 ease-out hover:ease-in w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4'>
    <div className='w-full h-52 '>
        <img src='src\assets\Capturar.PNG' ></img>
        <div className='h-32 px-4 w-full '><span className='text-white text-2xl font-bold '>E-commmerce</span>
    <br/>
    <span className=' text-white '>Projeto desenvolvido com a MERN stack para atender e genrenciar processos de vendas online</span>
    <div className='flex mt-2 text-sm'>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  
  </div>
    </div>
    </div>
    </div>
    
    <div className='h-96  hover:mix-blend-normal mix-blend-overlay hover:scale-[1.1] transition duration-150 ease-out hover:ease-in w-96 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 mx-4 my-4'>
   
    <div className='w-full h-52'>
    <img src='src\assets\Capturar.PNG' ></img>
    </div>
    <div className='h-32 px-4 w-full '><span className='text-white text-2xl font-bold '>E-commmerce</span>
    <br/>
    <span className=' text-white '>Projeto desenvolvido com a MERN stack para atender e genrenciar processos de vendas online</span>
  <div className='flex mt-2 text-sm'>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  
  </div>
  <div className='flex mt-2 text-sm'>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  <div className='h-6 w-32 bg-gradient-to-r from-indigo-800 text-center '><p className='text-white font-bold	'>REACT JS</p></div>
  
  </div>
 
    </div>

    </div>
    

</div>
</section>

</main>


    </>
  )
}

export default App
