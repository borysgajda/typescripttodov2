import React, { useRef, useState } from "react";
import { AiOutlineBell } from "react-icons/ai";
import * as S from "../styled";

export const LocalDate = () => {
  const newDate = useRef(new Date());
  const [currentDay] = useState(newDate.current.getDate());
  const [currentHours, setCurrentHours] = useState(newDate.current.getHours());
  const [currentSeconds, setCurrentSeconds] = useState(newDate.current.getSeconds());
  const [currentMinutes, setCurrentMinutes] = useState(newDate.current.getMinutes());

  setInterval(() => {
    setCurrentHours(newDate.current.getHours());
    setCurrentMinutes(newDate.current.getMinutes());
    setCurrentSeconds(newDate.current.getSeconds());
  }, 1000);


  
  const monthIndex = new Date().getMonth();
  const getMonthName = () => {
    const month = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return month[monthIndex - 1];
  };
  const Minutes = `${currentMinutes}`
  const Hours = `${currentHours}`
  const Seconds = `${currentSeconds}`
  const monthName = getMonthName();
  const day = `${currentDay}`;

  return (
    <>
      <S.Date>
        <AiOutlineBell /> {monthName} {day} {Hours}:{Minutes}:{Seconds}
      </S.Date>
    </>
  );
};
export default LocalDate;
