import React from 'react'
import { Paper, Typography } from '@material-ui/core'
import { useFetch } from './useFetch'

interface IUser {
  id: number
  login: string
  url: string
  avatar_url: string
}

const URL = 'https://api.github.com/users'

const CustomHook: React.FC = () => {
  const { loading, data } = useFetch<IUser[]>(URL)
  console.log(data[0])
  return (
    <Paper style={{ height: '100%', width: '100%' }}>
      <Typography align="center" variant="h3" color="secondary">
        {loading && `Loading`}
      </Typography>
    </Paper>
  )
}

export default CustomHook
