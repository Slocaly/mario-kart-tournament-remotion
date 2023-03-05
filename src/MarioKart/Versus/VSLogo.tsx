import { AbsoluteFill, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { loadFont } from "@remotion/google-fonts/VT323";

export const VSLogo = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { fontFamily } = loadFont();

  const rotateSpring = spring({
    frame,
    fps,
    from: -180,
    to: 10,
    durationInFrames: 45

  });
  const sizeSpring = spring({
    frame,
    fps,
    from: 0,
    to: 1,
    durationInFrames: 45
  });

  return (
    <AbsoluteFill style={{
      justifyContent: "center",
      alignItems: "center"

    }}>
      <p style={{
        backgroundColor: "white",
        color: "red",
        fontSize: "60px",
        fontWeight: "bold",
        padding: "10px",
        borderRadius: "50%",
        textAlign: "center",
        textShadow: "2px 2px 0px grey",
        boxShadow: "rgb(255 255 255 / 54%) 4px 4px 0px",
        transform: `rotate(${rotateSpring}deg) scale(${sizeSpring})`,
        fontFamily
      }}>VS</p>
    </AbsoluteFill>
  );
};