import React from 'react';
import '../style.scss';
// import pythonLogo from '../../img/pythonLogo.png';
// import cSharpLogo from '../../img/cSharpLogo.png';
// import djangoLogo from '../../img/djangoLogo.png';
// import reactLogo from '../../img/reactLogo.png';
// import materialUiLogo from '../../img/materialUiLogo.svg';
// import piano from '../../img/piano.png';
import climbing from '../../img/climbing.png';

// import { Parallax, ParallaxLayer } from 'react-spring/renderprops-addons'
// import { animated, useSpring } from "react-spring";

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

// Import Component
import About from '../contents/About'
import Education from '../contents/Education'
import Experiences from '../contents/Experiences'
import Interests from '../contents/Interests'
import Skills from '../contents/Skills'
import Projects from '../contents/Projects'


const useStyles = makeStyles((theme) => ({
    pythonLogo: {
        width: '9%',
        marginLeft: '59%',
        [theme.breakpoints.down('1150')]: {
            marginLeft: '65%',
        },
    },
    cSharpLogo: {
        width: '9%',
        marginLeft: '77%',
        [theme.breakpoints.down('1150')]: {
            marginLeft: '85%',
        },
    },
    djangoLogo: {
        width: '9%',
        marginLeft: '50%',
        [theme.breakpoints.down('1150')]: {
            marginLeft: '75%',
        },
    },
    reactLogo: {
        width: '9%',
        marginLeft: '68%',
        [theme.breakpoints.down('1150')]: {
            marginLeft: '65%',
        },
    },
    materialUiLogo: {
        width: '9%',
        marginLeft: '85%',
        [theme.breakpoints.down('1150')]: {
            marginLeft: '85%',
        },
    },
    piano: {
        width: '150px',
        marginLeft: '20%',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    climbing: {
        width: '15%',
        height: 'auto',
        marginLeft: 'calc(100% - 15%)',
        [theme.breakpoints.down('xs')]: {
            width: '25%',
            marginLeft: 'calc(100% - 25%)',
            height: 'auto',
        },
    },
}));

const Dashboard = React.forwardRef((props, ref) => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <About />
            <Education />
            <Projects />
            <Skills />
            <Experiences />
            <Interests />
            <Grid item container direction='row' style={{ backgroundColor: '#EEF0F2'}}>
                <img src={climbing} alt="escalade" className={classes.climbing} />
            </Grid>
        </Grid>
    )

})

export default Dashboard;
