import React, { useRef } from "react";
import Linechart from "../Charts/Linechart";
import { useInView } from "framer-motion";
import Piechart from "../Charts/Piechart";
import { useTheme } from "../../theme-provider";
import TableData from "./TableData";
import Secuity from "../../../assets/Security.png";
import Slack from "../../../assets/Slack.png";
import Zoom from "../../../assets/Zoom.png";
import Viber from "../../../assets/Viber.png";
import Telegram from "../../../assets/Telegram.png";
import Paypal from "../../../assets/Paypal.png";
import Linkedin from "../../../assets/LinkedIn.png";

function Features() {
  const { theme } = useTheme();
  const chartRef = useRef(null);
  const isInView = useInView(chartRef, { amount: 0.5 });

  const chartData = [
    { month: "January", desktop: 186, mobile: 80 },
    { month: "February", desktop: 305, mobile: 200 },
    { month: "March", desktop: 237, mobile: 120 },
    { month: "April", desktop: 73, mobile: 190 },
    { month: "May", desktop: 209, mobile: 130 },
    { month: "June", desktop: 214, mobile: 140 },
  ];

  const chartConfig = {
    desktop: {
      label: "Desktop",
      color: "#2563eb",
    },
    mobile: {
      label: "Mobile",
      color: "#60a5fa",
    },
    useTheme,
  };

  return (
    <div className=" w-full mt-20 bg-neutral-50 p-1">
      <div className=" w-fit mx-auto mt-16">
        <h1 className=" text-5xl font-bold font-Soria">
          Some of our Top Features
        </h1>
        <p className=" w-fit mx-auto">
          We Provide these features in different packages
        </p>
      </div>
      <div className="feature-container w-10/12 mx-auto my-6">
        <div className="grid grid-cols-12 grid-rows-40 gap-4">
          <div
            className="col-span-6 row-span-26 flex flex-col items-center rounded-xl hover:shadow-xl bg-gray-100"
            ref={chartRef}
          >
            <div className=" pt-4">
              {isInView && (
                <Linechart chartConfig={chartConfig} chartData={chartData} />
              )}
            </div>

            <p className=" font-bold pt-4">Invest as low as $10</p>
            <p className=" pb-4">
              Get Proper investment plan according to stock price with less
              effort
            </p>
          </div>
          <div className="col-span-6 row-span-26 bg-gray-100 rounded-lg flex flex-col justify-center items-center  hover:shadow-xl">
            <div className=" border rounded-lg mx-auto pt-5">
              {isInView && <TableData classname={"w-fit mx-auto border-2 bg-white  "} />}
            </div>
            <h1 className=" font-bold pt-4">Just Add Bank Account</h1>
            <div>Keep Track of all expenses to achieve Goals</div>
          </div>

          <div className="col-span-4 row-span-26 hover:shadow-lg flex flex-col justify-center items-center bg-cyan-300 rounded-2xl">
            <div className=" row-span-9 bg-red-500  "></div>
            <div className=" row-span-3">
              <p className=" font-bold "> Here will need to add</p>
              <p>I love her she loves someone else nigga</p>
            </div>
          </div>

          <div className="col-span-4 row-span-26 grid grid-rows-12 gap-2">
            <div className="row-span-8 bg-black rounded-xl flex justify-end">
              <img
                src={Secuity}
                alt=""
                className=" h-64 w-96 translate-y-4 rounded-xl"
              />
            </div>
            <div className="row-span-4 ">
              <p className=" font-bold">Secure and Relaible</p>
              <p>
                For anyone to start their proftfolio, no matter the size of
                wallet
              </p>
            </div>
          </div>
          <div className="col-span-4 row-span-26 grid grid-cols-3 grid-rows-12 gap-3">
            <div className="col-span-1 rounded-lg row-span-4 ">
              <img src={Paypal} alt="" className="  rounded-2xl w-32 bg-blue-700" />
            </div>
            <div className="col-span-3 row-span-4 flex flex-row justify-center gap-2 border rounded-2xl bg-gray-100">
              <img src={Zoom} alt="" className="  rounded-2xl w-32 " />
              <img src={Viber} alt="" className="  rounded-2xl w-32" />
            </div>
            <div className="col-span-4 bg-gray-100 row-span-4 flex flex-row gap-2 rounded-2xl">
              <img src={Telegram} alt="" className="  rounded-2xl w-32" />
              <img src={Linkedin} alt="" className="  rounded-2xl w-32" />
              <img src={Slack} alt="" className="  rounded-2xl   w-32" />
            </div>
            <div className="col-span-4  row-span-4">
              <p className=" font-bold ">Avaible for Beginner to Experienced</p>
              <p className="">
                Compatible for multiple Equities and Stocks as per user response
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Features;
