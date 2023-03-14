import { AbsoluteFill, Img, Sequence } from "remotion";
import { Player, PlayerPosition } from "./Player";
import People from "../../../utils/people";
import { VSLogo } from "./VSLogo";

interface VersusProps {
  playerOne: string;
  playerTwo: string;
}

export const Versus = ({ playerOne, playerTwo }: VersusProps) => {

  const getImageFor = (name: string) => People.find((imageUrl) => imageUrl.includes(name));

  return (
    <>
      <AbsoluteFill>
        <Img
          src="https://i.pinimg.com/originals/d8/e7/e7/d8e7e7c2dac347163cd04af4e7db56a5.png"
          alt="background"
          style={{
            objectFit: "cover",
            height: "100%"
          }}
        />
      </AbsoluteFill>

      <Sequence name="Players">
        <Player
          src={getImageFor(playerOne)}
          nom={playerOne.split(/(?=[A-Z])/).join(" ")}
          position={PlayerPosition.LEFT}
        />
        <Player
          src={getImageFor(playerTwo)}
          nom={playerTwo.split(/(?=[A-Z])/).join(" ")}
          position={PlayerPosition.RIGHT}
        />
      </Sequence>

      <Sequence from={25}>
        <VSLogo />
      </Sequence>
    </>
  );
};