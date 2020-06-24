import React from 'react';
import clamp from 'lodash-es/clamp';
import { useSpring, animated } from 'react-spring';
import { useGesture } from 'react-with-gesture';

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    title:{
        fontamily: '"Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
        fontWeight: '700',
        lineHeight: '1.2',
        color: '#343a40',
        '&:active': {
            cursor: '-webkit-grabbing !important',
        },
        '&:hover': {
            cursor: '-webkit-grab',
        },
        userSelect: 'none',
        fontSize: '5em',
        marginTop: '0px',
        marginBottom: '0px !important',
    }
}));


export function TitleAnimated(props) {
    const classes = useStyles();

    const [{ xy }, set] = useSpring(() => ({ xy: [0, 0] }))
    const bind = useGesture(({ down, delta, velocity }) => {
      velocity = clamp(velocity, 1, 8)
      set({ xy: down ? delta : [0, 0], config: { mass: velocity, tension: 500 * velocity, friction: 50 } })
    })

    return (
    <animated.h1 {...bind()} className={classes.title} style={{ transform: xy.interpolate((x, y) => `translate3d(${x}px,${y}px,0)`) }}>
        HIPPOLYTE BRINGER
    </animated.h1>
    )

}

export default TitleAnimated;