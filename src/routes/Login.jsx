import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import styled from "styled-components";
import { Wrapper, Container, TopBar, Box, Button } from "./Main";
import { Helmet } from "react-helmet";

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
  .errorBox {
    color: tomato;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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
        setError(errorCode);
      });
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Login</title>
      </Helmet>
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
            <div className="errorBox" style={{}}>
              {error && console.log(error)}
              {error === "auth/invalid-email" && "아이디 똑바로 입력바람."}
              {error === "auth/user-not-found" && "해당 아이디 없음"}
              {error === "auth/auth/internal-error" &&
                "내부 에러. 비번 안쳤을때인가"}
              {error === "auth/wrong-password" && "잘못된 비밀번호"}
              {error === "auth/too-many-requests" &&
                "너무 많은 트래픽.   잠시 후 시도바람."}
            </div>
            <div>
              <Button type="submit">로그인하기</Button>
            </div>
            <div>
              <Link to="/register">회원가입</Link>
            </div>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Login;
