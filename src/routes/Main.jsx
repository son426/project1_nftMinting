import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 375px;
  min-height: 812px;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 50px;
    font-weight: 600;
  }
`;

export const TopBar = styled.div`
  height: 50px;
  color: black;
  position: relative;
  margin-top: 20px;
  border-top: 5px solid black;
  position: absolute;
  left: 40px;
  font-size: 25px;
  width: 80%;
  display: flex;
  .header {
    font-weight: 600;
    font-size: 22px;
    margin-top: 10px;
    width: 100%;
    text-align: center;
  }
  .back {
    position: absolute;
    left: 0;
    display: flex;
    align-items: center;
  }
  .icon {
    position: absolute;
    top: 8px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 25px;
  }
`;

export const Box = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  position: absolute;
  top: 120px;
`;

export const Button = styled.button`
  border: transparent;
  border-radius: 5px;
  background-color: ${accentColor};
  color: white;
  font-size: 20px;
  display: block;
  height: 8%;
  margin-bottom: 20px;
  a {
    padding: 20px 40px;
  }
`;

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

// function Login() {
//   const auth = getAuth();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();
//   const [errorFromSubmit, setErrorFromSubmit] = useState("");
//   const [loading, setLoading] = useState(false);

//   const onSubmit = async (data) => {
//     try {
//       setLoading(true);

//       await signInWithEmailAndPassword(auth, data.email, data.password);

//       setLoading(false);
//     } catch (error) {
//       setErrorFromSubmit(error.message);
//       setLoading(false);
//       setTimeout(() => {
//         setErrorFromSubmit("");
//       }, 5000);
//     }
//   };

//   return (
//     <Wrapper>
//       <Container>
//         <TopBar>
//           <span className="header">Login</span>
//         </TopBar>
//         <Box>
//           <Form onSubmit={handleSubmit(onSubmit)}>
//             <div>
//               <label>Email</label>
//               <input
//                 name="email"
//                 type="email"
//                 {...register("email", {
//                   required: true,
//                   pattern: /^\S+@\S+$/i,
//                 })}
//               />
//               {errors.email && <p>This email field is required</p>}
//             </div>
//             <div>
//               <label>Password</label>
//               <input
//                 name="password"
//                 type="password"
//                 {...register("password", { required: true, minLength: 6 })}
//               />
//             </div>
//             <div>
//               <Button type="submit" disabled={loading}>
//                 로그인
//               </Button>
//             </div>
//             <div>
//               {errors.password && errors.password.type === "required" && (
//                 <p>This password field is required</p>
//               )}
//               {errors.password && errors.password.type === "minLength" && (
//                 <p>Password must have at least 6 characters</p>
//               )}

//               {errorFromSubmit && <p>{errorFromSubmit}</p>}

//               <Link to="/register">회원가입 </Link>
//               <Link to="/">홈으로 </Link>
//             </div>
//           </Form>
//         </Box>
//       </Container>
//     </Wrapper>
//   );
// }

function Main() {
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
      {loading === false ? (
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
              <div>
                <Button type="submit" disabled={loading}>
                  로그인
                </Button>
              </div>
              <div>
                {errors.password && errors.password.type === "required" && (
                  <p>This password field is required</p>
                )}
                {errors.password && errors.password.type === "minLength" && (
                  <p>Password must have at least 6 characters</p>
                )}

                {errorFromSubmit && <p>{errorFromSubmit}</p>}

                <Link to="/register">회원가입 </Link>
                <Link to="/">홈으로 </Link>
              </div>
            </Form>
          </Box>
        </Container>
      ) : (
        <Container>
          <TopBar>
            <span className="header">Main</span>
          </TopBar>
          <Box>
            <Button>
              <Link to="./projects">Projects</Link>
            </Button>
            <Button>
              <Link to="./mycollections">MyPage</Link>
            </Button>
          </Box>
        </Container>
      )}
    </Wrapper>
  );
}

export default Main;
