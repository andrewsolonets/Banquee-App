import CardImage from "../../assets/Card";
import Card1 from "../../assets/Card1";
import Card1Rotated from "../../assets/Card1Rotated";
import Card2 from "../../assets/Card2";
import Card2Rotated from "../../assets/Card2Rotated";
import CardRotated from "../../assets/CardRotated";
import { Card } from "../../components/Card";

export const CardsFeatures = () => {
  return (
    <div className=" flex  justify-center gap-16 ">
      <Card2Rotated />
      <Card1Rotated />
      <CardRotated />
      <Card1Rotated />
      <Card2Rotated />
    </div>
  );
};
