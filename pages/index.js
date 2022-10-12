import { Cta } from "../core/CTA";
import { Faq } from "../components/Faq";

import { Blog } from "../components/MainPage/Blog";
import { Integration } from "../components/MainPage/Integration";
import { MainSection1 } from "../components/MainPage/MainSection1";
import { MainSection2 } from "../components/MainPage/MainSection2";
import { MainSection3 } from "../components/MainPage/MainSection3";
import { MainSection4 } from "../components/MainPage/MainSection4";
import { Notifications } from "../components/MainPage/NotificationsSection";
import { PerfectCard } from "../components/MainPage/PerfectCard";
import { Reviews } from "../components/MainPage/Reviews";

import SizeObserver from "../utils/size-observer";

function Home() {
  return (
    <>
      <div className="w-full px-5 sm:px-10 lg:px-20  2xl:px-60">
        <MainSection1 />
        <MainSection2 />
      </div>

      <MainSection3 />
      <div className="w-full border-b  border-grey px-5 sm:px-10 lg:px-20  2xl:px-60">
        <MainSection4 />
        <Notifications />
        <Integration />
      </div>
      <div className="w-full border-b  border-grey px-5 sm:px-10 lg:px-20  2xl:px-60">
        <PerfectCard />
        <Reviews />
        <Cta />
        <Faq />
        <Blog />
      </div>
    </>
  );
}

export default Home;
