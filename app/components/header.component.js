import React from 'react';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import MenuIcon from 'material-ui-icons/Menu';

const About = () =>
    <div>
        <AppBar>
            <Toolbar>
                <IconButton color="contrast" aria-label="Menu">
                    <MenuIcon />
                </IconButton>
                <h2>
                    Title
                </h2>
            </Toolbar>
        </AppBar>
    </div>;


export default About;
