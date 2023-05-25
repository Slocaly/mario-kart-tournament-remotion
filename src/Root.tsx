import {Composition} from 'remotion';
import {Ranking} from './MarioKart/Ranking/Ranking';
import {Versus} from './MarioKart/Versus/Versus';
import {Rounds} from './MarioKart/Rounds/Rounds';
import {EndRound} from './MarioKart/EndRound/EndRound';
import {Tournament} from './MarioKart/Tournament/Tournament';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="Matches"
				width={500}
				height={1020}
				fps={30}
				durationInFrames={120}
				component={Rounds}
				defaultProps={{
					round: 0,
				}}
			/>
			<Composition
				id="Versus"
				width={500}
				height={500}
				fps={30}
				durationInFrames={120}
				component={Versus}
				defaultProps={{
					playerOne: 'ThomasJouannot',
					playerTwo: 'BaptisteGauduchon',
				}}
			/>
			<Composition
				id="Ranking"
				width={500}
				height={1020}
				fps={30}
				durationInFrames={120}
				component={Ranking}
			/>
			<Composition
				id="EndRound"
				width={500}
				height={1020}
				fps={30}
				durationInFrames={700}
				component={EndRound}
			/>
			<Composition
				width={1080}
				height={1920}
				id="Tournament"
				fps={30}
				durationInFrames={300}
				component={Tournament}
			/>
		</>
	);
};
