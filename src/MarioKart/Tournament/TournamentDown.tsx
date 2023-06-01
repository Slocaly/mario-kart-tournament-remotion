import {AbsoluteFill, Img} from 'remotion';
import matches from '../data/tournament/matchesDown1.json';
import {PlayerHead} from './PlayerHead';
import {Fragment} from 'react';
import {UnknownHead} from './UnknownHead';
import {StrokesDown} from './StrokesDown';
import { PlayerHeadFixed } from './PlayerHeadFixed';

export const TournamentDown: React.FC = () => {
	return (
		<>
			<AbsoluteFill>
				<Img
					src="https://i.pinimg.com/originals/d8/e7/e7/d8e7e7c2dac347163cd04af4e7db56a5.png"
					alt="background"
					style={{
						objectFit: 'cover',
						height: '100%',
						scale: '1.6',
					}}
				/>
			</AbsoluteFill>
			<AbsoluteFill>
				<svg width="1080" height="1920">
					<UnknownHead yPos={375} xPos={680} />
					<UnknownHead yPos={910} xPos={680} />
					<UnknownHead yPos={1470} xPos={680} />
					<UnknownHead yPos={910} xPos={920} />
					<UnknownHead yPos={220} xPos={342} />
					<UnknownHead yPos={500} xPos={342} />
					<UnknownHead yPos={780} xPos={342} />
					<UnknownHead yPos={1050} xPos={342} />
					<UnknownHead yPos={1350} xPos={342} />
					{/* <UnknownHead yPos={1600} xPos={342} /> */}
					<StrokesDown />
					{matches.map((match, index) => (
						<Fragment key={match.playerOne.name}>
							<PlayerHead isFirst index={index} player={match.playerOne} />
							<PlayerHead index={index} player={match.playerTwo} />
						</Fragment>
					))}
					<PlayerHeadFixed
						isFirst
						index={5}
						player={{
							name: 'Lucas',
							photo: 'lucas.png',
							win: false,
						}}
					/>
				</svg>
			</AbsoluteFill>
		</>
	);
};
