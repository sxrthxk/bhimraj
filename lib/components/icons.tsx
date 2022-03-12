import bath from "../assets/icons/icons8-bath-32.png";
import airconditioner from "../assets/icons/icons8-air-conditioner-32.png";
import bed from "../assets/icons/icons8-bed-32.png";
import drinks from "../assets/icons/icons8-champagne-32.png";
import dryer from "../assets/icons/icons8-hair-dryer-32.png";
import phone from "../assets/icons/icons8-telephone-32.png";
import tv from "../assets/icons/icons8-hdtv-32.png";
import coffee from "../assets/icons/icons8-cafe-32.png";
import wifi from "../assets/icons/icons8-wi-fi-32.png";

import restaurant from "../assets/icons/service_icons/icons8-waiter-50.png";
import spa from "../assets/icons/service_icons/icons8-spa-50.png";
import roomService from "../assets/icons/service_icons/icons8-service-bell-50.png";
import pool from "../assets/icons/service_icons/icons8-swimming-50.png";
import ac from "../assets/icons/service_icons/icons8-air-conditioner-50.png";
import wifiService from "../assets/icons/service_icons/icons8-wi-fi-50.png";

export const icons = {
  bath: { name: "bathroom", png: bath },
  airconditioner: { name: "conditioning", png: airconditioner },
  bed: { name: "queen", png: bed },
  drinks: { name: "mini bar", png: drinks },
  dryer: { name: "hair dryer", png: dryer },
  phone: { name: "room services", png: phone },
  tv: { name: "cable tv", png: tv },
  tea: { name: "tea/coffee", png: coffee },
  wifi: { name: "free wifi", png: wifi },
};

export const serviceIcons: {
  [name: string]: { name: string; png: StaticImageData; description: string };
} = {
  restaurant: {
    name: "restaurant",
    png: restaurant,
    description: "Restaurant, open from 7AM to 11 PM",
  },
  spa: { name: "spa", png: spa, description: "Spa open from 9AM to 7PM" },
  wifi: { name: "pool", png: wifiService, description: "Free Wifi" },
  roomService: {
    name: "roomservice",
    png: roomService,
    description: "Room Service from 7AM until 11PM ",
  },
  ac: { name: "ac", png: ac, description: "Air Conditioned Room Environment" },
  pool: { name: "pool", png: pool, description: "Pool timing from 9AM to 7PM" },
};
