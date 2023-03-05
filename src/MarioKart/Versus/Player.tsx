import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/VT323";

export const enum PlayerPosition {
  RIGHT = "right",
  LEFT = "left"
}

interface PlayerProps {
  src: any,
  nom: string,
  position: PlayerPosition
}

export const Player = ({ src, nom, position }: PlayerProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { fontFamily } = loadFont();

  const animImage = interpolate(frame, [0, 30], [100, 0], {
    extrapolateRight: "clamp"
  });

  const springName = spring({
    frame,
    fps,
    from: -100,
    to: -3,
    durationInFrames: 60,
    config: {
      stiffness: 45
    }
  });


  const clipPath =
    position === PlayerPosition.LEFT ?
      "polygon(0% 0%, 100% 0%, 75% 100%, 0% 100%)"
      : "polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)";

  return (
    <>
      <Img src={src}
           alt="player" style={
        {
          objectFit: "cover",
          height: "100%",
          width: "56%",
          position: "absolute",
          clipPath,
          ...( position === PlayerPosition.LEFT ?
            { left: `-${animImage}%` } : { right: `-${animImage}%` }
          )
        }
      } />
      <div style={
        {
          position: "absolute",
          fontSize: "25px",
          top: "75%",
          padding: "20px",
          borderRadius: "20px",
          backdropFilter: "blur(10px)",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          color: "#F5F5F5",
          boxShadow: "rgb(244 244 244 / 24%) 0px 8px 32px 0px",
          minWidth: "30%",
          fontFamily,
          ...(position === PlayerPosition.RIGHT && {
            right: `${springName}%`,
            textAlign: "end",
            paddingRight: "5%"
          }),
          ...(position === PlayerPosition.LEFT && {
            left: `${springName}%`,
            paddingLeft: "5%"
          })
        }
      }><i>{nom}</i>
      </div>
    </>
  );
};