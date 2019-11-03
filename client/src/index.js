import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';

import './index.css';

import * as serviceWorker from './serviceWorker';
import theme from './theme';


const App = lazy(() => import('./App'));

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <Suspense fallback={<div>Loading</div>}>
            <App />
        </Suspense>
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorker.register();
