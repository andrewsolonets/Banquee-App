import { Cta } from "../components/CTA";
import { Faq } from "../components/Faq";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

import SizeObserver from "../utils/size-observer";
import { Blog } from "./MainPage/Blog";

import { Integration } from "./MainPage/Integration";

import { MainSection1 } from "./MainPage/MainSection1";
import { MainSection2 } from "./MainPage/MainSection2";
import { MainSection3 } from "./MainPage/MainSection3";

import { MainSection4 } from "./MainPage/MainSection4";
import { Notifications } from "./MainPage/NotificationsSection";
import { PerfectCard } from "./MainPage/PerfectCard";
import { Reviews } from "./MainPage/Reviews";

export default function Home() {
  return (
    <>
      <MainSection1 />
      <MainSection2 />
      <MainSection3 />
      <MainSection4 />
      <Notifications />
      <Integration />
      <PerfectCard />
      <Reviews />
      <Cta />
      <Faq />
      <Blog />
    </>
  );
}
