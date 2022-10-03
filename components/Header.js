import { ButtonS } from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-white px-12 py-3 font-medium">
      <div>
        <Link href="/">
          <h3 className="cursor-pointer font-heading text-2xl font-bold tracking-tight text-primary">
            banquee.
          </h3>
        </Link>
      </div>
      <nav className="flex ">
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
          <Link href="/compare">
            <li
              className={`cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ${
                router.pathname === "/compare" ? "bg-white-bgMuted" : ""
              }`}
            >
              Compare
            </li>
          </Link>
          <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ">
            Support
          </li>
          <li className="cursor-pointer rounded-md px-3 py-2 hover:bg-white-bgMuted ">
            Blog
          </li>
        </ul>
      </nav>
      <div className="flex items-center justify-end gap-7 font-heading ">
        <a href="#" className="text-lg tracking-tight text-primary">
          Login
        </a>
        <ButtonS>Open Account</ButtonS>
      </div>
    </header>
  );
};
