// theme.js
import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#bb86fc', // Customize as needed
        },
        background: {
            paper: '#121212', // Dark background for paper components
            default: '#121212', // Default dark background
        },
        text: {
            primary: '#e0e0e0', // Light text on dark background
            secondary: '#b0b0b0', // Slightly darker text
        },
        divider: '#333', // Divider color for dark mode
    },
});

export default darkTheme;
