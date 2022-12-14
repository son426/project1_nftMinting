import { Wrapper, Container, TopBar, Box, Button } from "./Main";
import {
  publicMint,
  cntBlockNumber,
  connect,
  check_status,
} from "../mintScript";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { accentColor, bgColor } from "../style";
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
import { Helmet } from "react-helmet";

const BoxCustom = styled(Box)`
  margin-bottom: 30px;
`;

// imgIndex를 지갑 연결했을 때, 현재 민팅수량으로 받아와야함.
let imgIndex = localStorage.getItem("mintIndex");

const saveImgIds = () => {
  const minting = JSON.parse(localStorage.getItem("minting"));
  const savedImgIds = localStorage.getItem("myCollection");
  const parsedImgIds = JSON.parse(savedImgIds);

  if (parsedImgIds === null) {
    let imgIds = [];
    imgIds.push(imgIndex);
    localStorage.setItem("myCollection", JSON.stringify(imgIds));
  } else {
    let imgIds = parsedImgIds;
    imgIds.push(imgIndex);
    localStorage.setItem("myCollection", JSON.stringify(imgIds));
  }
};

function Minting() {
  const [projectNum, setProjectNum] = useState(
    localStorage.getItem("projectNum")
  );
  const [imgId, setImgId] = useState(localStorage.getItem("imgId"));
  const [myCollection, setMyCollection] = useState([]);
  const myCollectionRef = collection(db, "myCollection");

  const uniqueId = useId();

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

  const createMyCollection = async () => {
    // addDoc을 이용해서 내가 원하는 collection에 내가 원하는 key로 값을 추가한다.
    await addDoc(myCollectionRef, {
      projectNum: parseInt(projectNum),
      imgId: parseInt(imgId),
    });
  };

  const 로컬스토리지가져와서넘기기 = () => {
    const minting = JSON.parse(localStorage.getItem("minting"));
    if (minting) {
      createMyCollection();
    }
  };

  const 버튼수정 = () => {
    document.getElementById("connectButton").innerHTML = "완료 V";
    document.getElementById("connectButton").style.backgroundColor = "white";
    document.getElementById("connectButton").style.color = accentColor;
    document.getElementById("connectButton").style.fontWeight = "600";
  };

  /////// 위는 파이어베이스
  /////// 아래는 기존 코드

  const onClickMint = () => {
    // 이거 어떻게 바꾸지.
    // 민팅 성공일때만 하는 코드
    // async,await // promise 등 공부필요
    (async () => {
      await publicMint();
      // await saveImgIds();
      await 로컬스토리지가져와서넘기기();
    })();
  };

  const onClickConnect = (e) => {
    (async () => {
      await connect();
      await 버튼수정();
    })();

    // 커넥트가 완료됐을 경우만 완료뜨는 코드 추가해야함.
  };

  return (
    <Wrapper>
      <Helmet>
        <title>Minting</title>
      </Helmet>
      <Container>
        <TopBar>
          <span className="back">
            <Link to={`/projects/${projectNum}`}>{Icon}</Link>
          </span>
          <span className="header">Minting</span>
        </TopBar>
        <BoxCustom>
          <Button id="connectButton" onClick={onClickConnect}>
            지갑 연결하기
          </Button>
          <Button onClick={onClickMint}>기부하기</Button>
          <div style={{ marginBottom: "20px" }}>
            <Link style={{ fontSize: "20px" }} to="/mycollections">
              마이컬렉션
            </Link>
          </div>
          <div
            style={{
              paddingTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <p id="blockNubmer">현재 블록: #00000000</p>
            <p id="mintStartBlockNumber">민팅 시작 블록: #00000000</p>
            <p id="mintPrice">민팅 가격: 0 KLAY</p>
            <p id="mintLimitPerBlock">트랜잭션당 최대 수량: 0개</p>
            <a href="https://scope.klaytn.com/">
              현재 블록넘버 확인하기1(Klaytnscope)
            </a>
          </div>
          <div
            style={{
              width: "73%",
              paddingTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <h2
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              MY WALLET
            </h2>
            <p id="myWallet">지갑주소: 연결되지 않음</p>
            <p id="myKlay">잔액: 연결되지 않음</p>
          </div>
          <div
            style={{
              width: "73%",
              paddingTop: "25px",
              display: "flex",
              flexDirection: "column",
              alignItems: "baseline",
            }}
          >
            <h2
              style={{
                fontSize: "25px",
                fontWeight: "600",
                marginBottom: "10px",
              }}
            >
              MINT
            </h2>
            <p id="mintCnt">0 / 0</p>
            <label id="amount" htmlFor="amount">
              민팅 수량
            </label>
          </div>
        </BoxCustom>
      </Container>
    </Wrapper>
  );
}

export default Minting;
