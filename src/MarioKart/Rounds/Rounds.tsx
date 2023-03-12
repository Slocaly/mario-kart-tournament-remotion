import { interpolate, Sequence, useCurrentFrame } from "remotion";
import { AbsoluteFill, Img } from "remotion";
import Round from "../data/round-one.json";
import { Match } from "./Match";

export const Rounds: React.FC = () => {
  const frame = useCurrentFrame();

  return (
    <>
      <AbsoluteFill>
        <Img
          src="https://i.pinimg.com/originals/d8/e7/e7/d8e7e7c2dac347163cd04af4e7db56a5.png"
          alt="background"
          style={{
            objectFit: "cover",
            height: "100%",
            scale: "1.6"
          }}
        />
      </AbsoluteFill>
      <AbsoluteFill>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 10px'
        }}>
          <h1>ROUND 1</h1>
          <h1>ZENI'KART <br /> 🍄 ⭐ 🐢</h1>
        </div>
        <div style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-evenly",
          height: "100%",
        }}>
          {
            Round.map((round, i) =>
              <Match key={i} {...round} index={i}/>
            )
          }
        </div>
      </AbsoluteFill>
    </>
  );
};