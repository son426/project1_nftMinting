import { Wrapper, Container, TopBar, Box } from "./Main";
import { useParams, Link } from "react-router-dom";
import data from "../data.json";
import styled from "styled-components";
import { accentColor, bgColor } from "../style";

const ImgDetail = styled.div`
  display: flex;
  justify-content: center;
  img {
    width: 300px;
    height: 300px;
  }
`;

const Button = styled.button`
  border: transparent;
  border-radius: 5px;
  background-color: ${accentColor};
  color: white;
  font-size: 20px;
  position: absolute;
  bottom: 10%;
  left: 10%;
  display: block;
  width: 80%;
  height: 8%;
  margin-bottom: 20px;
  a {
    padding: 20px 40px;
  }
`;

const Meta = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px;
  gap: 20px;
  .title {
    font-size: 40px;
    font-weight: 600;
  }
  .seller {
    font-size: 30px;
    font-weight: 400;
  }
`;

function MyCollection() {
  const { imgId } = useParams();
  const projectNum = localStorage.getItem("projectNum") - 1;

  // const onClickBtn = () => {
  //   // localStorage.setItem("minting", imgId);
  //   // 기존 로컬스토리지에서 인덱스 받아와서, 거기다 새로운거 추가후 다시 로컬스토리지 set
  //   const savedImgIds = localStorage.getItem("imgIds");
  //   const parsedImgIds = JSON.parse(savedImgIds);

  //   if (parsedImgIds === null) {
  //     let imgIds = [];
  //     imgIds.push(imgId);
  //     localStorage.setItem("imgIds", JSON.stringify(imgIds));
  //   } else {
  //     let imgIds = parsedImgIds;
  //     imgIds.push(imgId);
  //     localStorage.setItem("imgIds", JSON.stringify(imgIds));
  //   }
  // };

  // console.log(data);
  // console.log(imgId);
  // console.log(data[imgId - 1]);

  return (
    <Wrapper>
      <Container>
        <TopBar>
          <span className="back">
            <Link to={`/mycollection`}>👈</Link>
          </span>
          <span className="header">Collection</span>
        </TopBar>
        <Box>
          <ImgDetail>
            <img src={data[projectNum].imgs[imgId]} />
          </ImgDetail>
          <Meta>
            <span className="title">{data[projectNum].metas[imgId].title}</span>
            <span className="content">
              {data[projectNum].metas[imgId].content}
            </span>
          </Meta>
        </Box>
      </Container>
    </Wrapper>
  );
}

export default MyCollection;
