import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'

enum ETitle {
  Random = 'Random Title',
  Hello = 'Hello Title',
}

type ITitle = ETitle.Hello | ETitle.Random

const Basic: React.FC = () => {
  const [title, setTitle] = useState<ITitle>(ETitle.Random)

  const onButtonClick = () => {
    if (title === ETitle.Hello) setTitle(ETitle.Random)
    else setTitle(ETitle.Hello)
  }

  return (
    <>
      <Typography variant="h4" color="secondary">
        {title}
      </Typography>
      <Button variant="contained" onClick={onButtonClick} color="primary">
        Change
      </Button>
    </>
  )
}

export default Basic
