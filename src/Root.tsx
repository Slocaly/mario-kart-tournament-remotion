/* eslint-disable camelcase */
import { Composition } from "remotion";
import { Ranking } from "./MarioKart/Ranking/Ranking";
import { Versus } from "./MarioKart/Versus/Versus";

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        width={500}
        height={500}
        id="Versus"
        fps={30}
        durationInFrames={120}
        component={Versus}
      />
      <Composition
        id="MarioKart"
        width={500}
        height={500}
        fps={30}
        durationInFrames={120}
        component={Ranking}
      />
    </>
  );
};
