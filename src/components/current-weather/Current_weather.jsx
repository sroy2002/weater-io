import { IoLocationSharp } from "react-icons/io5";
import { RiArrowDownWideFill } from "react-icons/ri";
import { useState } from "react";

const CurrentWeather = ({ data }) => {


    const currentTime = new Date();
    const hours = currentTime.getHours();
    const minutes = currentTime.getMinutes();
    const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][currentTime.getDay()];
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    const [open, isOpen] = useState(false);
    return (
        <div className="w-full flex justify-center items-center">
            <div className="w-[75%] sm:w-[60%] md:w-[45%] lg:w-[40%] xl:w-[30%] py-4 px-[2rem] sm:px-[1.5rem] md:px-[2.5rem] bg-slate-100 rounded-[1.5rem] drop-shadow-md">
                <div className="flex sm:justify-around justify-between items-center pb-2  my-3">
                    <div>
                        <div className="flex items-end ">
                            <IoLocationSharp className=" text-base mb-1" />
                            <p className=" text-[0.88rem] sm:text-[1.1rem]  font-normal">{data.city}</p>
                        </div>
                        <div className=" flex items-start">
                            <p className=" text-4xl sm:text-5xl lg:text-6xl xl:text-[4rem] font-bold">{Math.round(data.main.temp)}</p>
                            <span className="text-2xl font-bold pt-2">°C</span>
                        </div>
                        <div className="ml-2 text-[0.95rem] sm:text-base mt-2 flex flex-col sm:flex-row">
                            <p>{formattedTime},</p>
                            <p className="sm:ml-2">{day}</p>
                        </div>
                    </div>

                    <div className=" flex flex-col items-center">
                        <div className="md:w-[80px] md:h-[80px] w-[50px] h-[50px] sm:w-[65px] sm:h-[65px]">
                            <img src={`icons/${data.weather[0].icon}.png`} alt="icon" />
                        </div>
                        <div>
                            <p className="text-[0.9rem] md:text-base mt-2 font-thin text-center">{data.weather[0].description}</p>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between px-4 sm:px-[3.5rem] my-1 items-center font-semibold text-lg cursor-pointer" onClick={() => isOpen(!open)}>
                    <p className=" hover:drop-shadow-md">Details</p>
                    <RiArrowDownWideFill className={`text-xl transform transition-transform duration-300 ${!open ? 'rotate-0' : 'rotate-180'} hover:drop-shadow-md`} />
                </div>
                {open &&
                    <div className="px-2 sm:px-8 md:px-[4rem]">
                        <div className=" flex justify-between">
                            <p>Feels like: </p>
                            <span>{Math.round(data.main.feels_like)}°C</span>
                        </div>
                        <div className=" flex justify-between">
                            <p>Humidity: </p>
                            <span>{data.main.humidity}%</span>
                        </div>
                        <div className=" flex justify-between">
                            <p>Wind: </p>
                            <span>{data.wind.speed} m/s</span>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}
// sm:text-base
export default CurrentWeather;