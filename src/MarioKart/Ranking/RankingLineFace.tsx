import {
	interpolate,
	staticFile,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Img, spring} from 'remotion';
import {CSSProperties, FC} from 'react';
import {Person} from './RankingTable';

type RankingLineFaceProps = {
	isFront?: boolean;
	person: Person;
	index: number;
};

const score: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
	width: '9 ch',
	borderLeft: 'solid 2px rgb(150, 150, 150, 0.5)',
	padding: '0 1rem',
  fontWeight: 'bold'
};

const front: CSSProperties = {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

const back: CSSProperties = {
	position: 'absolute',
	opacity: 0,
	top: '0px',
	left: '0px',
	width: '100%',
	height: '100%',
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
};

export const RankingLineFace: FC<RankingLineFaceProps> = ({
	isFront = false,
	person,
	index,
}) => {
	const frame = useCurrentFrame();
	const {fps} = useVideoConfig();

	const delay = 4 * index;

	const opacity = interpolate(frame, [0 + delay, 1 + delay], [0, 1]);

	const deg = spring({
		frame: frame - delay,
		fps,
		from: 0,
		to: 180,
	});

	return (
		<div
			style={
				isFront
					? {...front, transform: `rotateX(${deg}deg)`, opacity: 1 - opacity}
					: {...back, transform: `rotateX(${-180 + deg}deg)`, opacity}
			}
		>
			<div
				style={{
					display: 'flex',
					alignItems: 'center',
				}}
			>
				<span
					style={{
						display: 'inline-block',
						width: '2ch',
						paddingLeft: '0.5rem',
					}}
				>
					{(person as any).arrow && (
						<Img
							style={{width: '20px'}}
							src={staticFile((person as any).arrow)}
						/>
					)}
				</span>
				<p
					style={{
						margin: '0 1rem',
						width: '2ch',
						display: 'inline-block',
						lineHeight: '2rem',
						textAlign: 'center',
					}}
				>
					{index + 1}
				</p>
				<span
					style={{
						borderLeft: 'solid 2px rgb(150, 150, 150, 0.5)',
						paddingLeft: '0.5rem',
						display: 'inline-flex',
						alignItems: 'center',
					}}
				>
					<Img
						style={{
							width: '25px',
							maxHeight: '40px',
							margin: '0 0.5rem 0 0',
						}}
						src={staticFile(person.head)}
					/>
					{person.name}
				</span>
			</div>
			<div style={score}>
				<span style={{textAlign: 'center'}}>
					{person.win} - {person.loses}
				</span>
			</div>
		</div>
	);
};
