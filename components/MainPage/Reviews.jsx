import StarIcon from "../../assets/StarIcon";
import { AnimationContainer } from "../../core/AnimationContainer";
import { BadgeS } from "../../core/Badge";
import { ReviewItem } from "../../core/ReviewItem";
import { reviewData } from "../../utils/content";

export const Reviews = () => {
  return (
    <section className=" flex flex-col items-start gap-16 py-32 font-medium text-black-txt ">
      <div className="flex flex-col items-center justify-between gap-6 md:flex-row md:items-end md:gap-0">
        <div className="flex w-full flex-col items-center gap-4 md:w-1/2 md:items-start">
          <AnimationContainer>
            <h5 className="font-heading text-xl tracking-tight ">
              Testimonials
            </h5>
          </AnimationContainer>
          <AnimationContainer>
            <h2 className=" text-center font-heading text-[2.5rem] leading-tight tracking-tight  sm:text-5xl md:text-left lg:text-6xl 2xl:text-7xl ">
              People all over the world use banquee.
            </h2>
          </AnimationContainer>
        </div>
        <AnimationContainer className="flex items-center gap-4 text-xl">
          <BadgeS>
            <StarIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>
            Rated <span className="text-primary">4.8/5 </span>from over 1000
            users
          </span>
        </AnimationContainer>
      </div>
      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {reviewData.map((el, i) => {
          return (
            <ReviewItem
              stars={el.stars}
              heading={el.heading}
              text={el.text}
              text2={el.text2}
              name={el.name}
              job={el.job}
              key={i}
            />
          );
        })}
      </div>
    </section>
  );
};
