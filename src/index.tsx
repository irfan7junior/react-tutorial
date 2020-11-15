import { createMuiTheme, ThemeProvider } from '@material-ui/core'
import { purple, red } from '@material-ui/core/colors'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

const theme = createMuiTheme({
  palette: {
    primary: purple,
    secondary: red,
  },
})

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
