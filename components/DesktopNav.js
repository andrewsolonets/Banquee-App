import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowRight from "../assets/ArrowRight";
import DownArrow from "../assets/DownArrow";
import { ChooseCardItem } from "./ChooseCardItem";
import card2 from "../assets/card-1.png";
import card3 from "../assets/card-2.png";
import cardImage from "../assets/card.png";

export const DesktopNav = () => {
  const router = useRouter();
  return (
    <nav className="hidden lg:flex ">
      <ul className="flex gap-4 text-black-txt ">
        <Link href="/features">
          <li
            className={`cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ${
              router.pathname === "/features" ? "bg-white-bgMuted" : ""
            }`}
          >
            Features
          </li>
        </Link>
        <div className="peer">
          <Link href="/compare">
            <li
              className={`peer flex cursor-pointer gap-2 rounded-md px-3 py-2 hover:bg-white-bgMuted ${
                router.pathname === "/compare" ? "bg-white-bgMuted" : ""
              }`}
            >
              Compare <DownArrow className="w-[0.52rem]" />
            </li>
          </Link>
          <div
            className={`absolute left-0 right-0 hidden flex-col items-center justify-center gap-10 bg-white-bgMuted  py-10   ${
              router.pathname === "/compare"
                ? "hidden"
                : "hover:flex peer-hover:flex"
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
                  descr={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
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
                  descr={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
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
                  descr={
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                  }
                />
              </div>
            </Link>
            <Link href="/compare">
              <a className="flex items-center gap-2 font-heading text-lg tracking-tight text-primary">
                Compare Accounts <ArrowRight className="w-6 fill-primary" />
              </a>
            </Link>
          </div>
        </div>

        <Link href="/support">
          <li
            className={`cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ${
              router.pathname === "/support" ? "bg-white-bgMuted" : ""
            }`}
          >
            Support
          </li>
        </Link>
        <Link href="/blog">
          <li
            className={`cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ${
              router.pathname === "/blog" ? "bg-white-bgMuted" : ""
            }`}
          >
            Blog
          </li>
        </Link>
      </ul>
    </nav>
  );
};