import {staticFile} from 'remotion';

export const UnknownHead: React.FC<{yPos: number; xPos: number}> = ({
	yPos,
	xPos,
}) => (
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
			id="unknown-image"
			href={staticFile('head.png')}
			preserveAspectRatio="none"
		/>
	</>
);
