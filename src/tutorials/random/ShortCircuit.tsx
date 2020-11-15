import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    minWidth: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'column',
  },
}))

const ShortCircuit: React.FC = () => {
  const classes = useStyles()
  const [text] = useState<string>('Some Text')
  return (
    <Paper className={classes.root}>
      <Typography variant="h4" color="initial">
        {text && 'The && is working'}
      </Typography>
      <Typography variant="h4" color="initial">
        {text || 'The || workaround'}
      </Typography>
    </Paper>
  )
}

export default ShortCircuit
