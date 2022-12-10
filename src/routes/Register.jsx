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
  .errorBox {
    color: tomato;
    height: 40px;
    display: flex;
    align-items: center;
  }
`;

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

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
        setError(errorCode);
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
              <input
                type="text"
                value={name}
                onChange={onChangeName}
                required
              />
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
                placeholder="6자리 이상 입력해주세요"
              />
            </div>
            <div className="errorBox" style={{}}>
              {error && console.log(error)}
              {error === "auth/invalid-email" && "아이디 입력바람."}
              {error === "auth/email-already-in-use" && "이미 사용중인 아이디"}
              {error === "auth/internal-error" &&
                "내부 에러. 비번 안쳤을때인가?"}
              {error === "auth/weak-password" && "비밀번호 6자리 이상"}
              {error === "auth/too-many-requests" &&
                "너무 많은 트래픽.   잠시 후 시도바람."}
            </div>
            <div>
              <Button type="submit">가입완료</Button>
            </div>
            <div>
              <Link to="/login">이미 아이디가 있다면... </Link>
            </div>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Register;
