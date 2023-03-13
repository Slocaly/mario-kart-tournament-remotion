import {AbsoluteFill, Img} from 'remotion';
import Round from '../data/matches0.json';
import {Match} from './Match';
import {loadFont} from '@remotion/google-fonts/VT323';

const {fontFamily} = loadFont();

export const Rounds: React.FC = () => (
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
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
					padding: '0 10px',
				}}
			>
				<h1
					style={{
						width: '100%',
						textAlign: 'center',
						fontFamily,
						fontSize: '4rem',
            margin: '1.5rem 0'
					}}
				>
					ROUND 1
				</h1>
			</div>
			<div
				style={{
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-evenly',
					height: '100%',
				}}
			>
				{Round.map((round, i) => (
					<Match key={i} {...round} index={i} />
				))}
			</div>
		</AbsoluteFill>
	</>
);
