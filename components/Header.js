import { ButtonS } from "./Button";

export const Header = () => {
  return (
    <header className="flex justify-between px-12 py-3 items-center font-medium">
      <div>
        <h3 className="font-heading font-bold text-primary text-2xl tracking-tight">
          banquee.
        </h3>
      </div>
      <nav className="flex ">
        <ul className="flex gap-4 text-black-txt ">
          <li>Features</li>
          <li>Compare</li>
          <li>Support</li>
          <li>Blog</li>
        </ul>
      </nav>
      <div className="flex items-center gap-7 justify-end font-heading ">
        <a href="#" className="text-primary tracking-tight text-lg">
          Login
        </a>
        <ButtonS>Open Account</ButtonS>
      </div>
    </header>
  );
};
