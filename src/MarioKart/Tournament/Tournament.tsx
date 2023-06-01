import {AbsoluteFill, Img, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import matches from '../data/tournament/matches1.json';
import {PlayerHead} from './PlayerHead';
import {Strokes} from './Strokes';
import {Fragment, useMemo} from 'react';
import {UnknownHead} from './UnknownHead';
import {loadFont} from '@remotion/google-fonts/VT323';

const {fontFamily} = loadFont();

export const Tournament: React.FC = () => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();

    const springAnimIn = spring({
        frame,
        fps,
        from: -140,
        to: 0,
    });

    const springAnimOut = spring({
        frame: frame - 150,
        fps,
        from: 0,
        to: -140,
    });

    const springAnim = useMemo(
        () => (springAnimIn + springAnimOut),
        [springAnimIn, springAnimOut]
    );

    return (
        <>
            <AbsoluteFill>
                <Img
                    src="https://i.pinimg.com/originals/d8/e7/e7/d8e7e7c2dac347163cd04af4e7db56a5.png"
                    alt="background"
                    style={{
                        objectFit: 'cover',
                        height: '100%',
                        scale: '1.6',
                    }}
                />
            </AbsoluteFill>
            <AbsoluteFill>
                <h1
                    style={{
                        width: '100%',
                        textAlign: 'center',
                        fontSize: '8rem',
                        margin: '1.5rem 0',
                        fontFamily,
                        transform: `translateY(${springAnim}px)`,
                    }}
                >
                    TOURNOI DU HAUT
                </h1>
            </AbsoluteFill>
            <AbsoluteFill>
                <svg width="1080" height="1920">
                    <UnknownHead yPos={375} xPos={680}/>
                    <UnknownHead yPos={910} xPos={680}/>
                    <UnknownHead yPos={1470} xPos={680}/>
                    <UnknownHead yPos={910} xPos={920}/>
                    <UnknownHead yPos={220} xPos={342}/>
                    <UnknownHead yPos={500} xPos={342}/>
                    <UnknownHead yPos={780} xPos={342}/>
                    <UnknownHead yPos={1050} xPos={342}/>
                    <UnknownHead yPos={1350} xPos={342}/>
                    <UnknownHead yPos={1600} xPos={342}/>
                    <Strokes />
                    {matches.map((match, index) => (
                        <Fragment key={match.playerOne.name}>
                            <PlayerHead isFirst index={index} player={match.playerOne}/>
                            <PlayerHead index={index} player={match.playerTwo}/>
                        </Fragment>
                    ))}
                </svg>
            </AbsoluteFill>
        </>
    );
};
