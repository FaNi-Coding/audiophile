 import {MouseEvent} from 'react';

 
// Click handler for the button
export const handleClick = (e:MouseEvent<HTMLButtonElement>) => {
     e.preventDefault()
     console.log(e)
}

// HREF Boilerplate
export const HrefBoiler = {
     pathname:'/category/1',
     query: {  
          id: 1,
          price: 100,
          currency: 'SEK',
          product: 'EarPhones'
     }
}