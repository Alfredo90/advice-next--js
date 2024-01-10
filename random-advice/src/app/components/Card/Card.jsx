"use client";

import { useEffect, useState } from "react";

import Advice from "../Advice/Advice";

const Card = () => {
  const [advices, setAdvices] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  // const handleClick = async () => {
  //   try {
  //       const res = await fetch('https://api.adviceslip.com/advice')
  //       const data = await res.json()
  //       setAdvices(data.slip)
  //   } catch (err) {
  //       console.log(err.message)
  //   }
  // }

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
    // const delay = 5000;
    // setTimeout(() => {
    //   handleClick();
    // }, delay);
  };

  return (
    <div className="border-2 flex flex-col justify-center items-center">
      <h2>ADVICE #{advices.id}</h2>
      <h1>"{advices.advice}"</h1>

      <button type="submit" onClick={handleClick} disabled={isLoading}>
        {isLoading ? 'Loading' : 'Fetch Advice'}
      </button>
    </div>
  );
};
export default Card;
