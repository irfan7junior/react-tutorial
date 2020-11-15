import React, { useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography, Grid, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))

const SimpleCounter: React.FC = () => {
  const classes = useStyles()
  const [counter, setCounter] = useState<number>(0)
  return (
    <Paper className={classes.root}>
      <Typography variant="h3" color="initial">
        Counter: {counter}
      </Typography>
      <Grid container justify="center" spacing={1}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => setCounter(counter + 1)}
        >
          Increase
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => setCounter(0)}
        >
          Reset
        </Button>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          onClick={() => setCounter(counter - 1)}
        >
          Decrease
        </Button>
      </Grid>
    </Paper>
  )
}

export default SimpleCounter
