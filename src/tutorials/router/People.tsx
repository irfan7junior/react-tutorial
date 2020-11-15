import React, { useContext } from 'react'
import { Grid, ListItem, ListItemText, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import { PeopleContext } from './index'

const People: React.FC = () => {
  const state = useContext(PeopleContext)
  return (
    <>
      <Grid
        container
        spacing={1}
        direction="column"
        justify="center"
        alignItems="center"
        alignContent="center"
        wrap="nowrap"
      >
        {state.people.map((person) => (
          <ListItem key={person.uuid} style={{ width: '50%' }}>
            <ListItemText primary={person.name} secondary={person.uuid} />
            <IconButton
              component={Link}
              to={`/people/${person.uuid}`}
              aria-label="more-info"
            >
              ...
            </IconButton>
          </ListItem>
        ))}
      </Grid>
    </>
  )
}

export default People
