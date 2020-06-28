import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        paddingBottom: '127px',
        paddingTop: '127px',
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


export function Skills(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="skills">
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    COMPÉTENCES
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h4'>
                    IT
                </Typography>
                <Typography variant='body1'>
                    • Python (Pandas, Numpy), C#, VBA
                </Typography>
                <Typography variant='body1'>
                    • Django, Django Rest Framework (API REST)
                </Typography>
                <Typography variant='body1'>
                    • SQL (Postgrés, MySQL)
                </Typography>
                <Typography variant='body1'>
                    • Cloud : AWS, Gandi
                </Typography>
                <Typography variant='body1'>
                    • React, Redux, Axios
                </Typography>
                <Typography variant='body1'>
                    • HTML, CSS, Boostrap, Material-UI
                </Typography>
                <Typography variant='body1'>
                    • Git, Docker, Apache2
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
