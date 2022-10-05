export const HeroSection = ({
  smallText,
  heading,
  rightContent,
  special = "max-h-[31rem] items-start pt-32",
  headingStyles,
}) => {
  return (
    <section
      className={`relative flex  ${special} justify-between overflow-hidden bg-primary-light px-36`}
    >
      <div className="flex flex-col items-center gap-8">
        <div className="flex flex-col items-center justify-start gap-4">
          <div
            className={`flex flex-col ${headingStyles} items-start justify-center text-6xl xl:gap-6 2xl:gap-2`}
          >
            <p className="text-xl">{smallText}</p>
            <h1
              className={` font-heading leading-tight tracking-tight xl:text-7xl`}
            >
              {heading}
            </h1>
          </div>
        </div>
      </div>
      {rightContent}
    </section>
  );
};
