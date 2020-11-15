import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Grid, Typography } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))

const CleanUp: React.FC = (props) => {
  const classes = useStyles(props)
  const [width, setWidth] = useState<number>(window.innerWidth)

  const onSizeChange = (): void => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    console.log('inside useEffect')
    window.addEventListener('resize', onSizeChange)
    return () => {
      window.removeEventListener('resize', onSizeChange)
    }
  }, [])

  return (
    <Paper className={classes.root}>
      <Grid container spacing={1} direction="column">
        <Typography variant="h4" color="initial">
          Window Size
        </Typography>
        <Typography align="center" variant="h5" color="initial">
          {width} px
        </Typography>
      </Grid>
    </Paper>
  )
}

export default CleanUp
