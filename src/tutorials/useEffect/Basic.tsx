import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))

const Basic: React.FC = (props) => {
  const [counter, setCounter] = useState<number>(0)
  const classes = useStyles(props)

  useEffect(() => {
    if (counter > 0) {
      document.title = `${counter}`
    }
    return () => {
      return
    }
  })

  useEffect(() => {
    console.log('useEffect only single time')
    return () => {
      return
    }
  }, [])

  console.log('hello world')

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1} direction="column">
        <Typography variant="h4" color="initial">
          Counter: {counter}
        </Typography>
        <Grid container spacing={1} justify="center">
          <Button
            onClick={() => setCounter(counter + 1)}
            variant="outlined"
            color="default"
            fullWidth
          >
            Increase
          </Button>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Basic
