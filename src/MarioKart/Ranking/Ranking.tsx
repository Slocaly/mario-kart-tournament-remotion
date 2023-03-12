import {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import {RankingTable} from './RankingTable';

export const Ranking: FC = () => {
	return (
		<>
			<AbsoluteFill>
				<Img
					src="https://i.pinimg.com/originals/d8/e7/e7/d8e7e7c2dac347163cd04af4e7db56a5.png"
					style={{
						objectFit: 'cover',
						transform: 'scale(1.6)',
						height: '100%',
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<RankingTable />
			</AbsoluteFill>
		</>
	);
};
