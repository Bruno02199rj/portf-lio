import Html from "/src/assets/html.svg"
import Css from "/src/assets/css.svg"
import Tailwind from "/src/assets/tailwindcss.svg"
import Javascript from "/src/assets/javascript.svg"
import ReactI from "/src/assets/react.svg"
import Node from "/src/assets/node.svg"
import Figma from "/src/assets/figma.svg"


const Habilidades = () => {
    return ( <>
    <div  data-aos="fade-right" className='w-full h-max mt-12 	'><h1 className=' mt-72 text-white text-2xl mt-2 font-bold text-center mb-24 	 '>HABILIDADES</h1>


</div>

<div  data-aos="fade-right" className='  h-max w-full  grid  grid-cols-2 gap-2 sm:grid-cols-5  justify-items-center  items-center mt-24'>

<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className=' p-4 text-[#8257E6] text-center font-bold'>HTML </p>
    <img className='h-8' src={Html} ></img>
    <div className='w-full h-0.5 mt-6   w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>

<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className=' p-4 text-[#8257E6] text-center font-bold'>CSS</p>
    <img className='h-8' src={Css}></img>
    <div className='w-full h-0.5 mt-6   w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='p-4 text-[#8257E6] text-center font-bold'>TAILWIND</p>
    <img className='h-8' src={Tailwind}></img>
    <div className='w-full h-0.5 mt-6  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='p-4 text-[#8257E6] text-center font-bold'>JAVASCRIPT</p>
    <img className='h-8' src={Javascript}></img>
    <div className='w-full h-0.5 mt-6  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  ite
ms-center  w-32'>
    <p className='p-4 text-[#8257E6] text-center font-bold'>REACT</p>
    <img className='h-8' src={ReactI}></img>
    <div className='w-full h-0.5 mt-6  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  ite
ms-center  w-32'>
    <p className='p-4 text-[#8257E6] text-center font-bold'>NODEJS</p>
    <img className='h-14' src={Node}></img>
    <div className='w-full h-0.5   w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>
<div className='h-max  bg-[#13131F] mt-2 grid 	justify-items-center  items-center  w-32'>
    <p className='p-4 text-[#8257E6] text-center font-bold'>FIGMA</p>
    <img className='h-8' src={Figma}></img>
    <div className='w-full h-0.5 mt-6  w-full bg-gradient-to-l from-violet-900 to-fuchsia-800 '></div>
    
</div>


</div>
    </> );
}
 
export default Habilidades;