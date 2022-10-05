import StarIcon from "../../assets/StarIcon";
import { BadgeS } from "../../components/Badge";
import { ReviewItem } from "../../components/ReviewItem";
import { reviewData } from "../../utils/content";

export const Reviews = () => {
  return (
    <section className="py flex flex-col items-start gap-16 py-32 font-medium text-black-txt ">
      <div className="flex items-end justify-between">
        <div className="flex w-1/2 flex-col items-start gap-4">
          <h5 className="font-heading text-xl tracking-tight">Testimonials</h5>
          <h2 className="font-heading text-6xl tracking-tight ">
            People all over the world use banquee.
          </h2>
        </div>
        <div className="flex items-center gap-4 text-xl">
          <BadgeS>
            <StarIcon className="w-5 fill-primary" />
          </BadgeS>
          <span>
            Rated <span className="text-primary">4.8/5 </span>from over 1000
            users
          </span>
        </div>
      </div>
      <div className="flex gap-8">
        <div className="flex flex-col items-start gap-8">
          {reviewData.map((el, i) => {
            return (
              el.column === 1 && (
                <ReviewItem
                  stars={el.stars}
                  heading={el.heading}
                  text={el.text}
                  text2={el.text2}
                  name={el.name}
                  job={el.job}
                  key={i}
                />
              )
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-8">
          {reviewData.map((el, i) => {
            return (
              el.column === 2 && (
                <ReviewItem
                  stars={el.stars}
                  heading={el.heading}
                  text={el.text}
                  text2={el.text2}
                  name={el.name}
                  job={el.job}
                  key={i}
                />
              )
            );
          })}
        </div>
        <div className="flex flex-col items-start gap-8">
          {reviewData.map((el, i) => {
            return (
              el.column === 3 && (
                <ReviewItem
                  stars={el.stars}
                  heading={el.heading}
                  text={el.text}
                  text2={el.text2}
                  name={el.name}
                  job={el.job}
                  key={i}
                />
              )
            );
          })}
        </div>
      </div>
    </section>
  );
};
