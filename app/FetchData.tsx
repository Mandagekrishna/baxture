import { Button } from '@mantine/core';
import { useEffect, useState } from 'react';

function FetchData(props) {
 
   // console.log(props.apiData)
    useEffect(()=>{fetch('https://jsonplaceholder.typicode.com/users')
                .then(Response=>Response.json())
                //.then(result=>props.func(result))}
                .then(result=>{
                                result.forEach(data => {data.isfollow="0"})
                                //props.func(result)
                                console.log('here is output');
                                console.log(result)
                                props.func(result)

                                
                })}       
                
                
                ,[])

             //   console.log(apiData)

  return (<>
    <Button onClick={()=>props.apiData.forEach(element=>console.log(element))}> Disabled link </Button>
    <h1></h1>

    </>
  );
}

export default FetchData;