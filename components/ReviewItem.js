import StarIcon from "../assets/StarIcon";
import { AnimationContainer } from "./AnimationContainer";

export const ReviewItem = ({ stars = 5, heading, text, text2, name, job }) => {
  return (
    <AnimationContainer className="flex h-fit  flex-col gap-6 rounded-xl border-2 border-grey p-8 ">
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1">
            {[...Array(stars)].map((e, i) => (
              <StarIcon className="w-5 fill-primary" key={i} />
            ))}
            {[...Array(5 - stars)].map((e, i) => (
              <StarIcon className="w-5 fill-primary-light" key={i} />
            ))}
          </div>
          <h4 className="font-heading text-3xl font-medium">{heading}</h4>
        </div>
        <p className="leading-relaxed">{text}</p>
        {text2 && <p className="leading-relaxed">{text2}</p>}
      </div>
      <div className="flex flex-col">
        <h6 className="font-heading text-xl font-medium tracking-tight">
          {name}
        </h6>
        <p className="text-sm font-medium text-black-txt/50">{job}</p>
      </div>
    </AnimationContainer>
  );
};
