import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowRight from "../assets/ArrowRight";
import card2 from "../assets/card-1.png";
import card3 from "../assets/card-2.png";
import cardImage from "../assets/card.png";
import { ChooseCardItem } from "./ChooseCardItem";

export const CompareNav = () => {
  const router = useRouter();
  return (
    <div
      className={`absolute left-0 right-0 hidden flex-col items-center justify-center gap-10 bg-white-bgMuted  py-10   ${
        router.pathname === "/compare" ? "hidden" : "hover:flex peer-hover:flex"
      }  `}
    >
      <Link href="/compare">
        <div className="flex cursor-pointer flex-col gap-16   lg:flex-row xl:max-w-[48rem] 2xl:max-w-[62.5rem]">
          <ChooseCardItem
            small={true}
            big={false}
            image={
              <Image
                src={cardImage}
                alt="card1"
                className="w-[13rem] 2xl:w-[17rem]"
              />
            }
            badge={true}
            title={"Basic"}
            badgeName={"Popular"}
            price={"Free"}
            descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
          <ChooseCardItem
            small={true}
            image={
              <Image
                src={card2}
                alt="card1"
                className="w-[13rem] 2xl:w-[17rem]"
              />
            }
            badge={false}
            big={false}
            title={"Premium"}
            price={"$5"}
            descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
          <ChooseCardItem
            small={true}
            image={
              <Image
                src={card3}
                alt="card3"
                className="w-[13rem] 2xl:w-[17rem]"
              />
            }
            badge={false}
            big={false}
            title={"Gold"}
            price={"10"}
            descr={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
          />
        </div>
      </Link>
      <Link href="/compare">
        <a className="flex items-center gap-2 font-heading text-lg tracking-tight text-primary">
          Compare Accounts <ArrowRight className="w-6 fill-primary" />
        </a>
      </Link>
    </div>
  );
};
