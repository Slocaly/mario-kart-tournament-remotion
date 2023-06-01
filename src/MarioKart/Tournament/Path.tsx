import {interpolate, useCurrentFrame} from "remotion";
import {evolvePath} from "@remotion/paths";

type PathProps = {
    path: string;
    startFrame: number;
    endFrame: number;
    isAnimated?: boolean;
}
export const Path = ({path, startFrame, endFrame, isAnimated = true}: PathProps) => {
    const frame = useCurrentFrame();

    if (!isAnimated) {
        return (<path
            d={path}
        />);
    }

    const progressEnter = interpolate(frame, [startFrame, endFrame], [0, 1], {
        extrapolateRight: "clamp"
    });
    const {strokeDasharray, strokeDashoffset} = evolvePath(progressEnter, path);

    const progressExit = interpolate(frame, [endFrame, endFrame + endFrame], [1, 0], {
        extrapolateRight: "clamp"
    });
    const {
        strokeDasharray: strokeDasharrayExit,
        strokeDashoffset: strokeDashoffsetExit
    } = evolvePath(progressExit, path);

    return (
        <path
            d={path}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
        />
    )
};