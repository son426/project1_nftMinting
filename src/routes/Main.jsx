import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import data from "../data.json";
export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 375px;
  height: 812px;
  position: relative;
  border: 1px black solid;
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
  display: flex;
  position: relative;
  margin-top: 20px;
  border-top: 5px solid black;
  position: absolute;
  left: 40px;
  font-size: 25px;
  width: 80%;
  justify-content: center;
  .header {
    font-weight: 600;
    font-size: 22px;
    margin-top: 10px;
  }
`;

export const Box = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 120px;
`;

const Button = styled.button`
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
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Main;
