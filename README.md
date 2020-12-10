# React

- useState

    ```jsx
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
    ```

- useEffect
    - Basic

        ```jsx
        import React, { useEffect, useState } from 'react'

        import { makeStyles } from '@material-ui/core/styles'
        import { Paper, Grid, Typography, Button } from '@material-ui/core'

        const useStyles = makeStyles((theme) => ({
          root: {
            padding: theme.spacing(2),
          },
        }))

        const Basic: React.FC = (props) => {
          const [counter, setCounter] = useState<number>(0)
          const classes = useStyles(props)

          useEffect(() => {
            if (counter > 0) {
              document.title = `${counter}`
            }
            return () => {
              return
            }
          })

          useEffect(() => {
            console.log('useEffect only single time')
            return () => {
              return
            }
          }, [])

          console.log('hello world')

          return (
            <Paper className={classes.root}>
              <Grid container spacing={1} direction="column">
                <Typography variant="h4" color="initial">
                  Counter: {counter}
                </Typography>
                <Grid container spacing={1} justify="center">
                  <Button
                    onClick={() => setCounter(counter + 1)}
                    variant="outlined"
                    color="default"
                    fullWidth
                  >
                    Increase
                  </Button>
                </Grid>
              </Grid>
            </Paper>
          )
        }

        export default Basic
        ```

    - Clean-Up

        ```jsx
        import React, { useEffect, useState } from 'react'

        import { makeStyles } from '@material-ui/core/styles'
        import { Paper, Grid, Typography } from '@material-ui/core'

        const useStyles = makeStyles((theme) => ({
          root: {
            padding: theme.spacing(2),
          },
        }))

        const CleanUp: React.FC = (props) => {
          const classes = useStyles(props)
          const [width, setWidth] = useState<number>(window.innerWidth)

          const onSizeChange = (): void => {
            setWidth(window.innerWidth)
          }

          useEffect(() => {
            console.log('inside useEffect')
            window.addEventListener('resize', onSizeChange)
            return () => {
              window.removeEventListener('resize', onSizeChange)
            }
          }, [])

          return (
            <Paper className={classes.root}>
              <Grid container spacing={1} direction="column">
                <Typography variant="h4" color="initial">
                  Window Size
                </Typography>
                <Typography align="center" variant="h5" color="initial">
                  {width} px
                </Typography>
              </Grid>
            </Paper>
          )
        }

        export default CleanUp
        ```

    - FetchData

        ```jsx
        import React, { useEffect, useState } from 'react'

        import { makeStyles } from '@material-ui/core/styles'
        import {
          Paper,
          Typography,
          Grid,
          ListItem,
          ListItemAvatar,
          Avatar,
          ListItemText,
        } from '@material-ui/core'
        import Axios from 'axios'

        const useStyles = makeStyles((theme) => ({
          root: {
            marginTop: theme.spacing(2),
            padding: theme.spacing(2),
            maxHeight: '70%',
          },
          mainGrid: {
            minWidth: '70%',
            minHeight: '90%',
            maxHeight: '90%',
            overflowY: 'scroll',
          },
          item: {
            flexGrow: 0,
            flexBasis: '33%',
            flexShrink: 0,
          },
        }))

        interface IGithubUsers {
          login: string
          id: number
          node_id: string
          avatar_url: string
        }

        const URL: string = 'https://api.github.com/users'

        const FetchData: React.FC = (props) => {
          const classes = useStyles(props)
          const [users, setUsers] = useState<IGithubUsers[]>([])

          const fetchData = async () => {
            const response = await Axios.get<IGithubUsers[]>(URL)
            const data = response.data
            setUsers(data)
            console.log(data)
          }

          useEffect(() => {
            fetchData()
            return () => {
              return
            }
          }, [])

          return (
            <Paper className={classes.root}>
              <Typography align="center" variant="h3" color="initial">
                Github Users
              </Typography>
              <Grid
                className={classes.mainGrid}
                direction="row"
                justify="center"
                alignItems="flex-start"
                alignContent="flex-start"
                wrap="wrap"
                container
                spacing={1}
              >
                {users.map((user) => (
                  <ListItem className={classes.item} key={user.id}>
                    <ListItemAvatar>
                      <Avatar src={user.avatar_url}></Avatar>
                    </ListItemAvatar>
                    <ListItemText
                      primary={user.login}
                      secondary={user.node_id}
                    ></ListItemText>
                  </ListItem>
                ))}
              </Grid>
            </Paper>
          )
        }

        export default FetchData
        ```

