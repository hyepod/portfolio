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
        width: '150px',
        marginLeft: 'calc(100% - 150px)',
        [theme.breakpoints.down('xs')]: {
            width: '100px',
            marginLeft: 'calc(100% - 100px)',
        },
    },
}));

const Dashboard = React.forwardRef((props, ref) => {
    const classes = useStyles();

    return (
        <Grid container direction="column">
            <About />
            <Education />
            <Experiences />
            <Projects />
            <Skills />
            <Interests />
            <Grid item container direction='row' style={{ backgroundColor: '#EEF0F2'}}>
                <img src={climbing} alt="escalade" className={classes.climbing} />
            </Grid>
        </Grid>
    )




    // return (
    //     <Parallax ref={ref} id="parallax" pages={window.innerWidth > 600 ? 7.35 : 11}>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 1 : 1.6} speed={0.3} style={{ backgroundColor: '#e3e6e8', height: '20%' }} />

    //         <ParallaxLayer offset={0} speed={0} >
    //             <About />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={1.6} speed={0} >
    //             <Education />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 2.1 : 3.2} speed={0} >
    //             <Experiences />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 3.5 : 5.1} speed={0} >
    //             <Projects />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 5.2 : 7.5} speed={0} >
    //             <Skills />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 6.3 : 9} speed={0} >
    //             <Interests />
    //         </ParallaxLayer>

    //         <ParallaxLayer offset={window.innerWidth > 600 ? 5.99 : 8.8} speed={0.2} style={{ pointerEvents: 'none' }}>
    //             <img src={pythonLogo} alt="python" className={classes.pythonLogo} />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 5.99 : 8.8} speed={0.2} style={{ pointerEvents: 'none' }}>
    //             <img src={cSharpLogo} alt="c#" className={classes.cSharpLogo} />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 1150 ? 5.8 : window.innerWidth > 600 ? 5.92 : 8.9} speed={0.2} style={{ pointerEvents: 'none' }}>
    //             <img src={djangoLogo} alt="django" className={classes.djangoLogo} />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 5.8 : 8.99} speed={0.2} style={{ pointerEvents: 'none' }}>
    //             <img src={reactLogo} alt="react" className={classes.reactLogo} />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 5.8 : 8.99} speed={0.2} style={{ pointerEvents: 'none' }}>
    //             <img src={materialUiLogo} alt="material-UI" className={classes.materialUiLogo} />
    //         </ParallaxLayer>

    //         <ParallaxLayer offset={7} speed={0.1} style={{ pointerEvents: 'none' }}>
    //             <img src={piano} alt="piano" className={classes.piano} />
    //         </ParallaxLayer>
    //         <ParallaxLayer offset={window.innerWidth > 600 ? 7.05 : 10.5} speed={-0.3} style={{ pointerEvents: 'none' }}>
    //             <img src={climbing} alt="escalade" className={classes.climbing} />
    //         </ParallaxLayer>
    //     </Parallax>
    // )
})

export default Dashboard;


