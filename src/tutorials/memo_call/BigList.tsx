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
