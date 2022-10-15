import Link from "next/link";
import { useRouter } from "next/router";
import DownArrow from "../assets/DownArrow";
import { CompareNav } from "./CompareNav";

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
          <CompareNav />
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
