import styled from "styled-components";
import { accentColor, bgColor } from "../style";
import { Link } from "react-router-dom";
import {
  db,
  getFirestore,
  collection,
  getDocs,
  query,
  where,
  orderBy,
} from "../firebase";

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
  }
`;

export const Box = styled.div`
  height: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;

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
  // 파이어베이스

  // 값 추가하기

  db.collection("cities")
    .add({
      name: "Tokyo",
      country: "Japan",
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });

  // 값 가져오기
  const q = query(collection(db, "board"));
  getDocs(q).then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
      console.log(doc);
      // let data = doc.data(); //저장된 데이터
      // let id = doc.id; //고유 아이디
      // console.log(data);
    });
  });

  // 값 수정하기

  // 값 삭제하기

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
