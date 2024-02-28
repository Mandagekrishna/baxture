import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconWebhook, IconMail,IconPhone,IconUser,IconTrash } from '@tabler/icons-react';
import classes from './Css/CardWithStats.module.css';
import ChangeFollow from './ChangeFollow'
import exp from 'constants';
import { useEffect, useState } from 'react';
import { url } from 'inspector';



export function CardWithStats(props) {
 
 

 return(
  props.Data.map((data)=>
  (
    

    <Card withBorder radius="md" className={classes.card} style={{width:'500px', display:'inline-block',margin:'20px'}}>
        <Card.Section className={classes.imageSection}>
             <Image style={{height:'200px', borderRadius:'100px'}} src={`https://api.dicebear.com/7.x/initials/svg?seed=${data.name}`} alt="Name here" />
        </Card.Section>

       
          <div style={{textAlign:'center', display:'block'}}>
            <Text   fw={500}>{data.name}</Text>
          </div>

          <Center key={data.id}>
      <IconMail  size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{data.email}</Text>
    </Center>
          
    <Center key={data.id}>
      <IconPhone size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{data.phone}</Text>
    </Center>

    <Center key={data.id}>
      <IconWebhook size="1.05rem" className={classes.icon} stroke={1.5} />
      <Text size="xs">{data.website}</Text>
    </Center>

    <Group justify="center">
    <ChangeFollow isfollow={data.isfollow}>Follow</ChangeFollow>

    <Button variant='default' style={{width:'40%', margin:'10px'}}><IconTrash></IconTrash>Delete</Button>
      <h1>{data.isfollow=='0'?'default':'none'}</h1>
      </Group>

   





        
     
   
  </Card>
  ))

)

}

export default CardWithStats;

