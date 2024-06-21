
function JobCard() {
  return (
    <div>
      <section className=" md:py-20 sm:py-16 py-10 sm:px-5 px-3">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 container mx-auto">
          <div className="rounded-lg border shadow-md">
            <div className=" w-full rounded-t-lg max-h-52 overflow-hidden relative">
              <img
                className="mx-auto -z-10"
                src="images/Queek_20240606_161959_0003.png"
                alt="an image"
              />
            </div>
            <div className="p-5 w-full space-y-2">
              <h5 className="font-medium text-lg sm:text-xl">
                web designer/developer
              </h5>
              <p className="text-red-500 font-medium text-sm">starhealth</p>
              <hr className="bg-gray-300 h-0.5" />
              <div className="flex items-center justify-between py-3">
                <p className="font-medium text-sm space-x-4">Address</p>
                <button className="rounded-3xl border border-red-500 hover:bg-red-500 hover:text-white text-red-500 text-xs font-medium py-1 px-3">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-lg border shadow-md">
            <div className=" w-full rounded-t-lg max-h-52 overflow-hidden relative">
              <img
                className="mx-auto -z-10"
                src="images/Queek_20240606_161959_0003.png"
                alt="an image"
              />
            </div>
            <div className="p-5 w-full space-y-2">
              <h5 className="font-medium text-lg sm:text-xl">
                web designer/developer
              </h5>
              <p className="text-red-500 font-medium text-sm">starhealth</p>
              <hr className="bg-gray-300 h-0.5" />
              <div className="flex items-center justify-between py-3">
                <p className="font-medium text-sm space-x-4">Address</p>
                <button className="rounded-3xl border border-red-500 hover:bg-red-500 hover:text-white text-red-500 text-xs font-medium py-1 px-3">
                  Apply Now
                </button>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </div>
  )
}

export default JobCard
