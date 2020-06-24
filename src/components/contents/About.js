import React from 'react';
import TitleAnimated from '../contents/TitleAnimated';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        // paddingBottom: '255px',
        paddingTop: '200px',
        paddingLeft: '48px',
        paddingRight: '48px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '16px',
            paddingRight: '16px',
            paddingTop: '100px',
        },
    },
    spaceBottom: {
        marginBottom: theme.spacing(2),
        // fontamily: '"Saira Extra Condensed", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
    },
}));



export function About(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="about" >
            <Grid item container className={classes.spaceBottom}>
                <TitleAnimated />
            </Grid>
            <Typography variant='h5' className={[classes.spaceBottom, "subheading"].join(' ')}>
                15 rue des Halles, 75001 Paris &nbsp; &nbsp;•&nbsp; &nbsp; 06 17 03 65 59 &nbsp; &nbsp;•&nbsp; &nbsp; bringer.hippolyte@outlook.fr
            </Typography>
            <Typography variant='body1'>
                Diplomé Ingénieur, je suis un passionné de l'informatique, que ce soit le web,
                la gestion de data en passant par le machine learning.
            </Typography>
            <Typography variant='body1'>
                Je cherche des projets challegeant afin de deployer tout mon potentiel.
            </Typography>
            <Typography variant='body1'>
                N'hésitez pas en me contacter que ce soit pour une mission ou des renseignements
            </Typography>
            <Typography variant='body1'>
                Malt & compagnies
            </Typography>
        </Grid>
    );
}

export default About;


