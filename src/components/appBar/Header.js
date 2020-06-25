import React, { useState } from 'react';
import '../style.scss';
import ImageAnimated from '../appBar/ImageAnimated';
// import { Link as RouterLink } from 'react-router-dom';
import { Link } from 'react-scroll'

// Import MATERIAL UI
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Box from '@material-ui/core/Box';


const useStyles = makeStyles((theme) => ({
    sectionMobile: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    sectionSiteWeb: {
        // display: 'block',
        [theme.breakpoints.down('sm')]: {
            display: 'none',
        },
    },
    grow: {
        flexGrow: 1,
    },
    hover: {
        '&:hover': {
            cursor: 'pointer',
        },
    },
    largeImg: {
        width: '150px',
        height: '150px',
        background: 'grey',
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.9)',
        transition: 'box-shadow 0.5s',
        willChange: 'transform',
        border: '15px solid white',
    },
    name: {
        fontWeight: 'bold',
    },
    item: {
        fontWeight: 'bold',
        color: '#b0bec5',
    },
    sideNav: {
        backgroundColor: '#485e8a',
    },
}));

const Header = React.forwardRef((props, ref) => {

    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
    // const [activeLink, setActiveLink] = useState(0);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id="mobileMenu"
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={Boolean(mobileMoreAnchorEl)}
            onClose={handleMobileMenuClose}
        >
            <MenuItem component={Link} activeClass="active" to="about" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">A propos</Typography>
            </MenuItem>
            <MenuItem component={Link} activeClass="active" to="education" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">Formation</Typography>
            </MenuItem>
            <MenuItem component={Link} activeClass="active" to="experiences" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">Experiences</Typography>
            </MenuItem>
            <MenuItem component={Link} activeClass="active" to="projects" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">Projets</Typography>
            </MenuItem>
            <MenuItem component={Link} activeClass="active" to="skills" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">Compétences</Typography>
            </MenuItem>
            <MenuItem component={Link} activeClass="active" to="interests" spy={true} smooth={true} duration={500} onClick={handleMobileMenuClose}>
                <Typography color="inherit">Centre d'intérêt</Typography>
            </MenuItem>
        </Menu>
    );

    return (
        <Box className={classes.grow} >
            <AppBar position="fixed" id="sideNav" className={classes.sideNav}>
                <Toolbar>
                    <div className={classes.sectionMobile}>
                        <Typography className={classes.name}>
                            Hippolyte Bringer
                        </Typography>
                        <div className={classes.grow} />
                        <IconButton
                            color="inherit"
                            aria-label="menu"
                            onClick={handleMobileMenuOpen}
                        >
                            <MenuIcon />
                        </IconButton>
                    </div>
                    <Grid container direction="column" justify="center" className={classes.sectionSiteWeb} spacing={2}>
                        <Grid item container justify="center">
                            <ImageAnimated />
                        </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="about" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    A propos
                                </Typography>
                            </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="education" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    Formation
                                </Typography>
                            </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="experiences" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    Expériences
                                </Typography>
                            </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="projects" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    Projets
                                </Typography>
                            </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="skills" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    Compétences
                                </Typography>
                            </Grid>
                            <Grid component={Link} item className={classes.hover} activeClass="active" to="interests" spy={true} smooth={true} duration={500}>
                                <Typography variant="button" className={classes.item}>
                                    Centre d'intérêt
                                </Typography>
                            </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
                {renderMobileMenu}
        </Box>
    );
})

export default Header;


