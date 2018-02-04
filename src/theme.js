import { createMuiTheme } from 'material-ui/styles';

export default createMuiTheme({
    palette: {
        primary: {
          light: '#ffcf5c',
          main: '#ff9e28',
          dark: '#c66f00',
          contrastText: '#000000',
        },
        secondary: {
          light: '#ffffff',
          main: '#ffffff',
          dark: '#cccccc',
          contrastText: '#000',
        },
    },
    overrides: {
        MuiButton: {
            raisedPrimary: {
            },
        },     
    },
  });