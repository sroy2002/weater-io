import React,{useState} from "react"
import Search from "./components/Search"
import CurrentWeather from "./components/current-weather/Current_weather";
import {WEATHER_API_URL,WEATHER_API_KEY} from "./api";
import Forecast from "./components/forecast";
import Footerr from "./components/footerr";
import { InfinitySpin } from 'react-loader-spinner';
import Particless from "./components/Particless";
function App() {

  const [submit,setSubmit] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentweather, setCurrentweather] = useState(null);
  const [forecast, setForecast] = useState(null);

  const handleSearchChange = (searchData) => {
    setSubmit(true);
    setLoading(true);
    const [lat, lon] = searchData.value.split(" ");

    const current_weather_fetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    const forecast_fetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`)
    
    Promise.all([current_weather_fetch,forecast_fetch])
    .then(async (response)=>{
      const weather_response = await response[0].json();
      const forecast_response = await response[1].json();

      setCurrentweather({city: searchData.label, ...weather_response});
      setForecast({city: searchData.label, ...forecast_response});
    })
    .catch((err)=>console.log(err))
    .finally(() => setLoading(false));
  }

  return (
    <div >
      <Particless className=" z-10" />
      <div className="w-full">
        <p className={`text-white font-coolvetica mx-5 my-2 cursor-pointer relative  z-50  ${(submit) ? 'flex justify-center text-4xl'  : 'text-2xl'}`}>weather.io</p>
      </div>
      <div className= {(!submit) ? `py-[6rem]` : `py-2 transition-all duration-500` } >
        { !submit &&
          <div className= "text-white text-center block px-6 relative " >
            <p className= "text-[2.5rem] sm:text-[3.2rem] md:text-6xl  z-50 font-serif mt-4 mb-2 " >Welcome to <span className=" text-4xl text-[#0766AD] font-coolvetica block md:inline md:text-6xl sm:text-[2.8rem]  drop-shadow-md">weather.io</span></p>
            <p className=" text-lg md:text-xl px-[25px] z-50  sm:p-0">"Discover the Forecast, Plan Your Day"</p>
          </div>
        }
        <div className=" w-full flex justify-center ">
          <Search  
              onSearchChange={handleSearchChange}
              onSubmitChange={submit} />
        </div>
      </div>
      {loading && (
        <div className=" flex flex-col justify-center items-center my-10 mb-8 relative z-50">
          <InfinitySpin color="#f2fbfb"/>
          <p className=" text-lg">loading...</p>
        </div>
      )}
      <div>
          {currentweather && <CurrentWeather data={currentweather}/> }
      </div>
      <div>
        {forecast && <Forecast data={forecast}/>}
      </div>
      {(!submit || forecast) && (
        <div>
          <Footerr/>
        </div>
      )}
    </div>
  )
}

export default App
