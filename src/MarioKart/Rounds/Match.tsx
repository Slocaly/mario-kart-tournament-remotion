import { Img, interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
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

  const springAnim = spring(
    {
      frame: frame - index,
      fps,
      from: -100,
      to: 0,
      durationInFrames: 30,
      config: {
        stiffness: 40
      }
    }
  );

  return (
    <div style={{
      width: '70%',
      backgroundColor: "rgba(75,75,75, 0.5)",
      fontSize: "2rem",
      color: "white",
      fontFamily,
      display: "flex",
      justifyContent: "space-between",
      padding: "5px",
      transform: `translateX(${springAnim}%)`
    }}>
      <div>
        {playerOne.name}
        {/* <Img src={playerOne.photo} alt="photo" /> */}
        <Img src="https://placedog.net/25" alt="photo" style={{ objectFit: "cover", padding: '0 10px' }} />
      </div>
      <div>
        VS
      </div>
      <div>
        {/* <Img src={playerTwo.photo} alt="photo" /> */}
        <Img src="https://placedog.net/25" alt="photo" style={{ objectFit: "cover", padding: '0 10px' }} />
        {playerTwo.name}
      </div>
    </div>
  );
};