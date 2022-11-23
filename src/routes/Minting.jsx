import { Wrapper, Container } from "./Main";
// import { publicMint, cntBlockNumber, connect, check_status } from "../script2";

function Minting() {
  const onClick = () => {};

  return (
    <Wrapper>
      <Container>
        <h1>민팅페이지</h1>
        <button onClick={onClick}>민팅하기</button>
      </Container>
    </Wrapper>
  );
}

export default Minting;
