import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import OutlinedInput from '@mui/material/OutlinedInput';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';

type SignInProps = {
  open: boolean;
  handleClose: () => void;
  email: string;
  setEmail: (email: string) => void;
  password: string;
  setPassword: (password: string) => void;
  handleSignIn: () => void;
}

function SignIn({ open, handleClose, email, setEmail, password, setPassword, handleSignIn }: SignInProps) {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      PaperProps={{
        component: 'form',
        onSubmit: (event) => {
          event.preventDefault();
          handleSignIn();
        },
        sx: { backgroundImage: 'none' },
      }}
    >
      <DialogTitle>Sign In</DialogTitle>
      <DialogContent
        sx={{ display: 'flex', flexDirection: 'column', gap: 2, width: '100%' }}
      >
        <DialogContentText>
          Enter your account's email address and password to sign in.
        </DialogContentText>
        <OutlinedInput
          autoFocus
          required
          margin="dense"
          id="email"
          name="email"
          label="Email address"
          placeholder="Email address"
          type="email"
          fullWidth
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <OutlinedInput
          required
          margin="dense"
          id="password"
          name="password"
          label="Password"
          placeholder="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </DialogContent>
      <DialogActions sx={{ pb: 3, px: 3 }}>
        <Button onClick={handleClose}>Cancel</Button>
        <Button variant="contained" type="submit">
          Sign In
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default SignIn;