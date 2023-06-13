const Header = () => {
    return ( <>< nav class="  border-gray-200 bg-[#1A0B2E]    w-full fixed z-50  " >
    
    <div class="flex px-4    ">
        <a href= "https://flowbite.com" class="flex ">
       
            <span class="self-center text-2xl font-semibold whitespace-nowrap mr-2 dark:text-white">Flowbite</span>
        </a>
       
        <nav class="bg-gray-50 px-0 py-3 h-full w-full  dark:bg-[#1A0B2E] flex flex-row-reverse">
    
        <div class=" ">
            <ul class="flex float-right font-medium mt-0  space-x-4 text-sm">
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
</nav>

    </div>
</nav>
</> );
}
 
export default Header;