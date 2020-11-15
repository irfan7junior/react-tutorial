import React, { ChangeEvent, FormEvent, useState } from 'react'
import {
  FormControl,
  Input,
  InputLabel,
  Button,
  Grid,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { DeleteForeverOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    margin: '0 auto',
    flexDirection: 'column',
  },
  grid: {
    height: '100%',
    width: '100%',
    margin: '0 auto',
    overflowY: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: '',
  },
  paper: {
    width: '90%',
    height: '40vh',
    marginTop: theme.spacing(2),
  },
}))

export interface IPerson {
  name: string
  email: string
  age: string
}

export interface IPersons extends IPerson {
  id: string
}

const defaultPerson: IPerson = {
  age: '',
  email: '',
  name: '',
}

const InputControl: React.FC = () => {
  const [person, setPerson] = useState<IPerson>(defaultPerson)
  const [people, setPeople] = useState<IPersons[]>([])
  const classes = useStyles()

  const handleOnChange = (
    event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setPerson((prevPerson) => ({
      ...prevPerson,
      [event.target.name]: event.target.value,
    }))
  }

  const handleOnSubmit = (event: FormEvent) => {
    event.preventDefault()

    const newPerson: IPersons = {
      name: person.name,
      age: person.age,
      email: person.email,
      id: new Date().getTime().toString(),
    }

    if (person.name && person.age && person.email) {
      setPeople((prevPeople) => [...prevPeople, newPerson])
    } else {
      console.log('Error')
    }
  }

  return (
    <>
      <form
        onSubmit={handleOnSubmit}
        className={classes.form}
        noValidate
        autoComplete="off"
      >
        <FormControl>
          <InputLabel htmlFor="name-field">Name</InputLabel>
          <Input
            name="name"
            value={person.name}
            onChange={handleOnChange}
            id="name-field"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email-field">Email</InputLabel>
          <Input
            name="email"
            value={person.email}
            onChange={handleOnChange}
            id="email-field"
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="age-field">Age</InputLabel>
          <Input
            name="age"
            value={person.age}
            onChange={handleOnChange}
            id="age-field"
          />
        </FormControl>
        <Button
          style={{ marginTop: '1rem' }}
          variant="contained"
          color="secondary"
          fullWidth
          type="submit"
        >
          Submit
        </Button>
      </form>
      <Paper className={classes.paper}>
        <Grid
          className={classes.grid}
          container
          spacing={1}
          direction="row"
          justify="center"
          alignItems="center"
          alignContent="center"
          wrap="nowrap"
        >
          {people.map((person) => (
            <ListItem style={{ maxWidth: '50%' }} key={person.id}>
              <ListItemAvatar>
                <Avatar>
                  <DeleteForeverOutlined />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={person.name}
                secondary={person.email}
              ></ListItemText>
            </ListItem>
          ))}
        </Grid>
      </Paper>
    </>
  )
}

export default InputControl
