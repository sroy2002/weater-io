import React from "react";
import { RiArrowDownWideFill } from "react-icons/ri";
import { FaRegCalendarCheck } from "react-icons/fa6";
import {
    Accordion,
    AccordionItem,
    AccordionItemButton,
    AccordionItemHeading,
    AccordionItemPanel
} from "react-accessible-accordion";

const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const Forecast = ({ data }) => {
    const dayInWeek = new Date().getDay();
    const forecastDay = days.slice(dayInWeek, days.length).concat(days.slice(0, dayInWeek));

    return (
        <div className=" xl:px-[15rem] lg:px-[8rem] md:px-[4rem] px-[2rem] relative z-50 ">
            <label className=" text-2xl lg:text-[2rem]  my-8 text-white flex items-center">
                <FaRegCalendarCheck className=" mx-2" />
                <p className=" border-b-[3px] font-coolvetica font-medium"> Daily Forecast : </p>
            </label>
            <Accordion allowZeroExpanded className="flex lg:flex-row flex-col justify-center flex-wrap">
                {data.list.slice(0, 7).map((item, index) => (
                    <AccordionItem key={index} className="bg-white lg:w-[220px] lg:h-[18rem] my-4 mx-2 p-4 rounded-[1rem] drop-shadow-md ">
                        <AccordionItemHeading>
                            <AccordionItemButton >
                                <div className="flex lg:flex-col items-center lg:justify-center justify-between">
                                    <div className=" flex lg:flex-col lg:justify-center items-center justify-around">
                                        <div className="flex lg:flex-col justify-center items-center  lg:mr-0">
                                            <label className="font-medium  font-coolvetica lg:text-lg ">{forecastDay[index]}</label>
                                            <div className="w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] m-4 order-first lg:order-none">
                                                <img src={`icons/${item.weather[0].icon}.png`} alt="weather-icon" />
                                            </div>
                                        </div>
                                       
                                    </div>
                                    <div className="flex flex-col justify-center items-center m-1">
                                        <div className="flex lg:flex-col items-center justify-center my-1">
                                                <label className="font-thin text-[0.8rem] text-center mb-1 italic mr-2"> {item.weather[0].description} </label>
                                                <label className="font-thin lg:text-[1.2rem] font-extrabold mx-2">{Math.round(item.main.temp)}°C</label>
                                                <div className=" cursor-pointer lg:hidden block mr-2 text-lg">
                                                    <RiArrowDownWideFill  />
                                                </div>
                                        </div>
                                        <div className="text-[0.8rem] w-full mx-4 hidden lg:block">
                                            <div className="flex justify-between">
                                                <label className=" font-semibold">Feels like:</label>
                                                <label> {item.main.feels_like}°C</label>
                                            </div>
                                            <div className="flex justify-between">
                                                <label className=" font-semibold">Humidity:</label>
                                                <label> {item.main.humidity}%</label>
                                            </div>
                                            <div className="flex justify-between">
                                                <label className=" font-semibold">Pressure:</label>
                                                <label> {item.main.pressure} hPa</label>
                                            </div>
                                            <div className="flex justify-between">
                                                <label className=" font-semibold">Wind:</label>
                                                <label> {item.wind.speed} m/s</label>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </AccordionItemButton>
                        </AccordionItemHeading>

                        <AccordionItemPanel className="lg:hidden">
                            <hr className="border-t-2 border-gray-300 my-2 lg:hidden" />
                            <div className="grid grid-cols-2 justify-items-center text-sm my-4">
                                <div className="">
                                    <label className="mr-3 font-semibold">Feels like:</label>
                                    <label> {item.main.feels_like}°C</label>
                                </div>
                                <div className="">
                                    <label className="mr-3 font-semibold">Humidity:</label>
                                    <label> {item.main.humidity}%</label>
                                </div>
                                <div className="">
                                    <label className="mr-3 font-semibold">Pressure:</label>
                                    <label> {item.main.pressure} hPa</label>
                                </div>
                                <div className="">
                                    <label className="mr-3 font-semibold">Wind:</label>
                                    <label> {item.wind.speed} m/s</label>
                                </div>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    )
}

export default Forecast;


