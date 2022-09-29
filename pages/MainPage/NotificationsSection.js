import AppIcon from "../../assets/AppIcon";
import TickIcon from "../../assets/TickIcon";
import { BadgeS } from "../../components/Badge";
import { ButtonTextM } from "../../components/Button";
import { NotificationCard } from "../../components/NotificationCard";
import { notifications } from "../../utils/content";

export const Notifications = () => {
  return (
    <section className="flex items-center justify-between gap-44 overflow-hidden px-40 pt-40 font-medium text-black-txt 2xl:px-60">
      <div className="relative flex w-1/2 max-w-xl flex-col gap-8 ">
        <div className="flex flex-col items-start gap-4 ">
          <h5 className="font-heading text-xl tracking-tight">Notifications</h5>
          <h2 className="font-heading text-6xl">Stay notified</h2>
          <p className="text-xl">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Malesuada Ipsum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Vestibulum</span>
          </div>
          <div className="flex items-center gap-4 text-xl">
            <BadgeS>
              <TickIcon className="w-5 fill-primary" />
            </BadgeS>
            <span>Parturient Lorem</span>
          </div>
        </div>
        <ButtonTextM>Compare Cards</ButtonTextM>
      </div>
      <div className="flex w-1/2 flex-col gap-4">
        {notifications.map((el, i) => (
          <NotificationCard icon={el.icon} descr={el.descr} key={i} />
        ))}
      </div>
    </section>
  );
};
