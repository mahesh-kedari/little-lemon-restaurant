/**
 * Reservation Page
 * @author kedari.mahesh@gmail.com
 */
import { useReducer } from "react";
import { fetchAPI } from "../../bookingAPI";
import Heading from "../sections/Heading";
import ReservationForm from "../sections/ReservationForm";
/**
 * Reservation Component
 */
export default function Reservation() {
  function updateTimes(date:any):Array<any> { 
    return fetchAPI(date);
  }

  const output = fetchAPI(new Date());

  const [availableTimes, dispatch] = useReducer<any>(updateTimes, output);
  console.log(availableTimes);
  return (
    <>
      <Heading  pageTitle="Reservation"/>
      <ReservationForm availableTimes={availableTimes} updateTimes={dispatch} /> 
    </>
  );
}
