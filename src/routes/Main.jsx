import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import { db, firebaseApp, auth } from "../firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  width: 375px;
  min-height: 812px;
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

const querySnapshot = await getDocs(collection(db, "board"));
/* cities라는 컬렉션의 모든 문서를 담는 변수 */
querySnapshot.forEach((doc) => {
  // doc.data() is never undefined for query doc snapshots
  console.log(doc.id, " => ", doc.data());
  /* 이 부분에서 console.log 대신 setState()를 이용해 원하는 변수에 담아주면 된다. */
});

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
