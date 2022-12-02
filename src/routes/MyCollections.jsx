import { Wrapper, Container, TopBar, Box } from "./Main";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";
import { Icon } from "./Projects";

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
  // 로컬스토리지에서 저장된 인덱스 받아오기.
  let myCollections = [];
  const savedMyCollections = localStorage.getItem("myCollection");
  const parsedMyCollections = JSON.parse(savedMyCollections);
  const projectNum = localStorage.getItem("projectNum") - 1;

  myCollections = parsedMyCollections;

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="/">{Icon}</Link>
          </span>
          <span className="header">My Collections</span>
        </TopBar>
        <Box>
          {myCollections?.map((imgId, index) => (
            <Img key={index}>
              <Link className="collection" to={`/mycollections/${imgId}`}>
                <img src={data[projectNum].imgs[imgId]}></img>
                <div className="text">
                  <span className="title">
                    {data[projectNum].metas[imgId]["title"]}
                  </span>
                </div>
                <div className="arrow">
                  <span>👉</span>
                </div>
              </Link>
            </Img>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default MyCollections;
