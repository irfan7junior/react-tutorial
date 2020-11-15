import React, { useContext } from 'react'
import { ListItem, ListItemText, Button } from '@material-ui/core'
import { IFaker } from '../../data'
import { PersonContext } from './context'

interface IPerson {
  person: IFaker
}

const Person: React.FC<IPerson> = ({ person }) => {
  const context = useContext(PersonContext)
  return (
    <ListItem>
      <ListItemText primary={person.name} secondary={person.uuid} />
      <Button
        onClick={() => context.removePerson(person.uuid)}
        style={{ marginLeft: '1rem' }}
        variant="contained"
        color="default"
      >
        X
      </Button>
    </ListItem>
  )
}

export default Person
