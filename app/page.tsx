"use client"
import FetchData from "./FetchData";
import Card from "./CardWithStats"
import { useState } from "react";
export default function HomePage() {

  let [apiData,setApi]=useState([{}]);
 //{console.log(apiData)}
  return <div>Home page
    <FetchData apiData={apiData} func ={setApi}/>
    
    <Card Data={apiData}/>
  </div>;
}
