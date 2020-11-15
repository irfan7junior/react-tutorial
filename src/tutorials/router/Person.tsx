import React, { useContext, useEffect, useState } from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link, useParams } from 'react-router-dom'
import { PeopleContext } from './index'

const Person: React.FC = () => {
  const { id } = useParams<{ id: string }>()
  const [name, setName] = useState<string>('Default Name')
  const state = useContext(PeopleContext)

  useEffect(() => {
    const index = state.people.findIndex((person) => person.uuid === id)
    if (index !== -1) setName(state.people[index].name)
    return () => {
      return
    }
  }, [id, state.people])

  return (
    <>
      <Typography variant="h4" color="primary">
        {name}
      </Typography>
      <Button
        style={{ width: '50%' }}
        fullWidth
        variant="outlined"
        color="primary"
        component={Link}
        to="/people"
      >
        Back
      </Button>
    </>
  )
}

export default Person
