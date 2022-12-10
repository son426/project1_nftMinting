import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { Wrapper, Container, TopBar, Box, Button } from "./Main";

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

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onChangeEmail = (e) => {
    setEmail(e.currentTarget.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.currentTarget.value);
  };

  const onSubmitLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("로그인 성공");
        // Signed in
        const user = userCredential.user;
        // ...
      })
      .catch((error) => {
        console.log("로그인 실패");
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="header">Login</span>
        </TopBar>
        <Box>
          <Form onSubmit={onSubmitLogin}>
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
              <Link to="/register">회원가입</Link>
              <Link to="/">HOME</Link>
            </div>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Login;
