import { AnimationContainer } from "./AnimationContainer";
import { BadgeTrans } from "./Badge";

export const NotificationCard = ({ icon, descr }) => {
  return (
    <AnimationContainer className="min-w-96 flex w-full items-start justify-start gap-4 rounded-xl bg-white-bgMuted p-4">
      <BadgeTrans>{icon}</BadgeTrans>
      <div className="flex flex-col items-start">
        <h6 className="font-heading text-xl font-bold ">Banko.</h6>
        <p>{descr}</p>
      </div>
    </AnimationContainer>
  );
};
