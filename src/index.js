import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'

import { Home } from './Views/Home'
import { GlobalStyle, theme } from './Theme'
import registerServiceWorker from './registerServiceWorker'

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <Home />
        </React.Fragment>
    </ThemeProvider>,
    document.getElementById('root')
)
registerServiceWorker()
