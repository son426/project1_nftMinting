import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import md5 from "md5";
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
  const {
    register,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [errorFromSubmit, setErrorFromSubmit] = useState("");
  const [loading, setLoading] = useState(false);

  const password = useRef();
  password.current = watch("password");

  const onSubmit = async (data) => {
    try {
      setLoading(true);

      const auth = getAuth();
      let createdUser = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.password
      );

      await updateProfile(auth.currentUser, {
        displayName: data.name,
        photoURL: `http://gravatar.com/avatar/${md5(
          createdUser.user.email
        )}?d=identicon`,
      });

      //Firebase 데이터베이스에 저장해주기
      set(ref(getDatabase(), `users/${createdUser.user.uid}`), {
        name: createdUser.user.displayName,
        image: createdUser.user.photoURL,
      });

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
          <span className="header">Register</span>
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
              <label>Name</label>
              <input
                name="name"
                {...register("name", { required: true, maxLength: 10 })}
              />
              {errors.name && errors.name.type === "required" && (
                <p>This name field is required</p>
              )}
              {errors.name && errors.name.type === "maxLength" && (
                <p>Your input exceed maximum length</p>
              )}
            </div>
            <div>
              <label>Password</label>
              <input
                name="password"
                type="password"
                {...register("password", { required: true, minLength: 6 })}
              />
              {errors.password && errors.password.type === "required" && (
                <p>This password field is required</p>
              )}
              {errors.password && errors.password.type === "minLength" && (
                <p>Password must have at least 6 characters</p>
              )}
            </div>
            <div>
              <label>Password Confirm</label>
              <input
                name="password_confirm"
                type="password"
                {...register("password_confirm", {
                  required: true,
                  validate: (value) => value === password.current,
                })}
              />
            </div>
            <div>
              {errors.password_confirm &&
                errors.password_confirm.type === "required" && (
                  <p>This password confirm field is required</p>
                )}
              {errors.password_confirm &&
                errors.password_confirm.type === "validate" && (
                  <p>The passwords do not match</p>
                )}

              {errorFromSubmit && <p>{errorFromSubmit}</p>}

              <Button type="submit" disabled={loading}>
                가입완료
              </Button>
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
