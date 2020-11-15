import React from 'react'
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Button,
} from '@material-ui/core'
import { Person } from '@material-ui/icons'
import { IFaker } from '../../data'

interface ISingleList {
  person: IFaker
  increase: () => void
}

const SingleList: React.FC<ISingleList> = ({ person, increase }) => {
  return (
    <ListItem style={{ width: '50%' }}>
      <ListItemAvatar>
        <Avatar>
          <Person />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={person.name} secondary={person.age} />
      <Button variant="contained" color="secondary" onClick={increase}>
        +
      </Button>
    </ListItem>
  )
}

export default SingleList
