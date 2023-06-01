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

export const PlayerHeadFixed: FC<PlayerHeadProps> = ({
	index,
	player,
	isFirst,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const getTimeKey = (keyframe: number) => keyframe + index * 10;
	const baseYPos = 300 + index * 280 - (isFirst ? 140 : 0);

	// Const transformX = interpolate(
	// 	frame,
	// 	[getTimeKey(0), getTimeKey(15), getTimeKey(20), getTimeKey(35)],
	// 	[0, 170, 170, 339],
	// 	{
	// 		extrapolateLeft: 'clamp',
	// 		extrapolateRight: 'clamp',
	// 	}
	// );
	// const transformY = interpolate(
	// 	frame,
	// 	[getTimeKey(15), getTimeKey(20)],
	// 	[0, isFirst ? 75 : -75],
	// 	{
	// 		extrapolateLeft: 'clamp',
	// 		extrapolateRight: 'clamp',
	// 	}
	// );

	// const transform = player.win
	// 	? `translate(${transformX}, ${transformY})`
	// 	: undefined;

	const entrance = spring({
		frame: frame - (20 + index * 5) - (isFirst ? 0 : 2),
		fps,
		config: {
			mass: 0.5,
		},
		from: -600,
		to: 0,
	});

	const exit = spring({
		frame: frame - (150 + index * 5) - (isFirst ? 0 : 2),
		fps,
		config: {
			mass: 0.5,
		},
		from: 0,
		to: 600,
	});

	const transform = `translate(${entrance - exit + 339}, 1450)`;

	return (
		<>
			<path
				d="M40 160h100v140H40"
				fill={`url(#${player.name}-pattern)`}
				transform={transform}
			/>
			<pattern
				id={`${player.name}-pattern`}
				patternUnits="userSpaceOnUse"
				x="40"
				y="160"
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
