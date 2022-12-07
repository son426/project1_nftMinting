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
  const auth = getAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      await signInWithEmailAndPassword(auth, data.email, data.password);

      setLoading(false);
    } catch (error) {
      setErrorFromSubmit(error.message);
      setLoading(false);
      setTimeout(() => {
        setErrorFromSubmit("");
      }, 5000);
    }
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="header">Login</span>
        </TopBar>
        <Box>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label>Email</label>
              <input
                name="email"
                type="email"
                {...register("email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              {errors.email && <p>This email field is required</p>}
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
            </div>

            {errors.password && errors.password.type === "required" && (
              <p>This password field is required</p>
            )}

            {errors.password && errors.password.type === "minLength" && (
              <p>Password must have at least 6 characters</p>
            )}

            {errorFromSubmit && <p>{errorFromSubmit}</p>}
            <div>
              <Button type="submit" disabled={loading}>
                로그인하기
              </Button>
            </div>
            <Link
              style={{ color: "gray", textDecoration: "none" }}
              to="/register"
            >
              아직 아이디가 없다면...{" "}
            </Link>
            <Link
              style={{
                color: "gray",
                textDecoration: "none",
                marginLeft: "150px",
              }}
              to="/"
            >
              HOME{" "}
            </Link>
          </Form>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Login;
