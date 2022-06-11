import uuid from 'react-uuid';
// import mobile phones
import huaweiY7a from './images/items/huawei_Y7a.jpg';
import tcl10Plus from './images/items/TCL_10_Plus.jpg';
import ipad from './images/items/Ipad.jpg';
import iPhone14Pro from './images/items/iPhone_14_pro.png';
// import shelters
import gtTShirt from './images/items/GP_tShirt.jpg';
import tShirt from './images/items/T-shirt.jpg';
// import computer hardwares
import gamingHeadset from './images/items/gaming_headset.jpg';
import wifi from './images/items/universal-wifi.jpg';
import headphone from './images/items/headphone.jpg';
import applePhoneCharger from './images/items/apple_phone_charger.jpg';
import bagWithHeadphone from './images/items/bag_with_headphone.jpg';
import computerMouse from './images/items/computer_mouse.jpg';
// import laptops
import lenovoY700 from './images/items/lenovo_Y700.png';
import dellXPS17 from './images/items/dell_xps_17.jpg';
import macBook from './images/items/MacBook.jpg';
import acerLaptopAspire from './images/items/acer_laptop_aspire.jpg';
// import chairs
import computerDeskChair from './images/items/computer_desk_chair.jpg';
import gamingChair from './images/items/gaming_chair.jpg';
// import shoes
import mensCanvasShoes from './images/items/mens_canvas_shoes.jpg';
import toeWorkShoes from './images/items/toe_work_shoes.jpg';
import springAutumnShoes from './images/items/spring_autumn_shoes.jpg';
// import digital cameras
import bmdCinemaCamera from './images/items/bmd_cinema_camera.jpg';
import canonCamera from './images/items/canon_camera.jpg';
import olympusCamera from './images/items/olympus_camera.jpg';
// watches
import miniFocusMensWatch from './images/items/mini_focus_mens_watch.jpg';
import luxuryWatch from './images/items/luxury_watch.jpg';
import fngeenWatch from './images/items/fngeen_watch.jpg';
import chronographQuartzWatch from './images/items/chronograph_quartz_watch.jpg';

