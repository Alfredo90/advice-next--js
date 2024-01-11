"use client";

import Dice from "../../../assets/icon-dice.svg";
import Divider from "../../../assets/pattern-divider-desktop.svg";
import Image from "next/image";
import { useState } from "react";

const Card = () => {
  const [advices, setAdvices] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const fetchAdvice = async () => {
    try {
      setIsLoading(true);
      const res = await fetch("https://api.adviceslip.com/advice");
      const data = await res.json();
      setAdvices(data.slip);
    } catch (err) {
      console.error("Error fetching data", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClick = async () => {
    await fetchAdvice();
  };

  return (
    <div className="   rounded-xl bg-slate-500 w-1/3 h-2/4 flex flex-col justify-evenly items-center  relative ">
      <div className=" flex flex-col justify-evenly gap-10 items-center w-fit h-fit" >
        <h4 className="text-sm">ADVICE #{advices.id}</h4>
        <h1 className="text-2xl text-wrap text-center tracking-tighter ">
          "{advices.advice}"
        </h1>
      </div>
      <div>
        <Image src={Divider} alt="divder" width={500} />
      </div>
      <div className=" bg-teal-500 flex justify-center items-center rounded-full absolute w-14 h-14 mt-96 -my-16">
          <button className={isLoading && "animate-spin "}  type="submit" onClick={handleClick} disabled={isLoading}>
            <Image
              src={Dice}
              width={30}
              height={30}
              alt="picture of dice button"
            />
          </button>
      </div>
    </div>
  );
};
export default Card;
