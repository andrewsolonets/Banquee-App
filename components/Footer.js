import { AnimationContainer } from "../core/AnimationContainer";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-start gap-20 border-t border-grey px-5 pt-24 pb-11 sm:px-10 lg:px-36">
      <div className="flex w-full flex-col items-start justify-between gap-12 md:flex-row md:gap-0">
        <AnimationContainer>
          <h3 className="w-full font-heading text-2xl font-bold tracking-tight text-primary md:w-4/12">
            banquee.
          </h3>
        </AnimationContainer>
        <AnimationContainer className="flex w-full flex-wrap items-start gap-12 md:w-8/12 md:flex-nowrap">
          <div className="flex w-[8rem] flex-col gap-8 sm:w-1/3">
            <h6 className="font-heading text-xl tracking-tight">About</h6>
            <div className="flex flex-col items-start gap-4">
              <span className="font-medium text-black-txt/50">Features</span>
              <span className="font-medium text-black-txt/50">Pricing</span>
              <span className="font-medium text-black-txt/50">Support</span>
            </div>
          </div>
          <div className="flex w-[8rem] flex-col gap-8 sm:w-1/3">
            <h6 className="font-heading text-xl tracking-tight">Blog</h6>
            <div className="flex flex-col items-start gap-4">
              <span className="font-medium text-black-txt/50">Products</span>
              <span className="font-medium text-black-txt/50">Technology</span>
              <span className="font-medium text-black-txt/50">Crypto</span>
            </div>
          </div>
          <div className="flex w-[8rem]  flex-col gap-8 sm:w-1/3">
            <h6 className="font-heading text-xl tracking-tight">
              Social Media
            </h6>
            <div className="flex flex-col items-start gap-4">
              <span className="font-medium text-black-txt/50">Twitter</span>
              <span className="font-medium text-black-txt/50">Facebook</span>
              <span className="font-medium text-black-txt/50">Instagram</span>
            </div>
          </div>
        </AnimationContainer>
      </div>
      <div className="flex w-full justify-between border-t border-grey ">
        <p className="mt-5 text-black-txt/50">
          © Made by <span className="text-primary">Andrii Solonets</span>{" "}
          (design by Pawel Gola)
        </p>
      </div>
    </footer>
  );
};
