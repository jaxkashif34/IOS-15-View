import { useState } from "react";
import {
  HiChartBar,
  HiWifi,
  HiLockClosed,
  HiOutlineLightBulb,
  HiCamera,
} from "react-icons/hi";
import { IoBatteryFullSharp } from "react-icons/io5";

import iphoneImage from "./Assets/iphoneWaves.webp";
import Surfing_sun from "./Assets/Surfing_sun.jfif";
import nbaFinals from "./Assets/nbaFinals.jfif";
import sarah from "./Assets/sarah.jpg";
import Polyworks from "./Assets/PloyWorks.jpg";
import KeyStone from "./Assets/keyStone.webp";

const getTime = () => {
  let ALLdate = new Date();
  let hours = ALLdate.getHours();
  let minutes = ALLdate.getMinutes();
  let day = ALLdate.getDay();
  let month = ALLdate.getMonth();
  let date = ALLdate.getDate();
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return {
    hours: hours > 12 ? hours - 12 : hours,
    minutes: minutes < 10 ? "0" + minutes : minutes,
    day: days[day],
    month: months[month],
    date: date,
  };
};

function App() {
  const [time, setTime] = useState(getTime());
  setInterval(() => {
    setTime(getTime());
  }, 1000);
  return (
    <div>
      <div className="px-10 min-h-screen bg-gradient-to-r from-[#0093E9] to-[#80D0C7] flex justify-center items-center">
        <div className="relative h-[650px] w-[370px] bg-black rounded-[60px] shadow-xl overflow-hidden border-[14px] border-black">
          <img
            src={iphoneImage}
            alt=""
            className="absolute object-cover w-full h-full inset-0"
          />
          <div className="absolute top-0 inset-x-0">
            <div className="h-6 w-40 bg-black flex justify-end items-center overflow-hidden mx-auto rounded-b-3xl">
              <div className="flex items-center w-2/3 justify-start space-x-2">
                <div className="h-1.5 w-12 rounded-full bg-gray-800"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-gray-900 flex justify-start items-start ">
                  <div className="w-1 h-1 bg-gray-400/50 shadow-2xl rounded-full mt-[2px] ml-[1px]"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="mt-2 mr-5 flex justify-end space-x-1">
              <HiChartBar className="text-white h-4" />
              <HiWifi className="text-white h-4" />
              <IoBatteryFullSharp className="text-white h-4" />
            </div>
            <div className="h-0.5 w-10 bg-white rounded-full mr-7 mt-1 ml-auto"></div>
            <div className="mt-1 flex flex-col items-center">
              <HiLockClosed className="text-white h-7 w-7" />
              <p className="mt-1 text-white text-6xl font-extralight">{`${time.hours}:${time.minutes}`}</p>
              <p className="mt-1 text-white text-lg font-light">
                {`${time.day}, ${time.month} ${time.date}`}
              </p>
            </div>
            <div className="mt-2 mx-2 relative">
              <div className="absolute -bottom-2 inset-x-0 h-full bg-white/30 backdrop-blur-md rounded-3xl scale-95 origin-bottom shadow-sm"></div>
              <div className="absolute -bottom-4 inset-x-0 h-full bg-white/10 backdrop-blur-md rounded-2xl scale-[0.85] origin-bottom"></div>
              <div className="p-4 bg-white/40 backdrop-blur-md rounded-3xl shadow-sm">
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs font-bold">9:30 AM</p>
                    <h2 className="text-lg font-bold">Your Morning Summary</h2>
                  </div>
                  <span className="text-white flex justify-center items-center rounded-full w-8 h-8 bg-gray-500">
                    11
                  </span>
                </div>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  <div>
                    <img src={Surfing_sun} alt="" className="rounded-lg" />
                    <h3 className="mt-2 text-xs font-bold leading-tight">
                      Surfing: heals the soul, kills the ribs
                    </h3>
                    <p className="mt-1 text-xs">
                      It's all fun and thrills untill you get sucked over the
                      falls.
                    </p>
                  </div>
                  <div>
                    <img src={nbaFinals} alt="" className="rounded-lg" />
                    <h3 className="mt-2 text-xs font-bold leading-tight">
                      The NBA Finals are here!
                    </h3>
                    <p className="mt-1 text-xs">
                      Bucks vs Suns is Shaping up to be a very intriguing
                      series.
                    </p>
                  </div>
                </div>
                <hr className="mt-2 border-black/20" />
                <div className="mt-2 grid grid-cols-3 gap-1 items-end">
                  <div className="col-span-2">
                    <h3 className="text-sm font-bold">More Updates</h3>
                    <p className="mt-0.5 text-xs">
                      Polyworks, Keystone 6 and Sarah Drasner
                    </p>
                  </div>
                  <ul className="flex -space-x-4 flex-row-reverse space-x-reverse">
                    <li>
                      <img
                        src={Polyworks}
                        className="h-8 w-8 rounded-xl object-cover"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={KeyStone}
                        className="h-8 w-8 rounded-xl object-cover"
                        alt=""
                      />
                    </li>
                    <li>
                      <img
                        src={sarah}
                        className="h-8 w-8 rounded-xl object-cover"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 inset-x-0 h-20">
            <div className="flex justify-between px-10">
              <button className="bg-gray-800/40 rounded-full p-2 backdrop-blur-md">
                <HiOutlineLightBulb className="h-6 w-6 text-white" />
              </button>
              <button className="bg-gray-800/40 rounded-full p-2 backdrop-blur-md">
                <HiCamera className="h-6 w-6 text-white" />
              </button>
            </div>
          </div>
          <div className="absolute bottom-1 inset-x-0">
            <div className="mx-auto h-1 w-28 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
