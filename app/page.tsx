"use client"
import FetchData from "./FetchData";
import Card from "./CardWithStats"
import { useState } from "react";
export default function HomePage() {

  let [apiData,setApi]=useState([{}]);

  


  function func(id){
    /*
    setApi(apiData.filter(element => element.id !== id))
    console.log('filter',apiData)
    */
      setApi(prevstate => prevstate.filter(element=> element.id!==id))

    /*
    let index =0;
    apiData.forEach(element => {if(element.id==id)
      index =apiData.indexOf(element)
      
    });
    console.log(index)
    apiData.splice(index,1)
    setApi(apiData)
    console.log('filter',apiData)*/
  }

 //{console.log(apiData)}
  return <div>Home page
    <FetchData apiData={apiData} func ={setApi}/>
    
    <Card Data={apiData} updatefun ={func} />
  </div>;
}
