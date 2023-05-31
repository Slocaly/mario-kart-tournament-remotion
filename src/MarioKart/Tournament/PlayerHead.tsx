import {FC} from 'react';
import {interpolate, staticFile} from 'remotion';
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

	const getTimeKey = (keyframe: number) => keyframe + index * 10;
	const baseYPos = 300 + index * 280 - (isFirst ? 140 : 0);

	const transformX = interpolate(
		frame,
		[getTimeKey(0), getTimeKey(15), getTimeKey(20), getTimeKey(35)],
		[0, 170, 170, 339],
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

	const transform = player.win
		? `translate(${transformX}, ${transformY})`
		: undefined;

	return (
		<>
			<path
				d={`M40 ${baseYPos}h100v140H40`}
				fill={`url(#${player.name}-pattern)`}
				transform={transform}
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