- useRef

    ```jsx
    import React, { useEffect, useRef } from 'react'
    import {
      Input,
      InputLabel,
      Button,
      FormControl,
      FormGroup,
      Typography,
    } from '@material-ui/core'

    const Basic: React.FC = () => {
      const refEl = useRef<HTMLInputElement>(null)
      const refDiv = useRef<HTMLDivElement>(null)

      const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        console.log(refEl.current)
        console.log(refDiv.current)
      }

      useEffect(() => {
        refEl.current?.focus()
        return () => {
          return
        }
      }, [])

      return (
        <>
          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <FormControl component="fieldset">
              <FormGroup>
                <InputLabel htmlFor="name-field">Name</InputLabel>
                <Input inputRef={refEl} id="name-field" />
                <Button type="submit" variant="contained" color="primary">
                  Submit
                </Button>
              </FormGroup>
            </FormControl>
          </form>
          <div ref={refDiv}>
            <Typography variant="h5" color="initial">
              Hello World
            </Typography>
          </div>
        </>
      )
    }

    export default Basic
    ```

- Form Control

    ```jsx
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
    ```

- useReducer
    - reducer

        ```jsx
        export interface IPerson {
          id: string
          name: string
        }

        export interface IState {
          people: IPerson[]
          isModalOpen: boolean
          modalContent: string
        }

        export type Action =
          | { type: 'ADD_ITEM'; payload: string }
          | { type: 'EMPTY_FIELD' }
          | { type: 'HIDE_MODAL' }
          | { type: 'REMOVE_ITEM'; payload: string }

        export const reducer = (state: IState, action: Action): IState => {
          if (action.type === 'ADD_ITEM') {
            const newPerson: IPerson = {
              name: action.payload,
              id: new Date().getTime().toString(),
            }
            return {
              ...state,
              people: [...state.people, newPerson],
              isModalOpen: true,
              modalContent: 'Item Added!',
            }
          }
          if (action.type === 'EMPTY_FIELD') {
            return {
              ...state,
              isModalOpen: true,
              modalContent: 'Field Empty',
            }
          }
          if (action.type === 'HIDE_MODAL') {
            return {
              ...state,
              isModalOpen: false,
            }
          }
          if (action.type === 'REMOVE_ITEM') {
            const persons: IPerson[] = [
              ...state.people.filter((person) => person.id !== action.payload),
            ]
            return {
              ...state,
              people: persons,
              isModalOpen: true,
              modalContent: 'Item Removed!',
            }
          }

          throw new Error('Wrong type action is provided')
        }
        ```

    - index.tsx

        ```jsx
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
        ```

    - modal.tsx

        ```jsx
        import React, { useEffect } from 'react'
        import { Paper, Typography } from '@material-ui/core'

        interface IModal {
          text: string
          hideModal: () => void
        }

        const Modal: React.FC<IModal> = ({ text, hideModal }) => {
          useEffect(() => {
            window.setTimeout(hideModal, 3000)
            return () => {
              return
            }
          }, [hideModal])

          return (
            <>
              <Paper style={{ padding: '1px' }}>
                <Typography color="secondary">{text.toUpperCase()}</Typography>
              </Paper>
            </>
          )
        }

        export { Modal }
        ```

- useContext
    - context.ts

        ```jsx
        import React from 'react'
        import { IFaker } from '../../data'

        export interface IPersonContext {
          people: IFaker[]
          removePerson: (id: string) => void
        }

        export const PersonContext = React.createContext<IPersonContext>({
          people: [],
          removePerson: (id: string) => {},
        })
        ```

    - basic.tsx

        ```jsx
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
        ```

    - people.tsx

        ```jsx
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
        ```

    - person.tsx

        ```jsx
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
        ```

