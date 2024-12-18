import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);

const Section3 = () => {
    const bars = [
        { id: 1, target: "Robust Solution", title: "Robust Solution", description: "Large format, rugged/ shippable patterns. Low CTE and ultra-low ash." },
        { id: 2, target: "High Precision", title: "High Precision", description: "Advanced manufacturing technology ensures exact dimensions." },
        { id: 3, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 4, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
        { id: 5, target: "Cost Effective", title: "Cost Effective", description: "Optimized solutions to reduce material and production costs." },
    ];

  

    return (
        <div className="w-full sm:min-h-fit min-h-screen py-[2vw] flex flex-col items-center">
            <h1 className="sm:text-[10vw] text-[3vw] font-semibold sm:mb-[6vw] mb-[3vw]">Foundry Qualified</h1>
            <div className="sm:w-[92%] w-[75%]">
                {bars.map((bar,i) => (
                    <div
                        key={bar.id}
                        className={`w-full relative border-t ${i === bars.length - 1 && "border-b"} sm:py-[4vw] py-[.5vw] flex sm:flex-col justify-between border-black/20 px-[1.7vw]`}
                    >
                        <div className="flex items-center sm:hidden text-[2.5vw]">
                            <h2>{bar.title}</h2>
                        </div>
                        <div className="flex  sm:w-full sm:mt-[2vw] w-[49%] sm:items-start items-center">
                            <img
                                className="sm:w-[20vw] w-[10vw] sm:absolute sm:top-[10%] sm:right-0"
                                src="https://res.cloudinary.com/hyac47p8z/image/upload/v1717843297/01_Photopolymer_9d82e8d51a.gif"
                                alt=""
                            />
                            <div>
                                <h4 className="sm:text-[5vw] text-[1.1vw] font-semibold">{bar.title}</h4>
                                <p className="sm:text-[4.5vw] text-[#7F7F7F] sm:w-[80%]">{bar.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Section3;
