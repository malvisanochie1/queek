

function hero() {
  return (
    <div>
        <nav className=" border-gray-200 dark:bg-gray-900 w-10/12 mx-auto z-50 -mb-40">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href='/apply-details'
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
      <div
         
        className="h-[40vh] bg-image sm:h-[50vh] md:h-[70vh] bg-cover relative -z-10"
      >
        <div className="absolute h-full w-full text-xl sm:text-2xl md:text-3xl font-bold text-white justify-center flex items-center bg-gray-800 opacity-80">
          <h2 className="text-center mt-24"> Come work with us</h2>
        </div>
      </div>
    </div>
  )
}

export default hero
