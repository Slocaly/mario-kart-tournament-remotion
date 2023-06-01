import {FC} from 'react';
import {Path} from "./Path";
import {interpolate, useCurrentFrame} from "remotion";

const round1Paths = [
    "M141.47 230.96h114.7a6 6 0 0 1 6 6v48a6 6 0 0 0 6 6h114.67M144.97 215.96v30M379.34 305.96v-30",
    "M142.2 372.9h114.3a6 6 0 0 0 6-6v-69.94a6 6 0 0 1 6-6h114.34M145.7 357.9v30M379.34 305.96v-30",
    "M141.47 510.96h114.7a6 6 0 0 1 6 6v48a6 6 0 0 0 6 6h114.67M144.97 495.96v30M379.34 585.96v-30",
    "M142.2 652.9h114.3a6 6 0 0 0 6-6v-69.94a6 6 0 0 1 6-6h114.34M145.7 637.9v30M379.34 585.96v-30",
    "M141.47 790.96h114.7a6 6 0 0 1 6 6v48a6 6 0 0 0 6 6h114.67M144.97 775.96v30M379.34 865.96v-30",
    "M142.2 932.9h114.3a6 6 0 0 0 6-6v-69.94a6 6 0 0 1 6-6h114.34M145.7 917.9v30M379.34 865.96v-30",
    "M141.47 1070.96h114.7a6 6 0 0 1 6 6v48a6 6 0 0 0 6 6h114.67M144.97 1055.96v30M379.34 1145.96v-30",
    "M142.2 1212.88h114.3a6 6 0 0 0 6-6v-69.92a6 6 0 0 1 6-6h114.34M145.7 1197.88v30M379.34 1145.96v-30",
];

const round2Paths = [
    "M482.2 290.96h113.25a6 6 0 0 1 6 6V426.9a6 6 0 0 0 6 6H720.7M485.7 275.96v30M717.2 447.9v-30",
    "M480.77 570.82h113.97a6 6 0 0 0 6-6V438.88a6 6 0 0 1 6-6H720.7M484.27 555.82v30M717.2 447.9v-30",
    "M482.2 850.96h113.25a6 6 0 0 1 6 6v129.92a6 6 0 0 0 6 6H720.7M485.7 835.96v30M717.2 1007.9v-30",
    "M481.48 1130.82h113.6a6 6 0 0 0 6-6V998.9a6 6 0 0 1 6-6h113.63M484.98 1115.82v30M717.2 1007.9v-30",
    "M482.2 1400h113.25a6 6 0 0 1 6 6v129.92a6 6 0 0 0 6 6H720.7M485.7 1385v30M717.2 1556.92v-30",
    "M481.48 1679.86h113.6a6 6 0 0 0 6-6v-125.94a6 6 0 0 1 6-6h113.63M484.98 1664.86v30M717.2 1556.92v-30",
];

export const StrokesDown: FC = () => {
    const frame = useCurrentFrame();
    const opacity = interpolate(frame, [160, 175], [1, 0]);
    return (
        <>
            {/* ROUND 1 */}
            <g stroke="#5e5e5e" strokeWidth="7" fill="none" opacity={opacity}>
                {
                    round1Paths.map((path) => {
                        return <Path path={path} startFrame={0} endFrame={30}/>
                    })
                }
            </g>
            {/* ROUND 2 */}
            <g stroke="#5e5e5e" strokeWidth="7" fill="none" opacity={opacity}>
                {
                    round2Paths.map((path) => {
                        return <Path path={path} startFrame={0} endFrame={30}/>
                    })
                }
            </g>
            {/* ROUND 3 */}
            <g stroke="#5e5e5e" strokeWidth="7" fill="none" opacity={opacity}>
                <Path
                    path="M821.48 432.9h185.74a6 6 0 0 1 6 6V921.9M824.98 417.9v30M998.22 918.42h30M821.48 992.9H960.7M824.98 977.9v30M957.2 1007.9v-30M822.18 1549.04h185.04a6 6 0 0 0 6-6v-480.6M825.68 1534.04v30M1028.22 1065.93h-30"
                    startFrame={0}
                    endFrame={60}
                />
            </g>
        </>
    )
}
