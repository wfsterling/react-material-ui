import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';



const palette = createMuiTheme({
  palette: {
    primary: {
      light: '#5931b7',
      main: '#1d0186',
      dark: '#000058',
      contrastText: '#fff',
    },
    secondary: {
      light: '#5de7e9',
      main: '#00b4b7',
      dark: '#008487',
      contrastText: '#000',
    },
  },
});
const themeName = 'IndigoTheoryTheme';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  
  return (
    <div className={classes.root}>
      <ThemeProvider theme={palette}>

        <AppBar position="static">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>

      </ThemeProvider>
    </div>
  );
}