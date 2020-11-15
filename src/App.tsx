import React from 'react'
import { Paper, Typography, AppBar, Toolbar, Grid } from '@material-ui/core'

import { makeStyles } from '@material-ui/core/styles'

import Element from './tutorials/memo_call/Index'
import { cyan, grey } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  app: {
    padding: 0,
    margin: 0,
    minHeight: '100vh',
    maxHeight: '100vh',
    backgroundColor: grey[500],
  },
  mainGrid: {
    height: '80vh',
    backgroundColor: cyan[50],
    margin: theme.spacing(2),
    borderRadius: theme.spacing(1),
    overflowY: 'auto',
  },
}))

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <Paper elevation={5} className={classes.app}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h6">ReactApp</Typography>
        </Toolbar>
      </AppBar>
      <Grid container spacing={1}>
        <Grid item lg={2}></Grid>
        <Grid
          className={classes.mainGrid}
          container
          alignItems="center"
          justify="flex-start"
          direction="column"
          item
          lg={8}
          sm={12}
        >
          <Element />
        </Grid>
        <Grid item lg={2}></Grid>
      </Grid>
    </Paper>
  )
}

export default App
