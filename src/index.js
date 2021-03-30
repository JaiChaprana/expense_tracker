import React from 'react';
import ReactDOM from 'react-dom';
import {SpeechProvider} from '@speechly/react-client';

import {Provider} from './context/context';
import App from './App';
import './index.css';

ReactDOM.render(
    <SpeechProvider appId="fba14f6c-774f-4c69-a2f2-3432546ce66e" language="en-US">
        <Provider>
            <App />,
        </Provider> 
    </SpeechProvider>,
    document.getElementById('root')
);