import { Button } from "@mantine/core";
import { useRef, useState } from "react";

function Button1(prop){

   let  [fol,chan] = useState(prop.isfollow)
    return(
        <>
        <Button  variant={fol==0?'none':'default'}
        onClick={()=>fol=='0'?chan('1'):chan('0')}
        style={{width:'40%'}}>  {fol==0?'Follow':'Unfollow'}  </Button>

           </>
    )
}

export default Button1;