import {FC} from 'react';
import {Sequence} from 'remotion';
import {Rounds} from '../Rounds/Rounds';
import {Ranking} from '../Ranking/Ranking';
import {Tournament} from '../Tournament/Tournament';
import {TournamentDown} from '../Tournament/TournamentDown';

export const EndRound: FC = () => {
	return (
		<>
			{/* <Sequence durationInFrames={160}>
				<Rounds animateOut round={4} />
			</Sequence>
			<Sequence from={160} durationInFrames={360}>
				<Ranking />
			</Sequence> */}
			{/* <Sequence from={520}>
				<Rounds round={4} />
			</Sequence> */}
			<Sequence durationInFrames={200}>
				<Tournament />
			</Sequence>
			<Sequence from={200} durationInFrames={200}>
				<TournamentDown />
			</Sequence>
		</>
	);
};  
