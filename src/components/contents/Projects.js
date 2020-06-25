import React from 'react';
import '../style.scss';

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import OpenInNew from '@material-ui/icons/OpenInNew';


const useStyles = makeStyles((theme) => ({
    firstItem: {
        paddingBottom: '127.5px',
        paddingTop: '127.5px',
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


export function Projects(props) {
    const classes = useStyles();

    return (
        <Grid item container className={classes.firstItem} direction="column" id="projects">
            <Grid item className={classes.spaceBottom}>
                <Typography variant='h3'>
                    PROJETS
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Link href="https://wikoa.fr" target="_blank" className="linkTitle" variant="h4">
                            Wikoa.fr
                            <OpenInNew style={{ marginLeft: '8px', marginBottom: '-3px' }} />
                        </Link>

                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Avril 2020 - Juin 2020
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Site Web
                </Typography>
                <Typography variant='body1'>
                    • FrontEnd : ReactJs, Redux, Axios
                </Typography>
                <Typography variant='body1'>
                    • Backend : Django, Django-Rest-Framework
                </Typography>
                <Typography variant='body1'>
                    • Cloud
                </Typography>
                <Typography variant='body1'>
                    • Material UI
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Link href="http://plutotquoi.com" target="_blank" className="linkTitle" variant="h4">
                            Plutotquoi.com
                            <OpenInNew style={{ marginLeft: '8px', marginBottom: '-3px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            Avril 2019 - Juin 2019
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Site Web
                </Typography>
                <Typography variant='body1'>
                    • Django
                </Typography>
                <Typography variant='body1'>
                    • JavaScript / Ajax
                </Typography>
                <Typography variant='body1'>
                    • HTML / CSS
                </Typography>
                <Typography variant='body1'>
                    • Bootstrap
                </Typography>
            </Grid>
            <Grid item className={classes.spaceBottom}>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Typography variant='h4'>
                            Monte-Carlo Simulation & Pricing
                        </Typography>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            2017 - 2018
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Projet d’innovation en Finance – Team leader
                </Typography>
                <Typography variant='body1'>
                    • Optimisation Monte-Carlo, réduction de la variance et pricing d’options
                </Typography>
                <Typography variant='body1'>
                    • Langage utilisé : C#
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='space-between' alignItems='center'>
                    <Grid item xs={12} sm="auto">
                        <Link href="http://vmbringer.fr" target="_blank" className="linkTitle" variant="h4">
                            Vmbringer.fr
                            <OpenInNew style={{ marginLeft: '8px', marginBottom: '-3px' }} />
                        </Link>
                    </Grid>
                    <Grid item>
                        <Typography variant='subtitle1' color='textSecondary'>
                            2015
                        </Typography>
                    </Grid>
                </Grid>
                <Typography className='subheading'>
                    Site web peinture
                </Typography>
                <Typography variant='body1'>
                    • HTML / CSS
                </Typography>
                <Typography variant='body1'>
                    • Bootstrap
                </Typography>
            </Grid>
        </Grid>

    );
}

export default Projects;