const items = [
  // mobile phones
  {
    id: uuid(),
    name: 'Ipad pro',
    description: 'Ipad pro with 120GB space and 8GB Ram which is not common in many countries',
    price: 400,
    house: ipad,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Huawei Y7a',
    description: 'Huawei Y7a - 84GB space and 8GB RAM - Choose Your Mobile',
    price: 300,
    house: huaweiY7a,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'TCL 10 Plus',
    description: 'TCL 10 Plus - 64GB space and 4GB RAM - Choose Your Mobile',
    price: 267,
    house: tcl10Plus,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'iPhone 14 pro',
    description: 'iPhone 14 release date features ]- 150GB space and 16GB Ram',
    price: 1072,
    house: iPhone14Pro,
    popularity: true,
  },
  // phone charger
  {
    id: uuid(),
    name: 'Apple Phone charger',
    description: 'Universal apple phone charger with high capacity which store charges',
    price: 10,
    house: applePhoneCharger,
    popularity: false,
  },
  // watches
  {
    id: uuid(),
    name: 'Mini Focus Mens Watch',
    description: 'Mini Focus 0285 Mens Watch Top Brand Stainless Steel Luxury Sport Date Clock Watch Men Waterproof Quartz Watch',
    price: 500,
    house: miniFocusMensWatch,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Luxury Watch',
    description: '2022 Top Brand Luxury Watch Fashion Casual Military Quartz Sports Wristwatch Full Steel Waterproof',
    price: 450,
    house: luxuryWatch,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Chronograph Quartz Watch',
    description: 'New Fashion Mens Watches Stainless Steel Top Brand Luxury Sports Chronograph Quartz Watch',
    price: 350,
    house: chronographQuartzWatch,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Fngeen Watch',
    description: "Fngeen Watch Brand Automatic Mesh Belt Men's Waterproof Luminous Diamond Double-sided Hollow Tourbillon",
    price: 400,
    house: fngeenWatch,
    popularity: true,
  },
  // chairs
  {
    id: uuid(),
    name: 'Gaming Chair',
    description: 'Blue Whale Massage Gaming Chair with Footrest',
    price: 70,
    house: gamingChair,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Computer Desk Chair',
    description: 'Classic Puresoft Padded Mid-Back Office Computer Desk Chair with Armrest',
    price: 86,
    house: computerDeskChair,
    popularity: false,
  },
  // computer hardwares
  {
    id: uuid(),
    name: 'Portable universal mifi',
    description: 'New portable universal mifi that can use any sim card',
    price: 50,
    house: wifi,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Bag with headphone',
    description: 'Popular Bag which can be use to play music and chargerble',
    price: 70,
    house: bagWithHeadphone,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Computer Mouse',
    description: 'Computer mouse which can connect using USB or bluetooth connection',
    price: 13,
    house: computerMouse,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Headphone',
    description: 'Headphone with microphone and volume emulator',
    price: 17,
    house: headphone,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'BENGOO Headset',
    description: 'BENGOO G9000 Stereo Gaming Headset for PS4 PC Xbox One PS5 Controller, Noise Cancelling Over Ear Headphones with Mic',
    price: 17,
    house: gamingHeadset,
    popularity: true,
  },
  // laptops
  {
    id: uuid(),
    name: 'MacBook pro',
    description: '16GB ram, hash colour, 1TB space and high quality graphics',
    price: 1000,
    house: macBook,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Lenovo Y700 14',
    description: 'Lenovo Y700 14 a Good Gaming Laptop, 16GB ram, hash colour, 500GB space and high quality graphics',
    price: 600,
    house: lenovoY700,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Dell XPS 17',
    description: 'Dell XPS 17 Laptop with 10th Gen Intel Core i7 CPU',
    price: 800,
    house: dellXPS17,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Acer Laptop Aspire',
    description: 'Acer Laptop Aspire E1 E1-532-2635 Intel Celeron 2957U (1.40 GHz) 4 GB',
    price: 800,
    house: acerLaptopAspire,
    popularity: false,
  },
  // digital cameras
  {
    id: uuid(),
    name: 'Cinema Camera',
    description: 'Blackmagic Design 2.5K True Digital Cinema Camera EF with Built-In SSD',
    price: 60,
    house: bmdCinemaCamera,
    popularity: true,
  },
  {
    id: uuid(),
    name: 'Canon Camera',
    description: 'Buy a Canon PowerShot G7 X Mark II Compact Digital Camera Black online',
    price: 500,
    house: canonCamera,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Olympus Camera',
    description: '12MP Digital Camera with 26x Wide-Angle Optical Zoom, 2.7" LCD and HDMI',
    price: 400,
    house: olympusCamera,
    popularity: false,
  },
  // Dresses
  {
    id: uuid(),
    name: 'T-shirt',
    description: 'Medium white T-shirt made with cotton',
    price: 10,
    house: tShirt,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Graphic Printed T-Shirt',
    description: 'CreativiT Graphic Printed T-Shirt for Unisex Everyday is a Good Day to',
    price: 10,
    house: gtTShirt,
    popularity: false,
  },
  // shoes
  {
    id: uuid(),
    name: 'Spring & Autumn Shoes',
    description: 'Nice Men Shoes Spring And Autumn New Arrival Men Flats Casual Leather',
    price: 20,
    house: springAutumnShoes,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Toe Work Shoes',
    description: "Men's Rockport Works Nice Ride Composite Toe Work Shoes, Brown",
    price: 15,
    house: toeWorkShoes,
    popularity: false,
  },
  {
    id: uuid(),
    name: 'Mens canvas shoes',
    description: 'Time to source smarter! | Mens sneakers casual, Mens canvas shoes',
    price: 15,
    house: mensCanvasShoes,
    popularity: true,
  },
];

export default items;
