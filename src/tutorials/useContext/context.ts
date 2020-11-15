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
