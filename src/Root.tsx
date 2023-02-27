/* eslint-disable camelcase */
import {Composition} from 'remotion';
import {SensCritique} from './SensCritique/SensCritique';
import {Ranking} from './MarioKart/Ranking/Ranking';

// Each <Composition> is an entry in the sidebar!

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="SensCritique"
				width={500}
				height={500}
				fps={30}
				durationInFrames={180}
				component={SensCritique}
				defaultProps={{
					movie: {
						title: 'Babylon',
						creators: ['Damien Chazelle'],
						date: '23 décembre 2022',
						rating: 7.6,
						cover:
							'https://media.senscritique.com/media/000021055723/300/babylon.png',
						genres: ['Comédie dramatique', 'Historique'],
						rating_details: {
							current: 10_000,
							rating: 7.6,
							recommend: 787,
							wish: 7_600,
						},
						resume:
							"Los Angeles des années 1920. Récit d'une ambition démesurée et d'excès les plus fous, l'ascension et la chute de différents personnages lors de la création d'Hollywood, une ère de décadence et de dépravation sans limites.",
						type: 'Film',
						url: '',
					},
				}}
			/>
			<Composition
				id="MarioKart"
				width={500}
				height={500}
				fps={30}
				durationInFrames={120}
				component={Ranking}
			/>
		</>
	);
};
