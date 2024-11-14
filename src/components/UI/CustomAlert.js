import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

const CustomAlert = ({ open, onClose, severity, message, duration = 2200  , position = "right"}) => {
  return (
    <Snackbar
      open={open}
      autoHideDuration={duration}
      onClose={onClose}
      anchorOrigin={{ vertical: "bottom", horizontal: `${position}` }}
    >
      <Alert onClose={onClose} severity={severity} variant="filled" sx={{ width: '100%' , height:"100%" }}>
        {message}
      </Alert>
    </Snackbar>
  );
};

export default CustomAlert;
