import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        // paddingBottom: '255px',
        paddingTop: '255px',
        paddingLeft: '48px',
        paddingRight: '48px',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '16px',
            paddingRight: '16px',
        },
    },
    spaceBottom: {
        marginBottom: theme.spacing(3),
    },
}));


export function Skills(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="skills">
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    COMPETENCE
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h4'>
                    IT
                </Typography>
                <Typography variant='body1'>
                    • Langage: Python, C#/C++, VBA, SQL, HTML/CSS
                </Typography>
                <Typography variant='body1'>
                    • Base de donnée: SQL
                </Typography>
                <Typography variant='body1'>
                    • Framework: ReactJs, Django
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h4'>
                    Finance
                </Typography>
                <Typography variant='body1'>
                    • Instruments financiers: Vanille, Exotic, Indice
                </Typography>
                <Typography variant='body1'>
                    • Risque de marché: VaR, Grecques
                </Typography>
                <Typography variant='body1'>
                    • Analyse: P&L, BackTest
                </Typography>
            </Grid>
            <Grid item>
                <Typography variant='h4'>
                    SoftSkills
                </Typography>
                <Typography variant='body1'>
                    • Esprit d'équipe
                </Typography>
                <Typography variant='body1'>
                    • Détermination
                </Typography>
                <Typography variant='body1'>
                    • Dynamique
                </Typography>
            </Grid>
        </Grid>

    );
}

export default Skills;
