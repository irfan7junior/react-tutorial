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
