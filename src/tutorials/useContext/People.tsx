import { Paper } from '@material-ui/core'
import React, { useContext } from 'react'
import { PersonContext } from './context'
import Person from './Person'

const People: React.FC = () => {
  const { people } = useContext(PersonContext)

  return (
    <Paper>
      {people.map((person) => (
        <Person key={person.uuid} person={person} />
      ))}
    </Paper>
  )
}

export default People
