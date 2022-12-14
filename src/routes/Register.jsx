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
import { Icon } from "./Projects";
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
      <Helmet>
        <title>Register</title>
      </Helmet>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="/login">{Icon}</Link>
          </span>
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
                placeholder="6?????? ?????? ??????????????????"
              />
            </div>
            <div className="errorBox" style={{}}>
              {error && console.log(error)}
              {error === "auth/invalid-email" && "????????? ????????? ????????????."}
              {error === "auth/email-already-in-use" && "?????? ???????????? ?????????"}
              {error === "auth/internal-error" &&
                "?????? ??????. ?????? ???????????????????"}
              {error === "auth/weak-password" && "???????????? 6?????? ??????"}
              {error === "auth/too-many-requests" &&
                "?????? ?????? ?????????.   ?????? ??? ????????????."}
            </div>
            <div>
              <Button type="submit">????????????</Button>
            </div>
            <div>
              <Link to="/login">?????? ???????????? ?????????... </Link>
            </div>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Register;
