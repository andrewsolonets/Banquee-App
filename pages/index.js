import Image from "next/image";
import cardsDemo from "../assets/cardsmain.png";
import tickSvg from "../assets/badgetick.svg";

export default function Home() {
  return (
    <>
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
          <button className="px-4 py-2 bg-primary text-white rounded-md">
            Open Account
          </button>
        </div>
      </header>
      <section className="flex flex-col items-center py-32 font-medium  ">
        <div className="flex items-center font-medium gap-12 justify-center">
          <div className="flex flex-col w-1/2 gap-8">
            <div className="flex gap-2 flex-col w-3/4">
              <h1 className="font-heading text-8xl tracking-tight leading-tight">
                Banking<br></br> starts here.
              </h1>
              <p className="text-2xl leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
            </div>

            <div className="flex gap-5 text-lg gap-20">
              <div className="flex flex-col gap-4 ">
                <div className="flex items-center gap-4">
                  <Image src={tickSvg} alt="tick" />
                  <span>Instant Transfer</span>
                </div>
                <div className="flex items-center gap-4 ">
                  <Image src={tickSvg} alt="tick" />
                  <span>Saving accounts</span>
                </div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <Image src={tickSvg} alt="tick" />
                  <span>Payments worldwide</span>
                </div>
                <div className="flex items-center gap-4">
                  <Image src={tickSvg} alt="tick" />
                  <span>100% mobile banking</span>
                </div>
              </div>
            </div>
            <div className="flex">
              <button className="px-6 py-4 bg-primary text-white rounded-md">
                Open Account
              </button>
            </div>
          </div>
          <div className="flex flex-col ">
            <Image src={cardsDemo} alt="CardsMain" />
          </div>
        </div>
      </section>
    </>
  );
}
