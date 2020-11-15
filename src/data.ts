import faker from 'faker'

export type IFaker = {
  name: string
  uuid: string
  age: number
}

export const randomData = (size: number): IFaker[] => {
  const result: IFaker[] = []
  for (let i = 0; i < size; i++) {
    const item: IFaker = {
      name: faker.name.firstName() + ' ' + faker.name.lastName(),
      uuid: faker.random.uuid(),
      age: faker.random.number({
        max: 50,
        min: 15,
      }),
    }
    result.push(item)
  }
  return result
}
