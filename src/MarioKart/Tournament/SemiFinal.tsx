import SemiFinaleOne from '../data/tournament/semiFinalOne.json';
import SemiFinaleTwo from '../data/tournament/semiFinalTwo.json';
import {
    AbsoluteFill,
    Img,
    spring,
    useCurrentFrame,
    useVideoConfig,
} from 'remotion';

import {loadFont} from '@remotion/google-fonts/VT323';
import {useMemo} from 'react';
import {Match} from "../Rounds/Match";

const {fontFamily} = loadFont();
const matches = [SemiFinaleOne, SemiFinaleTwo];

interface RoundsProps {
    animateOut?: boolean;
}

const getMatches = (roundNumber: number) => matches[roundNumber];

export const SemiFinal: React.FC<RoundsProps> = ({animateOut = true}) => {
    const frame = useCurrentFrame();
    const {fps} = useVideoConfig();

    const springAnimIn = spring({
        frame,
        fps,
        from: -850,
        to: 0,
    });

    const springAnimOut = spring({
        frame: frame - 110,
        fps,
        from: 0,
        to: -850,
    });

    const springAnim = useMemo(
        () => (animateOut ? springAnimIn + springAnimOut : springAnimIn),
        [animateOut, springAnimIn, springAnimOut]
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
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 10px',
                        transform: `translateX(${springAnim}px)`,
                    }}
                >
                    <h1
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            fontFamily,
                            fontSize: '8rem',
                            margin: '1.5rem 0',
                        }}
                    >
                        DEMI FINALE
                    </h1>
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 10px',
                        transform: `translateX(${springAnim}px)`,
                    }}
                >
                    <h2
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            fontFamily,
                            fontSize: '6rem',
                            margin: '1.5rem 0',
                        }}
                    >
                        PREMIER TOURNOI
                    </h2>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        height: '100%',
                    }}
                >
                    {getMatches(0).map((currentRound, i) => (
                        <Match
                            key={i}
                            players={currentRound}
                            index={i}
                            animateOut={animateOut}
                        />
                    ))}
                </div>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0 10px',
                        transform: `translateX(${springAnim}px)`,
                    }}
                >
                    <h2
                        style={{
                            width: '100%',
                            textAlign: 'center',
                            fontFamily,
                            fontSize: '6rem',
                            margin: '1.5rem 0',
                        }}
                    >
                        DEUXIÈME TOURNOI
                    </h2>
                </div>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-evenly',
                        height: '100%',
                    }}
                >
                    {getMatches(1).map((currentRound, i) => (
                        <Match
                            key={i}
                            players={currentRound}
                            index={i}
                            animateOut={animateOut}
                        />
                    ))}
                </div>
            </AbsoluteFill>
        </>
    );
};
