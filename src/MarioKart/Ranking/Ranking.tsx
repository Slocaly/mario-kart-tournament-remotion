import {FC} from 'react';
import {AbsoluteFill, Img} from 'remotion';
import Mario from '../../../public/mario.jpeg';
import {RankingTable} from './RankingTable';

export const Ranking: FC = () => {
	return (
		<>
			<AbsoluteFill>
				<Img
					src={Mario}
					style={{
						objectFit: 'cover',
						filter: 'blur(5px)',
						scale: '1.1',
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
