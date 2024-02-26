import { Button } from '@mantine/core';
import { useState } from 'react';

function Demo() {
 let apiData=[{}];
    
    let getdata = fetch('https://jsonplaceholder.typicode.com/users')
                .then(Response=>Response.json())
                .then(result=>apiData.push(...result))

                console.log(apiData)

  return (<>
    <Button onClick={()=>apiData.forEach(element=>console.log(element))}> Disabled link </Button>
    <h1></h1>

    </>
  );
}

export default Demo;