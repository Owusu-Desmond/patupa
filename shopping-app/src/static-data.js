import uuid from 'react-uuid';
import Ipad from "./images/items/Ipad.jpg";
import Wifi from "./images/items/wifi.jpg";
import MacBook from "./images/items/MacBook.jpg";
import tShirt from "./images/items/T-shirt.jpg";
import headphone from "./images/items/headphone.jpg";
let items = [
    {
        id : uuid(),
        name : 'Ipad pro',
        discription : 'This Ipad is not common in many countries',
        price : 400,
        house : Ipad
    },
    {
        id : uuid(),
        name : 'Portable universal mifi',
        discription : 'New portable universal mifi that can pick any sim card',
        price : 50,
        house : Wifi
    },
    {
        id : uuid(),
        name : 'MacBook pro',
        discription : '16GB ram, hash colour, 1TB space and high quality graphics',
        price : 1000,
        house : MacBook
    },
    {
        id : uuid(),
        name : 'T-shirt',
        discription : 'Medium white T-shirt made with cotton',
        price : 10,
        house : tShirt
    },
    {
        id : uuid(),
        name : 'Headphone',
        discription : 'Headphone with microphone and volume emulator',
        price : 17,
        house : headphone
    }
]

export {items};