import { nanoid } from "@reduxjs/toolkit";
import lkplevImage from "../../assets/images/friends/friend-lkp_lev.png";


export const infoFriends = [
  {
    id: nanoid(4),
    name: 'ЛКП "ЛЕВ"',
    time: "8:00 - 19:00",
    address: "Promuslova Street, 56",
    email: "lkplev@gmail.com",
    phone: "+380 32 293 30 41",
    image: lkplevImage,
    link: "https://www.lkplev.com",
  },  
];
