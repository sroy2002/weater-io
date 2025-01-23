import React from 'react'

function Footerr() {
  return (
    <footer className=' mt-[150px] h-[100px] text-center text-sm mb-4 relative'>
        <hr className=' mx-[3rem] lg:mx-[8rem] my-5 border-gray-300'/>
         <p className='text-slate-200'>&copy; {new Date().getFullYear()} Suranjana Roy. All rights reserved.</p>
         <p className='text-slate-200'>Powered by <a href="https://openweathermap.org/" className="text-blue-700 hover:underline">OpenWeather</a> and <a href="https://www.geodb-cities-api.com/" className="text-blue-700 hover:underline">GeoDB Cities</a></p>
    </footer>
  )
}

export default Footerr