- router
    - index.tsx

        ```jsx
        import React, { useState } from 'react'
        import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
        import Home from './Home'
        import About from './About'
        import Error from './Error'
        import People from './People'
        import Navbar from './Navbar'
        import Person from './Person'
        import { IFaker, randomData } from '../../data'

        interface IPeopleContext {
          people: IFaker[]
        }

        export const PeopleContext = React.createContext<IPeopleContext>({ people: [] })

        const Index: React.FC = () => {
          const [people] = useState<IFaker[]>(randomData(5))
          return (
            <PeopleContext.Provider value={{ people }}>
              <Router>
                <Navbar />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/about" component={About} />
                  <Route exact path="/people" component={People} />
                  <Route path="/people/:id" component={Person} />
                  <Route path="*" component={Error} />
                </Switch>
              </Router>
            </PeopleContext.Provider>
          )
        }

        export default Index
        ```

    - Navbar.tsx

        ```jsx
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
        ```

- memo call
    - useMemo

        ```jsx
        import React, { useCallback, useMemo, useState } from 'react'
        import { Grid, Paper, Typography, Button } from '@material-ui/core'
        import { makeStyles } from '@material-ui/core/styles'
        import BigList from './BigList'
        import { IFaker, randomData } from '../../data'

        const useStyles = makeStyles((theme) => ({
          paper: {
            height: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
          },
          flex: {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          },
        }))

        const calculateMaxAge = (people: IFaker[]): number => {
          console.log('called max age function')
          return people.reduce((final, current) => {
            if (final < current.age) {
              final = current.age
            }
            return final
          }, 0)
        }

        const Index: React.FC = () => {
          const classes = useStyles()
          const [counter, setCounter] = useState<number>(0)
          const [people] = useState<IFaker[]>(randomData(20))
          const [friends, setFriends] = useState<number>(0)

          const onIncrement = useCallback(() => {
            setFriends(friends + 1)
          }, [friends])

          const maxAge = useMemo(() => calculateMaxAge(people), [people])

          return (
            <Paper className={classes.paper}>
              <Grid
                className={classes.flex}
                style={{ minHeight: '15%', width: '100%' }}
                container
              >
                <Typography variant="h5" color="initial">
                  Counter: {counter}
                </Typography>
                <Button
                  style={{ width: '30%' }}
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => setCounter((prevCounter) => prevCounter + 1)}
                >
                  Increase
                </Button>
              </Grid>
              <Grid
                className={classes.flex}
                style={{ minHeight: '15%', width: '100%' }}
                container
              >
                <Typography variant="h5" color="initial">
                  Friends: {friends}
                </Typography>
              </Grid>
              <Grid
                className={classes.flex}
                style={{ height: '10%', width: '100%' }}
                container
              >
                <Typography variant="h5" color="initial">
                  Max Age: {maxAge}
                </Typography>
              </Grid>
              <Grid
                className={classes.flex}
                style={{ height: '50%', width: '100%', overflowY: 'auto' }}
                container
              >
                <BigList people={people} increase={onIncrement} />
              </Grid>
            </Paper>
          )
        }

        export default Index
        ```

    - React.memo

        ```jsx
        import React from 'react'
        import { Grid } from '@material-ui/core'
        import SingleList from './SingleList'
        import { IFaker } from '../../data'
        import { makeStyles } from '@material-ui/core/styles'

        interface IBigList {
          people: IFaker[]
          increase: () => void
        }

        const useStyles = makeStyles((theme) => ({
          grid: {
            maxHeight: '100%',
            maxWidth: '100%',
            overFlowY: 'auto',
          },
        }))

        const BigList: React.FC<IBigList> = React.memo(({ people, increase }) => {
          const classes = useStyles()
          console.log('Big List')
          return (
            <Grid
              className={classes.grid}
              container
              spacing={1}
              direction="column"
              justify="center"
              alignItems="center"
              alignContent="center"
              wrap="nowrap"
            >
              {people.map((person) => (
                <SingleList increase={increase} key={person.uuid} person={person} />
              ))}
            </Grid>
          )
        })

        export default BigList
        ```

- custom hooks
    - useFetch

        ```jsx
        import Axios from 'axios'
        import { useCallback, useEffect, useState } from 'react'

        interface IUseFetch<Type> {
          loading: boolean
          data: Type
        }

        export const useFetch = <T>(URL: string): IUseFetch<T> => {
          const [loading, setLoading] = useState(true)
          const [data, setData] = useState<T>({} as T)

          const fetchData = useCallback(async () => {
            const response = await Axios.get<T>(URL)
            setData(response.data)
            setLoading(false)
          }, [URL])

          useEffect(() => {
            fetchData()
            return () => {
              return
            }
          }, [fetchData])

          return { loading, data }
        }
        ```
