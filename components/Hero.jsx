import { AnimationContainer } from "../core/AnimationContainer";

export const HeroSection = ({
  smallText,
  heading,
  rightContent,
  special = "max-h-[31rem] items-center lg:items-start pt-20 lg:pt-32",
  headingStyles,
}) => {
  return (
    <section
      className={`relative flex flex-col gap-10 lg:flex-row lg:gap-0  ${special} lg:px-30 justify-between overflow-hidden bg-primary-light px-5 sm:px-24 xl:px-36`}
    >
      <div className="flex flex-col  items-center gap-8">
        <div className="flex flex-col items-center justify-center gap-4 lg:justify-start">
          <AnimationContainer
            className={`flex flex-col text-center lg:text-left ${headingStyles} items-left justify-center text-6xl lg:items-start xl:gap-6 2xl:gap-2`}
          >
            <p className="text-center text-xl lg:text-left">{smallText}</p>
            <h1
              className={` font-heading  text-[2.5rem] leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl`}
            >
              {heading}
            </h1>
          </AnimationContainer>
        </div>
      </div>
      {rightContent}
    </section>
  );
};
