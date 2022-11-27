import { Wrapper, Container, TopBar } from "./Main";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

const Box = styled.div`
  padding: 20px;
  display: grid;
  grid-template-columns: auto;
  grid-template-rows: auto;
  .box__link {
    width: 100%;
    display: flex;
    align-items: center;
  }
  .box__link .img__title {
    margin-left: 5%;
  }
  .box__link .img__go {
    margin-left: 35%;
  }
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
          {data.map((data) => (
            <Img key={data.id}>
              <Link className="box__link" to={`/collections/${data.id}`}>
                <img src={data.img_src}></img>
                <span className="img__title">{data.title}</span>
                <span className="img__go">👉</span>
              </Link>
            </Img>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default Collections;
