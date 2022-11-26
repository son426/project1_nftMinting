import { Wrapper, Container } from "./Main";
import {
  publicMint,
  cntBlockNumber,
  connect,
  check_status,
} from "../mintScript";
import styled from "styled-components";

const Box = styled.div`
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

    return;
  };

  return (
    <Wrapper>
      <Container>
        <Box>
          <p id="blockNubmer">현재 블록: #00000000</p>
          {/* <p id="mintStartBlockNumber">민팅 시작 블록: #00000000</p> */}
          <p id="mintPrice">민팅 가격: 0 KLAY</p>
          <p id="mintLimitPerBlock">트랜잭션당 최대 수량: 0개</p>
          <a href="https://scope.klaytn.com/">
            현재 블록넘버 확인하기1(Klaytnscope)
          </a>
        </Box>
        <Box>
          <h2>MY WALLET</h2>
          <p id="myWallet">지갑주소: 연결되지 않음</p>
          <p id="myKlay">잔액: 연결되지 않음</p>
          <button onClick={connect}>지갑 연결하기</button>
          <hr />
        </Box>
        <Box>
          <h2>MINT</h2>
          <p id="mintCnt">0 / 0</p>
          <label htmlFor="amount">민팅 수량</label>
          <button onClick={onClickMint}>민팅하기</button>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Minting;
