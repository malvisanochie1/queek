
function DetailsHero() {
  return (
    <div>
      <nav className=" border-gray-200 dark:bg-gray-900 max-w-[1010px] mx-auto z-50 -mb-40">
   <div
     className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
   >
     <a
       href="index.html"
       className="flex items-center space-x-3 rtl:space-x-reverse"
     >
       <img
         src="images/queek.png"
         className="w-20 sm:w-24 md:w-32 "
         alt="Flowbite Logo"
       />
     </a>
   </div>
 </nav>
 <div className="h-[40vh] sm:h-[50vh] md:h-[60vh] bg-cover relative -z-10 bg-image">
   
<div className="absolute h-full w-full text-xl sm:text-2xl md:text-3xl font-bold text-white justify-center flex items-end bg-gray-800 opacity-80">
<div className=" mb-6 sm:mb-14 md:mb-20">


<div className=" text-center">
<h2 className="text-center mt-24">    Come work with us
</h2>
</div>
<div className="py-4 flex items-center justify-center space-x-4 px-1">

<button className="border group border-gray-200 rounded-3xl text-xs py-1 px-4 hover:bg-[#1E3050] ">Part time</button>
<h6 className="text-sm font-bold "><i className="fa-solid fa-location-dot me-2"></i>Address, port harcout</h6>
</div>
</div>
</div>
 </div>
    </div>
  )
}

export default DetailsHero
