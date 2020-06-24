import React, { useState } from 'react';
import '../style.scss';
import ImageAnimated from '../appBar/ImageAnimated';

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
    },
    sideNav: {
        backgroundColor: '#343a40',
    },
}));

const Header = React.forwardRef((props, ref) => {

    const classes = useStyles();
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileClick = (value) => () => {
        ref.current.scrollTo(value)
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
            <MenuItem onClick={handleMobileClick(0)}>
                <Typography color="inherit">A propos</Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileClick(1.6)}>
                <Typography color="inherit">Formation</Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileClick(3.65)}>
                <Typography color="inherit">Experiences</Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileClick(5.55)}>
                <Typography color="inherit">Projets</Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileClick(7.95)}>
                <Typography color="inherit">Compétences</Typography>
            </MenuItem>
            <MenuItem onClick={handleMobileClick(9.45)}>
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
                        <Grid item onClick={() => ref.current.scrollTo(0)} className={classes.hover}>
                            <Typography variant="button" className={classes.item}>
                                A propos
                            </Typography>
                        </Grid>
                        <Grid item onClick={() => ref.current.scrollTo(1)} className={classes.hover}>
                            <Typography variant="button" className={classes.item}>
                                Formation
                            </Typography>
                        </Grid>
                        <Grid item onClick={() => ref.current.scrollTo(2.3)} className={classes.hover}>
                            <Typography variant="button" className={classes.item}>
                                Experiences
                            </Typography>
                        </Grid>
                        <Grid item onClick={() => ref.current.scrollTo(3.7)} className={classes.hover}>
                            <Typography variant="button" className={classes.item}>
                                Projets
                            </Typography>
                        </Grid>
                        <Grid item onClick={() => ref.current.scrollTo(5.35)} className={classes.hover}>
                            <Typography variant="button" className={classes.item}>
                                Compétences
                            </Typography>
                        </Grid>
                        <Grid item onClick={() => ref.current.scrollTo(6.4)} className={classes.hover}>
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


