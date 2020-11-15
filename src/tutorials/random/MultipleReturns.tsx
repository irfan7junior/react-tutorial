import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import { Paper, Typography } from '@material-ui/core'
import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    minHeight: '70%',
    maxHeight: '70%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
}))

const URL = 'https://api.github.com/users/QuincyLarson'

interface IUser {
  login: string
  id: number
  avatar_url: string
  name: string
}

const MultipleReturns: React.FC = (props) => {
  const classes = useStyles(props)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isError, setIsError] = useState<boolean>(false)
  const [user, setUser] = useState<IUser>()

  const fetchUser = async () => {
    try {
      const response = await Axios.get<IUser>(URL)
      if (response.status < 200 || response.status >= 300) {
        throw new Error('Could not able to fetch data')
      }
      const result = response.data
      setIsLoading(false)
      setUser(result)
      return result
    } catch (error) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchUser()
    return () => {
      return
    }
  }, [])

  if (isLoading) {
    return (
      <Paper className={classes.root}>
        <Typography variant="h3" color="initial">
          Loading...
        </Typography>
      </Paper>
    )
  }
  if (isError) {
    return (
      <Paper className={classes.root}>
        <Typography variant="h3" color="initial">
          Error...
        </Typography>
      </Paper>
    )
  }
  if (user) {
    return (
      <Paper className={classes.root}>
        <Typography variant="h4" color="initial">
          {user.name}
        </Typography>
      </Paper>
    )
  }

  return (
    <Paper className={classes.root}>
      <Typography variant="h4" color="initial">
        Default User
      </Typography>
    </Paper>
  )
}

export default MultipleReturns
