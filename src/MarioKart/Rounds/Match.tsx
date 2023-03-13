import {
  Img,
  spring,
  staticFile,
  useCurrentFrame,
  useVideoConfig
} from "remotion";
import { loadFont } from "@remotion/google-fonts/VT323";

interface Player {
  name: string;
  photo: string;
}

interface Players {
  playerOne: Player;
  playerTwo: Player;
  index: number;
}

export const Match: React.FC<Players> = ({ playerOne, playerTwo, index }: Players) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const { fontFamily } = loadFont();

  const springAnim = spring({
    frame: frame - index * 3,
    fps,
    from: -100,
    to: 0,
    durationInFrames: 30,
    config: {
      stiffness: 40
    }
  });

  return (
    <div
      style={{
        width: "90%",
        backgroundColor: "rgba(75,75,75, 0.5)",
        fontSize: "2rem",
        color: "white",
        fontFamily,
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        padding: "5px 40px 5px 20px",
        transform: `translateX(${springAnim}%)`,
        clipPath: "polygon(0 0, 100% 0%, 90% 100%, 0% 100%)"
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}
      >
        {playerOne.name}
        <Img
          src={staticFile(playerOne.photo)}
          alt="photo"
          style={{ width: "40px", objectFit: "contain" }}
        />
      </div>
      <Img
        src={staticFile("versus.png")}
        alt="versus"
        style={{ width: "30px", objectFit: "contain" }}
      />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px"
        }}
      >
        <Img
          src={staticFile(playerTwo.photo)}
          alt="photo"
          style={{ width: "40px", objectFit: "contain" }}
        />
        {playerTwo.name}
      </div>
    </div>
  );
};
