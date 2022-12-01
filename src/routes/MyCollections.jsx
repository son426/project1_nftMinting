import { Wrapper, Container, TopBar, Box } from "./Main";
import { Link } from "react-router-dom";
import styled from "styled-components";
import data from "../data.json";

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

function MyCollections() {
  // 로컬스토리지에서 저장된 인덱스 받아오기.
  let imgIds = [];
  const savedImgIds = localStorage.getItem("myCollection");
  const parsedImgIds = JSON.parse(savedImgIds);
  const projectNum = localStorage.getItem("projectNum") - 1;

  imgIds = parsedImgIds;

  console.log(imgIds);

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to="/">👈</Link>
          </span>
          <span className="header">My Collections</span>
        </TopBar>
        <Box>
          {imgIds?.map((imgId, index) => (
            <Img key={index}>
              <Link to={`/mycollections/${imgId}`}>
                <img src={data[projectNum].imgs[imgId]}></img>
                <span className="img__title">
                  {data[projectNum].metas["title"]}
                </span>
                <span>👉</span>
              </Link>
            </Img>
          ))}
        </Box>
      </Container>
    </Wrapper>
  );
}

export default MyCollections;
