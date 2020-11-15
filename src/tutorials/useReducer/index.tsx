import React, { ChangeEvent, useReducer, useState } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Paper,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
} from '@material-ui/core'
import { Modal } from './Modal'

import { makeStyles } from '@material-ui/core/styles'
import { AccountCircle } from '@material-ui/icons'
import { IState, reducer } from './reducer'

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    height: '50vh',
    width: '50%',
    margin: '0 auto',
    overflowY: 'auto',
    position: 'absolute',
  },
}))

const defaultValues = (): IState => {
  return {
    people: [],
    isModalOpen: false,
    modalContent: '',
  }
}

const Index: React.FC = () => {
  const classes = useStyles()
  const [state, dispatch] = useReducer(reducer, defaultValues())

  const [name, setName] = useState<string>('')

  const hideModal = () => {
    dispatch({ type: 'HIDE_MODAL' })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (name) {
      dispatch({ type: 'ADD_ITEM', payload: name })
      setName('')
    } else {
      dispatch({ type: 'EMPTY_FIELD' })
    }
    e.preventDefault()
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (state.isModalOpen) {
      dispatch({ type: 'HIDE_MODAL' })
    }
    setName(e.currentTarget.value)
  }

  return (
    <>
      {state.isModalOpen && (
        <Modal hideModal={hideModal} text={state.modalContent} />
      )}
      <form onSubmit={handleSubmit} action="#" noValidate autoComplete="off">
        <FormControl>
          <InputLabel htmlFor="name-field">Name</InputLabel>
          <Input
            onFocus={() => dispatch({ type: 'HIDE_MODAL' })}
            id="name-field"
            value={name}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary">
            Submit
          </Button>
        </FormControl>
      </form>
      <Paper className={classes.paper}>
        {state.people.map((person) => (
          <ListItem key={person.id} style={{ width: '90%', margin: '0 auto' }}>
            <ListItemAvatar>
              <Avatar>
                <AccountCircle />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary={person.name.toUpperCase()}
              secondary={person.id}
            />
            <Button
              onClick={() =>
                dispatch({ type: 'REMOVE_ITEM', payload: person.id })
              }
              variant="contained"
              color="secondary"
            >
              X
            </Button>
          </ListItem>
        ))}
      </Paper>
    </>
  )
}

export default Index
