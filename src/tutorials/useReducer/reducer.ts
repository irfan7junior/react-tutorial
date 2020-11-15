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
