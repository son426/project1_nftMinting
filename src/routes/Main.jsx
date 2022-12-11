import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import React from "react";
import { getAuth, signOut } from "firebase/auth";
import { Icon } from "./Projects";

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

  font-size: 25px;
  width: 100%;
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

function Main() {
  const onClickSignOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        console.log("sign-out 성공");
        // Sign-out successful.
      })
      .catch((error) => {
        console.log("sign-out 실패");
        // An error happened.
      });
  };

  return (
    <Wrapper>
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
          <span
            onClick={onClickSignOut}
            className="back"
            style={{
              fontSize: "15px",
              fontWeight: 600,
            }}
          >
            로그아웃
          </span>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Main;
