import { nanoid } from "@reduxjs/toolkit";
import lkplevImage from "../../assets/images/friends/friend-lkp_lev.png";
import barbosImage from "../../assets/images/friends/friend-barbos.png";
import whiskasImage from "../../assets/images/friends/friend-whiskas.png";
import happypawImage from "../../assets/images/friends/friend-happy_paw.png";
import pethelpImage from "../../assets/images/friends/friend-pethelp.png";
import siriusImage from "../../assets/images/friends/friend-sirius.png";
import purinaImage from "../../assets/images/friends/friend-purina.png";
import joseraImage from "../../assets/images/friends/friend-josera.png";
import licoImage from "../../assets/images/friends/friend-lico.png";

export const infoFriends = [
  {
    id: nanoid(8),
    name: 'ЛКП "ЛЕВ"',
    time: "8:00 - 19:00",
    address: "Promuslova Street, 56",
    email: "lkplev@gmail.com",
    phone: "+380 32 293 30 41",
    image: lkplevImage,
    link: "https://www.lkplev.com",
  },
  {
    id: nanoid(8),
    name: "Барбос",
    time: "8:00 - 20:00",
    address: "Grigorenka Street, 56",
    email: "barbos@gmail.com",
    phone: "+380 66 488 0480",
    image: barbosImage,
    link: "https://www.facebook.com/NGO.Barbos",
  },
  {
    id: nanoid(8),
    name: "Whiskas",
    time: "day and night",
    address: "website only",
    email: "whiskas@gmail.com",
    phone: "0 800 500 155",
    image: whiskasImage,
    link: "http://www.whiskas.ua",
  },
  {
    id: nanoid(8),
    name: "Happy Paw",
    time: "9:00 - 19:00",
    address: "Chota Rystaveli Street, 44",
    email: "hello@happypaw.ua",
    phone: "+380 44 290 03 29",
    image: happypawImage,
    link: "http://www.happypaw.ua/ua/",
  },
  {
    id: nanoid(8),
    name: "PetHelp",
    time: "day and night",
    address: "website only",
    email: "pithelp.ukr@gmail.com",
    phone: "email only",
    image: pethelpImage,
    link: "http://www.pethelp.com.ua",
  },
  {
    id: nanoid(8),
    name: "Сіріус",
    time: "11:00 - 16:00",
    address: "Fedorivka, Kyiv Oblast",
    email: "dogcat.sirius@gmail.com",
    phone: "+380 93 193 40 69",
    image: siriusImage,
    link: "http://www.dogcat.com.ua",
  },
  {
    id: nanoid(8),
    name: "PURINA",
    time: "day and night",
    address: "website only",
    email: "info@ua.nestle.com",
    phone: "+1 800 778 7462",
    image: purinaImage,
    link: "http://www.purina.ua",
  },
  {
    id: nanoid(8),
    name: "Josera",
    time: "9:00 - 17:00",
    address: "Sholom-Aleikhema St, 11",
    email: "info@josera.ua",
    phone: "0 800 409 060",
    image: joseraImage,
    link: "http://www.josera.ua",
  },
  {
    id: nanoid(8),
    name: "LICO",
    time: "9:00 - 20:00",
    address: "Dryhetiv Street, 77",
    email: "lico@gmail.com",
    phone: "+380 97 509 80 05",
    image: licoImage,
    link: "http://www.lico.vet",
  },
];
