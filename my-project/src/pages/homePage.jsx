import Hero from '../components/hero';
import JobCard from  '../components/JobCard';
function home() {
  return (
    <div>
       <Hero/>
      <JobCard/>

      <footer className="h-8 sm:h-10 md:h-16 bg-slate-800 w-full flex items-center justify-center">
        <p className="text-xs text-gray-600">
          ©2024 All rights reserved. Designed by Queek
        </p>
      </footer>
    </div>
  )
}

export default home
