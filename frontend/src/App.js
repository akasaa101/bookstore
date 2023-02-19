import React from 'react'; // Add this line to import React
import './App.css';
import { Box, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { Provider } from 'react-redux'
import { store } from './store/index'

const App  = () => {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Box>
        <Typography>Hello </Typography>
      </Box>
    </ThemeProvider>
    </Provider>
  )
}
export default App;
