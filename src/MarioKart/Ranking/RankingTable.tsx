import {CSSProperties, FC, Fragment, useState} from 'react';
import firstRound from '../data/round0.json';
import secondRound from '../data/round1.json';
import {Flipper, Flipped} from 'react-flip-toolkit';
import {useCurrentFrame} from 'remotion';
import * as VT323 from '@remotion/google-fonts/VT323';

const {fontFamily} = VT323.loadFont('normal');

const middleSeparation: CSSProperties = {
	width: '100%',
	borderTop: '0',
	backgroundColor: 'black',
	borderColor: 'black',
};

const line: CSSProperties = {
	backgroundColor: 'rgba(75,75,75, 0.4)',
	color: 'white',
};

export const RankingTable: FC = () => {
	const [data, setData] = useState(firstRound);
	const [hasChanged, setHasChanged] = useState(false);
	const frame = useCurrentFrame();

	if (frame === 30 && !hasChanged) {
		secondRound.sort((a, b) => parseInt(b.win, 10) - parseInt(a.win, 10));
		setData(secondRound);
		setHasChanged(true);
	}

	// If (frame === 119 && hasChanged) {
	// 	setData(firstRound);
	// 	setHasChanged(false);
	// }

	return (
		<Flipper
			flipKey={data.map((elem) => elem.name).join('')}
			spring={{stiffness: 75, damping: 15}}
		>
			<table
				style={{
					width: '80%',
					margin: 'auto',
					marginTop: '2rem',
					fontFamily: `${fontFamily}`,
					fontSize: '1.1rem',
					color: 'white',
				}}
			>
				<thead>
					<tr>
						<th>Nom</th>
						<th>Victoire</th>
						<th>Défaite</th>
					</tr>
				</thead>
				<tbody>
					{data.map((person, index) => (
						<Fragment key={person.name}>
							<Flipped flipId={person.name}>
								<tr style={line}>
									<td>{person.name}</td>
									<td style={{textAlign: 'center'}}>{person.win}</td>
									<td style={{textAlign: 'center'}}>{person.loses}</td>
								</tr>
							</Flipped>
							{index + 1 === Math.round(data.length / 2) && (
								<tr>
									<td colSpan={3}>
										<hr style={middleSeparation} />
									</td>
								</tr>
							)}
						</Fragment>
					))}
				</tbody>
			</table>
		</Flipper>
	);
};
