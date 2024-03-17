import {  Button } from '@mantine/core';
import { IconWebhook, IconMail,IconPhone,IconUser,IconTrash } from '@tabler/icons-react';



function DeleteMember(props){
   let idd = props.id;
   let funcc = props.func
    return(
        <Button onClick={()=>funcc(idd)} variant='default' style={{width:'40%', margin:'10px'}} ><IconTrash></IconTrash>Delete</Button>
    )

}

export default DeleteMember;