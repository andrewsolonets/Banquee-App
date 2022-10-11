import AppIcon from "../../assets/AppIcon";
import TickIcon from "../../assets/TickIcon";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BadgeS } from "../../core/Badge";
import { ButtonTextM } from "../../core/Button";
import { NotificationCard } from "../../core/NotificationCard";
import { notifications } from "../../utils/content";

export const Notifications = () => {
  return (
    <section className="flex  flex-col items-center justify-between gap-20  overflow-hidden pt-40 font-medium  text-black-txt md:flex-row md:gap-44 ">
      <div className="relative flex w-full max-w-xl flex-col items-center gap-8 md:w-1/2 md:items-start ">
        <div className="flex w-full flex-col items-center gap-4 md:items-start ">
          <AnimationContainer>
            <h5 className="font-heading text-xl tracking-tight">
              Notifications
            </h5>
          </AnimationContainer>
          <AnimationContainer>
            <h2 className="text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
              Stay notified
            </h2>
          </AnimationContainer>
          <AnimationContainer>
            <p className="text-center leading-relaxed md:text-left md:text-xl 2xl:text-2xl">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </AnimationContainer>
        </div>

        <div className="flex flex-col gap-3">
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Malesuada Ipsum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Vestibulum</span>
          </AnimationContainer>
          <AnimationContainer className="flex items-center gap-4 md:text-xl 2xl:text-2xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Parturient Lorem</span>
          </AnimationContainer>
        </div>

        <ButtonTextM>Compare Cards</ButtonTextM>
      </div>
      <div className="flex w-full flex-col gap-4 md:w-1/2">
        {notifications.map((el, i) => (
          <NotificationCard icon={el.icon} descr={el.descr} key={i} />
        ))}
      </div>
    </section>
  );
};
