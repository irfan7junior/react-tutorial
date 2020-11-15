import React from 'react'
import { Paper, Button, ButtonGroup } from '@material-ui/core'
import { Link } from 'react-router-dom'

const Navbar: React.FC = () => {
  return (
    <Paper>
      <ButtonGroup
        variant="contained"
        color="secondary"
        aria-label="outlined primary button group"
      >
        <Button component={Link} to="/">
          HOME
        </Button>
        <Button component={Link} to="/about">
          ABOUT
        </Button>
        <Button component={Link} to="/people">
          PEOPLE
        </Button>
      </ButtonGroup>
    </Paper>
  )
}

export default Navbar
