import { ButtonS } from "./Button";
import Link from "next/link";
import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex  items-center justify-between bg-white px-5 py-3 font-medium md:px-12">
      <div>
        <Link href="/">
          <h3 className="cursor-pointer font-heading text-3xl font-bold tracking-tight text-primary md:text-2xl">
            banquee.
          </h3>
        </Link>
      </div>
      <nav className="hidden md:flex ">
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
      <div className="flex items-center justify-end gap-7 font-heading ">
        <a href="#" className="text-lg tracking-tight text-primary">
          Login
        </a>
        <ButtonS>Open Account</ButtonS>
      </div>
    </header>
  );
};
