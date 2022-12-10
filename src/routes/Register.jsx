import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { getDatabase, ref, set } from "firebase/database";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { Wrapper, Container, TopBar, Box, Button } from "./Main";
import styled from "styled-components";

const Form = styled.form`
  div {
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
  }
  p {
    font-size: 13px;
    color: gray;
  }
  label {
    font-size: 16px;
    font-weight: 600;
  }
  Button {
    width: 100%;
  }
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };
  const onChangeName = (e) => {
    setName(e.currentTarget.value);
  };

  const onSubmitRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(auth.currentUser, {
          displayName: name,
        });
      })
      .catch((error) => {
        console.log("error");
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="header">Register</span>
        </TopBar>
        <Box>
          <Form onSubmit={onSubmitRegister}>
            <div>
              <label>Name</label>
              <input type="text" value={name} onChange={onChangeName} />
            </div>
            <div>
              <label>Email</label>
              <input type="email" value={email} onChange={onChangeEmail} />
            </div>
            <div>
              <label>Password</label>
              <input
                type="password"
                value={password}
                onChange={onChangePassword}
              />
            </div>
            <div>
              <Button type="submit">가입완료</Button>
            </div>
            <div>
              <Link to="/login">이미 아이디가 있다면... </Link>
              <Link to="/">HOME</Link>
            </div>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Register;
