import React from 'react';
import './App.css';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { Provider } from 'react-redux'
import { store } from './store/index'
import Auth from './pages/Auth';
const App  = () => {

  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
      <Auth/>
    </ThemeProvider>
    </Provider>
  )
}
export default App;
