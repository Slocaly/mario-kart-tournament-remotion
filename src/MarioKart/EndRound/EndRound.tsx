import {FC} from 'react';
import {Sequence} from 'remotion';
import {Tournament} from '../Tournament/Tournament';
import {TournamentDown} from '../Tournament/TournamentDown';
import {SemiFinal} from "../Tournament/SemiFinal";

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
			<Sequence from={400} durationInFrames={130}>
				<SemiFinal />
			</Sequence>
		</>
	);
};
