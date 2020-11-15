import React, { useState } from 'react'

import Typography from '@material-ui/core/Typography'
import {
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Button,
  IconButton,
} from '@material-ui/core'

import { IFaker, randomData } from '../../data'
import { Delete } from '@material-ui/icons'

import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  },
}))

const Array = () => {
  const classes = useStyles()
  const [data, setData] = useState<IFaker[]>(randomData(5))

  const removeItem = (uuid: string): void => {
    setData((prevData) => prevData.filter((item) => item.uuid !== uuid))
  }

  return (
    <Paper className={classes.root}>
      <Typography align="center" variant="h4" color="secondary">
        React Array useState
      </Typography>
      <ul>
        {data.map((item) => (
          <List key={item.uuid} component="nav">
            <ListItem>
              <ListItemText
                primary={item.name}
                secondary={item.uuid.slice(0, 4)}
              />
              <ListItemAvatar>
                <Avatar>
                  <IconButton
                    aria-label="delete-item"
                    onClick={() => removeItem(item.uuid)}
                  >
                    <Delete />
                  </IconButton>
                </Avatar>
              </ListItemAvatar>
            </ListItem>
          </List>
        ))}
      </ul>
      <Button
        fullWidth
        variant="outlined"
        color="secondary"
        onClick={() => setData([])}
      >
        Clear
      </Button>
    </Paper>
  )
}

export default Array
