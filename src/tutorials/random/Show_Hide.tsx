import React, { useEffect, useState } from 'react'
import { Paper, Typography, Grid, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '90%',
    width: '90%',
    margin: 'auto',
    padding: theme.spacing(2),
  },
}))

const Show_Hide: React.FC = () => {
  const classes = useStyles()
  const [show, setShow] = useState(false)
  return (
    <Paper className={classes.paper}>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        <Button
          variant="contained"
          color="secondary"
          onClick={() => setShow(!show)}
        >
          {show ? 'Hide' : 'Show'}
        </Button>
        {show && <Item />}
      </Grid>
    </Paper>
  )
}

const Item: React.FC = () => {
  const [width, setWidth] = useState<number>(window.innerWidth)

  const handleChangeEvent = () => {
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize', handleChangeEvent)
    return () => {
      window.removeEventListener('resize', handleChangeEvent)
    }
  }, [])

  return (
    <>
      <Typography variant="h5" color="initial">
        Window
      </Typography>
      <Typography variant="h5" color="initial">
        Width: {width} px
      </Typography>
    </>
  )
}

export default Show_Hide
