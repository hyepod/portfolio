import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        paddingTop: '127.5px',
        paddingBottom: '127.5px',
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


export function Experiences(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="experiences">
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    EXPÉRIENCES
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            Société Générale
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            oct 2019 - Avril 2020
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Structurer indicielle
                </Typography>
                <Typography variant='body1'>
                    • Calcul et contrôle d’indices (Python & VBA)
                </Typography>
                <Typography variant='body1'>
                    • Création d’un outil d’analyse de P&L
                </Typography>
                <Typography variant='body1'>
                    • Création d’un outil de génération de TermSheet et de contrôle de liquidité
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            Société Générale
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            mars 2019 - Août 2020
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Risk Analyst Forex
                </Typography>
                <Typography variant='body1'>
                    • Suivi des risques de marché (VaR, STT, Vega, Vanna…), suivi du P&L
                </Typography>
                <Typography variant='body1'>
                    • Création / Amélioration d’outils d’analyse (Python & VBA)
                </Typography>
                <Typography variant='body1'>
                    • Participation aux réunions hebdomadaire de contrôle des risques Fx
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            MicroVallée
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Juin 2015 - Août 2015
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    A FAIRE
                </Typography>
                <Typography variant='body1'>
                    A FAIRE
                </Typography>
            </Grid>
        </Grid>
    );
}

export default Experiences;
