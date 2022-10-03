import React from "react";
import {
  Feature,
  FeatureContainer,
  FeatureLeft,
  FeatureRight,
  WorkBackground,
} from "./Feature";
import { Tile, TileBackground, TileContent, TileWrapper } from "./tile";
import screen1 from "../../assets/app1.png";
import screen2 from "../../assets/app2.png";
import screen3 from "../../assets/app3.png";
import screen4 from "../../assets/app4.png";

const FeaturesList = () => {
  return (
    <TileWrapper numOfPages={4}>
      <TileBackground />
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <FeatureContainer>
              <FeatureLeft
                progress={progress}
                heading={"Send & receive money instantly"}
                headingSecondary={"Transactions"}
                textMain={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <FeatureRight progress={progress} picture={screen1} />
            </FeatureContainer>
          )}
        />
        <Tile
          page={1}
          renderContent={({ progress }) => (
            <FeatureContainer>
              <FeatureLeft
                progress={progress}
                heading={"Manage your cards"}
                headingSecondary={"Cards"}
                textMain={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <FeatureRight progress={progress} picture={screen2} />
            </FeatureContainer>
          )}
        />
        <Tile
          page={2}
          renderContent={({ progress }) => (
            <FeatureContainer>
              <FeatureLeft
                progress={progress}
                heading={"Keep control over your money"}
                headingSecondary={"Advanced Statistics"}
                textMain={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <FeatureRight progress={progress} picture={screen3} />
            </FeatureContainer>
          )}
        />
        <Tile
          page={3}
          renderContent={({ progress }) => (
            <FeatureContainer>
              <FeatureLeft
                progress={progress}
                heading={"Lorem et ipsum dolor"}
                headingSecondary={"Saving Accounts"}
                textMain={
                  "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
                }
              />
              <FeatureRight progress={progress} picture={screen4} />
            </FeatureContainer>
          )}
        />
      </TileContent>

      {/* <Feature
      heading={"Send & receive money instantly"}
      headingSecondary={"Transactions"}
      textMain={
        "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet."
      }
      img={screen1}
    /> */}
    </TileWrapper>
  );
};

export default FeaturesList;
