import React from 'react';
import { useState } from 'react';
const Modal = () => {


    return ( <>
    
  


<div id="defaultModal" tabindex="-1" aria-hidden="true" class=" backdrop-blur-sm   overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-30 w-full md:inset-0 h-full justify-center items-center">
<div class="relative z-40  p-4 scale-75  mt-12  ">

<div class="relative bg-white  rounded-lg shadow dark:bg-[#13131F]">

<div class="flex justify-between items-start p-5 dark:border-gray-600">
<h3 class="text-xl font-semibold dark:text-[#8257E6] lg:text-2xl text-white">
Projeto
</h3>
<button type="button" class=" rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:text-white" data-modal-toggle="defaultModal">
<p className='text-lg text-[#8257E6]'>X</p>
</button>
</div>

<div class="p-6 space-y-6 sm:flex">
<div className='h-[20rem] w-full bg-black mr-8'></div>
<p class="text-base w-full leading-relaxed text-gray-600 dark:text-gray-400">
The European Union’s General Data Protection
Regulation (G.D.P.R.) goes into effect on May 25
and is meant to ensure a common set of data
rights in the European Union. It requires
organizations to notify users as soon as
possible of high-risk data breaches that could
personally affect them.
</p>
</div>

<div class="flex items-center p-6 space-x-2 rounded-b bdark:border-gray-600">
<button data-modal-toggle="defaultModal" type="button" class="text-white bg-gradient-to-l from-violet-900 to-fuchsia-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center  hover:scale-[1.02] transition-transform">
Repositírio
</button>
<button data-modal-toggle="defaultModal" type="button" class="text-white bg-gradient-to-l from-violet-900 to-fuchsia-800 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 text-center inline-flex items-center  hover:scale-[1.02] transition-transform">
Acessar projeto
</button>
</div>
</div>
</div>
</div>


        
    </>  );
}
 
export default Modal;