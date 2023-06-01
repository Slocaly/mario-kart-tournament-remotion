import {
	Img,
	interpolate,
	spring,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {loadFont} from '@remotion/google-fonts/VT323';
import {useMemo} from 'react';

interface Player {
	name: string;
	photo: string;
	lose: boolean;
}

interface Players {
	playerOne: Player;
	playerTwo: Player;
}

interface MatchProps {
	players: Players;
	index: number;
	animateOut?: boolean;
}

export const Match: React.FC<MatchProps> = ({
	players,
	index,
	animateOut = false,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();
	const {fontFamily} = loadFont();

	const {playerOne, playerTwo} = players;

	const springAnimIn = spring({
		frame: frame - index * 3,
		fps,
		from: -100,
		to: 0,
		durationInFrames: 20,
		config: {
			stiffness: 50,
		},
	});

	const springAnimOut = spring({
		frame: frame - index * 3 - 100,
		fps,
		from: 0,
		to: 100,
		durationInFrames: 20,
		config: {
			stiffness: 50,
		},
	});

	const winAnim = spring({
		frame: frame - 60,
		fps,
		from: 1,
		to: 1.1,
	});

	const loseAnim = spring({
		frame: frame - 60,
		fps,
		from: 1,
		to: 0.7,
	});

	const opacityOnLose = interpolate(frame, [60, 70], [1, 0.5], {
		extrapolateRight: 'clamp',
	});

	const grayscaleOnLose = interpolate(frame, [60, 70], [0, 1], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	const springAnim = useMemo(
		() => (animateOut ? springAnimIn - springAnimOut : springAnimIn),
		[animateOut, springAnimIn, springAnimOut]
	);

	return (
		<div
			style={{
				width: '90%',
				backgroundColor: 'rgba(75,75,75, 0.5)',
				fontSize: '4rem',
				color: 'white',
				fontFamily,
				display: 'flex',
				justifyContent: 'space-around',
				alignItems: 'center',
				padding: '10px 40px 10px 20px',
				transform: `translateX(${springAnim}%)`,
				clipPath: 'polygon(0 0, 100% 0%, 90% 100%, 0% 100%)',
			}}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '40px',
				}}
			>
				{playerOne.name}
				<Img
					src={staticFile(playerOne.photo)}
					alt="photo"
					style={{
						width: '80px',
						objectFit: 'contain',
						opacity: playerOne.lose ? opacityOnLose : 1,
						filter: `grayscale(${playerOne.lose ? grayscaleOnLose : 0})`,
						transform: `scale(${
							playerOne.lose ? loseAnim : playerOne.lose === null ? 1 : winAnim
						})`,
					}}
				/>
			</div>
			<Img
				src={staticFile('versus.png')}
				alt="versus"
				style={{width: '60px', objectFit: 'contain'}}
			/>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
					gap: '40px',
				}}
			>
				<Img
					src={staticFile(playerTwo.photo)}
					alt="photo"
					style={{
						width: '80px',
						objectFit: 'contain',
						opacity: playerTwo.lose ? opacityOnLose : 1,
						filter: `grayscale(${playerTwo.lose ? grayscaleOnLose : 0})`,
						transform: `scale(${
							playerTwo.lose ? loseAnim : playerTwo.lose === null ? 1 : winAnim
						})`,
					}}
				/>
				{playerTwo.name}
			</div>
		</div>
	);
};
