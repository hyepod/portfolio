import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        // paddingBottom: '255px',
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


export function Education(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="education" >
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    FORMATION
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            UBB – Universitatea Babes-Bolyai
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            sept 2018 - feb 2019
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Erasmus – Échange académique
                </Typography>
                <Typography variant='body1'>
                    Differential Equations, Probability et Statistics, Python, Databases
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            ESILV Paris – École Supérieure d’Ingénieurs Léonard de Vinci
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            sept 2016 - Août 2019
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Diplôme d’ingénieur - Majeure Ingénierie Financière
                </Typography>
                <Typography variant='body1'>
                    Mathématiques financières, Finance de Marché, Produits dérivés, Risques, IT for Finance
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            ESILV Paris – Classes préparatoires scientifiques intégrées
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            sept 2014 - Août 2016
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Classes préparatoires scientifiques intégrées
                </Typography>
                <Typography variant='body1'>
                    Mathématiques, Physique, Sciences de l’Ingénieur, Informatique
                </Typography>
            </Grid>
        </Grid>

    );
}

export default Education;
