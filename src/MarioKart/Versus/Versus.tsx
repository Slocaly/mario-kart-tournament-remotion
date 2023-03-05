import { AbsoluteFill, Img, Sequence } from "remotion";
import { Player, PlayerPosition } from "./Player";
import { AnthonyDonnet, LucasAudart, OlivierPerez } from "../../../utils/people";
import { VSLogo } from "./VSLogo";

export const Versus = () => {

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
        <Player src={OlivierPerez} nom="Olivier Perez" position={PlayerPosition.LEFT} />
        <Player src={LucasAudart} nom="Lucas Audart" position={PlayerPosition.RIGHT} />
      </Sequence>

      <Sequence from={25}>
        <VSLogo />
      </Sequence>
    </>
  );
};