import Matches0 from '../data/matches/matches0.json';
import Matches1 from '../data/matches/matches1.json';
import Matches2 from '../data/matches/matches2.json';
import Matches3 from '../data/matches/matches3.json';
import Matches4 from '../data/matches/matches4.json';
import {
	AbsoluteFill,
	Img,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Match} from './Match';
import {loadFont} from '@remotion/google-fonts/VT323';
import {useMemo} from 'react';

const {fontFamily} = loadFont();
const matches = [Matches0, Matches1, Matches2, Matches3, Matches4];

interface RoundsProps {
	round: number;
	animateOut?: boolean;
}

const getMatches = (roundNumber: number) => matches[roundNumber];

export const Rounds: React.FC<RoundsProps> = ({round, animateOut = false}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const springAnimIn = spring({
		frame,
		fps,
		from: -100,
		to: 0,
	});

	const springAnimOut = spring({
		frame: frame - 145,
		fps,
		from: 0,
		to: -100,
	});

	const springAnim = useMemo(
		() => (animateOut ? springAnimIn + springAnimOut : springAnimIn),
		[animateOut, springAnimIn, springAnimOut]
	);

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
				<div
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						padding: '0 10px',
						transform: `translateY(${springAnim}px)`,
					}}
				>
					<h1
						style={{
							width: '100%',
							textAlign: 'center',
							fontFamily,
							fontSize: '8rem',
							margin: '1.5rem 0',
						}}
					>
						ROUND {round + 1}
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
					{getMatches(round).map((currentRound, i) => (
						<Match
							key={i}
							players={currentRound}
							index={i}
							animateOut={animateOut}
						/>
					))}
				</div>
			</AbsoluteFill>
		</>
	);
};
