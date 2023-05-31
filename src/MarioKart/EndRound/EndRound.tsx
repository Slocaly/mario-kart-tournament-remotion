import {FC} from 'react';
import {Sequence} from 'remotion';
import {Rounds} from '../Rounds/Rounds';
import {Ranking} from '../Ranking/Ranking';

export const EndRound: FC = () => {
	return (
		<>
			<Sequence durationInFrames={160}>
				<Rounds animateOut round={4} />
			</Sequence>
			<Sequence from={160}>
				<Ranking />
			</Sequence>
			{/* <Sequence from={520}>
				<Rounds round={4} />
			</Sequence> */}
		</>
	);
};
