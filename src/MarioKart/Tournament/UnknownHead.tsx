import {interpolate, staticFile, useCurrentFrame} from 'remotion';

type UnknownHeadProps = {
	yPos: number;
	xPos: number;
};

export const UnknownHead: React.FC<UnknownHeadProps> = ({yPos, xPos}) => {
	const frame = useCurrentFrame();

	const opacity = interpolate(frame, [0, 45], [0, 1], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});
	const opacityExit = interpolate(frame, [150, 175], [1, 0], {
		extrapolateRight: 'clamp',
		extrapolateLeft: 'clamp',
	});

	return (
		<>
			<path
				d={`M40 ${yPos}h100v140H40`}
				fill="url(#unknown)"
				transform={`translate(${xPos})`}
			/>
			<pattern
				id="unknown"
				patternUnits="userSpaceOnUse"
				x="40"
				y={yPos}
				width="100"
				height="140"
			>
				<use xlinkHref="#unknown-image" transform="scale(100,110)" />
			</pattern>
			<image
				width="1"
				height="1"
				opacity={frame >= 150 ? opacityExit : opacity}
				id="unknown-image"
				href={staticFile('head.png')}
				preserveAspectRatio="none"
			/>
		</>
	);
};
