import React, { useCallback, useMemo, useState } from 'react'
import { Grid, Paper, Typography, Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import BigList from './BigList'
import { IFaker, randomData } from '../../data'

const useStyles = makeStyles((theme) => ({
  paper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}))

const calculateMaxAge = (people: IFaker[]): number => {
  console.log('called max age function')
  return people.reduce((final, current) => {
    if (final < current.age) {
      final = current.age
    }
    return final
  }, 0)
}

const Index: React.FC = () => {
  const classes = useStyles()
  const [counter, setCounter] = useState<number>(0)
  const [people] = useState<IFaker[]>(randomData(20))
  const [friends, setFriends] = useState<number>(0)

  const onIncrement = useCallback(() => {
    setFriends(friends + 1)
  }, [friends])

  const maxAge = useMemo(() => calculateMaxAge(people), [people])

  return (
    <Paper className={classes.paper}>
      <Grid
        className={classes.flex}
        style={{ minHeight: '15%', width: '100%' }}
        container
      >
        <Typography variant="h5" color="initial">
          Counter: {counter}
        </Typography>
        <Button
          style={{ width: '30%' }}
          variant="contained"
          color="primary"
          fullWidth
          onClick={() => setCounter((prevCounter) => prevCounter + 1)}
        >
          Increase
        </Button>
      </Grid>
      <Grid
        className={classes.flex}
        style={{ minHeight: '15%', width: '100%' }}
        container
      >
        <Typography variant="h5" color="initial">
          Friends: {friends}
        </Typography>
      </Grid>
      <Grid
        className={classes.flex}
        style={{ height: '10%', width: '100%' }}
        container
      >
        <Typography variant="h5" color="initial">
          Max Age: {maxAge}
        </Typography>
      </Grid>
      <Grid
        className={classes.flex}
        style={{ height: '50%', width: '100%', overflowY: 'auto' }}
        container
      >
        <BigList people={people} increase={onIncrement} />
      </Grid>
    </Paper>
  )
}

export default Index
