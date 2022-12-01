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

const BoxCustom = styled(Box)`
  margin-bottom: 30px;
`;

let imgIndex = 0;

const saveImgIds = () => {
  const minting = JSON.parse(localStorage.getItem("minting"));
  const savedImgIds = localStorage.getItem("imgIds");
  const parsedImgIds = JSON.parse(savedImgIds);

  if (minting === true) {
    if (parsedImgIds === null) {
      let imgIds = [];
      imgIds.push(imgIndex);
      localStorage.setItem("myCollection", JSON.stringify(imgIds));
    } else {
      let imgIds = parsedImgIds;
      imgIds.push(imgIndex);
      localStorage.setItem("myCollection", JSON.stringify(imgIds));
    }

    console.log("이미지저장 성공");
    console.log(`기존 imgIndex : ${imgIndex}`);
    imgIndex++;
    console.log(`증가 imgIndex : ${imgIndex}`);
  } else {
    console.log("이미지저장 실패");
    console.log(`기존 imgIndex : ${imgIndex}`);
    imgIndex++;
    console.log(`증가 imgIndex : ${imgIndex}`);
  }
};

function Minting() {
  const onClickMint = () => {
    // 이거 어떻게 바꾸지.
    // 민팅 성공일때만 하는 코드
    // async,await // promise 등 공부필요
    publicMint();
    setTimeout(saveImgIds, 7000);
  };

  const onClickConnect = (e) => {
    connect();
    // 커넥트가 완료됐을 경우만 완료뜨는 코드 추가해야함.
    console.log(e.currentTarget);
    e.currentTarget.innerHTML = "완료 V";
    e.currentTarget.style.backgroundColor = "white";
    e.currentTarget.style.color = accentColor;
    e.currentTarget.style.fontWeight = "600";
  };

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="./">👈</Link>
          </span>
          <span className="header">Minting</span>
        </TopBar>
        <BoxCustom>
          <Button onClick={onClickConnect}>지갑 연결하기</Button>
          <Button onClick={onClickMint}>기부하기</Button>
          <div>
            <p id="blockNubmer">현재 블록: #00000000</p>
            <p id="mintStartBlockNumber">민팅 시작 블록: #00000000</p>
            <p id="mintPrice">민팅 가격: 0 KLAY</p>
            <p id="mintLimitPerBlock">트랜잭션당 최대 수량: 0개</p>
            <a href="https://scope.klaytn.com/">
              현재 블록넘버 확인하기1(Klaytnscope)
            </a>
          </div>
          <div>
            <h2>MY WALLET</h2>
            <p id="myWallet">지갑주소: 연결되지 않음</p>
            <p id="myKlay">잔액: 연결되지 않음</p>

            <hr />
          </div>
          <div>
            <h2>MINT</h2>
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
