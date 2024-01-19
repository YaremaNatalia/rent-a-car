import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
// import '../fonts/Manrope-SemiBold.ttf';
// import '../fonts/Manrope-Medium.ttf';
// import '../fonts/Manrope-Regular.ttf';
import './fonts.css';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './components/GlobalStyle';
// import { PersistGate } from 'redux-persist/integration/react';
// import { Provider } from 'react-redux';
// import { persistor, store } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
 
      {/* <PersistGate loading={null} persistor={persistor}> */}
        <BrowserRouter basename="/rent-a-car">
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      {/* </PersistGate> */}
  
  </React.StrictMode>
);


