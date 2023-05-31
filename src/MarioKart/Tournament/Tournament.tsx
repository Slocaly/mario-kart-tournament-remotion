import {AbsoluteFill, Img} from 'remotion';
import matches from '../data/tournament/matches1.json';
import {PlayerHead} from './PlayerHead';
import {Strokes} from './Strokes';
import {Fragment} from 'react';
import {UnknownHead} from './UnknownHead';

export const Tournament: React.FC = () => {
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
					<Strokes />
					{matches.map((match, index) => (
						<Fragment key={match.playerOne.name}>
							<PlayerHead isFirst index={index} player={match.playerOne} />
							<PlayerHead index={index} player={match.playerTwo} />
						</Fragment>
					))}
				</svg>
			</AbsoluteFill>
		</>
	);
};
