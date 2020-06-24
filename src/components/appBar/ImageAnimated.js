import React from 'react';
import '../style.scss';
import profilImg from '../../img/profil150.jpg';
import { useSpring, animated } from 'react-spring'

// Import MATERIAL UI
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    hover: {

    },
    largeImg: {
        width: '150px',
        height: '150px',
        background: 'grey',
        borderRadius: '50%',
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.4)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '8px solid white',
        backgroundImage: `url(${profilImg})`,
        '&:hover': {
            // cursor: 'pointer',
        },
    },
}));

const calc = (x, y) => [-(y - 249.2) / 20, (x - 136) / 20, 1.1]
const trans = (x, y, s) => `perspective(500px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export function ImageAnimated() {

    const classes = useStyles();
    const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

    return (
        <animated.div
            alt="Hippolyte Bringer"
            className={classes.largeImg}
            onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
            onMouseLeave={() => set({ xys: [0, 0, 1] })}
            style={{ transform: props.xys.interpolate(trans) }}
        />
    );
}

export default ImageAnimated;


