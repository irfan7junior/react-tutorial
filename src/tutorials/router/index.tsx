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
