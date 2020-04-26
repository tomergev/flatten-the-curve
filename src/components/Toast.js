import React from 'react'
import { Snackbar } from '@material-ui/core'
import MuiAlert from '@material-ui/lab/Alert'

export default function Toast(props) {
  const {
    autoHideDuration = 4500,
    anchorOrigin = { vertical: 'bottom', horizontal: 'right' },
    onClose = () => {},
    open = false,
    severity = 'success', // Possible severity types: error, warning, info, & success
  } = props

  function Alert(alertProps) {
    return <MuiAlert elevation={6} variant="filled" {...alertProps} />
  }

  return (
    <Snackbar
      autoHideDuration={autoHideDuration}
      anchorOrigin={anchorOrigin}
      onClose={onClose}
      open={open}
    >
      <Alert severity={severity}>
          Local graph is saved!
      </Alert>
    </Snackbar>
  )
}