import {FC} from 'react';
import {interpolate, spring, staticFile, useVideoConfig} from 'remotion';
import {useCurrentFrame} from 'remotion';

type Player = {
	name: string;
	photo: string;
	win: boolean;
};

type PlayerHeadProps = {
	index: number;
	player: Player;
	isFirst?: boolean;
};

export const PlayerHead: FC<PlayerHeadProps> = ({index, player, isFirst}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const getTimeKey = (keyframe: number) => keyframe + index * 10 + 50;
	const baseYPos = 300 + index * 280 - (isFirst ? 140 : 0);

	const transformX = interpolate(
		frame,
		[getTimeKey(0), getTimeKey(15), getTimeKey(20), getTimeKey(35)],
		[0, 170, 170, 342],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);
	const transformY = interpolate(
		frame,
		[getTimeKey(15), getTimeKey(20)],
		[0, isFirst ? 75 : -75],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	const entrance = spring({
		frame: frame - (20 + index * 5) - (isFirst ? 0 : 2),
		fps,
		config: {
			mass: 0.5,
		},
		from: -200,
		to: 0,
	});

	const exit = interpolate(frame, [160, 175], [1, 0], {
		extrapolateLeft: 'clamp',
		extrapolateRight: 'clamp',
	});

	// Const exit = spring({
	// 	frame: frame - (150 + index * 5) - (isFirst ? 0 : 2),
	// 	fps,
	// 	config: {
	// 		mass: 0.5,
	// 	},
	// 	from: 0,
	// 	to: 200,
	// });

	const transform = player.win
		? `translate(${entrance + transformX}, ${transformY})`
		: `translate(${entrance})`;

	// Const transform = `translate(${entrance - exit})`;

	return (
		<>
			<path
				d={`M40 ${baseYPos}h100v140H40`}
				fill={`url(#${player.name}-pattern)`}
				transform={transform}
				opacity={exit}
			/>
			<pattern
				id={`${player.name}-pattern`}
				patternUnits="userSpaceOnUse"
				x="40"
				y={baseYPos}
				width="100"
				height="140"
			>
				<use xlinkHref={`#${player.name}-image`} transform="scale(100,140)" />
			</pattern>
			<image
				width="1"
				height="1"
				id={`${player.name}-image`}
				href={staticFile(player.photo)}
				preserveAspectRatio="none"
			/>
		</>
	);
};
