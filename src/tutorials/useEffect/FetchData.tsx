import React, { useEffect, useState } from 'react'

import { makeStyles } from '@material-ui/core/styles'
import {
  Paper,
  Typography,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from '@material-ui/core'
import Axios from 'axios'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    padding: theme.spacing(2),
    maxHeight: '70%',
  },
  mainGrid: {
    minWidth: '70%',
    minHeight: '90%',
    maxHeight: '90%',
    overflowY: 'scroll',
  },
  item: {
    flexGrow: 0,
    flexBasis: '33%',
    flexShrink: 0,
  },
}))

interface IGithubUsers {
  login: string
  id: number
  node_id: string
  avatar_url: string
}

const URL: string = 'https://api.github.com/users'

const FetchData: React.FC = (props) => {
  const classes = useStyles(props)
  const [users, setUsers] = useState<IGithubUsers[]>([])

  const fetchData = async () => {
    const response = await Axios.get<IGithubUsers[]>(URL)
    const data = response.data
    setUsers(data)
    console.log(data)
  }

  useEffect(() => {
    fetchData()
    return () => {
      return
    }
  }, [])

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h3" color="initial">
        Github Users
      </Typography>
      <Grid
        className={classes.mainGrid}
        direction="row"
        justify="center"
        alignItems="flex-start"
        alignContent="flex-start"
        wrap="wrap"
        container
        spacing={1}
      >
        {users.map((user) => (
          <ListItem className={classes.item} key={user.id}>
            <ListItemAvatar>
              <Avatar src={user.avatar_url}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={user.login}
              secondary={user.node_id}
            ></ListItemText>
          </ListItem>
        ))}
      </Grid>
    </Paper>
  )
}

export default FetchData
