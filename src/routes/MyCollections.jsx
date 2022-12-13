import { Wrapper, Container, TopBar, Box } from "./Main";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import { Icon } from "./Projects";
import { useState, useEffect, useId } from "react";
// 파이어베이서 파일에서 import 해온 db
import { db } from "../firebase";
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  doc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Img = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 10px 0px;
  border-bottom: 1px solid black;
  .img__title {
    font-size: 20px;
    font-weight: 600;
  }
  img {
    width: 100px;
    height: 100px;
  }
  .collection {
    display: flex;
    align-items: center;
    width: 300px;
    position: relative;
    .text {
      position: absolute;
      left: 110px;
      font-weight: 600;
      font-size: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: baseline;
    }
    .arrow {
      position: absolute;
      right: 0;
      display: flex;
      align-items: center;
    }
  }
`;

function MyCollections() {
  const [myCollection, setMyCollection] = useState([]);
  const myCollectionRef = collection(db, "myCollection");
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    // 비동기로 데이터 받을준비
    const getMyCollection = async () => {
      // getDocs로 컬렉션안에 데이터 가져오기
      const data = await getDocs(myCollectionRef);
      // users에 data안의 자료 추가. 객체에 id 덮어씌우는거
      setMyCollection(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getMyCollection();
  }, []);

  const showMyCollection = myCollection?.map((value, index) => (
    <div key={index}>
      <Img>
        <Link className="collection" to={`/mycollections/${value.imgId}`}>
          <img src={data[value.projectNum - 1]?.imgs[value.imgId]}></img>
          <div className="text">
            <span className="title">
              {data[value.projectNum - 1]?.metas[value.imgId]["title"]}
            </span>
          </div>
          <div className="arrow">
            <span>👉</span>
          </div>
        </Link>
      </Img>
    </div>
  ));

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="/">{Icon}</Link>
          </span>
          <span className="header">{user.displayName} Collection</span>
        </TopBar>
        <Box>{showMyCollection}</Box>
      </Container>
    </Wrapper>
  );
}

export default MyCollections;
