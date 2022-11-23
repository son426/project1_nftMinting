import { Wrapper, Container, TopBar } from "./Main";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const Box = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
`;

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
`;

function Collections() {
  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="../">👈</Link>
          </span>
          <span className="header">Collections</span>
        </TopBar>
        <Box>
          {data.map(
            (data) => (
              <Img key={data.id}>
                <Link to={`/collections/${data.id}`}>
                  <img src={data.img_src}></img>
                  <span className="img__title">{data.title}</span>
                  <span>👉</span>
                </Link>
              </Img>
            )
            // <Img key={data.id}>
            //   <img src={data.img_src} />
            // </Img>
          )}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Collections;
