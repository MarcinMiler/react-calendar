import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components'

import { store } from './store'
import { Home } from './Views/Home'
import { GlobalStyle, theme } from './Theme'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <React.Fragment>
                <GlobalStyle />
                <Home />
            </React.Fragment>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root')
)
registerServiceWorker()
