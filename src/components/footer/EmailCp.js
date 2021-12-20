import React, { useCallback, useRef } from 'react';
import styled, { color } from '../../style';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@mui/styles';
import { emailApi } from '../../modules/api';

const Wrapper = styled.div`
  display: flex;
  margin: 1.5em 0;
`;

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFilledInput-root': {
      background: '#fff',
    },
    marginRight: '0.5em',
  },
}));

const EmailCp = () => {
  const classes = useStyles();
  const emailRef = useRef(null);
  const onSubmit = useCallback(async () => {
    const email = emailRef.current.value.trim();
    if (email === '') {
      alert('Enter Your Email!');
      emailRef.current.focus();
      return false;
    }
    const result = await emailApi(email);
    console.log(result);
  }, [emailRef]);
  return (
    <Wrapper>
      <TextField
        required
        className={classes.root}
        id="outlined-required"
        label="enter your email address"
        variant="filled"
        color="success"
        inputRef={emailRef}
      />
      <Button variant="contained" color="warning" onClick={onSubmit}>
        SUBMIT
      </Button>
    </Wrapper>
  );
};

export default React.memo(EmailCp);
