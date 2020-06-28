import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        paddingTop: '127px',
        paddingBottom: '50px',
        paddingLeft: '48px',
        paddingRight: '48px',
        backgroundColor: '#EEF0F2',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '16px',
            paddingRight: '16px',
        },
    },
    spaceBottom: {
        marginBottom: theme.spacing(3),
    },
}));


export function Interests(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="interests">
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    CENTRE D'INTÉRÊT
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h4'>
                    Escalade
                </Typography>
                <Typography variant='body1'>
                    Je fais de l'escalade depuis 10 ans, principalement du bloc et un peu de falaise. Ce que j'aime dans ce sport est d'avoir une voie et 
                    d'essayer encore et encore jusqu'à y arriver. C'est très motivant d'avoir un objectif et
                    on a une réelle satisfaction lorsqu'on arrive au bout de la voie.
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h4'>
                    Piano
                </Typography>
                <Typography variant='body1'>
                    Je fais du piano depuis que je suis petit, je joue des morceaux assez classique comme "Lettre à Élise" de Beethoven, 
                    ainsi que des morceaux comme "Mistral gagnant" de Renaud ou la musique du film "Requiem for a dream".
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Interests;
