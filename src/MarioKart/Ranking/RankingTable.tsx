import {CSSProperties, FC, Fragment, useMemo} from 'react';
import firstRound from '../data/round1.json';
import secondRound from '../data/round2.json';
import * as VT323 from '@remotion/google-fonts/VT323';
import {RankingLineFace} from './RankingLineFace';

const {fontFamily} = VT323.loadFont('normal');

export type Person = {
	name: string;
	head: string;
	win: string;
	loses: string;
};

const middleSeparation: CSSProperties = {
	width: '100%',
	borderTop: '0',
	backgroundColor: 'black',
	borderColor: 'black',
};

const line: CSSProperties = {
	backgroundColor: 'rgba(25,25,25, 0.4)',
	color: 'white',
	marginBottom: '3px',
	padding: '2px',
	position: 'relative',
};

const list: CSSProperties = {
	width: '90%',
	padding: '0',
	margin: 'auto',
	marginTop: '15px',
	fontFamily: `${fontFamily}`,
	fontSize: '1.5rem',
	listStyle: 'none',
};

export const RankingTable: FC = () => {
	const sortedFirstRound = useMemo(
		() => firstRound.sort((a, b) => parseInt(b.win, 10) - parseInt(a.win, 10)),
		[]
	);

	const getRankingIcon = (player: Person, index: number): string => {
		const precedentPlayerIndex = sortedFirstRound.findIndex(
			(firstPlayer) => firstPlayer.name === player.name
		);

		if (index === precedentPlayerIndex) return 'dash.png';
		if (index > precedentPlayerIndex) return 'down.png';
		return 'up.png';
	};

	const sortedSecondRound = useMemo(() => {
		const sortedArray = secondRound.sort(
			(a, b) => parseInt(b.win, 10) - parseInt(a.win, 10)
		);

		return sortedArray.map((player, index) => ({
			...player,
			arrow: getRankingIcon(player, index),
		}));
	}, []);

	return (
		<ul style={list}>
			{sortedFirstRound.map((person, index) => (
				<Fragment key={person.name}>
					<li style={line}>
						<RankingLineFace isFront index={index} person={person} />
						<RankingLineFace index={index} person={sortedSecondRound[index]} />
					</li>
					{index + 1 === Math.round(sortedFirstRound.length / 2) && (
						<hr style={middleSeparation} />
					)}
				</Fragment>
			))}
		</ul>
	);
};
