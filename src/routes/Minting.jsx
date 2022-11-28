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

function Minting() {
  const onClickMint = () => {
    publicMint();

    // localStorage.setItem("minting", imgId);
    // 기존 로컬스토리지에서 인덱스 받아와서, 거기다 새로운거 추가후 다시 로컬스토리지 set
    const savedImgIds = localStorage.getItem("imgIds");
    const parsedImgIds = JSON.parse(savedImgIds);
    const currentImgId = localStorage.getItem("imgId");

    if (parsedImgIds === null) {
      let imgIds = [];
      imgIds.push(currentImgId);
      localStorage.setItem("imgIds", JSON.stringify(imgIds));
    } else {
      let imgIds = parsedImgIds;
      imgIds.push(currentImgId);
      localStorage.setItem("imgIds", JSON.stringify(imgIds));
    }
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
