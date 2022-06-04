import uuid from 'react-uuid';
// import mobile phones
import huawei_Y7a from "./images/items/huawei_Y7a.jpg";
import TCL_10_Plus from "./images/items/TCL_10_Plus.jpg";
import Ipad from "./images/items/Ipad.jpg";
import iPhone_14_pro from "./images/items/iPhone_14_pro.png";
// import shelters
import GP_tShirt from "./images/items/GP_tShirt.jpg";
import tShirt from "./images/items/T-shirt.jpg";
// import computer hardwares 
import gaming_headset from "./images/items/gaming_headset.jpg";
import Wifi from "./images/items/universal-wifi.jpg";
import headphone from "./images/items/headphone.jpg";
import apple_phone_charger from "./images/items/apple_phone_charger.jpg";
import bag_with_headphone from "./images/items/bag_with_headphone.jpg";
import computer_mouse from "./images/items/computer_mouse.jpg";
// import laptops
import lenovo_Y700 from "./images/items/lenovo_Y700.png";
import dell_xps_17 from "./images/items/dell_xps_17.jpg";
import MacBook from "./images/items/MacBook.jpg";
import acer_laptop_aspire from "./images/items/acer_laptop_aspire.jpg";
// import chairs
import computer_desk_chair from "./images/items/computer_desk_chair.jpg";
import gaming_chair from "./images/items/gaming_chair.jpg";
// import shoes
import mens_canvas_shoes from "./images/items/mens_canvas_shoes.jpg";
import toe_work_shoes from "./images/items/toe_work_shoes.jpg";
import spring_autumn_shoes from "./images/items/spring_autumn_shoes.jpg";
// import digital cameras
import bmd_cinema_camera from "./images/items/bmd_cinema_camera.jpg";
import canon_camera from "./images/items/canon_camera.jpg";
import olympus_camera from "./images/items/olympus_camera.jpg";
let items = [
    // mobile phones
    {
        id: uuid(),
        name: 'Ipad pro',
        discription: 'Ipad pro with 120GB space and 8GB Ram which is not common in many countries',
        price: 400,
        house: Ipad,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Huawei Y7a',
        discription: 'Huawei Y7a - 84GB space and 8GB RAM - Choose Your Mobile',
        price: 300,
        house: huawei_Y7a,
        popularity: false
    },
    {
        id: uuid(),
        name: 'TCL 10 Plus',
        discription: 'TCL 10 Plus - 64GB space and 4GB RAM - Choose Your Mobile',
        price: 267,
        house: TCL_10_Plus,
        popularity: false
    },
    {
        id: uuid(),
        name: 'iPhone 14 pro',
        discription: 'iPhone 14 release date features ]- 150GB space and 16GB Ram',
        price: 1072,
        house: iPhone_14_pro,
        popularity: true
    },
    // phone charger
    {
        id: uuid(),
        name: 'Apple Phone charger',
        discription: 'Universal apple phone charger with high capacity which store charges',
        price: 10,
        house: apple_phone_charger,
        popularity: true
    },
    // chairs
    {
        id: uuid(),
        name: 'Apple Phone charger',
        discription: 'Blue Whale Massage Gaming Chair with Footrest',
        price: 70,
        house: gaming_chair,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Computer Desk Chair',
        discription: 'Classic Puresoft Padded Mid-Back Office Computer Desk Chair with Armrest',
        price: 86,
        house: computer_desk_chair,
        popularity: true
    },
    // computer hardwares
    {
        id: uuid(),
        name: 'Portable universal mifi',
        discription: 'New portable universal mifi that can use any sim card',
        price: 50,
        house: Wifi,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Bag with headphone',
        discription: 'Popular Bag which can be use to play music and chargerble',
        price: 70,
        house: bag_with_headphone,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Computer Mouse',
        discription: 'Computer mouse which can connect using USB or bluetooth connection',
        price: 13,
        house: computer_mouse,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Headphone',
        discription: 'Headphone with microphone and volume emulator',
        price: 17,
        house: headphone,
        popularity: true
    },
    {
        id: uuid(),
        name: 'BENGOO Headset',
        discription: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic',
        price: 17,
        house: gaming_headset,
        popularity: true
    },
    // laptops
    {
        id: uuid(),
        name: 'MacBook pro',
        discription: '16GB ram, hash colour, 1TB space and high quality graphics',
        price: 1000,
        house: MacBook,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Lenovo Y700 14',
        discription: 'Lenovo Y700 14 a Good Gaming Laptop, 16GB ram, hash colour, 500GB space and high quality graphics',
        price: 600,
        house: lenovo_Y700,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Dell XPS 17',
        discription: 'Dell XPS 17 Laptop with 10th Gen Intel Core i7 CPU',
        price: 800,
        house: dell_xps_17,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Acer Laptop Aspire',
        discription: 'Acer Laptop Aspire E1 E1-532-2635 Intel Celeron 2957U (1.40 GHz) 4 GB',
        price: 800,
        house: acer_laptop_aspire,
        popularity: true
    },
    // digital cameras
    {
        id: uuid(),
        name: 'Cinema Camera',
        discription: 'Blackmagic Design 2.5K True Digital Cinema Camera EF with Built-In SSD',
        price: 60,
        house: bmd_cinema_camera,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Canon Camera',
        discription: 'Buy a Canon PowerShot G7 X Mark II Compact Digital Camera Black online',
        price: 500,
        house: canon_camera,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Olympus Camera',
        discription: '12MP Digital Camera with 26x Wide-Angle Optical Zoom, 2.7" LCD and HDMI',
        price: 400,
        house: olympus_camera,
        popularity: false
    },
    // Dresses
    {
        id: uuid(),
        name: 'T-shirt',
        discription: 'Medium white T-shirt made with cotton',
        price: 10,
        house: tShirt,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Graphic Printed T-Shirt',
        discription: 'CreativiT Graphic Printed T-Shirt for Unisex Everyday is a Good Day to',
        price: 10,
        house: GP_tShirt,
        popularity: false
    },
    // shoes
    {
        id: uuid(),
        name: 'Spring & Autumn Shoes',
        discription: 'Nice Men Shoes Spring And Autumn New Arrival Men Flats Casual Leather',
        price: 20,
        house: spring_autumn_shoes,
        popularity: true
    },
    {
        id: uuid(),
        name: 'Toe Work Shoes',
        discription: "Men's Rockport Works Nice Ride Composite Toe Work Shoes, Brown",
        price: 15,
        house: toe_work_shoes,
        popularity: false
    },
    {
        id: uuid(),
        name: 'Mens canvas shoes',
        discription: "Time to source smarter! | Mens sneakers casual, Mens canvas shoes",
        price: 15,
        house: mens_canvas_shoes,
        popularity: true
    }
]

export { items };