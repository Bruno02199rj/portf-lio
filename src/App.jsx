import { useState,useEffect } from 'react'
import Modal from './components/modal';
import './App.css'
import * as React from "react";
import Aos from 'aos';
import "aos/dist/aos.css"
import Header from './components/Header';
import Habilidades from './components/Habilidades';
import { Container } from 'postcss';
import Projects from './components/Projects';

function App() {
const [modal,setModal] = useState() 


  useEffect(() => {
    Aos.init({duration : 3000})
  }, []);

  return (
    <>
   
<Header/>
<main className='h-screen w-full bg-[#11071F]  '>
<section className=' h-96  flex flex-wrap   '>

<div className='h-max w-full  '>
  

   
        <div className='h-12 w-full  flex justify-center'>
        <div className='h-48   grid justify-center 	mt-24  w-48 rounded-full bg-gradient-to-l from-violet-900 to-fuchsia-800 from-transparent	 '>
        <img className='h-36  justify-items-center  m-0 ' src='https://s3-alpha-sig.figma.com/img/2639/7e0a/83350afda4621f18d18025b6ec5e07dc?Expires=1684108800&Signature=KNWOs4R-hzWpTTkuhlwEQV5PKmBvuzoNth6Z9vEEzMdIKoz8sI2QzwFhoSQ--5fC2KVARvenPb1n-kpSuSN90nePEGnlYkQxG1npu-NLCTBEzdv1duOuf-q1n1Yow5mZ6~~MX7XinMtYZ2fkfa7fVb0vor5uZ~zeDJB2648YoHuHIVGoS-UalxVEcwml4eSyfpb1kQta0nGhoMarkOsSucKBktjinr3sptGauwi8ZjQYNea9IzBuj0-vAbPNLsfPZ~yLWeNXMy9M730pMZsMBr-dDTlpoFdoFcA0jogGjPNZH0tlrvLPncpbFwR3Y-2jI53zgbmGDYdryWdgOSnwDw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4'></img>
        
        </div>

</div>
<div   className='md:break h-52 w-72 px-4  radius-xl  mt-80  '>

<span className='text-white'>Olá me chamo</span> <span className='text-[#7127BA]'>Bruno Henrique</span>
 <h1 className='text-purple-700 bg-gradient-to-l from-transparent 	 from-[#130428] to-fuchsia-950 font-bold sm:flex	 mt-12 text-4xl lg:text-5xl'>Desenvolvedor Front-End</h1>

</div>



<div className='h-0.5 mt-12  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 mt-12'> </div>
</div>


<div className='h-max  w-full flex text-center  justify-center   '>
<div className='aling-center  px-4 sm:w-full lg:w-1/2   '>
<h1 className='text-white text-4xl mb-12 mt-20'>I'm a Software Engineer.</h1>
 
 <span className='text-[#828282] leading-4  text-center text-1xl pt-12 '>A self-taught UI/UX designer, functioning in the industry for 3+ years now.
I make meaningful and delightful digital products that create an equilibrium
between user needs and business goalsssssssssssss Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita, sit quis vero itaque ipsa molestiae est dicta iste sunt atque consequatur cumque, nisi repudiandae sapiente ex nesciunt et perferendis ipsum.</span>  
</div>
</div>

 

<div>
</div>

<Habilidades/>
<Projects/>
</section>

</main>



    </>
  )
}

export default App
