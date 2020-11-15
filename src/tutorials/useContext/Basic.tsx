import React, { useState } from 'react'
import { Paper, Typography } from '@material-ui/core'
import { IFaker, randomData } from '../../data'
import { PersonContext } from './context'
import People from './People'

const Basic: React.FC = () => {
  const [people, setPeople] = useState<IFaker[]>(randomData(5))
  const removePerson = (id: string) => {
    setPeople((prevPeople) => prevPeople.filter((person) => person.uuid !== id))
  }

  return (
    <PersonContext.Provider value={{ people, removePerson }}>
      <Paper
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="h4"
          style={{ fontWeight: 'bolder' }}
          color="primary"
        >
          Context API / useContext
        </Typography>
        <People />
      </Paper>
    </PersonContext.Provider>
  )
}

export default Basic
