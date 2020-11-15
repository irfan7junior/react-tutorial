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
